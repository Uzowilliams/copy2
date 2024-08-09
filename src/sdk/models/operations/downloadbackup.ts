/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DownloadBackupRequest = {
    filename: string;
    token: string;
};

/** @internal */
export const DownloadBackupRequest$inboundSchema: z.ZodType<
    DownloadBackupRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    filename: z.string(),
    token: z.string(),
});

/** @internal */
export type DownloadBackupRequest$Outbound = {
    filename: string;
    token: string;
};

/** @internal */
export const DownloadBackupRequest$outboundSchema: z.ZodType<
    DownloadBackupRequest$Outbound,
    z.ZodTypeDef,
    DownloadBackupRequest
> = z.object({
    filename: z.string(),
    token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadBackupRequest$ {
    /** @deprecated use `DownloadBackupRequest$inboundSchema` instead. */
    export const inboundSchema = DownloadBackupRequest$inboundSchema;
    /** @deprecated use `DownloadBackupRequest$outboundSchema` instead. */
    export const outboundSchema = DownloadBackupRequest$outboundSchema;
    /** @deprecated use `DownloadBackupRequest$Outbound` instead. */
    export type Outbound = DownloadBackupRequest$Outbound;
}
