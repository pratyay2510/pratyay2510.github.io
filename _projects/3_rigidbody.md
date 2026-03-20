---
layout: project-premium
title: "ImpulseForge"
short_title: "ImpulseForge"
description: "Physics that feels honest: impulse-level collision logic, friction, and MuJoCo cross-checks in one loop."
img: assets/img/projects/rigidbody.png
importance: 3
category: work
github: https://github.com/pratyay2510/RigidBody-Simulation
readme_url: https://github.com/pratyay2510/RigidBody-Simulation/blob/master/README.md
chapter_num: "Chapter 03"
chapter_sub: "Physics · Simulation · Rigid Body Dynamics"
closing_quote: "Every collision is a conversation between forces — and the math never lies."
hero_gradient: "radial-gradient(ellipse at 50% 0%, rgba(50,180,200,0.36) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(50,220,150,0.18) 0%, transparent 50%), linear-gradient(180deg, #040e10 0%, #081418 60%, #0a0a0a 100%)"
techniques:
  - Impulse-based Collision Resolution
  - Friction Modeling
  - MuJoCo Integration
  - Dynamic Simulation Logging
  - Physics Benchmarking
concept_notes:
  - Extend classic rigid-body collision formulations into a Python-native pipeline with full traceback.
  - Use MuJoCo for environment specification and rendering while retaining a custom solver.
  - Benchmark custom collision behavior directly against MuJoCo's built-in LCP solver outputs.
key_components:
  - emoji: "⚡"
    label: "Impulse Solver"
    detail: "Custom collision & friction resolution"
  - emoji: "🌐"
    label: "MuJoCo Render"
    detail: "XML-based environment + visualization"
  - emoji: "📐"
    label: "Friction Model"
    detail: "Stiction and sliding Coulomb regimes"
  - emoji: "📊"
    label: "Benchmarking"
    detail: "Custom vs. built-in LCP solver comparison"
readme_highlights:
  - heading: "Simulation Modes"
    body: "README documents single-sphere, multi-sphere, collision, incline, and cube simulations with trajectory/height visualizations."
  - heading: "Implementation"
    body: "Core collision/friction methods are centralized in physics modules with dedicated configuration and simulation runners."
  - heading: "Run Interface"
    body: "CLI entrypoint supports selecting simulation variants and exporting recordings/plots for analysis."
quickstart:
  - "Clone repo, create virtual environment, and install either via setup.py or requirements.txt."
  - "Run simulation entrypoint with selected mode (for example: single_sphere or ball_collision)."
  - "Inspect generated plots and recordings to validate motion and impulse behavior."
---

A production-ready rigid body simulation framework built on **MuJoCo** for visualization and XML-based environment specification, with custom impulse-based collision resolution implemented in Python.

**Framework capabilities:**
- Impulse-based collision detection and response for sphere–sphere, sphere–plane, and multi-body interactions.
- Coulomb friction modeling with stiction and sliding regimes.
- Single-sphere bounce, multi-sphere collisions, and inclined-plane simulations.
- Comparative benchmarking against MuJoCo's native LCP solver.

**Implementation basis:** Extends the formulations from *"Nonconvex Rigid Bodies with Stacking"* (Guendelman, Bridson & Fedkiw, SIGGRAPH 2003) to a Python-native simulation loop coupled with MuJoCo rendering.

**Stack:** Python · MuJoCo · NumPy · SciPy
