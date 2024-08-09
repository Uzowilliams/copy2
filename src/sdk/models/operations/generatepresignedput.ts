/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type GeneratePresignedPutMetadata = {
    /**
     * The SHA1 checksum of the upload binary blob. Optionally be provided and serves as an additional security check when later processing the file in complete-external-upload endpoint.
     */
    sha1Checksum?: string | undefined;
};

export const GeneratePresignedPutType = {
    Avatar: "avatar",
    ProfileBackground: "profile_background",
    CardBackground: "card_background",
    CustomEmoji: "custom_emoji",
    Composer: "composer",
} as const;
export type GeneratePresignedPutType = ClosedEnum<typeof GeneratePresignedPutType>;

export type GeneratePresignedPutRequestBody = {
    fileName: string;
    /**
     * File size should be represented in bytes.
     */
    fileSize: number;
    metadata?: GeneratePresignedPutMetadata | undefined;
    type: GeneratePresignedPutType;
};

/**
 * A map of headers that must be sent with the PUT request.
 */
export type SignedHeaders = {};

/**
 * external upload initialized
 */
export type GeneratePresignedPutResponseBody = {
    /**
     * The path of the temporary file on the external storage service.
     */
    key?: string | undefined;
    /**
     * A map of headers that must be sent with the PUT request.
     */
    signedHeaders?: SignedHeaders | undefined;
    /**
     * A unique string that identifies the external upload. This must be stored and then sent in the /complete-external-upload endpoint to complete the direct upload.
     */
    uniqueIdentifier?: string | undefined;
    /**
     * A presigned PUT URL which must be used to upload the file binary blob to.
     */
    url?: string | undefined;
};

/** @internal */
export const GeneratePresignedPutMetadata$inboundSchema: z.ZodType<
    GeneratePresignedPutMetadata,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "sha1-checksum": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "sha1-checksum": "sha1Checksum",
        });
    });

/** @internal */
export type GeneratePresignedPutMetadata$Outbound = {
    "sha1-checksum"?: string | undefined;
};

/** @internal */
export const GeneratePresignedPutMetadata$outboundSchema: z.ZodType<
    GeneratePresignedPutMetadata$Outbound,
    z.ZodTypeDef,
    GeneratePresignedPutMetadata
> = z
    .object({
        sha1Checksum: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sha1Checksum: "sha1-checksum",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratePresignedPutMetadata$ {
    /** @deprecated use `GeneratePresignedPutMetadata$inboundSchema` instead. */
    export const inboundSchema = GeneratePresignedPutMetadata$inboundSchema;
    /** @deprecated use `GeneratePresignedPutMetadata$outboundSchema` instead. */
    export const outboundSchema = GeneratePresignedPutMetadata$outboundSchema;
    /** @deprecated use `GeneratePresignedPutMetadata$Outbound` instead. */
    export type Outbound = GeneratePresignedPutMetadata$Outbound;
}

/** @internal */
export const GeneratePresignedPutType$inboundSchema: z.ZodNativeEnum<
    typeof GeneratePresignedPutType
> = z.nativeEnum(GeneratePresignedPutType);

/** @internal */
export const GeneratePresignedPutType$outboundSchema: z.ZodNativeEnum<
    typeof GeneratePresignedPutType
> = GeneratePresignedPutType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratePresignedPutType$ {
    /** @deprecated use `GeneratePresignedPutType$inboundSchema` instead. */
    export const inboundSchema = GeneratePresignedPutType$inboundSchema;
    /** @deprecated use `GeneratePresignedPutType$outboundSchema` instead. */
    export const outboundSchema = GeneratePresignedPutType$outboundSchema;
}

/** @internal */
export const GeneratePresignedPutRequestBody$inboundSchema: z.ZodType<
    GeneratePresignedPutRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        file_name: z.string(),
        file_size: z.number().int(),
        metadata: z.lazy(() => GeneratePresignedPutMetadata$inboundSchema).optional(),
        type: GeneratePresignedPutType$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            file_name: "fileName",
            file_size: "fileSize",
        });
    });

