---
layout: page
title: "Transformer-Driven Person Re-Identification Across Camera Views"
description: "TLDR: Explores Vision Transformer architectures for robust cross-camera person re-identification, with attention mechanisms that capture global appearance cues invariant to viewpoint and occlusion."
img: assets/img/11.jpg
importance: 4
category: work
github: https://github.com/pratyay2510/Treid
---

A transformer-based framework for **person re-identification (ReID)** — the task of matching pedestrian identities across non-overlapping camera views, a core challenge in intelligent surveillance and autonomous systems.

**Problem:** CNN-based ReID methods struggle with long-range spatial dependencies, occlusion, and significant viewpoint variation. Transformer architectures, with their global self-attention mechanism, are well-suited to capture holistic appearance representations.

**Approach:**
- Vision Transformer (ViT) backbone pre-trained on large-scale image datasets, fine-tuned for the ReID objective.
- Triplet loss training with hard negative mining for discriminative embedding learning.
- Evaluated on standard ReID benchmarks for cross-view matching accuracy.

**Relation to broader research:** This project directly informs ongoing work on occluded person re-identification using latent diffusion-guided feature inpainting.

**Stack:** Python · PyTorch · Vision Transformer (ViT) · CUDA
