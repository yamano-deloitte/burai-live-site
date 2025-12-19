/**
 * Sign Up functionality
 */

// Handle signup form submission
if (document.getElementById('signup-form')) {
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const passwordConfirm = document.getElementById('signup-password-confirm').value;
    const messageDiv = document.getElementById('signup-message');
    
    // Validation
    if (password !== passwordConfirm) {
      showMessage('パスワードが一致しません / Passwords do not match', 'error');
      return;
    }
    
    if (password.length < 6) {
      showMessage('パスワードは6文字以上である必要があります / Password must be at least 6 characters', 'error');
      return;
    }
    
    if (username.length < 3 || username.length > 20) {
      showMessage('ユーザー名は3〜20文字である必要があります / Username must be 3-20 characters', 'error');
      return;
    }
    
    // Check if username already exists
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (existingUsers[username]) {
      showMessage('このユーザー名は既に使用されています / Username already exists', 'error');
      return;
    }
    
    // Register new user
    existingUsers[username] = {
      password: password, // In production, this should be hashed
      email: email,
      registeredAt: new Date().toISOString()
    };
    
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    
    showMessage('Registration successful! Redirecting to login...', 'success');
    
    // Redirect to login page
    setTimeout(() => {
      window.location.href = '/login/';
    }, 1500);
  });
  
  // If already logged in, redirect
  if (localStorage.getItem('isAuthenticated') === 'true') {
    window.location.href = '/members/';
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
