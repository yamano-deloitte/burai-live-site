---
layout: default
title: Members Area
permalink: /members/
---

<div class="members-area" style="max-width: 800px; margin: 50px auto; padding: 20px;">
  <h1>会員エリア / Members Area</h1>
  
  <div id="protected-content" style="display: none;">
    <div style="background-color: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
      <p>✅ ようこそ、<strong id="member-name"></strong>さん！</p>
      <p>✅ Welcome, <strong id="member-name-en"></strong>!</p>
    </div>
    
    <h2>限定コンテンツ / Exclusive Content</h2>
    
    <div style="background-color: #f6f8fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>📊 プレミアムリソース / Premium Resources</h3>
      <ul>
        <li>会員限定の技術文書 / Member-only technical documentation</li>
        <li>プレミアムサポート / Premium support</li>
        <li>先行アクセス機能 / Early access features</li>
        <li>専用ダウンロード / Exclusive downloads</li>
      </ul>
    </div>
    
    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 20px 0;">
      <h3>🔔 最新情報 / Latest Updates</h3>
      <p>ここに会員限定のニュースや更新情報が表示されます。</p>
      <p>Member-exclusive news and updates will be displayed here.</p>
    </div>
    
    <div style="margin-top: 30px;">
      <h3>🔐 アカウント情報 / Account Information</h3>
      <p>ユーザー名 / Username: <strong id="account-username"></strong></p>
      <p>ログイン日時 / Login Time: <strong id="login-time"></strong></p>
    </div>
  </div>
  
  <div id="access-denied" style="display: none;">
    <div style="background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 20px; border-radius: 4px; text-align: center;">
      <h2>🔒 アクセス制限 / Access Restricted</h2>
      <p>このページを表示するにはログインが必要です。</p>
      <p>You need to login to view this page.</p>
      <a href="/login/?redirect=/members/" style="display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #0366d6; color: white; text-decoration: none; border-radius: 4px;">
        ログインページへ / Go to Login
      </a>
    </div>
  </div>
</div>

<script src="/assets/js/auth.js"></script>
<script src="/assets/js/protect.js"></script>
