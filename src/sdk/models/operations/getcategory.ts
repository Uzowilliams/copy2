/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetCategoryRequest = {
    id: number;
};

export type GetCategoryCustomFields = {};

export type GetCategoryGroupPermissions = {
    groupName: string;
    permissionType: number;
};

export type GetCategoryRequiredTagGroups = {
    minCount: number;
    name: string;
};

export type GetCategoryCategory = {
    allTopicsWiki: boolean;
    allowBadges: boolean;
    allowGlobalTags?: boolean | undefined;
    allowUnlimitedOwnerEditsOnFirstPost: boolean;
    allowedTagGroups?: Array<any> | undefined;
    allowedTags?: Array<any> | undefined;
    autoCloseBasedOnLastPost: boolean;
    autoCloseHours: string | null;
    availableGroups: Array<any>;
    canDelete: boolean;
    canEdit: boolean;
    categorySetting?: any | undefined;
    color: string;
    customFields: GetCategoryCustomFields;
    defaultListFilter: string;
    defaultSlowModeSeconds: string | null;
    defaultTopPeriod: string;
    defaultView: string | null;
    description: string | null;
    descriptionExcerpt: string | null;
    descriptionText: string | null;
    emailIn: string | null;
    emailInAllowStrangers: boolean;
    formTemplateIds?: Array<any> | undefined;
    groupPermissions: Array<GetCategoryGroupPermissions>;
    hasChildren: boolean | null;
    id: number;
    mailinglistMirror: boolean;
    minimumRequiredTags: number;
    name: string;
    navigateToFirstPostAfterRead: boolean;
    notificationLevel: number;
    numFeaturedTopics: number;
    permission: number | null;
    position: number;
    postCount: number;
    readOnlyBanner: string | null;
    readRestricted: boolean;
    requiredTagGroups: Array<GetCategoryRequiredTagGroups>;
    searchPriority: number;
    showSubcategoryList: boolean;
    slug: string;
    sortAscending: string | null;
    sortOrder: string | null;
    subcategoryListStyle: string;
    textColor: string;
    topicCount: number;
    topicFeaturedLinkAllowed: boolean;
    topicTemplate: string | null;
    topicUrl: string | null;
    uploadedBackground: string | null;
    uploadedBackgroundDark: string | null;
    uploadedLogo: string | null;
    uploadedLogoDark: string | null;
};

/**
 * response
 */
export type GetCategoryResponseBody = {
    category: GetCategoryCategory;
};

/** @internal */
export const GetCategoryRequest$inboundSchema: z.ZodType<
    GetCategoryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.number().int(),
});

/** @internal */
export type GetCategoryRequest$Outbound = {
    id: number;
};

/** @internal */
export const GetCategoryRequest$outboundSchema: z.ZodType<
    GetCategoryRequest$Outbound,
    z.ZodTypeDef,
    GetCategoryRequest
> = z.object({
    id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoryRequest$ {
    /** @deprecated use `GetCategoryRequest$inboundSchema` instead. */
    export const inboundSchema = GetCategoryRequest$inboundSchema;
    /** @deprecated use `GetCategoryRequest$outboundSchema` instead. */
    export const outboundSchema = GetCategoryRequest$outboundSchema;
    /** @deprecated use `GetCategoryRequest$Outbound` instead. */
    export type Outbound = GetCategoryRequest$Outbound;
}

/** @internal */
export const GetCategoryCustomFields$inboundSchema: z.ZodType<
    GetCategoryCustomFields,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetCategoryCustomFields$Outbound = {};

/** @internal */
export const GetCategoryCustomFields$outboundSchema: z.ZodType<
    GetCategoryCustomFields$Outbound,
    z.ZodTypeDef,
    GetCategoryCustomFields
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoryCustomFields$ {
    /** @deprecated use `GetCategoryCustomFields$inboundSchema` instead. */
    export const inboundSchema = GetCategoryCustomFields$inboundSchema;
    /** @deprecated use `GetCategoryCustomFields$outboundSchema` instead. */
    export const outboundSchema = GetCategoryCustomFields$outboundSchema;
    /** @deprecated use `GetCategoryCustomFields$Outbound` instead. */
    export type Outbound = GetCategoryCustomFields$Outbound;
}

/** @internal */
export const GetCategoryGroupPermissions$inboundSchema: z.ZodType<
    GetCategoryGroupPermissions,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        group_name: z.string(),
        permission_type: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            group_name: "groupName",
            permission_type: "permissionType",
        });
    });

