/**
 * Travel photo gallery rail.
 *
 * The rail scrolls natively — trackpad, touch swipe, and shift+wheel all work
 * with no JS at all. This only adds the niceties: arrow buttons that appear
 * exactly when the content actually overflows, disabled states at each end,
 * and left/right key support once the rail has focus.
 */
(function () {
  function setup(gallery) {
    var rail = gallery.querySelector("[data-gallery-rail]");
    var controls = gallery.querySelector("[data-gallery-controls]");
    if (!rail || !controls) return;

    var prev = gallery.querySelector("[data-gallery-prev]");
    var next = gallery.querySelector("[data-gallery-next]");

    function overflows() {
      /* 2px of slack so sub-pixel widths don't show arrows for nothing. */
      return rail.scrollWidth - rail.clientWidth > 2;
    }

    function update() {
      if (!overflows()) {
        controls.hidden = true;
        return;
      }
      controls.hidden = false;
      var max = rail.scrollWidth - rail.clientWidth;
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= max - 2;
    }

    function page(direction) {
      rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: "smooth" });
    }

    prev.addEventListener("click", function () {
      page(-1);
    });
    next.addEventListener("click", function () {
      page(1);
    });

    rail.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        page(1);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        page(-1);
        e.preventDefault();
      }
    });

    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    /* Images arrive after layout, each one changing scrollWidth. */
    var imgs = rail.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      if (!imgs[i].complete) imgs[i].addEventListener("load", update);
    }

    update();
  }

  function init() {
    var galleries = document.querySelectorAll("[data-travel-gallery]");
    for (var i = 0; i < galleries.length; i++) setup(galleries[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
