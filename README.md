# Web Projects Hub

一个纯静态入口网页，用来集中打开已经发布到互联网的网页项目，并从 `HomePage` 中抽出公网可访问的工具入口。

Live: https://web-projects-hub.pages.dev/

## 收录原则

- 只放直接从互联网访问的 URL。
- 不收录 LAN、Tailnet、localhost 或需要本地端口转发的服务。
- 不保存用户数据，不做登录，不做追踪。

## 本地运行

```bash
python3 -m http.server 8792
```

然后访问 `http://localhost:8792`。

## Cloudflare Pages

通过 GitHub 导入部署时使用以下设置：

- Framework preset: `None`
- Build command: 留空
- Build output directory: `/`
- Root directory: `/`

本项目包含 `wrangler.jsonc`，可用于本地 Cloudflare Pages 预览：

```bash
npx wrangler pages dev .
```

如需直接上传部署：

```bash
npx wrangler pages deploy . --project-name web-projects-hub
```
