/* ── AOS Initialization ──────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  AOS.init({
    duration: 500,
    once: true,
    easing: "ease-out-cubic",
    offset: 60,
    // AOS ignores the OS setting on its own; with it disabled, content simply shows.
    disable: reduceMotion,
  });
});
