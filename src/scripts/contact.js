import { site } from "../config/site.js";
import arrowUpRightIcon from "../assets/icons/arrow-up-right.svg?raw";
import githubIcon from "../assets/icons/github.svg?raw";
import linkedinIcon from "../assets/icons/linkedin.svg?raw";
import mailIcon from "../assets/icons/mail.svg?raw";
import { displayUrl, escapeHtml, safeHttpUrl } from "./utils.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function renderContactLinks() {
  const container = document.querySelector("[data-contact-links]");
  if (!container) {
    return;
  }

  const email = (site.email || "").trim();
  const github = safeHttpUrl(site.github);
  const linkedin = safeHttpUrl(site.linkedin);
  const links = [];

  if (email && EMAIL_PATTERN.test(email)) {
    links.push({
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: mailIcon,
      external: false,
    });
  }

  if (github) {
    links.push({
      label: "GitHub",
      value: displayUrl(github),
      href: github,
      icon: githubIcon,
      external: true,
    });
  }

  if (linkedin) {
    links.push({
      label: "LinkedIn",
      value: displayUrl(linkedin),
      href: linkedin,
      icon: linkedinIcon,
      external: true,
    });
  }

  if (!links.length) {
    container.innerHTML = `
      <div class="contact-empty" role="note">
        <p class="contact-empty__title">Kanal kontak belum ditambahkan</p>
        <p>
          Isi <code>email</code>, <code>github</code>, atau <code>linkedin</code> di
          <code>src/config/site.js</code> agar tautan kontak muncul di sini.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = links
    .map(
      (link) => `
        <a
          class="contact-link"
          href="${escapeHtml(link.href)}"
          ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
        >
          <span class="contact-link__icon" aria-hidden="true">${link.icon}</span>
          <span class="contact-link__text">
            <span class="contact-link__label">${escapeHtml(link.label)}</span>
            <span class="contact-link__value">${escapeHtml(link.value)}</span>
          </span>
          <span class="contact-link__arrow" aria-hidden="true">${arrowUpRightIcon}</span>
          ${link.external ? '<span class="sr-only">(membuka tab baru)</span>' : ""}
        </a>
      `,
    )
    .join("");
}

function updateFooterGithub() {
  const footerLink = document.querySelector("[data-footer-github]");
  if (!footerLink) {
    return;
  }

  const github = safeHttpUrl(site.github);
  if (!github) {
    footerLink.hidden = true;
    return;
  }

  footerLink.href = github;
  footerLink.target = "_blank";
  footerLink.rel = "noopener noreferrer";
  footerLink.setAttribute("aria-label", "GitHub ZAKI (membuka tab baru)");
  footerLink.hidden = false;
}

function getMailtoHref(data) {
  const email = (site.email || "").trim();
  if (!email || !EMAIL_PATTERN.test(email)) {
    return "";
  }

  const subject = encodeURIComponent(`Pesan portofolio dari ${data.name}`);
  const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\n${data.email}`);
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) {
    return;
  }

  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector("[data-form-submit]");
  const submitLabel = form.querySelector("[data-form-submit-label]");
  const fields = {
    name: form.querySelector("#contact-name"),
    email: form.querySelector("#contact-email"),
    message: form.querySelector("#contact-message"),
  };

  if (!status || !submitButton || !submitLabel || Object.values(fields).some((field) => !field)) {
    return;
  }

  let endpoint = "";
  try {
    const formspreeUrl = new URL((site.formspreeEndpoint || "").trim());
    if (formspreeUrl.protocol === "https:") {
      endpoint = formspreeUrl.href;
    }
  } catch {
    endpoint = "";
  }

  let submitted = false;

  const getError = (name) => {
    const value = fields[name].value.trim();

    if (name === "name") {
      if (!value) return "Nama wajib diisi.";
      if (value.length < 2) return "Nama minimal 2 karakter.";
    }

    if (name === "email") {
      if (!value) return "Email wajib diisi.";
      if (!EMAIL_PATTERN.test(value)) return "Masukkan alamat email yang valid, misalnya nama@email.com.";
    }

    if (name === "message") {
      if (!value) return "Pesan wajib diisi.";
      if (value.length < 10) return "Pesan minimal 10 karakter agar lebih jelas.";
    }

    return "";
  };

  const setFieldError = (name, message) => {
    const field = fields[name];
    const errorElement = form.querySelector(`[data-error-for="${name}"]`);

    if (!errorElement) {
      return;
    }

    errorElement.textContent = message;

    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  };

  const clearStatus = () => {
    status.className = "form-status";
    status.replaceChildren();
  };

  const setStatusText = (type, message) => {
    status.className = `form-status is-${type}`;
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    status.replaceChildren(paragraph);
  };

  const setUnconfiguredStatus = (data) => {
    const fragment = document.createDocumentFragment();

    const paragraph = document.createElement("p");
    paragraph.append("Form belum terhubung ke layanan pengiriman. Tambahkan endpoint Formspree di ");
    const code = document.createElement("code");
    code.textContent = "src/config/site.js";
    paragraph.append(code, " (lihat README), lalu coba lagi.");
    fragment.append(paragraph);

    const mailto = getMailtoHref(data);
    if (mailto) {
      const mailParagraph = document.createElement("p");
      const link = document.createElement("a");
      link.href = mailto;
      link.textContent = "Atau kirim isi form ini lewat email";
      mailParagraph.append(link, ".");
      fragment.append(mailParagraph);
    } else {
      const note = document.createElement("p");
      note.textContent = "Email juga belum diisi di konfigurasi, jadi alternatif mailto belum tersedia.";
      fragment.append(note);
    }

    status.className = "form-status is-info";
    status.replaceChildren(fragment);
  };

  const setSubmitting = (isSubmitting) => {
    submitButton.disabled = isSubmitting;
    submitLabel.textContent = isSubmitting ? "Mengirim…" : "Kirim Pesan";

    if (isSubmitting) {
      form.setAttribute("aria-busy", "true");
    } else {
      form.removeAttribute("aria-busy");
    }
  };

  const showNetworkError = (data) => {
    const fragment = document.createDocumentFragment();
    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Pesan belum terkirim. Coba lagi beberapa saat lagi, atau gunakan alternatif email di bawah.";
    fragment.append(paragraph);

    const mailto = getMailtoHref(data);
    if (mailto) {
      const mailParagraph = document.createElement("p");
      const link = document.createElement("a");
      link.href = mailto;
      link.textContent = "Kirim lewat email";
      mailParagraph.append(link, ".");
      fragment.append(mailParagraph);
    }

    status.className = "form-status is-error";
    status.replaceChildren(fragment);
  };

  const sendMessage = async (data) => {
    setSubmitting(true);
    setStatusText("info", "Mengirim pesan…");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `Pesan portofolio dari ${data.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Pengiriman gagal dengan status ${response.status}.`);
      }

      form.reset();
      submitted = false;
      Object.keys(fields).forEach((name) => setFieldError(name, ""));
      setStatusText("success", "Pesan terkirim. Terima kasih sudah menghubungi!");
    } catch (error) {
      console.error("Form kontak gagal dikirim:", error);
      showNetworkError(data);
    } finally {
      setSubmitting(false);
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitted = true;

    const errors = Object.keys(fields)
      .map((name) => ({ name, message: getError(name) }))
      .filter((item) => item.message);

    Object.keys(fields).forEach((name) => {
      const error = errors.find((item) => item.name === name);
      setFieldError(name, error ? error.message : "");
    });

    if (errors.length) {
      clearStatus();
      fields[errors[0].name].focus();
      return;
    }

    const data = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      message: fields.message.value.trim(),
    };

    if (!endpoint) {
      setUnconfiguredStatus(data);
      return;
    }

    sendMessage(data);
  });

  Object.entries(fields).forEach(([name, field]) => {
    field.addEventListener("blur", () => {
      if (submitted || field.value.trim()) {
        setFieldError(name, getError(name));
      }
    });

    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        setFieldError(name, getError(name));
      }
    });
  });
}

export function initContact() {
  renderContactLinks();
  updateFooterGithub();
  initContactForm();
}
