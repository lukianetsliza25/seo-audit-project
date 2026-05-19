document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'phone_click', {
        'phone_number': this.getAttribute('href').replace('tel:', '')
      });
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
    el.addEventListener('click', function() {
        gtag('event', 'email_click', {
        'email_address': this.getAttribute('href').replace('mailto:', '')
        });
    });
    });

  document.querySelectorAll('.social-link').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'social_click', {
        'platform': this.getAttribute('data-platform') || 'unknown'
      });
    });
  });

  document.querySelectorAll('.order-btn').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'order_button_click', {
        'cake_type': this.getAttribute('data-cake') || 'загальний_каталог'
      });
    });
  });

  const contactForm = document.getElementById('feedback-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      gtag('event', 'form_submit', {
        'form_name': 'Форма зворотного звʼязку'
      });
    });
  }
});