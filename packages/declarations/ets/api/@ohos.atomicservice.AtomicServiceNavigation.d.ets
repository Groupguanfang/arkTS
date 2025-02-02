/*
* Copyright (C) 2024 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @file This section describes the interfaces used by AtomicServiceNavigation
 * @kit ArkUI
 */
import { Callback } from '@ohos.base';
/**
 * Defines AtomicServiceNavigation.
 *
 * @struct AtomicServiceNavigation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
@Component
export declare struct AtomicServiceNavigation {
    /**
     * the information of route page.Providers methods for controlling destination page in the stack.
     *
     * @type { ?NavPathStack }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @State
    navPathStack?: NavPathStack;
    /**
     * the content of Navigation.
     *
     * @type { ?Callback<void> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @BuilderParam
    navigationContent?: Callback<void>;
    /**
     * Sets the Navigation title.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    title?: ResourceStr;
    /**
     * The color of Navigation's TitleBar.
     *
     * @type { ?TitleOptions }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    titleOptions?: TitleOptions;
    /**
     * Hide navigation title bar.
     *
     * @type { ?boolean }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    hideTitleBar?: boolean;
    /**
     * Sets the width of navigation bar.
     *
     * @type { ?Length }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    navBarWidth?: Length;
    /**
     * Sets the mode of navigation.
     *
     * @type { ?NavigationMode }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    mode?: NavigationMode;
    /**
     * The builder of navDestination.
     *
     * @type { ?NavDestinationBuilder }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @BuilderParam
    navDestinationBuilder?: NavDestinationBuilder;
    /**
     * Sets the minimum width and the maximum width of navigation bar.
     *
     * @type { ?[Dimension, Dimension] }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    navBarWidthRange?: [
        Dimension,
        Dimension
    ];
    /**
     * Sets the minimum width of content.
     *
     * @type { ?Dimension }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    @Prop
    minContentWidth?: Dimension;
    /**
     * Trigger callback when the visibility of navigation bar change.
     *
     * @type { ?Callback<boolean> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    stateChangeCallback?: Callback<boolean>;
    /**
     * Trigger callback when navigation mode changes.
     *
     * @type { ?Callback<NavigationMode> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    modeChangeCallback?: Callback<NavigationMode>;
}
/**
 * Indicates the options of Navigation's Titlebar.
 *
 * @typedef TitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export interface TitleOptions {
    /**
     * Background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;
    /**
     * Whether to enable the blur effect.
     *
     * @type { ?boolean }.
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    isBlurEnabled?: boolean;
    /**
     * Set title bar style.
     *
     * @type { ?BarStyle }
     * @default BarStyle.STANDARD
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    barStyle?: BarStyle;
}
/**
 * The builder function of NavDestination component.
 *
 * @typedef { function } NavDestinationBuilder.
 * @param { string } name - The name of route page.
 * @param { ?Object } - param - The detailed parameter of the route page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export type NavDestinationBuilder = (name: string, param?: Object) => void;
