/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class Triggers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "none" })
    none: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_action" })
    postAction: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_revision" })
    postRevision: number;

    @SpeakeasyMetadata()
    @Expose({ name: "trust_level_change" })
    trustLevelChange: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_change" })
    userChange: number;
}

export class AdminBadges extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "badge_grouping_ids" })
    badgeGroupingIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "badge_ids" })
    badgeIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "badge_type_ids" })
    badgeTypeIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "protected_system_fields" })
    protectedSystemFields: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "triggers" })
    @Type(() => Triggers)
    triggers: Triggers;
}

export class BadgeGroupings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "position" })
    position: number;

    @SpeakeasyMetadata()
    @Expose({ name: "system" })
    system: boolean;
}

export class BadgeTypes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sort_order" })
    sortOrder: number;
}

export class Badges extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_title" })
    allowTitle: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "auto_revoke" })
    autoRevoke: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "badge_grouping_id" })
    badgeGroupingId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "badge_type_id" })
    badgeTypeId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "grant_count" })
    grantCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "i18n_name" })
    i18nName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "icon" })
    icon: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "listable" })
    listable: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "long_description" })
    longDescription: string;

    @SpeakeasyMetadata()
    @Expose({ name: "manually_grantable" })
    manuallyGrantable: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "multiple_grant" })
    multipleGrant: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query: string;

    @SpeakeasyMetadata()
    @Expose({ name: "show_posts" })
    showPosts: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    @SpeakeasyMetadata()
    @Expose({ name: "system" })
    system: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "target_posts" })
    targetPosts: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "trigger" })
    trigger: number;
}

/**
 * success response
 */
export class AdminListBadgesResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "admin_badges" })
    @Type(() => AdminBadges)
    adminBadges: AdminBadges;

    @SpeakeasyMetadata({ elemType: BadgeGroupings })
    @Expose({ name: "badge_groupings" })
    @Type(() => BadgeGroupings)
    badgeGroupings: BadgeGroupings[];

    @SpeakeasyMetadata({ elemType: BadgeTypes })
    @Expose({ name: "badge_types" })
    @Type(() => BadgeTypes)
    badgeTypes: BadgeTypes[];

    @SpeakeasyMetadata({ elemType: Badges })
    @Expose({ name: "badges" })
    @Type(() => Badges)
    badges: Badges[];
}

export class AdminListBadgesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * success response
     */
    @SpeakeasyMetadata()
    object?: AdminListBadgesResponseBody;
}
