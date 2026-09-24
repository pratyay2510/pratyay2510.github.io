# Travel Blog — Editor's Guide

This document tells you exactly **which file to open**, **where to find the text**, and **where to drop the image** for every section of the travel blog. No knowledge of Jekyll, Liquid, or HTML is required — just a text editor and your photos.

---

## Table of Contents

1. [Page Hierarchy — the big picture](#1-page-hierarchy--the-big-picture)
2. [Image Specifications (read this first)](#2-image-specifications-read-this-first)
3. [Travel Landing Page (`travel.md`)](#3-travel-landing-page-travelmd)
   - [Hero text](#31-hero-text)
   - [Carousel gallery](#32-carousel-gallery)
   - ["Home & Heart" cards](#33-home--heart-cards)
   - [Countries grid](#34-countries-grid)
4. [Country Hub Pages](#4-country-hub-pages)
   - [India hub](#41-india-hub)
   - [Canada hub](#42-canada-hub)
   - [USA hub](#43-usa-hub)
   - [Malaysia hub](#44-malaysia-hub)
5. [Destination Detail Pages](#5-destination-detail-pages)
   - [Kolkata](#51-kolkata)
   - [Riverside](#52-riverside)
   - [Halifax](#53-halifax)
   - [Rajasthan](#54-rajasthan)
   - [All other destinations (quick reference)](#55-all-other-destinations-quick-reference)
6. [How to Edit Text Sections](#6-how-to-edit-text-sections)
7. [How to Add or Remove a Destination](#7-how-to-add-or-remove-a-destination)

---

## 1. Page Hierarchy — the big picture

```
/travel/                          ← landing page  (_pages/travel.md)
│
├── /travel/kolkata/              ← Kolkata detail  (_pages/travel_kolkata.md)
├── /travel/riverside/            ← Riverside detail (_pages/travel_riverside.md)
│
├── /travel/india/                ← India hub  (_pages/travel_india.md)
│   ├── /travel/india/rajasthan/
│   ├── /travel/india/kashmir/
│   ├── /travel/india/himachal/
│   ├── /travel/india/north-bengal/
│   ├── /travel/india/goa/
│   └── /travel/india/delhi/
│
├── /travel/canada/               ← Canada hub  (_pages/travel_canada.md)
│   ├── /travel/canada/halifax/
│   ├── /travel/canada/toronto/
│   └── /travel/canada/niagara/
│
├── /travel/usa/                  ← USA hub  (_pages/travel_usa.md)
│   ├── /travel/usa/los-angeles/
│   ├── /travel/usa/san-francisco/
│   ├── /travel/usa/san-diego/
│   ├── /travel/usa/santa-barbara/
│   ├── /travel/usa/solvang/
│   ├── /travel/usa/new-york/
│   ├── /travel/usa/las-vegas/
│   ├── /travel/usa/niagara/
│   └── /travel/usa/national-parks/
│
└── /travel/malaysia/             ← Malaysia detail  (_pages/travel_malaysia.md)
```

There are **three types** of pages:

| Type | What it does | Example files |
|------|-------------|---------------|
| **Landing page** | The front door — carousel + country cards | `_pages/travel.md` |
| **Hub page** | Groups a country's destinations in a grid | `_pages/travel_india.md`, `_pages/travel_usa.md` |
| **Detail page** | Full writeup for one city/region with photo grids | `_pages/travel_halifax.md`, `_pages/travel_kolkata.md` |

---

## 2. Image Specifications (read this first)

| Slot type | Ideal dimensions | Format |
|-----------|-----------------|--------|
| Carousel slides | 800 × 1067 px (portrait 3:4) | JPG or WEBP |
| Country / destination cards (hub grids) | 800 × 600 px (landscape 4:3) | JPG or WEBP |
| Hero banner (detail pages) | 1400 × 800 px (wide landscape) | JPG or WEBP |
| Photo grid — landscape slot | 900 × 600 px | JPG or WEBP |
| Photo grid — tall/portrait slot | 600 × 900 px | JPG or WEBP |
| Photo grid — square slot | 700 × 700 px | JPG or WEBP |

**Important:**
- Keep file sizes under **500 KB** per image for fast load times. Use [Squoosh](https://squoosh.app) or similar to compress before uploading.
- If an image is missing, the page shows a dark gradient placeholder automatically — nothing breaks.
- HEIC files (from iPhone) **will not display in browsers**. Convert them to JPG or WEBP first.
- File names are case-sensitive on the server. Use the exact names listed in this document (all lowercase, hyphens not underscores).

---

## 3. Travel Landing Page (`travel.md`)

**File:** `_pages/travel.md`

This is the first page visitors see at `/travel/`.

---

### 3.1 Hero text

**Location in file:** lines 26–36, inside `<div class="tr-hero-content">`

```html
<div class="tr-hero-eyebrow">Pratyay Dutta &nbsp;·&nbsp; Field Notes</div>
<h1 class="tr-hero-title">
  Places <em>I have</em><br>
  been to
</h1>
<p class="tr-hero-subtitle">
  Some cities stayed with me long after I left.<br>
  These are the photographs and fragments from the ones that did.
</p>
```

- **Eyebrow line** (small text above the title): edit the text inside `<div class="tr-hero-eyebrow">`.
- **Main title**: edit the text inside `<h1 class="tr-hero-title">`. The `<em>` tag makes a word italic — keep it.
- **Subtitle**: edit the paragraph inside `<p class="tr-hero-subtitle">`. The `<br>` tag creates a line break.

---

### 3.2 Carousel gallery

The rotating photo strip at the top of the page. Currently it has **6 slides**.

**Image folder:** `assets/img/travel/gallery/`

**Naming convention:** `gallery-01.jpg`, `gallery-02.jpg`, … `gallery-06.jpg`

**To replace a photo:** drop your image into `assets/img/travel/gallery/` with the correct filename. The page will pick it up automatically.

**To update a caption:** find the corresponding `<div class="tr-carousel-caption">` in `_pages/travel.md`:

```html
<div class="tr-carousel-slide">
  <img src="{{ '/assets/img/travel/gallery/gallery-01.jpg' | relative_url }}" ...>
  <div class="tr-carousel-caption">Somewhere beautiful</div>   ← edit this text
</div>
```

Each slide follows the same pattern. The captions are short — one to five words works best.

**To add a 7th (or more) slides:** copy an entire `<div class="tr-carousel-slide">...</div>` block, paste it after the last one, and update the image `src` to `gallery-07.jpg`. Drop the new photo file into the gallery folder.

**To remove a slide:** delete the entire `<div class="tr-carousel-slide">...</div>` block for that slide.

---

### 3.3 "Home & Heart" cards

These are the two large cards for **Kolkata** and **Riverside**.

**Location in file:** the `<section class="tr-hometowns">` block (around lines 135–184).

#### Kolkata card

| What | Where |
|------|-------|
| Cover image | `assets/img/travel/destinations/kolkata-cover.jpg` |
| Card title | `<h3 class="tr-home-card-title">Kolkata</h3>` |
| Badge label | `<span class="tr-home-card-badge">Hometown</span>` |
| Tagline | `<p class="tr-home-card-sub">The city that made me — and never quite lets me forget.</p>` |

#### Riverside card

| What | Where |
|------|-------|
| Cover image | `assets/img/travel/riverside/cover.jpg` |
| Card title | `<h3 class="tr-home-card-title">Riverside</h3>` |
| Badge label | `<span class="tr-home-card-badge">Current Home</span>` |
| Tagline | `<p class="tr-home-card-sub">Where the San Bernardino foothills meet the Inland Empire…</p>` |

---

### 3.4 Countries grid

The four country cards at the bottom (India, Canada, USA, Malaysia).

**Location in file:** the `<section class="tr-destinations">` block (around lines 187–281).

For each country card, there are three things you can change:

| What | Where in the `<a class="tr-dest-card">` block |
|------|------|
| Cover image | The `src=` attribute of the `<img>` tag |
| Region tag | `<div class="tr-dest-tag">South Asia</div>` |
| Country name | `<h3 class="tr-dest-name">India</h3>` |
| Subtitle blurb | `<p class="tr-dest-sub">Rajasthan, Kashmir…</p>` |

**Cover image paths for the countries:**

| Country | Image file |
|---------|-----------|
| India | `assets/img/travel/destinations/india-cover.jpg` |
| Canada | `assets/img/travel/destinations/canada-cover.jpg` |
| United States | `assets/img/travel/destinations/usa-cover.jpg` |
| Malaysia | `assets/img/travel/destinations/malaysia-cover.jpg` |

---

## 4. Country Hub Pages

Hub pages list a country's sub-destinations in a card grid. They have a text-based hero (no background photo) and a paragraph intro below it.

---

### 4.1 India hub

**File:** `_pages/travel_india.md`

#### Hero text (lines 26–35)

- **Background word** (large decorative text): `<div class="tr-hero-bg-word">INDIA</div>` — change it if you want a different word.
- **Eyebrow:** `<div class="tr-hero-eyebrow">South Asia &nbsp;·&nbsp; Pratyay Dutta</div>`
- **Title:** inside `<h1 class="tr-hero-title">`
- **Subtitle:** inside `<p class="tr-hero-subtitle">`

#### Intro paragraph (lines 38–42)

```html
<div class="tr-hub-intro">
  <p class="tr-hub-intro-text">
    India is not a single destination…
  </p>
</div>
```

Edit the text inside `<p class="tr-hub-intro-text">` freely.

#### Destination cards — image files

| Destination | Image path |
|-------------|-----------|
| Rajasthan | `assets/img/travel/india/rajasthan-cover.jpg` |
| Kashmir | `assets/img/travel/india/kashmir-cover.jpg` |
| Himachal Pradesh | `assets/img/travel/india/himachal-cover.jpg` |
| North Bengal | `assets/img/travel/india/north-bengal-cover.jpg` |
| Goa | `assets/img/travel/india/goa-cover.jpg` |
| Delhi | `assets/img/travel/india/delhi-cover.jpg` |

For each card, the editable text fields follow this pattern:

```html
<div class="tr-hub-place-tag">Rajasthan</div>          ← region label
<div class="tr-hub-place-name">The Land of Kings</div> ← card title
<div class="tr-hub-place-sub">Jaipur, Jodhpur…</div>   ← short description
```

---

### 4.2 Canada hub

**File:** `_pages/travel_canada.md`

#### Hero text
- **Background word:** `<div class="tr-hero-bg-word">CANADA</div>`
- Title, eyebrow, subtitle: same structure as India (lines 24–35).

#### Intro paragraph
Inside `<p class="tr-hub-intro-text">` — edit freely.

#### Destination cards — image files

| Destination | Image path |
|-------------|-----------|
| Halifax | `assets/img/travel/canada/halifax-cover.jpg` |
| Toronto | `assets/img/travel/canada/toronto-cover.jpg` |
| Niagara Falls | `assets/img/travel/canada/niagara-cover.jpg` |

---

### 4.3 USA hub

**File:** `_pages/travel_usa.md`

#### Hero text
- **Background word:** `<div class="tr-hero-bg-word">USA</div>`

#### Intro paragraph
Inside `<p class="tr-hub-intro-text">`.

#### Destination cards — image files

| Destination | Image path |
|-------------|-----------|
| Los Angeles | `assets/img/travel/usa/los-angeles-cover.jpg` |
| San Francisco | `assets/img/travel/usa/san-francisco-cover.jpg` |
| San Diego | `assets/img/travel/usa/san-diego-cover.jpg` |
| Santa Barbara | `assets/img/travel/usa/santa-barbara-cover.jpg` |
| Solvang | `assets/img/travel/usa/solvang-cover.jpg` |
| New York City | `assets/img/travel/usa/new-york-cover.jpg` |
| Las Vegas | `assets/img/travel/usa/las-vegas-cover.jpg` |
| Niagara Falls | `assets/img/travel/usa/niagara-cover.jpg` |
| National Parks | `assets/img/travel/usa/national-parks-cover.jpg` |

---

### 4.4 Malaysia hub

**File:** `_pages/travel_malaysia.md`

Malaysia is a single-destination page (no sub-hub structure). Check this file for its specific image slots and text sections — it follows the same detail-page pattern described in Section 5 below.

---

## 5. Destination Detail Pages

Every detail page follows the same structure:

```
Hero image  →  Highlights strip  →  Pull quote  →  Section + Photo grid  →  (repeat)  →  Closing quote
```

---

### 5.1 Kolkata

**File:** `_pages/travel_kolkata.md`

#### Hero image

| Slot | File to create/replace |
|------|----------------------|
| Hero banner (full-width) | `assets/img/travel/destinations/kolkata-cover.jpg` |

The hero image is also used as the card thumbnail on the landing page.

#### Hero overlay text (lines 35–39)

```html
<div class="tr-dest-hero-tag">India &nbsp;·&nbsp; West Bengal</div>
<h1 class="tr-dest-hero-title">Kolkata</h1>
<p class="tr-dest-hero-subtitle">The city that never quite lets you go.</p>
```

Edit these three lines to change the tag, title, and subtitle that float over the hero photo.

#### Highlights strip (lines 47–62)

Three stat items. For each one:

```html
<div class="tr-highlight-item">
  <span class="tr-highlight-icon">🌆</span>     ← emoji icon
  <div class="tr-highlight-val">Hometown</div>   ← main value / label
  <div class="tr-highlight-label">Where I grew up</div>  ← sub-label
</div>
```

Change the emoji, the value, and the sub-label.

#### Pull quotes (lines 64–68, 148–150)

```html
<div class="tr-pull-quote reveal-up">
  <p>"…your quote text here…"</p>
  <cite>— Attribution line</cite>    ← optional: remove or update
</div>
```

The `<cite>` line is optional — delete it if you don't want an attribution.

#### Text sections

Each text section looks like:

```html
<div class="tr-dest-section reveal-up">
  <div class="tr-dest-section-label">The city</div>        ← small label above title
  <h2 class="tr-dest-section-title">Joy, chaos, and everything in between</h2>
  <div class="tr-dest-richtext">
    <p>First paragraph…</p>
    <p>Second paragraph…</p>
  </div>
</div>
```

Add, remove, or edit `<p>` paragraphs inside `<div class="tr-dest-richtext">` freely.

#### Photo grids

**2-column grid** — used after the first text section:

| Slot | File |
|------|------|
| Photo 1 (tall portrait) | `assets/img/travel/kolkata/photo-01.jpg` |
| Photo 2 (tall portrait) | `assets/img/travel/kolkata/photo-02.jpg` |

**3-column grid** — used after the second text section:

| Slot | File |
|------|------|
| Photo 3 (landscape) | `assets/img/travel/kolkata/photo-03.jpg` |
| Photo 4 (landscape) | `assets/img/travel/kolkata/photo-04.jpg` |
| Photo 5 (landscape) | `assets/img/travel/kolkata/photo-05.jpg` |

To **update a caption**, find the `<figcaption>` just below each `<img>` tag:

```html
<figure class="tr-dest-photo tr-dest-photo--tall">
  <img src="…/kolkata/photo-01.jpg" …>
  <figcaption>Add caption here</figcaption>  ← edit this
</figure>
```

---

### 5.2 Riverside

**File:** `_pages/travel_riverside.md`

#### Hero image

| Slot | File |
|------|------|
| Hero banner | `assets/img/travel/riverside/cover.jpg` |

Also used as the card thumbnail on the landing page's "Home & Heart" section.

#### Hero overlay text (lines 37–41)

```html
<div class="tr-dest-hero-tag">California &nbsp;·&nbsp; Inland Empire</div>
<h1 class="tr-dest-hero-title">Riverside</h1>
<p class="tr-dest-hero-subtitle">A desert city at the foot of the mountains…</p>
```

#### Highlights strip — three items

| Icon | Value | Sub-label |
|------|-------|-----------|
| 🎓 | UC Riverside | PhD, 2023 – present |
| 🏔️ | 3,000 ft | Box Springs peaks nearby |
| 🌅 | 70 mi | From the Pacific Ocean |

Edit these inside the `<div class="tr-highlights">` block.

#### Text sections

Three sections: "The beginning", "The landscape", "Living here". Each is a `<div class="tr-dest-section">` block — edit the label, title, and paragraphs as described in [Section 6](#6-how-to-edit-text-sections).

#### Photo grids

| Slot | File | Grid |
|------|------|------|
| Photo 1 (tall) | `assets/img/travel/riverside/photo-01.jpg` | 2-col |
| Photo 2 (tall) | `assets/img/travel/riverside/photo-02.jpg` | 2-col |
| Photo 3 (landscape) | `assets/img/travel/riverside/photo-03.jpg` | 3-col |
| Photo 4 (landscape) | `assets/img/travel/riverside/photo-04.jpg` | 3-col |
| Photo 5 (landscape) | `assets/img/travel/riverside/photo-05.jpg` | 3-col |

---

### 5.3 Halifax

**File:** `_pages/travel_halifax.md`

#### Hero image

| Slot | File |
|------|------|
| Hero banner | `assets/img/travel/destinations/halifax-cover.jpg` |

Also used for the Halifax card thumbnail on the Canada hub page (that one reads from `assets/img/travel/canada/halifax-cover.jpg` — note the different subfolder).

#### Hero overlay text (lines 36–39)

```html
<div class="tr-dest-hero-tag">Canada &nbsp;·&nbsp; Nova Scotia</div>
<h1 class="tr-dest-hero-title">Halifax</h1>
<p class="tr-dest-hero-subtitle">Harbour fog, research code, and seafood on the waterfront.</p>
```

#### Highlights strip — three items

| Icon | Value | Sub-label |
|------|-------|-----------|
| 🌊 | Atlantic | Harbour city |
| 🔬 | MITACS | Research Fellowship 2022 |
| 🎓 | Dalhousie | Dr. Yannick Marchand |

#### Text sections

Two sections: "The research" and "The city". Edit each `<div class="tr-dest-section">` block.

#### Photo grids

**Asymmetric grid** (1 landscape + 1 square):

| Slot | File |
|------|------|
| Photo 1 (landscape) | `assets/img/travel/halifax/photo-01.jpg` |
| Photo 2 (square) | `assets/img/travel/halifax/photo-02.jpg` |

**3-column grid:**

| Slot | File |
|------|------|
| Photo 3 (square) | `assets/img/travel/halifax/photo-03.jpg` |
| Photo 4 (square) | `assets/img/travel/halifax/photo-04.jpg` |
| Photo 5 (square) | `assets/img/travel/halifax/photo-05.jpg` |

> Note: There are HEIC files in `assets/img/travel/halifax/` from an iPhone. These **will not display in a browser**. Rename/convert the ones you want to use to JPG and name them `photo-01.jpg`, `photo-02.jpg`, etc.

---

### 5.4 Rajasthan

**File:** `_pages/travel_india_rajasthan.md`

#### Hero image

| Slot | File |
|------|------|
| Hero banner | `assets/img/travel/india/rajasthan/cover.jpg` |

The card thumbnail on the India hub reads from `assets/img/travel/india/rajasthan-cover.jpg` (a separate file one level up — you may want both to be the same image or different crops).

#### Highlights strip — three items

| Icon | Value | Sub-label |
|------|-------|-----------|
| 🏰 | Jaipur | The Pink City |
| 🔵 | Jodhpur | The Blue City |
| 🏞️ | Udaipur | City of Lakes |

#### Text sections

Two sections: "Jaipur" and "Jodhpur". Edit or add more `<div class="tr-dest-section">` blocks.

#### Photo grids

**2-column grid:**

| Slot | Suggested subject | File |
|------|------------------|------|
| Photo 1 (tall) | Hawa Mahal / Jaipur street | `assets/img/travel/india/rajasthan/photo-01.jpg` |
| Photo 2 (tall) | Amber Fort | `assets/img/travel/india/rajasthan/photo-02.jpg` |

**3-column grid:**

| Slot | Suggested subject | File |
|------|------------------|------|
| Photo 3 (landscape) | Jodhpur blue houses | `assets/img/travel/india/rajasthan/photo-03.jpg` |
| Photo 4 (landscape) | Mehrangarh Fort | `assets/img/travel/india/rajasthan/photo-04.jpg` |
| Photo 5 (landscape) | Rajasthan landscape | `assets/img/travel/india/rajasthan/photo-05.jpg` |

---

### 5.5 All other destinations (quick reference)

Every other detail page follows the **exact same structure** as Rajasthan/Halifax above. Here is a quick reference for all image file paths:

#### India sub-destinations

| Destination | File | Hero image | Photo grid folder |
|-------------|------|------------|-------------------|
| Kashmir | `_pages/travel_india_kashmir.md` | `assets/img/travel/india/kashmir/cover.jpg` | `assets/img/travel/india/kashmir/photo-0N.jpg` |
| Himachal Pradesh | `_pages/travel_india_himachal.md` | `assets/img/travel/india/himachal/cover.jpg` | `assets/img/travel/india/himachal/photo-0N.jpg` |
| North Bengal | `_pages/travel_india_north_bengal.md` | `assets/img/travel/india/north-bengal/cover.jpg` | `assets/img/travel/india/north-bengal/photo-0N.jpg` |
| Goa | `_pages/travel_india_goa.md` | `assets/img/travel/india/goa/cover.jpg` | `assets/img/travel/india/goa/photo-0N.jpg` |
| Delhi | `_pages/travel_india_delhi.md` | `assets/img/travel/india/delhi/cover.jpg` | `assets/img/travel/india/delhi/photo-0N.jpg` |

#### Canada sub-destinations

| Destination | File | Hero image | Photo grid folder |
|-------------|------|------------|-------------------|
| Toronto | `_pages/travel_canada_toronto.md` | `assets/img/travel/canada/toronto/cover.jpg` | `assets/img/travel/canada/toronto/photo-0N.jpg` |
| Niagara (Canada) | `_pages/travel_canada_niagara.md` | `assets/img/travel/canada/niagara/cover.jpg` | `assets/img/travel/canada/niagara/photo-0N.jpg` |

#### USA sub-destinations

| Destination | File | Hero image | Photo grid folder |
|-------------|------|------------|-------------------|
| Los Angeles | `_pages/travel_los_angeles.md` | `assets/img/travel/usa/los-angeles/cover.jpg` | `assets/img/travel/usa/los-angeles/photo-0N.jpg` |
| San Francisco | `_pages/travel_usa_sanfrancisco.md` | `assets/img/travel/usa/san-francisco/cover.jpg` | `assets/img/travel/usa/san-francisco/photo-0N.jpg` |
| San Diego | `_pages/travel_usa_sandiego.md` | `assets/img/travel/usa/san-diego/cover.jpg` | `assets/img/travel/usa/san-diego/photo-0N.jpg` |
| Santa Barbara | `_pages/travel_usa_santabarbara.md` | `assets/img/travel/usa/santa-barbara/cover.jpg` | `assets/img/travel/usa/santa-barbara/photo-0N.jpg` |
| Solvang | `_pages/travel_usa_solvang.md` | `assets/img/travel/usa/solvang/cover.jpg` | `assets/img/travel/usa/solvang/photo-0N.jpg` |
| New York City | `_pages/travel_usa_newyork.md` | `assets/img/travel/usa/new-york/cover.jpg` | `assets/img/travel/usa/new-york/photo-0N.jpg` |
| Las Vegas | `_pages/travel_usa_vegas.md` | `assets/img/travel/usa/las-vegas/cover.jpg` | `assets/img/travel/usa/las-vegas/photo-0N.jpg` |
| Niagara (USA) | `_pages/travel_usa_niagara.md` | `assets/img/travel/usa/niagara/cover.jpg` | `assets/img/travel/usa/niagara/photo-0N.jpg` |
| National Parks | `_pages/travel_usa_nationalparks.md` | `assets/img/travel/usa/national-parks/cover.jpg` | `assets/img/travel/usa/national-parks/photo-0N.jpg` |

> `photo-0N.jpg` means `photo-01.jpg`, `photo-02.jpg`, etc. Open the specific `.md` file to confirm how many photo slots it has.

---

## 6. How to Edit Text Sections

All the prose on every detail page lives inside blocks that look like this:

```html
<div class="tr-dest-section reveal-up">
  <div class="tr-dest-section-label">The research</div>
  <h2 class="tr-dest-section-title">Chess, reinforcement learning, and the Atlantic</h2>
  <div class="tr-dest-richtext">
    <p>First paragraph of your writeup goes here.</p>
    <p>Second paragraph. Add as many <p> blocks as you want.</p>
  </div>
</div>
```

**What you can safely edit:**

| Element | What it does | Safe to edit? |
|---------|-------------|---------------|
| `tr-dest-section-label` | Small grey label above the title | Yes |
| `h2 tr-dest-section-title` | Bold section heading | Yes |
| `<p>` inside `tr-dest-richtext` | Body paragraphs | Yes — add/remove freely |
| `tr-pull-quote` `<p>` | Blockquote / featured text | Yes |
| `<cite>` inside pull quote | Attribution line | Yes — delete if not needed |
| `tr-dest-hero-tag` | Tag line overlaid on hero image | Yes |
| `tr-dest-hero-subtitle` | Subtitle overlaid on hero image | Yes |
| `tr-highlight-val` / `tr-highlight-label` | Stats in the highlights strip | Yes |
| `tr-highlight-icon` | Emoji in highlights strip | Yes |

**What you should NOT touch (unless you know HTML):**

- The `class=` attributes on any element — they control styling and animation.
- The `{{ … | relative_url }}` parts inside `src=` attributes — these are Liquid template tags that generate the correct URL.
- The `onerror=` attributes — these are fallback gradients if an image is missing.
- The `<script>` block at the bottom of each file — this handles scroll animations and (on the landing page) the carousel.
- The front matter block at the very top of each file (the section between `---` and `---`). Do not change `permalink`, `layout`, or `nav`.

---

## 7. How to Add or Remove a Destination

### Adding a new destination to a hub page

1. Open the hub file (e.g. `_pages/travel_india.md`).
2. Find the `<div class="tr-hub-places">` block.
3. Copy an existing `<a class="tr-hub-place …">…</a>` card block.
4. Paste it at the end of the list, before the closing `</div>`.
5. Update:
   - `href` — set to the new destination's URL (e.g. `/travel/india/mysore/`)
   - `src` — point to your new cover image
   - `alt` — descriptive alt text
   - The tag, name, and sub text inside `tr-hub-place-content`
6. Create a new detail page file in `_pages/` following the naming convention (e.g. `travel_india_mysore.md`). Copy an existing detail page as a starting template and update the front matter `title`, `permalink`, and `description`.

### Removing a destination

1. Delete the `<a class="tr-hub-place …">…</a>` card block from the hub page.
2. Optionally delete the corresponding `_pages/travel_*.md` file and its image folder.

### Making a card "featured" (wider)

Add `tr-hub-place--featured` to the card's class attribute:

```html
<a class="tr-hub-place tr-hub-place--featured reveal-up" href="…">
```

This makes the card span the full row width. Currently Rajasthan and Los Angeles use this. Only use one featured card per hub page for best layout.

---

*Last updated: March 2026*
