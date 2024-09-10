# ListGroupsResponseBody

response

## Example Usage

```typescript
import { ListGroupsResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListGroupsResponseBody = {
  extras: {
    typeFilters: [
      "<value>",
    ],
  },
  groups: [
    {
      allowMembershipRequests: false,
      automatic: false,
      bioCooked: "<value>",
      bioExcerpt: "<value>",
      bioRaw: "<value>",
      canAdminGroup: false,
      canSeeMembers: false,
      defaultNotificationLevel: 638921,
      displayName: "Damien_Toy44",
      flairBgColor: "<value>",
      flairColor: "<value>",
      flairUrl: "<value>",
      fullName: "Angel Wolff II",
      grantTrustLevel: "<value>",
      hasMessages: false,
      id: 767024,
      incomingEmail: "<value>",
      membersVisibilityLevel: 813798,
      membershipRequestTemplate: "<value>",
      mentionableLevel: 411820,
      messageableLevel: 396506,
      name: "<value>",
      primaryGroup: false,
      publicAdmission: false,
      publicExit: false,
      publishReadState: false,
      title: "<value>",
      userCount: 675439,
      visibilityLevel: 881104,
    },
  ],
  loadMoreGroups: "<value>",
  totalRowsGroups: 249796,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `extras`                                                                          | [operations.ListGroupsExtras](../../../sdk/models/operations/listgroupsextras.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `groups`                                                                          | [operations.Groups](../../../sdk/models/operations/groups.md)[]                   | :heavy_check_mark:                                                                | N/A                                                                               |
| `loadMoreGroups`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `totalRowsGroups`                                                                 | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |