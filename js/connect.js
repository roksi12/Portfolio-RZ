/* ==========================================================================
   Connect page script (connect.html)
   · message field grows with the text
   · validation with accessible error messages (EN / PL via rzI18n)
   · the site has no mail server, so a valid form opens the visitor's e-mail
     app with the message ready to send (mailto:)
   ========================================================================== */
(function () {
  'use strict';

  var TO = 'roksanazytkowska@gmail.com';
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var t = function (s) { return window.rzI18n ? window.rzI18n.t(s) : s; };
  var status = form.querySelector('[data-form-status]');
  var fields = {
    name: form.querySelector('#cf-name'),
    email: form.querySelector('#cf-email'),
    message: form.querySelector('#cf-message')
  };

  /* ---------- Message field grows with its content ---------- */
  var area = fields.message;
  function grow() {
    area.style.height = 'auto';
    area.style.height = area.scrollHeight + 'px';
  }
  area.addEventListener('input', grow);

  /* ---------- Validation ---------- */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function check(input) {
    var v = input.value.trim();
    var msg = '';
    if (!v) {
      msg = input === fields.name ? 'Please enter your name.'
          : input === fields.email ? 'Please enter your e-mail address.'
          : 'Please write a message.';
    } else if (input === fields.email && !EMAIL.test(v)) {
      msg = 'Please enter a valid e-mail address, e.g. name@example.com.';
    }
    var err = form.querySelector('[data-error-for="' + input.id + '"]');
    err.setAttribute('data-msg', msg);              // remembered so it can be re-translated
    err.textContent = msg ? t(msg) : '';
    if (msg) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
    return !msg;
  }

  // re-check a field once the visitor leaves it or fixes it
  Object.keys(fields).forEach(function (k) {
    var input = fields[k];
    input.addEventListener('blur', function () { if (input.value || input.hasAttribute('aria-invalid')) check(input); });
    input.addEventListener('input', function () { if (input.hasAttribute('aria-invalid')) check(input); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true, firstBad = null;
    Object.keys(fields).forEach(function (k) {
      if (!check(fields[k])) { ok = false; if (!firstBad) firstBad = fields[k]; }
    });
    if (!ok) {
      setStatus('');
      firstBad.focus();
      return;
    }

    var name = fields.name.value.trim();
    var email = fields.email.value.trim();
    var subject = t('Message from the portfolio') + ' – ' + name;
    var body = fields.message.value.trim() + '\n\n— ' + name + '\n' + email;
    window.location.href = 'mailto:' + TO +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    setStatus('Your e-mail app should open with the message ready to send. If it doesn’t, write to me directly:');
  });

  function setStatus(key) {
    if (!status) return;
    status.setAttribute('data-msg', key);
    status.textContent = key ? t(key) + (key.slice(-1) === ':' ? ' ' + TO : '') : '';
  }

  /* ---------- Language switch: translate messages already on screen ---------- */
  document.addEventListener('langchange', function () {
    form.querySelectorAll('.field__error[data-msg]').forEach(function (el) {
      var m = el.getAttribute('data-msg');
      el.textContent = m ? t(m) : '';
    });
    if (status && status.getAttribute('data-msg')) setStatus(status.getAttribute('data-msg'));
  });
})();
