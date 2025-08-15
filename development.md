# 开发或贡献本项目

必须有`node`、`pnpm`和`git`环境，并且建议装一个`vscode`或者类`vscode`的编辑器（如`cursor`/`trae`/`windsurf`等）。首先使用`git`克隆本仓库：

```bash
git clone https://github.com/groupguanfang/arkTS.git --recursive
```

请携带`--recursive`参数，这样就能自动克隆子模块。如果您在克隆的时候没有携带该参数，请手动执行以下命令：

```bash
git submodule update --init --recursive
```

然后cd到项目根目录下，使用`pnpm`安装依赖：

```bash
pnpm install
```

使用`vscode`打开文件夹打开项目根目录，点击键盘上的`F5`即可启动一个扩展开发宿主进程，打开另一个`vscode`窗口，开始调试项目。

## `volar labs` 插件

请在你的`vscode`中安装[volar labs](https://volarjs.dev/core-concepts/volar-labs/)插件，这样就能看到`virtual code`的转换过程。

## 代码检查与类型检查

本项目使用`@antfu/eslint-config`作为`eslint`代码检查规则，并使用了`tsc`的`Project reference`模式进行类型检查。提交`Pull Request`前，可以运行以下命令进行代码检查与类型检查：

```bash
pnpm run lint
```

这实际上是运行了以下命令：

```bash
pnpm eslint
pnpm oxlint
pnpm tsc --build --noEmit # 类型检查, 使用 tsc 的 Project reference 模式
```

如果您忘记了运行检查，`Pull Request`的`CI`会自动运行检查，并提示您修复问题。

## 编译

运行`pnpm install`除了会安装依赖之外，还会调用`tsdown`编译整个项目，实际上就是运行了以下命令：

```bash
pnpm -F \"{packages/*}\" build
```

您也可以手动运行此命令进行编译。

## 打包扩展

打包之前请务必先运行`pnpm run build`编译项目，并且检查`git sub-module`是否已经克隆在了本地。然后运行以下命令进行打包：

```bash
pnpm run pack
```

该命令会使用`vsce`命令打包扩展。打包完成后，会在`packages/vscode`目录下生成一个`vscode-naily-ets-<version>.vsix`文件，可以将其直接使用类`vscode`的编辑器在`扩展`页面中安装。
