/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class Archetypes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "options" })
    options: any[];
}

export class GetSiteRequiredTagGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "min_count" })
    minCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class GetSiteCategories extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_global_tags" })
    allowGlobalTags: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "allowed_tag_groups" })
    allowedTagGroups: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "allowed_tags" })
    allowedTags: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit" })
    canEdit: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color: string;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_fields" })
    customFields?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "default_list_filter" })
    defaultListFilter: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_top_period" })
    defaultTopPeriod: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_view" })
    defaultView: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description_excerpt" })
    descriptionExcerpt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description_text" })
    descriptionText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "form_template_ids" })
    formTemplateIds?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "has_children" })
    hasChildren: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "minimum_required_tags" })
    minimumRequiredTags: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "navigate_to_first_post_after_read" })
    navigateToFirstPostAfterRead: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_level" })
    notificationLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "num_featured_topics" })
    numFeaturedTopics: number;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_category_id" })
    parentCategoryId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "permission" })
    permission: number;

    @SpeakeasyMetadata()
    @Expose({ name: "position" })
    position: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_count" })
    postCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "read_only_banner" })
    readOnlyBanner: string;

    @SpeakeasyMetadata()
    @Expose({ name: "read_restricted" })
    readRestricted: boolean;

    @SpeakeasyMetadata({ elemType: GetSiteRequiredTagGroups })
    @Expose({ name: "required_tag_groups" })
    @Type(() => GetSiteRequiredTagGroups)
    requiredTagGroups: GetSiteRequiredTagGroups[];

    @SpeakeasyMetadata()
    @Expose({ name: "show_subcategory_list" })
    showSubcategoryList: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sort_ascending" })
    sortAscending: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sort_order" })
    sortOrder: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subcategory_list_style" })
    subcategoryListStyle: string;

    @SpeakeasyMetadata()
    @Expose({ name: "text_color" })
    textColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_count" })
    topicCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_template" })
    topicTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_url" })
    topicUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_background" })
    uploadedBackground: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_background_dark" })
    uploadedBackgroundDark: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_logo" })
    uploadedLogo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_logo_dark" })
    uploadedLogoDark: string;
}

export class CensoredRegexp extends SpeakeasyBase {}

export class CustomEmojiTranslation extends SpeakeasyBase {}

export class DefaultDarkColorScheme extends SpeakeasyBase {}

export class GetSiteGroups extends SpeakeasyBase {
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
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class HashtagConfigurations extends SpeakeasyBase {}

export class HashtagIcons extends SpeakeasyBase {}

export class MarkdownAdditionalOptions extends SpeakeasyBase {}

export class NotificationTypes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "admin_problems" })
    adminProblems?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "assigned" })
    assigned?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "bookmark_reminder" })
    bookmarkReminder: number;

    @SpeakeasyMetadata()
    @Expose({ name: "chat_group_mention" })
    chatGroupMention: number;

    @SpeakeasyMetadata()
    @Expose({ name: "chat_invitation" })
    chatInvitation: number;

    @SpeakeasyMetadata()
    @Expose({ name: "chat_mention" })
    chatMention: number;

    @SpeakeasyMetadata()
    @Expose({ name: "chat_message" })
    chatMessage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "chat_quoted" })
    chatQuoted?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "circles_activity" })
    circlesActivity?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "code_review_commit_approved" })
    codeReviewCommitApproved: number;

    @SpeakeasyMetadata()
    @Expose({ name: "custom" })
    custom: number;

    @SpeakeasyMetadata()
    @Expose({ name: "edited" })
    edited: number;

    @SpeakeasyMetadata()
    @Expose({ name: "event_invitation" })
    eventInvitation: number;

    @SpeakeasyMetadata()
    @Expose({ name: "event_reminder" })
    eventReminder: number;

    @SpeakeasyMetadata()
    @Expose({ name: "following" })
    following?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "following_created_topic" })
    followingCreatedTopic?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "following_replied" })
    followingReplied?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "granted_badge" })
    grantedBadge: number;

    @SpeakeasyMetadata()
    @Expose({ name: "group_mentioned" })
    groupMentioned: number;

    @SpeakeasyMetadata()
    @Expose({ name: "group_message_summary" })
    groupMessageSummary: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invited_to_private_message" })
    invitedToPrivateMessage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invited_to_topic" })
    invitedToTopic: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invitee_accepted" })
    inviteeAccepted: number;

    @SpeakeasyMetadata()
    @Expose({ name: "liked" })
    liked: number;

    @SpeakeasyMetadata()
    @Expose({ name: "liked_consolidated" })
    likedConsolidated: number;

    @SpeakeasyMetadata()
    @Expose({ name: "linked" })
    linked: number;

    @SpeakeasyMetadata()
    @Expose({ name: "membership_request_accepted" })
    membershipRequestAccepted: number;

    @SpeakeasyMetadata()
    @Expose({ name: "membership_request_consolidated" })
    membershipRequestConsolidated: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mentioned" })
    mentioned: number;

    @SpeakeasyMetadata()
    @Expose({ name: "moved_post" })
    movedPost: number;

    @SpeakeasyMetadata()
    @Expose({ name: "new_features" })
    newFeatures?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_approved" })
    postApproved: number;

    @SpeakeasyMetadata()
    @Expose({ name: "posted" })
    posted: number;

    @SpeakeasyMetadata()
    @Expose({ name: "private_message" })
    privateMessage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "question_answer_user_commented" })
    questionAnswerUserCommented?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "quoted" })
    quoted: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reaction" })
    reaction: number;

    @SpeakeasyMetadata()
    @Expose({ name: "replied" })
    replied: number;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_reminder" })
    topicReminder: number;

    @SpeakeasyMetadata()
    @Expose({ name: "votes_released" })
    votesReleased: number;

    @SpeakeasyMetadata()
    @Expose({ name: "watching_category_or_tag" })
    watchingCategoryOrTag: number;

    @SpeakeasyMetadata()
    @Expose({ name: "watching_first_post" })
    watchingFirstPost: number;
}

