import { path } from "@vuepress/utils";

import { getLocales } from "vuepress-shared";
import { DynamicTitleLocales } from "./locales";

import type { DynamicTitlePluginOptions } from "../shared";
import type { PluginFunction } from "@vuepress/core";

/** DynamicTitle Plugin */
export const DynamicTitlePlugin =
  (options: DynamicTitlePluginOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) console.info(`Options: ${options.toString()}`);

    const userDynamicTitleLocales = options.locales
      ? getLocales({
          app,
          name: "dynamic",
          default: DynamicTitleLocales,
          config: options.locales,
        })
      : {};

    return {
      name: "vuepress-plugin-dynamic-title2",

      define: (): Record<string, unknown> => ({
        DYNAMIC_TITLE_OPTIONS: options,
        DYNAMIC_TITLE_LOCALES: userDynamicTitleLocales,
      }),

      clientConfigFile: path.resolve(__dirname, "../client/config.js"),
    };
  };
