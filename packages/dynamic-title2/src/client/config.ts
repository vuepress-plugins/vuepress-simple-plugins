import { defineClientConfig } from "@vuepress/client";
import { setupDynamicTitle } from "./composables";

export default defineClientConfig({
  setup: () => {
    setupDynamicTitle();
  },
});
