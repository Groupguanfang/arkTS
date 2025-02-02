/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface RectInterface {
    /**
     * Use new function to create Rect.
     *
     * @param { object } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Use new function to create Rect.
     *
     * @param { object } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Use new function to create Rect.
     *
     * @param { object } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Use new function to create Rect.
     *
     * @param { object } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    new (value?: {
        width?: number | string;
        height?: number | string;
        radius?: number | string | Array<any>;
    } | {
        width?: number | string;
        height?: number | string;
        radiusWidth?: number | string;
        radiusHeight?: number | string;
    }): RectAttribute;
    /**
     * Called when a rectangle is created.
     *
     * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
    *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when a rectangle is created.
     *
     * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
    *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when a rectangle is created.
     *
     * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
     *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when a rectangle is created.
     *
     * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
     *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (value?: {
        width?: number | string;
        height?: number | string;
        radius?: number | string | Array<any>;
    } | {
        width?: number | string;
        height?: number | string;
        radiusWidth?: number | string;
        radiusHeight?: number | string;
    }): RectAttribute;
}
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class RectAttribute extends CommonShapeMethod<RectAttribute> {
    /**
     * Called when the fillet width is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the fillet width is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the fillet width is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the fillet width is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    radiusWidth(value: number | string): RectAttribute;
    /**
     * Called when the fillet height is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the fillet height is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the fillet height is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the fillet height is set.
     *
     * @param { number | string } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    radiusHeight(value: number | string): RectAttribute;
    /**
     * Called when the fillet size is set.
     *
     * @param { number | string | Array<any> } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the fillet size is set.
     *
     * @param { number | string | Array<any> } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the fillet size is set.
     *
     * @param { number | string | Array<any> } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the fillet size is set.
     *
     * @param { number | string | Array<any> } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    radius(value: number | string | Array<any>): RectAttribute;
}
/**
 * Defines Rect Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Rect Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Rect Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Rect: RectInterface;
/**
 * Rect attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 * @deprecated since 9
 */
declare const RectInStance: RectAttribute;
/**
 * Rect attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const RectInstance: RectAttribute;
