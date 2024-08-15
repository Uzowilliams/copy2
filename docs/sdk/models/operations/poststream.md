# PostStream

## Example Usage

```typescript
import { PostStream } from "@lukehagar/discoursejs/sdk/models/operations";

let value: PostStream = {
    posts: [
        {
            actionsSummary: [
                {
                    canAct: false,
                    id: 32901,
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
            id: 371919,
            incomingLinkCount: 425946,
            linkCounts: [
                {
                    clicks: 1383,
                    internal: false,
                    reflection: false,
                    title: "<value>",
                    url: "http://evil-wheat.biz",
                },
            ],
            moderator: false,
            name: "<value>",
            postNumber: 575213,
            postType: 858778,
            primaryGroupName: "<value>",
            quoteCount: 643678,
            read: false,
            readersCount: 458503,
            reads: 364463,
            replyCount: 444587,
            replyToPostNumber: "<value>",
            reviewableId: 667715,
            reviewableScoreCount: 336102,
            reviewableScorePendingCount: 571844,
            score: 880679,
            staff: false,
            topicId: 774684,
            topicSlug: "<value>",
            trustLevel: 945027,
            updatedAt: "<value>",
            userDeleted: false,
            userId: 900103,
            userTitle: "<value>",
            username: "Zachariah_Jakubowski",
            version: 966148,
            wiki: false,
            yours: false,
        },
    ],
    stream: ["<value>"],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `posts`                                                       | [operations.Posts](../../../sdk/models/operations/posts.md)[] | :heavy_check_mark:                                            | N/A                                                           |
| `stream`                                                      | *any*[]                                                       | :heavy_check_mark:                                            | N/A                                                           |