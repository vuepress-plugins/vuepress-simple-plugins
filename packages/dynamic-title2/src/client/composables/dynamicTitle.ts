import { onMounted, watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { usePageHeadTitle } from "@vuepress/client";
import { useLocaleConfig } from "vuepress-shared/lib/client";
import type {
  DynamicTitlePluginOptions,
  DynamicTitleLocaleConfig,
} from "../../shared";

declare const DYNAMIC_TITLE_OPTIONS: DynamicTitlePluginOptions;
declare const DYNAMIC_TITLE_LOCALES: DynamicTitleLocaleConfig;

export const dynamicLocales = DYNAMIC_TITLE_LOCALES;

export const dynamicOption = Object.assign(
  {
    showIcon: "/favicon.ico",
    showText: "(*^▽^*) 欢迎回来！",
    hideIcon: "/favicon.ico",
    hideText: "(ಥ﹏ಥ) 不要离开我嘛~！",
    recoverTime: 2000,
  },
  DYNAMIC_TITLE_OPTIONS
);

export const setupDynamicTitle = (): void => {
  const route = useRoute();
  const title = usePageHeadTitle();
  const recoverTimeout = ref<string | number | NodeJS.Timeout>(0);
  const localeConfig = useLocaleConfig(dynamicLocales);

  const dynamicLocale = localeConfig.value
    ? localeConfig
    : computed(() => ({
        showText: dynamicOption.showText,
        hideText: dynamicOption.hideText,
      }));

  onMounted(() => {
    if (dynamicOption.showIcon !== "")
      getIconElement().setAttribute("href", dynamicOption.showIcon);
    document.addEventListener("visibilitychange", () => {
      document.hidden ? hiddenFun() : visibleFun();
    });

    watch(
      () => route.path,
      (to, from) => {
        if (to !== from) clearTimeout(recoverTimeout.value);
      },
      {
        immediate: true,
        deep: true,
      }
    );
  });

  const hiddenFun = (): void => {
    if (dynamicOption.hideIcon !== "")
      getIconElement().setAttribute("href", dynamicOption.hideIcon);
    document.title = dynamicLocale.value.hideText;
    clearTimeout(recoverTimeout.value);
  };

  const visibleFun = (): void => {
    if (dynamicOption.showIcon !== "")
      getIconElement().setAttribute("href", dynamicOption.showIcon);
    document.title = dynamicLocale.value.showText + title.value;
    recoverTimeout.value = setTimeout(() => {
      document.title = title.value;
    }, dynamicOption.recoverTime);
  };

  const getIconElement = (): Element => {
    let elm = document.querySelector("link[rel=icon]");

    if (elm === null) {
      elm = document.createElement("link");
      elm.setAttribute("rel", "icon");
      document.head.appendChild(elm);
    }

    return elm;
  };
};
