import type { DynamicTitleLocaleConfig } from "../shared";

/**
 * Default locale config for dynamic title
 */
export const DynamicTitleLocales: DynamicTitleLocaleConfig = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "/": {
    showText: "(*^▽^*) welcome back! ",
    hideText: "(ಥ﹏ಥ) Don't leave me ~! ",
  },
  "/zh/": {
    showText: "(*^▽^*) 欢迎回来！",
    hideText: "(ಥ﹏ಥ) 不要离开我嘛~！",
  },
  "/zh-tw/": {
    showText: "(*^▽^*) 歡迎回來！",
    hideText: "(ಥ﹏ಥ) 不要離開我嘛~！",
  },
  "/en/": {
    showText: "(*^▽^*) welcome back!",
    hideText: "(ಥ﹏ಥ) Don't leave me ~!",
  },
};
