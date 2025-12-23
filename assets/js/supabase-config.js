/**
 * Supabase Configuration
 * 
 * Setup Instructions:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Get your project URL and anon key from Settings > API
 * 3. Replace the values below with your actual credentials
 * 
 * For production, use environment variables or a build-time config system
 */

// Supabase project credentials
// IMPORTANT: Replace these with your actual Supabase project credentials
// Temporarily disabled for demo mode testing - remove comments to enable Supabase
const SUPABASE_URL = 'https://zncukzibpxdrzeafomlx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuY3VremlicHhkcnplYWZvbWx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NDI2NTEsImV4cCI6MjA4MjAxODY1MX0.ppTwUITd9o2ynFPOV2HlE3JaUWa2sNe66DcliMMfNa4';

// Initialize Supabase client
// This will be available globally after supabase-js library is loaded
let supabaseClient = null;

// Initialize the Supabase client
function initSupabase() {
  if (typeof supabase === 'undefined') {
    console.error('Supabase library not loaded. Make sure to include the CDN script.');
    return null;
  }
  
  if (!supabaseClient) {
    // Check if credentials are configured
    if (SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
      console.warn('⚠️ Supabase credentials not configured. Using demo mode.');
      console.warn('Please update SUPABASE_URL and SUPABASE_ANON_KEY in supabase-config.js');
      return null;
    }
    
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase client initialized');
  }
  
  return supabaseClient;
}

// Check if Supabase is properly configured
function isSupabaseConfigured() {
  return SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && 
         SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';
}

// Export for use in other scripts
window.getSupabaseClient = initSupabase;
window.isSupabaseConfigured = isSupabaseConfigured;
