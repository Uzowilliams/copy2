# GetPostResponseBody

single post

## Example Usage

```typescript
import { GetPostResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetPostResponseBody = {
  actionsSummary: [
    {
      id: 264333,
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
  editReason: "<value>",
  flairBgColor: "<value>",
  flairColor: "<value>",
  flairName: "<value>",
  flairUrl: "<value>",
  hidden: false,
  id: 208253,
  incomingLinkCount: 348357,
  moderator: false,
  postNumber: 932394,
  postType: 88248,
  primaryGroupName: "<value>",
  quoteCount: 215398,
  raw: "<value>",
  readersCount: 602229,
  reads: 858338,
  replyCount: 714376,
  replyToPostNumber: "<value>",
  reviewableId: "<value>",
  reviewableScoreCount: 802894,
  reviewableScorePendingCount: 157222,
  score: 159146,
  staff: false,
  topicId: 342137,
  topicSlug: "<value>",
  trustLevel: 605712,
  updatedAt: "<value>",
  userDeleted: false,
  userId: 727250,
  userTitle: "<value>",
  username: "Bettie_Ondricka63",
  version: 554603,
  wiki: false,
  yours: false,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `additionalProperties`                                                          | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `actionsSummary`                                                                | [operations.ActionsSummary](../../../sdk/models/operations/actionssummary.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `admin`                                                                         | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `avatarTemplate`                                                                | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `bookmarked`                                                                    | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `canDelete`                                                                     | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `canEdit`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `canRecover`                                                                    | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `canSeeHiddenPost`                                                              | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `canViewEditHistory`                                                            | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `canWiki`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `cooked`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `createdAt`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `deletedAt`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `displayUsername`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `editReason`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `flairBgColor`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `flairColor`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `flairGroupId`                                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `flairName`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `flairUrl`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `hidden`                                                                        | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `id`                                                                            | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `incomingLinkCount`                                                             | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `mentionedUsers`                                                                | *any*[]                                                                         | :heavy_minus_sign:                                                              | N/A                                                                             |
| `moderator`                                                                     | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `postNumber`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `postType`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `primaryGroupName`                                                              | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `quoteCount`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `raw`                                                                           | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `readersCount`                                                                  | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `reads`                                                                         | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `replyCount`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `replyToPostNumber`                                                             | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `reviewableId`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `reviewableScoreCount`                                                          | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `reviewableScorePendingCount`                                                   | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `score`                                                                         | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `staff`                                                                         | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `topicId`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `topicSlug`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `trustLevel`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `updatedAt`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `userDeleted`                                                                   | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `userId`                                                                        | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `userTitle`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `username`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `version`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `wiki`                                                                          | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `yours`                                                                         | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |