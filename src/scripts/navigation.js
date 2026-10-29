function focusSectionHeading(target) {
  if (!target) {
    return;
  }

  const heading = target.querySelector("h1, h2");
  if (!heading) {
    return;
  }

  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
}

export function initNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("primary-navigation");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];
  const sections = [...document.querySelectorAll("[data-section]")];

  if (!header || !toggle || !nav) {
    return;
  }

  let navOpen = false;

  const setNavOpen = (open) => {
    navOpen = open;
    nav.classList.toggle("is-open", open);
    header.classList.toggle("is-nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
  };

  toggle.addEventListener("click", () => {
    setNavOpen(!navOpen);
  });

  nav.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !navOpen) {
      return;
    }

    const target = document.querySelector(link.getAttribute("href"));
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    setNavOpen(false);

    if (isMobile) {
      window.setTimeout(() => focusSectionHeading(target), 420);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navOpen) {
      setNavOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!navOpen) {
      return;
    }

    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      setNavOpen(false);
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const handleDesktopChange = (event) => {
    if (event.matches) {
      setNavOpen(false);
    }
  };

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", handleDesktopChange);
  }

  let scrollTicking = false;
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    scrollTicking = false;
  };

  const onScroll = () => {
    if (scrollTicking) {
      return;
    }
    scrollTicking = true;
    window.requestAnimationFrame(updateHeader);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  updateHeader();

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-42% 0px -53% 0px", threshold: 0 },
    );

    sections.forEach((section) => spy.observe(section));
  }

  setActiveLink("beranda");
}
