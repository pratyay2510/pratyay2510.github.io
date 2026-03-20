---
layout: default
title: Canada — Travel
permalink: /travel/canada/
description: Travels through Canada — Halifax, Toronto, and Niagara Falls.
nav: false
full_width: true
---

<div class="tr-page page-float-in">

  <nav class="pj-nav">
    <div class="pj-nav-inner">
      <a href="{{ '/travel/' | relative_url }}" class="pj-back">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Travel
      </a>
      <div class="pj-nav-label">Canada</div>
    </div>
  </nav>

  <div class="tr-hero">
    <div class="tr-hero-bg-word" aria-hidden="true">CANADA</div>
    <div class="pj-hero-overlay"></div>
    <div class="tr-hero-content reveal-up">
      <div class="tr-hero-eyebrow">North America &nbsp;·&nbsp; Pratyay Dutta</div>
      <h1 class="tr-hero-title">
        Harbour fog<br>
        <em>and open water</em>
      </h1>
      <p class="tr-hero-subtitle">
        Halifax was my base — a maritime city with an unexpected warmth.<br>
        Toronto and Niagara were the excursions that completed the picture.
      </p>
    </div>
  </div>

  <div class="tr-hub-intro">
    <p class="tr-hub-intro-text">
      I came to Canada on a MITACS Globalink Fellowship in the summer of 2022, based in Halifax for twelve weeks. In the gaps between research, I made my way to Toronto and stood at the edge of Niagara Falls. Canada, in the end, was mostly Halifax — and Halifax was more than enough.
    </p>
  </div>

  <section class="tr-hub-places-section">
    <div class="tr-section-header reveal-up">
      <div class="tr-section-label">Destinations</div>
      <h2 class="tr-section-title">Places I have been</h2>
    </div>

    <div class="tr-hub-places">

      <!--
        IMAGE SLOTS: assets/img/travel/canada/[place]-cover.jpg
      -->

      <!-- Halifax — featured wide card (base city) -->
      <a class="tr-hub-place tr-hub-place--featured reveal-up" href="{{ '/travel/canada/halifax/' | relative_url }}" style="--delay:0.06s">
        <img
          src="{{ '/assets/img/travel/canada/halifax-cover.jpg' | relative_url }}"
          alt="Halifax, Nova Scotia"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#040810 0%,#061a28 60%,#040c18 100%)'"
        >
        <div class="tr-hub-place-overlay"></div>
        <div class="tr-hub-place-content">
          <div class="tr-hub-place-tag">Nova Scotia &nbsp;·&nbsp; Base city</div>
          <div class="tr-hub-place-name">Halifax</div>
          <div class="tr-hub-place-sub">Harbour fog, MITACS research at Dalhousie, and unexpected affection for a maritime city.</div>
        </div>
      </a>

      <!-- Toronto -->
      <a class="tr-hub-place reveal-up" href="{{ '/travel/canada/toronto/' | relative_url }}" style="--delay:0.08s">
        <img
          src="{{ '/assets/img/travel/canada/toronto-cover.jpg' | relative_url }}"
          alt="Toronto, Ontario"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#08080e 0%,#141420 60%,#0e0e18 100%)'"
        >
        <div class="tr-hub-place-overlay"></div>
        <div class="tr-hub-place-content">
          <div class="tr-hub-place-tag">Ontario</div>
          <div class="tr-hub-place-name">Toronto</div>
          <div class="tr-hub-place-sub">A city that contains multitudes — CN Tower, Kensington Market, and the waterfront.</div>
        </div>
      </a>

      <!-- Niagara -->
      <a class="tr-hub-place reveal-up" href="{{ '/travel/canada/niagara/' | relative_url }}" style="--delay:0.10s">
        <img
          src="{{ '/assets/img/travel/canada/niagara-cover.jpg' | relative_url }}"
          alt="Niagara Falls, Canada"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(160deg,#040a10 0%,#081422 60%,#060c18 100%)'"
        >
        <div class="tr-hub-place-overlay"></div>
        <div class="tr-hub-place-content">
          <div class="tr-hub-place-tag">Ontario</div>
          <div class="tr-hub-place-name">Niagara Falls</div>
          <div class="tr-hub-place-sub">Standing at the edge of the falls and understanding, suddenly, what the word "thundering" means.</div>
        </div>
      </a>

    </div>
  </section>

  <footer class="pj-footer">
    <div class="pj-footer-inner">
      <a href="{{ '/travel/' | relative_url }}" class="pj-footer-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to Travel
      </a>
      <div class="pj-footer-name">Canada</div>
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
