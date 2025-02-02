/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Provides ports for relative containers.
 *
 * @interface RelativeContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides ports for relative containers.
 *
 * @interface RelativeContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides ports for relative containers.
 *
 * @interface RelativeContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface RelativeContainerInterface {
    /**
     * Constructor.
     *
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Constructor.
     *
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor.
     *
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (): RelativeContainerAttribute;
}
/**
 * Specifies the position of guideLine
 *
 * @interface GuideLinePosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface GuideLinePosition {
    /**
     * Specifies the distance to start of container
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    start?: Dimension;
    /**
     * Specifies the distance to end of container
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    end?: Dimension;
}
/**
 * Specifies the GuideLineStyle of relative container
 *
 * @interface GuideLineStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface GuideLineStyle {
    /**
     * Specifies the id of guideLine
     *
     * @type {string}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id: string;
    /**
     * Specifies the direction of guideLine
     *
     * @type {Axis}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    direction: Axis;
    /**
     * Specifies the position of guideLine
     *
     * @type {GuideLinePosition}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    position: GuideLinePosition;
}
/**
 * Specifies the direction value of Barrier.
 *
 * @enum {number}
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum BarrierDirection {
    /**
     * Barrier will be positioned to the far left of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    LEFT,
    /**
     * Barrier will be positioned to the far right of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    RIGHT,
    /**
     * Barrier will be positioned to the top of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TOP,
    /**
     * Barrier will be positioned to the bottom of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    BOTTOM
}
/**
 * Specifies the localized direction value of Barrier.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LocalizedBarrierDirection {
    /**
     * Localized barrier will be positioned to the far start of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    START = 0,
    /**
     * Localized barrier will be positioned to the far end of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    END = 1,
    /**
     * Localized barrier will be positioned to the top of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TOP = 2,
    /**
     * Localized barrier will be positioned to the bottom of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    BOTTOM = 3
}
/**
 * Specifies the BarrierStyle of relative container
 *
 * @interface BarrierStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface BarrierStyle {
    /**
     * Specifies the id of barrier
     *
     * @type {string}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id: string;
    /**
     * Specifies the direction of barrier
     *
     * @type {BarrierDirection}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    direction: BarrierDirection;
    /**
     * Specifies the referencedId of barrier
     *
     * @type {Array<string>}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    referencedId: Array<string>;
}
/**
 * Specifies the Localized BarrierStyle of relative container
 *
 * @interface LocalizedBarrierStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedBarrierStyle {
    /**
     * Specifies the id of localized barrier
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id: string;
    /**
     * Specifies the localized barrier direction of barrier
     *
     * @type { LocalizedBarrierDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    localizedDirection: LocalizedBarrierDirection;
    /**
     * Specifies the referencedId of localized barrier
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    referencedId: Array<string>;
}
/**
 * @extends CommonMethod<RelativeContainerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<RelativeContainerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends CommonMethod<RelativeContainerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class RelativeContainerAttribute extends CommonMethod<RelativeContainerAttribute> {
    /**
     * Specifies guideLines of relativeContainer
     *
     * @param { Array<GuideLineStyle> } value
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    guideLine(value: Array<GuideLineStyle>): RelativeContainerAttribute;
    /**
     * Specifies barriers of relativeContainer
     *
     * @param { Array<BarrierStyle> } value
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    barrier(value: Array<BarrierStyle>): RelativeContainerAttribute;
    /**
     * Specifies barriers of relativeContainer
     *
     * @param { Array<LocalizedBarrierStyle> } barrierStyle
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    barrier(barrierStyle: Array<LocalizedBarrierStyle>): RelativeContainerAttribute;
}
/**
 * RelativeContainer
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * RelativeContainer
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * RelativeContainer
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const RelativeContainer: RelativeContainerInterface;
/**
 * RelativeContainerInstance
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * RelativeContainerInstance
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * RelativeContainerInstance
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const RelativeContainerInstance: RelativeContainerAttribute;
