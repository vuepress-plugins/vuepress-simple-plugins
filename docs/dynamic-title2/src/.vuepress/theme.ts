import { pwa, theme } from "../../../shared";

export default theme("dynamic-title2", {
  locales: {
    "/": {
      navbar: ["/", "/guide", "/config", "/demo"],
      sidebar: {
        "/": ["", "guide", "config", "demo"],
      },
    },

    "/zh/": {
      navbar: ["/zh/", "/zh/guide", "/zh/config", "/zh/demo"],
      sidebar: {
        "/zh/": ["", "guide", "config", "demo"],
      },
    },
  },
  plugins: {
    mdEnhance: {
      codetabs: true,
    },
    pwa: pwa({
      name: "vuepress-plugin-dynamic-title2",
      shortName: "VuePress2 Dynamic Title plugin",
      config: "/config",
    }),
  },
});
