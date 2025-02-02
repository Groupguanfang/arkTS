/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file A component which support other applications to select recent photos or videos
 * @kit MediaLibraryKit
 */
import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { BaseItemInfo } from '@ohos.file.PhotoPickerComponent';
/**
 * Declare struct RecentPhotoComponent
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
@Component
export declare struct RecentPhotoComponent {
    /**
     * recentPhotoOptions
     *
     * @type { ?recentPhotoOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    recentPhotoOptions?: RecentPhotoOptions;
    /**
     * Callback when check whether photos or videos exists
     *
     * @type { ?function }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback;
    /**
     * Callback when select photos or videos
     *
     * @type { ?function }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    onRecentPhotoClick: RecentPhotoClickCallback;
    /**
     * Callback when check whether photos or videos exists and return the recent photo info
     *
     * @type { ?function }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 13
     */
    onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback;
}
/**
 * The callback of onRecentPhotoCheckResult event
 *
 * @typedef { function } RecentPhotoCheckResultCallback
 * @param { boolean } recentPhotoExists - Does the recent photo exist?
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
export type RecentPhotoCheckResultCallback = (recentPhotoExists: boolean) => void;
/**
 * The callback of onRecentPhotoClick event
 *
 * @typedef { function } RecentPhotoClickCallback
 * @param { BaseItemInfo } recentPhotoInfo - The item information of recent photo
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
export type RecentPhotoClickCallback = (recentPhotoInfo: BaseItemInfo) => boolean;
/**
 * The callback of onRecentPhotoCheckInfo event
 *
 * @typedef { function } RecentPhotoCheckInfoCallback
 * @param { boolean } recentPhotoExists - Does the recent photo exist?
 * @param { RecentPhotoInfo } info - the recent photo info
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13
 */
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void;
/**
 * RecentPhotoOptions Object
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
export declare class RecentPhotoOptions {
    /**
     * Support set period time
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    period?: number;
    /**
     * The Type of the file in the recent photo window.
     *
     * @type { ?photoAccessHelper.PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    MIMEType?: photoAccessHelper.PhotoViewMIMETypes;
    /**
     * PhotoSource
     *
     * @type { ?PhotoSource }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    photoSource?: PhotoSource;
}
/**
 * Recent photo info
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13
 */
export declare class RecentPhotoInfo {
    /**
     * The dateTaken of photos or videos
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 13
     */
    dateTaken?: number;
    /**
     * The identifier of photos or videos
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 13
     */
    identifier?: string;
}
/**
 * Enumeration of PhotoSource type
 *
 * @enum { number } PhotoSource
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
export declare enum PhotoSource {
    /**
     * all resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    ALL = 0,
    /**
     * camera resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    CAMERA = 1,
    /**
     * screenshot resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    SCREENSHOT = 2
}
