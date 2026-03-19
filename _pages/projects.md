---
layout: page
title: Projects
permalink: /projects/
description: A growing collection of my cool projects.
nav: false
nav_order: 3
display_categories: [work]
---

<div class="projects projects-premium">
  {% assign sorted_projects = site.projects | sort: 'importance' %}

  <div class="projects-grid uniform-project-grid">
    {% for project in sorted_projects %}
      {% assign mod = forloop.index0 | modulo: 6 %}
      {% assign project_bg = 'project-bg--drishtikon' %}
      {% if mod == 1 %}
        {% assign project_bg = 'project-bg--glamour' %}
      {% elsif mod == 2 %}
        {% assign project_bg = 'project-bg--weave' %}
      {% elsif mod == 3 %}
        {% assign project_bg = 'project-bg--dor' %}
      {% elsif mod == 4 %}
        {% assign project_bg = 'project-bg--carpet' %}
      {% elsif mod == 5 %}
        {% assign project_bg = 'project-bg--dye' %}
      {% endif %}

      <a href="{{ project.url | relative_url }}" class="project-card reveal-up">
        <div class="project-card-bg {{ project_bg }}"></div>
        <div class="project-card-overlay"></div>

        <div class="project-card-content">
          <span class="project-number">0{{ forloop.index }}</span>
          <div class="project-category">{{ project.category | default: 'Research' }}</div>
          <h2 class="project-name">{{ project.title }}</h2>
          <p class="project-tagline">{{ project.description }}</p>
          <div class="project-meta">
            <span>Open details</span>
            {% if project.github %}
              <span>Code</span>
            {% endif %}
          </div>
          <div class="project-arrow" aria-hidden="true">→</div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
