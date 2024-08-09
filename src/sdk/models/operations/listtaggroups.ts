/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListTagGroupsPermissions = {
    staff?: number | undefined;
};

export type TagGroups = {
    id?: number | undefined;
    name?: string | undefined;
    onePerTopic?: boolean | undefined;
    parentTagName?: Array<any> | undefined;
    permissions?: ListTagGroupsPermissions | undefined;
    tagNames?: Array<any> | undefined;
};

/**
 * tags
 */
export type ListTagGroupsResponseBody = {
    tagGroups?: Array<TagGroups> | undefined;
};

/** @internal */
export const ListTagGroupsPermissions$inboundSchema: z.ZodType<
    ListTagGroupsPermissions,
    z.ZodTypeDef,
    unknown
> = z.object({
    staff: z.number().int().optional(),
});

/** @internal */
export type ListTagGroupsPermissions$Outbound = {
    staff?: number | undefined;
};

/** @internal */
export const ListTagGroupsPermissions$outboundSchema: z.ZodType<
    ListTagGroupsPermissions$Outbound,
    z.ZodTypeDef,
    ListTagGroupsPermissions
> = z.object({
    staff: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTagGroupsPermissions$ {
    /** @deprecated use `ListTagGroupsPermissions$inboundSchema` instead. */
    export const inboundSchema = ListTagGroupsPermissions$inboundSchema;
    /** @deprecated use `ListTagGroupsPermissions$outboundSchema` instead. */
    export const outboundSchema = ListTagGroupsPermissions$outboundSchema;
    /** @deprecated use `ListTagGroupsPermissions$Outbound` instead. */
    export type Outbound = ListTagGroupsPermissions$Outbound;
}

/** @internal */
export const TagGroups$inboundSchema: z.ZodType<TagGroups, z.ZodTypeDef, unknown> = z
    .object({
        id: z.number().int().optional(),
        name: z.string().optional(),
        one_per_topic: z.boolean().optional(),
        parent_tag_name: z.array(z.any()).optional(),
        permissions: z.lazy(() => ListTagGroupsPermissions$inboundSchema).optional(),
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
export type TagGroups$Outbound = {
    id?: number | undefined;
    name?: string | undefined;
    one_per_topic?: boolean | undefined;
    parent_tag_name?: Array<any> | undefined;
    permissions?: ListTagGroupsPermissions$Outbound | undefined;
    tag_names?: Array<any> | undefined;
};

/** @internal */
export const TagGroups$outboundSchema: z.ZodType<TagGroups$Outbound, z.ZodTypeDef, TagGroups> = z
    .object({
        id: z.number().int().optional(),
        name: z.string().optional(),
        onePerTopic: z.boolean().optional(),
        parentTagName: z.array(z.any()).optional(),
        permissions: z.lazy(() => ListTagGroupsPermissions$outboundSchema).optional(),
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
export namespace TagGroups$ {
    /** @deprecated use `TagGroups$inboundSchema` instead. */
    export const inboundSchema = TagGroups$inboundSchema;
    /** @deprecated use `TagGroups$outboundSchema` instead. */
    export const outboundSchema = TagGroups$outboundSchema;
    /** @deprecated use `TagGroups$Outbound` instead. */
    export type Outbound = TagGroups$Outbound;
}

/** @internal */
export const ListTagGroupsResponseBody$inboundSchema: z.ZodType<
    ListTagGroupsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        tag_groups: z.array(z.lazy(() => TagGroups$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            tag_groups: "tagGroups",
        });
    });

/** @internal */
export type ListTagGroupsResponseBody$Outbound = {
    tag_groups?: Array<TagGroups$Outbound> | undefined;
};

/** @internal */
export const ListTagGroupsResponseBody$outboundSchema: z.ZodType<
    ListTagGroupsResponseBody$Outbound,
    z.ZodTypeDef,
    ListTagGroupsResponseBody
> = z
    .object({
        tagGroups: z.array(z.lazy(() => TagGroups$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            tagGroups: "tag_groups",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTagGroupsResponseBody$ {
    /** @deprecated use `ListTagGroupsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListTagGroupsResponseBody$inboundSchema;
    /** @deprecated use `ListTagGroupsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListTagGroupsResponseBody$outboundSchema;
    /** @deprecated use `ListTagGroupsResponseBody$Outbound` instead. */
    export type Outbound = ListTagGroupsResponseBody$Outbound;
}
