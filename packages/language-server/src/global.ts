// Global types for ArkTS Language Server
// 这个文件定义了 ArkTS 中的全局类型和变量

/**
 * 全局类型定义字符串，包含所有 ArkTS 运行时的全局变量和类型
 */
export const globalTypes = `
import internal from '@internal/full/index'

declare global {
    // featureability
    var Result: typeof internal.Result;
    var SubscribeMessageResponse: typeof internal.SubscribeMessageResponse;
    var CallAbilityParam: typeof internal.CallAbilityParam;
    var SubscribeAbilityEventParam: typeof internal.SubscribeAbilityEventParam;
    var SendMessageOptions: typeof internal.SendMessageOptions;
    var SubscribeMessageOptions: typeof internal.SubscribeMessageOptions;
    var RequestParams: typeof internal.RequestParams;
    var FinishWithResultParams: typeof internal.FinishWithResultParams;
    var FeatureAbility: typeof internal.FeatureAbility;

    // global runtime functions
    var console: typeof internal.console;
    var setInterval: typeof internal.setInterval;
    var setTimeout: typeof internal.setTimeout;
    var clearInterval: typeof internal.clearInterval;
    var clearTimeout: typeof internal.clearTimeout;
    var canIUse: typeof internal.canIUse;
    var getInspectorByKey: typeof internal.getInspectorByKey;
    var getInspectorTree: typeof internal.getInspectorTree;
    var sendEventByKey: typeof internal.sendEventByKey;
    var sendTouchEvent: typeof internal.sendTouchEvent;
    var sendKeyEvent: typeof internal.sendKeyEvent;
    var sendMouseEvent: typeof internal.sendMouseEvent;
    var markModuleCollectable: typeof internal.markModuleCollectable;

    // lifecycle classes
    var LifecycleForm: typeof internal.LifecycleForm;
    var LifecycleApp: typeof internal.LifecycleApp;
    var LifecycleService: typeof internal.LifecycleService;
    var LifecycleData: typeof internal.LifecycleData;
}
`;

/**
 * 获取全局类型定义文本
 * @returns 全局类型定义字符串
 */
export function getGlobalTypesDefinition(): string {
  return globalTypes;
}

/**
 * 创建全局类型的虚拟文件名
 * @returns 虚拟文件路径
 */
export function getGlobalTypesVirtualPath(): string {
  return '/lib/lib.arkts.d.ts';
}

/**
 * 检查给定的文件路径是否是全局类型虚拟文件
 * @param filePath 文件路径
 * @returns 是否为全局类型虚拟文件
 */
export function isGlobalTypesVirtualFile(filePath: string): boolean {
  return filePath === getGlobalTypesVirtualPath();
}