/** @internal */
export type GetCategoryGroupPermissions$Outbound = {
    group_name: string;
    permission_type: number;
};

/** @internal */
export const GetCategoryGroupPermissions$outboundSchema: z.ZodType<
    GetCategoryGroupPermissions$Outbound,
    z.ZodTypeDef,
    GetCategoryGroupPermissions
> = z
    .object({
        groupName: z.string(),
        permissionType: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            groupName: "group_name",
            permissionType: "permission_type",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoryGroupPermissions$ {
    /** @deprecated use `GetCategoryGroupPermissions$inboundSchema` instead. */
    export const inboundSchema = GetCategoryGroupPermissions$inboundSchema;
    /** @deprecated use `GetCategoryGroupPermissions$outboundSchema` instead. */
    export const outboundSchema = GetCategoryGroupPermissions$outboundSchema;
    /** @deprecated use `GetCategoryGroupPermissions$Outbound` instead. */
    export type Outbound = GetCategoryGroupPermissions$Outbound;
}

/** @internal */
export const GetCategoryRequiredTagGroups$inboundSchema: z.ZodType<
    GetCategoryRequiredTagGroups,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        min_count: z.number().int(),
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            min_count: "minCount",
        });
    });

/** @internal */
export type GetCategoryRequiredTagGroups$Outbound = {
    min_count: number;
    name: string;
};

/** @internal */
export const GetCategoryRequiredTagGroups$outboundSchema: z.ZodType<
    GetCategoryRequiredTagGroups$Outbound,
    z.ZodTypeDef,
    GetCategoryRequiredTagGroups
