# ListCategoryTopicsResponseBody

success response

## Example Usage

```typescript
import { ListCategoryTopicsResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListCategoryTopicsResponseBody = {
    topicList: {
        canCreateTopic: false,
        perPage: 682119,
        topics: [
            {
                archetype: "<value>",
                archived: false,
                bookmarked: "<value>",
                bumped: false,
                bumpedAt: "<value>",
                categoryId: 867168,
                closed: false,
                createdAt: "<value>",
                excerpt: "<value>",
                fancyTitle: "<value>",
                featuredLink: "<value>",
                hasSummary: false,
                highestPostNumber: 891315,
                id: 29190,
                imageUrl: "<value>",
                lastPostedAt: "<value>",
                lastPosterUsername: "<value>",
                likeCount: 1207,
                liked: "<value>",
                pinned: false,
                pinnedGlobally: false,
                posters: [
                    {
                        description: "Operative user-facing groupware",
                        extras: "<value>",
                        primaryGroupId: "<value>",
                        userId: 958308,
                    },
                ],
                postsCount: 524184,
                replyCount: 796320,
                slug: "<value>",
                title: "<value>",
                unpinned: "<value>",
                unseen: false,
                views: 365100,
                visible: false,
            },
        ],
    },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `primaryGroups`                                                     | *any*[]                                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `topicList`                                                         | [operations.TopicList](../../../sdk/models/operations/topiclist.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `users`                                                             | [operations.Users](../../../sdk/models/operations/users.md)[]       | :heavy_minus_sign:                                                  | N/A                                                                 |