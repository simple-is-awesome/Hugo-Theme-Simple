# Hugo Simple Theme

<p align="center">
<img src="https://vip2.loli.io/2023/03/15/9LJ1QX8kKZrRtwA.webp" alt="Simple quote">
</p>

[English version](https://github.com/simple-is-awesome/hugo-simple-theme/blob/main/README.md)

## 介绍

Hugo Simple Theme 是一款简约的hugo博客主题，采用bootstrap+lightbox+jquery构建完成。

孔子曾经说过：“生活本来就很简单，但我们总是喜欢把它变得复杂。”秉承这个观念，我们的目标是回归博客的本质，重新发掘它最初的魅力。这个主题体现了简约与优雅，让你能够专注于真正重要的事物 - 你的内容。

## 主题优点

- 响应式

- 清爽大气

## 使用方法

- 步骤一

安装hugo

你可以在hugo的官方文档 [Installation](https://gohugo.io/installation/) 或者 Youtuber-Mike Dane的 [关于hugo的教学视频](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)找到更多关于本部分的内容。

- 步骤二

创建一个hugo站点

```bash
# 新建一个hugo站点
hugo new site your_site_name
# 进入hugo站点目录
cd your_site_name
# 初始化git仓库
git init
# 将themes/hugo-simple-theme作为子模块添加到当前的git仓库
# 当一个git仓库包含另一个git仓库时，使用子模块有很多好处
git submodule add https://github.com/simple-is-awesome/hugo-simple-theme.git themes/hugo-simple-theme
```

- 步骤三

将hugo-simple-theme文件夹中的exampleSite文件夹的内容复制到hugo站点的根目录并替换掉默认的文件。记得删除掉CNAME文件，因为这个文件是我用来在GitHub pages上自定义域名的。我个人更推荐你使用Netlify或者Vercel来部署你的个人博客，因为它们比GitHub pages更方便。

```bash
# 启动一个本地的web服务器，来实时预览hugo生成的站点
hugo server
```

你可以看以下的gif动图，这张动图展示了步骤二和步骤三的操作流程：

![step2 and step3 demo](https://github.com/simple-is-awesome/hugo-simple-theme/blob/main/static/images/hugo_step2_step3.gif)

 - 步骤四

调整config.toml文件中的选项。

 - 步骤五

一些你需要知道的hugo命令。

```bash
# 新建一个页面
hugo new xxx.md
# 在blog文件夹下新建一篇博文
hugo new blog/xxx.md
```

 - 步骤六

    - 添加、提交、推送本地的git仓库到GitHub
    - 将git仓库导入到Netlify或者Vercel，来享受自动部署的乐趣。你可以在hugo官方文档的 [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/) 章节或者网上的其他资源处找到更多关于部署的相关信息。


祝写博客愉快！:blush: :blush: :blush:

## 许可证

MIT