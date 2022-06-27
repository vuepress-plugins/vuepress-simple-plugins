---
title: 插件配置
icon: config
---

## showIcon

- 类型: `string`
- 必填: 否
- 默认: `/favicon.ico`

激活状态图标。

## showText

- 类型: `string`
- 必填: 否
- 默认: `(*^▽^*) 欢迎回来！`

激活状态文字。

## hideIcon

- 类型: `string`
- 必填: 否
- 默认: `/favicon.ico`

隐藏状态图标。

## hideText

- 类型: `string`
- 必填: 否
- 默认: `(ಥ﹏ಥ) 不要离开我嘛~！`

隐藏状态文字。

## recoverTime

- 类型: `number`
- 必填: 否
- 默认: `2000`

恢复时间。

## locales

- 类型: `Record<string, BaseLocale>`
- 必填: 否
- 示例：
  ```ts
  {
    "/zh":{
      showText: "(*^▽^*) 欢迎回来！",
      hideText: "(ಥ﹏ಥ) 不要离开我嘛~！"
    }
  }
  ```

你可以将它用于每个语言环境的特定选项。

### showText

- 类型: `string`
- 必填: 是

多语言激活状态文字。

### hideText

- 类型: `string`
- 必填: 是

多语言隐藏状态文字。
