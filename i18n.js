// ===== i18n - Language Switching =====
(function() {
  'use strict';

  var currentLang = localStorage.getItem('masif_lang') || 'tr';
  var translations = {};

  // Load language file
  function loadLang(lang, callback) {
    if (translations[lang]) {
      callback();
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'lang/' + lang + '.json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        translations[lang] = JSON.parse(xhr.responseText);
        callback();
      }
    };
    xhr.send();
  }

  // Apply translations to all [data-i18n] elements
  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        // Check if translation contains HTML
        if (t[key].indexOf('<') !== -1) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update toggle button state
    var toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(function(btn) {
      var btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Switch language
  function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('masif_lang', lang);
    loadLang(lang, function() {
      applyTranslations(lang);
    });
  }

  // Initialize
  function init() {
    // Create and inject toggle if navbar exists
    var navbar = document.querySelector('.navbar .container');
    if (navbar) {
      var menuToggle = navbar.querySelector('.menu-toggle');
      var toggle = document.createElement('div');
      toggle.className = 'lang-toggle';
      toggle.innerHTML = '<button class="lang-toggle-btn' + (currentLang === 'tr' ? ' active' : '') + '" data-lang="tr">TR</button>' +
                         '<button class="lang-toggle-btn' + (currentLang === 'en' ? ' active' : '') + '" data-lang="en">EN</button>';
      
      // Insert before menu toggle (mobile hamburger)
      if (menuToggle) {
        navbar.insertBefore(toggle, menuToggle);
      } else {
        navbar.appendChild(toggle);
      }

      // Event listeners
      toggle.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          switchLang(this.getAttribute('data-lang'));
        });
      });
    }

    // Load and apply saved language
    loadLang(currentLang, function() {
      if (currentLang !== 'tr') {
        applyTranslations(currentLang);
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for manual use
  window.switchLang = switchLang;
})();
