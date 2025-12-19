/**
 * Simple Authentication System for Jekyll Site
 * Note: This is a client-side demo. For production, use proper authentication services.
 */

// Demo users (in production, this should be handled server-side)
const DEMO_USERS = {
  'demo': 'demo123',
  'admin': 'admin123'
};

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem('isAuthenticated') === 'true';
}

// Get current user
function getCurrentUser() {
  return localStorage.getItem('currentUser');
}

// Login function
function login(username, password) {
  // Check credentials (in production, this should be done server-side)
  if (DEMO_USERS[username] && DEMO_USERS[username] === password) {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', username);
    localStorage.setItem('loginTime', new Date().toISOString());
    return true;
  }
  return false;
}

// Logout function
function logout() {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('loginTime');
  window.location.href = '/';
}

// Handle login form submission
if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('login-message');
    
    if (login(username, password)) {
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#d4edda';
      messageDiv.style.color = '#155724';
      messageDiv.style.border = '1px solid #c3e6cb';
      messageDiv.textContent = 'ログイン成功！リダイレクト中... / Login successful! Redirecting...';
      
      // Redirect to members area or home page
      setTimeout(() => {
        const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/members/';
        window.location.href = redirectUrl;
      }, 1000);
    } else {
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.color = '#721c24';
      messageDiv.style.border = '1px solid #f5c6cb';
      messageDiv.textContent = '無効なユーザー名またはパスワード / Invalid username or password';
    }
  });
  
  // If already logged in, redirect
  if (isLoggedIn()) {
    window.location.href = '/members/';
  }
}

// Update navigation based on login status
document.addEventListener('DOMContentLoaded', function() {
  const authWidget = document.getElementById('auth-widget');
  if (!authWidget) return;
  
  if (isLoggedIn()) {
    authWidget.innerHTML = `
      <span style="margin-right: 10px; color: #333; font-size: 14px;">👤 ${getCurrentUser()}</span>
      <button onclick="logout()" style="padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
        Logout
      </button>
    `;
  } else {
    authWidget.innerHTML = `
      <a href="/login/" style="padding: 6px 12px; background-color: #0366d6; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; display: inline-block;">
        Login
      </a>
    `;
  }
});
