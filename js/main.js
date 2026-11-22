/* ==========================================================================
   Shared site script (every page): navigation, "Copy e-mail", smooth scroll
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // texts written by this script go through the dictionary in i18n.js (if loaded)
  function t(s) { return window.rzI18n ? window.rzI18n.t(s) : s; }

  /* ---------- Active nav link (aria-current) ---------- */
  function normalise(path) {
    // "/about" and "/about.html" are the same page (some servers drop .html)
    return path.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  }
  var here = normalise(location.pathname);
  document.querySelectorAll('.site-nav__link').forEach(function (link) {
    var url = new URL(link.getAttribute('href'), location.href);
    if (!url.hash && normalise(url.pathname) === here) link.setAttribute('aria-current', 'page');
  });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open, returnFocus) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.visually-hidden').textContent = t(open ? 'Close menu' : 'Menu');
    nav.classList.toggle('is-open', open);
    if (!open && returnFocus) toggle.focus();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    // close on link click, Escape, outside click, or when resizing to desktop
    nav.addEventListener('click', function (e) {
      if (e.target.closest('.site-nav__link')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false, true);
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !e.target.closest('.site-header')) setMenu(false);
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Copy e-mail ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // fallback for http:// or older browsers
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); }
      catch (err) { reject(err); }
      finally { document.body.removeChild(ta); }
    });
  }

  document.querySelectorAll('[data-copy-email]').forEach(function (wrap) {
    var btn = wrap.querySelector('button');
    var status = wrap.querySelector('.copy-email__status');
    var email = wrap.getAttribute('data-copy-email');
    var timer;

    btn.addEventListener('click', function () {
      copyText(email).then(function () {
        status.textContent = t('E-mail address copied');
        wrap.classList.add('is-copied');     // button shows "Copied! ✓"
      }, function () {
        status.textContent = t('Could not copy. The address is') + ' ' + email;
      }).then(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          wrap.classList.remove('is-copied');
          status.textContent = '';
        }, 2000);
      });
    });
  });

  /* ---------- Language switch (PL / EN) ----------
     Remembers the choice, sets <html lang> and keeps the button's label
     (the action) and hidden description (the current state) in sync.
     Fires a "langchange" event on document for page translations to hook into. */
  var LANG_KEY = 'rz-lang';
  var LANG_TEXT = {
    en: { action: 'Change language to Polish', state: 'Current language: English' },
    pl: { action: 'Zmień język na angielski', state: 'Aktualny język: polski' }
  };
  function storedLang() {
    try { var v = localStorage.getItem(LANG_KEY); return v === 'pl' || v === 'en' ? v : null; }
    catch (err) { return null; }
  }
  function applyLang(lang, save) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
      btn.setAttribute('data-lang', lang);
      btn.setAttribute('lang', lang);
      btn.setAttribute('aria-label', LANG_TEXT[lang].action);
      var state = document.getElementById(btn.getAttribute('aria-describedby'));
      if (state) state.textContent = LANG_TEXT[lang].state;
    });
    if (save) { try { localStorage.setItem(LANG_KEY, lang); } catch (err) { /* private mode – fine */ } }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }
  document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // record spin + tonearm swing (CSS keyframes, restarted on every click)
      btn.classList.remove('is-moving');
      void btn.offsetWidth;
      btn.classList.add('is-moving');
      clearTimeout(btn._moveTimer);
      btn._moveTimer = setTimeout(function () { btn.classList.remove('is-moving'); }, 520);
      applyLang(document.documentElement.lang === 'pl' ? 'en' : 'pl', true);
    });
  });
  if (document.querySelector('[data-lang-switch]')) applyLang(storedLang() || 'en', false);

  /* ---------- Smooth scroll for in-page buttons ("Discover my work") ---------- */
  document.querySelectorAll('[data-scroll-to]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.getElementById(link.getAttribute('data-scroll-to'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + target.id);
      // move focus for keyboard / screen-reader users without jumping again
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
})();
