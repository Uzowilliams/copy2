/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type PerformPostActionRequestBody = {
    flagTopic?: boolean | undefined;
    id: number;
    postActionTypeId: number;
};

export type PerformPostActionRequest = {
    apiKey: string;
    apiUsername: string;
    requestBody?: PerformPostActionRequestBody | undefined;
};

export type PerformPostActionActionsSummary = {
    acted?: boolean | undefined;
    canUndo?: boolean | undefined;
    count?: number | undefined;
    id?: number | undefined;
};

export type Notice = {};

/**
 * post updated
 */
export type PerformPostActionResponseBody = {
    actionsSummary?: Array<PerformPostActionActionsSummary> | undefined;
    admin?: boolean | undefined;
    avatarTemplate?: string | undefined;
    canDelete?: boolean | undefined;
    canEdit?: boolean | undefined;
    canRecover?: boolean | undefined;
    canViewEditHistory?: boolean | undefined;
    canWiki?: boolean | undefined;
    cooked?: string | undefined;
    createdAt?: string | undefined;
    deletedAt?: string | null | undefined;
    displayUsername?: string | undefined;
    editReason?: string | null | undefined;
    flairBgColor?: string | null | undefined;
    flairColor?: string | null | undefined;
    flairName?: string | null | undefined;
    flairUrl?: string | null | undefined;
    hidden?: boolean | undefined;
    id?: number | undefined;
    incomingLinkCount?: number | undefined;
    moderator?: boolean | undefined;
    name?: string | undefined;
    notice?: Notice | undefined;
    postNumber?: number | undefined;
    postType?: number | undefined;
    primaryGroupName?: string | null | undefined;
    quoteCount?: number | undefined;
    readersCount?: number | undefined;
    reads?: number | undefined;
    replyCount?: number | undefined;
    replyToPostNumber?: string | null | undefined;
    reviewableId?: string | null | undefined;
    reviewableScoreCount?: number | undefined;
    reviewableScorePendingCount?: number | undefined;
    score?: number | undefined;
    staff?: boolean | undefined;
    topicId?: number | undefined;
    topicSlug?: string | undefined;
    trustLevel?: number | undefined;
    updatedAt?: string | undefined;
    userDeleted?: boolean | undefined;
    userId?: number | undefined;
    userTitle?: string | null | undefined;
    username?: string | undefined;
    version?: number | undefined;
    wiki?: boolean | undefined;
    yours?: boolean | undefined;
};

/** @internal */
export const PerformPostActionRequestBody$inboundSchema: z.ZodType<
    PerformPostActionRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        flag_topic: z.boolean().optional(),
        id: z.number().int(),
        post_action_type_id: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            flag_topic: "flagTopic",
            post_action_type_id: "postActionTypeId",
        });
    });

/** @internal */
export type PerformPostActionRequestBody$Outbound = {
    flag_topic?: boolean | undefined;
    id: number;
    post_action_type_id: number;
};

/** @internal */
export const PerformPostActionRequestBody$outboundSchema: z.ZodType<
    PerformPostActionRequestBody$Outbound,
    z.ZodTypeDef,
    PerformPostActionRequestBody
