# 杜博涵个人作品集

这是一个中文个人作品集 demo，用于展示写作作品、AI 项目和简历入口。技术栈为 Next.js、TypeScript、Tailwind CSS，构建结果可部署到 GitHub Pages。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000` 查看页面。

## 手动更新内容

常用内容都在 `data` 文件夹：

- `data/profile.json`：姓名、首页短标题、简介、头像、简历链接、LinkedIn、首页亮点。
- `data/writing.json`：写作作品。新增一条对象即可，`category` 可用 `新闻报道`、`评论`、`播客`。
- `data/projects.json`：AI 项目和研究项目。

头像和项目缩略图放在 `public` 文件夹，然后在 JSON 中写成 `/文件名`。

## 添加简历

将正式简历 PDF 命名为 `resume.pdf`，放入 `public` 文件夹。当前 `data/profile.json` 的 `resumeUrl` 已经指向 `/resume.pdf`。

## 部署到 GitHub Pages

仓库名建议使用 `bohandu.github.io`。推送到 `main` 分支后，GitHub Actions 会构建静态文件并发布到 Pages。

如果需要手动构建：

```bash
pnpm build
```

静态站点会输出到 `out` 文件夹。
