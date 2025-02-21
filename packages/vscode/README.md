# Naily's ArkTS Support

基于Volar开发的ArkTS VSCode扩展。🌹为似乎到现在还没有支持VSCode，现有的ArkTS扩展都是非常简陋的，所以决定自己写一个。

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

具体详细使用说明见仓库地址: [https://github.com/Groupguanfang/arkTS](https://github.com/Groupguanfang/arkTS)

好用给个Star吧，谢谢🥹