---
layout: default
title: Signin
permalink: /signin/
---

<div class="signin-container" style="max-width: 400px; margin: 50px auto; padding: 20px;">
  <h1>Signin</h1>
  
  <div id="signin-message" style="padding: 10px; margin-bottom: 15px; border-radius: 4px; display: none;"></div>
  
  <form id="signin-form" style="display: flex; flex-direction: column; gap: 15px;">
    <div>
      <label for="username" style="display: block; margin-bottom: 5px;">Username:</label>
      <input type="text" id="username" name="username" required 
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <div>
      <label for="password" style="display: block; margin-bottom: 5px;">Password:</label>
      <input type="password" id="password" name="password" required
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <button type="submit" style="padding: 10px 20px; background-color: #0b3d91; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
      Signin
    </button>
  </form>
  
  <div style="margin-top: 20px; text-align: center; padding: 15px; background-color: #f6f8fa; border-radius: 4px;">
    <p style="margin: 0; font-size: 14px; color: #666;">
       Don't have an account?
    </p>
    <a href="/signup/" style="color: #0366d6; text-decoration: none; font-weight: 500;">
      Sign Up
    </a>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f6f8fa; border-radius: 4px; font-size: 14px;">
    <p><strong> Demo Credentials:</strong></p>
    <p>Username: demo</p>
    <p>Password: demo123</p>
    <p style="color: #666; font-size: 12px; margin-top: 10px;">
      注: これは基本的なデモ実装です。本番環境では適切な認証サービスを使用してください。<br>
      Note: This is a basic demo implementation. Use proper authentication service in production.
    </p>
  </div>
</div>
