---
layout: project-premium
title: "TriStrand"
description: "Three DNA strands, one aligned story: 3D dynamic programming at near-C speed with Python ergonomics." 
img: assets/img/7.jpg
importance: 5
category: work
github: https://github.com/pratyay2510/Computational-Bio
readme_url: https://github.com/pratyay2510/Computational-Bio/blob/main/README.md
techniques:
	- 3D Needleman-Wunsch
	- Divide-and-Conquer DP
	- Numba JIT
	- Sum-of-Pairs Scoring
	- FASTA I/O
concept_notes:
	- Implement full three-way sequence alignment with traceback support.
	- Reduce memory pressure through divide-and-conquer recursion.
	- Keep Python workflow while accelerating kernels via Numba.
readme_highlights:
	- heading: "Core Method"
		body: "README documents 3D dynamic programming for three-sequence alignment with customizable scoring parameters."
	- heading: "Performance"
		body: "Numba acceleration is used for core kernels to improve runtime without dropping out of Python tooling."
	- heading: "Usability"
		body: "Input/output supports simple direct sequence edits and FASTA-based workflows."
quickstart:
	- "Install numpy, numba, biopython, and psutil."
	- "Run the main script (for example: python MSA.py)."
	- "Inspect generated alignment output and memory/runtime traces."
placeholders:
	- "[Add example aligned sequences and score output]"
	- "[Add runtime comparison against non-JIT baseline]"
---

A high-performance implementation of **three-way Multiple Sequence Alignment (MSA)** for DNA sequences, combining classical dynamic programming with modern JIT compilation for practical scalability.

**Technical highlights:**
- Full **3D Needleman-Wunsch** dynamic programming with sum-of-pairs scoring (+5 match / −4 gap).
- **Divide-and-conquer recursion** (Hirschberg-style) reduces memory complexity from O(n³) to O(n²), enabling alignment of large sequences that would otherwise exhaust memory.
- Core DP kernels JIT-compiled with **Numba** for near-C speed without leaving the Python ecosystem.
- Built-in memory monitoring and automatic FASTA I/O.

**Additional algorithms included:**
- Branch-and-bound techniques for combinatorial sequence optimization.
- Hirschberg's algorithm demonstrating space-efficient dynamic programming.

**Stack:** Python · Numba · NumPy · BioPython
