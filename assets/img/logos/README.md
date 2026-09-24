# Organization logos

## Experience section

Referenced by `_layouts/about.liquid` in the `#experience` timeline:

| Basename    | Organization                           |
| ----------- | -------------------------------------- |
| `llnl`      | Lawrence Livermore National Laboratory |
| `ucr`       | University of California, Riverside    |
| `dalhousie` | Dalhousie University                   |
| `vcu`       | Virginia Commonwealth University       |

**The extension does not matter.** `assets/js/image-ext-fallback.js` resolves
`.png`, `.webp`, `.jpg`, `.jpeg` and `.svg` (plus uppercase variants)
automatically. They render inside a 96×96 px rounded tile with
`object-fit: contain`. If no file is found, the card falls back to a text
monogram (`LLNL`, `UCR`, `DAL`, `VCU`).

## Education cards

Round seals shown on a paper disc in each education card (`.edu-card-seal`).
Use square, transparent, circular artwork; referenced with exact filenames.

| File                  | Institution                         | Source                              |
| --------------------- | ----------------------------------- | ----------------------------------- |
| `ucr-seal.svg`        | University of California, Riverside | Wikipedia, "UC Riverside seal.svg"  |
| `jadavpur.svg`        | Jadavpur University                 | Wikipedia, "Jadavpur University Logo.svg" |
| `calcutta-boys.webp`  | Calcutta Boys' School               | Crest cropped from calcuttaboysschool.edu.in logo |
