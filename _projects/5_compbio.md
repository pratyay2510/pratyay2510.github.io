---
layout: page
title: "High-Performance Three-Way DNA Sequence Alignment via Numba-Accelerated Dynamic Programming"
description: "TLDR: Memory-efficient 3D multiple sequence alignment using divide-and-conquer Needleman-Wunsch, accelerated with Numba JIT for production-grade throughput on large DNA sequences."
img: assets/img/7.jpg
importance: 5
category: work
github: https://github.com/pratyay2510/Computational-Bio
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
