# Prerana Mallick — Portfolio Website

A modular, static portfolio website built with vanilla HTML, CSS, and JavaScript. Ready for direct deployment to Netlify.

---

## 📁 Folder Structure

```
prerana-portfolio/
├── index.html                  ← Main single-page portfolio
├── css/
│   ├── reset.css               ← Browser normalisation
│   ├── variables.css           ← All design tokens (colours, fonts, spacing)
│   ├── base.css                ← Global typography, section wrappers, footer
│   ├── animations.css          ← Keyframes + Intersection Observer reveal classes
│   ├── nav.css                 ← Fixed navigation bar
│   ├── hero.css                ← About / Hero section
│   ├── experience.css          ← Timeline section
│   ├── education.css           ← Education cards + GPA rings
│   ├── skills.css              ← Skills grid + language bars
│   └── projects.css            ← Project cards grid
├── js/
│   └── main.js                 ← All interactivity (scroll, reveals, animations)
└── projects/
    ├── drishtikon.html
    ├── glamorous-valley-of-dolls.html
    ├── weave-designs.html
    ├── dor.html
    ├── middlestan-carpet.html
    ├── dyeing-techniques.html
    └── print-designs.html
```


## OBJECTIVE

Reproduce **pixel-for-pixel** the layout, typography, animation behaviour, and visual hierarchy of the `#about` hero section (and its enclosing navigation + footer) from this portfolio — but with:

1. **New personal content** (name, bio, quote, links, stats).
2. **A real photograph** replacing the initials placeholder.
3. **New accent colour variables** that slot into the same CSS variable system (so only `--clr-crimson*` and `--clr-gold*` change; everything else is structurally identical).

Do **not** change any content. Preserve all grid proportions, font choices, spacing tokens, animation classes, and interaction behaviour exactly as documented below.

---

## SECTION 1 — Design Token System (`css/variables.css`)

The entire site is driven by CSS custom properties defined in `:root`. When adapting for a new person, you will only ever change the six accent-colour tokens. All other tokens must remain identical.

### Full token reference (copy verbatim into `css/variables.css`):

```css
:root {

  /* ── Colour Palette ── */
  --clr-bg:           #0C0505;   /* near-black background (dark sections) */
  --clr-bg-mid:       #160808;   /* slightly lighter dark */
  --clr-bg-alt:       #F2E8D8;   /* cream, light sections */
  --clr-bg-alt-mid:   #E8D8C4;   /* muted cream */

  /* ▼ ONLY THESE SIX LINES CHANGE per-person ▼ */
  --clr-crimson:       #8B1A1A;  /* primary accent — e.g. deep crimson */
  --clr-crimson-deep:  #5A1010;  /* darkest accent */
  --clr-crimson-mid:   #A52020;  /* mid accent */
  --clr-crimson-light: #C43030;  /* bright accent */
  --clr-gold:          #C9A96E;  /* secondary accent (gold) */
  --clr-gold-light:    #E0C090;  /* lighter gold */
  /* ▲ END of per-person changes ▲ */

  --clr-cream:        #F2E8D8;
  --clr-cream-dark:   #C8B4A0;
  --clr-cream-dimmer: #A09080;
  --clr-white:        #FAFAF8;

  --clr-gray-warm:    #7A6A60;
  --clr-gray-light:   #C0B0A0;
  --clr-line:         rgba(242,232,216,0.12);
  --clr-line-cream:   rgba(12,5,5,0.12);

  /* ── Typography ── */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-sub:     'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  /* ── Fluid type scale (do NOT change) ── */
  --text-xs:   clamp(0.65rem,  1vw,   0.75rem);
  --text-sm:   clamp(0.8rem,   1.2vw, 0.9rem);
  --text-base: clamp(0.9rem,   1.4vw, 1rem);
  --text-md:   clamp(1rem,     1.6vw, 1.125rem);
  --text-lg:   clamp(1.1rem,   2vw,   1.375rem);
  --text-xl:   clamp(1.3rem,   2.5vw, 1.75rem);
  --text-2xl:  clamp(1.75rem,  3.5vw, 2.5rem);
  --text-3xl:  clamp(2.5rem,   5vw,   4rem);
  --text-4xl:  clamp(3.5rem,   7vw,   6rem);
  --text-hero: clamp(4rem,     9vw,   8rem);

  /* ── Spacing ── */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   1.5rem;
  --space-lg:   2.5rem;
  --space-xl:   4rem;
  --space-2xl:  6rem;
  --space-3xl:  8rem;
  --section-pad: clamp(4rem, 8vw, 7rem);
  --container-w: min(1200px, 92vw);

  /* ── Border radius ── */
  --radius-sm:   4px;
  --radius-md:   10px;
  --radius-lg:   20px;
  --radius-xl:   32px;
  --radius-pill: 9999px;

  /* ── Transitions ── */
  --ease:        cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast:    0.2s;
  --dur-mid:     0.45s;
  --dur-slow:    0.8s;

  /* ── Shadows ── */
  --shadow-sm:      0 2px 12px rgba(0,0,0,0.18);
  --shadow-md:      0 6px 30px rgba(0,0,0,0.28);
  --shadow-lg:      0 16px 60px rgba(0,0,0,0.4);
  --shadow-crimson: 0 8px 40px rgba(139,26,26,0.35);
}
```

