# GetTopicResponseBody

specific posts

## Example Usage

```typescript
import { GetTopicResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetTopicResponseBody = {
    actionsSummary: [
        {
            canAct: false,
            count: 726878,
            hidden: false,
            id: 102413,
        },
    ],
    archetype: "<value>",
    archived: false,
    bookmarked: false,
    bookmarks: ["<value>"],
    categoryId: 975425,
    chunkSize: 156383,
    closed: false,
    createdAt: "<value>",
    deletedAt: "<value>",
    deletedBy: "<value>",
    details: {
        canArchiveTopic: false,
        canCloseTopic: false,
        canConvertTopic: false,
        canCreatePost: false,
        canDelete: false,
        canEdit: false,
        canEditStaffNotes: false,
        canModerateCategory: false,
        canMovePosts: false,
        canPinUnpinTopic: false,
        canRemoveAllowedUsers: false,
        canRemoveSelfId: 782090,
        canReplyAsNewTopic: false,
        canReviewTopic: false,
        canSplitMergeTopic: false,
        canToggleTopicVisibility: false,
        createdBy: {
            avatarTemplate: "<value>",
            id: 304198,
            name: "<value>",
            username: "Delia42",
        },
        lastPoster: {
            avatarTemplate: "<value>",
            id: 406922,
            name: "<value>",
            username: "Berenice.Thiel",
        },
        notificationLevel: 246557,
    },
    draft: "<value>",
    draftKey: "<value>",
    draftSequence: 284086,
    fancyTitle: "<value>",
    featuredLink: "<value>",
    hasDeleted: false,
    hasSummary: false,
    highestPostNumber: 596433,
    id: 935302,
    imageUrl: "<value>",
    lastPostedAt: "<value>",
    likeCount: 117525,
    messageBusLastId: 772266,
    participantCount: 975884,
    pinned: false,
    pinnedAt: "<value>",
    pinnedGlobally: false,
    pinnedUntil: "<value>",
    postStream: {
        posts: [
            {
                actionsSummary: [
                    {
                        canAct: false,
                        id: 610987,
                    },
                ],
                admin: false,
                avatarTemplate: "<value>",
                bookmarked: false,
                canDelete: false,
                canEdit: false,
                canRecover: false,
                canViewEditHistory: false,
                canWiki: false,
                cooked: "<value>",
                createdAt: "<value>",
                deletedAt: "<value>",
                displayUsername: "<value>",
                editReason: "<value>",
                flairBgColor: "<value>",
                flairColor: "<value>",
                flairName: "<value>",
                flairUrl: "<value>",
                hidden: false,
                id: 932562,
                incomingLinkCount: 2677,
                linkCounts: [
                    {
                        clicks: 391797,
                        internal: false,
                        reflection: false,
                        title: "<value>",
                        url: "https://esteemed-poet.biz",
                    },
                ],
                moderator: false,
                name: "<value>",
                postNumber: 224467,
                postType: 483394,
                primaryGroupName: "<value>",
                quoteCount: 24753,
                read: false,
                readersCount: 39992,
                reads: 7468,
                replyCount: 639705,
                replyToPostNumber: "<value>",
                reviewableId: 927403,
                reviewableScoreCount: 408303,
                reviewableScorePendingCount: 693153,
                score: 377406,
                staff: false,
                topicId: 705148,
                topicSlug: "<value>",
                trustLevel: 809365,
                updatedAt: "<value>",
                userDeleted: false,
                userId: 596065,
                userTitle: "<value>",
                username: "Melvin.Lind35",
                version: 600193,
                wiki: false,
                yours: false,
            },
        ],
        stream: ["<value>"],
    },
    postsCount: 897543,
    replyCount: 654082,
    showReadIndicator: false,
    slowModeEnabledUntil: "<value>",
    slowModeSeconds: 769967,
    slug: "<value>",
    suggestedTopics: [
        {
            archetype: "<value>",
            archived: false,
            bookmarked: "<value>",
            bumped: false,
            bumpedAt: "<value>",
            categoryId: 373040,
            closed: false,
            createdAt: "<value>",
            excerpt: "<value>",
            fancyTitle: "<value>",
            featuredLink: "<value>",
            highestPostNumber: 357425,
            id: 668234,
            imageUrl: "<value>",
            lastPostedAt: "<value>",
            likeCount: 621666,
            liked: "<value>",
            pinned: false,
            posters: [
                {
                    description: "Multi-channelled discrete architecture",
                    extras: "<value>",
                    user: {
                        avatarTemplate: "<value>",
                        id: 874400,
                        name: "<value>",
                        username: "Daron21",
                    },
                },
            ],
            postsCount: 322017,
            replyCount: 183033,
            slug: "<value>",
            tags: ["<value>"],
            tagsDescriptions: {},
            title: "<value>",
            unpinned: "<value>",
            unseen: false,
            views: 611328,
            visible: false,
        },
    ],
    summarizable: false,
    tags: ["<value>"],
    tagsDescriptions: {},
    thumbnails: "<value>",
    timelineLookup: ["<value>"],
    title: "<value>",
    topicTimer: "<value>",
    unpinned: "<value>",
    userId: 403026,
    views: 367626,
    visible: false,
    wordCount: 745233,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `actionsSummary`                                                                                | [operations.GetTopicActionsSummary](../../../sdk/models/operations/gettopicactionssummary.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `archetype`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `archived`                                                                                      | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `bookmarked`                                                                                    | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `bookmarks`                                                                                     | *any*[]                                                                                         | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `categoryId`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `chunkSize`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `closed`                                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `currentPostNumber`                                                                             | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `deletedAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `deletedBy`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `details`                                                                                       | [operations.Details](../../../sdk/models/operations/details.md)                                 | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `draft`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `draftKey`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `draftSequence`                                                                                 | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `fancyTitle`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `featuredLink`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `hasDeleted`                                                                                    | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `hasSummary`                                                                                    | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `highestPostNumber`                                                                             | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `imageUrl`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `lastPostedAt`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `likeCount`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `messageBusLastId`                                                                              | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `participantCount`                                                                              | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `pinned`                                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `pinnedAt`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `pinnedGlobally`                                                                                | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `pinnedUntil`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `postStream`                                                                                    | [operations.PostStream](../../../sdk/models/operations/poststream.md)                           | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `postsCount`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `replyCount`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `showReadIndicator`                                                                             | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `slowModeEnabledUntil`                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `slowModeSeconds`                                                                               | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `slug`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `suggestedTopics`                                                                               | [operations.SuggestedTopics](../../../sdk/models/operations/suggestedtopics.md)[]               | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `summarizable`                                                                                  | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `tags`                                                                                          | *any*[]                                                                                         | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `tagsDescriptions`                                                                              | [operations.TagsDescriptions](../../../sdk/models/operations/tagsdescriptions.md)               | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `thumbnails`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `timelineLookup`                                                                                | *any*[]                                                                                         | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `title`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `topicTimer`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `unpinned`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `userId`                                                                                        | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `views`                                                                                         | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `visible`                                                                                       | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `wordCount`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |