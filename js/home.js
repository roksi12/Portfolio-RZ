/* ==========================================================================
   Homepage script: skills carousel + project filters
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Skills marquee ----------
     The track holds the list twice and moves by -50%, so the loop is seamless.
     Speed is kept constant (px/s) regardless of screen width. */
  var track = document.querySelector('[data-marquee]');
  if (track) {
    var list = track.querySelector('.skills__list');
    var copy = list.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    track.appendChild(copy);

    var SPEED = 60; // px per second
    var setDuration = function () {
      track.style.setProperty('--marquee-duration', (list.scrollWidth / SPEED).toFixed(2) + 's');
    };
    setDuration();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setDuration);
    window.addEventListener('resize', setDuration);
    document.addEventListener('langchange', function () { requestAnimationFrame(setDuration); });   // translated items change the width
  }

  /* ---------- Stop the "Discover my work" arrow nudge once the visitor scrolls ---------- */
  function markScrolled() {
    if (window.scrollY > 80) {
      document.documentElement.classList.add('has-scrolled');
      window.removeEventListener('scroll', markScrolled);
    }
  }
  window.addEventListener('scroll', markScrolled, { passive: true });
  markScrolled();

  /* ---------- "Discover my work": hover gradient follows the cursor ---------- */
  document.querySelectorAll('.intro__btn').forEach(function (btn) {
    btn.addEventListener('pointermove', function (e) {
      var r = btn.getBoundingClientRect();
      btn.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      btn.style.setProperty('--gy', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    });
  });

  /* ---------- Cheesecake video (Let's connect) ----------
     Always muted. Plays only while on screen; stays still on its first frame
     for prefers-reduced-motion. */
  var video = document.querySelector('.connect__video');
  if (video) {
    video.muted = true;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var visible = false;
    var sync = function () {
      if (visible && !reduce.matches) {
        var p = video.play();
        if (p && p.catch) p.catch(function () {});   // autoplay blocked – the still frame is fine
      } else {
        video.pause();
      }
    };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[entries.length - 1].isIntersecting;   // latest entry wins
        sync();
      }, { rootMargin: '100px' }).observe(video);
    } else {
      visible = true;
    }
    if (reduce.addEventListener) reduce.addEventListener('change', sync);
    sync();
  }

  /* ---------- Project filters ---------- */
  var group = document.querySelector('[data-filters]');
  if (!group) return;

  var buttons = Array.prototype.slice.call(group.querySelectorAll('[data-filter]'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card[data-category]'));
  var grids = document.querySelectorAll('.projects__grid');
  var status = document.querySelector('[data-filter-status]');

  function applyFilter(value) {
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === value));
    });

    var shown = 0;
    cards.forEach(function (card) {
      // data-view="all"      → only under "All" (featured Plantify)
      // data-view="filtered" → only when a filter is active (compact Plantify)
      var view = card.getAttribute('data-view');
      var inView = !view || view === (value === 'all' ? 'all' : 'filtered');
      var match = inView && (value === 'all' || card.getAttribute('data-category').split(' ').indexOf(value) !== -1);
      var wasHidden = card.hidden;
      card.hidden = !match;
      if (match) {
        shown++;
        if (wasHidden) {
          card.classList.remove('is-entering');
          void card.offsetWidth;            // restart the entrance animation
          card.classList.add('is-entering');
        }
      }
    });

    // hide an empty grid so it doesn't leave a gap
    grids.forEach(function (grid) {
      grid.hidden = !grid.querySelector('.project-card:not([hidden])');
    });

    if (status) status.textContent = statusText(shown);
  }

  function statusText(n) {
    if (window.rzI18n && window.rzI18n.lang() === 'pl') {
      var few = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14);
      return 'Wyświetlono ' + n + (n === 1 ? ' projekt' : few ? ' projekty' : ' projektów');
    }
    return 'Showing ' + n + (n === 1 ? ' project' : ' projects');
  }

  group.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-filter]');
    if (btn) applyFilter(btn.getAttribute('data-filter'));
  });

  // Arrow keys / Home / End move between filters (Tab, Enter and Space work natively)
  group.addEventListener('keydown', function (e) {
    var i = buttons.indexOf(document.activeElement);
    if (i === -1) return;
    var next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % buttons.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + buttons.length) % buttons.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = buttons.length - 1;
    if (next === null) return;
    e.preventDefault();
    buttons[next].focus();
  });
})();
