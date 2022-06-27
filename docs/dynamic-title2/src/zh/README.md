---
home: true
title: 主页
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-dynamic-title2
tagline: 为 VuePress2 提供动态标题
actions:
  - text: 快速上手 💡
    link: /zh/guide.html
    type: primary

  - text: 配置 🛠
    link: /zh/config/

footer: MIT Licensed | Copyright © 2022-present Caleb
copyright: false
---

## 使用插件

### 安装

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-dynamic-title2@next
```

@tab yarn

```bash
yarn add -D vuepress-plugin-dynamic-title2@next
```

@tab npm

```bash
npm i -D vuepress-plugin-dynamic-title2@next
```

:::

### 使用

::: code-tabs#language

@tab TS

```ts
// .vuepress/config.ts
import DynamicTitlePlugin from "vuepress-plugin-dynamic-title2";

export default {
  plugins: [
    DynamicTitlePlugin({
      // 插件选项
    }),
  ],
};
```

@tab JS

```js
// .vuepress/config.js
const DynamicTitlePlugin = require("vuepress-plugin-dynamic-title2");

module.exports = {
  plugins: [
    DynamicTitlePlugin({
      // 插件选项
    }),
  ],
};
```

:::
