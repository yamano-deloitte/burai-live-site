/**
 * Supabase Sign Up functionality
 */

let supabaseClient = null;

// Initialize Supabase client
async function initSignup() {
  supabaseClient = window.getSupabaseClient ? window.getSupabaseClient() : null;
  return supabaseClient;
}

// Sign up function
async function signup(email, password) {
  await initSignup();
  
  if (supabaseClient && window.isSupabaseConfigured()) {
    // Use Supabase authentication
    // nameをuser_metadataに追加
    const name = arguments[2];
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: window.location.origin + '/members/',
        data: { name: name }
      }
    });
    
    if (error) {
      console.error('Supabase signup error:', error);
      return { success: false, error: error.message };
    }
    
    // Check if email confirmation is required
    if (data.user && !data.session) {
      return { 
        success: true, 
        emailConfirmationRequired: true,
        message: 'Please check your email to confirm your account'
      };
    }
    
    return { success: true, user: data.user };
  }
  
  // Fallback to demo mode (localStorage)
  const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
  if (existingUsers[email]) {
    return { success: false, error: 'Email already registered' };
  }
  
  existingUsers[email] = {
    password: password,
    registeredAt: new Date().toISOString()
  };
  
  localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
  return { success: true, demo: true };
}

// Handle signup form submission
if (document.getElementById('signup-form')) {
  document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const passwordConfirm = document.getElementById('signup-password-confirm').value;
    const submitButton = e.target.querySelector('button[type="submit"]');
    

    // Validation
    if (!name) {
      showMessage('❌ 氏名を入力してください / Please enter your name', 'error');
      return;
    }
    if (password !== passwordConfirm) {
      showMessage('❌ パスワードが一致しません / Passwords do not match', 'error');
      return;
    }
    if (password.length < 6) {
      showMessage('❌ パスワードは6文字以上である必要があります / Password must be at least 6 characters', 'error');
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('❌ 有効なメールアドレスを入力してください / Please enter a valid email address', 'error');
      return;
    }
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Creating account...';
    
    const result = await signup(email, password, name); // nameをuser_metadataに渡す
    
    if (result.success) {
      if (result.emailConfirmationRequired) {
        showMessage('✅ ' + result.message + ' / メールを確認して、アカウントを有効化してください', 'success');
        // Don't redirect, let user read the message
        submitButton.textContent = 'Check your email';
      } else if (result.demo) {
        showMessage('⚠️ Demo mode: Registration successful! Redirecting to signin...', 'success');
        setTimeout(() => {
          window.location.href = '/signin/';
        }, 1500);
      } else {
        showMessage('✅ Registration successful! Redirecting...', 'success');
        setTimeout(() => {
          window.location.href = '/members/';
        }, 1500);
      }
    } else {
      showMessage(`❌ ${result.error}`, 'error');
      submitButton.disabled = false;
      submitButton.textContent = 'Sign Up';
    }
  });
  
  // If already logged in, redirect
  if (typeof isLoggedIn === 'function') {
    isLoggedIn().then(loggedIn => {
      if (loggedIn) {
        window.location.href = '/members/';
      }
    });
  }
}

function showMessage(message, type) {
  const messageDiv = document.getElementById('signup-message');
  messageDiv.style.display = 'block';
  
  if (type === 'success') {
    messageDiv.style.backgroundColor = '#d4edda';
    messageDiv.style.color = '#155724';
    messageDiv.style.border = '1px solid #c3e6cb';
  } else {
    messageDiv.style.backgroundColor = '#f8d7da';
    messageDiv.style.color = '#721c24';
    messageDiv.style.border = '1px solid #f5c6cb';
  }
  
  messageDiv.textContent = message;
}
