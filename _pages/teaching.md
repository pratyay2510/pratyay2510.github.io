---
layout: page
permalink: /teaching/
title: Teaching
description: Courses for which I have served as a Teaching Assistant at the University of California, Riverside.
nav: true
nav_order: 6
---

<div class="teaching-list" data-aos="fade-up">

  <div class="teaching-item" data-aos="fade-up" data-aos-delay="50">
    <div class="teaching-img-wrap">
      <img src="{{ 'assets/img/teaching/teaching-cs258-rl.png' | relative_url }}" alt="CS 258: Introduction to Reinforcement Learning" class="teaching-img">
    </div>
    <div class="teaching-body">
      <div class="teaching-code">CS 258</div>
      <h3 class="teaching-title">Introduction to Reinforcement Learning</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">A graduate-level survey of the core theory and algorithms underpinning modern reinforcement learning. Topics include finite Markov Decision Processes, dynamic programming, Monte Carlo estimation, temporal-difference learning, policy-gradient methods, safety- and batch-constrained RL, multi-armed bandits, multi-agent RL, and imitation learning.</p>
    </div>
  </div>

  <div class="teaching-item" data-aos="fade-up" data-aos-delay="100">
    <div class="teaching-img-wrap">
      <img src="{{ 'assets/img/teaching/teaching-ee152-image-processing.png' | relative_url }}" alt="EE 152: Digital Image Processing" class="teaching-img">
    </div>
    <div class="teaching-body">
      <div class="teaching-code">EE 152</div>
      <h3 class="teaching-title">Digital Image Processing</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Covers the full pipeline of digital image processing, from sensor-level acquisition through enhancement, restoration, and compression, to deployment. Labs emphasize building end-to-end image processing systems including acquisition, algorithmic processing, and visualization.</p>
    </div>
  </div>

  <div class="teaching-item" data-aos="fade-up" data-aos-delay="150">
    <div class="teaching-img-wrap">
      <img src="{{ 'assets/img/teaching/teaching-ee114-probability.png' | relative_url }}" alt="EE 114: Probability and Random Processes" class="teaching-img">
    </div>
    <div class="teaching-body">
      <div class="teaching-code">EE 114</div>
      <h3 class="teaching-title">Probability, Random Variables, and Random Processes in Electrical Engineering</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Rigorous treatment of probability theory and stochastic processes with applications to electrical and computer engineering, including random variables, densities, expectations, multivariate distributions, random processes, autocorrelation, spectral analysis, and linear systems with random inputs.</p>
    </div>
  </div>

  <div class="teaching-item" data-aos="fade-up" data-aos-delay="200">
    <div class="teaching-img-wrap">
      <img src="{{ 'assets/img/teaching/teaching-cs111-discrete.png' | relative_url }}" alt="CS 111: Discrete Structures" class="teaching-img">
    </div>
    <div class="teaching-body">
      <div class="teaching-code">CS 111</div>
      <h3 class="teaching-title">Discrete Structures</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Foundations of discrete mathematics essential to computer science. Topics include number theory and cryptography, asymptotic notation, recurrence relations, counting methods, graph theory, and trees, with emphasis on algorithmic reasoning and proof techniques.</p>
    </div>
  </div>

  <div class="teaching-item" data-aos="fade-up" data-aos-delay="250">
    <div class="teaching-img-wrap">
      <img src="{{ 'assets/img/teaching/teaching-cs105-data-analysis.png' | relative_url }}" alt="CS 105: Data Analysis Methods" class="teaching-img">
    </div>
    <div class="teaching-body">
      <div class="teaching-code">CS 105</div>
      <h3 class="teaching-title">Data Analysis Methods</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Practical introduction to the end-to-end data analysis workflow, including descriptive statistics, data acquisition from the web and public APIs, data cleaning, crowdsourcing, supervised and unsupervised learning, and data visualization with hands-on Python labs.</p>
    </div>
  </div>

</div>

<style>
.teaching-list {
  max-width: 980px;
  margin: 0 auto 3rem;
}

.teaching-item {
  display: grid;
  grid-template-columns: 1.6fr 2.4fr;
  gap: 1.5rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--global-divider-color);
  align-items: center;
}

.teaching-item:last-child {
  border-bottom: none;
}

.teaching-img-wrap {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 201, 74, 0.38);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
}

.teaching-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.teaching-body {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.teaching-code {
  align-self: flex-start;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 201, 74, 0.12);
  border: 1px solid rgba(255, 201, 74, 0.4);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--global-theme-color);
  letter-spacing: 0.03em;
}

.teaching-title {
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0;
}

.teaching-role {
  font-size: 0.86rem;
  color: var(--global-theme-color);
  margin: 0 0 0.2rem 0;
}

.teaching-desc {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 768px) {
  .teaching-item {
    grid-template-columns: 1fr;
  }

  .teaching-img-wrap {
    max-height: 220px;
  }
}
</style>
