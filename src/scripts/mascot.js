import { mascot } from "../config/mascot.js";

export function initMascot() {
  const mascots = [...document.querySelectorAll("[data-mascot]")];
  const bubbles = [...document.querySelectorAll(".mascot__bubble")];
  const heroFigure = document.querySelector("[data-mascot-figure]");
  const dockFigure = document.querySelector("[data-mascot-figure-dock]");
  const dock = document.querySelector("[data-mascot-dock]");
  const hero = document.querySelector("#beranda");
  const motionToggle = document.querySelector("[data-motion-toggle]");
  const motionLabel = document.querySelector("[data-motion-label]");
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!mascots.length) {
    return;
  }

  // Salin SVG maskot ke versi dock agar tidak menduplikasi markup di HTML.
  if (heroFigure && dockFigure && !dockFigure.querySelector("svg")) {
    const sourceSvg = heroFigure.querySelector("svg");
    if (sourceSvg) {
      const clone = sourceSvg.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.removeAttribute("role");
      clone.removeAttribute("aria-label");
      dockFigure.append(clone);
    }
  }

  let currentSection = mascot.defaultSection;

  const updateBubbleText = () => {
    const message =
      mascot.messages[currentSection] ||
      mascot.messages[mascot.defaultSection] ||
      `Halo, aku ${mascot.name}.`;

    bubbles.forEach((bubble) => {
      bubble.textContent = message;
    });

    // Nama aksesibel ikut memuat teks yang tampak (FIG. label dan balon dialog)
    // agar tidak bertentangan dengan label visual tombol maskot.
    mascots.forEach((element) => {
      const visibleText = element.textContent.replace(/\s+/g, " ").trim();
      element.setAttribute("aria-label", `Sapa ${mascot.name}, maskot ZAKI. ${visibleText}`);
    });
  };

  updateBubbleText();

  const setOpen = (element, open) => {
    element.classList.toggle("is-open", open);
    element.setAttribute("aria-expanded", String(open));
  };

  const closeAllBubbles = () => {
    mascots.forEach((element) => setOpen(element, false));
  };

  mascots.forEach((element) => {
    element.addEventListener("click", () => {
      const willOpen = element.getAttribute("aria-expanded") !== "true";
      closeAllBubbles();
      if (willOpen) {
        setOpen(element, true);
      }
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!mascots.some((element) => element.contains(event.target))) {
      closeAllBubbles();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllBubbles();
    }
  });

  // Teks dialog mengikuti section yang sedang terlihat.
  const sections = [...document.querySelectorAll("[data-mascot-section]")];
  if (sections.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const key = entry.target.dataset.mascotSection;
          if (key && mascot.messages[key]) {
            currentSection = key;
            updateBubbleText();
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Tampilkan maskot kecil setelah hero hampir sepenuhnya terlewati.
  if (dock && hero) {
    let dockVisible = false;
    let ticking = false;
    const contactForm = document.querySelector("[data-contact-form]");
    const contactLinks = document.querySelector("[data-contact-links]");
    const backToTop = document.querySelector("[data-back-to-top]");
    const interactiveTargets = [
      ...document.querySelectorAll("a[href], button, input, textarea, select"),
    ].filter(
      (element) => !element.closest("[data-mascot-dock]") && !element.closest("[hidden]"),
    );

    // Baris teks meta footer juga dihindari agar tombol naik tidak menutupi hak cipta.
    document.querySelectorAll(".site-footer__meta > span").forEach((element) => {
      interactiveTargets.push(element);
    });

    const intersects = (elementBox, otherBox) =>
      elementBox.width > 0 &&
      otherBox.width > 0 &&
      elementBox.left < otherBox.right &&
      elementBox.right > otherBox.left &&
      elementBox.top < otherBox.bottom &&
      elementBox.bottom > otherBox.top;

    // Form dan daftar tautan kontak adalah area yang tidak boleh tertutup
    // maskot kecil maupun tombol kembali ke atas.
    const overlapsContact = (element) => {
      if (!element) {
        return false;
      }

      const elementBox = element.getBoundingClientRect();
      return [contactForm, contactLinks].some(
        (target) => target && intersects(elementBox, target.getBoundingClientRect()),
      );
    };

    const overlapsInteractive = (element) => {
      if (!element) {
        return false;
      }

      const elementBox = element.getBoundingClientRect();
      if (!elementBox.width) {
        return false;
      }

      return interactiveTargets.some((target) => {
        if (target === element || !intersects(elementBox, target.getBoundingClientRect())) {
          return false;
        }
        return window.getComputedStyle(target).visibility !== "hidden";
      });
    };

    const updateDock = () => {
      const threshold = hero.offsetTop + hero.offsetHeight * 0.7;
      const shouldShow = window.scrollY > threshold;
      const blockedByContact = shouldShow && overlapsContact(dock);
      const backToTopBlocked =
        shouldShow && (overlapsContact(backToTop) || overlapsInteractive(backToTop));

      dock.classList.toggle("is-suppressed", blockedByContact);

      if (backToTop) {
        backToTop.classList.toggle("is-suppressed", backToTopBlocked);
        backToTop.tabIndex = shouldShow && !backToTopBlocked ? 0 : -1;
      }

      if (shouldShow !== dockVisible) {
        dockVisible = shouldShow;
        dock.classList.toggle("is-visible", shouldShow);
      }

      if (!shouldShow || blockedByContact) {
        closeAllBubbles();
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateDock);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(handleScroll);
      if (contactForm) resizeObserver.observe(contactForm);
      if (contactLinks) resizeObserver.observe(contactLinks);
    }

    updateDock();
  }

  // Kontrol animasi maskot.
  let paused = false;

  const applyMotionState = () => {
    const reduced = reduceQuery.matches;
    const effectivelyPaused = reduced || paused;

    mascots.forEach((element) => {
      element.classList.toggle("is-paused", effectivelyPaused);
    });

    if (!motionToggle || !motionLabel) {
      return;
    }

    motionToggle.disabled = reduced;
    motionToggle.setAttribute("aria-pressed", String(effectivelyPaused));
    motionToggle.setAttribute(
      "aria-label",
      reduced
        ? "Animasi maskot dinonaktifkan mengikuti preferensi sistem"
        : effectivelyPaused
          ? "Lanjutkan animasi maskot"
          : "Jeda animasi maskot",
    );
    motionLabel.textContent = reduced
      ? "Animasi nonaktif"
      : effectivelyPaused
        ? "Lanjutkan animasi"
        : "Jeda animasi";
  };

  if (motionToggle) {
    motionToggle.addEventListener("click", () => {
      if (reduceQuery.matches) {
        return;
      }
      paused = !paused;
      applyMotionState();
    });

    if (typeof reduceQuery.addEventListener === "function") {
      reduceQuery.addEventListener("change", applyMotionState);
    }
  }

  applyMotionState();
}
