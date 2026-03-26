# Travel Blog Image Placement Guide

This README is the source of truth for **where to put images** so they render in the correct place in your travel section.

If an image does not show up, it is almost always one of these issues:
- wrong folder
- wrong filename
- wrong extension (`.HEIC` instead of `.jpg` / `.webp`)
- uppercase/lowercase mismatch

---

## 1) Golden Rules

1. Put all travel images under:

   `assets/img/travel/`

2. Use **exact filenames** used by the page templates (shown below).

3. Prefer these formats:
   - `.jpg`
   - `.webp`

4. Avoid `.HEIC` for web pages (convert to jpg/webp first).

5. Keep names lowercase and use hyphens (`-`), not spaces.

6. If a folder doesn’t exist yet, create it exactly as shown.

---

## 2) Image Size Recommendations

These are practical targets for clean rendering and good performance:

- Hero cover images: `1400 x 800` (landscape)
- Card covers (country/destination cards): `800 x 600`
- Gallery carousel images: `800 x 1067` (portrait, 3:4)
- In-page photo grid images:
  - landscape slots: `900 x 600`
  - portrait slots: `600 x 900`
  - square slots: `700 x 700`

Recommended file size target: generally under `500 KB` per image where possible.

---

## 3) Quick Start Checklist

1. Choose the travel page you are updating.
2. Find that page in `_pages/` (mapping below).
3. Copy images into the exact folder listed here.
4. Rename files exactly (`cover.jpg`, `photo-01.jpg`, etc.).
5. Run local site and verify:
   - `docker compose up`
   - open `http://localhost:8080/travel/`

---

## 4) Master Path Map (Exact Paths)

All paths below are relative to repo root.

## 4.1 Travel landing page (`/travel/`) — `_pages/travel.md`

### Carousel (top rotating gallery)
Put these in:
- `assets/img/travel/gallery/gallery-01.jpg`
- `assets/img/travel/gallery/gallery-02.jpg`
- `assets/img/travel/gallery/gallery-03.jpg`
- `assets/img/travel/gallery/gallery-04.jpg`
- `assets/img/travel/gallery/gallery-05.jpg`
- `assets/img/travel/gallery/gallery-06.jpg`

### Home & Heart cards
- Kolkata card image: `assets/img/travel/destinations/kolkata-cover.jpg`
- Riverside card image: `assets/img/travel/riverside/cover.jpg`

### Country cards
- India card: `assets/img/travel/destinations/india-cover.jpg`
- Canada card: `assets/img/travel/destinations/canada-cover.jpg`
- USA card: `assets/img/travel/destinations/usa-cover.jpg`
- Malaysia card: `assets/img/travel/destinations/malaysia-cover.jpg`

---

## 4.2 Country hub pages (card covers)

### India hub (`/travel/india/`) — `_pages/travel_india.md`
- `assets/img/travel/india/rajasthan-cover.jpg`
- `assets/img/travel/india/kashmir-cover.jpg`
- `assets/img/travel/india/himachal-cover.jpg`
- `assets/img/travel/india/north-bengal-cover.jpg`
- `assets/img/travel/india/goa-cover.jpg`
- `assets/img/travel/india/delhi-cover.jpg`

### Canada hub (`/travel/canada/`) — `_pages/travel_canada.md`
- `assets/img/travel/canada/halifax-cover.jpg`
- `assets/img/travel/canada/toronto-cover.jpg`
- `assets/img/travel/canada/niagara-cover.jpg`

### USA hub (`/travel/usa/`) — `_pages/travel_usa.md`
- `assets/img/travel/usa/los-angeles-cover.jpg`
- `assets/img/travel/usa/san-francisco-cover.jpg`
- `assets/img/travel/usa/san-diego-cover.jpg`
- `assets/img/travel/usa/santa-barbara-cover.jpg`
- `assets/img/travel/usa/solvang-cover.jpg`
- `assets/img/travel/usa/new-york-cover.jpg`
- `assets/img/travel/usa/las-vegas-cover.jpg`
- `assets/img/travel/usa/niagara-cover.jpg`
- `assets/img/travel/usa/national-parks-cover.jpg`

---

## 4.3 Destination detail pages

