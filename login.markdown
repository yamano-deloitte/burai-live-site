---
layout: default
title: Login
permalink: /login/
---

<div class="login-container" style="max-width: 400px; margin: 50px auto; padding: 20px;">
  <h1>ログイン / Login</h1>
  
  <div id="login-message" style="padding: 10px; margin-bottom: 15px; border-radius: 4px; display: none;"></div>
  
  <form id="login-form" style="display: flex; flex-direction: column; gap: 15px;">
    <div>
      <label for="username" style="display: block; margin-bottom: 5px;">ユーザー名 / Username:</label>
      <input type="text" id="username" name="username" required 
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <div>
      <label for="password" style="display: block; margin-bottom: 5px;">パスワード / Password:</label>
      <input type="password" id="password" name="password" required
             style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    
    <button type="submit" style="padding: 10px 20px; background-color: #0366d6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
      ログイン / Login
    </button>
  </form>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f6f8fa; border-radius: 4px; font-size: 14px;">
    <p><strong>デモ認証情報 / Demo Credentials:</strong></p>
    <p>Username: demo</p>
    <p>Password: demo123</p>
    <p style="color: #666; font-size: 12px; margin-top: 10px;">
      注: これは基本的なデモ実装です。本番環境では適切な認証サービスを使用してください。<br>
      Note: This is a basic demo implementation. Use proper authentication service in production.
    </p>
  </div>
</div>

<script src="/assets/js/auth.js"></script>
