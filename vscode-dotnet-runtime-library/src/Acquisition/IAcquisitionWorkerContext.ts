/*---------------------------------------------------------------------------------------------
*  Licensed to the .NET Foundation under one or more agreements.
*  The .NET Foundation licenses this file to you under the MIT license.
*--------------------------------------------------------------------------------------------*/
import { IDotnetAcquireContext } from '../IDotnetAcquireContext';
import { IEventStream } from '../EventStream/EventStream';
import { IExtensionState } from '../IExtensionState';
import { IInstallationDirectoryProvider } from './IInstallationDirectoryProvider.1';
import { IInstallationValidator } from './IInstallationValidator';

export interface IAcquisitionWorkerContext
{
    storagePath: string;
    extensionState: IExtensionState;
    eventStream: IEventStream;
    installationValidator: IInstallationValidator;
    timeoutSeconds: number;
    installDirectoryProvider: IInstallationDirectoryProvider;
    acquisitionContext? : IDotnetAcquireContext | null;
    installingArchitecture? : string | undefined | null;
    proxyUrl? : string | undefined;
    isExtensionTelemetryInitiallyEnabled : boolean;
}
