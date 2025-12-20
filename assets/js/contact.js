// Contact form handler with thank you message and redirect
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit form to Formspree
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Show thank you message
        showThankYouMessage();
        form.reset();
        
        // Redirect to home page after 3 seconds
        setTimeout(function() {
          window.location.href = '/';
        }, 3000);
      } else {
        return response.json().then(data => {
          throw new Error(data.error || 'Form submission failed');
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting your message. Please try again.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  });
  
  function showThankYouMessage() {
    // Create thank you overlay
    const overlay = document.createElement('div');
    overlay.id = 'thank-you-overlay';
    overlay.innerHTML = `
      <div class="thank-you-modal">
        <div class="thank-you-icon">✓</div>
        <h2>Thank You! / ありがとうございます!</h2>
        <p>Your message has been successfully sent.</p>
        <p>メッセージが正常に送信されました。</p>
        <p class="redirect-notice">Redirecting to home page...</p>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Add styles if not already present
    if (!document.getElementById('thank-you-styles')) {
      const style = document.createElement('style');
      style.id = 'thank-you-styles';
      style.textContent = `
        #thank-you-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease-in;
        }
        
        .thank-you-modal {
          background: white;
          padding: 40px;
          border-radius: 8px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease-out;
        }
        
        .thank-you-icon {
          width: 80px;
          height: 80px;
          background: #4CAF50;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 48px;
          margin: 0 auto 20px;
        }
        
        .thank-you-modal h2 {
          color: #333;
          margin-bottom: 15px;
        }
        
        .thank-you-modal p {
          color: #666;
          margin: 10px 0;
          line-height: 1.6;
        }
        
        .redirect-notice {
          font-size: 14px;
          font-style: italic;
          margin-top: 20px !important;
          color: #999;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
});
