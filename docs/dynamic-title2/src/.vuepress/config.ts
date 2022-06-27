import { defineUserConfig } from "vuepress";
import theme from "./theme";

import DynamicTitlePlugin from "vuepress-plugin-dynamic-title2";

const base = (process.env.BASE || "/") as "/" | `/${string}/`;

export default defineUserConfig({
  base: `${base}dynamic-title2/`,

  locales: {
    "/": {
      lang: "en-US",
      title: "Dynamic title",
      description: "Dynamic title plugin for VuePress2",
    },

    "/zh/": {
      lang: "zh-CN",
      title: "动态标题",
      description: "为 VuePress2 提供动态标题",
    },
  },

  theme,
  plugins: [
    DynamicTitlePlugin({
      // 插件选项
    }),
  ],
});
