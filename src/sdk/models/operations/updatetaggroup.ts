/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type UpdateTagGroupRequestBody = {
    name?: string | undefined;
};

export type UpdateTagGroupRequest = {
    requestBody?: UpdateTagGroupRequestBody | undefined;
    id: string;
};

export type UpdateTagGroupPermissions = {
    everyone?: number | undefined;
};

export type UpdateTagGroupTagGroup = {
    id?: number | undefined;
    name?: string | undefined;
    onePerTopic?: boolean | undefined;
    parentTagName?: Array<any> | undefined;
    permissions?: UpdateTagGroupPermissions | undefined;
    tagNames?: Array<any> | undefined;
};

/**
 * Tag group updated
 */
export type UpdateTagGroupResponseBody = {
    success?: string | undefined;
    tagGroup?: UpdateTagGroupTagGroup | undefined;
};

/** @internal */
export const UpdateTagGroupRequestBody$inboundSchema: z.ZodType<
    UpdateTagGroupRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
});

/** @internal */
export type UpdateTagGroupRequestBody$Outbound = {
    name?: string | undefined;
};

/** @internal */
export const UpdateTagGroupRequestBody$outboundSchema: z.ZodType<
    UpdateTagGroupRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateTagGroupRequestBody
> = z.object({
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTagGroupRequestBody$ {
    /** @deprecated use `UpdateTagGroupRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateTagGroupRequestBody$inboundSchema;
    /** @deprecated use `UpdateTagGroupRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateTagGroupRequestBody$outboundSchema;
    /** @deprecated use `UpdateTagGroupRequestBody$Outbound` instead. */
    export type Outbound = UpdateTagGroupRequestBody$Outbound;
}

/** @internal */
export const UpdateTagGroupRequest$inboundSchema: z.ZodType<
    UpdateTagGroupRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.lazy(() => UpdateTagGroupRequestBody$inboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type UpdateTagGroupRequest$Outbound = {
    RequestBody?: UpdateTagGroupRequestBody$Outbound | undefined;
    id: string;
};

/** @internal */
export const UpdateTagGroupRequest$outboundSchema: z.ZodType<
    UpdateTagGroupRequest$Outbound,
    z.ZodTypeDef,
    UpdateTagGroupRequest
> = z
    .object({
        requestBody: z.lazy(() => UpdateTagGroupRequestBody$outboundSchema).optional(),
        id: z.string(),
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
export namespace UpdateTagGroupRequest$ {
    /** @deprecated use `UpdateTagGroupRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateTagGroupRequest$inboundSchema;
    /** @deprecated use `UpdateTagGroupRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateTagGroupRequest$outboundSchema;
    /** @deprecated use `UpdateTagGroupRequest$Outbound` instead. */
    export type Outbound = UpdateTagGroupRequest$Outbound;
}

/** @internal */
export const UpdateTagGroupPermissions$inboundSchema: z.ZodType<
    UpdateTagGroupPermissions,
    z.ZodTypeDef,
    unknown
> = z.object({
    everyone: z.number().int().optional(),
});

/** @internal */
export type UpdateTagGroupPermissions$Outbound = {
    everyone?: number | undefined;
};

/** @internal */
export const UpdateTagGroupPermissions$outboundSchema: z.ZodType<
    UpdateTagGroupPermissions$Outbound,
    z.ZodTypeDef,
    UpdateTagGroupPermissions
> = z.object({
    everyone: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTagGroupPermissions$ {
    /** @deprecated use `UpdateTagGroupPermissions$inboundSchema` instead. */
    export const inboundSchema = UpdateTagGroupPermissions$inboundSchema;
    /** @deprecated use `UpdateTagGroupPermissions$outboundSchema` instead. */
    export const outboundSchema = UpdateTagGroupPermissions$outboundSchema;
    /** @deprecated use `UpdateTagGroupPermissions$Outbound` instead. */
    export type Outbound = UpdateTagGroupPermissions$Outbound;
}

/** @internal */
export const UpdateTagGroupTagGroup$inboundSchema: z.ZodType<
    UpdateTagGroupTagGroup,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.number().int().optional(),
        name: z.string().optional(),
        one_per_topic: z.boolean().optional(),
        parent_tag_name: z.array(z.any()).optional(),
        permissions: z.lazy(() => UpdateTagGroupPermissions$inboundSchema).optional(),
        tag_names: z.array(z.any()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            one_per_topic: "onePerTopic",
            parent_tag_name: "parentTagName",
            tag_names: "tagNames",
        });
    });

/** @internal */
export type UpdateTagGroupTagGroup$Outbound = {
    id?: number | undefined;
    name?: string | undefined;
    one_per_topic?: boolean | undefined;
    parent_tag_name?: Array<any> | undefined;
    permissions?: UpdateTagGroupPermissions$Outbound | undefined;
    tag_names?: Array<any> | undefined;
};

/** @internal */
export const UpdateTagGroupTagGroup$outboundSchema: z.ZodType<
    UpdateTagGroupTagGroup$Outbound,
    z.ZodTypeDef,
    UpdateTagGroupTagGroup
> = z
    .object({
        id: z.number().int().optional(),
        name: z.string().optional(),
        onePerTopic: z.boolean().optional(),
        parentTagName: z.array(z.any()).optional(),
        permissions: z.lazy(() => UpdateTagGroupPermissions$outboundSchema).optional(),
        tagNames: z.array(z.any()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            onePerTopic: "one_per_topic",
            parentTagName: "parent_tag_name",
            tagNames: "tag_names",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTagGroupTagGroup$ {
    /** @deprecated use `UpdateTagGroupTagGroup$inboundSchema` instead. */
    export const inboundSchema = UpdateTagGroupTagGroup$inboundSchema;
    /** @deprecated use `UpdateTagGroupTagGroup$outboundSchema` instead. */
    export const outboundSchema = UpdateTagGroupTagGroup$outboundSchema;
    /** @deprecated use `UpdateTagGroupTagGroup$Outbound` instead. */
    export type Outbound = UpdateTagGroupTagGroup$Outbound;
}

/** @internal */
export const UpdateTagGroupResponseBody$inboundSchema: z.ZodType<
    UpdateTagGroupResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        success: z.string().optional(),
        tag_group: z.lazy(() => UpdateTagGroupTagGroup$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            tag_group: "tagGroup",
        });
    });

/** @internal */
export type UpdateTagGroupResponseBody$Outbound = {
    success?: string | undefined;
    tag_group?: UpdateTagGroupTagGroup$Outbound | undefined;
};

/** @internal */
export const UpdateTagGroupResponseBody$outboundSchema: z.ZodType<
    UpdateTagGroupResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateTagGroupResponseBody
> = z
    .object({
        success: z.string().optional(),
        tagGroup: z.lazy(() => UpdateTagGroupTagGroup$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            tagGroup: "tag_group",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTagGroupResponseBody$ {
    /** @deprecated use `UpdateTagGroupResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateTagGroupResponseBody$inboundSchema;
    /** @deprecated use `UpdateTagGroupResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateTagGroupResponseBody$outboundSchema;
    /** @deprecated use `UpdateTagGroupResponseBody$Outbound` instead. */
    export type Outbound = UpdateTagGroupResponseBody$Outbound;
}
