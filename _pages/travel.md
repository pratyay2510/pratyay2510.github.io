---
layout: default
title: Travel
permalink: /travel/
description: Places I have wandered through — photographs and stories from around the world.
nav: false
full_width: true
---

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

  <!-- ── Scrollable Gallery ────────────────────────────────────────────── -->
  <section class="tr-gallery-section">
    <div class="tr-gallery-label">From the archive</div>
    <div class="tr-gallery-scroll" id="gallery-scroll">

      <!--
        ══ HOW TO ADD YOUR GALLERY IMAGES ══════════════════════════════════
        Place your travel photos in:  assets/img/travel/gallery/
        Naming: gallery-01.jpg, gallery-02.jpg, … (JPG or WEBP recommended)
        Minimum resolution: 800×1067px (portrait 3:4 works best here).
        Replace each src below with your actual filename.
        ════════════════════════════════════════════════════════════════════
      -->

      <div class="tr-gallery-item">
        <img
          src="{{ '/assets/img/travel/gallery/gallery-01.jpg' | relative_url }}"
          alt="Travel photograph 1"
          loading="lazy"
          onerror="this.parentElement.style.background='linear-gradient(160deg,#0e0c06 0%,#2a1f08 100%)';this.style.display='none'"
        >
        <div class="tr-gallery-caption">Somewhere beautiful</div>
      </div>

      <div class="tr-gallery-item">
        <img
          src="{{ '/assets/img/travel/gallery/gallery-02.jpg' | relative_url }}"
          alt="Travel photograph 2"
          loading="lazy"
          onerror="this.parentElement.style.background='linear-gradient(160deg,#060c0e 0%,#082028 100%)';this.style.display='none'"
        >
        <div class="tr-gallery-caption">Golden hour, somewhere</div>
      </div>

      <div class="tr-gallery-item">
        <img
          src="{{ '/assets/img/travel/gallery/gallery-03.jpg' | relative_url }}"
          alt="Travel photograph 3"
          loading="lazy"
          onerror="this.parentElement.style.background='linear-gradient(160deg,#0a0606 0%,#1e0808 100%)';this.style.display='none'"
        >
        <div class="tr-gallery-caption">City lights</div>
      </div>

      <div class="tr-gallery-item">
        <img
          src="{{ '/assets/img/travel/gallery/gallery-04.jpg' | relative_url }}"
          alt="Travel photograph 4"
          loading="lazy"
          onerror="this.parentElement.style.background='linear-gradient(160deg,#060a06 0%,#0c1e0a 100%)';this.style.display='none'"
        >
        <div class="tr-gallery-caption">Through the lens</div>
      </div>

      <div class="tr-gallery-item">
        <img
          src="{{ '/assets/img/travel/gallery/gallery-05.jpg' | relative_url }}"
          alt="Travel photograph 5"
          loading="lazy"
          onerror="this.parentElement.style.background='linear-gradient(160deg,#0c0a04 0%,#221804 100%)';this.style.display='none'"
        >
        <div class="tr-gallery-caption">A moment in time</div>
      </div>

      <div class="tr-gallery-item">
        <img
          src="{{ '/assets/img/travel/gallery/gallery-06.jpg' | relative_url }}"
          alt="Travel photograph 6"
          loading="lazy"
          onerror="this.parentElement.style.background='linear-gradient(160deg,#08060c 0%,#14081e 100%)';this.style.display='none'"
        >
        <div class="tr-gallery-caption">Far from home</div>
      </div>

    </div>
  </section>

  <!-- ── Destinations ──────────────────────────────────────────────────── -->
  <section class="tr-destinations">
    <div class="tr-section-header reveal-up">
      <div class="tr-section-label">Destinations</div>
      <h2 class="tr-section-title">Places on the map</h2>
    </div>

    <div class="tr-dest-grid">

      <!-- Kolkata -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/kolkata/' | relative_url }}" style="--delay:0.06s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/kolkata-cover.jpg' | relative_url }}"
          alt="Kolkata, India"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#100804 0%,#2a1006 60%,#160a04 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">India</div>
          <h3 class="tr-dest-name">Kolkata</h3>
          <p class="tr-dest-sub">The city of joy — and where it all began.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

      <!-- Halifax / Canada -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/halifax/' | relative_url }}" style="--delay:0.12s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/halifax-cover.jpg' | relative_url }}"
          alt="Halifax, Nova Scotia, Canada"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#040810 0%,#061220 60%,#040a14 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">Canada</div>
          <h3 class="tr-dest-name">Halifax</h3>
          <p class="tr-dest-sub">Harbour fog and summer research at Dalhousie.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

      <!-- Los Angeles -->
      <a class="tr-dest-card reveal-up" href="{{ '/travel/los-angeles/' | relative_url }}" style="--delay:0.18s">
        <img
          class="tr-dest-img"
          src="{{ '/assets/img/travel/destinations/la-cover.jpg' | relative_url }}"
          alt="Los Angeles, California"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#0a0a04 0%,#1a1804 60%,#100e04 100%)'"
        >
        <div class="tr-dest-overlay"></div>
        <div class="tr-dest-content">
          <div class="tr-dest-tag">USA</div>
          <h3 class="tr-dest-name">Los Angeles</h3>
          <p class="tr-dest-sub">Sunsets on the Pacific — seventy miles from Riverside.</p>
        </div>
        <div class="tr-dest-arrow" aria-hidden="true">→</div>
      </a>

      <!--
        ══ ADD MORE DESTINATIONS HERE ═══════════════════════════════════════
        Copy the block above and update:
          - href:  /travel/[city-name]/  (create a matching _pages/travel_[city].md)
          - src:   assets/img/travel/destinations/[city]-cover.jpg
          - Tag, Name, Subtitle
        ═════════════════════════════════════════════════════════════════════
      -->

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
    /* Intersection-observer reveals */
    document.querySelectorAll('.reveal-up').forEach(function (el) {
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { el.classList.add('revealed'); obs.disconnect(); }
      }, { threshold: 0.08 });
      obs.observe(el);
    });
  })();
</script>