> **Accent colour swap guide:** The `--clr-crimson*` family defines the primary accent. The `--clr-gold*` pair defines the secondary metallic accent. To change from crimson to e.g. deep teal, replace the six hex values with your chosen hue's dark/mid/light/bright variants. Also update the raw `rgba(139,26,26,…)` literals inside `hero.css`, `nav.css`, `base.css`, and `animations.css` with the equivalent RGBA of your new accent. Use a CSS variable like `--clr-accent-rgb: 26, 90, 139` at the top of `:root` to make this replacement easy.

---

## SECTION 2 — Google Fonts (Required, load in `<head>`)

These exact three font families power all typography. **Do not substitute them.**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```

| Variable | Font | Role |
|---|---|---|
| `--font-display` | Playfair Display | Hero name, section titles, stat numbers, nav brand |
| `--font-sub` | Cormorant Garamond | Blockquote / pull-quotes, italic accents |
| `--font-body` | DM Sans | All body copy, labels, nav links, tags |

---

## SECTION 3 — CSS File Load Order (copy into `<head>` in this order)

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/nav.css">
<link rel="stylesheet" href="css/hero.css">
```

Order matters: `reset` → `variables` → `base` → `animations` → component files.

---

## SECTION 4 — Navigation Bar (`css/nav.css` + HTML)

### HTML structure (copy verbatim, only change text content in `[brackets]`):

```html
<nav id="nav">
  <div class="nav-inner">
    <a href="#about" class="nav-brand">[SHORT_BRAND_NAME]</a>
    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" role="list">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </div>
</nav>
```

**`[SHORT_BRAND_NAME]`** — 2–4 uppercase letters or a short nickname (e.g. `PREM`, `ALEX`, `KMD`). Rendered in Playfair Display, 1.4rem, weight 700, letter-spacing 0.12em, `var(--clr-cream)`. An underline of `var(--clr-crimson)` slides in on hover via `scaleX` transform.

### Navigation CSS behaviour:
- **Default state:** fully transparent background, padding `1.2rem 0`.
- **`.scrolled` state (added by JS when `window.scrollY > 50`):** `background: rgba(12,5,5,0.95)`, `backdrop-filter: blur(12px)`, padding compresses to `0.8rem 0`, bottom box-shadow `0 1px 0 rgba(139,26,26,0.25), 0 4px 24px rgba(0,0,0,0.4)`.
- **Active link:** `.active` class applied by JS to the link whose section is currently in the viewport. Active links get `color: var(--clr-gold-light)` and `background: rgba(139,26,26,0.2)`.
- **Mobile (≤768px):** hamburger button appears (`display:flex`); nav links panel slides in from the right (`translateX(100%)` → `translateX(0)`) as a full-height drawer (`width: min(280px, 80vw)`, `backdrop-filter: blur(20px)`, `border-left: 1px solid rgba(139,26,26,0.2)`). Hamburger animates into an × when `.open`.

---

