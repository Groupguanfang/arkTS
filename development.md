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
