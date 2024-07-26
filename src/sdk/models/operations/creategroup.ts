/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class Group extends SpeakeasyBase {
    /**
     * pipe|separated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "automatic_membership_email_domains" })
    automaticMembershipEmailDomains?: string;

    /**
     * About Group
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bio_raw" })
    bioRaw?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_notification_level" })
    defaultNotificationLevel?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_bg_color" })
    flairBgColor?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_icon" })
    flairIcon?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_upload_id" })
    flairUploadId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "full_name" })
    fullName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "muted_category_ids" })
    mutedCategoryIds?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * comma,separated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owner_usernames" })
    ownerUsernames?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group" })
    primaryGroup?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "public_admission" })
    publicAdmission?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "public_exit" })
    publicExit?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "regular_category_ids" })
    regularCategoryIds?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "tracking_category_ids" })
    trackingCategoryIds?: number[];

    /**
     * comma,separated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usernames" })
    usernames?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "visibility_level" })
    visibilityLevel?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "watching_category_ids" })
    watchingCategoryIds?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "watching_first_post_category_ids" })
    watchingFirstPostCategoryIds?: number[];
}

export class CreateGroupRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => Group)
    group: Group;
}

export class BasicGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_membership_requests" })
    allowMembershipRequests: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "automatic" })
    automatic: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "bio_cooked" })
    bioCooked: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bio_excerpt" })
    bioExcerpt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bio_raw" })
    bioRaw: string;

    @SpeakeasyMetadata()
    @Expose({ name: "can_admin_group" })
    canAdminGroup: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit_group" })
    canEditGroup?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_see_members" })
    canSeeMembers: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "default_notification_level" })
    defaultNotificationLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_bg_color" })
    flairBgColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_color" })
    flairColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_url" })
    flairUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "full_name" })
    fullName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "grant_trust_level" })
    grantTrustLevel: string;

    @SpeakeasyMetadata()
    @Expose({ name: "has_messages" })
    hasMessages: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "incoming_email" })
    incomingEmail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "members_visibility_level" })
    membersVisibilityLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "membership_request_template" })
    membershipRequestTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mentionable_level" })
    mentionableLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "messageable_level" })
    messageableLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group" })
    primaryGroup: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "public_admission" })
    publicAdmission: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "public_exit" })
    publicExit: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "publish_read_state" })
    publishReadState: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_count" })
    userCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "visibility_level" })
    visibilityLevel: number;
}

/**
 * group created
 */
export class CreateGroupResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "basic_group" })
    @Type(() => BasicGroup)
    basicGroup: BasicGroup;
}

export class CreateGroupResponse extends SpeakeasyBase {
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
     * group created
     */
    @SpeakeasyMetadata()
    object?: CreateGroupResponseBody;
}
