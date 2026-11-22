/* ==========================================================================
   Hero – butterfly animation (logic unchanged from homepage/hero-butterfly.txt)
   ========================================================================== */
(function () {
  /* gradient tła za wskaźnikiem – płynność zapewnia transition w CSS */
  document.querySelectorAll('.butterfly-banner').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var x = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
      var y = Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1);
      el.style.setProperty('--mx', (x * 100).toFixed(2) + '%');
      el.style.setProperty('--my', (y * 100).toFixed(2) + '%');
      el.style.setProperty('--px', ((x - .5) * 2).toFixed(3));
      el.style.setProperty('--py', ((y - .5) * 2).toFixed(3));
    });
    el.addEventListener('pointerleave', function () {
      ['--mx', '--my', '--px', '--py'].forEach(function (p) { el.style.removeProperty(p); });
    });
  });

  /* ===== Odlot przy skrolowaniu w dół, powrót przy skrolowaniu w górę ===== */
  document.querySelectorAll('.butterfly-banner').forEach(function (el) {
    var stage = el.closest('.butterfly-stage');
    var flight = stage.querySelector('#flight');
    var wings = stage.querySelectorAll('.fore, .hind');
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var CX = 1895, CY = 261;           // środek motyla: prawa krawędź, w połowie wysokości banera
    var cur = 0, target = 0, running = false;

    function progress() {
      // 0 = baner w pełni widoczny, 1 = baner przewinięty o całą swoją wysokość
      var r = el.getBoundingClientRect();
      if (!r.height) return 0;                           // baner jeszcze bez wymiarów (np. ukryta karta)
      return Math.min(Math.max(-r.top / r.height, 0), 1);
    }

    function render(p) {
      if (reduce) { flight.style.opacity = 1 - p; return; }
      var e = p * p * (3 - 2 * p);                       // gładki start i koniec
      // wylatuje zza prawej krawędzi i leci w lewo nad treścią, aż poza lewą krawędź
      var dx = -2550 * e + Math.sin(e * Math.PI * 2) * 40;
      // 523 * p kompensuje przewinięcie banera – motyl zostaje na ekranie i opada nad treść strony
      var dy = 523 * p + 300 * e - Math.sin(e * Math.PI) * 120;
      var rot = -28 * e + Math.sin(e * Math.PI * 3) * 6; // przechylenie w kierunku lotu (w lewo)
      var s = 1 + 0.9 * e;                               // przybliża się – rośnie do 1,9×
      flight.setAttribute('transform',
        'translate(' + (CX + dx).toFixed(2) + ' ' + (CY + dy).toFixed(2) + ') ' +
        'rotate(' + rot.toFixed(2) + ') scale(' + s.toFixed(4) + ') ' +
        'translate(' + (-CX) + ' ' + (-CY) + ')');
      // w locie skrzydła trzepoczą szybciej (bez skoku w animacji)
      // im dalej w locie, tym szybciej (do 4,5× szybciej niż w spoczynku); szybki ruch skrolem dokłada tempa
      var rate = 1 + 3.5 * Math.min(Math.abs(target - cur) * 8 + e * 1.2, 1);
      wings.forEach(function (w) { w.getAnimations().forEach(function (a) { a.playbackRate = rate; }); });
    }

    function tick() {
      cur += (target - cur) * 0.12;                      // bezwładność – lot, a nie sztywne przewijanie
      if (Math.abs(target - cur) < 0.0005) { cur = target; running = false; }
      render(cur);
      if (running) requestAnimationFrame(tick);
    }

    function onScroll() {
      target = progress();
      if (!running) { running = true; requestAnimationFrame(tick); }
    }

    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    cur = target = progress();
    render(cur);
  });
})();
