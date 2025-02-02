/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file Defines provides a push method for the target page in the routing table.
 * @kit ArkUI
 */
/**
 * provides a push method for the target page in the routing table.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare class NavPushPathHelper {
    /**
     * The constructor used to create a NavPushPathHelper object.
     *
     * @param { NavPathStack } navPathStack - The stack of the route table.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    constructor(navPathStack: NavPathStack);
    /**
     * Pushes the route page into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { NavPathInfo } info - Indicates the route page to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;
    /**
     * Pushes the route page into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { NavPathInfo } info - Indicates the route page to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushDestination(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushDestination(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;
    /**
     * Pushes the specified route page into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { string } name - Indicates the name of the route page to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the route page to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;
    /**
     * Pushes the specified route page into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { string } name - Indicates the name of the route page to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the route page to be pushed.
     * @param { Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushPathByName(moduleName: string, name: string, param: Object, onPop: Callback<PopInfo>, animated?: boolean): Promise<void>;
    /**
     * Pushes the specified route page into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { string } name - Indicates the name of the route page to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the route page to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushDestinationByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;
    /**
     * Pushes the specified route page into the stack.
     *
     * @param { string } moduleName - Module name
     * @param { string } name - Indicates the name of the route page to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the route page to be pushed.
     * @param { Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    pushDestinationByName(moduleName: string, name: string, param: Object, onPop: Callback<PopInfo>, animated?: boolean): Promise<void>;
    /**
     * replace the current page with the specific one.The current page will be destroyed.
     *
     * @param { string } moduleName - Module name
     * @param { NavPathInfo } info - Indicates the the new route page in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;
    /**
     * Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.
     *
     * @param { string } moduleName - Module name
     * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;
    /**
     * replace the current page with the specific one.The current page will be destroyed.
     *
     * @param { string } moduleName - Module name
     * @param { string } name - Indicates name of the new route page in top of stack.
     * @param { Object } param - Indicates the detailed parameter of the new route page in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 300001 - hsp silent install fail.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;
}
