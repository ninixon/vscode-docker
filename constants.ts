/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from 'path';

export const imagesPath: string = path.join(__dirname, '../images');

//AsyncPool Constants
export const MAX_CONCURRENT_REQUESTS = 8;
export const MAX_CONCURRENT_SUBSCRIPTON_REQUESTS = 5;

// Consider downloading multiple pages (images, tags, etc)
export const PAGE_SIZE = 100;

export namespace keytarConstants {
    export const serviceId: string = 'vscode-docker';

    export const dockerHubTokenKey: string = 'dockerhub.token';
    export const dockerHubUserNameKey: string = 'dockerhub.username';
    export const dockerHubPasswordKey: string = 'dockerhub.password';
}

export namespace configurationKeys {
    export const defaultRegistryPath = "defaultRegistryPath";
}

//Credentials Constants
export const NULL_GUID = '00000000-0000-0000-0000-000000000000'; //Empty GUID is a special username to indicate the login credential is based on JWT token.

//Azure Container Registries
export const skus = ["Standard", "Basic", "Premium"];

//Repository + Tag format
export const imageTagRegExp = new RegExp('^[a-zA-Z0-9.-_/]{1,256}:(?![.-])[a-zA-Z0-9.-_]{1,128}$');

//GLOB Patterns
export const FROM_DIRECTIVE_PATTERN = /^\s*FROM\s*([\w-\/:]*)(\s*AS\s*[a-z][a-z0-9-_\\.]*)?$/i;
export const COMPOSE_FILE_GLOB_PATTERN = '**/[dD][oO][cC][kK][eE][rR]-[cC][oO][mM][pP][oO][sS][eE]*.{[yY][aA][mM][lL],[yY][mM][lL]}';
export const DOCKERFILE_GLOB_PATTERN = '**/{*.[dD][oO][cC][kK][eE][rR][fF][iI][lL][eE],[dD][oO][cC][kK][eE][rR][fF][iI][lL][eE]}';
export const YAML_GLOB_PATTERN = '**/*.{[yY][aA][mM][lL],[yY][mM][lL]}';

//File search max ammout
export const FILE_SEARCH_MAX_RESULT = 1000;
