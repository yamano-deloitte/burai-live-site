/**
 * Page Protection Script
 * Protects pages that require authentication
 */

(function() {
  // Check if user is logged in
  function isLoggedIn() {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
  
  // Get current user
  function getCurrentUser() {
    return localStorage.getItem('currentUser');
  }
  
  // Get login time
  function getLoginTime() {
    return localStorage.getItem('loginTime');
  }
  
  // Show protected content or access denied message
  function checkAccess() {
    const protectedContent = document.getElementById('protected-content');
    const accessDenied = document.getElementById('access-denied');
    
    if (!protectedContent || !accessDenied) {
      return; // Not a protected page
    }
    
    if (isLoggedIn()) {
      // Show protected content
      protectedContent.style.display = 'block';
      accessDenied.style.display = 'none';
      
      // Populate user information
      const username = getCurrentUser();
      const loginTime = getLoginTime();
      
      const memberNameElements = document.querySelectorAll('#member-name, #member-name-en');
      memberNameElements.forEach(el => el.textContent = username);
      
      const accountUsername = document.getElementById('account-username');
      if (accountUsername) accountUsername.textContent = username;
      
      const loginTimeElement = document.getElementById('login-time');
      if (loginTimeElement && loginTime) {
        const date = new Date(loginTime);
        loginTimeElement.textContent = date.toLocaleString();
      }
      
      // Optional: Check session timeout (e.g., 24 hours)
      if (loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursSinceLogin = (now - loginDate) / (1000 * 60 * 60);
        
        if (hoursSinceLogin > 24) {
          // Session expired
          alert('Session expired. Please login again.');
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('currentUser');
          localStorage.removeItem('loginTime');
          window.location.href = '/login/?redirect=' + encodeURIComponent(window.location.pathname);
        }
      }
    } else {
      // Show access denied
      protectedContent.style.display = 'none';
      accessDenied.style.display = 'block';
    }
  }
  
  // Run check when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAccess);
  } else {
    checkAccess();
  }
})();
