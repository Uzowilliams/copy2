# PostRepliesResponseBody

## Example Usage

```typescript
import { PostRepliesResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: PostRepliesResponseBody = {
  actionsSummary: [
    {
      canAct: false,
      id: 517137,
    },
  ],
  admin: false,
  avatarTemplate: "<value>",
  bookmarked: false,
  canDelete: false,
  canEdit: false,
  canRecover: false,
  canSeeHiddenPost: false,
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
  id: 292888,
  incomingLinkCount: 755106,
  moderator: false,
  name: "<value>",
  postNumber: 715053,
  postType: 32273,
  primaryGroupName: "<value>",
  quoteCount: 418109,
  readersCount: 456688,
  reads: 172951,
  replyCount: 824798,
  replyToPostNumber: 107210,
  replyToUser: {
    avatarTemplate: "<value>",
    username: "Marcella.Schumm",
  },
  reviewableId: "<value>",
  reviewableScoreCount: 588812,
  reviewableScorePendingCount: 882284,
  score: 896480,
  staff: false,
  topicId: 733289,
  topicSlug: "<value>",
  trustLevel: 575078,
  updatedAt: "<value>",
  userDeleted: false,
  userId: 409726,
  userTitle: "<value>",
  username: "Hellen_Hintz35",
  version: 889060,
  wiki: false,
  yours: false,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `actionsSummary`                                                                                      | [operations.PostRepliesActionsSummary](../../../sdk/models/operations/postrepliesactionssummary.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `admin`                                                                                               | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `avatarTemplate`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `bookmarked`                                                                                          | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `canDelete`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `canEdit`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `canRecover`                                                                                          | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `canSeeHiddenPost`                                                                                    | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `canViewEditHistory`                                                                                  | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `canWiki`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `cooked`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `createdAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `deletedAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `displayUsername`                                                                                     | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `editReason`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `flairBgColor`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `flairColor`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `flairGroupId`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `flairName`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `flairUrl`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `hidden`                                                                                              | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `incomingLinkCount`                                                                                   | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `moderator`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `postNumber`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `postType`                                                                                            | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `primaryGroupName`                                                                                    | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `quoteCount`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `readersCount`                                                                                        | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `reads`                                                                                               | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `replyCount`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `replyToPostNumber`                                                                                   | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `replyToUser`                                                                                         | [operations.ReplyToUser](../../../sdk/models/operations/replytouser.md)                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `reviewableId`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `reviewableScoreCount`                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `reviewableScorePendingCount`                                                                         | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `score`                                                                                               | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `staff`                                                                                               | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `topicId`                                                                                             | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `topicSlug`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `trustLevel`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `updatedAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `userDeleted`                                                                                         | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `userId`                                                                                              | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `userTitle`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `username`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `version`                                                                                             | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `wiki`                                                                                                | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `yours`                                                                                               | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |