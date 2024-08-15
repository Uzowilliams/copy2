# Posts

## Example Usage

```typescript
import { Posts } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Posts = {
    actionsSummary: [
        {
            canAct: false,
            id: 608989,
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
    id: 178580,
    incomingLinkCount: 579011,
    linkCounts: [
        {
            clicks: 612867,
            internal: false,
            reflection: false,
            title: "<value>",
            url: "http://bogus-prefix.org",
        },
    ],
    moderator: false,
    name: "<value>",
    postNumber: 976802,
    postType: 719620,
    primaryGroupName: "<value>",
    quoteCount: 608593,
    read: false,
    readersCount: 966390,
    reads: 328379,
    replyCount: 507636,
    replyToPostNumber: "<value>",
    reviewableId: 802692,
    reviewableScoreCount: 300403,
    reviewableScorePendingCount: 836364,
    score: 549501,
    staff: false,
    topicId: 415280,
    topicSlug: "<value>",
    trustLevel: 930819,
    updatedAt: "<value>",
    userDeleted: false,
    userId: 415608,
    userTitle: "<value>",
    username: "Jovan72",
    version: 877399,
    wiki: false,
    yours: false,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `actionsSummary`                                                                                            | [operations.GetTopicTopicsActionsSummary](../../../sdk/models/operations/gettopictopicsactionssummary.md)[] | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `admin`                                                                                                     | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `avatarTemplate`                                                                                            | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `bookmarked`                                                                                                | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `canDelete`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `canEdit`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `canRecover`                                                                                                | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `canSeeHiddenPost`                                                                                          | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `canViewEditHistory`                                                                                        | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `canWiki`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `cooked`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `deletedAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `displayUsername`                                                                                           | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `editReason`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `flairBgColor`                                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `flairColor`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `flairName`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `flairUrl`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `hidden`                                                                                                    | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `incomingLinkCount`                                                                                         | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `linkCounts`                                                                                                | [operations.LinkCounts](../../../sdk/models/operations/linkcounts.md)[]                                     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `moderator`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `postNumber`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `postType`                                                                                                  | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `primaryGroupName`                                                                                          | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `quoteCount`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `read`                                                                                                      | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `readersCount`                                                                                              | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `reads`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `replyCount`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `replyToPostNumber`                                                                                         | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `reviewableId`                                                                                              | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `reviewableScoreCount`                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `reviewableScorePendingCount`                                                                               | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `score`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `staff`                                                                                                     | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `topicId`                                                                                                   | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `topicSlug`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `trustLevel`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `updatedAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `userDeleted`                                                                                               | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `userId`                                                                                                    | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `userTitle`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `username`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `version`                                                                                                   | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `wiki`                                                                                                      | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `yours`                                                                                                     | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |