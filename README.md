# Naily's ArkTS Support

基于Volar开发的ArkTS VSCode扩展。🌹为似乎到现在还没有支持VSCode，现有的ArkTS扩展都是非常简陋的，所以决定自己写一个。

- 🖊️ 完善的JSON Schema支持。支持以下文件的JSON Schema：
  - `build-profile.json5` 模块级别/项目级别配置
  - `oh-package.json5` 模块级别/项目级别配置
  - `module.json5` 模块级别/项目级别配置
  - `code-linter.json5` 模块级别/项目级别配置
  - `resources/element/`下所有的`color.json`等的kv值配置
  - `main_pages.json5`
- 🪐 `几乎`完美的ArkTS语法高亮，补全，`不支持诊断，欢迎PR`
- ✨ 支持源码跳转，注意暂时仅限ArkTS内部源码，import/export的暂未支持，欢迎PR

## 安装

Marketplace安装: [https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets](https://marketplace.visualstudio.com/items?itemName=NailyZero.vscode-naily-ets)

或者直接在VSCode中搜索`ArkTS Support`即可。

## ArkTS源码跳转

ArkTS源码跳转需要依赖`@arkts/declarations`，所以需要在你的鸿蒙项目中用`npm`安装`@arkts/declarations`。

```bash
npm install @arkts/declarations
```

然后，重启你的VSCode！！一定要重启你的VSCode，才会生效！最终效果如下图所示:

![截图](./image.png)

点进去是完全没问题的，可以正常跳转。

⚠️注意：目前该包是基于最新的`API 13`的，所以如果鸿蒙版本低于`API 13`，可能会有一些问题，欢迎PR。
