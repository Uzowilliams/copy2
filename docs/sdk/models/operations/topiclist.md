# TopicList

## Example Usage

```typescript
import { TopicList } from "@lukehagar/discoursejs/sdk/models/operations";

let value: TopicList = {
    canCreateTopic: false,
    perPage: 281153,
    topics: [
        {
            archetype: "<value>",
            archived: false,
            bookmarked: "<value>",
            bumped: false,
            bumpedAt: "<value>",
            categoryId: 321043,
            closed: false,
            createdAt: "<value>",
            excerpt: "<value>",
            fancyTitle: "<value>",
            featuredLink: "<value>",
            hasSummary: false,
            highestPostNumber: 713927,
            id: 29950,
            imageUrl: "<value>",
            lastPostedAt: "<value>",
            lastPosterUsername: "<value>",
            likeCount: 561577,
            liked: "<value>",
            pinned: false,
            pinnedGlobally: false,
            posters: [
                {
                    description: "Re-engineered foreground array",
                    extras: "<value>",
                    primaryGroupId: "<value>",
                    userId: 530860,
                },
            ],
            postsCount: 606308,
            replyCount: 85233,
            slug: "<value>",
            title: "<value>",
            unpinned: "<value>",
            unseen: false,
            views: 703218,
            visible: false,
        },
    ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `canCreateTopic`                                                | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             |
| `perPage`                                                       | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `topTags`                                                       | *any*[]                                                         | :heavy_minus_sign:                                              | N/A                                                             |
| `topics`                                                        | [operations.Topics](../../../sdk/models/operations/topics.md)[] | :heavy_check_mark:                                              | N/A                                                             |