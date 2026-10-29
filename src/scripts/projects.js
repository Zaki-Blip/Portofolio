import { projects } from "../config/projects.js";
import githubIcon from "../assets/icons/github.svg?raw";
import { escapeHtml, safeHttpUrl } from "./utils.js";

/**
 * Mockup ilustratif berbasis HTML/CSS.
 *
 * Ini BUKAN screenshot. Jika screenshot asli sudah tersedia, isi field
 * `image` pada src/config/projects.js dan mockup ini otomatis diganti.
 */
function mockupLoans() {
  return `
    <div class="mock mock--loans" aria-hidden="true">
      <div class="mock__browser">
        <div class="mock__bar">
          <span class="mock__dot"></span><span class="mock__dot"></span><span class="mock__dot"></span>
          <span class="mock__address"></span>
        </div>
        <div class="mock__app">
          <div class="mock__side">
            <span class="mock__logo"></span>
            <span class="mock__nav is-active"></span>
            <span class="mock__nav"></span>
            <span class="mock__nav"></span>
            <span class="mock__nav"></span>
          </div>
          <div class="mock__main">
            <div class="mock__row">
              <span class="mock__line mock__line--dark w-40"></span>
              <span class="mock__pill"></span>
            </div>
            <div class="mock__stats">
              <span class="mock__stat"></span>
              <span class="mock__stat"></span>
              <span class="mock__stat"></span>
            </div>
            <div class="mock__table">
              <div class="mock__tr"><span></span><span></span><span></span></div>
              <div class="mock__tr"><span></span><span class="mock__status"></span><span class="mock__status mock__status--green"></span></div>
              <div class="mock__tr"><span></span><span class="mock__status mock__status--muted"></span><span class="mock__status mock__status--green"></span></div>
              <div class="mock__tr"><span></span><span class="mock__status"></span><span class="mock__status mock__status--green"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function mockupCertification() {
  return `
    <div class="mock mock--certification" aria-hidden="true">
      <div class="mock__browser">
        <div class="mock__bar">
          <span class="mock__dot"></span><span class="mock__dot"></span><span class="mock__dot"></span>
          <span class="mock__address"></span>
        </div>
        <div class="mock__topnav">
          <span class="mock__branddot"></span>
          <span class="mock__line w-15"></span>
          <span class="mock__line w-10"></span>
          <span class="mock__pill"></span>
        </div>
        <div class="mock__content">
          <div class="mock__row">
            <div>
              <span class="mock__line mock__line--dark w-50"></span>
              <span class="mock__line w-30"></span>
            </div>
            <span class="mock__pill"></span>
          </div>
          <div class="mock__cards">
            <div class="mock__panel">
              <span class="mock__line mock__line--dark w-60"></span>
              <span class="mock__line"></span>
              <span class="mock__line w-80"></span>
              <span class="mock__line w-70"></span>
              <span class="mock__pill"></span>
            </div>
            <div class="mock__panel">
              <span class="mock__line mock__line--dark w-50"></span>
              <span class="mock__line w-80"></span>
              <span class="mock__line w-60"></span>
              <span class="mock__line"></span>
              <span class="mock__pill"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function mockupSchool() {
  return `
    <div class="mock mock--school" aria-hidden="true">
      <div class="mock__browser">
        <div class="mock__bar">
          <span class="mock__dot"></span><span class="mock__dot"></span><span class="mock__dot"></span>
          <span class="mock__address"></span>
        </div>
        <div class="mock__topnav">
          <span class="mock__branddot"></span>
          <span class="mock__line w-20"></span>
          <span class="mock__line w-10"></span>
          <span class="mock__pill"></span>
        </div>
        <div class="mock__schoolhero">
          <div class="mock__schoolcopy">
            <span class="mock__line mock__line--dark w-80"></span>
            <span class="mock__line w-60"></span>
            <span class="mock__line w-70"></span>
            <span class="mock__pill"></span>
          </div>
          <div class="mock__schoolart">
            <svg viewBox="0 0 100 60" preserveAspectRatio="none" focusable="false">
              <g fill="none" stroke="#172A46" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 50h84" stroke-width="1.6" />
                <path d="M22 48V31l28-15 28 15v17" stroke-width="1.8" />
                <path d="M43 48V36h14v12" stroke-width="1.3" />
                <path d="M30 38h6M64 38h6" stroke-width="1.1" opacity=".55" />
              </g>
              <circle cx="50" cy="26" r="1.8" fill="#16845B" />
            </svg>
          </div>
        </div>
        <div class="mock__content mock__content--tight">
          <div class="mock__cards mock__cards--three">
            <span class="mock__panel"></span>
            <span class="mock__panel"></span>
            <span class="mock__panel"></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMockup(type) {
  switch (type) {
    case "certification":
      return mockupCertification();
    case "school":
      return mockupSchool();
    case "loans":
    default:
      return mockupLoans();
  }
}

function renderProjectVisual(project) {
  const image = safeHttpUrl(project.image);

  if (image) {
    const alt = project.imageAlt || `Pratinjau proyek ${project.title}`;
    return `<img class="project-card__image" src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />`;
  }

  return renderMockup(project.mockup);
}

function renderProjectCard(project, index) {
  const repoUrl = safeHttpUrl(project.repoUrl);
  const repoLink = repoUrl
    ? `
      <a
        class="project-card__external"
        href="${escapeHtml(repoUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka repository ${escapeHtml(project.title)} di tab baru"
      >${githubIcon}</a>
    `
    : "";

  return `
    <article class="project-card">
      <div class="project-card__visual">${renderProjectVisual(project)}</div>
      <div class="project-card__body">
        <p class="project-card__meta">
          <span class="project-card__meta-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-card__meta-type">${escapeHtml(project.type || "Web")}</span>
        </p>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-card__summary">${escapeHtml(project.summary)}</p>
        <ul class="tag-list" aria-label="Teknologi yang digunakan">
          ${project.tech.map((tech) => `<li class="tag">${escapeHtml(tech)}</li>`).join("")}
        </ul>
        <div class="project-card__actions">
          <button
            class="btn btn--outline btn--small"
            type="button"
            data-project-id="${escapeHtml(project.id)}"
            aria-haspopup="dialog"
          >
            Detail Proyek
          </button>
          ${repoLink}
        </div>
      </div>
    </article>
  `;
}

function renderDialog(project) {
  const repoUrl = safeHttpUrl(project.repoUrl);
  const demoUrl = safeHttpUrl(project.demoUrl);
  const features = project.features?.length
    ? project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")
    : "<li>Detail fitur belum ditambahkan.</li>";

  const links = [
    repoUrl
      ? `<a class="btn btn--primary btn--small" href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer">Buka Repository ${githubIcon}<span class="sr-only">(membuka tab baru)</span></a>`
      : "",
    demoUrl
      ? `<a class="btn btn--outline btn--small" href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer">Lihat Demo<span class="sr-only">(membuka tab baru)</span></a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const pendingLinks = links
    ? ""
    : `<p class="dialog__pending">Tautan repository dan demo belum ditambahkan. Isi di <code>src/config/projects.js</code> saat sudah tersedia.</p>`;

  return `
    <p class="dialog__eyebrow">Detail proyek <span>${escapeHtml(project.type || "Web")}</span></p>
    <h2 class="dialog__title" id="project-dialog-title">${escapeHtml(project.title)}</h2>
    <p class="dialog__summary">${escapeHtml(project.summary)}</p>
    <div class="dialog__grid">
      <div class="dialog__column">
        <h3>Yang ada di dalamnya</h3>
        <ul class="dialog__features">${features}</ul>
      </div>
      <div class="dialog__column">
        <h3>Teknologi</h3>
        <ul class="tag-list" aria-label="Teknologi yang digunakan">
          ${project.tech.map((tech) => `<li class="tag">${escapeHtml(tech)}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="dialog__actions">
      ${links || pendingLinks}
    </div>
  `;
}

export function initProjects() {
  const grid = document.querySelector("[data-project-grid]");
  const dialog = document.querySelector("[data-project-dialog]");
  const dialogContent = dialog?.querySelector("[data-dialog-content]");
  const dialogClose = dialog?.querySelector("[data-dialog-close]");

  if (grid) {
    grid.innerHTML = projects.map(renderProjectCard).join("");
  }

  if (!dialog || !dialogContent) {
    return;
  }

  let lastFocused = null;

  const openProject = (project) => {
    lastFocused = document.activeElement;
    dialogContent.innerHTML = renderDialog(project);
    document.body.classList.add("is-modal-open");
    dialog.showModal();
  };

  grid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (!button) {
      return;
    }

    const project = projects.find((item) => item.id === button.dataset.projectId);
    if (project) {
      openProject(project);
    }
  });

  dialogClose?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("is-modal-open");
    if (lastFocused instanceof HTMLElement) {
      lastFocused.focus({ preventScroll: true });
    }
    lastFocused = null;
  });
}
