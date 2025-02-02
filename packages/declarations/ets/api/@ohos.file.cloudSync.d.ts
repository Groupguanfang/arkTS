/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit CoreFileKit
 */
import type { AsyncCallback, Callback } from './@ohos.base';
/**
 * Provides the capabilities to control cloud file synchronization.
 *
 * @namespace cloudSync
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
 * @since 11
 */
declare namespace cloudSync {
    /**
     * Describes the Sync state type.
     *
     * @enum { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    enum SyncState {
        /**
         * Indicates that the sync state is uploading.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        UPLOADING,
        /**
         * Indicates that the sync failed in upload processing.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        UPLOAD_FAILED,
        /**
         * Indicates that the sync state is downloading.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        DOWNLOADING,
        /**
         * Indicates that the sync failed in download processing.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        DOWNLOAD_FAILED,
        /**
         * Indicates that the sync finish.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        COMPLETED,
        /**
         * Indicates that the sync has been stopped.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        STOPPED
    }
    /**
     * Describes the Sync Error type.
     *
     * @enum { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    enum ErrorType {
        /**
         * No error occurred.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        NO_ERROR,
        /**
         * Synchronization aborted due to network unavailable.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        NETWORK_UNAVAILABLE,
        /**
         * Synchronization aborted due to wifi unavailable.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        WIFI_UNAVAILABLE,
        /**
         * Synchronization aborted due to low capacity level.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        BATTERY_LEVEL_LOW,
        /**
         * Synchronization aborted due to warning low capacity level.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        BATTERY_LEVEL_WARNING,
        /**
         * Synchronization aborted due to cloud storage is full.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        CLOUD_STORAGE_FULL,
        /**
         * Synchronization aborted due to local storage is full.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        LOCAL_STORAGE_FULL,
        /**
         * Synchronization aborted due to device temperature is too high.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        DEVICE_TEMPERATURE_TOO_HIGH
    }
    /**
     * The SyncProgress data structure.
     *
     * @interface SyncProgress
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    interface SyncProgress {
        /**
         * The current sync state.
         *
         * @type { SyncState }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        state: SyncState;
        /**
         * The error type of sync.
         *
         * @type { ErrorType }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        error: ErrorType;
    }
    /**
     * Describes the State type of download.
     *
     * @enum { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    enum State {
        /**
         * Indicates that the download task in process now.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        RUNNING,
        /**
         * Indicates that the download task finished.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        COMPLETED,
        /**
         * Indicates that the download task failed.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        FAILED,
        /**
         * Indicates that the download task stopped.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        STOPPED
    }
    /**
     * Describes the download Error type.
     *
     * @enum { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    enum DownloadErrorType {
        /**
         * No error occurred.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        NO_ERROR,
        /**
         * download aborted due to unknown error.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        UNKNOWN_ERROR,
        /**
         * download aborted due to network unavailable.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        NETWORK_UNAVAILABLE,
        /**
         * download aborted due to local storage is full.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        LOCAL_STORAGE_FULL,
        /**
         * download aborted due to content is not found in the cloud.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        CONTENT_NOT_FOUND,
        /**
         * download aborted due to frequent user requests.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        FREQUENT_USER_REQUESTS
    }
    /**
     * The DownloadProgress data structure.
     *
     * @interface DownloadProgress
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    interface DownloadProgress {
        /**
         * The current download state.
         *
         * @type { State }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        state: State;
        /**
         * The processed data size for current file.
         *
         * @type { number }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        processed: number;
        /**
         * The size of current file.
         *
         * @type { number }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        size: number;
        /**
         * The uri of current file.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        uri: string;
        /**
         * The error type of download.
         *
         * @type { DownloadErrorType }
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        error: DownloadErrorType;
    }
    /**
     * FileSync object.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    class FileSync {
        /**
         * A constructor used to create a FileSync object.
         *
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        constructor();
        /**
         * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
         *
         * @param { 'progress' } event - event type.
         * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        on(event: 'progress', callback: Callback<SyncProgress>): void;
        /**
         * Unsubscribes from sync progress event.
         *
         * @param { 'progress' } event - event type.
         * @param { Callback<SyncProgress> } [callback] - callback function with a `SyncProgress` argument.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        off(event: 'progress', callback?: Callback<SyncProgress>): void;
        /**
         * Start the file sync task.
         *
         * @returns { Promise<void> } - Return Promise.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 22400001 - Cloud status not ready.
         * @throws { BusinessError } 22400002 - Network unavailable.
         * @throws { BusinessError } 22400003 - Low battery level.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        start(): Promise<void>;
        /**
         * Start the file sync task with callback.
         *
         * @param { AsyncCallback<void> } callback - Callback function.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 22400001 - Cloud status not ready.
         * @throws { BusinessError } 22400002 - Network unavailable.
         * @throws { BusinessError } 22400003 - Low battery level.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Stop the file sync task.
         *
         * @returns { Promise<void> } - Return Promise.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        stop(): Promise<void>;
        /**
         * Stop the file sync task with callback.
         *
         * @param { AsyncCallback<void> } callback - Callback function.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Get the last synchronization time.
         *
         * @returns { Promise<number> } - Return the date of last synchronization.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        getLastSyncTime(): Promise<number>;
        /**
         * Get the last synchronization time.
         *
         * @param { AsyncCallback<number> } callback - Callback function.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        getLastSyncTime(callback: AsyncCallback<number>): void;
    }
    /**
     * CloudFileCache object.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    class CloudFileCache {
        /**
         * A constructor used to create a CloudFileCache object.
         *
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        constructor();
        /**
         * Subscribes to cloud file cache download progress change event. This method uses a callback to get download progress changes.
         *
         * @param { 'progress' } event - event type.
         * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        on(event: 'progress', callback: Callback<DownloadProgress>): void;
        /**
         * Unsubscribes from cloud file cache download progress event.
         *
         * @param { 'progress' } event - event type.
         * @param { Callback<DownloadProgress> } [callback] - callback function with a `DownloadProgress` argument.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        off(event: 'progress', callback?: Callback<DownloadProgress>): void;
        /**
         * Start the cloud file cache download task.
         *
         * @param { string } uri - uri of file.
         * @returns { Promise<void> } - Return Promise.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 13900002 - No such file or directory.
         * @throws { BusinessError } 13900025 - No space left on device.
         * @throws { BusinessError } 14000002 - Invalid URI.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        start(uri: string): Promise<void>;
        /**
         * Start the cloud file cache download task with callback.
         *
         * @param { string } uri - uri of file.
         * @param { AsyncCallback<void> } callback - Callback function.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 13900002 - No such file or directory.
         * @throws { BusinessError } 13900025 - No space left on device.
         * @throws { BusinessError } 14000002 - Invalid URI.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        start(uri: string, callback: AsyncCallback<void>): void;
        /**
         * Stop the cloud file cache download task.
         *
         * @param { string } uri - uri of file.
         * @returns { Promise<void> } - Return Promise.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 13900002 - No such file or directory.
         * @throws { BusinessError } 14000002 - Invalid URI.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        /**
         * Stop the cloud file cache download task.
         *
         * @param { string } uri - uri of file.
         * @param { boolean } [needClean] - whether to delete the file that already downloaded.
         * @returns { Promise<void> } - Return Promise.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 13900002 - No such file or directory.
         * @throws { BusinessError } 14000002 - Invalid URI.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        stop(uri: string, needClean?: boolean): Promise<void>;
        /**
         * Stop the cloud file cache download task with callback.
         *
         * @param { string } uri - uri of file.
         * @param { AsyncCallback<void> } callback - Callback function.
         * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
         * <br>2.Incorrect parameter types.
         * @throws { BusinessError } 13600001 - IPC error.
         * @throws { BusinessError } 13900002 - No such file or directory.
         * @throws { BusinessError } 14000002 - Invalid URI.
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 11
         */
        stop(uri: string, callback: AsyncCallback<void>): void;
    }
    /**
     * Register change notify for the specified uri.
     *
     * @param { string } uri - uri of file.
     * @param { boolean } recursion - Whether to monitor the child files.
     * @param { Callback<ChangeData> } callback - Returns the changed data.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    function registerChange(uri: string, recursion: boolean, callback: Callback<ChangeData>): void;
    /**
     * Unregister change notify fir the specified uri.
     *
     * @param { string } uri - uri of file.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    function unregisterChange(uri: string): void;
    /**
     * Enumeration types of data change.
     *
     * @enum { number } NotifyType
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    enum NotifyType {
        /**
         * File has been newly created
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        NOTIFY_ADDED,
        /**
         * File has been modified.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        NOTIFY_MODIFIED,
        /**
         * File has been deleted.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        NOTIFY_DELETED,
        /**
         * File has been renamed or moved.
         *
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        NOTIFY_RENAMED
    }
    /**
     * Defines the change data
     *
     * @interface ChangeData
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12
     */
    interface ChangeData {
        /**
         * The notify type of the change.
         *
         * @type {NotifyType}
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        type: NotifyType;
        /**
         * Indicates whether the changed uri is directory.
         *
         * @type {Array<boolean>}
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        isDirectory: Array<boolean>;
        /**
         * The changed uris.
         *
         * @type {Array<string>}
         * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
         * @since 12
         */
        uris: Array<string>;
    }
}
export default cloudSync;