> = z
    .object({
        flagTopic: z.boolean().optional(),
        id: z.number().int(),
        postActionTypeId: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            flagTopic: "flag_topic",
            postActionTypeId: "post_action_type_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformPostActionRequestBody$ {
    /** @deprecated use `PerformPostActionRequestBody$inboundSchema` instead. */
    export const inboundSchema = PerformPostActionRequestBody$inboundSchema;
    /** @deprecated use `PerformPostActionRequestBody$outboundSchema` instead. */
    export const outboundSchema = PerformPostActionRequestBody$outboundSchema;
    /** @deprecated use `PerformPostActionRequestBody$Outbound` instead. */
    export type Outbound = PerformPostActionRequestBody$Outbound;
}

/** @internal */
export const PerformPostActionRequest$inboundSchema: z.ZodType<
    PerformPostActionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "Api-Key": z.string(),
        "Api-Username": z.string(),
        RequestBody: z.lazy(() => PerformPostActionRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "Api-Key": "apiKey",
            "Api-Username": "apiUsername",
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type PerformPostActionRequest$Outbound = {
    "Api-Key": string;
    "Api-Username": string;
    RequestBody?: PerformPostActionRequestBody$Outbound | undefined;
};

/** @internal */
export const PerformPostActionRequest$outboundSchema: z.ZodType<
    PerformPostActionRequest$Outbound,
    z.ZodTypeDef,
    PerformPostActionRequest
> = z
    .object({
        apiKey: z.string(),
        apiUsername: z.string(),
        requestBody: z.lazy(() => PerformPostActionRequestBody$outboundSchema).optional(),
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
export namespace PerformPostActionRequest$ {
    /** @deprecated use `PerformPostActionRequest$inboundSchema` instead. */
    export const inboundSchema = PerformPostActionRequest$inboundSchema;
    /** @deprecated use `PerformPostActionRequest$outboundSchema` instead. */
    export const outboundSchema = PerformPostActionRequest$outboundSchema;
    /** @deprecated use `PerformPostActionRequest$Outbound` instead. */
    export type Outbound = PerformPostActionRequest$Outbound;
}

/** @internal */
export const PerformPostActionActionsSummary$inboundSchema: z.ZodType<
    PerformPostActionActionsSummary,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        acted: z.boolean().optional(),
        can_undo: z.boolean().optional(),
        count: z.number().int().optional(),
        id: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            can_undo: "canUndo",
        });
    });

/** @internal */
export type PerformPostActionActionsSummary$Outbound = {
    acted?: boolean | undefined;
    can_undo?: boolean | undefined;
    count?: number | undefined;
    id?: number | undefined;
};

/** @internal */
export const PerformPostActionActionsSummary$outboundSchema: z.ZodType<
    PerformPostActionActionsSummary$Outbound,
    z.ZodTypeDef,
    PerformPostActionActionsSummary
> = z
    .object({
        acted: z.boolean().optional(),
        canUndo: z.boolean().optional(),
        count: z.number().int().optional(),
        id: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            canUndo: "can_undo",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformPostActionActionsSummary$ {
    /** @deprecated use `PerformPostActionActionsSummary$inboundSchema` instead. */
    export const inboundSchema = PerformPostActionActionsSummary$inboundSchema;
    /** @deprecated use `PerformPostActionActionsSummary$outboundSchema` instead. */
    export const outboundSchema = PerformPostActionActionsSummary$outboundSchema;
    /** @deprecated use `PerformPostActionActionsSummary$Outbound` instead. */
    export type Outbound = PerformPostActionActionsSummary$Outbound;
}

/** @internal */
export const Notice$inboundSchema: z.ZodType<Notice, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Notice$Outbound = {};

/** @internal */
export const Notice$outboundSchema: z.ZodType<Notice$Outbound, z.ZodTypeDef, Notice> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Notice$ {
    /** @deprecated use `Notice$inboundSchema` instead. */
    export const inboundSchema = Notice$inboundSchema;
    /** @deprecated use `Notice$outboundSchema` instead. */
    export const outboundSchema = Notice$outboundSchema;
    /** @deprecated use `Notice$Outbound` instead. */
    export type Outbound = Notice$Outbound;
}

/** @internal */
export const PerformPostActionResponseBody$inboundSchema: z.ZodType<
    PerformPostActionResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        actions_summary: z
            .array(z.lazy(() => PerformPostActionActionsSummary$inboundSchema))
            .optional(),
        admin: z.boolean().optional(),
        avatar_template: z.string().optional(),
        can_delete: z.boolean().optional(),
        can_edit: z.boolean().optional(),
        can_recover: z.boolean().optional(),
        can_view_edit_history: z.boolean().optional(),
        can_wiki: z.boolean().optional(),
        cooked: z.string().optional(),
        created_at: z.string().optional(),
        deleted_at: z.nullable(z.string()).optional(),
        display_username: z.string().optional(),
        edit_reason: z.nullable(z.string()).optional(),
        flair_bg_color: z.nullable(z.string()).optional(),
        flair_color: z.nullable(z.string()).optional(),
        flair_name: z.nullable(z.string()).optional(),
        flair_url: z.nullable(z.string()).optional(),
        hidden: z.boolean().optional(),
        id: z.number().int().optional(),
        incoming_link_count: z.number().int().optional(),
        moderator: z.boolean().optional(),
        name: z.string().optional(),
        notice: z.lazy(() => Notice$inboundSchema).optional(),
        post_number: z.number().int().optional(),
        post_type: z.number().int().optional(),
        primary_group_name: z.nullable(z.string()).optional(),
        quote_count: z.number().int().optional(),
        readers_count: z.number().int().optional(),
        reads: z.number().int().optional(),
        reply_count: z.number().int().optional(),
        reply_to_post_number: z.nullable(z.string()).optional(),
        reviewable_id: z.nullable(z.string()).optional(),
        reviewable_score_count: z.number().int().optional(),
        reviewable_score_pending_count: z.number().int().optional(),
        score: z.number().optional(),
        staff: z.boolean().optional(),
        topic_id: z.number().int().optional(),
        topic_slug: z.string().optional(),
        trust_level: z.number().int().optional(),
        updated_at: z.string().optional(),
        user_deleted: z.boolean().optional(),
        user_id: z.number().int().optional(),
        user_title: z.nullable(z.string()).optional(),
        username: z.string().optional(),
        version: z.number().int().optional(),
        wiki: z.boolean().optional(),
        yours: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            actions_summary: "actionsSummary",
            avatar_template: "avatarTemplate",
            can_delete: "canDelete",
            can_edit: "canEdit",
            can_recover: "canRecover",
            can_view_edit_history: "canViewEditHistory",
            can_wiki: "canWiki",
            created_at: "createdAt",
            deleted_at: "deletedAt",
            display_username: "displayUsername",
            edit_reason: "editReason",
            flair_bg_color: "flairBgColor",
            flair_color: "flairColor",
            flair_name: "flairName",
            flair_url: "flairUrl",
            incoming_link_count: "incomingLinkCount",
            post_number: "postNumber",
            post_type: "postType",
            primary_group_name: "primaryGroupName",
            quote_count: "quoteCount",
            readers_count: "readersCount",
            reply_count: "replyCount",
            reply_to_post_number: "replyToPostNumber",
            reviewable_id: "reviewableId",
            reviewable_score_count: "reviewableScoreCount",
            reviewable_score_pending_count: "reviewableScorePendingCount",
            topic_id: "topicId",
            topic_slug: "topicSlug",
            trust_level: "trustLevel",
            updated_at: "updatedAt",
            user_deleted: "userDeleted",
            user_id: "userId",
            user_title: "userTitle",
        });
    });