## SECTION 5 — Hero / About Section — Exact HTML Blueprint

This is the heart of the home page. The HTML structure is fixed. Replace **only** the values shown in `[BRACKETS]`.

```html
<section id="about" class="section hero-section">

  <!-- Decorative watermark word behind everything -->
  <div class="hero-bg-text" aria-hidden="true">[WATERMARK_WORD]</div>

  <div class="hero-content">

    <!-- ═══════════════ LEFT COLUMN ═══════════════ -->
    <div class="hero-left reveal-left">

      <!-- Small eyebrow label above the name -->
      <div class="hero-label">Portfolio · [YEAR]</div>

      <!-- Name — first name italic weight-400, last name heavy weight-900 -->
      <h1 class="hero-name">
        <span class="hero-name-first">[FIRST_NAME]</span>
        <span class="hero-name-last">[LAST_NAME]</span>
      </h1>

      <!-- Gold subtitle tag — role · institution · ID -->
      <div class="hero-title-tag">[ROLE] &nbsp;·&nbsp; [INSTITUTION] &nbsp;·&nbsp; [STUDENT_OR_WORK_ID]</div>

      <!-- Crimson gradient horizontal rule -->
      <div class="hero-divider"></div>

      <!-- About paragraph — 3–5 sentences, max ~52 characters wide -->
      <p class="hero-bio">
        [BIO_PARAGRAPH]
      </p>

      <!-- Italic blockquote with left crimson border -->
      <blockquote class="hero-quote">
        "[PERSONAL_QUOTE_LINE_1],<br>[PERSONAL_QUOTE_LINE_2]"
      </blockquote>

      <!-- Contact / social pill links -->
      <nav class="hero-links" aria-label="Contact links">

        <!-- Email pill -->
        <a href="mailto:[EMAIL]" class="hero-link">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          [EMAIL]
        </a>

        <!-- Instagram pill (swap SVG path if using a different social) -->
        <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener noreferrer" class="hero-link">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          [INSTAGRAM_HANDLE]
        </a>

        <!-- Behance / LinkedIn / Portfolio pill -->
        <a href="[PORTFOLIO_URL]" target="_blank" rel="noopener noreferrer" class="hero-link">
          <!-- Replace the SVG below with the correct platform icon -->
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.249-4h4.562c-.108-1.14-.73-2.205-2.282-2.205-1.27 0-2.135.57-2.28 2.205zm-2.904 0v-7H6.573v2h5.09v5H6.573v2h7.09v-2z"/>
          </svg>
          [PORTFOLIO_LABEL]
        </a>

      </nav>
    </div><!-- /hero-left -->

    <!-- ═══════════════ RIGHT COLUMN ═══════════════ -->
    <div class="hero-right reveal-right">

      <!-- Photo frame -->
      <div class="hero-photo-frame">
        <div class="hero-photo-inner">
          <!--
            OPTION A — Real photo (recommended):
            Replace the placeholder div with an <img> tag.
            The frame is 3:4 aspect ratio, border-radius 32px.
            Image should be portrait orientation, minimum 640×853px.
            Use object-fit: cover; width: 100%; height: 100%;
          -->
          <!--
          <img
            src="images/[YOUR_PHOTO_FILENAME].jpg"
            alt="[FULL_NAME]"
            style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-xl);"
          >
          -->

          <!--
            OPTION B — Initials placeholder (default until photo is ready):
            Keep the markup below; change "PM" to the person's initials.
          -->
          <div class="hero-photo-placeholder" aria-label="[FULL_NAME]">
            <div class="hero-initials" aria-hidden="true">[INITIALS]</div>
            <div class="hero-photo-decoration"></div>
          </div>

        </div>
        <!-- Gold offset border accent, bottom-right -->
        <div class="hero-photo-accent" aria-hidden="true"></div>
      </div><!-- /hero-photo-frame -->

      <!-- Stats strip — three numbers with labels -->
      <div class="hero-stats reveal-up" style="--delay:0.3s">
        <div class="stat-item">
          <div class="stat-num">[STAT_1_VALUE]</div>
          <div class="stat-label">[STAT_1_LABEL]</div>
        </div>
        <div class="stat-sep" aria-hidden="true"></div>
        <div class="stat-item">
          <div class="stat-num">[STAT_2_VALUE]</div>
          <div class="stat-label">[STAT_2_LABEL]</div>
        </div>
        <div class="stat-sep" aria-hidden="true"></div>
        <div class="stat-item">
          <div class="stat-num">[STAT_3_VALUE]</div>
          <div class="stat-label">[STAT_3_LABEL]</div>
        </div>
      </div><!-- /hero-stats -->

    </div><!-- /hero-right -->
  </div><!-- /hero-content -->

  <!-- Animated scroll hint at bottom centre -->
  <div class="hero-scroll-hint" aria-hidden="true">
    <span>Scroll to explore</span>
    <div class="scroll-line"></div>
  </div>

</section>
```

