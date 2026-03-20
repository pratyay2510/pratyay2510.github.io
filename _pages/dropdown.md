---
layout: default
title: More of me
nav: true
nav_order: 8
permalink: /more-of-me/
description: Beyond research — books, sketchbooks, and personal creative work.
full_width: true
---

<div class="mm-page page-float-in">

  <nav class="pj-nav">
    <div class="pj-nav-inner">
      <a href="{{ '/' | relative_url }}" class="pj-back">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to Portfolio
      </a>
      <div class="pj-nav-label">More of Me</div>
    </div>
  </nav>

  <div class="mm-hero">
    <div class="pj-hero-overlay"></div>
    <div class="mm-hero-content reveal-up">
      <div class="pj-chapter">Beyond Research &nbsp;·&nbsp; Pratyay Dutta</div>
      <h1 class="mm-hero-title">More of Me</h1>
      <p class="mm-hero-subtitle">Stories, sketches, and shelf space — a quieter corner of this site.</p>
    </div>
  </div>

  <main class="mm-body">
    <div class="mm-grid">

      <a class="mm-card reveal-up" href="{{ '/books/' | relative_url }}" style="--delay:0.06s">
        <div class="mm-card-bg mm-card-bg--books"></div>
        <div class="mm-card-overlay"></div>
        <div class="mm-card-content">
          <div class="mm-card-num">01</div>
          <div class="mm-card-category">Reading</div>
          <h3 class="mm-card-name">Bookshelf</h3>
          <p class="mm-card-tagline">Novels, thrillers, literary fiction, and lifelong favorites — a curated reading list organized by genre.</p>
          <div class="mm-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

      <a class="mm-card reveal-up" href="{{ '/digital-art/' | relative_url }}" style="--delay:0.12s">
        <div class="mm-card-bg mm-card-bg--digital"></div>
        <div class="mm-card-overlay"></div>
        <div class="mm-card-content">
          <div class="mm-card-num">02</div>
          <div class="mm-card-category">Digital Art</div>
          <h3 class="mm-card-name">Digital Art</h3>
          <p class="mm-card-tagline">Color-forward studies and stylized character portraits from Procreate workflows.</p>
          <div class="mm-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

      <a class="mm-card reveal-up" href="{{ '/pen-art/' | relative_url }}" style="--delay:0.18s">
        <div class="mm-card-bg mm-card-bg--pen"></div>
        <div class="mm-card-overlay"></div>
        <div class="mm-card-content">
          <div class="mm-card-num">03</div>
          <div class="mm-card-category">Pen &amp; Ink</div>
          <h3 class="mm-card-name">Pen Art</h3>
          <p class="mm-card-tagline">Ink textures, line studies, and hand-drawn personal sketches.</p>
          <div class="mm-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

    </div>
  </main>

  <footer class="pj-footer">
    <div class="pj-footer-inner">
      <a href="{{ '/' | relative_url }}" class="pj-footer-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Return to Portfolio
      </a>
      <div class="pj-footer-name">Pratyay Dutta — UC Riverside</div>
    </div>
  </footer>

</div>

<script>
  (function () {
    document.querySelectorAll('.reveal-up').forEach(function (el) {
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { el.classList.add('revealed'); obs.disconnect(); }
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  })();
</script>
