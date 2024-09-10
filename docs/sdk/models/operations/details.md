# Details

## Example Usage

```typescript
import { Details } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Details = {
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
  canRemoveSelfId: 260904,
  canReplyAsNewTopic: false,
  canReviewTopic: false,
  canSplitMergeTopic: false,
  canToggleTopicVisibility: false,
  createdBy: {
    avatarTemplate: "<value>",
    id: 131903,
    name: "<value>",
    username: "Jerrell_Dooley27",
  },
  lastPoster: {
    avatarTemplate: "<value>",
    id: 97493,
    name: "<value>",
    username: "Judge39",
  },
  notificationLevel: 159845,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `canArchiveTopic`                                                           | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canCloseTopic`                                                             | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canConvertTopic`                                                           | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canCreatePost`                                                             | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canDelete`                                                                 | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canEdit`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canEditStaffNotes`                                                         | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canFlagTopic`                                                              | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `canInviteTo`                                                               | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `canInviteViaEmail`                                                         | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `canModerateCategory`                                                       | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canMovePosts`                                                              | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canPinUnpinTopic`                                                          | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canRemoveAllowedUsers`                                                     | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canRemoveSelfId`                                                           | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `canReplyAsNewTopic`                                                        | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canReviewTopic`                                                            | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canSplitMergeTopic`                                                        | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `canToggleTopicVisibility`                                                  | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `createdBy`                                                                 | [operations.CreatedBy](../../../sdk/models/operations/createdby.md)         | :heavy_check_mark:                                                          | N/A                                                                         |
| `lastPoster`                                                                | [operations.LastPoster](../../../sdk/models/operations/lastposter.md)       | :heavy_check_mark:                                                          | N/A                                                                         |
| `notificationLevel`                                                         | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `participants`                                                              | [operations.Participants](../../../sdk/models/operations/participants.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |