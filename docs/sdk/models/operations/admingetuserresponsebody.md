# AdminGetUserResponseBody

response

## Example Usage

```typescript
import { AdminGetUserResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: AdminGetUserResponseBody = {
    active: false,
    admin: false,
    apiKeyCount: 99569,
    approvedBy: {
        avatarTemplate: "<value>",
        id: 919483,
        name: "<value>",
        username: "Felix_Ratke",
    },
    avatarTemplate: "<value>",
    badgeCount: 841140,
    bounceScore: 149448,
    canActivate: false,
    canBeAnonymized: false,
    canBeDeleted: false,
    canBeMerged: false,
    canDeactivate: false,
    canDeleteAllPosts: false,
    canDeleteSsoRecord: false,
    canDisableSecondFactor: false,
    canGrantAdmin: false,
    canGrantModeration: false,
    canImpersonate: false,
    canRevokeAdmin: false,
    canRevokeModeration: false,
    canSendActivationEmail: false,
    canViewActionLogs: false,
    createdAt: "<value>",
    createdAtAge: 9046.48,
    daysVisited: 868126,
    externalIds: {},
    flagsGivenCount: 37559,
    flagsReceivedCount: 162493,
    fullSuspendReason: "<value>",
    groups: [
        {
            allowMembershipRequests: false,
            automatic: false,
            bioCooked: "<value>",
            bioExcerpt: "<value>",
            bioRaw: "<value>",
            canAdminGroup: false,
            canSeeMembers: false,
            defaultNotificationLevel: 508315,
            displayName: "Levi77",
            flairBgColor: "<value>",
            flairColor: "<value>",
            flairUrl: "<value>",
            fullName: "Ervin Schoen",
            grantTrustLevel: "<value>",
            hasMessages: false,
            id: 139972,
            incomingEmail: "<value>",
            membersVisibilityLevel: 407183,
            membershipRequestTemplate: "<value>",
            mentionableLevel: 33222,
            messageableLevel: 69167,
            name: "<value>",
            primaryGroup: false,
            publicAdmission: false,
            publicExit: false,
            publishReadState: false,
            title: "<value>",
            userCount: 982575,
            visibilityLevel: 697429,
        },
    ],
    id: 373291,
    ipAddress: "116.107.184.12",
    lastEmailedAge: 8663.83,
    lastEmailedAt: "<value>",
    lastSeenAge: 3654.96,
    lastSeenAt: "<value>",
    likeCount: 975522,
    likeGivenCount: 16627,
    manualLockedTrustLevel: "<value>",
    moderator: false,
    name: "<value>",
    postCount: 855804,
    postsReadCount: 230742,
    primaryGroupId: "<value>",
    privateTopicsCount: 11714,
    registrationIpAddress: "<value>",
    resetBounceScoreAfter: "<value>",
    silenceReason: "<value>",
    silencedBy: "<value>",
    singleSignOnRecord: "<value>",
    staged: false,
    suspendedBy: "<value>",
    timeRead: 764912,
    title: "<value>",
    topicCount: 359978,
    topicsEntered: 944124,
    trustLevel: 729991,
    username: "Nelson_DAmore",
    warningsReceivedCount: 489549,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `active`                                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `admin`                                                                                         | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `apiKeyCount`                                                                                   | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `approvedBy`                                                                                    | [operations.ApprovedBy](../../../sdk/models/operations/approvedby.md)                           | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `associatedAccounts`                                                                            | *any*[]                                                                                         | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `avatarTemplate`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `badgeCount`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `bounceScore`                                                                                   | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canActivate`                                                                                   | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canBeAnonymized`                                                                               | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canBeDeleted`                                                                                  | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canBeMerged`                                                                                   | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canDeactivate`                                                                                 | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canDeleteAllPosts`                                                                             | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canDeleteSsoRecord`                                                                            | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canDisableSecondFactor`                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canGrantAdmin`                                                                                 | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canGrantModeration`                                                                            | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canImpersonate`                                                                                | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canRevokeAdmin`                                                                                | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canRevokeModeration`                                                                           | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canSendActivationEmail`                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `canViewActionLogs`                                                                             | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAtAge`                                                                                  | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `daysVisited`                                                                                   | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `externalIds`                                                                                   | [operations.AdminGetUserExternalIds](../../../sdk/models/operations/admingetuserexternalids.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `flagsGivenCount`                                                                               | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `flagsReceivedCount`                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `fullSuspendReason`                                                                             | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `groups`                                                                                        | [operations.AdminGetUserGroups](../../../sdk/models/operations/admingetusergroups.md)[]         | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `ipAddress`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `lastEmailedAge`                                                                                | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `lastEmailedAt`                                                                                 | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `lastSeenAge`                                                                                   | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `lastSeenAt`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `likeCount`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `likeGivenCount`                                                                                | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `manualLockedTrustLevel`                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `moderator`                                                                                     | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `nextPenalty`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `penaltyCounts`                                                                                 | [operations.PenaltyCounts](../../../sdk/models/operations/penaltycounts.md)                     | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `postCount`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `postEditsCount`                                                                                | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `postsReadCount`                                                                                | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `primaryGroupId`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `privateTopicsCount`                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `registrationIpAddress`                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `resetBounceScoreAfter`                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `silenceReason`                                                                                 | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `silencedBy`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `singleSignOnRecord`                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `staged`                                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `suspendedBy`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `timeRead`                                                                                      | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `title`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `tl3Requirements`                                                                               | [operations.Tl3Requirements](../../../sdk/models/operations/tl3requirements.md)                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `topicCount`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `topicsEntered`                                                                                 | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `trustLevel`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `username`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `warningsReceivedCount`                                                                         | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |