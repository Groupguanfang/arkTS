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
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class SwiperController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Called when the next child component is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the next child component is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the next child component is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    showNext();
    /**
     * Called when the previous subcomponent is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the previous subcomponent is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the previous subcomponent is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    showPrevious();
    /**
     * Controlling Swiper to change to the specified subcomponent.
     *
     * @param { number } index - the index of item to be redirected.
     * @param { boolean } useAnimation - If true, swipe to index item with animation. If false, swipe to index item without animation.
     *      The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    changeIndex(index: number, useAnimation?: boolean);
    /**
     * Called when need to stop the swiper animation.
     *
     * @param { function } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when need to stop the swiper animation.
     *
     * @param { function } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when need to stop the swiper animation.
     *
     * @param { function } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    finishAnimation(callback?: () => void);
}
/**
 * Defines the indicator class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the indicator class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class Indicator<T> {
    /**
     * Set the indicator to the left.
     *
     * @param { Length } value - the indicator to the left.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator to the left.
     *
     * @param { Length } value - the indicator to the left.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    left(value: Length): T;
    /**
     * Set the indicator to the top.
     *
     * @param { Length } value - the indicator to the top.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator to the top.
     *
     * @param { Length } value - the indicator to the top.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    top(value: Length): T;
    /**
     * Set the indicator to the right.
     *
     * @param { Length } value - the indicator to the right.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator to the right.
     *
     * @param { Length } value - the indicator to the right.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    right(value: Length): T;
    /**
     * Set the indicator to the bottom.
     *
     * @param { Length } value - the indicator to the bottom.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator to the bottom.
     *
     * @param { Length } value - the indicator to the bottom.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    bottom(value: Length): T;
    /**
     * Set the indicator to the left in LTR
     * Set the indicator to the right in RTL
     *
     * @param { LengthMetrics } value - the indicator to the right in LTR, indicator to the left in RTL
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    start(value: LengthMetrics): T;
    /**
     * Set the indicator to the left in RTL
     * Set the indicator to the right in LTR
     *
     * @param { LengthMetrics } value - the indicator to the left in RTL, Set the indicator to the right in LTR
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    end(value: LengthMetrics): T;
    /**
     * DotIndicator class object.
     *
     * @returns { DotIndicator }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * DotIndicator class object.
     *
     * @returns { DotIndicator }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static dot(): DotIndicator;
    /**
     * DigitIndicator class object.
     *
     * @returns { DigitIndicator }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * DigitIndicator class object.
     *
     * @returns { DigitIndicator }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static digit(): DigitIndicator;
}
/**
 * Define DotIndicator, the indicator type is dot.
 *
 * @extends Indicator<DotIndicator>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Define DotIndicator, the indicator type is dot.
 *
 * @extends Indicator<DotIndicator>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class DotIndicator extends Indicator<DotIndicator> {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Set the indicator item width.
     *
     * @param { Length } value - the indicator item width.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator item width.
     *
     * @param { Length } value - the indicator item width.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    itemWidth(value: Length): DotIndicator;
    /**
     * Set the indicator item height.
     *
     * @param { Length } value - the indicator item height.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator item height.
     *
     * @param { Length } value - the indicator item height.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    itemHeight(value: Length): DotIndicator;
    /**
     * Set the indicator item width when selected.
     *
     * @param { Length } value - the indicator item width when selected.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator item width when selected.
     *
     * @param { Length } value - the indicator item width when selected.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedItemWidth(value: Length): DotIndicator;
    /**
     * Set the indicator item height when selected.
     *
     * @param { Length } value - the indicator item height when selected.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator item height when selected.
     *
     * @param { Length } value - the indicator item height when selected.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedItemHeight(value: Length): DotIndicator;
    /**
     * Setting indicator style mask.
     *
     * @param { boolean } value - the indicator item mask.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Setting indicator style mask.
     *
     * @param { boolean } value - the indicator item mask.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    mask(value: boolean): DotIndicator;
    /**
     * Set the indicator color.
     *
     * @param { ResourceColor } value - the indicator item color.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the indicator color.
     *
     * @param { ResourceColor } value - the indicator item color.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    color(value: ResourceColor): DotIndicator;
    /**
     * Set the navigation point color.
     *
     * @param { ResourceColor } value - the indicator item when selected.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the navigation point color.
     *
     * @param { ResourceColor } value - the indicator item when selected.
     * @returns { DotIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedColor(value: ResourceColor): DotIndicator;
    /**
     * Set the Indicator maxDisplayCount when selected.
     *
     * @param { number } maxDisplayCount - the indicator item maxDisplayCount when selected.
     * @returns { DotIndicator } return the DotIndicator
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    maxDisplayCount(maxDisplayCount: number): DotIndicator;
}
/**
 * Set Swiper column count adaptation.
 *
 * @typedef { object } SwiperAutoFill
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 10
 */
