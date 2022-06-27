import { hopeTheme } from "vuepress-theme-hope";
import type { ThemeFunction } from "@vuepress/core";
import type { HopeThemeOptions } from "vuepress-theme-hope";

const hostname =
  process.env["HOSTNAME"] || "https://vuepress-theme-hope-v2.netlify.app";

export const theme = (
  name: string,
  { plugins = {}, ...options }: HopeThemeOptions
): ThemeFunction =>
  hopeTheme({
    hostname,

    author: {
      name: "Caleb",
      url: "https://reinness.com",
    },

    iconAssets: "iconfont",

    repo: `vuepress-plugins/vuepress-simple-plugins/tree/main/packages/${name}/`,
    docsRepo: "vuepress-plugins/vuepress-simple-plugins",
    docsDir: `docs/${name}/src`,

    logo: "/logo.svg",

    footer: "MIT Licensed | Copyright © 2022-present Caleb",
    copyright: false,
    displayFooter: true,

    pageInfo: ["Category", "Tag", "ReadingTime"],

    plugins: {
      comment: {
        provider: "Giscus",
        repo: "vuepress-plugins/giscus-discussions",
        repoId: "R_kgDOHjOpkQ",
        category: "Announcements",
        categoryId: "DIC_kwDOHjOpkc4CP12B",
      },

      seo:
        hostname === "https://vuepress-theme-hope.github.io"
          ? {}
          : {
              canonical: `https://vuepress-theme-hope.github.io/v2/${
                name.endsWith("2") ? name.substring(0, name.length - 1) : name
              }/`,
            },

      ...plugins,
    },

    ...options,
  });
