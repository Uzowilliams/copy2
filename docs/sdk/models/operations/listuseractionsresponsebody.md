# ListUserActionsResponseBody

response

## Example Usage

```typescript
import { ListUserActionsResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListUserActionsResponseBody = {
  userActions: [
    {
      actingAvatarTemplate: "<value>",
      actingName: "<value>",
      actingUserId: 604118,
      actingUsername: "<value>",
      actionCode: "<value>",
      actionType: 100032,
      archived: false,
      avatarTemplate: "<value>",
      categoryId: 382808,
      closed: false,
      createdAt: "<value>",
      deleted: false,
      excerpt: "<value>",
      hidden: "<value>",
      name: "<value>",
      postId: "<value>",
      postNumber: 960257,
      postType: "<value>",
      slug: "<value>",
      targetName: "<value>",
      targetUserId: 895386,
      targetUsername: "<value>",
      title: "<value>",
      topicId: 72434,
      userId: 967795,
      username: "Aileen.Lockman14",
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `userActions`                                                             | [operations.UserActions](../../../sdk/models/operations/useractions.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |