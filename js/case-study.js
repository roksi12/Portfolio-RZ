/* ==========================================================================
   Case study pages: side navigation
   Highlights the part of the case study being read (Overview, Discovery, …)
   and shows the navigation only once the visitor reaches the Overview.
   ========================================================================== */
(function () {
  'use strict';

  var toc = document.querySelector('[data-toc]');
  if (!toc) return;

  var links = Array.prototype.slice.call(toc.querySelectorAll('[data-toc-link]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-toc-section]'));
  var hiders = document.querySelectorAll('[data-toc-hide]');
  if (!links.length || !sections.length) return;

  var current = null;
  var ticking = false;

  function update() {
    ticking = false;
    // the part whose section most recently crossed 40% of the viewport height
    var line = window.innerHeight * 0.4;
    var active = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= line) active = sections[i].getAttribute('data-toc-section');
      else break;
    }
    // past the end of the last section (next case study, footer) → hide again
    var last = sections[sections.length - 1];
    if (active && last.getBoundingClientRect().bottom < line) active = null;

    // step aside while the navigation would sit on top of a photo marked data-toc-hide
    if (active !== null && hiders.length) {
      var t = toc.getBoundingClientRect();
      for (var j = 0; j < hiders.length; j++) {
        var h = hiders[j].getBoundingClientRect();
        if (h.top < t.bottom && h.bottom > t.top) { active = null; break; }
      }
    }

    toc.classList.toggle('is-visible', active !== null);
    if (active === current) return;
    current = active;
    links.forEach(function (link) {
      if (link.getAttribute('data-toc-link') === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
    // fallback: if animation frames are paused (background tab, hidden view), still update
    setTimeout(function () { if (ticking) update(); }, 120);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
