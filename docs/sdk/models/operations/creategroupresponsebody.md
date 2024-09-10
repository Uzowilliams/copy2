# CreateGroupResponseBody

group created

## Example Usage

```typescript
import { CreateGroupResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateGroupResponseBody = {
  basicGroup: {
    allowMembershipRequests: false,
    automatic: false,
    bioCooked: "<value>",
    bioExcerpt: "<value>",
    bioRaw: "<value>",
    canAdminGroup: false,
    canSeeMembers: false,
    defaultNotificationLevel: 778346,
    flairBgColor: "<value>",
    flairColor: "<value>",
    flairUrl: "<value>",
    fullName: "Mandy Hills",
    grantTrustLevel: "<value>",
    hasMessages: false,
    id: 13571,
    incomingEmail: "<value>",
    membersVisibilityLevel: 97101,
    membershipRequestTemplate: "<value>",
    mentionableLevel: 622846,
    messageableLevel: 837945,
    name: "<value>",
    primaryGroup: false,
    publicAdmission: false,
    publicExit: false,
    publishReadState: false,
    title: "<value>",
    userCount: 673660,
    visibilityLevel: 96098,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `basicGroup`                                                          | [operations.BasicGroup](../../../sdk/models/operations/basicgroup.md) | :heavy_check_mark:                                                    | N/A                                                                   |