/*---------------------------------------------------------------------------------------------
*  Licensed to the .NET Foundation under one or more agreements.
*  The .NET Foundation licenses this file to you under the MIT license.
*--------------------------------------------------------------------------------------------*/

import * as path from 'path';
import { IInstallationDirectoryProvider } from './IInstallationDirectoryProvider.1';

export class RuntimeInstallationDirectoryProvider extends IInstallationDirectoryProvider {
    public getInstallDir(installKey: string): string {
        const dotnetInstallDir = path.join(this.getStoragePath(), installKey);
        return dotnetInstallDir;
    }
}
