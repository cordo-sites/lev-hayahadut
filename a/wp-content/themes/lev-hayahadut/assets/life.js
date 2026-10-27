// first screen: the hero fills the screen down to the bottom of the category row (as in the approved design)
(function () {
  function fit() {
    var hero = document.querySelector(".home .hero"), cats = document.querySelector(".home .cats"), head = document.querySelector(".site-header");
    if (!hero || !cats || innerWidth <= 900) return;
    var r = document.documentElement.style;
    r.setProperty("--above", Math.round(hero.getBoundingClientRect().top + scrollY) + "px"); // everything above the hero: announcement bar + header
    r.setProperty("--cats", cats.offsetHeight + "px");
  }
  fit(); addEventListener("resize", fit); if (document.fonts) document.fonts.ready.then(fit);
})();
