<h1 align="center">Hugo-Theme-Simple</h1>

[English version](./README.md)

## 介绍

这款主题名为 Simple，是一款基于 Bootstrap 5 构建的简约、以内容为先的博客主题。

孔子曾经说过："生活本来就很简单，但我们总是喜欢把它变得复杂。"秉承这个观念，我们的目标是回归博客的本质，重新发掘它最初的魅力。这个主题体现了简约与优雅，让你能够专注于真正重要的事物——你的内容。

**在线演示：** https://simple-is-awesome.github.io/Hugo-Theme-Simple/ （即本仓库自动部署的双语 `exampleSite`）

## 截图

![light](docs/images/screenshot-light.png)

![dark](docs/images/screenshot-dark.png)

## 特性

- Hugo ≥ 0.146（标准版即可，无需 extended 版）
- Bootstrap 5.3，响应式且快速
- 多语言，导航栏自动出现语言切换器；内置中英文界面翻译，每个字符串都有英文兜底
- 深色 / 浅色 / 跟随系统 三态主题切换，页面加载无闪烁
- 标签云页面和按年份分组的归档布局
- 可折叠的文章目录（TOC）侧边栏（按文章 `showtoc` 控制）
- 每篇文章底部的 CC BY-NC-ND 版权声明框
- [utterances](https://utteranc.es) 评论（自动跟随深色/浅色模式）
- 可选的 [emaction](https://github.com/emaction/emaction.frontend) 表情回应组件
- 代码块复制按钮
- 图片灯箱（Lightbox）
- RSS 订阅，可选用内置 XSLT 样式表在浏览器中美化展示
- 每篇文章可选输出原始 Markdown（"View as Markdown"）
- SEO 友好的 head：OpenGraph、Twitter 卡片和 hreflang 多语言标注
- 返回顶部按钮
- 可选统计分析：Google Analytics、Umami、Microsoft Clarity（仅生产环境构建时输出）

## 环境要求

- Hugo **0.146.0 或更高版本**

## 安装

### 方式一：git 子模块

```bash
# 新建一个hugo站点
hugo new site your_site_name
# 进入hugo站点目录
cd your_site_name
# 初始化git仓库
git init
# 将主题作为子模块添加到当前的git仓库
git submodule add https://github.com/simple-is-awesome/Hugo-Theme-Simple.git themes/hugo-theme-simple
```

然后在站点配置中设置主题：

```toml
theme = "hugo-theme-simple"
```

### 方式二：Hugo module 挂载

也可以不用 `theme` 键，改用 module 系统导入主题（主题仍放在 `themes/hugo-theme-simple`），这样可以按需挂载目录、排除不需要的文件：

```yaml
module:
  imports:
    - path: hugo-theme-simple
      mounts:
        - source: layouts
          target: layouts
        - source: archetypes
          target: archetypes
        - source: i18n
          target: i18n
        - source: static
          target: static
          excludeFiles: # 例如站点已单独引入 jQuery + Lightbox 时
            - js/jquery-4.0.0.min.js
            - js/lightbox.min.js
```

## 快速开始

将 `exampleSite` 文件夹的内容复制到 hugo 站点的根目录并替换掉默认的文件，然后运行：

```bash
hugo server
```

下面的 gif 动图展示了安装和快速开始的操作流程：

<img src="docs/images/hugo_step2_step3.gif" width="800px" alt="安装和快速开始演示">

一些常用命令：

```bash
# 新建一个页面
hugo new xxx.md
# 在blog文件夹下新建一篇博文
hugo new blog/xxx.md
```

## 配置

主题在**不设置任何参数**的情况下也能正常渲染——以下配置全部可选。

### 站点参数（`[params]`）

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `mainSection` | string | `"blog"` | 存放文章的内容 section，用于首页列表、归档分组、侧边栏归档、文章元信息行、版权框和上/下篇导航（评论一经配置会在所有单页渲染） |
| `footer` | string | 未设置 | 页脚版权文本；`{Year}` 占位符会被替换为当前年份，例如 `"&copy; 2023-{Year} Example"` |
| `darkMode` | bool | `true` | 深色 / 浅色 / 跟随系统 主题切换（设为 `false` 可移除） |
| `backToTop` | bool | `true` | 悬浮的返回顶部按钮 |
| `showWordCount` | bool | `false` | 在文章元信息行中显示字数统计 |
| `rssStylesheet` | bool | `false` | 用内置 XSLT 样式表美化 RSS（内置中英文两份） |
| `utterances.repo` | string | 未设置 | [utterances](https://utteranc.es) 评论使用的 GitHub 仓库；仅在设置后才渲染评论 |
| `utterances.issueTerm` | string | `"pathname"` | utterances 的 issue 映射方式 |
| `utterances.label` | string | 未设置 | 可选的 utterances issue 标签 |
| `emaction.endpoint` | string | 未设置 | emaction 表情回应的后端地址；仅在设置后才渲染组件 |
| `umami.scriptURL` | string | 未设置 | Umami 脚本地址；仅在设置后且生产环境构建时输出 |
| `umami.websiteID` | string | 未设置 | Umami 网站 id（需与 `scriptURL` 一起设置） |
| `clarity` | string | 未设置 | Microsoft Clarity 项目 id；仅在生产环境构建时输出 |

### Google Analytics

使用 Hugo 内置的服务配置，仅在生产环境构建时输出：

```toml
[services.googleAnalytics]
  ID = "G-XXXXXXXXXX"
```

### 文章 front matter

| 键 | 说明 |
| --- | --- |
| `showtoc: true` | 为该文章显示可折叠的目录侧边栏 |
| `layout: "archive"` | 用在 section 的 `_index.md` 上：渲染按年份分组的归档布局（参见 `exampleSite/content/blog/_index.md`） |
| `translationKey` | 关联同一篇文章的不同语言版本（供语言切换器和 hreflang 使用） |
| `slug`、`summary`、`tags` | 常规用法——参见 `archetypes/blog.md` |

## 功能指南

以下功能全部可选——不配置任何一项主题也能正常工作。

### 多语言与语言切换器

只要站点配置声明了多于一种语言，导航栏就会自动出现语言切换器，无需额外参数：

```toml
defaultContentLanguage = 'en'

[languages]
  [languages.en]
    languageName = "English"
    languageCode = "en-US"
    weight = 1
    title = "Hugo Theme Simple"
    [languages.en.params]
      languageLabel = "EN" # 在非英文页面上显示的切换器短标签
  [languages.zh]
    languageName = "中文"
    languageCode = "zh-CN"
    weight = 2
    title = "Hugo 简单主题"
    [languages.zh.params]
      languageLabel = "中" # 在非中文页面上显示的切换器短标签
```

行为说明：

- 默认语言位于站点根路径，其余语言位于 `/<lang>/` 前缀下。
- 切换器是一个紧凑的开关，显示目标语言的 `languageLabel`（如 `EN` / `中` 这样的短标签）；未设置时回退到该语言的 `languageName`。
- 它优先链接到**当前页面的对应译文**；没有译文时回退到该语言的首页——因此永远不会 404（例如在标签页上）。
- 有译文的页面会自动输出 `hreflang` 备用链接（含指向默认语言的 `x-default`）。
- 菜单项请用 `pageRef` 而非 `url` 定义（参见 `exampleSite/config.toml`）——Hugo 会解析出各语言的真实页面地址，站点部署在子路径下（如 GitHub Pages 项目站点）时菜单也不会失效。

关联同一篇文章的多语言版本：

- 同一内容目录：使用文件名后缀约定——`about.md` ↔ `about.zh.md` 会自动关联。
- 每种语言独立 `contentDir`：改为在各译文的 front matter 中设置相同的 `translationKey`。

标题、菜单和参数都可以按语言分别设置（`[languages.xx.menu]`、`[languages.xx.params]`）。`exampleSite` 已配置为双语（English / 中文）且内容完全分离——英文站只显示英文页面，中文站只显示中文页面。预览即可看到完整可用的示例。

界面文案：主题内置 `i18n/en.yaml` 和 `i18n/zh.yaml`，按语言键匹配（以 `zh` 开头的其他语言键可直接复制中文文件，如复制为 `i18n/zh-hans.yaml`）；其余语言回退到英文。要支持新语言，把 `i18n/en.yaml` 复制为站点里的 `i18n/<语言键>.yaml` 并翻译其值即可，无需改模板。

### 深色模式

默认开启：导航栏中的三态切换（浅色 / 深色 / 跟随系统）。选择保存在 `localStorage`，并由内联脚本在首次绘制前应用，页面不会闪烁错误主题。utterances 评论会自动跟随所选主题。在 `[params]` 下设置 `darkMode = false` 可移除按钮及其脚本。

### 评论（utterances）

配置仓库后，单页会渲染 [utterances](https://utteranc.es) 评论（基于 GitHub Issue，无广告、无跟踪）：

```toml
[params.utterances]
  repo = "your-github-name/your-repo" # 必填；需在该仓库安装 utterances 应用
  issueTerm = "pathname"              # 可选，默认 "pathname"
  label = "comment"                   # 可选的 issue 标签
```

### 表情回应（emaction）

评论上方的 GitHub 风格 👍/🎉/❤️ 表情回应条，由 [emaction](https://github.com/emaction/emaction.frontend) 驱动，需要自建后端：

```toml
[params.emaction]
  endpoint = "https://your-emaction-backend.example.com"
```

### 统计分析

三种方案可自由组合，全部**只在生产构建**（`hugo`）中输出，`hugo server` 或 `--environment development` 不会输出：

```toml
[services.googleAnalytics]
  ID = "G-XXXXXXXXXX"        # Google Analytics 4

[params]
  clarity = "your-project-id" # Microsoft Clarity

[params.umami]                # 自托管 Umami
  scriptURL = "https://umami.example.com/script.js"
  websiteID = "your-website-id"
```

### RSS 美化

在 `[params]` 下设置 `rssStylesheet = true` 后，RSS 在浏览器中打开会渲染为可读页面（内置 XSLT 样式表，样式已内联、自包含）。内置中英文两份样式：语言键以 `zh` 开头使用中文版，其余使用英文版。

### 目录侧边栏

在文章 front matter 中设置 `showtoc: true`，桌面端会在正文旁渲染可折叠目录，滚动时高亮当前章节。标题层级取自站点的 `markup.tableOfContents` 配置（exampleSite 使用 2–3 级）。

### 归档页

创建带归档布局的 section 索引，例如 `content/blog/_index.md`：

```yaml
---
title: "归档"
url: "/archive/"
layout: "archive"
---
```

文章按年、月分组，每年附标签统计徽章，桌面端还有粘性的年份跳转侧边栏。

多语言站点请自行在各译文的 `url` 中写入语言前缀（如 `_index.zh.md` 里写 `url: "/zh/archive/"`）——front matter 的 `url` 会被原样使用，不会自动加语言前缀。

### 回到顶部与字数统计

- `backToTop = false` 移除悬浮的回到顶部按钮（默认开启）。
- `showWordCount = true` 在文章元信息行显示字数（默认关闭；设置 `hasCJKLanguage` 后可正确统计中日韩文字）。

### "View as Markdown" 输出

如需在 HTML 之外同时发布每篇文章的原始 Markdown（并获得"View as Markdown"链接），在站点配置中加入：

```yaml
uglyURLs: true
outputFormats:
  HTML:
    noUgly: true
  RSS:
    noUgly: true
  MarkdownRaw:
    mediaType: text/markdown
    isPlainText: true
    isHTML: false
```

并为文章启用该输出格式，例如在 `content/blog/_index.md` 中：

```yaml
outputs:
  - HTML # 归档页自身只输出 HTML
cascade:
  outputs:
    - HTML
    - MarkdownRaw
```

## 部署

仓库自带 GitHub Actions 工作流（`.github/workflows/hugo.yml`），可构建 `exampleSite` 并部署到 GitHub Pages。Netlify 和 Vercel 同样适用——参见 hugo 官方文档的 [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/) 章节。

祝写博客愉快！:blush: :blush: :blush:

## 许可证

MIT
