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
 * Provides interfaces for drawing components.
 *
 * @interface ShapeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides interfaces for drawing components.
 *
 * @interface ShapeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides interfaces for drawing components.
 *
 * @interface ShapeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides interfaces for drawing components.
 *
 * @interface ShapeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ShapeInterface {
    /**
     * Use the new function to create Shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Use the new function to create Shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Use the new function to create Shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    new (value?: PixelMap): ShapeAttribute;
    /**
     * Called when a component is drawn.
     *
     * @param { PixelMap } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when a component is drawn.
     *
     * @param { PixelMap } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when a component is drawn.
     *
     * @param { PixelMap } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (value: PixelMap): ShapeAttribute;
    /**
     * Called when a component is drawn.
     *
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when a component is drawn.
     *
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when a component is drawn.
     *
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when a component is drawn.
     *
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (): ShapeAttribute;
}
/**
 * @extends CommonMethod<ShapeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod<ShapeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<ShapeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends CommonMethod<ShapeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class ShapeAttribute extends CommonMethod<ShapeAttribute> {
    /**
     * Viewport of shape
     *
     * @param { object } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Viewport of shape
     *
     * @param { object } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Viewport of shape
     *
     * @param { object } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Viewport of shape
     *
     * @param { object } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    viewPort(value: {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    }): ShapeAttribute;
    /**
     * Called when the border color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the border color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the border color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the border color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    stroke(value: ResourceColor): ShapeAttribute;
    /**
     * Called when the fill color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the fill color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the fill color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the fill color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fill(value: ResourceColor): ShapeAttribute;
    /**
     * Called when the offset of the starting point of border drawing is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the offset of the starting point of border drawing is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the offset of the starting point of border drawing is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the offset of the starting point of border drawing is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeDashOffset(value: number | string): ShapeAttribute;
    /**
     * Called when the gap of the border is set.
     *
     * @param { Array<any> } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the gap of the border is set.
     *
     * @param { Array<any> } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the gap of the border is set.
     *
     * @param { Array<any> } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the gap of the border is set.
     *
     * @param { Array<any> } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeDashArray(value: Array<any>): ShapeAttribute;
    /**
     * Called when the path endpoint drawing style is set.
     *
     * @param { LineCapStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the path endpoint drawing style is set.
     *
     * @param { LineCapStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the path endpoint drawing style is set.
     *
     * @param { LineCapStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the path endpoint drawing style is set.
     *
     * @param { LineCapStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeLineCap(value: LineCapStyle): ShapeAttribute;
    /**
     * Called when the border corner drawing style is set.
     *
     * @param { LineJoinStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the border corner drawing style is set.
     *
     * @param { LineJoinStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the border corner drawing style is set.
     *
     * @param { LineJoinStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the border corner drawing style is set.
     *
     * @param { LineJoinStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeLineJoin(value: LineJoinStyle): ShapeAttribute;
    /**
     * Called when the limit value for drawing acute angles as oblique angles is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the limit value for drawing acute angles as oblique angles is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the limit value for drawing acute angles as oblique angles is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the limit value for drawing acute angles as oblique angles is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeMiterLimit(value: number | string): ShapeAttribute;
    /**
     * Called when the opacity of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the opacity of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the opacity of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the opacity of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeOpacity(value: number | string | Resource): ShapeAttribute;
    /**
     * Called when the transparency of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the transparency of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the transparency of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the transparency of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fillOpacity(value: number | string | Resource): ShapeAttribute;
    /**
     * Called when the width of the border is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the width of the border is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the width of the border is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the width of the border is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeWidth(value: number | string): ShapeAttribute;
    /**
     * Called when setting whether anti aliasing is on.
     *
     * @param { boolean } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting whether anti aliasing is on.
     *
     * @param { boolean } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when setting whether anti aliasing is on.
     *
     * @param { boolean } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when setting whether anti aliasing is on.
     *
     * @param { boolean } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    antiAlias(value: boolean): ShapeAttribute;
    /**
     * Called when shape mesh.
     *
     * @param { Array<any> } value
     * @param { number } column
     * @param { number } row
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when shape mesh.
     *
     * @param { Array<any> } value
     * @param { number } column
     * @param { number } row
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when shape mesh.
     *
     * @param { Array<any> } value
     * @param { number } column
     * @param { number } row
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when shape mesh.
     *
     * @param { Array<any> } value
     * @param { number } column
     * @param { number } row
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    mesh(value: Array<any>, column: number, row: number): ShapeAttribute;
}
/**
 * Defines Shape Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Shape Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Shape Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Shape Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Shape: ShapeInterface;
/**
 * Defines Shape Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Shape Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Shape Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Shape Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ShapeInstance: ShapeAttribute;
