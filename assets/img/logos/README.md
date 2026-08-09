# Organization logos (Experience section)

Drop logo files here, named after the institution. They are referenced by
`_layouts/about.liquid` in the `#experience` timeline:

| Basename    | Organization                           |
| ----------- | -------------------------------------- |
| `llnl`      | Lawrence Livermore National Laboratory |
| `ucr`       | University of California, Riverside    |
| `dalhousie` | Dalhousie University                   |
| `vcu`       | Virginia Commonwealth University       |

**The extension does not matter.** `assets/js/image-ext-fallback.js` resolves
`.png`, `.webp`, `.jpg`, `.jpeg` and `.svg` (plus uppercase variants)
automatically, so `ucr.webp` and `llnl.png` can sit side by side without any
markup change.

Recommended: transparent background, roughly square, at least 256×256 px. They
render inside a 96×96 px rounded tile with `object-fit: contain`, so non-square
logos are fine — they letterbox rather than crop.

If no file is found under any extension, the card falls back to a text monogram
(`LLNL`, `UCR`, `DAL`, `VCU`) instead of showing a broken image.
