/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class Post extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "edit_reason" })
    editReason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw: string;
}

export class UpdatePostRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "post" })
    @Type(() => Post)
    post?: Post;
}

export class UpdatePostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: UpdatePostRequestBody;
}

export class UpdatePostActionsSummary extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "can_act" })
    canAct: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;
}

export class UpdatePostPost extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: UpdatePostActionsSummary })
    @Expose({ name: "actions_summary" })
    @Type(() => UpdatePostActionsSummary)
    actionsSummary: UpdatePostActionsSummary[];

    @SpeakeasyMetadata()
    @Expose({ name: "admin" })
    admin: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "avatar_template" })
    avatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bookmarked" })
    bookmarked: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_delete" })
    canDelete: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit" })
    canEdit: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_recover" })
    canRecover: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_see_hidden_post" })
    canSeeHiddenPost?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_view_edit_history" })
    canViewEditHistory: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_wiki" })
    canWiki: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "cooked" })
    cooked: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deleted_at" })
    deletedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "display_username" })
    displayUsername?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "draft_sequence" })
    draftSequence: number;

    @SpeakeasyMetadata()
    @Expose({ name: "edit_reason" })
    editReason: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_bg_color" })
    flairBgColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_color" })
    flairColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_group_id" })
    flairGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_name" })
    flairName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "flair_url" })
    flairUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "hidden" })
    hidden: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "incoming_link_count" })
    incomingLinkCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mentioned_users" })
    mentionedUsers?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "moderator" })
    moderator: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "post_number" })
    postNumber: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_type" })
    postType: number;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group_name" })
    primaryGroupName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "quote_count" })
    quoteCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw: string;

    @SpeakeasyMetadata()
    @Expose({ name: "readers_count" })
    readersCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reads" })
    reads: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reply_count" })
    replyCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reply_to_post_number" })
    replyToPostNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reviewable_id" })
    reviewableId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reviewable_score_count" })
    reviewableScoreCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reviewable_score_pending_count" })
    reviewableScorePendingCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "score" })
    score: number;

    @SpeakeasyMetadata()
    @Expose({ name: "staff" })
    staff: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_id" })
    topicId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_slug" })
    topicSlug: string;

    @SpeakeasyMetadata()
    @Expose({ name: "trust_level" })
    trustLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_deleted" })
    userDeleted: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_title" })
    userTitle: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: number;

    @SpeakeasyMetadata()
    @Expose({ name: "wiki" })
    wiki: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "yours" })
    yours: boolean;
}

/**
 * post updated
 */
export class UpdatePostResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "post" })
    @Type(() => UpdatePostPost)
    post: UpdatePostPost;
}

export class UpdatePostResponse extends SpeakeasyBase {
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
     * post updated
     */
    @SpeakeasyMetadata()
    object?: UpdatePostResponseBody;
}