---

## SECTION 6 — Content Replacement Reference Table

Fill in every bracketed placeholder from Section 5:

| Placeholder | Description | Example (Prerana) |
|---|---|---|
| `[WATERMARK_WORD]` | Single ALL-CAPS word, rendered as a ghosted stroke watermark behind the content. Pick a word that represents the person's field. | `TEXTILE` |
| `[YEAR]` | Portfolio year or graduation year | `2025` |
| `[FIRST_NAME]` | Given name — rendered **italic, weight 400** in Playfair Display at `--text-4xl` | `Prerana` |
| `[LAST_NAME]` | Family name — rendered **weight 900** in Playfair Display at `--text-4xl`, line-height 0.92 | `Mallick` |
| `[ROLE]` | Job title or discipline | `Textile Designer` |
| `[INSTITUTION]` | University / company | `NIFT Kolkata` |
| `[STUDENT_OR_WORK_ID]` | Roll number, employee ID, or graduation batch | `BD/22/883` |
| `[BIO_PARAGRAPH]` | 3–5 sentence summary. 52-char line-width cap. Tone: confident, specific, personal. | See `index.html` |
| `[PERSONAL_QUOTE_LINE_1]` | First line of an inspiring quote the person lives by | `"Life is not about finding yourself,` |
| `[PERSONAL_QUOTE_LINE_2]` | Second line of the quote (after `<br>`) | `it's about creating yourself."` |
| `[EMAIL]` | Email address (used in both `href` and display text) | `preranam867@gmail.com` |
| `[INSTAGRAM_URL]` | Full Instagram profile URL | `https://www.instagram.com/__.prem.core._` |
| `[INSTAGRAM_HANDLE]` | Display handle with `@` prefix | `@__.prem.core._` |
| `[PORTFOLIO_URL]` | Behance / LinkedIn / personal website URL | `https://www.behance.net/premcore` |
| `[PORTFOLIO_LABEL]` | Short display label for the portfolio link | `behance.net/premcore` |
| `[INITIALS]` | 2-letter initials (only if using placeholder, not real photo) | `PM` |
| `[FULL_NAME]` | Full name for `alt` attributes | `Prerana Mallick` |
| `[STAT_1_VALUE]` | A numeric achievement (can include decimal or `+`) | `8.7` |
| `[STAT_1_LABEL]` | Label under stat 1 (max 2 words) | `CGPA at NIFT` |
| `[STAT_2_VALUE]` | Second metric | `7` |
| `[STAT_2_LABEL]` | Label under stat 2 | `Major Projects` |
| `[STAT_3_VALUE]` | Third metric | `4+` |
| `[STAT_3_LABEL]` | Label under stat 3 | `Internships` |

---

## SECTION 7 — Hero CSS (`css/hero.css`) — Exact Reproduction Rules

Copy `css/hero.css` verbatim. The following rules are critical to preserve:

### Layout
- **Section** is `min-height: 100dvh`, `display: flex`, `align-items: center`, `background: var(--clr-bg)`, `padding-top: 5rem` (to clear the fixed nav), `overflow: hidden`.
- **`.hero-content`** is a CSS Grid: `grid-template-columns: 1fr auto`, gap `clamp(2rem, 5vw, 5rem)`, `align-items: center`, `width: var(--container-w)`, `margin-inline: auto`.
- **`.hero-left`** has `max-width: 620px`.
- **`.hero-right`** is `display: flex; flex-direction: column; align-items: center; gap: 2rem`.

