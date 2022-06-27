---
home: true
title: Home
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-dynamic-title2
tagline: Dynamic title plugin for VuePress2
actions:
  - text: Guide 💡
    link: /guide.html
    type: primary

  - text: Config 🛠
    link: /config/

footer: MIT Licensed | Copyright © 2022-present Caleb
copyright: false
---

## How to use

### Install

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

### Usage

::: code-tabs#language

@tab TS

```ts
// .vuepress/config.ts
import DynamicTitlePlugin from "vuepress-plugin-dynamic-title2";

export default {
  plugins: [
    DynamicTitlePlugin({
      // your options
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
      // your options
    }),
  ],
};
```

:::
