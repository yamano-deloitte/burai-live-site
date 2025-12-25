---
layout: default
title: Logged Out
permalink: /logout/
---

<div class="logout-container" style="max-width: 500px; margin: 100px auto; padding: 40px; text-align: center;">
  <div style="background-color: #d4edda; border: 1px solid #c3e6cb; padding: 30px; border-radius: 8px;">
    <h1 style="margin: 0 0 20px 0; color: #155724;">✓ ログアウトしました</h1>
    <h2 style="margin: 0 0 20px 0; color: #155724; font-size: 1.5rem;">Logged Out Successfully</h2>
    
    <p style="color: #155724; margin: 20px 0; font-size: 16px;">
      ご利用ありがとうございました。<br>
      Thank you for using our service.
    </p>
    
    <div style="margin-top: 30px; padding: 15px; background-color: #fff; border-radius: 4px;">
      <p style="margin: 0; color: #666; font-size: 14px;">
        <span id="countdown">3</span>秒後にホームページへリダイレクトします...<br>
        Redirecting to home page in <span id="countdown-en">3</span> seconds...
      </p>
    </div>
    
    <div style="margin-top: 20px;">
      <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #0b3d91; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">
        Return to Home
      </a>
    </div>
  </div>
</div>

<script>
// Clear authentication data
localStorage.removeItem('isAuthenticated');
localStorage.removeItem('currentUser');
localStorage.removeItem('signinTime');

// Countdown and redirect
let seconds = 3;
const countdownElements = document.querySelectorAll('#countdown, #countdown-en');

const countdownInterval = setInterval(() => {
  seconds--;
  countdownElements.forEach(el => el.textContent = seconds);
  
  if (seconds <= 0) {
    clearInterval(countdownInterval);
    window.location.href = '/';
  }
}, 1000);
</script>
