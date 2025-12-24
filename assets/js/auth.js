/**
 * Supabase Authentication System for Jekyll Site
 * Using Supabase for secure, production-ready authentication
 */

// Demo users fallback (only used when Supabase is not configured)
const DEMO_USERS = {
  'demo@burai.live': 'demo123',
  'admin@burai.live': 'admin123'
};

// Initialize Supabase client
function initAuth() {
  const supabaseClient = window.getSupabaseClient ? window.getSupabaseClient() : null;
  return supabaseClient;
}

// Check if user is logged in
async function isLoggedIn() {
  const supabaseClient = initAuth();
  
  if (supabaseClient && window.isSupabaseConfigured()) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session !== null;
  }
  
  // Fallback to localStorage for demo mode
  return localStorage.getItem('isAuthenticated') === 'true';
}

// Get current user
async function getCurrentUser() {
  const supabaseClient = initAuth();
  
  if (supabaseClient && window.isSupabaseConfigured()) {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user ? user.email : null;
  }
  
  // Fallback to localStorage for demo mode
  return localStorage.getItem('currentUser');
}

// Signin function
async function signin(email, password) {
  const supabaseClient = initAuth();
  
  if (supabaseClient && window.isSupabaseConfigured()) {
    // Use Supabase authentication
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });
    if (error) {
      console.error('Supabase signin error:', error);
      return { success: false, error: error.message };
    }
    // Save login time to login_history table
    try {
      if (data.user && data.user.id) {
        await supabaseClient.from('login_history').insert([
          { user_id: data.user.id, login_time: new Date().toISOString() }
        ]);
      }
    } catch (e) {
      console.error('Failed to save login time:', e);
    }
    return { success: true, user: data.user };
  }
  
  // Fallback to demo mode
  if (DEMO_USERS[email] && DEMO_USERS[email] === password) {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', email);
    localStorage.setItem('signinTime', new Date().toISOString());
    return { success: true, demo: true };
  }
  
  return { success: false, error: 'Invalid credentials' };
}

// Logout function
async function logout() {
  const supabaseClient = initAuth();
  
  if (supabaseClient && window.isSupabaseConfigured()) {
    await supabaseClient.auth.signOut();
  }
  
  // Clear localStorage
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('signinTime');
  
  window.location.href = '/logout/';
}

// Handle signin form submission
if (document.getElementById('signin-form')) {
  document.getElementById('signin-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('signin-message');
    const submitButton = e.target.querySelector('button[type="submit"]');
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Signing in...';
    
    const result = await signin(email, password);
    
    if (result.success) {
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#d4edda';
      messageDiv.style.color = '#155724';
      messageDiv.style.border = '1px solid #c3e6cb';
      messageDiv.textContent = result.demo 
        ? '⚠️ Demo mode: Sign In successful! Redirecting...'
        : '✅ Sign In successful! Redirecting...';
      
      // Redirect to members area or home page
      const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/members/';
      console.log('Login successful, redirecting to:', redirectUrl);
      
      setTimeout(() => {
        console.log('Executing redirect to:', redirectUrl);
        window.location.href = redirectUrl;
      }, 1000);
    } else {
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.color = '#721c24';
      messageDiv.style.border = '1px solid #f5c6cb';
      messageDiv.textContent = `❌ ${result.error || 'Invalid email or password'}`;
      
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = 'Signin';
    }
  });
  
  // Check if already logged in and redirect
  isLoggedIn().then(loggedIn => {
    if (loggedIn) {
      window.location.href = '/members/';
    }
  });
}

// Update navigation based on login status
(async function updateAuthWidget() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAuthWidget);
    return;
  }
  
  const authWidget = document.getElementById('auth-widget');
  if (!authWidget) {
    console.log('Auth widget not found');
    return;
  }
  
  try {
    const loggedIn = await isLoggedIn();
    
    if (loggedIn) {
      const user = await getCurrentUser();
      authWidget.innerHTML = `
        <span style="margin-right: 10px; color: #333; font-size: 14px;">👤 ${user || 'User'}</span>
        <button onclick="logout()" style="padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
          Logout
        </button>
      `;
    } else {
      authWidget.innerHTML = `
        <a href="/signin/" style="padding: 6px 12px; background-color: #0366d6; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; display: inline-block;">
          Sign In
        </a>
      `;
    }
  } catch (error) {
    console.error('Error updating auth widget:', error);
    // Fallback to signin button
    authWidget.innerHTML = `
      <a href="/signin/" style="padding: 6px 12px; background-color: #0366d6; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; display: inline-block;">
        Sign In
      </a>
    `;
  }
})();
  
// パスワードリセット処理
if (document.getElementById('forgot-password-form')) {
  document.getElementById('forgot-password-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;
    const messageDiv = document.getElementById('forgot-password-message');
    messageDiv.textContent = '';
    messageDiv.style.color = '#0b3d91';
    // Supabase利用時
    const supabaseClient = initAuth();
    if (supabaseClient && window.isSupabaseConfigured()) {
      const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password/'
      });
      if (error) {
        messageDiv.textContent = 'エラー: ' + error.message;
        messageDiv.style.color = '#dc3545';
      } else {
        messageDiv.textContent = 'リセットリンクを送信しました。メールをご確認ください。';
        messageDiv.style.color = '#0b3d91';
      }
    } else {
      // デモモード
      messageDiv.textContent = 'デモモードではパスワードリセットは利用できません。';
      messageDiv.style.color = '#dc3545';
    }
  });
}