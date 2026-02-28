---
layout: page
title: "Physics-Faithful Rigid Body Simulation with Impulse-Based Collision Resolution"
description: "TLDR: A custom physics engine implementing impulse-based collision and friction modeling, cross-validated against MuJoCo's built-in solver for accuracy and realism."
img: assets/img/projects/rigidbody.png
importance: 3
category: work
github: https://github.com/pratyay2510/RigidBody-Simulation
---

A production-ready rigid body simulation framework built on **MuJoCo** for visualization and XML-based environment specification, with custom impulse-based collision resolution implemented in Python.

**Framework capabilities:**
- Impulse-based collision detection and response for sphere–sphere, sphere–plane, and multi-body interactions.
- Coulomb friction modeling with stiction and sliding regimes.
- Single-sphere bounce, multi-sphere collisions, and inclined-plane simulations.
- Comparative benchmarking against MuJoCo's native LCP solver.

**Implementation basis:** Extends the formulations from *"Nonconvex Rigid Bodies with Stacking"* (Guendelman, Bridson & Fedkiw, SIGGRAPH 2003) to a Python-native simulation loop coupled with MuJoCo rendering.

**Stack:** Python · MuJoCo · NumPy · SciPy
