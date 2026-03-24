---
layout: default
title: Travel
permalink: /travel/
description: Places I have wandered through — photographs and stories from around the world.
nav: false
full_width: true
---

<!--
  Script for handling image load errors (case sensitivity/extensions)
  Must be defined before images load to catch immediate 404s.
-->
<script>
  window.travelCarouselImageFallback = function (imgEl) {
    if (!imgEl || !imgEl.parentElement) return;

    var src = imgEl.getAttribute('src') || '';
    var dataKey = 'travelFallbackCandidates';
    var idxKey = 'travelFallbackIndex';

    if (!imgEl.dataset[dataKey]) {
      var match = src.match(/^(.*)\.(jpg|jpeg|webp|JPG|JPEG|WEBP)$/);
      if (!match) {
        imgEl.parentElement.style.background = 'linear-gradient(160deg,#0a0c10 0%,#101822 100%)';
        imgEl.style.display = 'none';
        return;
      }

      var base = match[1];
      var candidates = [base + '.jpg', base + '.JPG', base + '.jpeg', base + '.JPEG', base + '.webp', base + '.WEBP'];
      var unique = [];

      candidates.forEach(function (candidate) {
        if (unique.indexOf(candidate) === -1) unique.push(candidate);
      });

      imgEl.dataset[dataKey] = JSON.stringify(unique);
      imgEl.dataset[idxKey] = String(Math.max(0, unique.indexOf(src)));
    }

    var options = JSON.parse(imgEl.dataset[dataKey]);
    var nextIdx = parseInt(imgEl.dataset[idxKey] || '0', 10) + 1;

    while (nextIdx < options.length && options[nextIdx] === (imgEl.getAttribute('src') || '')) {
      nextIdx += 1;
    }

    if (nextIdx < options.length) {
      imgEl.dataset[idxKey] = String(nextIdx);
      imgEl.src = options[nextIdx];
      return;
    }

    imgEl.parentElement.style.background = 'linear-gradient(160deg,#0a0c10 0%,#101822 100%)';
    imgEl.style.display = 'none';
  };
</script>

