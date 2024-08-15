# GetUserExternalIdUser

## Example Usage

```typescript
import { GetUserExternalIdUser } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetUserExternalIdUser = {
    admin: false,
    allowedPmUsernames: ["<value>"],
    avatarTemplate: "<value>",
    badgeCount: 852635,
    canBeDeleted: false,
    canChangeBio: false,
    canChangeLocation: false,
    canChangeTrackingPreferences: false,
    canChangeWebsite: false,
    canDeleteAllPosts: false,
    canEdit: false,
    canEditEmail: false,
    canEditName: false,
    canEditUsername: false,
    canIgnoreUser: false,
    canMuteUser: false,
    canSendPrivateMessageToUser: false,
    canSendPrivateMessages: false,
    canUploadProfileHeader: false,
    canUploadUserCardBackground: false,
    createdAt: "<value>",
    customFields: {},
    featuredTopic: "<value>",
    featuredUserBadgeIds: ["<value>"],
    flairBgColor: "<value>",
    flairColor: "<value>",
    flairGroupId: "<value>",
    flairName: "<value>",
    flairUrl: "<value>",
    groupUsers: [
        {
            groupId: 283519,
            notificationLevel: 433439,
            userId: 379927,
        },
    ],
    groups: [
        {
            allowMembershipRequests: false,
            automatic: false,
            bioCooked: "<value>",
            bioExcerpt: "<value>",
            bioRaw: "<value>",
            canAdminGroup: false,
            canSeeMembers: false,
            defaultNotificationLevel: 826871,
            displayName: "Chet.Lang5",
            flairBgColor: "<value>",
            flairColor: "<value>",
            flairUrl: "<value>",
            fullName: "Rickey DuBuque",
            grantTrustLevel: "<value>",
            hasMessages: false,
            id: 777408,
            incomingEmail: "<value>",
            membersVisibilityLevel: 681359,
            membershipRequestTemplate: "<value>",
            mentionableLevel: 259422,
            messageableLevel: 178367,
            name: "<value>",
            primaryGroup: false,
            publicAdmission: false,
            publicExit: false,
            publishReadState: false,
            title: "<value>",
            userCount: 373813,
            visibilityLevel: 69859,
        },
    ],
    hasTitleBadges: false,
    id: 587600,
    ignored: false,
    ignoredUsernames: ["<value>"],
    invitedBy: "<value>",
    lastPostedAt: "<value>",
    lastSeenAt: "<value>",
    locale: "af_ZA",
    mailingListPostsPerDay: 272822,
    moderator: false,
    muted: false,
    mutedCategoryIds: ["<value>"],
    mutedTags: ["<value>"],
    mutedUsernames: ["<value>"],
    name: "<value>",
    pendingCount: 892050,
    postCount: 370853,
    primaryGroupId: "<value>",
    primaryGroupName: "<value>",
    profileViewCount: 133465,
    recentTimeRead: 197054,
    regularCategoryIds: ["<value>"],
    secondFactorEnabled: false,
    staged: false,
    systemAvatarTemplate: "<value>",
    systemAvatarUploadId: "<value>",
    timeRead: 779192,
    title: "<value>",
    trackedCategoryIds: ["<value>"],
    trackedTags: ["<value>"],
    trustLevel: 459856,
    uploadedAvatarId: "<value>",
    useLogoSmallAsAvatar: false,
    userApiKeys: "<value>",
    userAuthTokens: [
        {
            browser: "<value>",
            clientIp: "<value>",
            createdAt: "<value>",
            device: "<value>",
            icon: "<value>",
            id: 925164,
            isActive: false,
            location: "<value>",
            os: "<value>",
            seenAt: "<value>",
        },
    ],
    userNotificationSchedule: {
        day0EndTime: 44612,
        day0StartTime: 715179,
        day1EndTime: 799796,
        day1StartTime: 490819,
        day2EndTime: 76956,
        day2StartTime: 469498,
        day3EndTime: 518835,
        day3StartTime: 882710,
        day4EndTime: 306810,
        day4StartTime: 488410,
        day5EndTime: 577543,
        day5StartTime: 414567,
        day6EndTime: 959434,
        day6StartTime: 174112,
        enabled: false,
    },
    userOption: {
        allowPrivateMessages: false,
        autoTrackTopicsAfterMsecs: 645570,
        automaticallyUnpinTopics: false,
        colorSchemeId: "<value>",
        darkSchemeId: "<value>",
        digestAfterMinutes: 475289,
        dynamicFavicon: false,
        emailDigests: false,
        emailInReplyTo: false,
        emailLevel: 35362,
        emailMessagesLevel: 783648,
        emailPreviousReplies: 430402,
        enableAllowedPmUsers: false,
        enableDefer: false,
        enableQuoting: false,
        externalLinksInNewTab: false,
        hideProfileAndPresence: false,
        homepageId: "<value>",
        includeTl0InDigests: false,
        likeNotificationFrequency: 556429,
        mailingListMode: false,
        mailingListModeFrequency: 510017,
        newTopicDurationMinutes: 159867,
        notificationLevelWhenReplying: 536178,
        skipNewUserTips: false,
        textSize: "<value>",
        textSizeSeq: 143829,
        themeIds: ["<value>"],
        themeKeySeq: 681393,
        timezone: "Asia/Yekaterinburg",
        titleCountMode: "<value>",
        userId: 277596,
    },
    username: "Kameron39",
    watchedCategoryIds: ["<value>"],
    watchedFirstPostCategoryIds: ["<value>"],
    watchedTags: ["<value>"],
    watchingFirstPostTags: ["<value>"],
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `admin`                                                                                                                             | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `allowedPmUsernames`                                                                                                                | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `avatarTemplate`                                                                                                                    | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `badgeCount`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canBeDeleted`                                                                                                                      | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canChangeBio`                                                                                                                      | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canChangeLocation`                                                                                                                 | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canChangeTrackingPreferences`                                                                                                      | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canChangeWebsite`                                                                                                                  | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canDeleteAllPosts`                                                                                                                 | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canEdit`                                                                                                                           | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canEditEmail`                                                                                                                      | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canEditName`                                                                                                                       | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canEditUsername`                                                                                                                   | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canIgnoreUser`                                                                                                                     | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canMuteUser`                                                                                                                       | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canSendPrivateMessageToUser`                                                                                                       | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canSendPrivateMessages`                                                                                                            | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canUploadProfileHeader`                                                                                                            | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `canUploadUserCardBackground`                                                                                                       | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `createdAt`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `customFields`                                                                                                                      | [operations.GetUserExternalIdCustomFields](../../../sdk/models/operations/getuserexternalidcustomfields.md)                         | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `displaySidebarTags`                                                                                                                | *boolean*                                                                                                                           | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `featuredTopic`                                                                                                                     | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `featuredUserBadgeIds`                                                                                                              | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `flairBgColor`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `flairColor`                                                                                                                        | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `flairGroupId`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `flairName`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `flairUrl`                                                                                                                          | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `groupUsers`                                                                                                                        | [operations.GetUserExternalIdGroupUsers](../../../sdk/models/operations/getuserexternalidgroupusers.md)[]                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `groups`                                                                                                                            | [operations.GetUserExternalIdGroups](../../../sdk/models/operations/getuserexternalidgroups.md)[]                                   | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `hasTitleBadges`                                                                                                                    | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `id`                                                                                                                                | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `ignored`                                                                                                                           | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `ignoredUsernames`                                                                                                                  | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `invitedBy`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `lastPostedAt`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `lastSeenAt`                                                                                                                        | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `locale`                                                                                                                            | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `mailingListPostsPerDay`                                                                                                            | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `moderator`                                                                                                                         | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `muted`                                                                                                                             | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `mutedCategoryIds`                                                                                                                  | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `mutedTags`                                                                                                                         | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `mutedUsernames`                                                                                                                    | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `name`                                                                                                                              | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `pendingCount`                                                                                                                      | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `pendingPostsCount`                                                                                                                 | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `postCount`                                                                                                                         | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `primaryGroupId`                                                                                                                    | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `primaryGroupName`                                                                                                                  | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `profileViewCount`                                                                                                                  | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `recentTimeRead`                                                                                                                    | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `regularCategoryIds`                                                                                                                | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `secondFactorBackupEnabled`                                                                                                         | *boolean*                                                                                                                           | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `secondFactorEnabled`                                                                                                               | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `sidebarCategoryIds`                                                                                                                | *any*[]                                                                                                                             | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `sidebarTags`                                                                                                                       | *any*[]                                                                                                                             | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `staged`                                                                                                                            | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `systemAvatarTemplate`                                                                                                              | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `systemAvatarUploadId`                                                                                                              | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `timeRead`                                                                                                                          | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `title`                                                                                                                             | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `trackedCategoryIds`                                                                                                                | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `trackedTags`                                                                                                                       | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `trustLevel`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `uploadedAvatarId`                                                                                                                  | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `useLogoSmallAsAvatar`                                                                                                              | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `userApiKeys`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `userAuthTokens`                                                                                                                    | [operations.GetUserExternalIdUserAuthTokens](../../../sdk/models/operations/getuserexternaliduserauthtokens.md)[]                   | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `userFields`                                                                                                                        | [operations.GetUserExternalIdUserFields](../../../sdk/models/operations/getuserexternaliduserfields.md)                             | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `userNotificationSchedule`                                                                                                          | [operations.GetUserExternalIdUserNotificationSchedule](../../../sdk/models/operations/getuserexternalidusernotificationschedule.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `userOption`                                                                                                                        | [operations.GetUserExternalIdUserOption](../../../sdk/models/operations/getuserexternaliduseroption.md)                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `username`                                                                                                                          | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `watchedCategoryIds`                                                                                                                | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `watchedFirstPostCategoryIds`                                                                                                       | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `watchedTags`                                                                                                                       | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `watchingFirstPostTags`                                                                                                             | *any*[]                                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |