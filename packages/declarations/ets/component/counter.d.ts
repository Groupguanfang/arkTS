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
 * Counter component, which provides corresponding increment or decrement counting operations.
 *
 * @interface CounterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Counter component, which provides corresponding increment or decrement counting operations.
 *
 * @interface CounterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Counter component, which provides corresponding increment or decrement counting operations.
 *
 * @interface CounterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Counter component, which provides corresponding increment or decrement counting operations.
 *
 * @interface CounterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface CounterInterface {
    /**
     * Return Counter.
     *
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Return Counter.
     *
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Return Counter.
     *
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Return Counter.
     *
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (): CounterAttribute;
}
/**
 * Defines the Counter attribute functions.
 *
 * @extends CommonMethod<CounterAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Counter attribute functions.
 *
 * @extends CommonMethod<CounterAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Counter attribute functions.
 *
 * @extends CommonMethod<CounterAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Counter attribute functions.
 *
 * @extends CommonMethod<CounterAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CounterAttribute extends CommonMethod<CounterAttribute> {
    /**
     * Listen to the event that the value increases.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Listen to the event that the value increases.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Listen to the event that the value increases.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Listen to the event that the value increases.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onInc(event: () => void): CounterAttribute;
    /**
     * Listens to the number decrease event.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Listens to the number decrease event.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Listens to the number decrease event.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Listens to the number decrease event.
     *
     * @param { function } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onDec(event: () => void): CounterAttribute;
    /**
     * Indicates whether the decrease button of counter component is available or not.
     *
     * @param { boolean } value - If true, the decrease button is available and can respond to operations such as clicking. If false, click operations are not responded.
     * @returns { CounterAttribute } The attribute of the counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates whether the decrease button of counter component is available or not.
     *
     * @param { boolean } value - If true, the decrease button is available and can respond to operations such as clicking. If false, click operations are not responded.
     * @returns { CounterAttribute } The attribute of the counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enableDec(value: boolean): CounterAttribute;
    /**
     * Indicates whether the increase button of counter component is available or not.
     *
     * @param { boolean } value - If true, the increase button is available and can respond to operations such as clicking. If false, click operations are not responded.
     * @returns { CounterAttribute } The attribute of the counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates whether the increase button of counter component is available or not.
     *
     * @param { boolean } value - If true, the increase button is available and can respond to operations such as clicking. If false, click operations are not responded.
     * @returns { CounterAttribute } The attribute of the counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enableInc(value: boolean): CounterAttribute;
}
/**
 * Defines Counter Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Counter Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Counter Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Counter Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CounterInstance: CounterAttribute;
/**
 * Defines Counter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Counter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Counter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Counter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Counter: CounterInterface;
