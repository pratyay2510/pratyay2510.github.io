---
layout: project-premium
title: "EyeWitness"
short_title: "EyeWitness"
description: "Cross-camera identity matching with transformer attention that remembers the whole person, not just local patches."
img: assets/img/11.jpg
importance: 4
category: work
github: https://github.com/pratyay2510/Treid
readme_url: https://github.com/pratyay2510/Treid/blob/main/README.md
chapter_num: "Chapter 04"
chapter_sub: "Computer Vision · Person Re-ID · Transformers"
closing_quote: "In a sea of strangers, the right architecture never loses sight of who it's looking for."
hero_gradient: "radial-gradient(ellipse at 40% 0%, rgba(50,200,120,0.36) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(50,180,220,0.18) 0%, transparent 50%), linear-gradient(180deg, #040e08 0%, #081410 60%, #0a0a0a 100%)"
techniques:
  - Vision Transformer
  - Triplet Loss
  - Hard Negative Mining
  - Cross-view Embeddings
  - Person Re-identification
concept_notes:
  - Learn robust person embeddings that remain stable under viewpoint shift and partial occlusion.
  - Use global transformer self-attention to preserve long-range appearance cues missed by CNNs.
  - Connect this baseline to the broader occluded-ReID research pipeline with diffusion-guided inpainting.
key_components:
  - emoji: "👁️"
    label: "ViT Backbone"
    detail: "Global self-attention over person patches"
  - emoji: "⚖️"
    label: "Triplet Loss"
    detail: "Hard negative mining for tight embeddings"
  - emoji: "📷"
    label: "Cross-Camera"
    detail: "Non-overlapping view matching"
  - emoji: "🔍"
    label: "Re-ID Retrieval"
    detail: "Rank-1 / mAP gallery evaluation"
readme_highlights:
  - heading: "Repository Scope"
    body: "Transformer-based person ReID implementation, positioned as a foundation for occluded and diffusion-augmented ReID research."
  - heading: "Primary Direction"
    body: "Focus on transformer features for cross-camera matching stability under occlusion and viewpoint change."
  - heading: "Planned Expansion"
    body: "Dataset protocol, mAP/Rank-1 metrics tables, and visual retrieval gallery outputs."
quickstart:
  - "Clone repo and prepare environment according to dependency file or notebook imports."
  - "Train/fine-tune transformer encoder with triplet-style objective on a standard ReID dataset."
  - "Evaluate rank-based retrieval metrics and inspect qualitative retrieval panels."
---

A transformer-based framework for **person re-identification (ReID)** — the task of matching pedestrian identities across non-overlapping camera views, a core challenge in intelligent surveillance and autonomous systems.

**Problem:** CNN-based ReID methods struggle with long-range spatial dependencies, occlusion, and significant viewpoint variation. Transformer architectures, with their global self-attention mechanism, are well-suited to capture holistic appearance representations.

**Approach:**
- Vision Transformer (ViT) backbone pre-trained on large-scale image datasets, fine-tuned for the ReID objective.
- Triplet loss training with hard negative mining for discriminative embedding learning.
- Evaluated on standard ReID benchmarks for cross-view matching accuracy.

**Relation to broader research:** This project directly informs ongoing work on occluded person re-identification using latent diffusion-guided feature inpainting.

**Stack:** Python · PyTorch · Vision Transformer (ViT) · CUDA
