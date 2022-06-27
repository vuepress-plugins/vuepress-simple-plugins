import type { LocaleData } from "@vuepress/core";

export declare type ConvertLocaleConfig<T extends LocaleData = LocaleData> =
  Record<string, T>;

export interface BaseOptions {
  /**
   * 激活状态图标
   *
   * Activation status icon
   *
   * @default "/favicon.ico"
   */
  showIcon?: string;
  /**
   * 激活状态文字
   *
   * Activation status text
   *
   * @default "(*^▽^*)欢迎回来！"
   */
  showText?: string;
  /**
   * 隐藏状态图标
   *
   * Hide status icon
   *
   * @default "/favicon.ico"
   */
  hideIcon?: string;
  /**
   * 隐藏状态文字
   *
   * Hide status text
   *
   * @default "(ಥ﹏ಥ)不要离开我嘛~！"
   */
  hideText?: string;
  /**
   * 恢复时间
   *
   * Recover time
   *
   * @default 2000
   */
  recoverTime?: number;
}

export interface BaseLocale {
  /**
   * 激活状态文字
   *
   * Activation status text
   *
   */
  showText: string;
  /**
   * 隐藏状态文字
   *
   * Hide status text
   *
   */
  hideText: string;
}
