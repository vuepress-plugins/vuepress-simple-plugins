---
title: Plugin Config
icon: config
---

## showIcon

- Type: `string`
- Required: No
- Default: `/favicon.ico`

Activation status icon.

## showText

- Type: `string`
- Required: No
- Default: `(*^▽^*) welcome back! `

Activation status text.

## hideIcon

- Type: `string`
- Required: No
- Default: `/favicon.ico`

Hide the status icon.

## hideText

- Type: `string`
- Required: No
- Default: `(ಥ﹏ಥ) Don't leave me ~!`

Hide status text.

## recoverTime

- Type: `number`
- Required: No
- Default: `2000`

Recovery time.


## locales

- Type: `Record<string, BaseLocale>`
- Required: No
- Example:
  ```ts
  {
    "/en":{
      showText: "(*^▽^*) welcome back! ",
      hideText: "(ಥ﹏ಥ) Don't leave me ~! "
    }
  }
  ```

You can use it to specific options for each locale.


### showText

- Type: `string`
- Required: Yes

Multilingual activation status text.

### hideText

- Type: `string`
- Required: Yes

Multilingual hidden status text.