> = z
    .object({
        minCount: z.number().int(),
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            minCount: "min_count",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoryRequiredTagGroups$ {
    /** @deprecated use `GetCategoryRequiredTagGroups$inboundSchema` instead. */
    export const inboundSchema = GetCategoryRequiredTagGroups$inboundSchema;
    /** @deprecated use `GetCategoryRequiredTagGroups$outboundSchema` instead. */
    export const outboundSchema = GetCategoryRequiredTagGroups$outboundSchema;
    /** @deprecated use `GetCategoryRequiredTagGroups$Outbound` instead. */
    export type Outbound = GetCategoryRequiredTagGroups$Outbound;
}

/** @internal */
export const GetCategoryCategory$inboundSchema: z.ZodType<
    GetCategoryCategory,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        all_topics_wiki: z.boolean(),
        allow_badges: z.boolean(),
        allow_global_tags: z.boolean().optional(),
        allow_unlimited_owner_edits_on_first_post: z.boolean(),
        allowed_tag_groups: z.array(z.any()).optional(),
        allowed_tags: z.array(z.any()).optional(),
        auto_close_based_on_last_post: z.boolean(),
        auto_close_hours: z.nullable(z.string()),
        available_groups: z.array(z.any()),
        can_delete: z.boolean(),
        can_edit: z.boolean(),
        category_setting: z.any().optional(),
        color: z.string(),
        custom_fields: z.lazy(() => GetCategoryCustomFields$inboundSchema),
        default_list_filter: z.string(),
        default_slow_mode_seconds: z.nullable(z.string()),
        default_top_period: z.string(),
        default_view: z.nullable(z.string()),
        description: z.nullable(z.string()),
        description_excerpt: z.nullable(z.string()),
        description_text: z.nullable(z.string()),
        email_in: z.nullable(z.string()),
        email_in_allow_strangers: z.boolean(),
        form_template_ids: z.array(z.any()).optional(),
        group_permissions: z.array(z.lazy(() => GetCategoryGroupPermissions$inboundSchema)),
        has_children: z.nullable(z.boolean()),
        id: z.number().int(),
        mailinglist_mirror: z.boolean(),
        minimum_required_tags: z.number().int(),
        name: z.string(),
        navigate_to_first_post_after_read: z.boolean(),
        notification_level: z.number().int(),
        num_featured_topics: z.number().int(),
        permission: z.nullable(z.number().int()),
        position: z.number().int(),
        post_count: z.number().int(),
        read_only_banner: z.nullable(z.string()),
        read_restricted: z.boolean(),
        required_tag_groups: z.array(z.lazy(() => GetCategoryRequiredTagGroups$inboundSchema)),
        search_priority: z.number().int(),
        show_subcategory_list: z.boolean(),
        slug: z.string(),
        sort_ascending: z.nullable(z.string()),
        sort_order: z.nullable(z.string()),
        subcategory_list_style: z.string(),
        text_color: z.string(),
        topic_count: z.number().int(),
        topic_featured_link_allowed: z.boolean(),
        topic_template: z.nullable(z.string()),
        topic_url: z.nullable(z.string()),
        uploaded_background: z.nullable(z.string()),
        uploaded_background_dark: z.nullable(z.string()),
        uploaded_logo: z.nullable(z.string()),
        uploaded_logo_dark: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            all_topics_wiki: "allTopicsWiki",
            allow_badges: "allowBadges",
            allow_global_tags: "allowGlobalTags",
            allow_unlimited_owner_edits_on_first_post: "allowUnlimitedOwnerEditsOnFirstPost",
            allowed_tag_groups: "allowedTagGroups",
            allowed_tags: "allowedTags",
            auto_close_based_on_last_post: "autoCloseBasedOnLastPost",
            auto_close_hours: "autoCloseHours",
            available_groups: "availableGroups",
            can_delete: "canDelete",
            can_edit: "canEdit",
            category_setting: "categorySetting",
            custom_fields: "customFields",
            default_list_filter: "defaultListFilter",
            default_slow_mode_seconds: "defaultSlowModeSeconds",
            default_top_period: "defaultTopPeriod",
            default_view: "defaultView",
            description_excerpt: "descriptionExcerpt",
            description_text: "descriptionText",
            email_in: "emailIn",
            email_in_allow_strangers: "emailInAllowStrangers",
            form_template_ids: "formTemplateIds",
            group_permissions: "groupPermissions",
            has_children: "hasChildren",
            mailinglist_mirror: "mailinglistMirror",
            minimum_required_tags: "minimumRequiredTags",
            navigate_to_first_post_after_read: "navigateToFirstPostAfterRead",
            notification_level: "notificationLevel",
            num_featured_topics: "numFeaturedTopics",
            post_count: "postCount",
            read_only_banner: "readOnlyBanner",
            read_restricted: "readRestricted",
            required_tag_groups: "requiredTagGroups",
            search_priority: "searchPriority",
            show_subcategory_list: "showSubcategoryList",
            sort_ascending: "sortAscending",
            sort_order: "sortOrder",
            subcategory_list_style: "subcategoryListStyle",
            text_color: "textColor",
            topic_count: "topicCount",
            topic_featured_link_allowed: "topicFeaturedLinkAllowed",
            topic_template: "topicTemplate",
            topic_url: "topicUrl",
            uploaded_background: "uploadedBackground",
            uploaded_background_dark: "uploadedBackgroundDark",
            uploaded_logo: "uploadedLogo",
            uploaded_logo_dark: "uploadedLogoDark",
        });
    });