Destination detail pages use **the same cover image as their card thumbnail** (so the thumbnail “blends into” the hero section).

- **Hero image**: `[place]-cover.jpg` (same file used on the hub card)
- **In-page photo grid**: `photo-01.jpg` to `photo-05.jpg` (location depends on the destination page)

### Kolkata (single destination)
- Hero: `assets/img/travel/destinations/kolkata-cover.jpg`
- Grid photos: `assets/img/travel/kolkata/photo-01.jpg` … `photo-05.jpg`

### Riverside (single destination)
- Hero: `assets/img/travel/riverside/cover.jpg` (Riverside is the only page still using `cover.jpg` as its hero)
- Grid photos: `assets/img/travel/riverside/photo-01.jpg` … `photo-05.jpg`

### Canada destinations
- Halifax hero: `assets/img/travel/canada/halifax-cover.jpg`
- Toronto hero: `assets/img/travel/canada/toronto-cover.jpg`
- Niagara (Canada) hero: `assets/img/travel/canada/niagara-cover.jpg`

### USA destinations
- Los Angeles hero: `assets/img/travel/usa/los-angeles-cover.jpg`
- San Francisco hero: `assets/img/travel/usa/san-francisco-cover.jpg`
- San Diego hero: `assets/img/travel/usa/san-diego-cover.jpg`
- Santa Barbara hero: `assets/img/travel/usa/santa-barbara-cover.jpg`
- Solvang hero: `assets/img/travel/usa/solvang-cover.jpg`
- New York hero: `assets/img/travel/usa/new-york-cover.jpg`
- Las Vegas hero: `assets/img/travel/usa/las-vegas-cover.jpg`
- Niagara (USA) hero: `assets/img/travel/usa/niagara-cover.jpg`
- National Parks hero: `assets/img/travel/usa/national-parks-cover.jpg`

### India destinations
- Rajasthan hero: `assets/img/travel/india/rajasthan-cover.jpg`
- Kashmir hero: `assets/img/travel/india/kashmir-cover.jpg`
- Himachal hero: `assets/img/travel/india/himachal-cover.jpg`
- North Bengal hero: `assets/img/travel/india/north-bengal-cover.jpg`
- Goa hero: `assets/img/travel/india/goa-cover.jpg`
- Delhi hero: `assets/img/travel/india/delhi-cover.jpg`

### Kolkata (`/travel/kolkata/`) — `_pages/travel_kolkata.md`
Folder: `assets/img/travel/kolkata/`
- `photo-01.jpg` ... `photo-05.jpg`

Also used on cards:
- `assets/img/travel/destinations/kolkata-cover.jpg`

### Riverside (`/travel/riverside/`) — `_pages/travel_riverside.md`
Folder: `assets/img/travel/riverside/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Halifax (`/travel/canada/halifax/`) — `_pages/travel_halifax.md`
Folder used by page:
- `assets/img/travel/halifax/` for `photo-01.jpg` ... `photo-05.jpg`

Cover used by page card/hero references:
- `assets/img/travel/destinations/halifax-cover.jpg`
- `assets/img/travel/canada/halifax-cover.jpg`

### Toronto (`/travel/canada/toronto/`) — `_pages/travel_canada_toronto.md`
Folder: `assets/img/travel/canada/toronto/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Niagara (Canada) (`/travel/canada/niagara/`) — `_pages/travel_canada_niagara.md`
Folder: `assets/img/travel/canada/niagara/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Rajasthan (`/travel/india/rajasthan/`) — `_pages/travel_india_rajasthan.md`
Folder: `assets/img/travel/india/rajasthan/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Kashmir (`/travel/india/kashmir/`) — `_pages/travel_india_kashmir.md`
Folder: `assets/img/travel/india/kashmir/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Himachal (`/travel/india/himachal/`) — `_pages/travel_india_himachal.md`
Folder: `assets/img/travel/india/himachal/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### North Bengal (`/travel/india/north-bengal/`) — `_pages/travel_india_north_bengal.md`
Folder: `assets/img/travel/india/north-bengal/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Goa (`/travel/india/goa/`) — `_pages/travel_india_goa.md`
Folder: `assets/img/travel/india/goa/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Delhi (`/travel/india/delhi/`) — `_pages/travel_india_delhi.md`
Folder: `assets/img/travel/india/delhi/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Los Angeles (`/travel/usa/los-angeles/`) — `_pages/travel_los_angeles.md`
Folder used by page:
- `assets/img/travel/la/` for `photo-01.jpg` ... `photo-05.jpg`

Cover used by hub cards:
- `assets/img/travel/destinations/la-cover.jpg`
- `assets/img/travel/usa/los-angeles-cover.jpg`

### San Francisco (`/travel/usa/san-francisco/`) — `_pages/travel_usa_sanfrancisco.md`
Folder: `assets/img/travel/usa/san-francisco/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### San Diego (`/travel/usa/san-diego/`) — `_pages/travel_usa_sandiego.md`
Folder: `assets/img/travel/usa/san-diego/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Santa Barbara (`/travel/usa/santa-barbara/`) — `_pages/travel_usa_santabarbara.md`
Folder: `assets/img/travel/usa/santa-barbara/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Solvang (`/travel/usa/solvang/`) — `_pages/travel_usa_solvang.md`
Folder: `assets/img/travel/usa/solvang/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### New York (`/travel/usa/new-york/`) — `_pages/travel_usa_newyork.md`
Folder: `assets/img/travel/usa/new-york/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Niagara (USA) (`/travel/usa/niagara/`) — `_pages/travel_usa_niagara.md`
Folder: `assets/img/travel/usa/niagara/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### Las Vegas (`/travel/usa/las-vegas/`) — `_pages/travel_usa_vegas.md`
Folder: `assets/img/travel/usa/las-vegas/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

