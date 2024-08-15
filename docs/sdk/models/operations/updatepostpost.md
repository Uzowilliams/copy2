# UpdatePostPost

## Example Usage

```typescript
import { UpdatePostPost } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdatePostPost = {
    actionsSummary: [
        {
            canAct: false,
            id: 737279,
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
    draftSequence: 872303,
    editReason: "<value>",
    flairBgColor: "<value>",
    flairColor: "<value>",
    flairName: "<value>",
    flairUrl: "<value>",
    hidden: false,
    id: 5152,
    incomingLinkCount: 156653,
    moderator: false,
    postNumber: 694158,
    postType: 684126,
    primaryGroupName: "<value>",
    quoteCount: 919508,
    raw: "<value>",
    readersCount: 34070,
    reads: 710456,
    replyCount: 885208,
    replyToPostNumber: "<value>",
    reviewableId: "<value>",
    reviewableScoreCount: 177005,
    reviewableScorePendingCount: 844854,
    score: 483518,
    staff: false,
    topicId: 510128,
    topicSlug: "<value>",
    trustLevel: 140316,
    updatedAt: "<value>",
    userDeleted: false,
    userId: 127688,
    userTitle: "<value>",
    username: "Florine.Mraz92",
    version: 630871,
    wiki: false,
    yours: false,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `actionsSummary`                                                                                    | [operations.UpdatePostActionsSummary](../../../sdk/models/operations/updatepostactionssummary.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `admin`                                                                                             | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `avatarTemplate`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `bookmarked`                                                                                        | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canDelete`                                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canEdit`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canRecover`                                                                                        | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canSeeHiddenPost`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `canViewEditHistory`                                                                                | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canWiki`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `cooked`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `deletedAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `displayUsername`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `draftSequence`                                                                                     | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `editReason`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `flairBgColor`                                                                                      | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `flairColor`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `flairGroupId`                                                                                      | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `flairName`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `flairUrl`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `hidden`                                                                                            | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `incomingLinkCount`                                                                                 | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `mentionedUsers`                                                                                    | *any*[]                                                                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `moderator`                                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `postNumber`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `postType`                                                                                          | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `primaryGroupName`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `quoteCount`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `raw`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `readersCount`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `reads`                                                                                             | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `replyCount`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `replyToPostNumber`                                                                                 | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `reviewableId`                                                                                      | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `reviewableScoreCount`                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `reviewableScorePendingCount`                                                                       | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `score`                                                                                             | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `staff`                                                                                             | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicId`                                                                                           | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicSlug`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `trustLevel`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userDeleted`                                                                                       | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userId`                                                                                            | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userTitle`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `username`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `version`                                                                                           | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `wiki`                                                                                              | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `yours`                                                                                             | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |