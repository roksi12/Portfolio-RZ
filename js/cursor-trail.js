/* ==========================================================================
   Cursor trail: little butterflies flutter away behind the cursor.
   Shared by every page. Only for a mouse / trackpad (no touch), and off
   for prefers-reduced-motion. Purely decorative: aria-hidden, no pointer events.
   ========================================================================== */
(function () {
  'use strict';

  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var SPACING = 46;      // px the cursor must travel before the next butterfly
  var MAX_ALIVE = 12;    // never more than this many on screen
  var LIFE = 1400;       // ms, must match the CSS animation length
  var COLORS = ['#ED5A32', '#F07A52', '#ED9DB7', '#F6B9C6'];

  var layer = null;
  var alive = 0;
  var lastX = null, lastY = null;
  var side = 1;

  // one butterfly, wings drawn around the body at 0,0; viewBox keeps it crisp at any size
  var SHAPE =
    '<svg viewBox="-12 -10 24 20" focusable="false">' +
      '<g class="cursor-bfly__wings">' +
        '<path d="M-1 -1C-4 -9-11 -10-11 -5C-11 -1-6 1-1 1Z"/>' +
        '<path d="M-1 1C-6 2-9 7-6 8C-4 9-2 6-1 2Z" opacity=".8"/>' +
        '<path d="M1 -1C4 -9 11 -10 11 -5C11 -1 6 1 1 1Z"/>' +
        '<path d="M1 1C6 2 9 7 6 8C4 9 2 6 1 2Z" opacity=".8"/>' +
      '</g>' +
      '<rect class="cursor-bfly__body" x="-.7" y="-3" width="1.4" height="8" rx=".7"/>' +
    '</svg>';

  function ensureLayer() {
    if (layer) return layer;
    layer = document.createElement('div');
    layer.className = 'cursor-trail';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
    return layer;
  }

  function rand(min, max) { return min + Math.random() * (max - min); }

  function spawn(x, y, dx, dy) {
    if (alive >= MAX_ALIVE) return;
    alive++;

    var el = document.createElement('span');
    el.className = 'cursor-bfly';
    el.innerHTML = SHAPE;

    // fly away from the direction of travel, alternating sides, drifting upwards
    var len = Math.hypot(dx, dy) || 1;
    var nx = -dy / len, ny = dx / len;          // perpendicular to the movement
    side = -side;
    var dist = rand(28, 60);
    var size = rand(12, 20);

    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    el.style.setProperty('--size', size.toFixed(1) + 'px');
    el.style.setProperty('--tx', (nx * dist * side - dx / len * 14).toFixed(1) + 'px');
    el.style.setProperty('--ty', (ny * dist * side - dy / len * 14 - rand(30, 60)).toFixed(1) + 'px');
    el.style.setProperty('--rot', rand(-35, 35).toFixed(0) + 'deg');
    el.style.setProperty('--flap', rand(.16, .24).toFixed(2) + 's');

    ensureLayer().appendChild(el);
    setTimeout(function () { el.remove(); alive = Math.max(0, alive - 1); }, LIFE);
  }

  function onMove(e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    if (lastX === null) { lastX = e.clientX; lastY = e.clientY; return; }
    var dx = e.clientX - lastX, dy = e.clientY - lastY;
    if (Math.hypot(dx, dy) < SPACING) return;
    // spawn a little behind the cursor tip so the butterflies never cover it
    spawn(e.clientX - dx * .25, e.clientY - dy * .25 + 10, dx, dy);
    lastX = e.clientX; lastY = e.clientY;
  }

  function onLeave() { lastX = lastY = null; }

  var on = false;
  function sync() {
    var want = finePointer.matches && !reduce.matches;
    if (want === on) return;
    on = want;
    if (on) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', onLeave);
    } else {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      if (layer) layer.textContent = '';
      alive = 0;
    }
  }

  [finePointer, reduce].forEach(function (mq) {
    if (mq.addEventListener) mq.addEventListener('change', sync);
  });
  sync();
})();
