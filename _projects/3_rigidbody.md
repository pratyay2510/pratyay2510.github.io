---
layout: project-premium
title: "ImpulseForge"
description: "Physics that feels honest: impulse-level collision logic, friction, and MuJoCo cross-checks in one loop." 
img: assets/img/projects/rigidbody.png
importance: 3
category: work
github: https://github.com/pratyay2510/RigidBody-Simulation
readme_url: https://github.com/pratyay2510/RigidBody-Simulation/blob/master/README.md
techniques:
	- Impulse-based Collision Resolution
	- Friction Modeling
	- MuJoCo Integration
	- Dynamic Simulation Logging
	- Physics Benchmarking
concept_notes:
	- Extend classic rigid-body collision formulations into a Python-native pipeline.
	- Use MuJoCo for environment + rendering while retaining custom solver logic.
	- Compare custom collision behavior against MuJoCo built-in solver outputs.
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
placeholders:
	- "[Add your custom parameter presets]"
	- "[Add comparison chart against MuJoCo built-in solver]"
---

A production-ready rigid body simulation framework built on **MuJoCo** for visualization and XML-based environment specification, with custom impulse-based collision resolution implemented in Python.

**Framework capabilities:**
- Impulse-based collision detection and response for sphere–sphere, sphere–plane, and multi-body interactions.
- Coulomb friction modeling with stiction and sliding regimes.
- Single-sphere bounce, multi-sphere collisions, and inclined-plane simulations.
- Comparative benchmarking against MuJoCo's native LCP solver.

**Implementation basis:** Extends the formulations from *"Nonconvex Rigid Bodies with Stacking"* (Guendelman, Bridson & Fedkiw, SIGGRAPH 2003) to a Python-native simulation loop coupled with MuJoCo rendering.

**Stack:** Python · MuJoCo · NumPy · SciPy
