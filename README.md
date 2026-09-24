# pratyay2510.github.io

Personal site of Pratyay Dutta: <https://pratyay2510.github.io>. Jekyll, originally forked from al-folio and trimmed to what this site uses.

## Pages

| URL | Source |
|---|---|
| `/` | `_pages/about.md` + `_layouts/about.liquid` |
| `/projects/*` | `_projects/*.md` + `_layouts/project-premium.liquid` |
| `/more-of-me/` | `_pages/dropdown.md` |
| `/teaching/` | `_pages/teaching.md` |
| `/books/`, `/digital-art/`, `/pen-art/` | `_pages/books.md`, `_pages/sketchbook_*.md` |
| `/travel/…` | `_pages/travel*.md` + `_includes/travel_*.liquid` |

## Styles and scripts

- `_sass/site/` holds the site design, one partial per page area, loaded in cascade order by `_sass/site/_index.scss`.
- The other `_sass/_*.scss` files are the trimmed al-folio base (theme variables, navbar, typography).
- `assets/js/` holds the site scripts: `interactive-dotfield.js` (background), `travel-gallery.js`, `animations.js` (AOS).

## Workflow

- `./pull.sh` to sync, `./push.sh "message"` to commit and push.
- Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with Jekyll and publishes.
- Adding travel photos: see `docs/travel-images.md` and `docs/travel-blog.md`.
