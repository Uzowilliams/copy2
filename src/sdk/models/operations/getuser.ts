/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetUserRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class GetUserCustomFields extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;
}

export class GroupUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group_id" })
    groupId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_level" })
    notificationLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "owner" })
    owner?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: number;
}

export class GetUserGroups extends SpeakeasyBase {
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
    @Expose({ name: "can_see_members" })
    canSeeMembers: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "default_notification_level" })
    defaultNotificationLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName: string;

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

export class UserAuthTokens extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "browser" })
    browser: string;

    @SpeakeasyMetadata()
    @Expose({ name: "client_ip" })
    clientIp: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "device" })
    device: string;

    @SpeakeasyMetadata()
    @Expose({ name: "icon" })
    icon: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    location: string;

    @SpeakeasyMetadata()
    @Expose({ name: "os" })
    os: string;

    @SpeakeasyMetadata()
    @Expose({ name: "seen_at" })
    seenAt: string;
}

export class UserFields extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "1" })
    one: string;

    @SpeakeasyMetadata()
    @Expose({ name: "2" })
    two: string;
}

export class UserNotificationSchedule extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "day_0_end_time" })
    day0EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_0_start_time" })
    day0StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_1_end_time" })
    day1EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_1_start_time" })
    day1StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_2_end_time" })
    day2EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_2_start_time" })
    day2StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_3_end_time" })
    day3EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_3_start_time" })
    day3StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_4_end_time" })
    day4EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_4_start_time" })
    day4StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_5_end_time" })
    day5EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_5_start_time" })
    day5StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_6_end_time" })
    day6EndTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "day_6_start_time" })
    day6StartTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled: boolean;
}

export class UserOption extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_private_messages" })
    allowPrivateMessages: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "auto_track_topics_after_msecs" })
    autoTrackTopicsAfterMsecs: number;

    @SpeakeasyMetadata()
    @Expose({ name: "automatically_unpin_topics" })
    automaticallyUnpinTopics: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "bookmark_auto_delete_preference" })
    bookmarkAutoDeletePreference?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "color_scheme_id" })
    colorSchemeId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dark_scheme_id" })
    darkSchemeId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_calendar" })
    defaultCalendar?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "digest_after_minutes" })
    digestAfterMinutes: number;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_favicon" })
    dynamicFavicon: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "email_digests" })
    emailDigests: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "email_in_reply_to" })
    emailInReplyTo: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "email_level" })
    emailLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "email_messages_level" })
    emailMessagesLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "email_previous_replies" })
    emailPreviousReplies: number;

    @SpeakeasyMetadata()
    @Expose({ name: "enable_allowed_pm_users" })
    enableAllowedPmUsers: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enable_defer" })
    enableDefer: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enable_quoting" })
    enableQuoting: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "external_links_in_new_tab" })
    externalLinksInNewTab: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hide_profile_and_presence" })
    hideProfileAndPresence: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "homepage_id" })
    homepageId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "include_tl0_in_digests" })
    includeTl0InDigests: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "like_notification_frequency" })
    likeNotificationFrequency: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mailing_list_mode" })
    mailingListMode: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "mailing_list_mode_frequency" })
    mailingListModeFrequency: number;

    @SpeakeasyMetadata()
    @Expose({ name: "new_topic_duration_minutes" })
    newTopicDurationMinutes: number;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_level_when_replying" })
    notificationLevelWhenReplying: number;

    @SpeakeasyMetadata()
    @Expose({ name: "oldest_search_log_date" })
    oldestSearchLogDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "seen_popups" })
    seenPopups?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "sidebar_link_to_filtered_list" })
    sidebarLinkToFilteredList?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sidebar_show_count_of_new_items" })
    sidebarShowCountOfNewItems?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "skip_new_user_tips" })
    skipNewUserTips: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "text_size" })
    textSize: string;

    @SpeakeasyMetadata()
    @Expose({ name: "text_size_seq" })
    textSizeSeq: number;

    @SpeakeasyMetadata()
    @Expose({ name: "theme_ids" })
    themeIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "theme_key_seq" })
    themeKeySeq: number;

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title_count_mode" })
    titleCountMode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "watched_precedence_over_muted" })
    watchedPrecedenceOverMuted?: boolean;
}