### Background decorations (pure CSS, no extra HTML needed)
1. **`.hero-bg-text`** — the watermark word. `position: absolute`, centered with `top:50%; left:50%; transform:translate(-50%,-50%)`. `font-size: clamp(6rem, 18vw, 18rem)`, `font-weight: 900`, `color: transparent`, `-webkit-text-stroke: 1px rgba([ACCENT_RGB],0.08)`. `z-index: 0`.
2. **`::before` pseudo-element** on `.hero-section` — a radial gradient glow blob in the top-right: `rgba([ACCENT_RGB],0.14)` center → `rgba([ACCENT_RGB],0.04)` 50% → transparent.
3. **`::after` pseudo-element** on `.hero-section` — a smaller gold-tinted glow blob in the bottom-left: `rgba(201,169,110,0.06)`.

### Typography rules
- **`.hero-label`** — eyebrow text. `font-size: var(--text-xs)`, `font-weight: 500`, `letter-spacing: 0.3em`, `text-transform: uppercase`, `color: var(--clr-crimson-light)`. A 2rem × 1px line (`background: var(--clr-crimson-light)`) prepended via `::before`.
- **`.hero-name-first`** — `font-family: var(--font-display)`, `font-size: var(--text-4xl)`, `font-weight: 400`, `font-style: italic`, `color: var(--clr-cream)`, `display: block`.
- **`.hero-name-last`** — `font-family: var(--font-display)`, `font-size: var(--text-4xl)`, `font-weight: 900`, `color: var(--clr-white)`, `display: block`, `line-height: 0.92`. The two spans stack vertically creating the large split-name typographic lockup.
- **`.hero-title-tag`** — `font-size: var(--text-sm)`, `font-weight: 400`, `letter-spacing: 0.1em`, `color: var(--clr-gold)`, `text-transform: uppercase`, `margin-top: 1rem`.
- **`.hero-divider`** — `width: 4rem; height: 2px; background: linear-gradient(to right, var(--clr-crimson), transparent); margin: 1.5rem 0`.
- **`.hero-bio`** — `font-size: var(--text-md)`, `line-height: 1.75`, `color: var(--clr-cream-dark)`, `max-width: 52ch`.
- **`.hero-quote`** — `padding-left: 1.25rem; border-left: 2px solid var(--clr-crimson); font-family: var(--font-sub); font-size: var(--text-lg); font-style: italic; color: var(--clr-cream); line-height: 1.5; margin-top: 1.5rem`.

### Social pill links (`.hero-link`)
- **Shape:** `display: inline-flex`, `align-items: center`, `gap: 0.5rem`, `padding: 0.55rem 1.1rem`, `border: 1px solid rgba([ACCENT_RGB],0.4)`, `border-radius: var(--radius-pill)`.
- **Default text colour:** `var(--clr-cream-dark)`, `font-size: var(--text-xs)`, `font-weight: 500`.
- **Hover:** `color: var(--clr-cream)`, `border-color: var(--clr-crimson)`, `background: rgba([ACCENT_RGB],0.12)`. Transition duration `var(--dur-fast)`.
- SVG icons inside are `14px × 14px`, `flex-shrink: 0`.

### Photo frame (`.hero-photo-frame`)
- **Outer frame:** `position: relative`, `width: clamp(220px, 24vw, 320px)`, `aspect-ratio: 3/4`.
- **Inner container (`.hero-photo-inner`):** `width: 100%; height: 100%; border-radius: var(--radius-xl); overflow: hidden; background: linear-gradient(145deg, #1a0808, #2d1010, #3d1414); border: 1px solid rgba([ACCENT_RGB],0.3)`.
- **Accent offset border (`.hero-photo-accent`):** `position: absolute; bottom: -0.75rem; right: -0.75rem; width: 60%; height: 60%; border: 1.5px solid rgba(201,169,110,0.3); border-radius: var(--radius-lg); z-index: -1`. This creates the double-frame visual depth effect.
- **Real photo insertion:** place an `<img>` inside `.hero-photo-inner` with `style="width:100%;height:100%;object-fit:cover;"`. The `border-radius` of the inner div clips the image.

