(function() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  if (!ctx) {
    return;
  }

  canvas.id = 'interactive-dotfield';
  canvas.setAttribute('aria-hidden', 'true');

  var style = document.createElement('style');
  style.textContent = [
    '#interactive-dotfield {',
    '  position: fixed;',
    '  inset: 0;',
    '  width: 100vw;',
    '  height: 100vh;',
    '  pointer-events: none;',
    '  z-index: 0;',
    '}'
  ].join('\n');

  document.head.appendChild(style);
  document.body.insertBefore(canvas, document.body.firstChild);

  var state = {
    width: 0,
    height: 0,
    dpr: 1,
    mouseX: window.innerWidth * 0.5,
    mouseY: window.innerHeight * 0.35,
    rafId: 0
  };

  function resize() {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(state.width * state.dpr);
    canvas.height = Math.floor(state.height * state.dpr);
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  }

  function drawFrame() {
    ctx.clearRect(0, 0, state.width, state.height);

    // Deep-space gradient backdrop with warm floor glow.
    var bg = ctx.createLinearGradient(0, 0, 0, state.height);
    bg.addColorStop(0, '#04070f');
    bg.addColorStop(0.6, '#05080f');
    bg.addColorStop(1, '#0f0802');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, state.width, state.height);

    var floorGlow = ctx.createLinearGradient(0, state.height * 0.58, 0, state.height);
    floorGlow.addColorStop(0, 'rgba(255, 168, 33, 0.0)');
    floorGlow.addColorStop(1, 'rgba(255, 168, 33, 0.18)');
    ctx.fillStyle = floorGlow;
    ctx.fillRect(0, 0, state.width, state.height);

    var baseSpacing = state.width < 900 ? 34 : 38;
    var influenceRadius = 280;

    for (var y = baseSpacing * 0.4; y <= state.height + baseSpacing; ) {
      var yNorm = y / Math.max(state.height, 1);
      var rowSpacing = baseSpacing + (1 - yNorm) * 9;

      for (var x = baseSpacing * 0.5; x <= state.width + baseSpacing; x += baseSpacing) {
        var dx = x - state.mouseX;
        var dy = y - state.mouseY;
        var distSq = dx * dx + dy * dy;
        var influence = Math.exp(-distSq / (influenceRadius * influenceRadius));

        // Pull points toward cursor so spacing gets tighter near the pointer.
        var pull = 0.56 * influence;
        var px = state.mouseX + dx * (1 - pull);
        var py = state.mouseY + dy * (1 - pull);

        var depth = py / Math.max(state.height, 1);
        var hue = 34 + depth * 8;
        var sat = 90;
        var light = 58 + depth * 8;
        var alpha = 0.14 + 0.44 * depth + 0.35 * influence;
        var radius = 0.85 + 0.5 * depth + 1.1 * influence;

        ctx.beginPath();
        ctx.fillStyle = 'hsla(' + hue + ', ' + sat + '%, ' + light + '%, ' + alpha + ')';
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      y += rowSpacing;
    }

    if (!reduceMotion) {
      state.rafId = window.requestAnimationFrame(drawFrame);
    }
  }

  function pointerMove(event) {
    state.mouseX = event.clientX;
    state.mouseY = event.clientY;

    if (reduceMotion) {
      drawFrame();
    }
  }

  function pointerLeave() {
    state.mouseX = state.width * 0.5;
    state.mouseY = state.height * 0.35;

    if (reduceMotion) {
      drawFrame();
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', pointerMove, { passive: true });
  window.addEventListener('pointerleave', pointerLeave, { passive: true });

  resize();
  drawFrame();
})();