export class PostActionTypes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_custom_flag" })
    isCustomFlag: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_flag" })
    isFlag: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name_key" })
    nameKey: string;

    @SpeakeasyMetadata()
    @Expose({ name: "short_description" })
    shortDescription: string;
}

export class PostTypes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "moderator_action" })
    moderatorAction: number;

    @SpeakeasyMetadata()
    @Expose({ name: "regular" })
    regular: number;

    @SpeakeasyMetadata()
    @Expose({ name: "small_action" })
    smallAction: number;

    @SpeakeasyMetadata()
    @Expose({ name: "whisper" })
    whisper: number;
}

export class TopicFlagTypes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_custom_flag" })
    isCustomFlag: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_flag" })
    isFlag: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name_key" })
    nameKey: string;

    @SpeakeasyMetadata()
    @Expose({ name: "short_description" })
    shortDescription: string;
}

export class TrustLevels extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "basic" })
    basic: number;

    @SpeakeasyMetadata()
    @Expose({ name: "leader" })
    leader: number;

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    member: number;

    @SpeakeasyMetadata()
    @Expose({ name: "newuser" })
    newuser: number;

    @SpeakeasyMetadata()
    @Expose({ name: "regular" })
    regular: number;
}

export class UserColorSchemes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_dark" })
    isDark: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class UserThemes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "color_scheme_id" })
    colorSchemeId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "default" })
    default: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "theme_id" })
    themeId: number;
}

export class UserTips extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "admin_guide" })
    adminGuide: number;

    @SpeakeasyMetadata()
    @Expose({ name: "first_notification" })
    firstNotification: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_menu" })
    postMenu: number;

    @SpeakeasyMetadata()
    @Expose({ name: "suggested_topics" })
    suggestedTopics: number;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_notification_levels" })
    topicNotificationLevels: number;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_timeline" })
    topicTimeline: number;
}

/**
 * success response
 */
