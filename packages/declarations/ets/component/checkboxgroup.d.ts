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
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum SelectStatus {
    /**
     * All checkboxes are selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * All checkboxes are selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * All checkboxes are selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * All checkboxes are selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    All,
    /**
     * Part of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Part of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Part of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Part of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Part,
    /**
     * None of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * None of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * None of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * None of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    None
}
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface CheckboxGroupOptions {
    /**
     * Setting the group of CheckboxGroup.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Setting the group of CheckboxGroup.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Setting the group of CheckboxGroup.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Setting the group of CheckboxGroup.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    group?: string;
}
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface CheckboxGroupResult {
    /**
     * Checkbox name.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Checkbox name.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Checkbox name.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Checkbox name.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    name: Array<string>;
    /**
     * Set the group of status.
     *
     * @type { SelectStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set the group of status.
     *
     * @type { SelectStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set the group of status.
     *
     * @type { SelectStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the group of status.
     *
     * @type { SelectStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    status: SelectStatus;
}
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface CheckboxGroupInterface {
    /**
     * Called when the CheckboxGroup component is used.
     *
     * @param { CheckboxGroupOptions } options
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the CheckboxGroup component is used.
     *
     * @param { CheckboxGroupOptions } options
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the CheckboxGroup component is used.
     *
     * @param { CheckboxGroupOptions } options
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the CheckboxGroup component is used.
     *
     * @param { CheckboxGroupOptions } options
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (options?: CheckboxGroupOptions): CheckboxGroupAttribute;
}
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {
    /**
     * setting whether all checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * setting whether all checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * setting whether all checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * setting whether all checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectAll(value: boolean): CheckboxGroupAttribute;
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selectedColor(value: ResourceColor): CheckboxGroupAttribute;
    /**
     * Set the display border color of unselected checkbox.
     *
     * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set the display border color of unselected checkbox.
     *
     * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    unselectedColor(value: ResourceColor): CheckboxGroupAttribute;
    /**
     * Set the mark style of checkbox.
     *
     * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set the mark style of checkbox.
     *
     * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    mark(value: MarkStyle): CheckboxGroupAttribute;
    /**
     * Called when the selection status changes.
     *
     * @param { function } callback
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the selection status changes.
     *
     * @param { function } callback
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the selection status changes.
     *
     * @param { function } callback
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the selection status changes.
     *
     * @param { function } callback
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onChange(callback: (event: CheckboxGroupResult) => void): CheckboxGroupAttribute;
    /**
     * Setting the shape of checkbox group.
     *
     * @param { CheckBoxShape } value - The configuration of checkbox group shape.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    checkboxShape(value: CheckBoxShape): CheckboxGroupAttribute;
}
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CheckboxGroup: CheckboxGroupInterface;
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CheckboxGroupInstance: CheckboxGroupAttribute;
