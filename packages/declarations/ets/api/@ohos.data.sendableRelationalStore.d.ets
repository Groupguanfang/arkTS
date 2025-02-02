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
 * @file
 * @kit ArkData
 */
import collections from '../arkts/@arkts.collections';
import lang from '../arkts/@arkts.lang';
import relationalStore from './@ohos.data.relationalStore';
/**
 * Provides methods for creating and deleting an RDB store.
 *
 * @namespace sendableRelationalStore
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 12
 */
declare namespace sendableRelationalStore {
    /**
     * Defines information of an asset.
     *
     * @interface Asset
     * @extends lang.ISendable
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    interface Asset extends lang.ISendable {
        /**
         * Name of the asset.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        name: string;
        /**
         * URI of the asset.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        uri: string;
        /**
         * Path of the asset.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        path: string;
        /**
         * Time when the asset was created.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        createTime: string;
        /**
         * Time when the asset was last modified.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        modifyTime: string;
        /**
         * Size of the asset.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        size: string;
        /**
         * Status of the asset.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 12
         */
        status?: number;
    }
    /**
     * Defines multiple assets in a column.
     *
     * @typedef { collections.Array<Asset> } Assets
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    type Assets = collections.Array<Asset>;
    /**
     * Defines the types of the value in a KV pair.
     *
     * @typedef { null | number | string | boolean | collections.Uint8Array | Asset | Assets |
     * collections.Float32Array | bigint } ValueType
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets | collections.Float32Array | bigint;
    /**
     * Defines the data stored in KV pairs in a ValuesBucket object.
     *
     * @typedef { collections.Map<string, ValueType> } ValuesBucket
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    type ValuesBucket = collections.Map<string, ValueType>;
    /**
     * Defines NonSendableBucket for convenience.
     *
     * @typedef { relationalStore.ValuesBucket } NonSendableBucket
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    type NonSendableBucket = relationalStore.ValuesBucket;
    /**
     * Defines NonSendableAsset for convenience.
     *
     * @typedef { relationalStore.Asset } NonSendableAsset
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    type NonSendableAsset = relationalStore.Asset;
    /**
     * Converts a sendable <b>valuesBucket</b> object to a non-sendable <b>valuesBucket</b> object.
     *
     * @param { ValuesBucket } valuesBucket - Indicates the sendable <b>valuesBucket</b> object to convert.
     * @returns { NonSendableBucket } a non-sendable <b>valuesBucket</b> object. For details,
     *   see {@link NonSendableBucket}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types;3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    function fromSendableValuesBucket(valuesBucket: ValuesBucket): NonSendableBucket;
    /**
     * Converts a non-sendable <b>valuesBucket</b> object to a sendable <b>valuesBucket</b> object.
     *
     * @param { NonSendableBucket } valuesBucket - Indicates the non-sendable <b>valuesBucket</b> object to convert.
     * @returns { ValuesBucket } a sendable <b>valuesBucket</b> object. For details, see {@link ValuesBucket}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types;3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    function toSendableValuesBucket(valuesBucket: NonSendableBucket): ValuesBucket;
    /**
   * Converts a sendable <b>asset</b> object to a non-sendable <b>asset</b> object.
   *
   * @param { Asset } asset - Indicates the sendable <b>asset</b> object to convert.
   * @returns { NonSendableAsset } a non-sendable <b>asset</b> object. For details, see {@link NonSendableAsset}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types;3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12
   */
    function fromSendableAsset(asset: Asset): NonSendableAsset;
    /**
     * Converts a non-sendable <b>asset</b> object to a sendable <b>asset</b> object.
     *
     * @param { NonSendableAsset } asset - Indicates the non-sendable <b>asset</b> object to convert.
     * @returns { Asset } a sendable <b>asset</b> object. For details, see {@link Asset}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types;3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12
     */
    function toSendableAsset(asset: NonSendableAsset): Asset;
}
export default sendableRelationalStore;