/**
 * Set Swiper column count adaptation.
 *
 * @typedef { object } SwiperAutoFill
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 11
 */
declare type SwiperAutoFill = {
    /**
     * Set minSize size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    /**
     * Set minSize size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     * @form
     */
    minSize: VP;
};
/**
 * Define DigitIndicator, the indicator type is digit.
 *
 * @extends Indicator<DigitIndicator>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Define DigitIndicator, the indicator type is digit.
 *
 * @extends Indicator<DigitIndicator>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class DigitIndicator extends Indicator<DigitIndicator> {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Set font color of the digital indicator.
     *
     * @param { ResourceColor } value - the indicator font color.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set font color of the digital indicator.
     *
     * @param { ResourceColor } value - the indicator font color.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontColor(value: ResourceColor): DigitIndicator;
    /**
     * Set font color of the digital indicator when selected.
     *
     * @param { ResourceColor } value - the indicator font color when selected.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set font color of the digital indicator when selected.
     *
     * @param { ResourceColor } value - the indicator font color when selected.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedFontColor(value: ResourceColor): DigitIndicator;
    /**
     * Set the digital indicator font (just support font size and weight).
     *
     * @param { Font } value - the indicator font size and weight.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the digital indicator font (just support font size and weight).
     *
     * @param { Font } value - the indicator font size and weight.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    digitFont(value: Font): DigitIndicator;
    /**
     * Set the digital indicator font (just support font size and weight).
     *
     * @param { Font } value - the indicator font size and weight when selected.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the digital indicator font (just support font size and weight).
     *
     * @param { Font } value - the indicator font size and weight when selected.
     * @returns { DigitIndicator }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedDigitFont(value: Font): DigitIndicator;
}
/**
 * Arrow object.
 *
 * @interface ArrowStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Arrow object.
 *
 * @interface ArrowStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ArrowStyle {
    /**
     * Is show the arrow background or not.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Is show the arrow background or not.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    showBackground?: boolean;
    /**
     * When the indicator show, set the arrow position is side of the indicator or in the middle of content area.
     * The arrow is displayed on side of the indicator, if the value is false.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * When the indicator show, set the arrow position is side of the indicator or in the middle of content area.
     * The arrow is displayed on side of the indicator, if the value is false.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isSidebarMiddle?: boolean;
    /**
     * The arrow background size.
     * The size of the arrow is three-quarters of the background size, when the background is displayed.
     *
     * @type { ?Length }
     * @default When isSidebarMiddle is false, the default value is 24vp, Otherwise,the default value is 32vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The arrow background size.
     * The size of the arrow is three-quarters of the background size, when the background is displayed.
     *
     * @type { ?Length }
     * @default When isSidebarMiddle is false, the default value is 24vp, Otherwise,the default value is 32vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundSize?: Length;
    /**
     * The arrow background background color.
     *
     * @type { ?ResourceColor }
     * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise,the default value is #19182431
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The arrow background background color.
     *
     * @type { ?ResourceColor }
     * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise, the default value is #19182431
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundColor?: ResourceColor;
    /**
     * The arrow size.
     * The arrow size can be set, when the background is not displayed.
     * The size of the arrow is three-quarters of the background size, when the background is displayed.
     *
     * @type { ?Length }
     * @default When isSidebarMiddle is false, the default value is 18vp, Otherwise, the default value is 24vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The arrow size.
     * The arrow size can be set, when the background is not displayed.
     * The size of the arrow is three-quarters of the background size, when the background is displayed.
     *
     * @type { ?Length }
     * @default When isSidebarMiddle is false, the default value is 18vp, Otherwise, the default value is 24vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    arrowSize?: Length;
    /**
     * The arrow color.
     *
     * @type { ?ResourceColor }
     * @default #182431
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The arrow color.
     *
     * @type { ?ResourceColor }
     * @default #182431
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    arrowColor?: ResourceColor;
}
/**
 * Declare the size of the swiper on the spindle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the size of the swiper on the spindle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declare the size of the swiper on the spindle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum SwiperDisplayMode {
    /**
     * Carousel map extension.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 7
     * @deprecated since 10
     * @useinstead SwiperDisplayMode#STRETCH
     */
    Stretch,
    /**
     * The rotation chart is self linear.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 7
     * @deprecated since 10
     * @useinstead SwiperDisplayMode#AUTO_LINEAR
     */
    AutoLinear,
    /**
     * Carousel map extension.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Carousel map extension.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    STRETCH,
    /**
     * The rotation chart is self linear.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The rotation chart is self linear.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     * @deprecated since 12
     * @useinstead Scroller#scrollTo
     */
    AUTO_LINEAR
}
/**
 * Provides an interface for sliding containers.
 *
 * @interface SwiperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for sliding containers.
 *
 * @interface SwiperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for sliding containers.
 *
 * @interface SwiperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface SwiperInterface {
    /**
     * Called when a sliding container is set.
     *
     * @param { SwiperController } controller
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when a sliding container is set.
     *
     * @param { SwiperController } controller
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when a sliding container is set.
     *
     * @param { SwiperController } controller
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (controller?: SwiperController): SwiperAttribute;
}
/**
 * Setting indicator style navigation.
 *
 * @interface IndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 * @deprecated since 10
 */