/** @internal */
export type GeneratePresignedPutRequestBody$Outbound = {
    file_name: string;
    file_size: number;
    metadata?: GeneratePresignedPutMetadata$Outbound | undefined;
    type: string;
};

/** @internal */
export const GeneratePresignedPutRequestBody$outboundSchema: z.ZodType<
    GeneratePresignedPutRequestBody$Outbound,
    z.ZodTypeDef,
    GeneratePresignedPutRequestBody
> = z
    .object({
        fileName: z.string(),
        fileSize: z.number().int(),
        metadata: z.lazy(() => GeneratePresignedPutMetadata$outboundSchema).optional(),
        type: GeneratePresignedPutType$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            fileName: "file_name",
            fileSize: "file_size",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratePresignedPutRequestBody$ {
    /** @deprecated use `GeneratePresignedPutRequestBody$inboundSchema` instead. */
    export const inboundSchema = GeneratePresignedPutRequestBody$inboundSchema;
    /** @deprecated use `GeneratePresignedPutRequestBody$outboundSchema` instead. */
    export const outboundSchema = GeneratePresignedPutRequestBody$outboundSchema;
    /** @deprecated use `GeneratePresignedPutRequestBody$Outbound` instead. */
    export type Outbound = GeneratePresignedPutRequestBody$Outbound;
}

/** @internal */
export const SignedHeaders$inboundSchema: z.ZodType<SignedHeaders, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type SignedHeaders$Outbound = {};

/** @internal */
export const SignedHeaders$outboundSchema: z.ZodType<
    SignedHeaders$Outbound,
    z.ZodTypeDef,
    SignedHeaders
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignedHeaders$ {
    /** @deprecated use `SignedHeaders$inboundSchema` instead. */
    export const inboundSchema = SignedHeaders$inboundSchema;
    /** @deprecated use `SignedHeaders$outboundSchema` instead. */
    export const outboundSchema = SignedHeaders$outboundSchema;
    /** @deprecated use `SignedHeaders$Outbound` instead. */
    export type Outbound = SignedHeaders$Outbound;
}

/** @internal */
export const GeneratePresignedPutResponseBody$inboundSchema: z.ZodType<
    GeneratePresignedPutResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        key: z.string().optional(),
        signed_headers: z.lazy(() => SignedHeaders$inboundSchema).optional(),
        unique_identifier: z.string().optional(),
        url: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            signed_headers: "signedHeaders",
            unique_identifier: "uniqueIdentifier",
        });
    });

/** @internal */
export type GeneratePresignedPutResponseBody$Outbound = {
    key?: string | undefined;
    signed_headers?: SignedHeaders$Outbound | undefined;
    unique_identifier?: string | undefined;
    url?: string | undefined;
};

/** @internal */
export const GeneratePresignedPutResponseBody$outboundSchema: z.ZodType<
    GeneratePresignedPutResponseBody$Outbound,
    z.ZodTypeDef,
    GeneratePresignedPutResponseBody
> = z
    .object({
        key: z.string().optional(),
        signedHeaders: z.lazy(() => SignedHeaders$outboundSchema).optional(),
        uniqueIdentifier: z.string().optional(),
        url: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            signedHeaders: "signed_headers",
            uniqueIdentifier: "unique_identifier",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratePresignedPutResponseBody$ {
    /** @deprecated use `GeneratePresignedPutResponseBody$inboundSchema` instead. */
    export const inboundSchema = GeneratePresignedPutResponseBody$inboundSchema;
    /** @deprecated use `GeneratePresignedPutResponseBody$outboundSchema` instead. */
    export const outboundSchema = GeneratePresignedPutResponseBody$outboundSchema;
    /** @deprecated use `GeneratePresignedPutResponseBody$Outbound` instead. */
    export type Outbound = GeneratePresignedPutResponseBody$Outbound;
}
