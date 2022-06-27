import type { LocaleConfig } from "@vuepress/core";

import type { BaseOptions, BaseLocale, ConvertLocaleConfig } from "./index";

export type DynamicTitleLocaleData = BaseLocale;

export type DynamicTitleLocaleConfig =
  ConvertLocaleConfig<DynamicTitleLocaleData>;

export interface DynamicTitlePluginOptions extends BaseOptions {
  /**
   * Locale config for dynamic title
   */
  locales?: LocaleConfig<DynamicTitleLocaleData>;
}
