---
layout: page
title: Pen Art
permalink: /pen-art/
description: A collection of pen and ink artwork.
nav: false
---

<style>
  /* ── Gallery header ─────────────────────────────────────── */
  .art-page-header {
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .art-page-header .art-subtitle {
    font-size: 1rem;
    color: var(--global-text-color-light);
    max-width: 520px;
    margin: 0.5rem auto 0;
    line-height: 1.7;
  }

  /* ── Gallery grid ───────────────────────────────────────── */
  .art-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.75rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .art-gallery {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem 1.25rem;
    }
  }

  @media (max-width: 480px) {
    .art-gallery {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  /* ── Individual piece ───────────────────────────────────── */
  .art-piece {
    margin: 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    animation: artFadeUp 0.55s ease forwards;
  }

  .art-piece:nth-child(1) { animation-delay: 0.05s; }
  .art-piece:nth-child(2) { animation-delay: 0.15s; }
  .art-piece:nth-child(3) { animation-delay: 0.25s; }
  .art-piece:nth-child(4) { animation-delay: 0.20s; }
  .art-piece:nth-child(5) { animation-delay: 0.30s; }
  .art-piece:nth-child(6) { animation-delay: 0.40s; }

  @keyframes artFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Image wrapper ──────────────────────────────────────── */
  .art-img-wrapper {
    aspect-ratio: 4 / 5;
    background-color: var(--global-code-bg-color);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.35s ease;
  }

  .art-piece:hover .art-img-wrapper {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  .art-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-color: var(--global-code-bg-color);
    transition: transform 0.45s ease;
  }

  .art-piece:hover .art-img-wrapper img {
    transform: scale(1.04);
  }

  /* ── Caption ────────────────────────────────────────────── */
  .art-piece figcaption {
    margin-top: 0.65rem;
    font-size: 0.82rem;
    color: var(--global-text-color-light);
    text-align: center;
    line-height: 1.55;
    padding: 0 0.25rem;
  }
</style>

<div class="art-page-header">
  <p class="art-subtitle">
    Pen and ink on paper — from careful studies to loose sketches. All work done by hand.
  </p>
</div>

<div class="art-gallery">

  <figure class="art-piece">
    <div class="art-img-wrapper">
      <img src="{{ '/assets/img/art/placeholder.svg' | relative_url }}" alt="Pen art piece 1" loading="lazy">
    </div>
    <figcaption>A quiet afternoon study — ink on paper</figcaption>
  </figure>

  <figure class="art-piece">
    <div class="art-img-wrapper">
      <img src="{{ '/assets/img/art/placeholder.svg' | relative_url }}" alt="Pen art piece 2" loading="lazy">
    </div>
    <figcaption>Urban skyline series — fine liner on cartridge paper</figcaption>
  </figure>

  <figure class="art-piece">
    <div class="art-img-wrapper">
      <img src="{{ '/assets/img/art/placeholder.svg' | relative_url }}" alt="Pen art piece 3" loading="lazy">
    </div>
    <figcaption>Crosshatch portrait study</figcaption>
  </figure>

  <figure class="art-piece">
    <div class="art-img-wrapper">
      <img src="{{ '/assets/img/art/placeholder.svg' | relative_url }}" alt="Pen art piece 4" loading="lazy">
    </div>
    <figcaption>Botanical illustration — ink on bristol board</figcaption>
  </figure>

  <figure class="art-piece">
    <div class="art-img-wrapper">
      <img src="{{ '/assets/img/art/placeholder.svg' | relative_url }}" alt="Pen art piece 5" loading="lazy">
    </div>
    <figcaption>Abstract geometric composition</figcaption>
  </figure>

  <figure class="art-piece">
    <div class="art-img-wrapper">
      <img src="{{ '/assets/img/art/placeholder.svg' | relative_url }}" alt="Pen art piece 6" loading="lazy">
    </div>
    <figcaption>Landscape sketch — field study in pen</figcaption>
  </figure>

</div>
