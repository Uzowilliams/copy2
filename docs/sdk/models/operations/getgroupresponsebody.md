# GetGroupResponseBody

success response

## Example Usage

```typescript
import { GetGroupResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetGroupResponseBody = {
    extras: {
        visibleGroupNames: ["<value>"],
    },
    group: {
        allowMembershipRequests: false,
        allowUnknownSenderTopicReplies: false,
        automatic: false,
        automaticMembershipEmailDomains: "<value>",
        bioCooked: "<value>",
        bioExcerpt: "<value>",
        bioRaw: "<value>",
        canAdminGroup: false,
        canSeeMembers: false,
        defaultNotificationLevel: 120196,
        emailPassword: "<value>",
        emailUsername: "<value>",
        flairBgColor: "<value>",
        flairColor: "<value>",
        flairUrl: "<value>",
        fullName: "Miss Valerie Kshlerin",
        grantTrustLevel: "<value>",
        hasMessages: false,
        id: 880476,
        imapLastError: "<value>",
        imapMailboxName: "<value>",
        imapMailboxes: ["<value>"],
        imapNewEmails: "<value>",
        imapOldEmails: "<value>",
        imapPort: "<value>",
        imapServer: "<value>",
        imapSsl: "<value>",
        incomingEmail: "<value>",
        isGroupOwnerDisplay: false,
        isGroupUser: false,
        membersVisibilityLevel: 414263,
        membershipRequestTemplate: "<value>",
        mentionable: false,
        mentionableLevel: 918236,
        messageCount: 64147,
        messageable: false,
        messageableLevel: 216822,
        mutedCategoryIds: ["<value>"],
        name: "<value>",
        primaryGroup: false,
        publicAdmission: false,
        publicExit: false,
        publishReadState: false,
        regularCategoryIds: ["<value>"],
        smtpPort: "<value>",
        smtpServer: "<value>",
        smtpSsl: "<value>",
        title: "<value>",
        trackingCategoryIds: ["<value>"],
        userCount: 692472,
        visibilityLevel: 565189,
        watchingCategoryIds: ["<value>"],
        watchingFirstPostCategoryIds: ["<value>"],
    },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `extras`                                                                    | [operations.Extras](../../../sdk/models/operations/extras.md)               | :heavy_check_mark:                                                          | N/A                                                                         |
| `group`                                                                     | [operations.GetGroupGroup](../../../sdk/models/operations/getgroupgroup.md) | :heavy_check_mark:                                                          | N/A                                                                         |