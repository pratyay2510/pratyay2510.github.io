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
    '  z-index: 6;',
    '  mix-blend-mode: screen;',
    '  opacity: 0.42;',
    '}'
  ].join('\n');

  document.head.appendChild(style);
  document.body.insertBefore(canvas, document.body.firstChild);

  var state = {
    width: 0,
    height: 0,
    dpr: 1,
    targetX: window.innerWidth * 0.5,
    targetY: window.innerHeight * 0.35,
    focusX: window.innerWidth * 0.5,
    focusY: window.innerHeight * 0.35,
    lastFrame: 0,
    rafId: 0
  };

  function resize() {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(state.width * state.dpr);
    canvas.height = Math.floor(state.height * state.dpr);
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    // Resizing the canvas clears it, so repaint even when the loop is asleep.
    render();
  }

  function restAtCenter() {
    state.targetX = state.width * 0.5;
    state.targetY = state.height * 0.35;
  }

  // Runs only while the focus point is travelling; a settled field costs nothing.
  function schedule() {
    if (!state.rafId) {
      state.rafId = window.requestAnimationFrame(tick);
    }
  }

  function tick(now) {
    state.rafId = 0;
    // Time-based so the trail feels the same at 60Hz and 120Hz.
    var dt = state.lastFrame ? Math.min((now - state.lastFrame) / 1000, 0.05) : 1 / 60;
    state.lastFrame = now;

    // Smooth lag/inertia to mimic antigravity-like trailing interaction.
    var follow = 1 - Math.pow(1 - 0.09, dt * 60);
    state.focusX += (state.targetX - state.focusX) * follow;
    state.focusY += (state.targetY - state.focusY) * follow;

    var settled = Math.abs(state.targetX - state.focusX) < 0.5 && Math.abs(state.targetY - state.focusY) < 0.5;
    if (settled) {
      state.focusX = state.targetX;
      state.focusY = state.targetY;
      state.lastFrame = 0;
    }

    render();

    if (!settled) {
      schedule();
    }
  }

  function render() {
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

    var baseSpacing = state.width < 900 ? 42 : 48;
    var influenceRadius = 300;

    for (var y = baseSpacing * 0.4; y <= state.height + baseSpacing; ) {
      var yNorm = y / Math.max(state.height, 1);
      var rowSpacing = baseSpacing + (1 - yNorm) * 9;

      for (var x = baseSpacing * 0.5; x <= state.width + baseSpacing; x += baseSpacing) {
        var dx = x - state.focusX;
        var dy = y - state.focusY;
        var distSq = dx * dx + dy * dy;
        var influence = Math.exp(-distSq / (influenceRadius * influenceRadius));

        // Pull points toward cursor so spacing gets tighter near the pointer.
        var pull = 0.52 * influence;
        var px = state.focusX + dx * (1 - pull);
        var py = state.focusY + dy * (1 - pull);

        var depth = py / Math.max(state.height, 1);
        var hue = 34 + depth * 8;
        var sat = 90;
        var light = 58 + depth * 8;
        var alpha = 0.06 + 0.2 * depth + 0.19 * influence;
        var radius = 0.65 + 0.42 * depth + 0.88 * influence;

        ctx.beginPath();
        ctx.fillStyle = 'hsla(' + hue + ', ' + sat + '%, ' + light + '%, ' + alpha + ')';
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      y += rowSpacing;
    }
  }

  function pointerMove(event) {
    state.targetX = event.clientX;
    state.targetY = event.clientY;
    schedule();
  }

  // Pointer gone: drift back to the resting point once, then stop.
  function pointerLeave() {
    restAtCenter();
    schedule();
  }

  window.addEventListener('resize', resize, { passive: true });

  // Reduced motion gets the same field, painted once and left still.
  if (!reduceMotion) {
    window.addEventListener('pointermove', pointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', pointerLeave, { passive: true });
  }

  resize();
})();
