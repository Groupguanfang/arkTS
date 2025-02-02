/*
 * Copyright (C) 2024 Huawei Device Co., Ltd
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * you may obtain a copy of the License at
 *
 * http://www/apache.org/license/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file This section describes the interfaces used by InterstitialDialogAction
 * @kit ArkUI
 */
import { UIContext } from '@ohos.arkui.UIContext';
/**
 * IconStyle enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum IconStyle {
    /**
     * Sets the button icon to dark.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    DARK = 0,
    /**
     * Sets the button icon to light.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    LIGHT = 1
}
/**
 * TitlePosition enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum TitlePosition {
    /**
     * The main title is above the text content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    TOP = 0,
    /**
     * The main title is below the text content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    BOTTOM = 1
}
/**
 * dialog relative to bottom distance if tabs are present.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum BottomOffset {
    /**
     * dialog distance relative to the bottom in the presence of tabs.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    OFFSET_FOR_BAR = 0,
    /**
     * dialog is the distance relative to the bottom without tabs.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    OFFSET_FOR_NONE = 1
}
/**
 * Defines the properties required by the dialog.
 *
 * @interface DialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface DialogOptions {
    /**
     * The UIContext required by the dialog.
     *
     * @type { UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    uiContext: UIContext;
    /**
     * The type of the bottom offset.
     *
     * @type { ?BottomOffset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    bottomOffsetType?: BottomOffset;
    /**
     * The title of the dialog.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    title?: ResourceStr;
    /**
     * The subtitle of the dialog.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    subtitle?: ResourceStr;
    /**
     * The color of the title.
     *
     * @type { ?(ResourceStr | Color) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    titleColor?: ResourceStr | Color;
    /**
     * The color of the subtitle.
     *
     * @type { ?(ResourceStr | Color) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    subtitleColor?: ResourceStr | Color;
    /**
     * The background of the dialog.
     *
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    backgroundImage?: Resource;
    /**
     * The foreground of the dialog.
     *
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    foregroundImage?: Resource;
    /**
     * The style of the close button.
     *
     * @type { ?IconStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    iconStyle?: IconStyle;
    /**
     * The relative position of the title and subtitle.
     *
     * @type { ?TitlePosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    titlePosition?: TitlePosition;
    /**
     * The action after clicking dialog.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    onDialogClick?: Callback<void>;
    /**
     * The action after clicking close button.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    onDialogClose?: Callback<void>;
}
/**
 * Declare dialog action.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare class InterstitialDialogAction {
    /**
     * The constructor transfers parameter settings.
     *
     * @param { DialogOptions } dialogOptions - Creates a new dialog action object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    constructor(dialogOptions: DialogOptions);
    /**
     * Execute a dialog open event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    openDialog(): void;
    /**
     * Execute a dialog close event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    closeDialog(): void;
}
