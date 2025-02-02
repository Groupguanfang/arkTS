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
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface MarqueeInterface {
    /**
     * Create marquee.
     *
     * @param { object } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create marquee.
     *
     * @param { object } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create marquee.
     *
     * @param { object } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create marquee.
     *
     * @param { object } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (value: {
        start: boolean;
        step?: number;
        loop?: number;
        fromStart?: boolean;
        src: string;
    }): MarqueeAttribute;
}
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute> {
    /**
     * Set marquee font Color.
     *
     * @param { ResourceColor } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set marquee font Color.
     *
     * @param { ResourceColor } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set marquee font Color.
     *
     * @param { ResourceColor } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set marquee font Color.
     *
     * @param { ResourceColor } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontColor(value: ResourceColor): MarqueeAttribute;
    /**
     * Set marquee font size.
     *
     * @param { Length } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set marquee font size.
     *
     * @param { Length } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set marquee font size.
     *
     * @param { Length } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set marquee font size.
     *
     * @param { Length } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontSize(value: Length): MarqueeAttribute;
    /**
     * Set marquee allow scale.
     *
     * @param { boolean } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set marquee allow scale.
     *
     * @param { boolean } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set marquee allow scale.
     *
     * @param { boolean } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set marquee allow scale.
     *
     * @param { boolean } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    allowScale(value: boolean): MarqueeAttribute;
    /**
     * Set marquee font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set marquee font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set marquee font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set marquee font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontWeight(value: number | FontWeight | string): MarqueeAttribute;
    /**
     * Set marquee font family.
     *
     * @param { string | Resource } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set marquee font family.
     *
     * @param { string | Resource } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set marquee font family.
     *
     * @param { string | Resource } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set marquee font family.
     *
     * @param { string | Resource } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontFamily(value: string | Resource): MarqueeAttribute;
    /**
     * Marquee scrolling strategy after text update.
     *
     * @param { MarqueeUpdateStrategy } value - The scrolling strategy after text update.
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    marqueeUpdateStrategy(value: MarqueeUpdateStrategy): MarqueeAttribute;
    /**
     * Called when scrolling starts.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when scrolling starts.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when scrolling starts.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when scrolling starts.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onStart(event: () => void): MarqueeAttribute;
    /**
     * Called when scrolling to the bottom.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when scrolling to the bottom.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when scrolling to the bottom.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when scrolling to the bottom.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onBounce(event: () => void): MarqueeAttribute;
    /**
     * Called when scrolling is complete.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when scrolling is complete.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when scrolling is complete.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when scrolling is complete.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onFinish(event: () => void): MarqueeAttribute;
}
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Marquee: MarqueeInterface;
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const MarqueeInstance: MarqueeAttribute;
