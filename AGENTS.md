# Portfolio site: agent notes

Jekyll site deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. See `README.md` for the page map.

## Design

- Dark background (`#0a0a0a`) with sunrise gold accent (`#d9aa2e`); colour tokens in `_sass/site/_tokens.scss` and `_sass/site/_base.scss`.
- Fonts: Playfair Display (display), Cormorant Garamond (subheads, quotes), DM Sans (body). Loaded in `_includes/head.liquid`.
- Icons: Font Awesome (solid + brands) and Academicons for the Google Scholar glyph.
- Motion: press states on pointer-down, no overshoot on hover, everything honours `prefers-reduced-motion`; translucent nav falls back to solid under `prefers-reduced-transparency`. Rules live in `_sass/site/_interaction.scss`.

## Conventions

- New styles go in the `_sass/site/` partial for that page area. Keep `_index.scss` order: later partials override earlier ones.
- No local Jekyll here; verify Sass with `npx sass --load-path=_sass` against a copy of `assets/css/main.scss` with its front matter removed, then check the deploy run on GitHub Actions.
- Format with `npx prettier . --write` before committing.
