---
layout: project-premium
title: "EyeWitness"
description: "Cross-camera identity matching with transformer attention that remembers the whole person, not just local patches." 
img: assets/img/11.jpg
importance: 4
category: work
github: https://github.com/pratyay2510/Treid
readme_url: https://github.com/pratyay2510/Treid/blob/main/README.md
techniques:
	- Vision Transformer
	- Triplet Loss
	- Hard Negative Mining
	- Cross-view Embeddings
	- Person Re-identification
concept_notes:
	- Learn robust person embeddings under viewpoint shift and partial occlusion.
	- Use global transformer attention to preserve long-range appearance cues.
	- Connect this baseline to your broader occluded-ReID research pipeline.
readme_highlights:
	- heading: "Repository Scope"
		body: "Current README is brief; repository is positioned as transformer-based person ReID implementation."
	- heading: "Primary Direction"
		body: "Focus remains on transformer features for cross-camera matching stability."
	- heading: "Planned Expansion"
		body: "This page includes placeholders for dataset protocol, metrics, and visual retrieval outputs."
quickstart:
	- "Clone repo and prepare environment according to dependency file or notebook imports."
	- "Train/fine-tune transformer encoder with triplet-style objective."
	- "Evaluate rank-based retrieval metrics and qualitative retrieval panels."
placeholders:
	- "[Add dataset names and train/val/test split protocol]"
	- "[Add mAP and Rank-1 metrics table]"
	- "[Add retrieval gallery examples]"
---

A transformer-based framework for **person re-identification (ReID)** — the task of matching pedestrian identities across non-overlapping camera views, a core challenge in intelligent surveillance and autonomous systems.

**Problem:** CNN-based ReID methods struggle with long-range spatial dependencies, occlusion, and significant viewpoint variation. Transformer architectures, with their global self-attention mechanism, are well-suited to capture holistic appearance representations.

**Approach:**
- Vision Transformer (ViT) backbone pre-trained on large-scale image datasets, fine-tuned for the ReID objective.
- Triplet loss training with hard negative mining for discriminative embedding learning.
- Evaluated on standard ReID benchmarks for cross-view matching accuracy.

**Relation to broader research:** This project directly informs ongoing work on occluded person re-identification using latent diffusion-guided feature inpainting.

**Stack:** Python · PyTorch · Vision Transformer (ViT) · CUDA
