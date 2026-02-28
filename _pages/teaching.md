---
layout: page
permalink: /teaching/
title: Teaching
description: Courses for which I have served as a Teaching Assistant at the University of California, Riverside.
nav: true
nav_order: 6
---

<div class="teaching-list">

  <div class="teaching-item">
    <div class="teaching-code">CS 258</div>
    <div class="teaching-body">
      <h3 class="teaching-title">Introduction to Reinforcement Learning</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">A graduate-level survey of the core theory and algorithms underpinning modern reinforcement learning. Topics include finite Markov Decision Processes, dynamic programming, Monte Carlo estimation, temporal-difference learning (TD(λ), Q-learning, SARSA), policy-gradient methods (REINFORCE, PPO, Actor-Critic), safety- and batch-constrained RL, multi-armed bandits, multi-agent RL, and imitation learning.</p>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-code">EE 152</div>
    <div class="teaching-body">
      <h3 class="teaching-title">Digital Image Processing</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Covers the full pipeline of digital image processing, from sensor-level acquisition through enhancement, restoration, and compression, to practical deployment. Laboratory sessions provide hands-on experience building end-to-end image processing systems, including image acquisition, algorithmic processing, and visualization.</p>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-code">EE 114</div>
    <div class="teaching-body">
      <h3 class="teaching-title">Probability, Random Variables, and Random Processes in Electrical Engineering</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Rigorous treatment of probability theory and stochastic processes with applications to electrical and computer engineering. Core topics include probability axioms, random variables, cumulative distribution and density functions, functions of random variables, expectation and moments, multivariate distributions, random processes, autocorrelation, power spectral density, and linear systems driven by stochastic inputs.</p>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-code">CS 111</div>
    <div class="teaching-body">
      <h3 class="teaching-title">Discrete Structures</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Foundations of discrete mathematics essential to computer science theory and practice. Covers number theory and cryptographic primitives, asymptotic analysis, recurrence relations, combinatorics, elements of graph theory, and trees — with emphasis on algorithmic reasoning and formal proof techniques.</p>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-code">CS 105</div>
    <div class="teaching-body">
      <h3 class="teaching-title">Data Analysis Methods</h3>
      <p class="teaching-role">Teaching Assistant &middot; University of California, Riverside</p>
      <p class="teaching-desc">Practical introduction to the end-to-end data analysis workflow. Topics include descriptive statistics, data structures, web scraping and public API integration, data cleaning and validation, crowdsourcing pipelines, supervised and unsupervised machine learning, and data visualization — with hands-on Python laboratory sessions throughout.</p>
    </div>
  </div>

</div>

<style>
.teaching-list {
  max-width: 820px;
  margin: 0 auto;
}

.teaching-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--global-divider-color);
  align-items: flex-start;
}

.teaching-item:last-child {
  border-bottom: none;
}

.teaching-code {
  flex-shrink: 0;
  width: 70px;
  text-align: center;
  background: rgba(183, 209, 42, 0.1);
  border: 1px solid rgba(183, 209, 42, 0.25);
  border-radius: 8px;
  padding: 0.4rem 0.3rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--global-theme-color);
  line-height: 1.3;
}

.teaching-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0 0 0.2rem 0;
}

.teaching-role {
  font-size: 0.85rem;
  color: var(--global-theme-color);
  margin: 0 0 0.5rem 0;
}

.teaching-desc {
  font-size: 0.88rem;
  color: var(--global-text-color-light);
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 576px) {
  .teaching-item {
    flex-direction: column;
    gap: 0.75rem;
  }

  .teaching-code {
    width: auto;
    display: inline-block;
    padding: 0.25rem 0.75rem;
  }
}
</style>