### US National Parks (`/travel/usa/national-parks/`) — `_pages/travel_usa_nationalparks.md`
Main hero:
- `assets/img/travel/usa/national-parks/cover.jpg`

Sub-galleries:
- `assets/img/travel/usa/national-parks/joshua-tree/photo-01.jpg`
- `assets/img/travel/usa/national-parks/joshua-tree/photo-02.jpg`
- `assets/img/travel/usa/national-parks/pinnacles/photo-01.jpg`
- `assets/img/travel/usa/national-parks/pinnacles/photo-02.jpg`
- `assets/img/travel/usa/national-parks/yosemite/photo-01.jpg`
- `assets/img/travel/usa/national-parks/yosemite/photo-02.jpg`
- `assets/img/travel/usa/national-parks/red-rock/photo-01.jpg`
- `assets/img/travel/usa/national-parks/red-rock/photo-02.jpg`

### Malaysia (`/travel/malaysia/`) — `_pages/travel_malaysia.md`
Folder: `assets/img/travel/malaysia/`
- `cover.jpg`
- `photo-01.jpg` ... `photo-05.jpg`

---

## 5) Minimal Folder Tree to Create

If you are starting fresh, create this structure first:

assets/img/travel/
- gallery/
- destinations/
- riverside/
- kolkata/
- halifax/
- canada/
  - niagara/
  - toronto/
- india/
  - delhi/
  - goa/
  - himachal/
  - kashmir/
  - north-bengal/
  - rajasthan/
- malaysia/
- la/
- usa/
  - las-vegas/
  - national-parks/
    - joshua-tree/
    - pinnacles/
    - yosemite/
    - red-rock/
  - new-york/
  - niagara/
  - san-diego/
  - san-francisco/
  - santa-barbara/
  - solvang/

---

## 6) Common Mistakes (and Fixes)

1. Uploaded `IMG_1234.HEIC`
   - Fix: convert to `jpg`/`webp` and rename to expected filename.

2. Uploaded to `assets/images/travel/...`
   - Fix: must be `assets/img/travel/...` (img, not images).

3. Named file `Photo-01.jpg` or `photo-1.jpg`
   - Fix: use exact template names like `photo-01.jpg`.

4. Used underscores (`new_york`) instead of hyphens (`new-york`)
   - Fix: use exact folder names in this README.

5. Nothing appears but no build error
   - Cause: wrong path usually falls back to gradient placeholders.
   - Fix: compare your file path character-by-character.

---

## 7) Optional Improvement for Simpler Management

Today, paths are hardcoded in page templates. If you want, we can refactor travel pages to use front matter or a data file (`_data/travel_images.yml`) so you only update one YAML file instead of many page files.
