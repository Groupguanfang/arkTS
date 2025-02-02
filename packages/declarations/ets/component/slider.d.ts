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
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum SliderStyle {
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    OutSet,
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    InSet,
    /**
     * No slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    NONE
}
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum SliderChangeMode {
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Begin,
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Moving,
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    End,
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Click
}
/**
 * Declare SliderInteraction
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SliderInteraction {
    /**
     * Allow user to slide the block and click track to move the block
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SLIDE_AND_CLICK,
    /**
     * Only allow user to slide the block
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SLIDE_ONLY,
    /**
     * Allow user to slide the block and click track to move the block, but click value only change when touch up.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SLIDE_AND_CLICK_UP = 2
}
/**
 * Defines the valid slidable range. If and only if MIN <= from <= to <= MAX, sliding range can be set successfully.
 *
 * @interface SlideRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SlideRange {
    /**
     * Set the start point of sliding range.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    from?: number;
    /**
     * Set the end point of sliding range.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    to?: number;
}
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface SliderOptions {
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    value?: number;
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    min?: number;
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    max?: number;
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    step?: number;
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    style?: SliderStyle;
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    direction?: Axis;
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    reverse?: boolean;
}
/**
 * Declare SliderBlockType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare SliderBlockType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SliderBlockType {
    /**
     * Use the default block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Use the default block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    DEFAULT,
    /**
     * Use an image as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Use an image as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    IMAGE,
    /**
     * Use a shape as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Use a shape as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    SHAPE
}
/**
 * Defines the style of slider block.
 *
 * @interface SliderBlockStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the style of slider block.
 *
 * @interface SliderBlockStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SliderBlockStyle {
    /**
     * Sets the type of slider block.
     *
     * @type { SliderBlockType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the type of slider block.
     *
     * @type { SliderBlockType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type: SliderBlockType;
    /**
     * Sets the image of slider block while the type is set to SliderBlockType.Image.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the image of slider block while the type is set to SliderBlockType.Image.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    image?: ResourceStr;
    /**
     * Sets the shape of slider block while the type is set to SliderBlockType.Shape.
     *
     * @type { ?(CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the shape of slider block while the type is set to SliderBlockType.Shape.
     *
     * @type { ?(CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    shape?: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute;
}
/**
 * Defines the callback type used in SliderConfiguration.
 *
 * @typedef {function} SliderTriggerChangeCallback
 * @param { number } value - The value of slider.
 * @param { SliderChangeMode } mode - The changeMode of slider.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void;
/**
 * SliderConfiguration used by slider content modifier
 *
 * @interface SliderConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SliderConfiguration extends CommonConfiguration<SliderConfiguration> {
    /**
     * Current progress value.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    value: number;
    /**
     * Minimum value.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    min: number;
    /**
     * Maximum value.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    max: number;
    /**
     * The sliding step size of Slider.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    step: number;
    /**
     * Trigger slider change
     *
     * @type { SliderTriggerChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    triggerChange: SliderTriggerChangeCallback;
}
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface SliderInterface {
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (options?: SliderOptions): SliderAttribute;
}
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod<SliderAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod<SliderAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod<SliderAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod<SliderAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class SliderAttribute extends CommonMethod<SliderAttribute> {
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    blockColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor | LinearGradient } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    trackColor(value: ResourceColor | LinearGradient): SliderAttribute;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the minimum label is set.
     *
     * @param { string } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead min
     */
    minLabel(value: string): SliderAttribute;
    /**
     * Called when the maximum label is set.
     *
     * @param { string } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead max
     */
    maxLabel(value: string): SliderAttribute;
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    showSteps(value: boolean): SliderAttribute;
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value - Whether to display the bubble.
     * @param { ResourceStr } content - Text content in the bubble. If the content is not specified, the current
     *                                  percentage is displayed by default.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value - Whether to display the bubble.
     * @param { ResourceStr } content - Text content in the bubble. If the content is not specified, the current
     *                                  percentage is displayed by default.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    showTips(value: boolean, content?: ResourceStr): SliderAttribute;
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    trackThickness(value: Length): SliderAttribute;
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onChange(callback: (value: number, mode: SliderChangeMode) => void): SliderAttribute;
    /**
     * Called when the border color of block is set.
     *
     * @param { ResourceColor } value - the border color of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the border color of block is set.
     *
     * @param { ResourceColor } value - the border color of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    blockBorderColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the border width of block is set.
     *
     * @param { Length } value - the border width of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the border width of block is set.
     *
     * @param { Length } value - the border width of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    blockBorderWidth(value: Length): SliderAttribute;
    /**
     * Called when the color of step is set.
     *
     * @param { ResourceColor } value - the color of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the color of step is set.
     *
     * @param { ResourceColor } value - the color of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    stepColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the radius of track border is set.
     *
     * @param { Length } value - the radius of track border.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the radius of track border is set.
     *
     * @param { Length } value - the radius of track border.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    trackBorderRadius(value: Length): SliderAttribute;
    /**
     * Called when the radius of selected part is set.
     *
     * @param { Dimension } value - the radius of selected part.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    selectedBorderRadius(value: Dimension): SliderAttribute;
    /**
     * Called when the size of block is set.
     *
     * @param { SizeOptions } value - the size of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the size of block is set.
     *
     * @param { SizeOptions } value - the size of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    blockSize(value: SizeOptions): SliderAttribute;
    /**
     * Called when the style of block is set.
     *
     * @param { SliderBlockStyle } value - the style of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the style of block is set.
     *
     * @param { SliderBlockStyle } value - the style of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    blockStyle(value: SliderBlockStyle): SliderAttribute;
    /**
     * Called when the diameter of step is set.
     *
     * @param { Length } value - the diameter of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the diameter of step is set.
     *
     * @param { Length } value - the diameter of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    stepSize(value: Length): SliderAttribute;
    /**
     * Sets the interaction mode of the slider.
     *
     * @param { SliderInteraction } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    sliderInteractionMode(value: SliderInteraction): SliderAttribute;
    /**
     * Sets the min value when Slider response to drag event.
     *
     * @param { number } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    minResponsiveDistance(value: number): SliderAttribute;
    /**
     * Set the content modifier of slider.
     *
     * @param { ContentModifier<SliderConfiguration> } modifier - The content modifier of slider.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    contentModifier(modifier: ContentModifier<SliderConfiguration>): SliderAttribute;
    /**
     * Set the valid slidable range.
     *
     * @param { SlideRange } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    slideRange(value: SlideRange): SliderAttribute;
}
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Slider: SliderInterface;
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const SliderInstance: SliderAttribute;