/** @internal */
export type PerformPostActionResponseBody$Outbound = {
    actions_summary?: Array<PerformPostActionActionsSummary$Outbound> | undefined;
    admin?: boolean | undefined;
    avatar_template?: string | undefined;
    can_delete?: boolean | undefined;
    can_edit?: boolean | undefined;
    can_recover?: boolean | undefined;
    can_view_edit_history?: boolean | undefined;
    can_wiki?: boolean | undefined;
    cooked?: string | undefined;
    created_at?: string | undefined;
    deleted_at?: string | null | undefined;
    display_username?: string | undefined;
    edit_reason?: string | null | undefined;
    flair_bg_color?: string | null | undefined;
    flair_color?: string | null | undefined;
    flair_name?: string | null | undefined;
    flair_url?: string | null | undefined;
    hidden?: boolean | undefined;
    id?: number | undefined;
    incoming_link_count?: number | undefined;
    moderator?: boolean | undefined;
    name?: string | undefined;
    notice?: Notice$Outbound | undefined;
    post_number?: number | undefined;
    post_type?: number | undefined;
    primary_group_name?: string | null | undefined;
    quote_count?: number | undefined;
    readers_count?: number | undefined;
    reads?: number | undefined;
    reply_count?: number | undefined;
    reply_to_post_number?: string | null | undefined;
    reviewable_id?: string | null | undefined;
    reviewable_score_count?: number | undefined;
    reviewable_score_pending_count?: number | undefined;
    score?: number | undefined;
    staff?: boolean | undefined;
    topic_id?: number | undefined;
    topic_slug?: string | undefined;
    trust_level?: number | undefined;
    updated_at?: string | undefined;
    user_deleted?: boolean | undefined;
    user_id?: number | undefined;
    user_title?: string | null | undefined;
    username?: string | undefined;
    version?: number | undefined;
    wiki?: boolean | undefined;
    yours?: boolean | undefined;
};

