---
layout: default
title: Kashmir — Travel
permalink: /travel/india/kashmir/
description: Field notes from Kashmir — Dal Lake, the Mughal gardens, and mountains that make you understand the phrase "heaven on earth".
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
      <div class="pj-nav-label">Kashmir</div>
    </div>
  </nav>

  <!--
    IMAGE SLOT: assets/img/travel/india/kashmir-cover.jpg
    Recommended: Dal Lake at dawn with the Zabarwan Range reflected,
    a Mughal garden in bloom, or snow-capped peaks over a valley.
    Min 1400×800px, landscape.
  -->
  <div class="tr-dest-hero">
    <img
      src="{{ '/assets/img/travel/india/kashmir-cover.jpg' | relative_url }}"
      alt="Kashmir — Dal Lake and the Himalayas"
      data-fallback-bg="linear-gradient(160deg,#040a16 0%,#081828 60%,#060e1e 100%)"
      onerror="imageExtFallback(this)"
    >
    <div class="tr-dest-hero-overlay"></div>
    <div class="tr-dest-hero-text">
      <div class="tr-dest-hero-tag">India &nbsp;·&nbsp; Jammu &amp; Kashmir</div>
      <h1 class="tr-dest-hero-title">Kashmir</h1>
      <p class="tr-dest-hero-subtitle">Heaven on earth is not a metaphor. It is a valley in the Himalayas where the mountains seem to have been placed there deliberately, for effect.</p>
    </div>
  </div>

  <div class="tr-dest-body">

    <div class="tr-highlights reveal-up">
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🛶</span>
        <div class="tr-highlight-val">Dal Lake</div>
        <div class="tr-highlight-label">Shikara at sunrise</div>
      </div>
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">🌸</span>
        <div class="tr-highlight-val">Mughal Gardens</div>
        <div class="tr-highlight-label">Shalimar, Nishat, Chashme Shahi</div>
      </div>
      <div class="tr-highlight-item">
        <span class="tr-highlight-icon">❄️</span>
        <div class="tr-highlight-val">Gulmarg</div>
        <div class="tr-highlight-label">Ski slopes &amp; gondola</div>
      </div>
    </div>

    <div class="tr-pull-quote reveal-up">
      <p>"Kashmir is not just beautiful. It is the kind of beautiful that makes beauty elsewhere seem, temporarily, like a pale imitation. You come here and understand why empires wanted to possess it."</p>
      <cite>— Personal notes, morning on Dal Lake</cite>
    </div>

    <div class="tr-dest-section reveal-up">
      <div class="tr-dest-section-label">Dal Lake</div>
      <h2 class="tr-dest-section-title">A world on water</h2>
      <div class="tr-dest-richtext">
        <p>Dal Lake is not a lake so much as a floating city. The houseboats along the shore — many of them architecturally ornate, with carved walnut woodwork and living rooms furnished like Victorian parlours — have housed travellers for centuries. In the morning, before the mist lifts, the shikaras move silently through the water carrying flowers, vegetables, and tourists who cannot quite believe where they are.</p>
        <p>The best moment is the early morning: a shikara ride at dawn when the mountains are reflected in the still water and the only sounds are oars and birdsong. The Zabarwan Range turns pink, then gold, then white as the sun rises. It is the kind of sight that becomes the reference point for all other beautiful things you will ever see.</p>
      </div>
    </div>

    {% include travel_featured.liquid dir="india/kashmir" name="Kashmir" %}

    <div class="tr-dest-section reveal-up">
      <div class="tr-dest-section-label">The gardens and beyond</div>
      <h2 class="tr-dest-section-title">Shalimar and the Mughal inheritance</h2>
      <div class="tr-dest-richtext">
        <p>The Mughal emperors came to Kashmir for exactly the reasons you might expect: the unbearable heat of the plains, the lure of a landscape that looked like paradise. They built three formal gardens — Shalimar Bagh, Nishat Bagh, Chashme Shahi — that step up the hillside above Dal Lake in terraced levels of chinar trees, fountains, and flower beds. In autumn, the chinar trees turn red and orange and the gardens look like something from a medieval Persian manuscript come to life.</p>
        <p>Gulmarg, an hour from Srinagar, is Kashmir in a different mood entirely — a high-altitude meadow ringed by Himalayan peaks that in winter becomes one of Asia's finest ski resorts. The gondola ride up to the upper slopes offers views that require no commentary.</p>
      </div>
    </div>

    {% include travel_gallery.liquid dir="india/kashmir" name="Kashmir" label="Photographs" %}

    <div class="tr-pull-quote reveal-up">
      <p>"Every empire that came to Kashmir found a reason to stay. Standing at the edge of Dal Lake at dusk, watching the mountains go dark one peak at a time, you understand exactly why."</p>
    </div>

  </div>

  <footer class="pj-footer">
    <div class="pj-footer-inner">
      <a href="{{ '/travel/india/' | relative_url }}" class="pj-footer-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to India
      </a>
      <div class="pj-footer-name">Kashmir, India</div>
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
