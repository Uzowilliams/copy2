/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LogOutUserRequest = {
    id: number;
};

/**
 * response
 */
export type LogOutUserResponseBody = {
    success: string;
};

/** @internal */
export const LogOutUserRequest$inboundSchema: z.ZodType<LogOutUserRequest, z.ZodTypeDef, unknown> =
    z.object({
        id: z.number().int(),
    });

/** @internal */
export type LogOutUserRequest$Outbound = {
    id: number;
};

/** @internal */
export const LogOutUserRequest$outboundSchema: z.ZodType<
    LogOutUserRequest$Outbound,
    z.ZodTypeDef,
    LogOutUserRequest
> = z.object({
    id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogOutUserRequest$ {
    /** @deprecated use `LogOutUserRequest$inboundSchema` instead. */
    export const inboundSchema = LogOutUserRequest$inboundSchema;
    /** @deprecated use `LogOutUserRequest$outboundSchema` instead. */
    export const outboundSchema = LogOutUserRequest$outboundSchema;
    /** @deprecated use `LogOutUserRequest$Outbound` instead. */
    export type Outbound = LogOutUserRequest$Outbound;
}

/** @internal */
export const LogOutUserResponseBody$inboundSchema: z.ZodType<
    LogOutUserResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.string(),
});

/** @internal */
export type LogOutUserResponseBody$Outbound = {
    success: string;
};

/** @internal */
export const LogOutUserResponseBody$outboundSchema: z.ZodType<
    LogOutUserResponseBody$Outbound,
    z.ZodTypeDef,
    LogOutUserResponseBody
> = z.object({
    success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogOutUserResponseBody$ {
    /** @deprecated use `LogOutUserResponseBody$inboundSchema` instead. */
    export const inboundSchema = LogOutUserResponseBody$inboundSchema;
    /** @deprecated use `LogOutUserResponseBody$outboundSchema` instead. */
    export const outboundSchema = LogOutUserResponseBody$outboundSchema;
    /** @deprecated use `LogOutUserResponseBody$Outbound` instead. */
    export type Outbound = LogOutUserResponseBody$Outbound;
}