<div class="tr-page page-float-in">

  <nav class="pj-nav">
    <div class="pj-nav-inner">
      <a href="{{ '/more-of-me/' | relative_url }}" class="pj-back">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        More of Me
      </a>
      <div class="pj-nav-label">Travel</div>
    </div>
  </nav>

  <!-- ── Hero ──────────────────────────────────────────────────────────── -->
  <div class="tr-hero">
    <div class="tr-hero-bg-word" aria-hidden="true">WANDER</div>
    <div class="pj-hero-overlay"></div>
    <div class="tr-hero-content reveal-up">
      <div class="tr-hero-eyebrow">Pratyay Dutta &nbsp;·&nbsp; Field Notes</div>
      <h1 class="tr-hero-title">
        Places <em>I have</em><br>
        been to
      </h1>
      <p class="tr-hero-subtitle">
        Some cities stayed with me long after I left.<br>
        These are the photographs and fragments from the ones that did.
      </p>
    </div>
  </div>

  <!-- ── Carousel Gallery ─────────────────────────────────────────────── -->
  <section class="tr-gallery-section">
    <div class="tr-gallery-label">From the archive</div>

    <!--
      ══ HOW TO ADD YOUR GALLERY IMAGES ══════════════════════════════════
      Place your travel photos in:  assets/img/travel/gallery/
      Naming: gallery-01.jpg, gallery-02.jpg, … (JPG or WEBP recommended)
      Portrait orientation (3:4) looks best — min 800×1067px.
      Update the src and caption text in each .tr-carousel-slide below.
      ════════════════════════════════════════════════════════════════════
    -->

    <div class="tr-carousel" id="travel-carousel">
      <!-- Viewport clips the track -->
      <div class="tr-carousel-viewport">
        <div class="tr-carousel-track" id="carousel-track">

          <div class="tr-carousel-slide">
            <img
              src="{{ '/assets/img/travel/gallery/gallery-01.jpg' | relative_url }}"
              alt="Travel photograph 1"
              loading="lazy"
            >
            <div class="tr-carousel-caption">The Half Dome at Yosemite NP</div>
          </div>

          <div class="tr-carousel-slide">
            <img
              src="{{ '/assets/img/travel/gallery/gallery-02.jpg' | relative_url }}"
              alt="Travel photograph 2"
              loading="lazy"
            >
            <div class="tr-carousel-caption">New York skyline from The Edge</div>
          </div>

          <div class="tr-carousel-slide">
            <img
              src="{{ '/assets/img/travel/gallery/gallery-03.jpg' | relative_url }}"
              alt="Travel photograph 3"
              loading="lazy"
            >
            <div class="tr-carousel-caption">Halifax Cathedral during the golden hour on a random Tuesday</div>
          </div>

          <div class="tr-carousel-slide">
            <img
              src="{{ '/assets/img/travel/gallery/gallery-04.jpg' | relative_url }}"
              alt="Travel photograph 4"
              loading="lazy"
            >
            <div class="tr-carousel-caption">Sycamore Canyon, Riverside</div>
          </div>

          <div class="tr-carousel-slide">
            <img
              src="{{ '/assets/img/travel/gallery/gallery-05.jpg' | relative_url }}"
              alt="Travel photograph 5"
              loading="lazy"
            >
            <div class="tr-carousel-caption">The Golden Gate Bridge with Karl the Fog</div>
          </div>

          <div class="tr-carousel-slide">
            <img
              src="{{ '/assets/img/travel/gallery/gallery-06.jpg' | relative_url }}"
              alt="Travel photograph 6"
              loading="lazy"
            >
            <div class="tr-carousel-caption">Princep Ghat, Kolkata</div>
          </div>

        </div>
      </div>

      <!-- Bottom UI: dots (left) + arrows (right) -->
      <div class="tr-carousel-ui">
        <div class="tr-carousel-dots" id="carousel-dots" aria-label="Gallery progress"></div>
        <div class="tr-carousel-arrows">
          <button class="tr-carousel-arrow" id="carousel-prev" aria-label="Previous photo">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
          </button>
          <button class="tr-carousel-arrow" id="carousel-next" aria-label="Next photo">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Home & Heart ─────────────────────────────────────────────────── -->
  <section class="tr-hometowns">
    <div class="tr-section-header reveal-up">
      <div class="tr-section-label">Home &amp; Heart</div>
      <h2 class="tr-section-title">The cities that shaped me</h2>
    </div>

    <div class="tr-home-cards">

      <!--
        IMAGE SLOT: assets/img/travel/destinations/kolkata-cover.jpg
        A photograph of Kolkata — recommended: Victoria Memorial, Howrah Bridge, or the trams.
      -->
      <a class="tr-home-card reveal-up" href="{{ '/travel/kolkata/' | relative_url }}" style="--delay:0.06s">
        <img
          src="{{ '/assets/img/travel/destinations/kolkata-cover.jpg' | relative_url }}"
          alt="Kolkata — The city of joy"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#100804 0%,#2a1006 60%,#160a04 100%)'"
        >
        <div class="tr-home-card-overlay"></div>
        <div class="tr-home-card-arrow" aria-hidden="true">→</div>
        <div class="tr-home-card-content">
          <span class="tr-home-card-badge">Hometown</span>
          <h3 class="tr-home-card-title">Kolkata</h3>
          <p class="tr-home-card-sub">The city that made me — and never quite lets me forget.</p>
        </div>
      </a>

      <!--
        IMAGE SLOT: assets/img/travel/riverside/cover.jpg
        A photo of Riverside — UCR Bell Tower, Box Springs Mountain, or downtown orange groves.
      -->
      <a class="tr-home-card reveal-up" href="{{ '/travel/riverside/' | relative_url }}" style="--delay:0.12s">
        <img
          src="{{ '/assets/img/travel/riverside/cover.jpg' | relative_url }}"
          alt="Riverside, California"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#060810 0%,#0c1428 60%,#080e1e 100%)'"
        >
        <div class="tr-home-card-overlay"></div>
        <div class="tr-home-card-arrow" aria-hidden="true">→</div>
        <div class="tr-home-card-content">
          <span class="tr-home-card-badge">Current Home</span>
          <h3 class="tr-home-card-title">Riverside</h3>
          <p class="tr-home-card-sub">Where the San Bernardino foothills meet the Inland Empire. PhD life, desert sunsets, and a city that grew on me.</p>
        </div>
      </a>

    </div>
  </section>

  <!-- ── Countries explored ────────────────────────────────────────────── -->
  <section class="tr-destinations">
    <div class="tr-section-header reveal-up">
      <div class="tr-section-label">Countries</div>
      <h2 class="tr-section-title">Places on the map</h2>
    </div>

    <div class="tr-dest-grid tr-dest-grid--countries">

      <!--
        IMAGE SLOT: assets/img/travel/destinations/india-cover.jpg
        A wide shot of India — Rajasthan desert, Himalayan peak, or the Ganges at dusk.
      -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/india/' | relative_url }}" style="--delay:0.06s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/india-cover.jpg' | relative_url }}"
          alt="India"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#100a02 0%,#221402 60%,#180c02 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">South Asia</div>
          <h3 class="tr-dest-name">India</h3>
          <p class="tr-dest-sub">Rajasthan, Kashmir, the Himalayas, Goa, and everything in between.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

      <!--
        IMAGE SLOT: assets/img/travel/destinations/canada-cover.jpg
        Halifax waterfront, CN Tower, or Niagara Falls.
      -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/canada/' | relative_url }}" style="--delay:0.12s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/canada-cover.jpg' | relative_url }}"
          alt="Canada"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#040810 0%,#061828 60%,#040e1e 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">North America</div>
          <h3 class="tr-dest-name">Canada</h3>
          <p class="tr-dest-sub">Halifax, Toronto, and Niagara — research and exploration on the Atlantic coast.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

      <!--
        IMAGE SLOT: assets/img/travel/destinations/usa-cover.jpg
        Golden Gate, national park, or California coast.
      -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/usa/' | relative_url }}" style="--delay:0.18s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/usa-cover.jpg' | relative_url }}"
          alt="United States"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#080a10 0%,#141c2a 60%,#0c1220 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">North America</div>
          <h3 class="tr-dest-name">United States</h3>
          <p class="tr-dest-sub">California, New York, Nevada, national parks — a continent of contrasts.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

      <!--
        IMAGE SLOT: assets/img/travel/destinations/malaysia-cover.jpg
        Petronas Twin Towers, street food, or the rainforest.
      -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/malaysia/' | relative_url }}" style="--delay:0.24s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/malaysia-cover.jpg' | relative_url }}"
          alt="Malaysia"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#040a04 0%,#081808 60%,#060e06 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">Southeast Asia</div>
          <h3 class="tr-dest-name">Malaysia</h3>
          <p class="tr-dest-sub">Kuala Lumpur — where the towers pierce the clouds and every street corner smells of something extraordinary.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

    </div>
  </section>

  <footer class="pj-footer">
    <div class="pj-footer-inner">
      <a href="{{ '/more-of-me/' | relative_url }}" class="pj-footer-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to More of Me
      </a>
      <div class="pj-footer-name">Pratyay Dutta — Field Notes</div>
    </div>
  </footer>

