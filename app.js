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
    name: "Gen-E",
    emoji: "🧬",
    url: "https://gen-e.pages.dev/",
    source: "Cloudflare Pages",
    repo: "",
    description: "梅花三数求卦网站。",
    status: "Live",
  },
  {
    name: "EDT2 Admin",
    emoji: "🛰",
    url: "https://edt2.jas0n.cc.cd/admin",
    source: "Edge Tunnel",
    repo: "",
    description: "通过 edge tunnel 暴露的管理入口页面。",
    status: "Live",
  },
  {
    name: "Travel Plans",
    emoji: "🧭",
    url: "https://travel-plan-f2r.pages.dev/11d33fbe/",
    source: "Cloudflare Pages",
    repo: "",
    description: "旅行计划内容入口，会持续加入新的行程页面；当前使用真实内容路径，root 页面为空壳。",
    status: "Live",
  },
];

const tools = [
  {
    name: "Parenting Hub",
    emoji: "👶",
    url: "https://app.notion.com/p/jas0nhuang/Parenting-Hub-359c1e9f3e0c80ba9e40c99bb528f7b5",
    source: "Notion",
    description: "育儿资料和家庭事项的 Notion 工作区。",
  },
  {
    name: "Finance",
    emoji: "💰",
    url: "https://app.notion.com/p/jas0nhuang/Finance-ac7fa67f327341459c1c6a5b1b7af020",
    source: "Notion",
    description: "财务管理和投资资料的 Notion 工作区。",
  },
  {
    name: "ChatGPT",
    emoji: "🤖",
    url: "https://chatgpt.com/",
    source: "OpenAI",
    description: "ChatGPT web app。",
  },
  {
    name: "OpenBB Workspace",
    emoji: "🧠",
    url: "https://pro.openbb.co/",
    source: "HomePage · 托管型项目",
    description: "OpenBB 的在线金融研究工作区。",
  },
  {
    name: "Gemini",
    emoji: "✨",
    url: "https://gemini.google.com/",
    source: "HomePage · 外部平台",
    description: "Gemini Web Chat。",
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
