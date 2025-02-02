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
 * @kit DeviceCertificateKit
 */
import type common from '@ohos.app.ability.common';
/**
 * OpenHarmony Universal CertificateManager
 *
 * @namespace certificateManagerDialog
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 13
 */
declare namespace certificateManagerDialog {
    /**
     * Enum for result code
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13
     */
    export enum CertificateDialogErrorCode {
        /**
         * Indicates that internal error.
         *
         * @syscap SystemCapability.Security.CertificateManagerDialog
         * @stagemodelonly
         * @since 13
         */
        ERROR_GENERIC = 29700001
    }
    /**
     * Enum for page type of certificate manager dialog
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13
     */
    export enum CertificateDialogPageType {
        /**
         * Indicates the main entrance page.
         *
         * @syscap SystemCapability.Security.CertificateManagerDialog
         * @stagemodelonly
         * @since 13
         */
        PAGE_MAIN = 1,
        /**
         * Indicates the CA certificate list page.
         *
         * @syscap SystemCapability.Security.CertificateManagerDialog
         * @stagemodelonly
         * @since 13
         */
        PAGE_CA_CERTIFICATE = 2,
        /**
         * Indicates the Credential list page.
         *
         * @syscap SystemCapability.Security.CertificateManagerDialog
         * @stagemodelonly
         * @since 13
         */
        PAGE_CREDENTIAL = 3,
        /**
         * Indicates the install certificate page.
         *
         * @syscap SystemCapability.Security.CertificateManagerDialog
         * @stagemodelonly
         * @since 13
         */
        PAGE_INSTALL_CERTIFICATE = 4
    }
    /**
     * open certificate manager dialog and show the specified page.
     *
     * @permission ohos.permission.ACCESS_CERT_MANAGER
     * @param { common.Context } context - Hap context information.
     * @param { CertificateDialogPageType } pageType - Indicates page type.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 29700001 - Internal error.
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13
     */
    function openCertificateManagerDialog(context: common.Context, pageType: CertificateDialogPageType): Promise<void>;
}
export default certificateManagerDialog;
