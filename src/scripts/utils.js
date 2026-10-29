const HTML_ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape teks dari konfigurasi sebelum dimasukkan ke template HTML. */
export function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => HTML_ESCAPES[character]);
}

/** Hanya izinkan URL http/https (atau path absolut dari root). */
export function safeHttpUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  const candidate = value.trim();
  if (!/^(https?:\/\/|\/)/i.test(candidate)) {
    return "";
  }

  try {
    const url = new URL(candidate, window.location.href);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return "";
    }
    return url.href;
  } catch {
    return "";
  }
}

/** Tampilan URL yang ringkas dan aman untuk teks. */
export function displayUrl(value) {
  try {
    const url = new URL(value);
    const path = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
    return `${url.hostname}${path}`;
  } catch {
    return value;
  }
}
