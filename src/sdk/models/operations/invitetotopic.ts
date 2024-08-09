/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type InviteToTopicRequestBody = {
    email?: string | undefined;
    user?: string | undefined;
};

export type InviteToTopicRequest = {
    apiKey: string;
    apiUsername: string;
    requestBody?: InviteToTopicRequestBody | undefined;
    id: string;
};

export type InviteToTopicUser = {
    avatarTemplate?: string | undefined;
    id?: number | undefined;
    name?: string | undefined;
    username?: string | undefined;
};

/**
 * topic updated
 */
export type InviteToTopicResponseBody = {
    user?: InviteToTopicUser | undefined;
};

/** @internal */
export const InviteToTopicRequestBody$inboundSchema: z.ZodType<
    InviteToTopicRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    email: z.string().optional(),
    user: z.string().optional(),
});

/** @internal */
export type InviteToTopicRequestBody$Outbound = {
    email?: string | undefined;
    user?: string | undefined;
};

/** @internal */
export const InviteToTopicRequestBody$outboundSchema: z.ZodType<
    InviteToTopicRequestBody$Outbound,
    z.ZodTypeDef,
    InviteToTopicRequestBody
> = z.object({
    email: z.string().optional(),
    user: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteToTopicRequestBody$ {
    /** @deprecated use `InviteToTopicRequestBody$inboundSchema` instead. */
    export const inboundSchema = InviteToTopicRequestBody$inboundSchema;
    /** @deprecated use `InviteToTopicRequestBody$outboundSchema` instead. */
    export const outboundSchema = InviteToTopicRequestBody$outboundSchema;
    /** @deprecated use `InviteToTopicRequestBody$Outbound` instead. */
    export type Outbound = InviteToTopicRequestBody$Outbound;
}

/** @internal */
export const InviteToTopicRequest$inboundSchema: z.ZodType<
    InviteToTopicRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "Api-Key": z.string(),
        "Api-Username": z.string(),
        RequestBody: z.lazy(() => InviteToTopicRequestBody$inboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "Api-Key": "apiKey",
            "Api-Username": "apiUsername",
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type InviteToTopicRequest$Outbound = {
    "Api-Key": string;
    "Api-Username": string;
    RequestBody?: InviteToTopicRequestBody$Outbound | undefined;
    id: string;
};

/** @internal */
export const InviteToTopicRequest$outboundSchema: z.ZodType<
    InviteToTopicRequest$Outbound,
    z.ZodTypeDef,
    InviteToTopicRequest
> = z
    .object({
        apiKey: z.string(),
        apiUsername: z.string(),
        requestBody: z.lazy(() => InviteToTopicRequestBody$outboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            apiKey: "Api-Key",
            apiUsername: "Api-Username",
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteToTopicRequest$ {
    /** @deprecated use `InviteToTopicRequest$inboundSchema` instead. */
    export const inboundSchema = InviteToTopicRequest$inboundSchema;
    /** @deprecated use `InviteToTopicRequest$outboundSchema` instead. */
    export const outboundSchema = InviteToTopicRequest$outboundSchema;
    /** @deprecated use `InviteToTopicRequest$Outbound` instead. */
    export type Outbound = InviteToTopicRequest$Outbound;
}

/** @internal */
export const InviteToTopicUser$inboundSchema: z.ZodType<InviteToTopicUser, z.ZodTypeDef, unknown> =
    z
        .object({
            avatar_template: z.string().optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
            username: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                avatar_template: "avatarTemplate",
            });
        });

/** @internal */
export type InviteToTopicUser$Outbound = {
    avatar_template?: string | undefined;
    id?: number | undefined;
    name?: string | undefined;
    username?: string | undefined;
};

/** @internal */
export const InviteToTopicUser$outboundSchema: z.ZodType<
    InviteToTopicUser$Outbound,
    z.ZodTypeDef,
    InviteToTopicUser
> = z
    .object({
        avatarTemplate: z.string().optional(),
        id: z.number().int().optional(),
        name: z.string().optional(),
        username: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            avatarTemplate: "avatar_template",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteToTopicUser$ {
    /** @deprecated use `InviteToTopicUser$inboundSchema` instead. */
    export const inboundSchema = InviteToTopicUser$inboundSchema;
    /** @deprecated use `InviteToTopicUser$outboundSchema` instead. */
    export const outboundSchema = InviteToTopicUser$outboundSchema;
    /** @deprecated use `InviteToTopicUser$Outbound` instead. */
    export type Outbound = InviteToTopicUser$Outbound;
}

/** @internal */
export const InviteToTopicResponseBody$inboundSchema: z.ZodType<
    InviteToTopicResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    user: z.lazy(() => InviteToTopicUser$inboundSchema).optional(),
});

/** @internal */
export type InviteToTopicResponseBody$Outbound = {
    user?: InviteToTopicUser$Outbound | undefined;
};

/** @internal */
export const InviteToTopicResponseBody$outboundSchema: z.ZodType<
    InviteToTopicResponseBody$Outbound,
    z.ZodTypeDef,
    InviteToTopicResponseBody
> = z.object({
    user: z.lazy(() => InviteToTopicUser$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteToTopicResponseBody$ {
    /** @deprecated use `InviteToTopicResponseBody$inboundSchema` instead. */
    export const inboundSchema = InviteToTopicResponseBody$inboundSchema;
    /** @deprecated use `InviteToTopicResponseBody$outboundSchema` instead. */
    export const outboundSchema = InviteToTopicResponseBody$outboundSchema;
    /** @deprecated use `InviteToTopicResponseBody$Outbound` instead. */
    export type Outbound = InviteToTopicResponseBody$Outbound;
}
