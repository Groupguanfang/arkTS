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
import lang from '../../arkts/@arkts.lang';
/**
 * The sendable context. SendableContext is sendable data that supports the sendable protocol.
 * It's used to convert a Context object to SendableContext object for inter-thread transfer and
 * convert a SendableContext object into a Context object for in-thread use.
 *
 * @typedef SendableContext
 * @extends lang.ISendable
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
interface SendableContext extends lang.ISendable {
}