### Stats strip (`.hero-stats`)
- `display: flex; align-items: center; gap: 1.25rem; background: rgba(255,255,255,0.04); backdrop-filter: blur(10px); border: 1px solid rgba([ACCENT_RGB],0.2); border-radius: var(--radius-lg); padding: 1rem 1.5rem; width: 100%; justify-content: center`.
- **`.stat-num`** — `font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 700; color: var(--clr-cream); line-height: 1`.
- **`.stat-label`** — `font-size: var(--text-xs); color: var(--clr-cream-dark); margin-top: 0.25rem; white-space: nowrap`.
- **`.stat-sep`** — `width: 1px; height: 2.5rem; background: rgba([ACCENT_RGB],0.3)`.

### Scroll hint (`.hero-scroll-hint`)
- `position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.6rem`.
- Text: `font-size: var(--text-xs); letter-spacing: 0.2em; text-transform: uppercase; color: var(--clr-gray-warm)`.
- **`.scroll-line`** — `width: 1px; height: 3rem; background: linear-gradient(to bottom, var(--clr-crimson-mid), transparent); border-radius: var(--radius-pill)`.
- The whole hint has `animation: float 3s ease-in-out infinite` (defined in `animations.css`).

### Responsive breakpoint (≤900px)
- Grid collapses to `grid-template-columns: 1fr`, `text-align: center`.
- `.hero-right` gets `order: -1` (photo appears above text on mobile).
- `.hero-label::before` line is hidden.
- `.hero-links` becomes `justify-content: center`.
- Photo frame shrinks to `clamp(160px, 40vw, 240px)`.

---

## SECTION 8 — Animation System (`css/animations.css` + `js/main.js`)

### Reveal classes (add to any element to animate it in on scroll)

| Class | Effect |
|---|---|
| `reveal-up` | Fades in from `translateY(40px)` |
| `reveal-left` | Slides in from `translateX(-50px)` |
| `reveal-right` | Slides in from `translateX(50px)` |
| `reveal-fade` | Fades in (opacity only) |
| `reveal-scale` | Scales in from `scale(0.9)` |

- All start `opacity: 0`, transition `0.75s` with `var(--ease-out)`.
- JS's `IntersectionObserver` adds the `.revealed` class when an element enters viewport at threshold `0.12`.
- `--delay` CSS custom property staggers children: set `style="--delay:0.3s"` on the element.
- Hero left column gets `reveal-left`; hero right column gets `reveal-right`; stats strip gets `reveal-up` with `--delay:0.3s`.

### Key keyframes used in the hero
- **`float`** — used on `.hero-scroll-hint`. Bobs vertically ±10px every 3s infinitely.
- **`fadeUp`, `fadeLeft`, `fadeRight`** — one-shot entry animations triggered by the observer.
- **`dotPulse`** — ripple pulse on timeline dots (not in hero but referenced in `main.js`).

### JS (`js/main.js`) — hero-relevant behaviour
```js
// 1. Nav scroll state
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// 2. Active nav link via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

// 3. Reveal observer
const revealEls = document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right,.reveal-fade,.reveal-scale');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// 4. Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
  this.classList.toggle('open');
  this.setAttribute('aria-expanded', this.classList.contains('open'));
  document.querySelector('.nav-links').classList.toggle('open');
});

// 5. Back-to-top button
const btt = document.getElementById('back-to-top');
window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
```

---

## SECTION 9 — Footer HTML (copy verbatim, change `[BRACKETS]`)

