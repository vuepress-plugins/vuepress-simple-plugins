import { rollupTypescript } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", {
    external: ["@vuepress/utils", "@vuepress/core"],
  }),
  ...rollupTypescript("client/composables/dynamicTitle", {
    external: ["vue", "vue-router"],
  }),
  ...rollupTypescript("client/composables/index", {
    external: ["vue", "vue-router"],
  }),
  ...rollupTypescript("client/config", {
    external: ["@vuepress/client"],
  }),
];
