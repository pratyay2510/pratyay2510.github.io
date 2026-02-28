---
layout: page
title: "Temporal Memory in Deep RL: Benchmarking DQN vs. DRQN under Partial Observability"
description: "TLDR: Demonstrates that augmenting Q-networks with LSTM memory (DRQN) yields significant performance gains over vanilla DQN in partially observable Atari environments."
img: assets/img/projects/drqn-rl.png
importance: 2
category: work
github: https://github.com/pratyay2510/DRQN_RL
---

A systematic empirical study comparing **Deep Q-Networks (DQN)** and **Deep Recurrent Q-Networks (DRQN)** across standard and partially observable reinforcement learning environments.

**Motivation:** Atari games are typically treated as fully observable MDPs, but restricting the agent to a single frame induces partial observability — turning the problem into a POMDP. We hypothesize that LSTM-augmented networks can recover missing temporal context and outperform memoryless DQN under this constraint.

**Contributions:**
- Clean, reproducible PyTorch implementations of DQN (3-layer CNN) and DRQN (CNN + LSTM).
- Systematic comparison across Atari environments (Assault, Breakout) and CartPole under single-frame observation.
- Ablation over replay memory strategies: standard experience replay vs. episode-based sequential replay for DRQN.
- Quantitative evidence that recurrent memory provides measurable gains in partially observable settings.

**Stack:** Python · PyTorch · OpenAI Gymnasium · CUDA
