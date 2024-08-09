/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type AddGroupMembersRequestBody = {
    /**
     * comma separated list
     */
    usernames?: string | undefined;
};

export type AddGroupMembersRequest = {
    requestBody?: AddGroupMembersRequestBody | undefined;
    id: number;
};

/**
 * success response
 */
export type AddGroupMembersResponseBody = {
    emails: Array<any>;
    success: string;
    usernames: Array<any>;
};

/** @internal */
export const AddGroupMembersRequestBody$inboundSchema: z.ZodType<
    AddGroupMembersRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    usernames: z.string().optional(),
});

/** @internal */
export type AddGroupMembersRequestBody$Outbound = {
    usernames?: string | undefined;
};

/** @internal */
export const AddGroupMembersRequestBody$outboundSchema: z.ZodType<
    AddGroupMembersRequestBody$Outbound,
    z.ZodTypeDef,
    AddGroupMembersRequestBody
> = z.object({
    usernames: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGroupMembersRequestBody$ {
    /** @deprecated use `AddGroupMembersRequestBody$inboundSchema` instead. */
    export const inboundSchema = AddGroupMembersRequestBody$inboundSchema;
    /** @deprecated use `AddGroupMembersRequestBody$outboundSchema` instead. */
    export const outboundSchema = AddGroupMembersRequestBody$outboundSchema;
    /** @deprecated use `AddGroupMembersRequestBody$Outbound` instead. */
    export type Outbound = AddGroupMembersRequestBody$Outbound;
}

/** @internal */
export const AddGroupMembersRequest$inboundSchema: z.ZodType<
    AddGroupMembersRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.lazy(() => AddGroupMembersRequestBody$inboundSchema).optional(),
        id: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type AddGroupMembersRequest$Outbound = {
    RequestBody?: AddGroupMembersRequestBody$Outbound | undefined;
    id: number;
};

/** @internal */
export const AddGroupMembersRequest$outboundSchema: z.ZodType<
    AddGroupMembersRequest$Outbound,
    z.ZodTypeDef,
    AddGroupMembersRequest
> = z
    .object({
        requestBody: z.lazy(() => AddGroupMembersRequestBody$outboundSchema).optional(),
        id: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGroupMembersRequest$ {
    /** @deprecated use `AddGroupMembersRequest$inboundSchema` instead. */
    export const inboundSchema = AddGroupMembersRequest$inboundSchema;
    /** @deprecated use `AddGroupMembersRequest$outboundSchema` instead. */
    export const outboundSchema = AddGroupMembersRequest$outboundSchema;
    /** @deprecated use `AddGroupMembersRequest$Outbound` instead. */
    export type Outbound = AddGroupMembersRequest$Outbound;
}

/** @internal */
export const AddGroupMembersResponseBody$inboundSchema: z.ZodType<
    AddGroupMembersResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    emails: z.array(z.any()),
    success: z.string(),
    usernames: z.array(z.any()),
});

/** @internal */
export type AddGroupMembersResponseBody$Outbound = {
    emails: Array<any>;
    success: string;
    usernames: Array<any>;
};

/** @internal */
export const AddGroupMembersResponseBody$outboundSchema: z.ZodType<
    AddGroupMembersResponseBody$Outbound,
    z.ZodTypeDef,
    AddGroupMembersResponseBody
> = z.object({
    emails: z.array(z.any()),
    success: z.string(),
    usernames: z.array(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGroupMembersResponseBody$ {
    /** @deprecated use `AddGroupMembersResponseBody$inboundSchema` instead. */
    export const inboundSchema = AddGroupMembersResponseBody$inboundSchema;
    /** @deprecated use `AddGroupMembersResponseBody$outboundSchema` instead. */
    export const outboundSchema = AddGroupMembersResponseBody$outboundSchema;
    /** @deprecated use `AddGroupMembersResponseBody$Outbound` instead. */
    export type Outbound = AddGroupMembersResponseBody$Outbound;
}
