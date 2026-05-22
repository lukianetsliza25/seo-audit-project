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

  // --- НАЛАШТУВАННЯ А/В ТЕСТУ ДЛЯ ГІПОТЕЗИ №1 ---
  var abVariant = localStorage.getItem('ab_test_accordion');
  if (!abVariant) {
    abVariant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('ab_test_accordion', abVariant);
  }
  gtag('event', 'ab_test_exposure', {
    'test_name': 'accordion_ux_optimization',
    'variant': abVariant
  });

  if (abVariant === 'B') {
    var eventCards = document.querySelectorAll('.events-section .event-card');
    
    eventCards.forEach(function (card) {
      card.style.cursor = 'pointer';
      
      var desc = card.querySelector('p');
      if (desc) {
        desc.style.display = 'none';
        desc.style.marginTop = '15px';
        desc.style.paddingTop = '10px';
        desc.style.borderTop = '1px dashed #dee2e6';
      }

      card.addEventListener('click', function () {
        if (desc) {
          if (desc.style.display === 'none') {
            desc.style.display = 'block';
            
            var categoryTitle = card.querySelector('h3') ? card.querySelector('h3').textContent : 'Невідомо';
            gtag('event', 'accordion_unfold', {
              'category_name': categoryTitle
            });
          } else {
            desc.style.display = 'none';
          }
        }
      });
    });
  }

});