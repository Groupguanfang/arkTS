# ArkTS Declarations

![GitHub Repo stars](https://img.shields.io/github/stars/groupguanfang/arkTS?style=flat)&nbsp;
[![NPM version](https://img.shields.io/npm/v/@arkts/declarations?color=a1b858)](https://www.npmjs.com/package/@arkts/declarations)

ArkTS unofficial type definitions. It is part of the [Naily's ArkTS Support VSCode Extension](https://github.com/Groupguanfang/arkTS).

ArkTS is a superset of TypeScript, and it is the programming language for Huawei HarmonyOS. The official website: [https://developer.huawei.com/consumer/cn/develop/](https://developer.huawei.com/consumer/cn/develop/).

## Installation

```bash
npm install @arkts/declarations
```

## Usage

Add the following `compilerOptions.types` to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@arkts/declarations"]
  }
}
```

## License

MIT
