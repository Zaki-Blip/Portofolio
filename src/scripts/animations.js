function initJourneyLine(reduceMotion) {
  const path = document.querySelector("[data-journey-path]");
  const main = document.querySelector("#main");

  if (!path || !main || typeof path.getTotalLength !== "function") {
    return;
  }

  const length = path.getTotalLength();
  const railSource = document.querySelector("#main .container");

  const setRail = () => {
    if (!railSource) {
      return;
    }
    const rect = railSource.getBoundingClientRect();
    const x = Math.max(7, rect.left - 24);
    document.documentElement.style.setProperty("--journey-x", `${x}px`);
  };

  setRail();

  if (!length) {
    return;
  }

  path.style.strokeDasharray = String(length);

  if (reduceMotion) {
    path.style.strokeDashoffset = "0";
    window.addEventListener("resize", setRail);
    return;
  }

  let ticking = false;

  const update = () => {
    const mainRect = main.getBoundingClientRect();
    const mainTop = mainRect.top + window.scrollY;
    const viewportAnchor = window.innerHeight * 0.64;
    const progress = Math.min(
      1,
      Math.max(0, (window.scrollY + viewportAnchor - mainTop) / mainRect.height),
    );

    path.style.strokeDashoffset = String(length * (1 - progress));
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => {
    setRail();
    requestUpdate();
  });
  update();
}

export function initAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initJourneyLine(reduceMotion);

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    let ticking = false;

    const updateVisibility = () => {
      const shouldShow = window.scrollY > 520;
      backToTop.classList.toggle("is-visible", shouldShow);
      backToTop.tabIndex = shouldShow && !backToTop.classList.contains("is-suppressed") ? 0 : -1;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateVisibility();

    backToTop.addEventListener("click", () => {
      const heroHeading = document.querySelector("#beranda h1");
      if (heroHeading) {
        heroHeading.setAttribute("tabindex", "-1");
        heroHeading.focus({ preventScroll: true });
      }

      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  }
}