/** @internal */
export type GetCategoryCategory$Outbound = {
    all_topics_wiki: boolean;
    allow_badges: boolean;
    allow_global_tags?: boolean | undefined;
    allow_unlimited_owner_edits_on_first_post: boolean;
    allowed_tag_groups?: Array<any> | undefined;
    allowed_tags?: Array<any> | undefined;
    auto_close_based_on_last_post: boolean;
    auto_close_hours: string | null;
    available_groups: Array<any>;
    can_delete: boolean;
    can_edit: boolean;
    category_setting?: any | undefined;
    color: string;
    custom_fields: GetCategoryCustomFields$Outbound;
    default_list_filter: string;
    default_slow_mode_seconds: string | null;
    default_top_period: string;
    default_view: string | null;
    description: string | null;
    description_excerpt: string | null;
    description_text: string | null;
    email_in: string | null;
    email_in_allow_strangers: boolean;
    form_template_ids?: Array<any> | undefined;
    group_permissions: Array<GetCategoryGroupPermissions$Outbound>;
    has_children: boolean | null;
    id: number;
    mailinglist_mirror: boolean;
    minimum_required_tags: number;
    name: string;
    navigate_to_first_post_after_read: boolean;
    notification_level: number;
    num_featured_topics: number;
    permission: number | null;
    position: number;
    post_count: number;
    read_only_banner: string | null;
    read_restricted: boolean;
    required_tag_groups: Array<GetCategoryRequiredTagGroups$Outbound>;
    search_priority: number;
    show_subcategory_list: boolean;
    slug: string;
    sort_ascending: string | null;
    sort_order: string | null;
    subcategory_list_style: string;
    text_color: string;
    topic_count: number;
    topic_featured_link_allowed: boolean;
    topic_template: string | null;
    topic_url: string | null;
    uploaded_background: string | null;
    uploaded_background_dark: string | null;
    uploaded_logo: string | null;
    uploaded_logo_dark: string | null;
};

/** @internal */
export const GetCategoryCategory$outboundSchema: z.ZodType<
    GetCategoryCategory$Outbound,
    z.ZodTypeDef,
    GetCategoryCategory
