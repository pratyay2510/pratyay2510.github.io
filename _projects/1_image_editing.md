---
layout: page
title: "Language-Guided Image Editing via Segmentation & Diffusion"
description: "TLDR: Combines GroundingDINO + SAM with Stable Diffusion Inpainting to surgically edit arbitrary image regions using natural language — no masks needed."
img: assets/img/12.jpg
importance: 1
category: work
github: https://github.com/pratyay2510/Image-Editing
---

A text-driven image editing pipeline that enables precise, mask-free modifications to any region of an image using natural language prompts.

**How it works:**
1. A text prompt (e.g., *"hands"*) is fed to **GroundingDINO + SAM** to automatically segment the target region.
2. The generated mask is passed to a **Stable Diffusion Inpainting** model alongside a new edit prompt (e.g., *"replace hands with gloves"*).
3. The model synthesizes a photorealistic edit while preserving all unmasked regions.

**Key contributions:**
- Zero-shot segmentation via open-vocabulary grounding — no domain-specific fine-tuning required.
- Modular design: segmentation and inpainting stages can be swapped independently.
- Supports creative editing, content removal, attribute transfer, and artistic stylization.

**Stack:** Python · GroundingDINO · Segment Anything Model (SAM) · Stable Diffusion · HuggingFace Diffusers