export class User extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "admin" })
    admin: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "allowed_pm_usernames" })
    allowedPmUsernames: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "avatar_template" })
    avatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "badge_count" })
    badgeCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "can_be_deleted" })
    canBeDeleted: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_change_bio" })
    canChangeBio: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_change_location" })
    canChangeLocation: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_change_tracking_preferences" })
    canChangeTrackingPreferences: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_change_website" })
    canChangeWebsite: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_delete_all_posts" })
    canDeleteAllPosts: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit" })
    canEdit: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit_email" })
    canEditEmail: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit_name" })
    canEditName: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit_username" })
    canEditUsername: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_ignore_user" })
    canIgnoreUser: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_mute_user" })
    canMuteUser: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_send_private_message_to_user" })
    canSendPrivateMessageToUser: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_send_private_messages" })
    canSendPrivateMessages: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_upload_profile_header" })
    canUploadProfileHeader: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_upload_user_card_background" })
    canUploadUserCardBackground: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_fields" })
    @Type(() => GetUserCustomFields)
    customFields: GetUserCustomFields;

    @SpeakeasyMetadata()
    @Expose({ name: "display_sidebar_tags" })
    displaySidebarTags?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "featured_topic" })
    featuredTopic: string;

    @SpeakeasyMetadata()
    @Expose({ name: "featured_user_badge_ids" })
    featuredUserBadgeIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "flair_bg_color" })
    flairBgColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_color" })
    flairColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_group_id" })
    flairGroupId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_name" })
    flairName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_url" })
    flairUrl: string;

    @SpeakeasyMetadata({ elemType: GroupUsers })
    @Expose({ name: "group_users" })
    @Type(() => GroupUsers)
    groupUsers: GroupUsers[];

    @SpeakeasyMetadata({ elemType: GetUserGroups })
    @Expose({ name: "groups" })
    @Type(() => GetUserGroups)
    groups: GetUserGroups[];

    @SpeakeasyMetadata()
    @Expose({ name: "has_title_badges" })
    hasTitleBadges: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "ignored" })
    ignored: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "ignored_usernames" })
    ignoredUsernames: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "invited_by" })
    invitedBy: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_posted_at" })
    lastPostedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_seen_at" })
    lastSeenAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "locale" })
    locale: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mailing_list_posts_per_day" })
    mailingListPostsPerDay: number;

    @SpeakeasyMetadata()
    @Expose({ name: "moderator" })
    moderator: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "muted" })
    muted: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "muted_category_ids" })
    mutedCategoryIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "muted_tags" })
    mutedTags: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "muted_usernames" })
    mutedUsernames: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "pending_count" })
    pendingCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "pending_posts_count" })
    pendingPostsCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_count" })
    postCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group_id" })
    primaryGroupId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group_name" })
    primaryGroupName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "profile_view_count" })
    profileViewCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "recent_time_read" })
    recentTimeRead: number;

    @SpeakeasyMetadata()
    @Expose({ name: "regular_category_ids" })
    regularCategoryIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "second_factor_backup_enabled" })
    secondFactorBackupEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "second_factor_enabled" })
    secondFactorEnabled: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sidebar_category_ids" })
    sidebarCategoryIds?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "sidebar_tags" })
    sidebarTags?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "staged" })
    staged: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "system_avatar_template" })
    systemAvatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "system_avatar_upload_id" })
    systemAvatarUploadId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "time_read" })
    timeRead: number;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tracked_category_ids" })
    trackedCategoryIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "tracked_tags" })
    trackedTags: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "trust_level" })
    trustLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_avatar_id" })
    uploadedAvatarId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "use_logo_small_as_avatar" })
    useLogoSmallAsAvatar: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "user_api_keys" })
    userApiKeys: string;

    @SpeakeasyMetadata({ elemType: UserAuthTokens })
    @Expose({ name: "user_auth_tokens" })
    @Type(() => UserAuthTokens)
    userAuthTokens: UserAuthTokens[];

    @SpeakeasyMetadata()
    @Expose({ name: "user_fields" })
    @Type(() => UserFields)
    userFields?: UserFields;

    @SpeakeasyMetadata()
    @Expose({ name: "user_notification_schedule" })
    @Type(() => UserNotificationSchedule)
    userNotificationSchedule: UserNotificationSchedule;

    @SpeakeasyMetadata()
    @Expose({ name: "user_option" })
    @Type(() => UserOption)
    userOption: UserOption;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username: string;

    @SpeakeasyMetadata()
    @Expose({ name: "watched_category_ids" })
    watchedCategoryIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "watched_first_post_category_ids" })
    watchedFirstPostCategoryIds: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "watched_tags" })
    watchedTags: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "watching_first_post_tags" })
    watchingFirstPostTags: any[];
}

/**
 * user response
 */
export class GetUserResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => User)
    user: User;

    @SpeakeasyMetadata()
    @Expose({ name: "user_badges" })
    userBadges: any[];
}

export class GetUserResponse extends SpeakeasyBase {
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
     * user response
     */
    @SpeakeasyMetadata()
    object?: GetUserResponseBody;
}
