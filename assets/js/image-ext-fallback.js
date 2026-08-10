/**
 * Extension-agnostic image fallback.
 *
 * Photos are referenced by a single canonical path (e.g. photo-01.jpg), but the
 * actual file on disk may carry any common extension — photo-01.jpeg,
 * photo-01.png, and so on. When the initial request 404s, this walks the
 * remaining candidate extensions in order and swaps in the first one that
 * loads. Only if every candidate fails does it hide the image and apply the
 * placeholder described by the data-fallback-* attributes.
 *
 * Usage in markup — decorative gradient on the parent (travel photos):
 *   <img src=".../photo-01.jpg"
 *        data-fallback-bg="linear-gradient(160deg,#140a04 0%,#2a1006 100%)"
 *        onerror="imageExtFallback(this)">
 *
 * Usage in markup — reveal the next sibling instead (experience logo monograms):
 *   <img src=".../ucr.png" data-fallback-next="flex" onerror="imageExtFallback(this)">
 *   <span class="exp-logo-fallback">UCR</span>
 *
 * Loaded non-deferred from head.liquid so the global exists before any <img>
 * in the document body is parsed.
 *
 * NOTE on .heic — it is tried last because browser support is thin: Safari
 * renders it, Chrome and Firefox do not. A .heic straight off an iPhone will
 * therefore load for some visitors and hit the placeholder for the rest. It is
 * in the list so an untouched camera file still works where it can, but for
 * anything you want everyone to see, convert first:
 *   sips -s format jpeg photo-01.heic --out photo-01.jpg      (macOS, built in)
 */
(function () {
  var EXTENSIONS = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "svg",
    "heic",
    "JPG",
    "JPEG",
    "PNG",
    "WEBP",
    "SVG",
    "HEIC",
  ];

  function splitExtension(src) {
    /* Split off ?query / #hash first so cache-busted URLs still work. */
    var suffixAt = src.search(/[?#]/);
    var path = suffixAt === -1 ? src : src.slice(0, suffixAt);
    var suffix = suffixAt === -1 ? "" : src.slice(suffixAt);
    var dotAt = path.lastIndexOf(".");
    if (dotAt === -1 || dotAt < path.lastIndexOf("/")) return null;
    return { base: path.slice(0, dotAt), ext: path.slice(dotAt + 1), suffix: suffix };
  }

  function giveUp(img) {
    var bg = img.getAttribute("data-fallback-bg");
    if (bg && img.parentElement) {
      img.parentElement.style.background = bg;
      /* Photo tiles size to their image, so a tile with no image at all would
         collapse to zero height. Give the placeholder a portrait-ish body. */
      if (!img.parentElement.style.minHeight) {
        img.parentElement.style.minHeight = img.getAttribute("data-fallback-height") || "320px";
      }
    }

    var next = img.getAttribute("data-fallback-next");
    if (next && img.nextElementSibling) img.nextElementSibling.style.display = next;

    img.style.display = "none";
  }

  function imageExtFallback(img) {
    if (!img || img.getAttribute("data-ext-exhausted") === "1") return;

    var parts = splitExtension(img.getAttribute("src") || "");
    if (!parts) {
      giveUp(img);
      return;
    }

    /* Candidates not yet attempted, preserving EXTENSIONS order. */
    var tried = (img.getAttribute("data-ext-tried") || "").split(",").filter(Boolean);
    if (tried.indexOf(parts.ext) === -1) tried.push(parts.ext);

    var next = null;
    for (var i = 0; i < EXTENSIONS.length; i++) {
      if (tried.indexOf(EXTENSIONS[i]) === -1) {
        next = EXTENSIONS[i];
        break;
      }
    }

    if (next === null) {
      img.setAttribute("data-ext-exhausted", "1");
      giveUp(img);
      return;
    }

    tried.push(next);
    img.setAttribute("data-ext-tried", tried.join(","));
    img.src = parts.base + "." + next + parts.suffix;
  }

  window.imageExtFallback = imageExtFallback;

  /* Safety net: catch images that failed before this ran (cached 404s, or an
     inline handler that fired during a slow parse). */
  function sweep() {
    var imgs = document.querySelectorAll("img[data-fallback-bg], img[data-fallback-next]");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (img.complete && img.naturalWidth === 0 && img.style.display !== "none") {
        imageExtFallback(img);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sweep);
  } else {
    sweep();
  }
  window.addEventListener("load", sweep);
})();
