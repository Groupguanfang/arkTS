/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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
import { SymbolGlyphModifier, DividerModifier } from './@ohos.arkui.modifier';
import { LengthMetrics } from './@ohos.arkui.node';
/**
 * Declare enum ItemState
 * @enum { ItemState }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare enum ItemState
 * @enum { ItemState }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
export declare enum ItemState {
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    ENABLE = 1,
    /**
     * Disable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Disable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    DISABLE = 2,
    /**
     * Activate type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Activate type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    ACTIVATE = 3
}
/**
 * Defines toolBar symbolGlyph options.
 *
 * @interface ToolBarSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 13
 */
export interface ToolBarSymbolGlyphOptions {
    /**
     * Modifier of toolbar's normal symbol.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    normal?: SymbolGlyphModifier;
    /**
     * Modifier of toolbar's activated symbol.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    activated?: SymbolGlyphModifier;
}
/**
 * Declare type ToolBarOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare type ToolBarOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
@Observed
export declare class ToolBarOption {
    /**
    * Define text content.
    * @type { ResourceStr }.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Define text content.
    * @type { ResourceStr }.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    content: ResourceStr;
    /**
     * Define the action event.
     * @type { ?() => void }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Define the action event.
     * @type { ?() => void }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    action?: () => void;
    /**
     * Define icon resource.
     * @type { ?Resource }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Define icon resource.
     * @type { ?Resource }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    icon?: Resource;
    /**
     * Define item type.
     * @type { ?ItemState }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Define item type.
     * @type { ?ItemState }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    state?: ItemState;
    /**
     * Define text fontColor.
     * @type { ?ResourceColor }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    textColor?: ResourceColor;
    /**
     * Text fontColor when the item is activated.
     * @type { ?ResourceColor }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    activatedTextColor?: ResourceColor;
    /**
     * Define icon fillColor.
     * @type { ?ResourceColor }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    iconColor?: ResourceColor;
    /**
     * Icon fillColor when the item is activated.
     * @type { ?ResourceColor }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    activatedIconColor?: ResourceColor;
    /**
     * Item symbol icon.
     *
     * @type { ?ToolBarSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    toolBarSymbolOptions?: ToolBarSymbolGlyphOptions;
}
/**
 * Declare ToolBarOptions use in ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare ToolBarOptions use in ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
@Observed
export declare class ToolBarOptions extends Array<ToolBarOption> {
}
/**
 * Declare ToolBarModifier use in ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 13
 */
export declare class ToolBarModifier {
    /**
     * Sets the height of the toolBar.
     *
     * @param { LengthMetrics } height - toolBar's height.
     * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    height(height: LengthMetrics): ToolBarModifier;
    /**
     * Sets the backgroundColor of the toolBar.
     *
     * @param { ResourceColor } backgroundColor - toolBar's backgroundColor.
     * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    backgroundColor(backgroundColor: ResourceColor): ToolBarModifier;
    /**
     * Sets the left and right padding of the toolbar.
     *
     * @param { LengthMetrics } padding - left and right padding.
     * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    padding(padding: LengthMetrics): ToolBarModifier;
    /**
     * Sets whether or not to display the press status effect.
     *
     * @param { boolean } stateEffect - press status effect.
     * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    stateEffect(stateEffect: boolean): ToolBarModifier;
}
/**
 * Declare Component ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare Component ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
@Component
export declare struct ToolBar {
    /**
     * Define toolbar list array.
     * @type { ToolBarOptions }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Define toolbar list array.
     * @type { ToolBarOptions }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    @ObjectLink
    toolBarList: ToolBarOptions;
    /**
     * Define toolbar activate item index, default is -1.
     * @type { ?number }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Define toolbar activate item index, default is -1.
     * @type { ?number }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    @Prop
    activateIndex?: number;
    /**
     * Define toolbar controller.
     * @type { TabsController }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Define toolbar controller.
     * @type { TabsController }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    controller: TabsController;
    /**
     * Define divider Modifier.
     * @type { ?DividerModifier }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    @Prop
    dividerModifier?: DividerModifier;
    /**
     * Define toolbar modifier.
     * @type { ?ToolBarModifier }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    @Prop
    toolBarModifier?: ToolBarModifier;
}
