# 李婷的个人主页 / Li Ting’s Personal Website

一个无需安装依赖、无需构建的中英文个人网站。保留简历原图，包含首页、教育背景、实习经历、项目经历、关于我五个切页。支持手机布局、键盘导航、语言偏好记忆，以及带 # 的页面链接。

## 本地打开

双击 `index.html`，用浏览器打开即可。所有资源均包含在文件夹内，无需外部字体或第三方服务。浏览器若限制本地存储，切换仍然可用，但可能不会记住语言选择。

## 上传到 GitHub 并发布

1. 登录 GitHub，新建一个公开仓库。若希望网址为 `https://你的用户名.github.io/`，仓库名称请填写 `你的用户名.github.io`（替换为你的真实用户名）。也可以使用 `personal-homepage`，对应地址为 `https://你的用户名.github.io/personal-homepage/`。
2. 解压源码包。进入仓库，点击 **Add file → Upload files**，上传 `liting-homepage` 文件夹里面的文件和 `assets` 文件夹。不要只上传 ZIP，也不要把整个 `liting-homepage` 再套一层；`index.html` 应直接出现在仓库根目录。
3. 点击 **Commit changes** 保存。
4. 进入仓库 **Settings → Pages**。
5. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**。
6. Branch 选择 **main**，文件夹选择 **/(root)**，点击 **Save**。如果默认分支名称不同，请选择存放网站文件的那个分支。
7. 等待部署完成。在 Pages 页面打开 GitHub 提供的网址；如暂时未显示，可以查看仓库 **Actions** 中的执行结果。

以后修改文件并提交，GitHub Pages 会自动更新。当前交付仅为本地源码，尚未上传或发布。

官方说明：[配置 GitHub Pages 发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[GitHub Pages 快速入门](https://docs.github.com/en/pages/quickstart)。

## 修改文字和照片

- `content.js`：集中维护中文 `zh` 与英文 `en` 文字。修改中文后，也请同步修改对应英文字段。
- `assets/profile.jpeg`：简历中的原始图片。替换时保持同名即可；如图片内容改变，请同时更新 `app.js` 中的图片替代文字。
- `styles.css`：颜色、字体、布局和手机适配。主题蓝色由顶部的 `--blue` 控制。
- `app.js`：切页和语言逻辑，邮箱与电话链接也在此文件中。
- `index.html`：网站结构、初始标题和网页描述。

网站文字根据提供的简历整理和翻译。教育时间段及“大一”信息按简历保留；实习经历没有自行添加日期。首页保留简历中的电话和邮箱，发布后这两项会对访客公开，可按需在 `app.js` 中修改或删除对应信息块。没有将原始 Word 简历打包进网站。

## 文件结构

```
liting-homepage/
├── index.html
├── styles.css
├── content.js
├── app.js
├── .nojekyll
├── README.md
└── assets/
    └── profile.jpeg
```

页面链接采用 `#education`、`#experience` 等形式，兼容 GitHub Pages 的根域名和仓库子目录，不需要服务器路由配置。`.nojekyll` 为静态发布标记，若网页上传界面遗漏了隐藏文件，可在 GitHub 上新建同名空文件；本网站也不依赖 Jekyll 特性。
