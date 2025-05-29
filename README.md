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

语言：简体中文｜<a href="./README-en.md">English</a>

> 刚建了一个QQ群，欢迎加入一起交流学习 (群号: 746153004)

这是一个基于Volar开发的ArkTS VSCode扩展。🌹为似乎到现在还没有支持VSCode，现有的VSCode市场中的ArkTS扩展大都非常简陋，所以决定自己写一个。

> ⚠️注意：目前该包是基于最新的`API 13`的，所以如果鸿蒙版本低于`API 13`，可能会有一些问题，欢迎PR。

- 🖊️ 完善的JSON Schema支持。支持以下文件的JSON Schema：
  - `build-profile.json5` 模块级别/项目级别配置
  - `oh-package.json5` 模块级别/项目级别配置
  - `module.json5` 模块级别/项目级别配置
  - `code-linter.json5` 模块级别/项目级别配置
  - `resources/element/`下所有的`color.json`等的kv值配置
  - `main_pages.json5`
- 🪐 得益于强大的Volar，0.0.7版本升级之后，已经完美的ArkTS几乎所有语法高亮、补全以及智能提示😋👍
- 📦 打开项目时支持自动安装`ohpm`依赖以及同步`hvigor`配置
- 🚧 支持像ESLint那样的行内`codelinter`提示，精准定位问题代码出在哪👍
- 🀄️ 通过`tsconfig.json`配置即可完美支持`oh_modules`三方模块的导入⏬
- 🆓 `$r`、`$rawfile` 补全，以及ArkTS代码格式化正在计划支持的路上，欢迎PR👀

![截图](./screenshots/edit.gif)

## 插件安装 📦

- Marketplace安装: [https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets](https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets)
- Open VSX安装：[https://open-vsx.org/extension/NailyZero/vscode-naily-ets](https://open-vsx.org/extension/NailyZero/vscode-naily-ets)

或者直接在VSCode中搜索`ArkTS Support`即可。

## ArkTS源码跳转 🔍

ArkTS源码跳转需要依赖`@arkts/declarations`，所以需要在你的鸿蒙项目中用`npm`安装`@arkts/declarations`。

```bash
npm install @arkts/declarations
```

然后，在你的鸿蒙项目中的根目录下，创建一个`tsconfig.json`文件，或者修改现有的`tsconfig.json`文件，添加以下内容：

```json5
{
  "extends": "@arkts/declarations/dist/tsconfig.base.json",
  "compilerOptions": {
    "types": ["@arkts/declarations"],
    "lib": ["ESNext"], // 这样设置之后会排除掉DOM相关的类型，避免和ArkTS的类型冲突
    "experimentalDecorators": true, // ArkTS采用Stage2装饰器，所以需要开启

    // 基础的编译器选项和模块选项，建议这样配就行
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",

    // 建议开启严格模式
    "strict": true,
    // 建议关闭strictPropertyInitialization，这样就不用老加叹号了
    "strictPropertyInitialization": false
  }
}
```

继承这个配置，然后，`重启你的VSCode`或者`保存一下这个文件`，ArkTS服务器会自动重载配置（右下角会有提示）。

![截图](./screenshots/navigation-tip.png)

导入模块的时候也有相应提示（前提是你的`tsconfig.json`按照上面的要求配置对了）。导入模块的原理很简单，就是扫了一遍ArkTS官方的API，然后生成了一系列的`compilerOptions.paths` alias，你只管继承就行😋

![截图2](./screenshots/import-tip.png)

## `oh_modules` 支持 🀄️

issue [#19](https://github.com/Groupguanfang/arkTS/issues/19) 中已经提到了一个解决方案，在你的`tsconfig.json`中添加如下配置：

```json5
{
  "compilerOptions": {
    "paths": {
      // 这里直接指定oh_modules的路径，然后就可以直接导入oh_modules中的模块了
      "*": ["./oh_modules/*"]
    }
  }
}
```

此时，你就可以直接导入`oh_modules`中的模块了:

![oh_modules-import-tip](./screenshots/oh_modules.png)

## Code Linter 🚧

0.1.0版本开始增加对code linter的支持（你可以理解为ArkTS版的ESLint）。

启用方法很简单，首先[点击这里](https://developer.huawei.com/consumer/cn/develop/)打开HarmonyOS SDK官网，点击这里的`下载`，然后登录你的华为账号进入下载页面:

![HarmonyOS SDK](./screenshots/harmony-sdk.png)

然后，下载你系统对应的`Command Line Tools`:

![Command Line Tools](./screenshots/command-line-tools.png)

下载完成之后，解压到一个固定位置，然后你可以看到是这样一个目录结构，里头有个`bin`文件夹:

![command-line-tools-finder-codelinter](./screenshots/command-line-tools-finder-codelinter.png)

这个就是`codelinter`的可执行文件了。复制这个文件的`绝对路径`，然后打开`IDE`的`设置`，找到下面这个配置，然后填入你刚才复制的路径即可:

![vscode-codelinter-bin-path-setting](./screenshots/vscode-codelinter-bin-path-setting.png)

记得填写之后，一定要重启一下你的`IDE`，然后就可以看到效果了，比如：

![codelinter-for-each-error](./screenshots/codelinter-for-each-error.png)

这里的报错是提示你，为了性能，ForEach得有`keyGenerator`参数（即第三个参数）；当你填补了第三个参数之后，保存文件，`等待一会儿`（`codelinter`的运行需要时间），然后这个警告就会消失：

![codelinter-for-each-error-fixed](./screenshots/codelinter-for-each-error-fixed.png)

## VSCode 文件图标包 🖼️

推荐使用[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)，我已经给`Material Icon Theme`提交了PR，目前将`.ets`、`.d.ets`直接用上了`TypeScript官方的文件图标包`，升级到`v5.22.0`之后的版本都可用，这样至少好看一些了 👇

![Material icon theme](./screenshots/icon-theme.png)

PR地址: [https://github.com/material-extensions/vscode-material-icon-theme/pull/2966](https://github.com/material-extensions/vscode-material-icon-theme/pull/2966)

## Star History 🌟

[![Star History Chart](https://api.star-history.com/svg?repos=Groupguanfang/arkTS&type=Date)](https://star-history.com/#Groupguanfang/arkTS&Date)

## Contact to Author 📧

- Telegram: [@GCZ_Zero](https://t.me/GCZ_Zero)
- X (Twitter): [@GCZ_Zero](https://x.com/GCZ_Zero)
- QQ: 1203970284，QQ群: 746153004
- WeChat: gcz-zero

### Coffee ☕️

如果觉得这个项目对你有帮助，可以请作者喝杯咖啡 ☕️

也可以加入QQ群，一起交流学习 (群号: 746153004)

<div style="display: flex; gap: 5px;">

<img src="./screenshots/wechat-pay.JPG" width="200" />

<img src="./screenshots/alipay.JPG" width="200" />

<img src="./screenshots/qq.JPG" width="200" />

</div>

## License 📝

[MIT](./LICENSE)