/** @internal */
export const PerformPostActionResponseBody$outboundSchema: z.ZodType<
    PerformPostActionResponseBody$Outbound,
    z.ZodTypeDef,
    PerformPostActionResponseBody
> = z
    .object({
        actionsSummary: z
            .array(z.lazy(() => PerformPostActionActionsSummary$outboundSchema))
            .optional(),
        admin: z.boolean().optional(),
        avatarTemplate: z.string().optional(),
        canDelete: z.boolean().optional(),
        canEdit: z.boolean().optional(),
        canRecover: z.boolean().optional(),
        canViewEditHistory: z.boolean().optional(),
        canWiki: z.boolean().optional(),
        cooked: z.string().optional(),
        createdAt: z.string().optional(),
        deletedAt: z.nullable(z.string()).optional(),
        displayUsername: z.string().optional(),
        editReason: z.nullable(z.string()).optional(),
        flairBgColor: z.nullable(z.string()).optional(),
        flairColor: z.nullable(z.string()).optional(),
        flairName: z.nullable(z.string()).optional(),
        flairUrl: z.nullable(z.string()).optional(),
        hidden: z.boolean().optional(),
        id: z.number().int().optional(),
        incomingLinkCount: z.number().int().optional(),
        moderator: z.boolean().optional(),
        name: z.string().optional(),
        notice: z.lazy(() => Notice$outboundSchema).optional(),
        postNumber: z.number().int().optional(),
        postType: z.number().int().optional(),
        primaryGroupName: z.nullable(z.string()).optional(),
        quoteCount: z.number().int().optional(),
        readersCount: z.number().int().optional(),
        reads: z.number().int().optional(),
        replyCount: z.number().int().optional(),
        replyToPostNumber: z.nullable(z.string()).optional(),
        reviewableId: z.nullable(z.string()).optional(),
        reviewableScoreCount: z.number().int().optional(),
        reviewableScorePendingCount: z.number().int().optional(),
        score: z.number().optional(),
        staff: z.boolean().optional(),
        topicId: z.number().int().optional(),
        topicSlug: z.string().optional(),
        trustLevel: z.number().int().optional(),
        updatedAt: z.string().optional(),
        userDeleted: z.boolean().optional(),
        userId: z.number().int().optional(),
        userTitle: z.nullable(z.string()).optional(),
        username: z.string().optional(),
        version: z.number().int().optional(),
        wiki: z.boolean().optional(),
        yours: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            actionsSummary: "actions_summary",
            avatarTemplate: "avatar_template",
            canDelete: "can_delete",
            canEdit: "can_edit",
            canRecover: "can_recover",
            canViewEditHistory: "can_view_edit_history",
            canWiki: "can_wiki",
            createdAt: "created_at",
            deletedAt: "deleted_at",
            displayUsername: "display_username",
            editReason: "edit_reason",
            flairBgColor: "flair_bg_color",
            flairColor: "flair_color",
            flairName: "flair_name",
            flairUrl: "flair_url",
            incomingLinkCount: "incoming_link_count",
            postNumber: "post_number",
            postType: "post_type",
            primaryGroupName: "primary_group_name",
            quoteCount: "quote_count",
            readersCount: "readers_count",
            replyCount: "reply_count",
            replyToPostNumber: "reply_to_post_number",
            reviewableId: "reviewable_id",
            reviewableScoreCount: "reviewable_score_count",
            reviewableScorePendingCount: "reviewable_score_pending_count",
            topicId: "topic_id",
            topicSlug: "topic_slug",
            trustLevel: "trust_level",
            updatedAt: "updated_at",
            userDeleted: "user_deleted",
            userId: "user_id",
            userTitle: "user_title",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformPostActionResponseBody$ {
    /** @deprecated use `PerformPostActionResponseBody$inboundSchema` instead. */
    export const inboundSchema = PerformPostActionResponseBody$inboundSchema;
    /** @deprecated use `PerformPostActionResponseBody$outboundSchema` instead. */
    export const outboundSchema = PerformPostActionResponseBody$outboundSchema;
    /** @deprecated use `PerformPostActionResponseBody$Outbound` instead. */
    export type Outbound = PerformPostActionResponseBody$Outbound;
}
