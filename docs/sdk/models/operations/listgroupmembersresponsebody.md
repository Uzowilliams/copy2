# ListGroupMembersResponseBody

success response

## Example Usage

```typescript
import { ListGroupMembersResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListGroupMembersResponseBody = {
  members: [
    {
      addedAt: "<value>",
      avatarTemplate: "<value>",
      id: 842342,
      lastPostedAt: "<value>",
      lastSeenAt: "<value>",
      name: "<value>",
      timezone: "America/Indiana/Indianapolis",
      title: "<value>",
      username: "Luther.Rau26",
    },
  ],
  meta: {
    limit: 183191,
    offset: 397821,
    total: 586513,
  },
  owners: [
    {
      addedAt: "<value>",
      avatarTemplate: "<value>",
      id: 552822,
      lastPostedAt: "<value>",
      lastSeenAt: "<value>",
      name: "<value>",
      timezone: "Pacific/Honolulu",
      title: "<value>",
      username: "Casimir.Simonis",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `members`                                                         | [operations.Members](../../../sdk/models/operations/members.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `meta`                                                            | [operations.Meta](../../../sdk/models/operations/meta.md)         | :heavy_check_mark:                                                | N/A                                                               |
| `owners`                                                          | [operations.Owners](../../../sdk/models/operations/owners.md)[]   | :heavy_check_mark:                                                | N/A                                                               |