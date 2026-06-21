# 杜博涵个人作品集

这是一个中文个人作品集 demo，用于展示写作作品、AI 项目和简历入口。技术栈为 Next.js、TypeScript、Tailwind CSS，构建结果可部署到 GitHub Pages。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000` 查看页面。

## 手动更新内容

这个网站目前是 **JSON 驱动**，不是 Markdown 驱动。页面代码负责布局，`data` 文件夹负责内容。你后续通常只需要改 JSON 文件，或者替换 `public` 文件夹里的图片 / PDF。

更新流程是：

```text
修改 data/*.json 或替换 public 里的文件
git add .
git commit -m "Update portfolio content"
git push
GitHub Actions 自动构建并发布到 bohandu.github.io
```

也可以直接在 GitHub 网页上编辑 JSON：打开文件，点击右上角铅笔图标，修改内容后选择 `Commit changes`。GitHub 会自动重新部署。

### 修改首页信息

编辑 `data/profile.json`：

```json
{
  "name": "杜博涵",
  "romanizedName": "Bohan Du",
  "headline": "内容工作者丨传播专家",
  "bio": [
    "第一段简介",
    "第二段简介"
  ],
  "headshot": "/portrait-placeholder.svg",
  "resumeUrl": "/resume.pdf",
  "linkedinUrl": "https://www.linkedin.com/",
  "educationLogos": [
    {
      "name": "中国人民大学",
      "image": "/ruc-logo-placeholder.svg",
      "alt": "中国人民大学校徽"
    }
  ]
}
```

常改字段：

- `headline`：首页短标题。
- `bio`：首页简介，每一行字符串会显示成一段。
- `headshot`：头像路径。图片放到 `public` 后写成 `/文件名`。
- `resumeUrl`：简历链接。默认指向 `/resume.pdf`。
- `linkedinUrl`：LinkedIn 链接。
- `educationLogos`：顶部名字后的校徽图片位。替换 `image` 字段即可。

### 新增写作作品

编辑 `data/writing.json`，复制一个对象并修改字段：

```json
{
  "title": "文章标题",
  "publication": "发表媒体或平台",
  "date": "2026-06-21",
  "category": "新闻报道",
  "description": "一到两句话介绍这篇作品。",
  "link": "https://example.com",
  "featured": true
}
```

说明：

- `category` 目前支持 `新闻报道`、`评论`、`播客`，会影响写作页筛选。
- `date` 用 `YYYY-MM-DD` 格式。
- `featured: true` 会让这条作品出现在首页。
- `link` 可以是媒体链接、公众号链接、播客链接或 PDF 链接。

### 新增 AI 或研究项目

编辑 `data/projects.json`：

```json
{
  "title": "项目标题",
  "date": "2026-06-21",
  "status": "进行中",
  "description": "项目简介。",
  "technologies": ["AI 辅助写作", "播客制作"],
  "tags": ["AI", "Podcast"],
  "thumbnail": "/project-podcast.svg",
  "thumbnailAlt": "项目封面说明",
  "link": "https://example.com",
  "featured": true
}
```

说明：

- `thumbnail` 指向 `public` 文件夹里的图片。
- `technologies` 会显示为技术 / 方法标签。
- `tags` 会在首页摘要里显示。
- `featured: true` 会让项目出现在首页。

## 图片、校徽和简历

所有静态文件都放在 `public` 文件夹。引用时不要写 `public`，直接写 `/文件名`。

例子：

```text
public/headshot.jpg        -> /headshot.jpg
public/ruc-logo.png        -> /ruc-logo.png
public/uva-logo.png        -> /uva-logo.png
public/resume.pdf          -> /resume.pdf
```

顶部栏当前有两个校徽占位图：

- `public/ruc-logo-placeholder.svg`
- `public/uva-logo-placeholder.svg`

后续可以替换为真实校徽文件，然后在 `data/profile.json` 的 `educationLogos` 中改 `image` 路径。建议使用 PNG 或 SVG，尺寸保持清晰，不要拉伸变形。

## 添加简历

将正式简历 PDF 命名为 `resume.pdf`，放入 `public` 文件夹。当前 `data/profile.json` 的 `resumeUrl` 已经指向 `/resume.pdf`。

如果想保留多个版本，也可以改成：

```json
"resumeUrl": "/resume-content-role.pdf"
```

然后把对应 PDF 放进 `public` 文件夹。

## 部署到 GitHub Pages

仓库名建议使用 `bohandu.github.io`。推送到 `main` 分支后，GitHub Actions 会构建静态文件并发布到 Pages。

如果需要手动构建：

```bash
pnpm build
```

静态站点会输出到 `out` 文件夹。

## 什么时候需要 Markdown

当前站点是作品索引，不需要 Markdown。JSON 更适合管理作品卡片、日期、分类和链接。

如果以后要加博客、研究札记或论文详情页，可以再引入 Markdown / MDX，让每篇文章成为一个独立文档。
