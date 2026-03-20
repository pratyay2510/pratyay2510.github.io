---
layout: project-premium
title: "Remember To Play"
description: "When memory enters the Q-network, the agent stops guessing and starts planning." 
img: assets/img/projects/drqn-rl.png
importance: 2
category: work
github: https://github.com/pratyay2510/DRQN_RL
readme_url: https://github.com/pratyay2510/DRQN_RL/blob/main/README.md
techniques:
	- Deep Q-Network (DQN)
	- DRQN (CNN + LSTM)
	- POMDP Formulation
	- Atari Wrappers
	- Sequential Replay
concept_notes:
	- Treat single-frame Atari as partially observable instead of fully observable.
	- Compare memoryless Q-learning versus recurrent Q-learning under controlled conditions.
	- Evaluate where temporal memory changes policy quality.
readme_highlights:
	- heading: "Abstract Focus"
		body: "README frames the study as a POMDP testbed and investigates whether recurrent memory improves decision quality under limited observations."
	- heading: "Environments"
		body: "CartPole-v1, Assault-v5, and Breakout-v5 are evaluated with wrappers that induce partial observability."
	- heading: "Results"
		body: "Reported results show DRQN benefits in scenarios where temporal context is critical for high reward."
quickstart:
	- "Install Python dependencies listed in README and open the Atari notebooks."
	- "Run DQN baseline notebook first to establish a comparable metric curve."
	- "Run DRQN notebook and compare rewards under blackout/partial-observation wrappers."
placeholders:
	- "[Add final figure links for each environment]"
	- "[Add one-line takeaway per environment]"
---

A systematic empirical study comparing **Deep Q-Networks (DQN)** and **Deep Recurrent Q-Networks (DRQN)** across standard and partially observable reinforcement learning environments.

**Motivation:** Atari games are typically treated as fully observable MDPs, but restricting the agent to a single frame induces partial observability — turning the problem into a POMDP. We hypothesize that LSTM-augmented networks can recover missing temporal context and outperform memoryless DQN under this constraint.

**Contributions:**
- Clean, reproducible PyTorch implementations of DQN (3-layer CNN) and DRQN (CNN + LSTM).
- Systematic comparison across Atari environments (Assault, Breakout) and CartPole under single-frame observation.
- Ablation over replay memory strategies: standard experience replay vs. episode-based sequential replay for DRQN.
- Quantitative evidence that recurrent memory provides measurable gains in partially observable settings.

**Stack:** Python · PyTorch · OpenAI Gymnasium · CUDA
