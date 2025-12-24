---
layout: default
title: Sign In
description: English login page
permalink: /en/signin/
---

<div class="signin-container" style="max-width: 400px; margin: 50px auto; padding: 20px;">
  <h1>Sign In</h1>
  
  <div id="signin-message" style="padding: 10px; margin-bottom: 15px; border-radius: 4px; display: none;"></div>
  
  <form id="signin-form" style="display: flex; flex-direction: column; gap: 15px;">
    <div>
      <label for="email" style="display: block; margin-bottom: 5px;">Email:</label>
      <input type="email" id="email" name="email" required 
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <div>
      <label for="password" style="display: block; margin-bottom: 5px;">Password:</label>
      <input type="password" id="password" name="password" required
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <button type="submit" style="padding: 10px 20px; background-color: #0b3d91; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
      Sign In
    </button>
      <div style="margin-top:10px; text-align:right;">
        <a href="javascript:void(0);" onclick="openForgotPasswordModal();" style="color:#0366d6; text-decoration:underline; font-size:13px;">Forgot your password?</a>
      </div>
  </form>
  
  <div style="margin-top: 20px; text-align: center; padding: 15px; background-color: #f6f8fa; border-radius: 4px;">
    <p style="margin: 0; font-size: 14px; color: #666;">
       Don't have an account?
    </p>
    <a href="/en/signup/" style="color: #0366d6; text-decoration: none; font-weight: 500;">
      Sign Up
    </a>
  </div>
  <div style="margin-top: 20px; padding: 15px; background-color: #f6f8fa; border-radius: 4px; font-size: 14px;">
    <p><strong>🎭 Demo Credentials (when Supabase not configured):</strong></p>
    <p>Email: demo@burai.live</p>
    <p>Password: demo123</p>
    <p style="color: #666; font-size: 12px; margin-top: 10px;">
      Note: Configure Supabase for production-grade authentication.<br>
      See <a href="https://github.com/tommyyama2020/burai-live-site/blob/demo/SUPABASE_SETUP.md" style="color: #0366d6;">SUPABASE_SETUP.md</a> for instructions.
    </p>
  {% include forgot-password-modal-en.html %}
  </div>
</div>

