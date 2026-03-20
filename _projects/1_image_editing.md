---
layout: project-premium
title: "Talk To Segment"
description: "Edit only what you mean: segment by text, rewrite by prompt, keep everything else intact."
img: assets/img/12.jpg
importance: 1
category: work
github: https://github.com/pratyay2510/Image-Editing
readme_url: https://github.com/pratyay2510/Image-Editing/blob/main/README.md
techniques:
	- GroundingDINO
	- SAM
	- Stable Diffusion Inpainting
	- HuggingFace Diffusers
	- Prompt-based Segmentation
concept_notes:
	- Text prompts identify regions without manual masks.
	- Segmentation and editing stages are modular and independently replaceable.
	- Unmasked context is preserved for natural-looking outputs.
readme_highlights:
	- heading: "Pipeline"
		body: "GroundingDINO + SAM produces a target mask, then Stable Diffusion Inpainting applies the transformation using a second prompt."
	- heading: "Use Cases"
		body: "Creative edits, retouching, object replacement, and controllable image manipulation research."
	- heading: "Result Structure"
		body: "README outlines input image, segmentation mask, and edited output comparisons as the core demonstration format."
quickstart:
	- "Clone the repo and install dependencies from requirements." 
	- "Run segmentation with an object prompt to generate a mask (for example: hands)."
	- "Feed the mask and edit prompt to inpainting (for example: replace hands with gloves)."
placeholders:
	- "[Add your best before/after examples with links]"
	- "[Add benchmark metrics for edit quality and locality]"
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
