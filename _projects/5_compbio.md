---
layout: project-premium
title: "TriStrand"
short_title: "TriStrand"
description: "Three DNA strands, one aligned story: 3D dynamic programming at near-C speed with Python ergonomics."
img: assets/img/7.jpg
importance: 5
category: work
github: https://github.com/pratyay2510/Computational-Bio
readme_url: https://github.com/pratyay2510/Computational-Bio/blob/main/README.md
chapter_num: "Chapter 05"
chapter_sub: "Computational Biology · Sequence Alignment · Algorithms"
closing_quote: "Three strands, one truth — alignment is just the universe's way of finding what belongs together."
hero_gradient: "radial-gradient(ellipse at 55% 0%, rgba(160,60,220,0.36) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(220,60,160,0.2) 0%, transparent 50%), linear-gradient(180deg, #090510 0%, #12081a 60%, #0a0a0a 100%)"
techniques:
  - 3D Needleman-Wunsch
  - Divide-and-Conquer DP
  - Numba JIT
  - Sum-of-Pairs Scoring
  - FASTA I/O
concept_notes:
  - Implement full three-way sequence alignment with complete traceback support for all three strands.
  - Reduce memory pressure from O(n³) to O(n²) through Hirschberg-style divide-and-conquer recursion.
  - Stay in the Python ecosystem while achieving near-C speed via Numba JIT kernel compilation.
key_components:
  - emoji: "🧬"
    label: "3D Needleman-Wunsch"
    detail: "Full three-sequence global alignment DP"
  - emoji: "⚡"
    label: "Numba JIT"
    detail: "Near-C kernel speed in Python"
  - emoji: "🔀"
    label: "Divide & Conquer"
    detail: "O(n²) memory — Hirschberg recursion"
  - emoji: "📂"
    label: "FASTA I/O"
    detail: "Standard bioinformatics input/output"
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
