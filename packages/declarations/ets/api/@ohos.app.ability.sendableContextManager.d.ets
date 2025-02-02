/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit AbilityKit
 */
import common from '@ohos.app.ability.common';
import type { SendableContext as _SendableContext } from './application/SendableContext';
/**
 * Sendable context manager.
 *
 * @namespace sendableContextManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
declare namespace sendableContextManager {
    /**
     * The class of sendable context object.
     *
     * @typedef { _SendableContext }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    export type SendableContext = _SendableContext;
    /**
     * Convert the context to a sendable context object.
     * Support Context, ApplicationContext, AbilityStageContext and UIAbilityContext.
     *
     * @param { context } common.Context - The Context.
     * @returns { SendableContext } The sendable context object.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    function convertFromContext(context: common.Context): SendableContext;
    /**
     * Convert a sendable context to a Context.
     *
     * @param { sendableContext } SendableContext - The sendable context.
     * @returns { common.Context } The Context.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    function convertToContext(sendableContext: SendableContext): common.Context;
    /**
     * Convert a sendable context to a ApplicationContext.
     *
     * @param { sendableContext } SendableContext - The sendable context.
     * @returns { common.ApplicationContext } The ApplicationContext.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    function convertToApplicationContext(sendableContext: SendableContext): common.ApplicationContext;
    /**
     * Convert a sendable context to a AbilityStageContext.
     *
     * @param { sendableContext } SendableContext - The sendable context.
     * @returns { common.AbilityStageContext } The AbilityStageContext.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    function convertToAbilityStageContext(sendableContext: SendableContext): common.AbilityStageContext;
    /**
     * Convert a sendable context to a UIAbilityContext.
     *
     * @param { sendableContext } SendableContext - The sendable context.
     * @returns { common.UIAbilityContext } The UIAbilityContext.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    function convertToUIAbilityContext(sendableContext: SendableContext): common.UIAbilityContext;
}
export default sendableContextManager;