</div>

<script>
  (function () {

    /* ── Intersection-observer reveals ───────────────────────────── */
    document.querySelectorAll('.reveal-up').forEach(function (el) {
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { el.classList.add('revealed'); obs.disconnect(); }
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
      obs.observe(el);
    });

    /* ── Carousel ────────────────────────────────────────────────── */
    var track      = document.getElementById('carousel-track');
    var viewport   = track && track.parentElement;
    var dotsWrap   = document.getElementById('carousel-dots');
    var prevBtn    = document.getElementById('carousel-prev');
    var nextBtn    = document.getElementById('carousel-next');

    if (!track || !viewport) return;

    var slides     = Array.from(track.querySelectorAll('.tr-carousel-slide'));
    var total      = slides.length;
    var current    = 0;
    var autoDelay  = 3500;   /* ms between auto-advances */
    var autoTimer  = null;
    var isAnimating = false;
    var GAP        = 16;     /* px, must match CSS gap */

    /* ── helpers ──────────────────────────────────────────────── */
    function visibleCount() {
      var w = window.innerWidth;
      if (w < 640)  return 1;
      if (w < 1024) return 2;
      return 3;
    }

    function slideWidth() {
      var n   = visibleCount();
      var vw  = viewport.offsetWidth;
      return (vw - GAP * (n - 1)) / n;
    }

    function maxIndex() {
      return Math.max(0, total - visibleCount());
    }

    /* ── dots ──────────────────────────────────────────────────── */
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className    = 'tr-carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });

    function updateDots() {
      var dots = dotsWrap.querySelectorAll('.tr-carousel-dot');
      dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
    }

    /* ── movement ──────────────────────────────────────────────── */
    function goTo(idx) {
      if (isAnimating) return;
      current = Math.min(Math.max(idx, 0), maxIndex());
      var offset = current * (slideWidth() + GAP);
      track.style.transform = 'translateX(-' + offset + 'px)';
      updateDots();
      resetAuto();
    }

    function next() { goTo(current >= maxIndex() ? 0 : current + 1); }
    function prev() { goTo(current <= 0 ? maxIndex() : current - 1); }

    /* ── auto-play ─────────────────────────────────────────────── */
    function startAuto() { autoTimer = setInterval(next, autoDelay); }
    function stopAuto()  { clearInterval(autoTimer); }
    function resetAuto() { stopAuto(); startAuto(); }

    /* ── events ────────────────────────────────────────────────── */
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    /* pause when mouse is inside the carousel */
    viewport.addEventListener('mouseenter', stopAuto);
    viewport.addEventListener('mouseleave', startAuto);

    /* touch / swipe support */
    var touchStartX = 0;
    viewport.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    });

    /* recalculate on resize */
    window.addEventListener('resize', function () { goTo(current); });

    /* ── start ─────────────────────────────────────────────────── */
    goTo(0);
    startAuto();
  })();
</script>
