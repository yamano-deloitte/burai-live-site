---
layout: default
title: Sign Up
permalink: /signup/
---

<div class="signup-container" style="max-width: 400px; margin: 50px auto; padding: 20px;">
  <h1>Sign Up</h1>
  
  <div id="signup-message" style="padding: 10px; margin-bottom: 15px; border-radius: 4px; display: none;"></div>
  
  <form id="signup-form" style="display: flex; flex-direction: column; gap: 15px;">
    <div>
      <label for="signup-username" style="display: block; margin-bottom: 5px;">ユーザー名 / Username:</label>
      <input type="text" id="signup-username" name="username" required 
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"
             minlength="3" maxlength="20">
      <small style="color: #666; font-size: 12px;">3-20 characters</small>
    </div>
    
    <div>
      <label for="signup-email" style="display: block; margin-bottom: 5px;">メールアドレス / Email:</label>
      <input type="email" id="signup-email" name="email" required 
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <div>
      <label for="signup-password" style="display: block; margin-bottom: 5px;">パスワード / Password:</label>
      <input type="password" id="signup-password" name="password" required
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"
             minlength="6">
      <small style="color: #666; font-size: 12px;">Minimum 6 characters</small>
    </div>
    
    <div>
      <label for="signup-password-confirm" style="display: block; margin-bottom: 5px;">パスワード確認 / Confirm Password:</label>
      <input type="password" id="signup-password-confirm" name="password-confirm" required
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <button type="submit" style="padding: 10px 20px; background-color: #0b3d91; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
     Sign Up
    </button>
  </form>
  
  <div style="margin-top: 20px; text-align: center; padding: 15px; background-color: #f6f8fa; border-radius: 4px;">
    <p style="margin: 0; font-size: 14px; color: #666;">
      Already have an account?
    </p>
    <a href="/signin/" style="color: #0366d6; text-decoration: none; font-weight: 500;">
       Signin
    </a>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; font-size: 14px;">
    <p style="margin: 0; color: #856404;">
      <strong>⚠️ 注意 / Note:</strong><br>
      これは基本的なデモ実装です。本番環境では適切な認証サービスを使用してください。<br>
      This is a basic demo implementation. Use proper authentication service in production.
    </p>
  </div>
</div>

<script src="/assets/js/auth.js"></script>
<script src="/assets/js/signup.js"></script>
