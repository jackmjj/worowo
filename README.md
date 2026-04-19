# Worowo

Worowo 是一个用 Astro 搭建的在线工具站首页，准备部署到 Cloudflare Pages。

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址通常是 `http://localhost:4321`。

## 构建与预览

```bash
npm run build
npm run preview
```

如果你想用 Cloudflare 本地预览构建产物：

```bash
npm run cf:preview
```

## GitHub

如果本地还没关联远程仓库：

```bash
git remote add origin https://github.com/<your-name>/worowo.git
git branch -M main
git push -u origin main
```

## Cloudflare Pages

在 Cloudflare Dashboard 中导入 GitHub 仓库，建议使用以下构建参数：

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

首次导入完成后，后续每次推送到 `main` 都会自动触发部署。
