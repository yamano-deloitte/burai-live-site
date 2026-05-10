document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const isEn = document.documentElement.lang === 'en';

  const MSG = {
    name:     isEn ? 'Please enter your name.'              : 'お名前を入力してください。',
    email:    isEn ? 'Please enter a valid email address.'  : '有効なメールアドレスを入力してください。',
    subject:  isEn ? 'Please select an inquiry type.'       : 'お問い合わせ種別を選択してください。',
    message:  isEn ? 'Please enter your message.'          : 'メッセージを入力してください。',
    privacy:  isEn ? 'Please agree to the Privacy Policy.'  : 'プライバシーポリシーへの同意が必要です。',
    sending:  isEn ? 'Sending…'                             : '送信中…',
    error:    isEn ? 'An error occurred. Please try again.' : '送信に失敗しました。もう一度お試しください。',
  };

  /* ── ヘルパー ── */
  function getField(id)  { return form.querySelector('#' + id); }
  function showError(el, msg) {
    el.classList.add('cf-invalid');
    let err = el.parentElement.querySelector('.cf-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'cf-error';
      el.parentElement.appendChild(err);
    }
    err.textContent = msg;
  }
  function clearError(el) {
    el.classList.remove('cf-invalid');
    const err = el.parentElement.querySelector('.cf-error');
    if (err) err.remove();
  }
  function showGroupError(groupEl, msg) {
    groupEl.classList.add('cf-invalid');
    let err = groupEl.querySelector('.cf-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'cf-error';
      groupEl.appendChild(err);
    }
    err.textContent = msg;
  }
  function clearGroupError(groupEl) {
    groupEl.classList.remove('cf-invalid');
    const err = groupEl.querySelector('.cf-error');
    if (err) err.remove();
  }

  /* ── リアルタイムバリデーション ── */
  const nameEl    = getField('cf-name');
  const emailEl   = getField('cf-email');
  const messageEl = getField('cf-message');
  const privacyEl = getField('cf-privacy');
  const radioGroup = form.querySelector('.form-radio');

  if (nameEl) {
    nameEl.addEventListener('blur', () => {
      nameEl.value.trim() ? clearError(nameEl) : showError(nameEl, MSG.name);
    });
    nameEl.addEventListener('input', () => { if (nameEl.classList.contains('cf-invalid')) clearError(nameEl); });
  }

  if (emailEl) {
    emailEl.addEventListener('blur', () => {
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())
        ? clearError(emailEl) : showError(emailEl, MSG.email);
    });
    emailEl.addEventListener('input', () => { if (emailEl.classList.contains('cf-invalid')) clearError(emailEl); });
  }

  if (messageEl) {
    messageEl.addEventListener('blur', () => {
      messageEl.value.trim() ? clearError(messageEl) : showError(messageEl, MSG.message);
    });
    messageEl.addEventListener('input', () => { if (messageEl.classList.contains('cf-invalid')) clearError(messageEl); });
  }

  if (radioGroup) {
    radioGroup.querySelectorAll('input[type="radio"]').forEach(r => {
      r.addEventListener('change', () => clearGroupError(radioGroup));
    });
  }

  if (privacyEl) {
    privacyEl.addEventListener('change', () => {
      privacyEl.checked ? clearError(privacyEl) : showError(privacyEl, MSG.privacy);
    });
  }

  /* ── 送信バリデーション ── */
  function validate() {
    let ok = true;

    if (!nameEl || !nameEl.value.trim())          { showError(nameEl, MSG.name);    ok = false; }
    if (!emailEl || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim()))
                                                   { showError(emailEl, MSG.email); ok = false; }
    const checked = radioGroup && radioGroup.querySelector('input[type="radio"]:checked');
    if (!checked)                                  { showGroupError(radioGroup, MSG.subject); ok = false; }
    if (!messageEl || !messageEl.value.trim())     { showError(messageEl, MSG.message); ok = false; }
    if (!privacyEl || !privacyEl.checked)          { showError(privacyEl, MSG.privacy); ok = false; }

    return ok;
  }

  /* ── 送信処理 ── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      form.querySelector('.cf-invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = MSG.sending;
    btn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(res => {
        if (res.ok) {
          showThankYou();
          form.reset();
          setTimeout(() => { window.location.href = isEn ? '/en/' : '/'; }, 3500);
        } else {
          return res.json().then(d => { throw new Error(d.error || 'failed'); });
        }
      })
      .catch(() => {
        alert(MSG.error);
        btn.textContent = original;
        btn.disabled = false;
      });
  });

  /* ── サンクスモーダル ── */
  function showThankYou() {
    const overlay = document.createElement('div');
    overlay.id = 'cf-thanks';
    overlay.innerHTML = `
      <div class="cf-thanks-modal">
        <div class="cf-thanks-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2>${isEn ? 'Message Sent!' : '送信が完了しました'}</h2>
        <p>${isEn
          ? 'Thank you for reaching out. We\'ll get back to you within 1–2 business days.'
          : 'お問い合わせありがとうございます。<br>1〜2営業日以内にご返信いたします。'}</p>
        <p class="cf-thanks-redirect">${isEn ? 'Redirecting…' : 'トップページに戻ります…'}</p>
      </div>`;
    document.body.appendChild(overlay);

    if (!document.getElementById('cf-thanks-style')) {
      const s = document.createElement('style');
      s.id = 'cf-thanks-style';
      s.textContent = `
        #cf-thanks{position:fixed;inset:0;background:rgba(5,13,26,.75);display:flex;align-items:center;justify-content:center;z-index:9999;animation:cfFadeIn .3s ease}
        .cf-thanks-modal{background:#fff;border-radius:20px;padding:3rem 2.5rem;text-align:center;max-width:420px;width:90%;box-shadow:0 24px 60px rgba(11,61,145,.2);animation:cfSlideUp .35s ease}
        .cf-thanks-icon{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#007acc,#00b4d8);color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem}
        .cf-thanks-icon svg{width:32px;height:32px;stroke:#fff}
        .cf-thanks-modal h2{font-size:1.4rem;font-weight:800;color:#0b1f3a;margin:0 0 .75rem;letter-spacing:-.02em}
        .cf-thanks-modal p{font-size:.95rem;color:#5a6a80;line-height:1.65;margin:.5rem 0}
        .cf-thanks-redirect{font-size:.8rem!important;color:#b0bbc8!important;margin-top:1.5rem!important}
        @keyframes cfFadeIn{from{opacity:0}to{opacity:1}}
        @keyframes cfSlideUp{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}
      `;
      document.head.appendChild(s);
    }
  }
});