declare interface IndicatorStyle {
    /**
     * Set the indicator to the left.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    left?: Length;
    /**
     * Set the indicator to the top.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    top?: Length;
    /**
     * Set the indicator to the right.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    right?: Length;
    /**
     * Set the indicator to the bottom.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    bottom?: Length;
    /**
     * Set the indicator size.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    size?: Length;
    /**
     * Setting indicator style mask.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    mask?: boolean;
    /**
     * Set the indicator color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    color?: ResourceColor;
    /**
     * Set the navigation point color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    selectedColor?: ResourceColor;
}
/**
 * Provides an interface for swiper animation.
 *
 * @interface SwiperAnimationEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides an interface for swiper animation.
 *
 * @interface SwiperAnimationEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SwiperAnimationEvent {
    /**
     * Offset of the current page to the start position of the swiper main axis. The unit is vp.
     *
     * @type { number }
     * @default 0.0 vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Offset of the current page to the start position of the swiper main axis. The unit is vp.
     *
     * @type { number }
     * @default 0.0 vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    currentOffset: number;
    /**
     * Offset of the target page to the start position of the swiper main axis. The unit is vp.
     *
     * @type { number }
     * @default 0.0 vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Offset of the target page to the start position of the swiper main axis. The unit is vp.
     *
     * @type { number }
     * @default 0.0 vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    targetOffset: number;
    /**
     * Start speed of the page-turning animation. The unit is vp/s.
     *
     * @type { number }
     * @default 0.0 vp/s
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Start speed of the page-turning animation. The unit is vp/s.
     *
     * @type { number }
     * @default 0.0 vp/s
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    velocity: number;
}
/**
 * Swiper nested scroll nested mode

 * @enum { number } SwiperNestedScrollMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare enum SwiperNestedScrollMode {
    /**
     * Only Self response scrolling.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    SELF_ONLY = 0,
    /**
     * Self priority response scrolling.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    SELF_FIRST = 1
}
/**
 * Defines the swiper attribute functions.
 *
 * @extends CommonMethod<SwiperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the swiper attribute functions.
 *
 * @extends CommonMethod<SwiperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the swiper attribute functions.
 *
 * @extends CommonMethod<SwiperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {
    /**
     * Called when the index value of the displayed subcomponent is set in the container.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the index value of the displayed subcomponent is set in the container.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the index value of the displayed subcomponent is set in the container.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    index(value: number): SwiperAttribute;
    /**
     * Called when setting whether the subcomponent plays automatically.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting whether the subcomponent plays automatically.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when setting whether the subcomponent plays automatically.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    autoPlay(value: boolean): SwiperAttribute;
    /**
     * Called when the time interval for automatic playback is set.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the time interval for automatic playback is set.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the time interval for automatic playback is set.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    interval(value: number): SwiperAttribute;
    /**
     * Called when you set whether the navigation point indicator is enabled.
     *
     * @param { boolean } value - show indicator of the swiper indicator.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set indicator is enabled, or set type style.
     *
     * @param { DotIndicator | DigitIndicator | boolean } value - the style value or show indicator of the swiper indicator.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set indicator is enabled, or set type style.
     *
     * @param { DotIndicator | DigitIndicator | boolean } value - the style value or show indicator of the swiper indicator.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    indicator(value: DotIndicator | DigitIndicator | boolean): SwiperAttribute;
    /**
     * Set arrow is enabled, or set the arrow style.
     *
     * @param { ArrowStyle | boolean } value - arrow is displayed or set the arrow style.
     * @param { boolean } isHoverShow - arrow is display when mouse hover in indicator hotspot.
     * @returns { SwiperAttribute } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set arrow is enabled, or set the arrow style.
     *
     * @param { ArrowStyle | boolean } value - arrow is displayed or set the arrow style.
     * @param { boolean } isHoverShow - arrow is display when mouse hover in indicator hotspot.
     * @returns { SwiperAttribute } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    displayArrow(value: ArrowStyle | boolean, isHoverShow?: boolean): SwiperAttribute;
    /**
     * Called when setting whether to turn on cyclic sliding.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting whether to turn on cyclic sliding.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when setting whether to turn on cyclic sliding.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    loop(value: boolean): SwiperAttribute;
    /**
     * Called when the animation duration of the switch is set.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the animation duration of the switch is set.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the animation duration of the switch is set.
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    duration(value: number): SwiperAttribute;
    /**
     * Called when setting whether to slide vertically.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting whether to slide vertically.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when setting whether to slide vertically.
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    vertical(value: boolean): SwiperAttribute;
    /**
     * Sets the space between child components.
     *
     * @param { number | string } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the space between child components.
     *
     * @param { number | string } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the space between child components.
     *
     * @param { number | string } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    itemSpace(value: number | string): SwiperAttribute;
    /**
     * Called when setting the size of the swiper container on the spindle.
     *
     * @param { SwiperDisplayMode } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting the size of the swiper container on the spindle.
     *
     * @param { SwiperDisplayMode } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when setting the size of the swiper container on the spindle.
     *
     * @param { SwiperDisplayMode } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    displayMode(value: SwiperDisplayMode): SwiperAttribute;
    /**
     * Sets the number of child components to be preloaded(cached).
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the number of child components to be preloaded(cached).
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the number of child components to be preloaded(cached).
     *
     * @param { number } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    cachedCount(value: number): SwiperAttribute;
    /**
     * Sets the number of elements to display per page.
     *
     * @param { number | string } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the number of elements to display per page.
     *
     * @param { number | string | SwiperAutoFill } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the number of elements to display per page.
     *
     * If swipeByGroup is set to true:
     * 1、All sub-items are grouped from index 0.
     * 2、The number of sub-items in each group is the value of displayCount.
     * 3、If the number of sub-items in the last group is less than displayCount, placeholder items are added to supplement the number of last group.
     * 4、Placeholder items do not display any content and are only used as placeholders.
     * 5、When turning pages, turn pages by group.
     *
     * @param { number | string | SwiperAutoFill } value
     * @param { boolean } [swipeByGroup] - if swipe by group.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean): SwiperAttribute;
    /**
     * Invoked when setting the sliding effect
     *
     * @param { EdgeEffect } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoked when setting the sliding effect
     *
     * @param { EdgeEffect } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Invoked when setting the sliding effect
     *
     * @param { EdgeEffect } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    effectMode(value: EdgeEffect): SwiperAttribute;
    /**
     * Sets whether to disable the swipe feature
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets whether to disable the swipe feature
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets whether to disable the swipe feature
     *
     * @param { boolean } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    disableSwipe(value: boolean): SwiperAttribute;
    /**
     * Sets the animation curve
     *
     * @param { Curve | string } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the animation curve
     * Curve is an enumeration type for common curves
     * ICurve is a curve object
     *
     * @param { Curve | string | ICurve } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the animation curve
     * Curve is an enumeration type for common curves
     * ICurve is a curve object
     *
     * @param { Curve | string | ICurve } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    curve(value: Curve | string | ICurve): SwiperAttribute;
    /**
     * Called when the index value changes.
     *
     * @param { function } event
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the index value changes.
     *
     * @param { function } event
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the index value changes.
     *
     * @param { function } event
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onChange(event: (index: number) => void): SwiperAttribute;
    /**
     * Setting indicator style navigation.
     *
     * @param { IndicatorStyle } value
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    indicatorStyle(value?: IndicatorStyle): SwiperAttribute;
    /**
     * The previous margin which can be used to expose a small portion of the previous item.
     *
     * @param { Length } value - The length of previous margin.
     * @returns { SwiperAttribute } The attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The previous margin which can be used to expose a small portion of the previous item.
     *
     * @param { Length } value - The length of previous margin.
     * @returns { SwiperAttribute } The attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * The previous margin which can be used to expose a small portion of the previous item.
     * When the previous item is empty, do not display blank space.
     *
     * @param { Length } value - The length of previous margin.
     * @param { boolean } [ignoreBlank] - Whether to hide(ignore) the previous margin on the first page in non-loop scenarios.
     * @returns { SwiperAttribute } The attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    prevMargin(value: Length, ignoreBlank?: boolean): SwiperAttribute;
    /**
     * The next margin which can be used to expose a small portion of the latter item.
     *
     * @param { Length } value - The length of next margin.
     * @returns { SwiperAttribute } The attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The next margin which can be used to expose a small portion of the latter item.
     *
     * @param { Length } value - The length of next margin.
     * @returns { SwiperAttribute } The attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * The next margin which can be used to expose a small portion of the latter item.
     * When the next item is empty, do not display blank space.
     *
     * @param { Length } value - The length of next margin.
     * @param { boolean } [ignoreBlank] - Whether to hide(ignore) the next margin on the last page in non-loop scenarios.
     * @returns { SwiperAttribute } The attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    nextMargin(value: Length, ignoreBlank?: boolean): SwiperAttribute;
    /**
     * Called when the swiper animation start.
     *
     * @param { function } event - the index value of the swiper page that when animation start.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the swiper animation start.
     *
     * @param { function } event
     * "index": the index value of the swiper page that when animation start.
     * "targetIndex": the target index value of the swiper page that when animation start.
     * "extraInfo": the extra callback info.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the swiper animation start.
     *
     * @param { function } event
     * "index": the index value of the swiper page that when animation start.
     * "targetIndex": the target index value of the swiper page that when animation start.
     * "extraInfo": the extra callback info.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onAnimationStart(event: (index: number, targetIndex: number, extraInfo: SwiperAnimationEvent) => void): SwiperAttribute;
    /**
     * Called when the swiper animation end.
     *
     * @param { function } event - the index value of the swiper page that when animation end.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the swiper animation end.
     *
     * @param { function } event
     * "index": the index value of the swiper page that when animation end.
     * "extraInfo": the extra callback info.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the swiper animation end.
     *
     * @param { function } event
     * "index": the index value of the swiper page that when animation end.
     * "extraInfo": the extra callback info.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onAnimationEnd(event: (index: number, extraInfo: SwiperAnimationEvent) => void): SwiperAttribute;
    /**
     * Called when the swiper swipe with the gesture.
     *
     * @param { function } event
     * "index": the index value of the swiper page before gesture swipe.
     * "extraInfo": the extra callback info.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the swiper swipe with the gesture.
     *
     * @param { function } event
     * "index": the index value of the swiper page before gesture swipe.
     * "extraInfo": the extra callback info.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onGestureSwipe(event: (index: number, extraInfo: SwiperAnimationEvent) => void): SwiperAttribute;
    /**
     * Called to setting the nested scroll mode.
     *
     * @param { SwiperNestedScrollMode } value - mode for nested scrolling.
     * @returns { SwiperAttribute } the attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    nestedScroll(value: SwiperNestedScrollMode): SwiperAttribute;
    /**
     * Custom swiper content transition animation.
     *
     * @param { SwiperContentAnimatedTransition } transition - custom content transition animation.
     * @returns { SwiperAttribute } the attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    customContentTransition(transition: SwiperContentAnimatedTransition): SwiperAttribute;
    /**
     * Called when the swiper content did scroll.
     *
     * @param { ContentDidScrollCallback } handler - callback of scroll,
     * selectedIndex is the index value of the swiper content selected before animation start.
     * index is the index value of the swiper content.
     * position is the moving ratio of the swiper content from the start position of the swiper main axis.
     * mainAxisLength is the swiper main axis length for calculating position.
     * @returns { SwiperAttribute } the attribute of the swiper.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onContentDidScroll(handler: ContentDidScrollCallback): SwiperAttribute;
    /**
     * Setting whether the indicator is interactive.
     *
     * @param { boolean } value - Whether the indicator is interactive.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    indicatorInteractive(value: boolean): SwiperAttribute;
}
/**
 * Defines the swiper content animated transition options.
 *
 * @interface SwiperContentAnimatedTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SwiperContentAnimatedTransition {
    /**
     * Defines the timeout of custom content transition animation after the page is moved out of the swiper. The unit is ms.
     * If SwiperContentTransitionProxy.finishTransition() is not invoked, use the timeout as animation end time.
     *
     * @type { ?number }
     * @default 0 ms
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    timeout?: number;
    /**
     * Called when custom content transition animation start.
     *
     * @type { Callback<SwiperContentTransitionProxy> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition: Callback<SwiperContentTransitionProxy>;
}
/**
 * The proxy of SwiperContentAnimatedTransition.
 *
 * @interface SwiperContentTransitionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SwiperContentTransitionProxy {
    /**
     * the index value of the swiper content selected before animation start.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    selectedIndex: number;
    /**
     * The index value of the swiper content.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: number;
    /**
     * the moving ratio of the swiper content from the start position of the swiper main axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    position: number;
    /**
     * the swiper main axis length for calculating position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mainAxisLength: number;
    /**
     * Notifies Swiper page the custom content transition animation is complete.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    finishTransition(): void;
}
/**
 * The callback of onContentDidScroll.
 *
 * @typedef { Function } ContentDidScrollCallback
 * @param { number } selectedIndex - the index value of the swiper content selected before animation start.
 * @param { number } index - the index value of the swiper content.
 * @param { number } position - the moving ratio of the swiper content from the start position of the swiper main axis.
 * @param { number } mainAxisLength - the swiper main axis length for calculating position.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void;
/**
 * Defines Swiper Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Swiper Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Swiper Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Swiper: SwiperInterface;
/**
 * Defines Swiper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Swiper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Swiper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const SwiperInstance: SwiperAttribute;
