/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Defines Repeat component.
 * @kit ArkUI
 */
/**
 * Construct a new type for each item.
 *
 * @interface RepeatItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
interface RepeatItem<T> {
    /**
     * The origin data.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    item: T;
    /**
     * index of each item.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    index: number;
}
/**
 * Define the options of repeat virtualScroll to implement reuse and lazy loading.
 *
 * @interface VirtualScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface VirtualScrollOptions {
    /**
     * Total data count.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    totalCount?: number;
}
/**
 * Define a builder template option parameter.
 *
 * @interface TemplateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface TemplateOptions {
    /**
     * The cached number of each template.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    cachedCount?: number;
}
/**
 * Function that return typed string to render one template.
 *
 * @typedef {function} TemplateTypedFunc<T>
 * @param { T } item - data item.
 * @param {number} index - data index number in array.
 * @returns { string } template type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type TemplateTypedFunc<T> = (item: T, index: number) => string;
/**
 * Define builder function to render one template type.
 *
 * @typedef {function} RepeatItemBuilder<T>
 * @param { RepeatItem<T> } repeatItem - the repeat item builder function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;
/**
 * Defines the Repeat component attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare class RepeatAttribute<T> {
    /**
     * Executes itemGenerator of each item.
     *
     * @param { function } itemGenerator
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    each(itemGenerator: (repeatItem: RepeatItem<T>) => void): RepeatAttribute<T>;
    /**
     * Obtains key of each item.
     *
     * @param { function } keyGenerator
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    key(keyGenerator: (item: T, index: number) => string): RepeatAttribute<T>;
    /**
     * Enable UI lazy loading when scroll up or down.
     *
     * @param { VirtualScrollOptions } virtualScrollOptions that defines the options of repeat virtual scroll to implement reuse and lazy loading.
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    virtualScroll(virtualScrollOptions?: VirtualScrollOptions): RepeatAttribute<T>;
    /**
     * Type builder function to render specific type of data item.
     *
     * @param { string } type that defines the template id.
     * @param { RepeatItemBuilder<T> } itemBuilder that defines UI builder function.
     * @param { TemplateOptions } templateOptions that defines a builder template option parameter.
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): RepeatAttribute<T>;
    /**
     * Typed function to render specific type of data item.
     *
     * @param { TemplateTypedFunc<T> } typedFunc that define template typed function.
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    templateId(typedFunc: TemplateTypedFunc<T>): RepeatAttribute<T>;
}
/**
 * Defines Repeat Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const Repeat: <T>(arr: Array<T>) => RepeatAttribute<T>;
