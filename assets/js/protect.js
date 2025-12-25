/**
 * Page Protection Script with Supabase
 * Protects pages that require authentication
 */

(async function() {
  let supabaseClient = null;
  
  // Initialize Supabase client
  function initProtect() {
    supabaseClient = window.getSupabaseClient ? window.getSupabaseClient() : null;
    return supabaseClient;
  }
  
  // Check if user is logged in
  async function isLoggedIn() {
    initProtect();
    
    if (supabaseClient && window.isSupabaseConfigured()) {
      const { data: { session } } = await supabaseClient.auth.getSession();
      return session !== null;
    }
    
    // Fallback to localStorage for demo mode
    return localStorage.getItem('isAuthenticated') === 'true';
  }
  
  // Get current user
  async function getCurrentUser() {
    initProtect();
    
    if (supabaseClient && window.isSupabaseConfigured()) {
      const { data: { user } } = await supabaseClient.auth.getUser();
      return user;
    }
    
    // Fallback to localStorage for demo mode
    return {
      email: localStorage.getItem('currentUser'),
      created_at: localStorage.getItem('signinTime')
    };
  }
  
  // Show protected content or access denied message
  async function checkAccess() {
    const protectedContent = document.getElementById('protected-content');
    const accessDenied = document.getElementById('access-denied');
    
    if (!protectedContent || !accessDenied) {
      return; // Not a protected page
    }
    
    const loggedIn = await isLoggedIn();
    
    if (loggedIn) {
      // Show protected content
      protectedContent.style.display = 'block';
      accessDenied.style.display = 'none';
      
      // Populate user information
      const user = await getCurrentUser();
      const email = user?.email || user?.email || 'Unknown';
      
      const memberNameElements = document.querySelectorAll('#member-name, #member-name-en');
      memberNameElements.forEach(el => el.textContent = email);
      
      const accountUsername = document.getElementById('account-username');
      if (accountUsername) accountUsername.textContent = email;
      
      const loginTimeElement = document.getElementById('login-time');
      if (loginTimeElement) {
        const timestamp = user?.created_at || localStorage.getItem('signinTime');
        if (timestamp) {
          const date = new Date(timestamp);
          loginTimeElement.textContent = date.toLocaleString();
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
