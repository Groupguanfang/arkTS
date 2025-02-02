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
 * declare ForEachAttribute
 *
 * @extends DynamicNode<ForEachAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare class ForEachAttribute extends DynamicNode<ForEachAttribute> {
}
/**
 * looping function.
 *
 * @interface ForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * looping function.
 *
 * @interface ForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * looping function.
 *
 * @interface ForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * looping function.
 *
 * @interface ForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ForEachInterface {
    /**
     * Set the value, array, and key.
     *
     * @param { Array<any> } arr
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { ForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set the value, array, and key.
     *
     * @param { Array<any> } arr
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { ForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set the value, array, and key.
     *
     * @param { Array<any> } arr
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { ForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the value, array, and key.
     *
     * @param { Array<any> } arr
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { ForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Set the value, array, and key.
     *
     * @param { Array<any> } arr
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { ForEachAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    (arr: Array<any>, itemGenerator: (item: any, index: number) => void, keyGenerator?: (item: any, index: number) => string): ForEachAttribute;
}
/**
 * Defines ForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines ForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines ForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ForEach: ForEachInterface;