export class GetSiteResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "anonymous_top_menu_items" })
    anonymousTopMenuItems: any[];

    @SpeakeasyMetadata({ elemType: Archetypes })
    @Expose({ name: "archetypes" })
    @Type(() => Archetypes)
    archetypes: Archetypes[];

    @SpeakeasyMetadata()
    @Expose({ name: "auth_providers" })
    authProviders: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "can_associate_groups" })
    canAssociateGroups?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_create_tag" })
    canCreateTag: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_tag_pms" })
    canTagPms: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_tag_topics" })
    canTagTopics: boolean;

    @SpeakeasyMetadata({ elemType: GetSiteCategories })
    @Expose({ name: "categories" })
    @Type(() => GetSiteCategories)
    categories: GetSiteCategories[];

    @SpeakeasyMetadata({ elemType: CensoredRegexp })
    @Expose({ name: "censored_regexp" })
    @Type(() => CensoredRegexp)
    censoredRegexp: CensoredRegexp[];

    @SpeakeasyMetadata()
    @Expose({ name: "custom_emoji_translation" })
    @Type(() => CustomEmojiTranslation)
    customEmojiTranslation: CustomEmojiTranslation;

    @SpeakeasyMetadata()
    @Expose({ name: "default_archetype" })
    defaultArchetype: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_dark_color_scheme" })
    @Type(() => DefaultDarkColorScheme)
    defaultDarkColorScheme: DefaultDarkColorScheme;

    @SpeakeasyMetadata()
    @Expose({ name: "denied_emojis" })
    deniedEmojis?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "displayed_about_plugin_stat_groups" })
    displayedAboutPluginStatGroups?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "filters" })
    filters: any[];

    @SpeakeasyMetadata({ elemType: GetSiteGroups })
    @Expose({ name: "groups" })
    @Type(() => GetSiteGroups)
    groups: GetSiteGroups[];

    @SpeakeasyMetadata()
    @Expose({ name: "hashtag_configurations" })
    @Type(() => HashtagConfigurations)
    hashtagConfigurations?: HashtagConfigurations;

    @SpeakeasyMetadata()
    @Expose({ name: "hashtag_icons" })
    @Type(() => HashtagIcons)
    hashtagIcons?: HashtagIcons;

    @SpeakeasyMetadata()
    @Expose({ name: "markdown_additional_options" })
    @Type(() => MarkdownAdditionalOptions)
    markdownAdditionalOptions?: MarkdownAdditionalOptions;

    @SpeakeasyMetadata()
    @Expose({ name: "navigation_menu_site_top_tags" })
    navigationMenuSiteTopTags?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "notification_types" })
    @Type(() => NotificationTypes)
    notificationTypes: NotificationTypes;

    @SpeakeasyMetadata()
    @Expose({ name: "periods" })
    periods: any[];

    @SpeakeasyMetadata({ elemType: PostActionTypes })
    @Expose({ name: "post_action_types" })
    @Type(() => PostActionTypes)
    postActionTypes: PostActionTypes[];

    @SpeakeasyMetadata()
    @Expose({ name: "post_types" })
    @Type(() => PostTypes)
    postTypes: PostTypes;

    @SpeakeasyMetadata()
    @Expose({ name: "tags_filter_regexp" })
    tagsFilterRegexp: string;

    @SpeakeasyMetadata()
    @Expose({ name: "top_menu_items" })
    topMenuItems: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "top_tags" })
    topTags: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "topic_featured_link_allowed_category_ids" })
    topicFeaturedLinkAllowedCategoryIds: any[];

    @SpeakeasyMetadata({ elemType: TopicFlagTypes })
    @Expose({ name: "topic_flag_types" })
    @Type(() => TopicFlagTypes)
    topicFlagTypes: TopicFlagTypes[];

    @SpeakeasyMetadata()
    @Expose({ name: "trust_levels" })
    @Type(() => TrustLevels)
    trustLevels: TrustLevels;

    @SpeakeasyMetadata()
    @Expose({ name: "uncategorized_category_id" })
    uncategorizedCategoryId: number;

    @SpeakeasyMetadata({ elemType: UserColorSchemes })
    @Expose({ name: "user_color_schemes" })
    @Type(() => UserColorSchemes)
    userColorSchemes: UserColorSchemes[];

    @SpeakeasyMetadata()
    @Expose({ name: "user_field_max_length" })
    userFieldMaxLength: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_fields" })
    userFields: any[];

    @SpeakeasyMetadata({ elemType: UserThemes })
    @Expose({ name: "user_themes" })
    @Type(() => UserThemes)
    userThemes: UserThemes[];

    @SpeakeasyMetadata()
    @Expose({ name: "user_tips" })
    @Type(() => UserTips)
    userTips?: UserTips;

    @SpeakeasyMetadata()
    @Expose({ name: "watched_words_link" })
    watchedWordsLink: string;

    @SpeakeasyMetadata()
    @Expose({ name: "watched_words_replace" })
    watchedWordsReplace: string;

    @SpeakeasyMetadata()
    @Expose({ name: "whispers_allowed_groups_names" })
    whispersAllowedGroupsNames?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "wizard_required" })
    wizardRequired?: boolean;
}

export class GetSiteResponse extends SpeakeasyBase {
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
    object?: GetSiteResponseBody;
}
