<div align="center">

<img src="./packages/vscode/icon.png" width="100" />

# Naily's ArkTS Support

![GitHub Repo stars](https://img.shields.io/github/stars/groupguanfang/arkTS?style=flat)&nbsp;
[![VSCode Marketplace version](https://img.shields.io/visual-studio-marketplace/v/NailyZero.vscode-naily-ets?style=flat&label=vscode%20marketplace%20version)](https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets)&nbsp;
[![@arkts/declarations NPM version](https://img.shields.io/npm/v/%40arkts%2Fdeclarations?logo=npm&logoColor=red&label=arkts%2Fdeclarations)](https://www.npmjs.com/package/@arkts/declarations)&nbsp;
[![@arkts/language-server NPM version](https://img.shields.io/npm/v/%40arkts%2Flanguage-server?logo=npm&logoColor=red&label=arkts%2Flanguage-server)](https://www.npmjs.com/package/@arkts/language-server)&nbsp;
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/groupguanfang/arkTS)&nbsp;
![GitHub repo size](https://img.shields.io/github/repo-size/groupguanfang/arkTS)&nbsp;
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/groupguanfang/arkTS/main?label=Main%20Branch%20Last%20Commit)&nbsp;

</div>

Language: <a href="./README.md">简体中文</a>｜English

> I've created a QQ group chat, it is welcomed to join it and chat with us (Group number: 746153004)

This is a ArkTS VSCode Extension developed basic on Volar🌹Because ArkTS is still unsupport VSCode and most of the existing ArkTS extensions in the VSCode marketplace are very rudimentary, so I decided to write my own.

> ⚠️Notice: This package is basic on `API 13`, so there might be some issues if your current HarmonyOS version is below than `API 13`. It is welcomed to contribute to this Repository.

- 🖊️ Completed JSON Schema Support. Supporting JSON Schema on files below:
  - `build-profile.json5` Module/Project Configuration
  - `oh-package.json5` Module/Project Configuration
  - `module.json5` Module/Project Configuration
  - `code-linter.json5` Module/Project Configuration
  - `resources/element/` kv config including `color.json` and others
  - `main_pages.json5`
- 🪐 Thanks to the powerful Volar. After upgrading to version 0.0.7, It is almost perfectly supports all ArkTS highlight, autocomplete and suggestions😋👍
- 📦 Allow auto-installing `ohpm` dependency and sync `hvigor` configuration.
- 🚧 Supports in-line`codelinter`提示 like ESLint, to locate issues precisely👍
- 🀄️ Supports import `oh_modules` third-party packages via `tsconfig.json` configuration⏬
- 🆓 `$r` `$rawfile` autocomplete, and ArkTS code formatting is coming next and welcomed to contribute👀

![Screenshot](./screenshots/edit.gif)

## Extension Installation📦

Install it on Marketplace: [https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets](https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets)

Or directly search `ArkTS Support`on VSCode.

## ArkTS Source Code Jump 🔍

ArkTS source code jump requires `@arkts/declarations`, so you have to install `@arkts/declarations` on your HarmonyOS project via `npm`.

```bash
npm install @arkts/declarations
```

Then, create or edit `tsconfig.json` on the root of your HarmonyOS project directory, adding following content:

```json5
{
  "extends": "@arkts/declarations/dist/tsconfig.base.json",
  "compilerOptions": {
    "types": ["@arkts/declarations"],
    "lib": ["ESNext"], 
    "experimentalDecorators": true,

    // Basic compiler and module options, it is suggested the config as below
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",

    // It is suggested to turn on the strict mode
    "strict": true,
    // It is suggest to turn strictPropertyInitialization off
    "strictPropertyInitialization": false
  }
}
```

Heritage this configuration and `Restart VSCode` or `Save this file`, ArkTS server will auto-reload the configuration(with notice)。

![Screenshot](./screenshots/navigation-tip.png)

There are notices when importing modules if you configed `tsconfig.json` correctly. The principal of importing modules is scanning the officual API of ArkTS and generate a series of `compilerOptions.paths`, you just need to heritage it😋

![Screenshot](./screenshots/import-tip.png)

## `oh_modules` Support 🀄️

Issue [#19](https://github.com/Groupguanfang/arkTS/issues/19) has mentioned a solution, add configurations below on your `tsconfig.json`

```json5
{
  "compilerOptions": {
    "paths": {
      // Define the path of oh_modules, then you can import modules from oh_modules directly
      "*": ["./oh_modules/*"]
    }
  }
}
```

Now, you'll able to import modules from `oh_modules` directly:

![oh_modules-import-tip](./screenshots/oh_modules.png)

## Code Linter 🚧

From Version 0.1.0, we provided the support of code linter (The so-called ESLint for ArkTS).

It's easy to enable this feature. Firstly [click here](https://developer.huawei.com/consumer/cn/develop/) to visit HarmonyOS SDK websitr, click `下载 (Download)`, then log in your Huawei Account to open the download page.

![HarmonyOS SDK](./screenshots/harmony-sdk.png)

Then download `Command Line Tools` for your opration system:

![Command Line Tools](./screenshots/command-line-tools.png)

After finish downloading, unzip and find the `bin` folder:

![command-line-tools-finder-codelinter](./screenshots/command-line-tools-finder-codelinter.png)

This is the executable file of `codelinter`. Copy the `absoulute path` of this file, and turning on `Settings` of `IDE`, find settings below, and enter the absoulute path.

![vscode-codelinter-bin-path-setting](./screenshots/vscode-codelinter-bin-path-setting.png)

Remember to restart your `IDE` and you can see the effect such as: 

![codelinter-for-each-error](./screenshots/codelinter-for-each-error.png)

The error showned here to prompt you in order for performance, ForEach requires parameter `KeyGenerator`(the third parameter). After filledthe third parameter, save the file and `wait for a moment` (for `codelinter` to run), then this warnings will disappear: 

![codelinter-for-each-error-fixed](./screenshots/codelinter-for-each-error-fixed.png)

## Star History 🌟

[![Star History Chart](https://api.star-history.com/svg?repos=Groupguanfang/arkTS&type=Date)](https://star-history.com/#Groupguanfang/arkTS&Date)

## Contact to Author 📧

- Telegram: [@GCZ_Zero](https://t.me/GCZ_Zero)
- X (Twitter): [@GCZ_Zero](https://x.com/GCZ_Zero)
- QQ: 1203970284，QQ Group Chat: 746153004
- WeChat: gcz-zero

### Coffee ☕️

If this project helped you, you can buy me a coffee☕️

You can also join in the QQ group chat (Group number: 746153004)

<div style="display: flex; gap: 5px;">

<img src="./screenshots/wechat-pay.JPG" width="200" />

<img src="./screenshots/alipay.JPG" width="200" />

<img src="./screenshots/qq.JPG" width="200" />

</div>

## License 📝

[MIT](./LICENSE)
