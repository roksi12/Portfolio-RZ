/* ==========================================================================
   About page script (about.html)
   hero parallax · passions → gallery filter · story steps · tool tilt ·
   reveal on scroll · gradient on mouse + scroll
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll('[data-reveal], .ah__lead, .story__text, .offscreen__lead, [data-polaroids]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: .2, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-in'); });
  }
  // hero lead markers: draw after the title animation
  var lead = document.querySelector('.ah__lead');
  if (lead) setTimeout(function () { lead.classList.add('is-in'); }, reduce ? 0 : 900);

  /* ---------- Hero parallax (mouse) ---------- */
  var hero = document.querySelector('[data-parallax-root]');
  if (hero && finePointer && !reduce) {
    var layers = Array.prototype.slice.call(hero.querySelectorAll('[data-depth], .passion'));
    var raf = null, mx = 0, my = 0;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - .5;
      my = (e.clientY - r.top) / r.height - .5;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    hero.addEventListener('pointerleave', function () { mx = my = 0; if (!raf) raf = requestAnimationFrame(apply); });
    var meshM = hero.querySelector('.ah__mesh');
    function apply() {
      raf = null;
      layers.forEach(function (el) {
        var d = parseFloat(el.getAttribute('data-depth') || getComputedStyle(el).getPropertyValue('--d')) || .5;
        var k = el.classList.contains('passion') ? 46 : 140;
        el.style.setProperty('--px', (-mx * d * k).toFixed(1) + 'px');
        el.style.setProperty('--py', (-my * d * k).toFixed(1) + 'px');
      });
      // gradient turns with the mouse (angle around the centre) and its centre follows the cursor
      if (meshM) {
        var ang = (mx || my) ? Math.atan2(my, mx) * 180 / Math.PI : 0;
        meshM.style.setProperty('--ang-mouse', ang.toFixed(1) + 'deg');
        meshM.style.setProperty('--cx', (50 + mx * 60).toFixed(1) + '%');
        meshM.style.setProperty('--cy', (45 + my * 60).toFixed(1) + '%');
      }
    }
  }

  /* ---------- Hero gradient on scroll (all devices, also touch) ---------- */
  var mesh = document.querySelector('.ah__mesh');
  var blobs = document.querySelectorAll('.ah__blob');
  if (mesh && !reduce) {
    var sRaf = null;
    var onHeroScroll = function () {
      sRaf = null;
      var y = Math.min(window.scrollY, window.innerHeight * 1.2);
      mesh.style.setProperty('--ang-scroll', (y * .12).toFixed(1) + 'deg');
      mesh.style.setProperty('--sy', (y * .25).toFixed(1) + 'px');
      blobs.forEach(function (b, i) { b.style.setProperty('--sy', (y * (.15 + i * .12)).toFixed(1) + 'px'); });
    };
    window.addEventListener('scroll', function () { if (!sRaf) sRaf = requestAnimationFrame(onHeroScroll); }, { passive: true });
    onHeroScroll();
  }

  /* ---------- Story: active step, sticky illustration, rail progress ---------- */
  var steps = Array.prototype.slice.call(document.querySelectorAll('.story__step'));
  var stages = document.querySelectorAll('.stage');
  var dots = document.querySelectorAll('.story__dots span');
  var num = document.querySelector('[data-story-num]');
  var list = document.querySelector('.story__steps');
  var current = 1;

  function setStep(n) {
    if (n === current) return;
    current = n;
    steps.forEach(function (s) { s.classList.toggle('is-active', +s.getAttribute('data-step') === n); });
    stages.forEach(function (s) { s.classList.toggle('is-active', +s.getAttribute('data-stage') === n); });
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === n - 1); });
    if (num) {
      num.textContent = '0' + n;
      num.classList.remove('is-flip'); void num.offsetWidth; num.classList.add('is-flip');
    }
    var active = steps[n - 1];
    if (active) active.classList.add('is-in');   // draw its markers
  }

  function onScroll() {
    if (!list) return;
    var mid = window.innerHeight * .5;
    var best = 1;
    steps.forEach(function (s) {
      if (s.getBoundingClientRect().top < mid) best = +s.getAttribute('data-step');
    });
    setStep(best);
    var r = list.getBoundingClientRect();
    var p = (mid - r.top) / r.height;
    list.style.setProperty('--progress', Math.max(0, Math.min(1, p)).toFixed(3));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  if (steps[0]) steps[0].classList.add('is-in');

  /* ---------- Toolbox: magnetic tilt + cursor light ---------- */
  if (finePointer && !reduce) {
    document.querySelectorAll('.tool').forEach(function (tool) {
      var logo = tool.querySelector('.tool__logo');
      tool.addEventListener('pointermove', function (e) {
        var r = logo.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5;
        var y = (e.clientY - r.top) / r.height - .5;
        logo.style.setProperty('--tx', (x * 14).toFixed(1) + 'px');
        logo.style.setProperty('--ty', (y * 14).toFixed(1) + 'px');
        logo.style.setProperty('--rx', (-y * 22).toFixed(1) + 'deg');
        logo.style.setProperty('--ry', (x * 22).toFixed(1) + 'deg');
      });
      tool.addEventListener('pointerleave', function () {
        ['--tx', '--ty', '--rx', '--ry'].forEach(function (p) { logo.style.removeProperty(p); });
      });
    });
  }

  /* ---------- Tools: page pauses, icons scroll in from the right ----------
     The section gets extra height = how far the row has to travel. While the
     sticky .toolbox__pin is held under the header, the vertical scroll inside
     that extra height is turned into horizontal movement of the row:
     start = row just entering from the right, end = last tool fully in view.
     After that the section ends and the page scrolls on normally. */
  var toolsSec = document.querySelector('[data-tools]');
  var pin = document.querySelector('[data-tools-pin]');
  var rail = document.querySelector('[data-tools-rail]');
  var track = document.querySelector('[data-tools-track]');
  if (toolsSec && pin && rail && track && !reduce) {
    var railStart = 0, railEnd = 0, railDist = 0, railCur = null, railTarget = 0, railRunning = false;
    var measure = function () {
      var w = rail.clientWidth;
      var gutter = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gutter')) || 40;
      railStart = w * .55;                                   // first icons already peeking in on the right
      railEnd = Math.min(0, w - track.scrollWidth - gutter);  // last tool fully visible
      railDist = railStart - railEnd;
      toolsSec.style.height = (pin.offsetHeight + railDist) + 'px';
    };
    var computeTarget = function () {
      var top = toolsSec.getBoundingClientRect().top;
      var headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
      var scrolled = headerH - top;                          // px scrolled since the pin locked
      var p = railDist ? Math.max(0, Math.min(1, scrolled / railDist)) : 0;
      railTarget = railStart - p * railDist;                 // moves right → left
    };
    var tick = function () {
      if (railCur === null) railCur = railTarget;
      railCur += (railTarget - railCur) * .2;
      track.style.setProperty('--rail-x', railCur.toFixed(1) + 'px');
      if (Math.abs(railTarget - railCur) > .3) requestAnimationFrame(tick);
      else { railCur = railTarget; track.style.setProperty('--rail-x', railCur.toFixed(1) + 'px'); railRunning = false; }
    };
    var kick = function () {
      computeTarget();
      if (!railRunning) { railRunning = true; requestAnimationFrame(tick); }
    };
    measure(); computeTarget(); railCur = railTarget; track.style.setProperty('--rail-x', railCur + 'px');
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', function () { measure(); kick(); });
    window.addEventListener('load', function () { measure(); kick(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); kick(); });
  }

  /* ---------- Gallery filters ---------- */
  function galleryStatus(n) {
    if (window.rzI18n && window.rzI18n.lang() === 'pl') {
      var few = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14);
      return 'Wyświetlono ' + n + (n === 1 ? ' zdjęcie' : few ? ' zdjęcia' : ' zdjęć');
    }
    return 'Showing ' + n + (n === 1 ? ' photo' : ' photos');
  }
  var group = document.querySelector('[data-gallery-filters]');
  var polaroids = Array.prototype.slice.call(document.querySelectorAll('.polaroid'));
  var gStatus = document.querySelector('[data-gallery-status]');
  polaroids.forEach(function (p, i) { p.style.setProperty('--n', i); });

  function filterGallery(value) {
    if (!group) return;
    group.querySelectorAll('[data-gfilter]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-gfilter') === value));
    });
    var shown = 0;
    polaroids.forEach(function (p) {
      var match = value === 'all' || p.getAttribute('data-cat') === value;
      if (match) {
        shown++;
        p.hidden = false;
        requestAnimationFrame(function () { p.classList.remove('is-hidden'); });
      } else {
        p.classList.add('is-hidden');
        setTimeout(function () { if (p.classList.contains('is-hidden')) p.hidden = true; }, reduce ? 0 : 350);
      }
    });
    if (gStatus) gStatus.textContent = galleryStatus(shown);
  }
  if (group) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('[data-gfilter]');
      if (b) filterGallery(b.getAttribute('data-gfilter'));
    });
  }

  /* ---------- Passions in the hero → jump to the gallery, filtered ---------- */
  document.querySelectorAll('[data-goto]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.remove('is-burst'); void btn.offsetWidth; btn.classList.add('is-burst');
      var target = document.getElementById('offscreen');
      var value = btn.getAttribute('data-goto');
      setTimeout(function () {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        filterGallery(value);
      }, reduce ? 0 : 280);
    });
  });


  /* ---------- Rotating badge (SVG text is skipped by i18n.js) ---------- */
  var badge = document.querySelector('[data-badge]');
  function setBadge(lang) { if (badge) badge.textContent = badge.getAttribute(lang === 'pl' ? 'data-pl' : 'data-en'); }
  document.addEventListener('langchange', function (e) { setBadge(e.detail.lang); });
  setBadge(document.documentElement.lang);
})();
