import { defineUserConfig } from "@vuepress/cli";
import type { UserConfig } from "@vuepress/cli";

export const config = ({ plugins = [], ...config }: UserConfig): UserConfig =>
  defineUserConfig({
    dest: "./dist",

    plugins: [...plugins],

    shouldPrefetch: false,

    ...config,
  });
