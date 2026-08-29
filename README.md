# 齐思铭｜AI 产品经理个人主页

无框架的静态单页作品集，使用原生 HTML、CSS 与 JavaScript，可直接部署到任意静态托管服务。

## 内容修改

网站文案、经历、项目、技能兴趣、学习路径、联系信息及图片路径均集中在 `content.js` 的 `window.SITE_DATA` 中。

- 修改文字：直接编辑对应字段。
- 增减经历：增删 `experience` 数组项。
- 增减项目：增删 `projects` 数组项。
- 增减技能或兴趣：增删 `skills.cards`、`interests.cards` 数组项。
- 更换图片：修改相应 `images` 数组中的路径。图片不存在时页面会自动显示毛玻璃占位，不会出现破图。
- 项目轮播：`images` 支持多张图片；仅一张图片时左右按钮会自动隐藏。

`index.html` 只保留页面骨架，`script.js` 负责读取配置并渲染页面及交互。通常更新内容时无需修改这两个文件。

## 固定目录与文件名

```text
assets/
├── images/
│   ├── hero-portrait.png       # 首页主视觉，同时作为顶部头像来源
│   ├── hit-logo.png            # 哈尔滨工业大学校徽
│   ├── experience/             # 经历图片
│   ├── projects/               # 项目图片
│   ├── skills/                 # 技能公共轮播图片
│   └── interests/              # 兴趣公共轮播图片
└── files/
    └── resume.pdf              # 顶部简历链接，固定文件名
```

建议图片使用 PNG、JPG 或 WebP。经历图片推荐 4:3，项目图片推荐 4:3 或 16:10。请保持 `hero-portrait.png`、`hit-logo.png` 和 `resume.pdf` 的固定文件名；其他文件名可自定义，但须同步更新 `content.js` 路径。

## 本地预览

可直接打开 `index.html`，或在项目目录运行：

```bash
python3 -m http.server 3000
```

然后访问 `http://localhost:3000`。项目无需安装依赖或执行构建。
