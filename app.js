const projects = [
  {
    name: "Board Game Turn Timer",
    emoji: "⏱",
    url: "https://board-game-turn-timer.pages.dev/",
    source: "Cloudflare Pages",
    repo: "https://github.com/jas0nh/board-game-turn-timer",
    description: "双人桌游/棋类回合计时器，适合手机放在两位玩家中间使用。",
    status: "Live",
  },
  {
    name: "投资偏好问卷",
    emoji: "📈",
    url: "https://investment-preference.pages.dev/",
    source: "Cloudflare Pages",
    repo: "https://github.com/jas0nh/investment-preference-questionnaire",
    description: "中文投资/交易风格自测问卷，本地计分生成偏好报告。",
    status: "Live",
  },
  {
    name: "Royale Baccarat",
    emoji: "🃏",
    url: "https://jas0nh.github.io/Royale-Baccarat/",
    source: "GitHub Pages",
    repo: "https://github.com/jas0nh/Royale-Baccarat",
    description: "HomePage 自建项目中的公开卡牌游戏页面。",
    status: "Live",
  },
  {
    name: "Gen-E",
    emoji: "🧬",
    url: "https://gen-e.pages.dev/",
    source: "Cloudflare Pages",
    repo: "",
    description: "Cloudflare Pages 上已发布的公开网页项目。",
    status: "Live",
  },
];

const tools = [
  {
    name: "OpenBB Workspace",
    emoji: "🧠",
    url: "https://pro.openbb.co/",
    source: "HomePage · 托管型项目",
    description: "OpenBB 的在线金融研究工作区。",
  },
  {
    name: "Notion",
    emoji: "🗒",
    url: "https://notion.so/jas0nhuang",
    source: "HomePage · 外部平台",
    description: "个人 Notion 工作区入口。",
  },
  {
    name: "TradingView Chart",
    emoji: "📊",
    url: "https://tradingview.com/chart/",
    source: "HomePage · 外部平台",
    description: "市场图表和行情观察。",
  },
  {
    name: "Gemini",
    emoji: "✨",
    url: "https://gemini.google.com/",
    source: "HomePage · 外部平台",
    description: "Gemini Web Chat。",
  },
  {
    name: "ChatGPT",
    emoji: "🤖",
    url: "https://chatgpt.com/",
    source: "HomePage · 外部平台",
    description: "ChatGPT Web Chat。",
  },
  {
    name: "OuO Node Status",
    emoji: "🪢",
    url: "https://dash.ouonetwork.com/node-stats",
    source: "HomePage · 外部平台",
    description: "OuO 节点状态查看。",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const toolGrid = document.querySelector("#toolGrid");
const projectCount = document.querySelector("#projectCount");
const toolCount = document.querySelector("#toolCount");

function makeLinkCard(item, compact = false) {
  const repoLink = item.repo
    ? `<a class="secondary-link" href="${item.repo}" target="_blank" rel="noreferrer" aria-label="${item.name} repository">Repo</a>`
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
  toolGrid.innerHTML = tools.map((tool) => makeLinkCard(tool, true)).join("");
  projectCount.textContent = String(projects.length);
  toolCount.textContent = String(tools.length);
}

render();