```html
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-name">[FULL_NAME]</div>
      <div class="footer-tagline">[ROLE] &nbsp;·&nbsp; [INSTITUTION] &nbsp;·&nbsp; [ID]</div>
    </div>
    <div class="footer-contact">
      <a href="mailto:[EMAIL]">[EMAIL]</a>
      <a href="tel:[PHONE_E164]">[PHONE_DISPLAY]</a>
      <span>[ADDRESS]</span>
    </div>
    <div class="footer-links-row">
      <a href="[SOCIAL_URL_1]" target="_blank" rel="noopener noreferrer">[SOCIAL_LABEL_1]</a>
      <span aria-hidden="true">·</span>
      <a href="[SOCIAL_URL_2]" target="_blank" rel="noopener noreferrer">[SOCIAL_LABEL_2]</a>
    </div>
    <div class="footer-copy">© [YEAR] [FULL_NAME] &nbsp;·&nbsp; All rights reserved &nbsp;·&nbsp; <em>[TAGLINE]</em></div>
  </div>
</footer>

<a href="#about" id="back-to-top" aria-label="Back to top">
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>
  </svg>
</a>

<script src="js/main.js"></script>
```

Footer CSS is in `base.css`. It uses a 2-column CSS grid on desktop, collapses to 1 column at ≤640px. Background is `#080303`, top border `1px solid rgba([ACCENT_RGB],0.2)`.

---

## SECTION 10 — Accent Colour Swap Cheat-Sheet

When adapting for a person with a different colour scheme (e.g. deep teal, forest green, midnight purple):

1. **In `css/variables.css`:** Replace the 6 accent tokens.
2. **In `css/hero.css`:** Find-replace all `rgba(139,26,26,` with `rgba([R],[G],[B],` for your new accent. Same for `rgba(201,169,110,` (gold secondary — replace if needed).
3. **In `css/nav.css`:** Replace `rgba(12,5,5,` (the nav background is tied to `--clr-bg`) and `rgba(139,26,26,` with new accent.
4. **In `css/base.css`:** Replace `rgba(139,26,26,` in footer border and `#back-to-top` background.
5. **In `css/animations.css`:** Replace `rgba(139,26,26,` in `dotPulse` keyframe.
6. **Do NOT touch:** font families, spacing tokens, radius tokens, transition tokens, layout rules, grid definitions.

---

## SECTION 11 — Photo Integration (Quick Guide)

1. Place the photo file at `images/hero-photo.jpg` (minimum `640×853px`, portrait, `.jpg` or `.webp`).
2. In `index.html`, inside `.hero-photo-inner`, replace the `<div class="hero-photo-placeholder">…</div>` block with:

```html
<img
  src="images/hero-photo.jpg"
  alt="[FULL_NAME]"
  style="width:100%;height:100%;object-fit:cover;display:block;"
>
```

The parent `.hero-photo-inner` already has `border-radius: var(--radius-xl)` and `overflow: hidden`, so the image is automatically clipped to a rounded rectangle with a 3:4 aspect ratio.

---

## SECTION 12 — Checklist for a New Adaptation

- [ ] All 6 accent colour tokens updated in `variables.css`
- [ ] `rgba(139,26,26,…)` literals replaced across `hero.css`, `nav.css`, `base.css`, `animations.css`
- [ ] Google Fonts `<link>` tag present in `<head>` (exact URL from Section 2)
- [ ] CSS files loaded in correct order (Section 3)
- [ ] `[WATERMARK_WORD]` set to a relevant all-caps field descriptor
- [ ] `[FIRST_NAME]` / `[LAST_NAME]` set (first = italic weight-400, last = bold weight-900)
- [ ] `[ROLE]`, `[INSTITUTION]`, `[ID]` filled in `.hero-title-tag`
- [ ] `[BIO_PARAGRAPH]` is 3–5 sentences, fits within 52ch max-width
- [ ] `[PERSONAL_QUOTE]` split across two lines with `<br>`
- [ ] All three `.hero-link` social pills updated (email + 2 social/portfolio links)
- [ ] Photo added OR initials placeholder shows correct `[INITIALS]`
- [ ] Three stats filled: `[STAT_1]`, `[STAT_2]`, `[STAT_3]` with meaningful numbers
- [ ] Nav brand `[SHORT_BRAND_NAME]` set (2–4 chars)
- [ ] Footer fields all updated
- [ ] `js/main.js` loaded at bottom of `<body>` before closing tag
- [ ] No additional fonts introduced
- [ ] No layout grid values changed
- [ ] Site tested at 375px (mobile), 768px (tablet), 1280px (desktop)

---

*Built by Pratyay — feel free to fork and adapt with the guide above.*
