import { skillGroups, skillLevels } from "../config/skills.js";
import { escapeHtml } from "./utils.js";

function levelClass(level) {
  const normalized = String(level).toLowerCase();
  return ["practicing", "familiar", "learning"].includes(normalized) ? normalized : "learning";
}

function renderSkillTag(item) {
  const level = escapeHtml(item.level);
  return `
    <li class="skill-tag">
      <span class="skill-tag__dot skill-tag__dot--${levelClass(item.level)}" aria-hidden="true"></span>
      <span>${escapeHtml(item.name)}</span>
      <span class="skill-tag__level">${level}</span>
    </li>
  `;
}

function renderSkillGroup(group) {
  return `
    <article class="skill-group">
      <header class="skill-group__head">
        <h3>${escapeHtml(group.title)}</h3>
        <p>${escapeHtml(group.description)}</p>
      </header>
      <ul class="skill-tags">
        ${group.items.map(renderSkillTag).join("")}
      </ul>
    </article>
  `;
}

export function initSkills() {
  const grid = document.querySelector("[data-skills-grid]");
  if (grid) {
    grid.innerHTML = skillGroups.map(renderSkillGroup).join("");
  }

  const legend = document.querySelector("[data-skill-legend]");
  if (!legend) {
    return;
  }

  legend.innerHTML = Object.entries(skillLevels)
    .map(
      ([level, description]) => `
        <li class="skill-legend__item">
          <span class="skill-tag__dot skill-tag__dot--${levelClass(level)}" aria-hidden="true"></span>
          <span><strong class="skill-legend__label">${escapeHtml(level)}</strong> — ${escapeHtml(description)}</span>
        </li>
      `,
    )
    .join("");
}
