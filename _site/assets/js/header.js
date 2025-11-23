document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
});

// Contact modal behavior
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('contact-modal');
  if (!modal) return;

  // Collect links that should open the contact modal:
  // - any link that targets the '#contact' anchor (e.g., hero button or /#contact)
  // - any link that points to a /contact page (e.g., /contact/)
  var allLinks = Array.from(document.querySelectorAll('a'));
  var openLinks = allLinks.filter(function (a) {
    var href = a.getAttribute('href') || '';
    if (href.indexOf('#contact') !== -1) return true;
    if (href.indexOf('/contact') !== -1) return true;
    try {
      var url = new URL(href, location.href);
      if (url.hash === '#contact') return true;
      if (url.pathname && url.pathname.indexOf('/contact') !== -1) return true;
    } catch (e) {
      // ignore invalid URLs
    }
    return false;
  });

  var openModal = function () {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  var closeModal = function () {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Allow normal navigation if user holds a modifier
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      openModal();
    });
  });

  // Close on overlay click or close button
  modal.addEventListener('click', function (e) {
    if (e.target.matches('[data-close-modal]') || e.target.matches('.contact-modal__close')) {
      closeModal();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
});
