const projects = [
  {
    name: "TurnTable",
    emoji: "⏱",
    url: "https://board-game-turn-timer.pages.dev/",
    source: "Cloudflare Pages",
    repo: "https://github.com/jas0nh/board-game-turn-timer",
    description: "Mobile-first turn timer, 3D dice roller and random-number toolkit for tabletop games.",
    status: "Try live",
  },
  {
    name: "Royale Baccarat",
    emoji: "♠",
    url: "https://royale-baccarat.pages.dev/",
    source: "Cloudflare Pages · React",
    repo: "https://github.com/jas0nh/Royale-Baccarat",
    description: "Free no-commission Baccarat simulator with side bets, correct draw rules, history and live P&L.",
    status: "Try live",
  },
  {
    name: "投资偏好问卷",
    emoji: "📈",
    url: "https://investment-preference.pages.dev/",
    source: "Cloudflare Pages",
    repo: "https://github.com/jas0nh/investment-preference-questionnaire",
    description: "20 题识别六维投资风格；无需登录，所有答案只在浏览器本地计分。",
    status: "Try live",
  },
  {
    name: "梅花三数 · Gen-E",
    emoji: "🧬",
    url: "https://gen-e.pages.dev/",
    source: "Cloudflare Pages",
    repo: "https://github.com/jas0nh/meihua-three-numbers",
    description: "Privacy-first Meihua Yishu tool with transparent hexagram steps and reusable AI prompts.",
    status: "Try live",
  },
  {
    name: "EVA Title Card",
    emoji: "◼",
    url: "https://github.com/jas0nh/eva-title-skill",
    source: "GitHub · Node.js",
    repo: "",
    description: "Browser-free Evangelion title-card generator with 16 original layouts rendered locally.",
    status: "View source",
  },
  {
    name: "Zine Poster Skill",
    emoji: "✦",
    url: "https://github.com/jas0nh/zine-poster-skill",
    source: "GitHub · AI agents",
    repo: "",
    description: "Deterministic prompt compiler for tactile zine posters and photo-editorial collages.",
    status: "View source",
  },
  {
    name: "Travel Map",
    emoji: "◎",
    url: "https://github.com/jas0nh/world-travel-log",
    source: "GitHub · Next.js",
    repo: "",
    description: "Private self-hosted travel tracker with regional drill-down, plans, timelines, PMTiles and GPX overlays.",
    status: "View source",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const projectCount = document.querySelector("#projectCount");
let scheduledThemeTimer = null;

function syncScheduledTheme() {
  const now = new Date();
  const hour = now.getHours();
  const isNight = hour >= 21 || hour < 9;
  const nextChange = new Date(now);

  document.documentElement.dataset.theme = isNight ? "night" : "day";
  document.documentElement.style.colorScheme = isNight ? "dark" : "light";

  nextChange.setMinutes(0, 2, 0);
  nextChange.setHours(isNight ? 9 : 21);
  if (nextChange <= now) {
    nextChange.setDate(nextChange.getDate() + 1);
  }

  window.clearTimeout(scheduledThemeTimer);
  scheduledThemeTimer = window.setTimeout(syncScheduledTheme, nextChange - now);
}

function makeLinkCard(item, compact = false) {
  const repoLink = item.repo
    ? `<a class="secondary-link" href="${item.repo}" target="_blank" rel="noreferrer" aria-label="${item.name} repository">GitHub ↗</a>`
    : "";

  return `
    <article class="link-card ${compact ? "link-card--compact" : ""}">
      <a class="card-main" href="${item.url}" target="_blank" rel="noreferrer">
        <span class="card-emoji" aria-hidden="true">${item.emoji}</span>
        <span class="card-copy">
          <span class="card-title">${item.name}</span>
          <span class="card-description">${item.description}</span>
        </span>
        <span class="open-mark" aria-hidden="true">↗</span>
      </a>
      <div class="card-meta">
        <span>${item.source}</span>
        <span>${item.status || "Public"}</span>
        ${repoLink}
      </div>
    </article>
  `;
}

function render() {
  projectGrid.innerHTML = projects.map((project) => makeLinkCard(project)).join("");
  projectCount.textContent = String(projects.length);
}

render();
syncScheduledTheme();
