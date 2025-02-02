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
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ColumnInterface {
    /**
     * Set the value.
     * useAlign:Use a custom alignment.
     * space: Vertical layout element spacing.
     *
     * @param { object } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set the value.
     * useAlign:Use a custom alignment.
     * space: Vertical layout element spacing.
     *
     * @param { object } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set the value.
     * useAlign:Use a custom alignment.
     * space: Vertical layout element spacing.
     *
     * @param { object } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the value.
     * useAlign:Use a custom alignment.
     * space: Vertical layout element spacing.
     *
     * @param { object } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (value?: {
        space?: string | number;
    }): ColumnAttribute;
}
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class ColumnAttribute extends CommonMethod<ColumnAttribute> {
    /**
     * Sets the alignment format of the subassembly in the horizontal direction.
     *
     * @param { HorizontalAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the alignment format of the subassembly in the horizontal direction.
     *
     * @param { HorizontalAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the alignment format of the subassembly in the horizontal direction.
     *
     * @param { HorizontalAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the alignment format of the subassembly in the horizontal direction.
     *
     * @param { HorizontalAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    alignItems(value: HorizontalAlign): ColumnAttribute;
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @param { FlexAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @param { FlexAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @param { FlexAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @param { FlexAlign } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    justifyContent(value: FlexAlign): ColumnAttribute;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { Optional<boolean> } isReversed - If the main axis is reversed.
     * @returns { ColumnAttribute } The attribute of the column.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    reverse(isReversed: Optional<boolean>): ColumnAttribute;
}
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Column: ColumnInterface;
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ColumnInstance: ColumnAttribute;
