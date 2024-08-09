/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type AbortMultipartRequestBody = {
    /**
     * The identifier of the multipart upload in the external storage provider. This is the multipart upload_id in AWS S3.
     */
    externalUploadIdentifier: string;
};

/**
 * external upload initialized
 */
export type AbortMultipartResponseBody = {
    success: string;
};

/** @internal */
export const AbortMultipartRequestBody$inboundSchema: z.ZodType<
    AbortMultipartRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        external_upload_identifier: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            external_upload_identifier: "externalUploadIdentifier",
        });
    });

/** @internal */
export type AbortMultipartRequestBody$Outbound = {
    external_upload_identifier: string;
};

/** @internal */
export const AbortMultipartRequestBody$outboundSchema: z.ZodType<
    AbortMultipartRequestBody$Outbound,
    z.ZodTypeDef,
    AbortMultipartRequestBody
> = z
    .object({
        externalUploadIdentifier: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            externalUploadIdentifier: "external_upload_identifier",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AbortMultipartRequestBody$ {
    /** @deprecated use `AbortMultipartRequestBody$inboundSchema` instead. */
    export const inboundSchema = AbortMultipartRequestBody$inboundSchema;
    /** @deprecated use `AbortMultipartRequestBody$outboundSchema` instead. */
    export const outboundSchema = AbortMultipartRequestBody$outboundSchema;
    /** @deprecated use `AbortMultipartRequestBody$Outbound` instead. */
    export type Outbound = AbortMultipartRequestBody$Outbound;
}

/** @internal */
export const AbortMultipartResponseBody$inboundSchema: z.ZodType<
    AbortMultipartResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.string(),
});

/** @internal */
export type AbortMultipartResponseBody$Outbound = {
    success: string;
};

/** @internal */
export const AbortMultipartResponseBody$outboundSchema: z.ZodType<
    AbortMultipartResponseBody$Outbound,
    z.ZodTypeDef,
    AbortMultipartResponseBody
> = z.object({
    success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AbortMultipartResponseBody$ {
    /** @deprecated use `AbortMultipartResponseBody$inboundSchema` instead. */
    export const inboundSchema = AbortMultipartResponseBody$inboundSchema;
    /** @deprecated use `AbortMultipartResponseBody$outboundSchema` instead. */
    export const outboundSchema = AbortMultipartResponseBody$outboundSchema;
    /** @deprecated use `AbortMultipartResponseBody$Outbound` instead. */
    export type Outbound = AbortMultipartResponseBody$Outbound;
}
