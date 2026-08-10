---
layout: default
title: Rajasthan — Travel
permalink: /travel/india/rajasthan/
description: Field notes from Rajasthan — the land of kings, desert light, and cities dipped in colour.
nav: false
full_width: true
---

<div class="tr-dest-page page-float-in">

  <nav class="pj-nav">
    <div class="pj-nav-inner">
      <a href="{{ '/travel/india/' | relative_url }}" class="pj-back">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        India
      </a>
      <div class="pj-nav-label">Rajasthan</div>
    </div>
  </nav>

  <!--
    IMAGE SLOT: assets/img/travel/india/rajasthan-cover.jpg
    Recommended: Jaisalmer fort at golden hour, Jodhpur's blue houses
    from above, or the Hawa Mahal façade. Min 1400×800px.
  -->
  <div class="tr-dest-hero">
    <img
      src="{{ '/assets/img/travel/india/rajasthan-cover.jpg' | relative_url }}"
      alt="Rajasthan, India"
      data-fallback-bg="linear-gradient(160deg,#180e02 0%,#341c04 60%,#201004 100%)"
      onerror="imageExtFallback(this)"
    >
    <div class="tr-dest-hero-overlay"></div>
    <div class="tr-dest-hero-text">
      <div class="tr-dest-hero-tag">India &nbsp;·&nbsp; Rajasthan</div>
      <h1 class="tr-dest-hero-title">Rajasthan</h1>
      <p class="tr-dest-hero-subtitle">The land of kings — where the desert is golden and every fort holds a thousand years of silence.</p>
    </div>
  </div>

  <div class="tr-dest-body">

    <div class="tr-highlights reveal-up">
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🏰</span>
        <div class="tr-highlight-val">Jaipur</div>
        <div class="tr-highlight-label">The Pink City</div>
      </div>
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🔵</span>
        <div class="tr-highlight-val">Jodhpur</div>
        <div class="tr-highlight-label">The Blue City</div>
      </div>
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🏞️</span>
        <div class="tr-highlight-val">Udaipur</div>
        <div class="tr-highlight-label">City of Lakes</div>
      </div>
    </div>

    <div class="tr-pull-quote reveal-up">
      <p>"In Rajasthan, the desert does not feel empty. It feels full of everything that time has forgotten — and somehow decided to keep."</p>
      <cite>— Personal notes, winter trip</cite>
    </div>

    <div class="tr-dest-section reveal-up">
      <div class="tr-dest-section-label">Jaipur</div>
      <h2 class="tr-dest-section-title">The Pink City and its palaces</h2>
      <div class="tr-dest-richtext">
        <p>Jaipur announces itself in terracotta and rose. The old city's buildings are painted in the same warm hue — a decree from the maharaja of 1876, who wanted the city to look festive for a royal visit and never undid the order. Wandering through the bazaars around the Hawa Mahal, you feel the weight of a city that has been showing off for a very long time.</p>
        <p>The Amber Fort, perched above the city on a ridge, is the Rajasthan I had imagined before I arrived. The approach by elephant or on foot is theatrical. Inside, the Hall of Mirrors — Sheesh Mahal — catches every candle flame and multiplies it a thousand times. It is the kind of room that explains why people built palaces.</p>
      </div>
    </div>

    {% include travel_featured.liquid dir="india/rajasthan" name="Rajasthan" %}

    <div class="tr-dest-section reveal-up">
      <div class="tr-dest-section-label">Jodhpur</div>
      <h2 class="tr-dest-section-title">Blue houses under a blue sky</h2>
      <div class="tr-dest-richtext">
        <p>Jodhpur earns its nickname. Stand at the base of Mehrangarh Fort and look down at the city — it is an improbable sea of blue, indigo, and cobalt stretching to the horizon. The traditional explanation is that the colour repels insects and keeps the houses cool; the practical effect is that the whole city looks like it has been dreamed rather than built.</p>
        <p>Mehrangarh Fort itself is arguably the finest fort in Rajasthan — a claim fiercely contested by Amber, Chittorgarh, and Kumbhalgarh. But the scale here is breathtaking: walls that rise fifteen stories from solid rock, cannons still pointing at nothing in particular, and a museum inside that is among the best-curated I have encountered in India.</p>
      </div>
    </div>

    {% include travel_gallery.liquid dir="india/rajasthan" name="Rajasthan" label="Photographs" %}

    <div class="tr-pull-quote reveal-up">
      <p>"Udaipur is the place you go when you need reminding that human beings are capable of extraordinary things when they decide to build something beautiful."</p>
    </div>

  </div>

  <footer class="pj-footer">
    <div class="pj-footer-inner">
      <a href="{{ '/travel/india/' | relative_url }}" class="pj-footer-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to India
      </a>
      <div class="pj-footer-name">Rajasthan, India</div>
    </div>
  </footer>

</div>

<script>
  (function () {
    document.querySelectorAll('.reveal-up').forEach(function (el) {
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { el.classList.add('revealed'); obs.disconnect(); }
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
      obs.observe(el);
    });
  })();
</script>
