import "./styles/main.css";
import "./styles/components.css";
import "./styles/responsive.css";

import { site } from "./config/site.js";
import { initAnimations } from "./scripts/animations.js";
import { initContact } from "./scripts/contact.js";
import { initMascot } from "./scripts/mascot.js";
import { initNavigation } from "./scripts/navigation.js";
import { initProjects } from "./scripts/projects.js";
import { initSkills } from "./scripts/skills.js";
import { safeHttpUrl } from "./scripts/utils.js";

function initSiteMeta() {
  const siteUrl = safeHttpUrl(site.siteUrl);
  if (!siteUrl) {
    return;
  }

  if (!document.querySelector('link[rel="canonical"]')) {
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = siteUrl;
    document.head.append(canonical);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", siteUrl);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute("content", new URL("/assets/images/og-cover.png", siteUrl).href);
  }
}

function initSiteContent() {
  const personalLine = document.querySelector("[data-about-personal]");
  if (!personalLine) {
    return;
  }

  const text = (site.aboutPersonalLine || "").trim();
  if (!text) {
    personalLine.hidden = true;
    return;
  }

  personalLine.textContent = text;
  personalLine.hidden = false;
}

initSiteContent();
initSkills();
initProjects();
initContact();
initNavigation();
initMascot();
initAnimations();
initSiteMeta();
