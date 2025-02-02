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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import lang from '../arkts/@arkts.lang';
import photoAccessHelper from './@ohos.file.photoAccessHelper';
/**
 * Helper functions to access image and video assets
 *
 * @namespace sendablePhotoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
declare namespace sendablePhotoAccessHelper {
    /**
     * Returns an instance of PhotoAccessHelper
     *
     * @param { Context } context - Hap context information
     * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    function getPhotoAccessHelper(context: Context): PhotoAccessHelper;
    /**
     * Enumeration of different types of photos
     *
     * @enum { number } PhotoType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    const enum PhotoType {
        /**
         * Image asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        IMAGE = 1,
        /**
         * Video asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        VIDEO
    }
    /**
     * Defines the photo asset
     *
     * @interface PhotoAsset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface PhotoAsset extends lang.ISendable {
        /**
         * uri of the asset.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        readonly uri: string;
        /**
         * Photo type, image or video
         *
         * @type { PhotoType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly photoType: PhotoType;
        /**
         * Display name (with a file name extension) of the asset.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly displayName: string;
        /**
         * Returns the value of the specified member.
         *
         * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
         * @returns { MemberType } Returns the value of the specified photo asset member
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        get(member: string): photoAccessHelper.MemberType;
        /**
         * Set a new value to the specified member
         *
         * @param { string } member - Photo asset member
         * @param { string } value - The new value of the member.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
         */
        set(member: string, value: string): void;
        /**
         * Modify metadata of the asset
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        commitModify(): Promise<void>;
        /**
         * Get thumbnail of the asset
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { image.Size } [size] - Thumbnail's size
         * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getThumbnail(size?: image.Size): Promise<image.PixelMap>;
        /**
         * Creates a photoAccessHelper photoasset from sendable photoAccessHelper photoasset.
         *
         * @returns { photoAccessHelper.PhotoAsset } Returns the instance if the operation is successful.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        convertToPhotoAsset(): photoAccessHelper.PhotoAsset;
    }
    /**
     * The fetch result of assets or albums
     *
     * @interface FetchResult
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    interface FetchResult<T> extends lang.ISendable {
        /**
         * Obtains the total number of objects in the fetch result.
         *
         * @returns { number } Total number of objects.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getCount(): number;
        /**
         * Checks whether the result set points to the last row.
         * You need to check whether the object is the last one before calling getNextObject.
         *
         * @returns { boolean } Whether the object is the last one in the fetch result.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        isAfterLast(): boolean;
        /**
         * Obtains the first object in the fetch result.
         *
         * @returns { Promise<T> } Returns the first object in the fetch result.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getFirstObject(): Promise<T>;
        /**
         * Obtains the next object in the fetch result.
         * Before calling this method, you must use isAfterLast() to check whether the current position is the last row
         * in the fetch result. This method only works when the current position is not the last row.
         *
         * @returns { Promise<T> } Returns the next object
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getNextObject(): Promise<T>;
        /**
         * Obtains the last object in the fetch result
         *
         * @returns { Promise<T> } Returns the last object
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getLastObject(): Promise<T>;
        /**
         * Obtains the object with the specified index in the fetch result.
         *
         * @param { number } index - Index of the asset to obtain.
         * @returns { Promise<T> } Returns the object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getObjectByPosition(index: number): Promise<T>;
        /**
         * Obtains all objects in the fetch result.
         *
         * @returns { Promise<Array<T>> } Returns all the objects
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAllObjects(): Promise<Array<T>>;
        /**
         * Releases the fetch result.
         *
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        close(): void;
    }
    /**
     * Album type.
     *
     * @enum { number } AlbumType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    const enum AlbumType {
        /**
         * Album created by user.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        USER = 0,
        /**
         * Album created by system, which metadata cannot be modified.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        SYSTEM = 1024
    }
    /**
     * Album subtype
     *
     * @enum { number } AlbumSubtype
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    const enum AlbumSubtype {
        /**
         * Generic user-created albums.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        USER_GENERIC = 1,
        /**
         * Favorite album, which assets are marked as favorite.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        FAVORITE = 1025,
        /**
         * Video album, which contains all video assets.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        VIDEO,
        /**
         * Image album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        IMAGE = 1031,
        /**
         * Any album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        ANY = 2147483647
    }
    /**
     * Defines the abstract interface of albums.
     *
     * @interface AbsAlbum
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    interface AbsAlbum extends lang.ISendable {
        /**
         * Album type
         *
         * @type { AlbumType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly albumType: AlbumType;
        /**
         * Album subtype
         *
         * @type { AlbumSubtype }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly albumSubtype: AlbumSubtype;
        /**
         * Album name.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        albumName: string;
        /**
         * Album uri.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly albumUri: string;
        /**
         * Number of assets in the album
         *
         * @type { number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly count: number;
        /**
         * Cover uri for the album
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly coverUri: string;
        /**
         * Fetch assets in an album.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    }
    /**
     * Defines the album.
     *
     * @interface Album
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    interface Album extends AbsAlbum {
        /**
         * Number of image assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly imageCount?: number;
        /**
         * Number of video assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly videoCount?: number;
        /**
         * Modify metadata for the album
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        commitModify(): Promise<void>;
        /**
         * Creates a photoAccessHelper album from sendable photoAccessHelper album.
         *
         * @returns { photoAccessHelper.Album } Returns the instance if the operation is successful.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        convertToPhotoAlbum(): photoAccessHelper.Album;
    }
    /**
     * Helper functions to access photos and albums.
     *
     * @interface PhotoAccessHelper
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface PhotoAccessHelper extends lang.ISendable {
        /**
         * Fetch photo assets
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Retrieval options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Fetch a group of burst assets
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { string } burstKey - Burst asset options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Create a photo asset:
         *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
         *   2. Get WRITE_IMAGEVIDEO permission by ACL;
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Photo asset type
         * @param { string } extension - Asset extension
         * @param { CreateOptions } [options] - Optional asset create option
         * @returns { Promise<string> } Returns the uri of the newly created asset
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>;
        /**
         * Fetch albums.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } [options] - options to fetch albums
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
        /**
         * Fetch albums.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Album type.
         * @param { AlbumSubtype } subtype - Album subtype.
         * @param { FetchOptions } [options] - options to fetch albums
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
        /**
         * Release PhotoAccessHelper instance
         *
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        release(): Promise<void>;
    }
}
export default sendablePhotoAccessHelper;
