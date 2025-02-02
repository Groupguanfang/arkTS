/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */
/**
 * Import the SystemBarStyle type for Navigation.
 *
 * @typedef { import('../api/@ohos.window').default.SystemBarStyle } SystemBarStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type SystemBarStyle = import('../api/@ohos.window').default.SystemBarStyle;
/**
 * Defines the navigation common title.
 *
 * @interface NavigationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation common title.
 *
 * @interface NavigationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the navigation common title.
 *
 * @interface NavigationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationCommonTitle {
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    main: string;
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    sub: string;
}
/**
 * Defines the navigation custom title.
 *
 * @interface NavigationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation custom title.
 *
 * @interface NavigationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the navigation custom title.
 *
 * @interface NavigationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationCustomTitle {
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    builder: CustomBuilder;
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height: TitleHeight | Length;
}
/**
 * Navigation mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Navigation mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum NavigationMode {
    /**
     * The navigation bar and the content area are displayed in stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The navigation bar and the content area are displayed in stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The navigation bar and the content area are displayed in stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Stack,
    /**
     * The navigation bar and the content area are displayed side by side.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The navigation bar and the content area are displayed side by side.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The navigation bar and the content area are displayed side by side.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Split,
    /**
     * If the window width is greater than 520vp, the navigation component is displayed in split mode.
     * Otherwise it's displayed in stack mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * If the window width is greater than the sum of minNavBarWidth and minContentWidth, the navigation component is displayed in split mode.
     * Otherwise it's displayed in stack mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * If the window width is greater than the sum of minNavBarWidth and minContentWidth, the navigation component is displayed in split mode.
     * Otherwise it's displayed in stack mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Auto
}
/**
 * Navigation bar position
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Navigation bar position
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation bar position
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum NavBarPosition {
    /**
     * The navigation bar is on the Start of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The navigation bar is on the Start of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The navigation bar is on the Start of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Start,
    /**
     * The navigation bar is on the End of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The navigation bar is on the End of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The navigation bar is on the End of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    End
}
/**
 * Navigation title mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Navigation title mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation title mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum NavigationTitleMode {
    /**
     * The title is free mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The title is free mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The title is free mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Free = 0,
    /**
     * The title is full mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The title is full mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The title is full mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Full,
    /**
     * The title is mini mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The title is mini mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The title is mini mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Mini
}
/**
 * Navigation menu item, include menu icon and menu info
 *
 * @interface NavigationMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Navigation menu item, include menu icon and menu info
 *
 * @interface NavigationMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation menu item, include menu icon and menu info
 *
 * @interface NavigationMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationMenuItem {
    /**
     * The value of navigation menu item.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The value of navigation menu item.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The value of navigation menu item.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string;
    /**
     * The icon of navigation menu item.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The icon of navigation menu item.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The icon of navigation menu item.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    icon?: string;
    /**
     * The symbol of navigation menu item.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * Whether to enable this menu item.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isEnabled?: boolean;
    /**
     * Trigger by navigation menu item click.
     *
     * @type { ?(() => void) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Trigger by navigation menu item click.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Trigger by navigation menu item click.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action?: () => void;
}
/**
 * Indicates the information of the popped page.
 *
 * @interface PopInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Indicates the information of the popped page.
 *
 * @interface PopInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface PopInfo {
    /**
     * The info of the popped page.
     *
     * @type { NavPathInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The info of the popped page.
     *
     * @type { NavPathInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    info: NavPathInfo;
    /**
     * The result of the popped page.
     *
     * @type { Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The result of the popped page.
     *
     * @type { Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    result: Object;
}
/**
 * Indicates the information of NavDestination.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Indicates the information of NavDestination.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavPathInfo {
    /**
     * Creates an instance of NavPathInfo.
     *
     * @param { string } name - The name of NavDestination.
     * @param { unknown } param - The detailed parameter of the NavDestination.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Creates an instance of NavPathInfo.
     *
     * @param { string } name - The name of NavDestination.
     * @param { unknown } param - The detailed parameter of the NavDestination.
     * @param { ?import('../api/@ohos.base').Callback<PopInfo> } onPop - The callback when next page returns.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Creates an instance of NavPathInfo.
     *
     * @param { string } name - The name of NavDestination.
     * @param { unknown } param - The detailed parameter of the NavDestination.
     * @param { ?import('../api/@ohos.base').Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { ?boolean } isEntry - Indicates whether it is an entry destination.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(name: string, param: unknown, onPop?: import('../api/@ohos.base').Callback<PopInfo>, isEntry?: boolean);
    /**
     * The name of NavDestination.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The name of NavDestination.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    name: string;
    /**
     * The detailed parameter of the NavDestination.
     *
     * @type { ?unknown }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The detailed parameter of the NavDestination.
     *
     * @type { ?unknown }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    param?: unknown;
    /**
     * The callback when next page returns.
     *
     * @type { ?import('../api/@ohos.base').Callback<PopInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The callback when next page returns.
     *
     * @type { ?import('../api/@ohos.base').Callback<PopInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onPop?: import('../api/@ohos.base').Callback<PopInfo>;
    /**
     * Indicates whether it is an entry destination.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isEntry?: boolean;
}
/**
 * Defines the mode of stack operation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LaunchMode {
    /**
     * The default mode of stack operation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    STANDARD = 0,
    /**
     * When the NavDestination with a specified name exists, it will be moved to top of stack,
     * otherwise, the behavior will be consistent with the STANDARD mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    MOVE_TO_TOP_SINGLETON = 1,
    /**
     * When the NavDestination with a specified name exists, the stack will pop until that NavDestination,
     * otherwise, the behavior will be consistent with the STANDARD mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    POP_TO_SINGLETON = 2,
    /**
     * Forced to create a new NavDestination instance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NEW_INSTANCE = 3
}
/**
 * Indicates the options of stack operation.
 *
 * @interface NavigationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface NavigationOptions {
    /**
     * Indicates the launchMode of stack operation.
     *
     * @type { ?LaunchMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    launchMode?: LaunchMode;
    /**
     * Indicates whether the transition is animated.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    animated?: boolean;
}
/**
 * Indicates the information of NavDestinations. Providers methods for controlling destination page in the stack
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Indicates the information of NavDestinations. Providers methods for controlling destination page in the stack
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavPathStack {
    /**
     * Creates an instance of NavPathStack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Creates an instance of NavPathStack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    pushPath(info: NavPathInfo, animated?: boolean): void;
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pushPath(info: NavPathInfo, options?: NavigationOptions): void;
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pushDestination(info: NavPathInfo, animated?: boolean): Promise<void>;
    /**
     * Pushes the NavDestination into the stack.
     *
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pushDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>;
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { unknown } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { unknown } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    pushPathByName(name: string, param: unknown, animated?: boolean): void;
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pushPathByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): void;
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pushDestinationByName(name: string, param: Object, animated?: boolean): Promise<void>;
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pushes the specified NavDestination into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 100005 - Builder function not registered.
     * @throws { BusinessError } 100006 - NavDestination not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pushDestinationByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): Promise<void>;
    /**
     * Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.
     *
     * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.
     *
     * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    replacePath(info: NavPathInfo, animated?: boolean): void;
    /**
     * Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.
     *
     * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    replacePath(info: NavPathInfo, options?: NavigationOptions): void;
    /**
     * Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.
     *
     * @param { string } name - Indicates name of the new NavDestination in top of stack.
     * @param { Object } param - Indicates the detailed parameter of the new NavDestination in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.
     *
     * @param { string } name - Indicates name of the new NavDestination in top of stack.
     * @param { Object } param - Indicates the detailed parameter of the new NavDestination in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    replacePathByName(name: string, param: Object, animated?: boolean): void;
    /**
     * Remove the specified NavDestinations by indexes.
     *
     * @param { Array<number> } indexes - Indicates the indexes of the NavDestinations to be removed.
     * @returns { number } Returns the number of removed pages. Invalid indexes will be ignored.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Remove the specified NavDestinations by indexes.
     *
     * @param { Array<number> } indexes - Indicates the indexes of the NavDestinations to be removed.
     * @returns { number } Returns the number of removed pages. Invalid indexes will be ignored.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeByIndexes(indexes: Array<number>): number;
    /**
     * Remove the specified NavDestination by name.
     *
     * @param { string } name - Indicates the name of the NavDestination to be removed.
     * @returns { number } Returns the number of removed NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Remove the specified NavDestination by name.
     *
     * @param { string } name - Indicates the name of the NavDestination to be removed.
     * @returns { number } Returns the number of removed NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeByName(name: string): number;
    /**
     * Remove the specified NavDestination by its navDestinationId.
     *
     * @param { string } navDestinationId - Indicates the navDestinationId of the NavDestination to be removed.
     * @returns { boolean } Returns true if remove successfully, otherwise returns false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeByNavDestinationId(navDestinationId: string): boolean;
    /**
     * Pops the top NavDestination out of the stack.
     *
     * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Pops the top NavDestination out of the stack.
     *
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    pop(animated?: boolean): NavPathInfo | undefined;
    /**
     * Pops the top NavDestination out of the stack.
     *
     * @param { Object } result - The result of the NavDestination.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pops the top NavDestination out of the stack.
     *
     * @param { Object } result - The result of the NavDestination.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pop(result: Object, animated?: boolean): NavPathInfo | undefined;
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be popped.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be popped.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    popToName(name: string, animated?: boolean): number;
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be popped.
     * @param { Object } result - The result of the NavDestination.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be popped.
     * @param { Object } result - The result of the NavDestination.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    popToName(name: string, result: Object, animated?: boolean): number;
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { number } index - Indicates the index of the NavDestination to be popped.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { number } index - Indicates the index of the NavDestination to be popped.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    popToIndex(index: number, animated?: boolean): void;
    /**
     * Pops the specified NavDestination out of the stack.
     *
     * @param { number } index - Indicates the index of the NavDestination to be popped.
     * @param { Object } result - The result of the NavDestination.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    popToIndex(index: number, result: Object, animated?: boolean): void;
    /**
     * Moves the specified NavDestination to stack top.
     *
     * @param { string } name - Indicates the name of the NavDestination to be moved to the top.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Moves the specified NavDestination to stack top.
     *
     * @param { string } name - Indicates the name of the NavDestination to be moved to the top.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    moveToTop(name: string, animated?: boolean): number;
    /**
     * Moves the specified NavDestination to stack top.
     *
     * @param { number } index - Indicates the index of the NavDestination to be moved to the top.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Moves the specified NavDestination to stack top.
     *
     * @param { number } index - Indicates the index of the NavDestination to be moved to the top.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    moveIndexToTop(index: number, animated?: boolean): void;
    /**
     * Clears the stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Clears the stack.
     *
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    clear(animated?: boolean): void;
    /**
     * Obtains all the NavDestination name in the stack.
     *
     * @returns { Array<string> } Returns all the NavDestination name in the stack;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains all the NavDestination name in the stack.
     *
     * @returns { Array<string> } Returns all the NavDestination name in the stack;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getAllPathName(): Array<string>;
    /**
     * Obtains the param of the specified NavDestination.
     *
     * @param { number } index - Indicates the index of the NavDestination.
     * @returns { unknown | undefined } Returns the detailed parameter of the NavDestination if it exists in the stack, otherwise returns undefined;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the param of the specified NavDestination.
     *
     * @param { number } index - Indicates the index of the NavDestination.
     * @returns { unknown | undefined } Returns the detailed parameter of the NavDestination if it exists in the stack, otherwise returns undefined;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getParamByIndex(index: number): unknown | undefined;
    /**
     * Obtains the param of the specified NavDestination.
     *
     * @param { string } name - Indicates the name of the NavDestination.
     * @returns { Array<unknown> } Returns the detailed parameter of all the NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the param of the specified NavDestination.
     *
     * @param { string } name - Indicates the name of the NavDestination.
     * @returns { Array<unknown> } Returns the detailed parameter of all the NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getParamByName(name: string): Array<unknown>;
    /**
     * Obtains the index of the specified NavDestination.
     *
     * @param { string } name - Indicates the name of the NavDestination.
     * @returns { Array<number> } Returns the index of all the NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the index of the specified NavDestination.
     *
     * @param { string } name - Indicates the name of the NavDestination.
     * @returns { Array<number> } Returns the index of all the NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getIndexByName(name: string): Array<number>;
    /**
     * Obtains the parent of the current stack.
     *
     * @returns { NavPathStack | null } Returns the parent of the current stack. If no parent, it returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getParent(): NavPathStack | null;
    /**
     * Obtains the size of the stack.
     *
     * @returns { number } Returns the size of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the size of the stack.
     *
     * @returns { number } Returns the size of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    size(): number;
    /**
     * disable or enable all transition animation in this navigation stack.
     *
     * @param { boolean } value - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * disable or enable all transition animation in this navigation stack.
     *
     * @param { boolean } value - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    disableAnimation(value: boolean): void;
    /**
     * set navigation transition interception.It will be called in navPathStack changes or navigation mode changes.
     *
     * @param { NavigationInterception } interception - the instance to intercept in navigation changes.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setInterception(interception: NavigationInterception): void;
}
/**
 * Navigation home name
 *
 * @typedef { 'navBar' } NavBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type NavBar = 'navBar';
/**
 * navigation interception callback using in willShow and didShow
 *
 * @typedef { function } InterceptionShowCallback
 * @param { NavDestinationContext | NavBar } from - Indicates the starting NavDestination or NavBar.
 * @param { NavDestinationContext | NavBar } to - Indicates the destination NavDestination or NavBar.
 * @param { NavigationOperation } operation - Indicates the type of stack operation.
 * @param { boolean } isAnimated - Indicates whether the transition is animated.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type InterceptionShowCallback = (from: NavDestinationContext | NavBar, to: NavDestinationContext | NavBar, operation: NavigationOperation, isAnimated: boolean) => void;
/**
 * navigation interception callback using in navigation mode change
 *
 * @typedef { function } InterceptionModeCallback
 * @param { NavigationMode } mode - Indicates the mode of Navigation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type InterceptionModeCallback = (mode: NavigationMode) => void;
/**
 * Provide navigation transition interception
 *
 * @interface NavigationInterception
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface NavigationInterception {
    /**
     * Called before destination transition.NavPathStack can be changed in this callback,
     * it will takes effect during this transition.For details, see { @Link InterceptionShowCallback}.
     *
     * @type { ?InterceptionShowCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    willShow?: InterceptionShowCallback;
    /**
     * Called after destination transition.For details, see { @Link InterceptionShowCallback}.
     *
     * @type { ?InterceptionShowCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    didShow?: InterceptionShowCallback;
    /**
     * Called when navigation mode changed.For details, see { @Link InterceptionModeCallback}.
     *
     * @type { ?InterceptionModeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    modeChange?: InterceptionModeCallback;
}
/**
 * Provide navigator view interface
 *
 * @interface NavigationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provide navigator view interface
 *
 * @interface NavigationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide navigator view interface
 *
 * @interface NavigationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface NavigationInterface {
    /**
     * Called when the navigator view interface is used.
     *
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the navigator view interface is used.
     *
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the navigator view interface is used.
     *
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (): NavigationAttribute;
    /**
     * Called when the navigator view interface is used, with route table provided.
     *
     * @param { NavPathStack } pathInfos - The stack of the route table.
     * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the navigator view interface is used, with route table provided.
     *
     * @param { NavPathStack } pathInfos - The stack of the route table.
     * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (pathInfos: NavPathStack): NavigationAttribute;
}
/**
 * Defines the status of toolbar item and it is used in the ToolbarItem interface.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the status of toolbar item and it is used in the ToolbarItem interface.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ToolbarItemStatus {
    /**
     * Normal state of toolbar item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Normal state of toolbar item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    NORMAL = 0,
    /**
     * Disable state of toolbar item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Disable state of toolbar item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    DISABLED = 1,
    /**
     * Active state of toolbar item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Active state of toolbar item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    ACTIVE = 2
}
/**
 * Defines the operation of current navigation transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the operation of current navigation transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum NavigationOperation {
    /**
     * Push operation of navigation transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Push operation of navigation transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PUSH = 1,
    /**
     * Pop operation of navigation transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Pop operation of navigation transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    POP = 2,
    /**
     * Replace operation of navigation transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Replace operation of navigation transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    REPLACE = 3
}
/**
 * Defines configurable parameters for toolbar item.
 *
 * @interface ToolbarItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines configurable parameters for toolbar item.
 *
 * @interface ToolbarItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface ToolbarItem {
    /**
     * The value of navigation toolbar item.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The value of navigation toolbar item.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: ResourceStr;
    /**
     * The icon of navigation toolbar item.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The icon of navigation toolbar item.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    icon?: ResourceStr;
    /**
     * The symbol of navigation toolbar item.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * Trigger by navigation toolbar item click.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Trigger by navigation toolbar item click.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action?: () => void;
    /**
     * The state of navigation toolbar item.
     *
     * @type { ?ToolbarItemStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The state of navigation toolbar item.
     *
     * @type { ?ToolbarItemStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    status?: ToolbarItemStatus;
    /**
     * The icon of navigation toolbar item in active state.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The icon of navigation toolbar item in active state.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    activeIcon?: ResourceStr;
    /**
     * The symbol of navigation toolbar item in active state.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    activeSymbolIcon?: SymbolGlyphModifier;
}
/**
 * Indicates the options of Navigation's Titlebar.
 *
 * @interface NavigationTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationTitleOptions {
    /**
     * Background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundColor?: ResourceColor;
    /**
     * Background blur style.
     *
     * @type { ?BlurStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Set title bar style.
     *
     * @type { ?BarStyle }
     * @default BarStyle.STANDARD
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    barStyle?: BarStyle;
    /**
     * Set title bar start padding.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.resource($r('sys.float.margin_left'))
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    paddingStart?: LengthMetrics;
    /**
     * Set title bar end padding.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.resource($r('sys.float.margin_right'))
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    paddingEnd?: LengthMetrics;
    /**
     * Text modifier for main title.
     *
     * @type { ?TextModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    mainTitleModifier?: TextModifier;
    /**
     * Text modifier for sub title.
     *
     * @type { ?TextModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    subTitleModifier?: TextModifier;
    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    enableHoverMode?: boolean;
}
/**
 * Declare BarStyle enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum BarStyle {
    /**
     * Standard style means that the bar and content area are column layouts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    STANDARD = 0,
    /**
     * Stack style means that the bar and content area are stack layouts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    STACK = 1
}
/**
 * Indicates the options of Navigation's Toolbar.
 *
 * @interface NavigationToolbarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationToolbarOptions {
    /**
     * Background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundColor?: ResourceColor;
    /**
     * Background blur style.
     *
     * @type { ?BlurStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundBlurStyle?: BlurStyle;
}
/**
 * Declare Navigation view properties.
 *
 * @extends CommonMethod<NavigationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Declare Navigation view properties.
 *
 * @extends CommonMethod<NavigationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare Navigation view properties.
 *
 * @extends CommonMethod<NavigationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {
    /**
     * Sets the width of navigation bar.
     *
     * @param { Length } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the width of navigation bar.
     *
     * @param { Length } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the width of navigation bar.
     *
     * @param { Length } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    navBarWidth(value: Length): NavigationAttribute;
    /**
     * Sets the position of navigation bar.
     *
     * @param { NavBarPosition } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the position of navigation bar.
     *
     * @param { NavBarPosition } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the position of navigation bar.
     *
     * @param { NavBarPosition } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    navBarPosition(value: NavBarPosition): NavigationAttribute;
    /**
     * Sets the minimum width and the maximum width of navigation bar.
     *
     * @param { [Dimension, Dimension] } value - The minimum and the maximum width of navigation bar.
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the minimum width and the maximum width of navigation bar.
     *
     * @param { [Dimension, Dimension] } value - The minimum and the maximum width of navigation bar.
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    navBarWidthRange(value: [
        Dimension,
        Dimension
    ]): NavigationAttribute;
    /**
     * Sets the minimum width of content.
     *
     * @param { Dimension } value - The minimum width of content.
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the minimum width of content.
     *
     * @param { Dimension } value - The minimum width of content.
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    minContentWidth(value: Dimension): NavigationAttribute;
    /**
     * Sets the mode of navigation.
     *
     * @param { NavigationMode } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the mode of navigation.
     *
     * @param { NavigationMode } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the mode of navigation.
     *
     * @param { NavigationMode } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    mode(value: NavigationMode): NavigationAttribute;
    /**
     * Sets the back button icon.
     *
     * @param { string | PixelMap | Resource } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the back button icon.
     *
     * @param { string | PixelMap | Resource } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the back button icon.
     *
     * @param { string | PixelMap | Resource } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the back button icon.
     *
     * @param { string | PixelMap | Resource | SymbolGlyphModifier } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backButtonIcon(value: string | PixelMap | Resource | SymbolGlyphModifier): NavigationAttribute;
    /**
     * Hide the NavBar, which includes title bar, the child of Navigation and tool bar. Supported in split mode.
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Hide the NavBar, which includes title bar, the child of Navigation and tool bar. Supported in split mode.
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Hide the NavBar, which includes title bar, the child of Navigation and tool bar. Supported in all mode.
     * It will show top page in the NavPathStack directly or empty if there is no page in the NavPathStack.
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hideNavBar(value: boolean): NavigationAttribute;
    /**
     * Navigation title
     *
     * @param { string | CustomBuilder } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Navigation title
     *
     * @param { string | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Navigation title
     *
     * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Navigation title
     *
     * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
     * @param { NavigationTitleOptions } [options] - Indicates the options of titlebar.
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle, options?: NavigationTitleOptions): NavigationAttribute;
    /**
     * Navigation subtitle
     *
     * @param { string } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 9
     * @useinstead title
     */
    subTitle(value: string): NavigationAttribute;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hideTitleBar(value: boolean): NavigationAttribute;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } hide
     * @param { boolean } animated
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    hideTitleBar(hide: boolean, animated: boolean): NavigationAttribute;
    /**
     * Hide navigation back button
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Hide navigation back button
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Hide navigation back button
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hideBackButton(value: boolean): NavigationAttribute;
    /**
     * Navigation title mode
     *
     * @param { NavigationTitleMode } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Navigation title mode
     *
     * @param { NavigationTitleMode } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Navigation title mode
     *
     * @param { NavigationTitleMode } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    titleMode(value: NavigationTitleMode): NavigationAttribute;
    /**
     * Navigation title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Navigation title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Navigation title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;
    /**
     * Tool bar
     *
     * @param { object | CustomBuilder } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead navigation/NavigationAttribute#toolbarConfiguration
     */
    toolBar(value: object | CustomBuilder): NavigationAttribute;
    /**
      * Configure toolbar with default style parameter or custom parameter.
      *
      * @param { Array<ToolbarItem> | CustomBuilder } value - Toolbar configuration parameters.
      * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @form
      * @since 10
      */
    /**
      * Configure toolbar with default style parameter or custom parameter.
      *
      * @param { Array<ToolbarItem> | CustomBuilder } value - Toolbar configuration parameters.
      * @param { NavigationToolbarOptions } [options] - Indicates the options of toolbar.
      * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @form
      * @atomicservice
      * @since 11
      */
    toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions): NavigationAttribute;
    /**
     * Hide tool bar
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Hide tool bar
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Hide tool bar
     *
     * @param { boolean } value
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hideToolBar(value: boolean): NavigationAttribute;
    /**
     * Hide tool bar
     *
     * @param { boolean } hide
     * @param { boolean } animated
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    hideToolBar(hide: boolean, animated: boolean): NavigationAttribute;
    /**
     * Trigger callback when title mode change finished at free mode.
     *
     * @param { (titleMode: NavigationTitleMode) => void } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Trigger callback when title mode change finished at free mode.
     *
     * @param { function } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Trigger callback when title mode change finished at free mode.
     *
     * @param { function } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;
    /**
     * Trigger callback when the visibility of navigation bar change.
     *
     * @param { (isVisible: boolean) => void } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Trigger callback when the visibility of navigation bar change.
     *
     * @param { function } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Trigger callback when the visibility of navigation bar change.
     *
     * @param { function } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;
    /**
     * Trigger callback when navigation mode changes.
     *
     * @param { function } callback
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onNavigationModeChange(callback: (mode: NavigationMode) => void): NavigationAttribute;
    /**
     * Set builder for user-defined NavDestination component.
     *
     * @param { function } builder - The builder function of NavDestination component.
     * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set builder for user-defined NavDestination component.
     *
     * @param { function } builder - The builder function of NavDestination component.
     * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    navDestination(builder: (name: string, param: unknown) => void): NavigationAttribute;
    /**
     * Set custom navigation content transition animation.
     *
     * @param { function } delegate - Custom transition delegate.
     * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Set custom navigation content transition animation.
     *
     * @param { function } delegate - Custom transition delegate.
     * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    customNavContentTransition(delegate: (from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation) => NavigationAnimatedTransition | undefined): NavigationAttribute;
    /**
     * Set navigation content expand types and edges.
     *
     * @param { Array<LayoutSafeAreaType> } [types] - Indicates the types of the safe area.
     * @param { Array<LayoutSafeAreaEdge> } [edges] - Indicates the edges of the safe area.
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): NavigationAttribute;
    /**
     * Set the style of system bar
     *
     * @param { Optional<SystemBarStyle> } style - The properties of system bar
     * @returns { NavigationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    systemBarStyle(style: Optional<SystemBarStyle>): NavigationAttribute;
}
/**
* Navigation transition animation protocol.
*
* @interface NavigationAnimatedTransition
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @since 11
*/
/**
* Navigation transition animation protocol.
*
* @interface NavigationAnimatedTransition
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 12
*/
declare interface NavigationAnimatedTransition {
    /**
     * This method is called after the transition ends to notify whether the transition was successful.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * This method is called after the transition ends to notify whether the transition was successful.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onTransitionEnd?: (success: boolean) => void;
    /**
     * Define the limit duration of the transition animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Define the limit duration of the transition animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    timeout?: number;
    /**
     * Indicates whether it is an interactive transition.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isInteractive?: boolean;
    /**
     * Configure the animations associated with custom transition.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Configure the animations associated with custom transition.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition: (transitionProxy: NavigationTransitionProxy) => void;
}
/**
 * Navigation transition proxy.
 *
 * @interface NavigationTransitionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Navigation transition proxy.
 *
 * @interface NavigationTransitionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface NavigationTransitionProxy {
    /**
     * From navigation content info.
     *
     * @type { NavContentInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * From navigation content info.
     *
     * @type { NavContentInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    from: NavContentInfo;
    /**
     * To navigation content info.
     *
     * @type { NavContentInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * To navigation content info.
     *
     * @type { NavContentInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    to: NavContentInfo;
    /**
     * Indicates whether it is an interactive transition.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isInteractive?: boolean;
    /**
     * Notification system transition animation completed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Notification system transition animation completed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    finishTransition(): void;
    /**
     * Notification system transition animation canceled.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    cancelTransition?(): void;
    /**
     * Notification system transition animation update.
     *
     * @param { number } progress - The progress of transition animation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    updateTransition?(progress: number): void;
}
/**
 * Navigation content info.
 *
 * @interface NavContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Navigation content info.
 *
 * @interface NavContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface NavContentInfo {
    /**
     * Navigation content name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Navigation content name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    name?: string;
    /**
     * Navigation content index.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Navigation content index.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: number;
    /**
     * Navigation content mode.
     *
     * @type { ?NavDestinationMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Navigation content mode.
     *
     * @type { ?NavDestinationMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mode?: NavDestinationMode;
    /**
     * Navigation content param.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    param?: Object;
    /**
     * The unique id of NavDestination.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    navDestinationId?: string;
}
/**
 * Defines Navigation Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Navigation Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Navigation Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Navigation: NavigationInterface;
/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const NavigationInstance: NavigationAttribute;
