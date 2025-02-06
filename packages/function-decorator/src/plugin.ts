import type * as ts from "typescript";

export const FunctionDecoratorPlugin: ts.server.PluginModuleFactory = (modules) => {
  return {
    create(createInfo) {
      const languageService = createInfo.languageService;

      // 拦截 getSemanticDiagnostics 方法
      const oldGetSemanticDiagnostics = languageService.getSemanticDiagnostics;
      languageService.getSemanticDiagnostics = (fileName) => {
        const diagnostics = oldGetSemanticDiagnostics(fileName);
        // 过滤掉 TS1206 错误
        return diagnostics.filter(diagnostic => diagnostic.code !== 1206);
      };

      // 拦截 getSyntacticDiagnostics 方法
      const oldGetSyntacticDiagnostics = languageService.getSyntacticDiagnostics;
      languageService.getSyntacticDiagnostics = (fileName) => {
        const diagnostics = oldGetSyntacticDiagnostics(fileName);
        // 过滤掉 TS1206 错误
        return diagnostics.filter(diagnostic => diagnostic.code !== 1206);
      };

      // 拦截 getSuggestionDiagnostics 方法
      const oldGetSuggestionDiagnostics = languageService.getSuggestionDiagnostics;
      languageService.getSuggestionDiagnostics = (fileName) => {
        const diagnostics = oldGetSuggestionDiagnostics(fileName);
        // 过滤掉 TS1206 错误
        return diagnostics.filter(diagnostic => diagnostic.code !== 1206);
      };

      // 拦截 getProgram 方法以确保所有诊断都被过滤
      const oldGetProgram = languageService.getProgram;
      languageService.getProgram = () => {
        const program = oldGetProgram();
        if (program) {
          const oldGetDiagnostics = program.getSemanticDiagnostics;
          program.getSemanticDiagnostics = (sourceFile) => {
            const diagnostics = oldGetDiagnostics.call(program, sourceFile);
            // 过滤掉 TS1206 错误
            return diagnostics.filter(diagnostic => diagnostic.code !== 1206);
          };
        }
        return program;
      };

      return languageService;
    },
  };
};

export default FunctionDecoratorPlugin;