> = z
    .object({
        allTopicsWiki: z.boolean(),
        allowBadges: z.boolean(),
        allowGlobalTags: z.boolean().optional(),
        allowUnlimitedOwnerEditsOnFirstPost: z.boolean(),
        allowedTagGroups: z.array(z.any()).optional(),
        allowedTags: z.array(z.any()).optional(),
        autoCloseBasedOnLastPost: z.boolean(),
        autoCloseHours: z.nullable(z.string()),
        availableGroups: z.array(z.any()),
        canDelete: z.boolean(),
        canEdit: z.boolean(),
        categorySetting: z.any().optional(),
        color: z.string(),
        customFields: z.lazy(() => GetCategoryCustomFields$outboundSchema),
        defaultListFilter: z.string(),
        defaultSlowModeSeconds: z.nullable(z.string()),
        defaultTopPeriod: z.string(),
        defaultView: z.nullable(z.string()),
        description: z.nullable(z.string()),
        descriptionExcerpt: z.nullable(z.string()),
        descriptionText: z.nullable(z.string()),
        emailIn: z.nullable(z.string()),
        emailInAllowStrangers: z.boolean(),
        formTemplateIds: z.array(z.any()).optional(),
        groupPermissions: z.array(z.lazy(() => GetCategoryGroupPermissions$outboundSchema)),
        hasChildren: z.nullable(z.boolean()),
        id: z.number().int(),
        mailinglistMirror: z.boolean(),
        minimumRequiredTags: z.number().int(),
        name: z.string(),
        navigateToFirstPostAfterRead: z.boolean(),
        notificationLevel: z.number().int(),
        numFeaturedTopics: z.number().int(),
        permission: z.nullable(z.number().int()),
        position: z.number().int(),
        postCount: z.number().int(),
        readOnlyBanner: z.nullable(z.string()),
        readRestricted: z.boolean(),
        requiredTagGroups: z.array(z.lazy(() => GetCategoryRequiredTagGroups$outboundSchema)),
        searchPriority: z.number().int(),
        showSubcategoryList: z.boolean(),
        slug: z.string(),
        sortAscending: z.nullable(z.string()),
        sortOrder: z.nullable(z.string()),
        subcategoryListStyle: z.string(),
        textColor: z.string(),
        topicCount: z.number().int(),
        topicFeaturedLinkAllowed: z.boolean(),
        topicTemplate: z.nullable(z.string()),
        topicUrl: z.nullable(z.string()),
        uploadedBackground: z.nullable(z.string()),
        uploadedBackgroundDark: z.nullable(z.string()),
        uploadedLogo: z.nullable(z.string()),
        uploadedLogoDark: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            allTopicsWiki: "all_topics_wiki",
            allowBadges: "allow_badges",
            allowGlobalTags: "allow_global_tags",
            allowUnlimitedOwnerEditsOnFirstPost: "allow_unlimited_owner_edits_on_first_post",
            allowedTagGroups: "allowed_tag_groups",
            allowedTags: "allowed_tags",
            autoCloseBasedOnLastPost: "auto_close_based_on_last_post",
            autoCloseHours: "auto_close_hours",
            availableGroups: "available_groups",
            canDelete: "can_delete",
            canEdit: "can_edit",
            categorySetting: "category_setting",
            customFields: "custom_fields",
            defaultListFilter: "default_list_filter",
            defaultSlowModeSeconds: "default_slow_mode_seconds",
            defaultTopPeriod: "default_top_period",
            defaultView: "default_view",
            descriptionExcerpt: "description_excerpt",
            descriptionText: "description_text",
            emailIn: "email_in",
            emailInAllowStrangers: "email_in_allow_strangers",
            formTemplateIds: "form_template_ids",
            groupPermissions: "group_permissions",
            hasChildren: "has_children",
            mailinglistMirror: "mailinglist_mirror",
            minimumRequiredTags: "minimum_required_tags",
            navigateToFirstPostAfterRead: "navigate_to_first_post_after_read",
            notificationLevel: "notification_level",
            numFeaturedTopics: "num_featured_topics",
            postCount: "post_count",
            readOnlyBanner: "read_only_banner",
            readRestricted: "read_restricted",
            requiredTagGroups: "required_tag_groups",
            searchPriority: "search_priority",
            showSubcategoryList: "show_subcategory_list",
            sortAscending: "sort_ascending",
            sortOrder: "sort_order",
            subcategoryListStyle: "subcategory_list_style",
            textColor: "text_color",
            topicCount: "topic_count",
            topicFeaturedLinkAllowed: "topic_featured_link_allowed",
            topicTemplate: "topic_template",
            topicUrl: "topic_url",
            uploadedBackground: "uploaded_background",
            uploadedBackgroundDark: "uploaded_background_dark",
            uploadedLogo: "uploaded_logo",
            uploadedLogoDark: "uploaded_logo_dark",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoryCategory$ {
    /** @deprecated use `GetCategoryCategory$inboundSchema` instead. */
    export const inboundSchema = GetCategoryCategory$inboundSchema;
    /** @deprecated use `GetCategoryCategory$outboundSchema` instead. */
    export const outboundSchema = GetCategoryCategory$outboundSchema;
    /** @deprecated use `GetCategoryCategory$Outbound` instead. */
    export type Outbound = GetCategoryCategory$Outbound;
}

/** @internal */
export const GetCategoryResponseBody$inboundSchema: z.ZodType<
    GetCategoryResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    category: z.lazy(() => GetCategoryCategory$inboundSchema),
});

/** @internal */
export type GetCategoryResponseBody$Outbound = {
    category: GetCategoryCategory$Outbound;
};

/** @internal */
export const GetCategoryResponseBody$outboundSchema: z.ZodType<
    GetCategoryResponseBody$Outbound,
    z.ZodTypeDef,
    GetCategoryResponseBody
> = z.object({
    category: z.lazy(() => GetCategoryCategory$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoryResponseBody$ {
    /** @deprecated use `GetCategoryResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetCategoryResponseBody$inboundSchema;
    /** @deprecated use `GetCategoryResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetCategoryResponseBody$outboundSchema;
    /** @deprecated use `GetCategoryResponseBody$Outbound` instead. */
    export type Outbound = GetCategoryResponseBody$Outbound;
}
