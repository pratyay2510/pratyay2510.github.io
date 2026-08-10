---
layout: default
title: Kolkata — Travel
permalink: /travel/kolkata/
description: Field notes and photographs from Kolkata — the city of joy, and where it all began.
nav: false
full_width: true
---

<div class="tr-dest-page page-float-in">

  <nav class="pj-nav">
    <div class="pj-nav-inner">
      <a href="{{ '/travel/' | relative_url }}" class="pj-back">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Travel
      </a>
      <div class="pj-nav-label">Kolkata, India</div>
    </div>
  </nav>

  <!-- ── Hero image ──────────────────────────────────────────────────── -->
  <!--
    IMAGE SLOT: Replace the src below with your Kolkata hero photo.
    File location: assets/img/travel/destinations/kolkata-cover.jpg
    Recommended: landscape, min 1400×800px, JPG or WEBP.
  -->
  <div class="tr-dest-hero">
    <img
      src="{{ '/assets/img/travel/destinations/kolkata-cover.jpg' | relative_url }}"
      alt="Kolkata skyline"
      data-fallback-bg="linear-gradient(160deg,#100804 0%,#2a1006 60%,#160a04 100%)"
      onerror="imageExtFallback(this)"
    >
    <div class="tr-dest-hero-overlay"></div>
    <div class="tr-dest-hero-text">
      <div class="tr-dest-hero-tag">India &nbsp;·&nbsp; West Bengal</div>
      <h1 class="tr-dest-hero-title">Kolkata</h1>
      <p class="tr-dest-hero-subtitle">The city that never quite lets you go.</p>
    </div>
  </div>

  <!-- ── Body ───────────────────────────────────────────────────────── -->
  <div class="tr-dest-body">

    <!-- Highlights strip -->
    <div class="tr-highlights reveal-up">
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🌆</span>
        <div class="tr-highlight-val">Hometown</div>
        <div class="tr-highlight-label">Where I grew up</div>
      </div>
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">📚</span>
        <div class="tr-highlight-val">CBS</div>
        <div class="tr-highlight-label">Calcutta Boys' School</div>
      </div>
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🎓</span>
        <div class="tr-highlight-val">Jadavpur</div>
        <div class="tr-highlight-label">University, 2019–2023</div>
      </div>
    </div>

    <!-- Pull quote -->
    <div class="tr-pull-quote reveal-up">
      <p>"If you know Kolkata, you know that no city in the world wears its contradictions quite so openly — chaotic and tender, crumbling and alive."</p>
      <cite>— Personal note, written on a return flight</cite>
    </div>

    <!-- Section: The city -->
    <div class="tr-dest-section reveal-up">
      <div class="tr-dest-section-label">The city</div>
      <h2 class="tr-dest-section-title">Joy, chaos, and everything in between</h2>
      <div class="tr-dest-richtext">
        <p>Kolkata is not a city you visit — it is a city you are from, or it claims you. I grew up navigating its trams, its monsoon floods, its adda culture and its ineffable sense that life here is lived at a slightly different tempo than everywhere else.</p>
        <p>Twelve years at Calcutta Boys' School. Four years at Jadavpur University. The city is woven into the way I think about problems, the way I argue, and the way I still reach for mishti doi whenever I land back home.</p>
      </div>
    </div>

    <!-- Featured pair -->
    {% include travel_featured.liquid dir="kolkata" name="Kolkata" %}

    <!-- Section: Jadavpur -->
    <div class="tr-dest-section reveal-up">
      <div class="tr-dest-section-label">University years</div>
      <h2 class="tr-dest-section-title">Jadavpur, and learning to think</h2>
      <div class="tr-dest-richtext">
        <p>Four years of Electronics and Telecommunication Engineering at Jadavpur University shaped me more than I anticipated. The campus in Jadavpur has a particular gravity — a sense that learning here is earned, not handed over.</p>
        <p>It was here that I learnt what it is to feel for others. Jadavpur taught me to question everything. It taught me dissent. It made me understand why literacy without education and compassion is just a pen without ink. </p>
      </div>
    </div>

    <!-- Photo gallery — auto-populated from the folder -->
    {% include travel_gallery.liquid dir="kolkata" name="Kolkata" label="Photographs" %}

    <!-- Closing pull quote -->
    <div class="tr-pull-quote reveal-up">
      <p>"Every time I come back, the city has changed imperceptibly — and yet it feels exactly the same. That's the trick Kolkata plays on you."</p>
    </div>

  </div>

  <footer class="pj-footer">
    <div class="pj-footer-inner">
      <a href="{{ '/travel/' | relative_url }}" class="pj-footer-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to Travel
      </a>
      <div class="pj-footer-name">Kolkata, India</div>
    </div>
  </footer>

</div>

<script>
  (function () {
    document.querySelectorAll('.reveal-up').forEach(function (el) {
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { el.classList.add('revealed'); obs.disconnect(); }
      }, { threshold: 0.08 });
      obs.observe(el);
    });
  })();
</script>
