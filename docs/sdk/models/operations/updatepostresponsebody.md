# UpdatePostResponseBody

post updated

## Example Usage

```typescript
import { UpdatePostResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdatePostResponseBody = {
  post: {
    actionsSummary: [
      {
        canAct: false,
        id: 282837,
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
    draftSequence: 693746,
    editReason: "<value>",
    flairBgColor: "<value>",
    flairColor: "<value>",
    flairName: "<value>",
    flairUrl: "<value>",
    hidden: false,
    id: 339631,
    incomingLinkCount: 106255,
    moderator: false,
    postNumber: 600213,
    postType: 476946,
    primaryGroupName: "<value>",
    quoteCount: 963198,
    raw: "<value>",
    readersCount: 585593,
    reads: 147801,
    replyCount: 253625,
    replyToPostNumber: "<value>",
    reviewableId: "<value>",
    reviewableScoreCount: 256916,
    reviewableScorePendingCount: 201010,
    score: 873557,
    staff: false,
    topicId: 637856,
    topicSlug: "<value>",
    trustLevel: 491892,
    updatedAt: "<value>",
    userDeleted: false,
    userId: 760744,
    userTitle: "<value>",
    username: "Stanton70",
    version: 532669,
    wiki: false,
    yours: false,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `post`                                                                        | [operations.UpdatePostPost](../../../sdk/models/operations/updatepostpost.md) | :heavy_check_mark:                                                            | N/A                                                                           |