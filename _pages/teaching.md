---
layout: default
permalink: /teaching/
title: Teaching
description: Courses for which I have served as a Teaching Assistant at the University of California, Riverside.
nav: true
nav_order: 6
full_width: true
---

<div class="tc-page page-float-in">

  <nav class="pj-nav">
    <div class="pj-nav-inner">
      <a href="{{ '/' | relative_url }}" class="pj-back">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to Portfolio
      </a>
      <div class="pj-nav-label">Teaching</div>
    </div>
  </nav>

  <div class="tc-hero">
    <div class="pj-hero-overlay"></div>
    <div class="tc-hero-content reveal-up">
      <div class="pj-chapter">University of California, Riverside &nbsp;·&nbsp; Teaching Assistant</div>
      <h1 class="tc-hero-title">Teaching</h1>
      <p class="tc-hero-subtitle">Courses I have helped teach — from probability theory to deep reinforcement learning.</p>
    </div>
  </div>

  <main class="tc-body">
    <div class="tc-grid">

      <a class="tc-card reveal-up" href="#" style="--delay:0.06s">
        <img
          class="tc-card-img"
          src="{{ '/assets/img/teaching/teaching-cs258-rl.png' | relative_url }}"
          alt="CS 258: Introduction to Reinforcement Learning"
          loading="lazy"
        >
        <div class="tc-card-overlay"></div>
        <div class="tc-card-content">
          <div class="tc-card-code">CS 258</div>
          <div class="tc-card-role">Teaching Assistant</div>
          <h3 class="tc-card-name">Introduction to Reinforcement Learning</h3>
          <p class="tc-card-desc">Graduate-level survey of core RL theory: MDPs, dynamic programming, Monte Carlo, temporal-difference learning, policy-gradient methods, multi-armed bandits, and multi-agent RL.</p>
          <div class="tc-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

      <a class="tc-card reveal-up" href="#" style="--delay:0.11s">
        <img
          class="tc-card-img"
          src="{{ '/assets/img/teaching/teaching-ee152-image-processing.png' | relative_url }}"
          alt="EE 152: Digital Image Processing"
          loading="lazy"
        >
        <div class="tc-card-overlay"></div>
        <div class="tc-card-content">
          <div class="tc-card-code">EE 152</div>
          <div class="tc-card-role">Teaching Assistant</div>
          <h3 class="tc-card-name">Digital Image Processing</h3>
          <p class="tc-card-desc">Full pipeline from sensor-level acquisition through enhancement, restoration, and compression. Labs emphasise building end-to-end image processing systems.</p>
          <div class="tc-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

      <a class="tc-card reveal-up" href="#" style="--delay:0.16s">
        <img
          class="tc-card-img"
          src="{{ '/assets/img/teaching/teaching-ee114-probability.png' | relative_url }}"
          alt="EE 114: Probability and Random Processes"
          loading="lazy"
        >
        <div class="tc-card-overlay"></div>
        <div class="tc-card-content">
          <div class="tc-card-code">EE 114</div>
          <div class="tc-card-role">Teaching Assistant</div>
          <h3 class="tc-card-name">Probability, Random Variables &amp; Random Processes</h3>
          <p class="tc-card-desc">Rigorous probability theory with engineering applications — random variables, distributions, stochastic processes, autocorrelation, spectral analysis, and linear systems.</p>
          <div class="tc-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

      <a class="tc-card reveal-up" href="#" style="--delay:0.21s">
        <img
          class="tc-card-img"
          src="{{ '/assets/img/teaching/teaching-cs111-discrete.png' | relative_url }}"
          alt="CS 111: Discrete Structures"
          loading="lazy"
        >
        <div class="tc-card-overlay"></div>
        <div class="tc-card-content">
          <div class="tc-card-code">CS 111</div>
          <div class="tc-card-role">Teaching Assistant</div>
          <h3 class="tc-card-name">Discrete Structures</h3>
          <p class="tc-card-desc">Foundations of discrete mathematics: number theory, cryptography, asymptotic notation, recurrences, counting, graph theory, and trees with emphasis on proof techniques.</p>
          <div class="tc-card-arrow" aria-hidden="true">→</div>
        </div>
      </a>

      <a class="tc-card reveal-up" href="#" style="--delay:0.26s">
        <img
          class="tc-card-img"
          src="{{ '/assets/img/teaching/teaching-cs105-data-analysis.png' | relative_url }}"
          alt="CS 105: Data Analysis Methods"
          loading="lazy"
        >
        <div class="tc-card-overlay"></div>
        <div class="tc-card-content">
          <div class="tc-card-code">CS 105</div>
          <div class="tc-card-role">Teaching Assistant</div>
          <h3 class="tc-card-name">Data Analysis Methods</h3>
          <p class="tc-card-desc">End-to-end data analysis workflow: descriptive statistics, web data acquisition, cleaning, crowdsourcing, supervised &amp; unsupervised learning, and visualisation with Python.</p>
          <div class="tc-card-arrow" aria-hidden="true">→</div>
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
      }, { threshold: 0.08 });
      obs.observe(el);
    });
  })();
</script>
