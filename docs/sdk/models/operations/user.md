# User

## Example Usage

```typescript
import { User } from "@lukehagar/discoursejs/sdk/models/operations";

let value: User = {
    admin: false,
    allowedPmUsernames: ["<value>"],
    avatarTemplate: "<value>",
    badgeCount: 214880,
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
            groupId: 277628,
            notificationLevel: 186458,
            userId: 586784,
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
            defaultNotificationLevel: 807581,
            displayName: "Salvador67",
            flairBgColor: "<value>",
            flairColor: "<value>",
            flairUrl: "<value>",
            fullName: "Randall Cole",
            grantTrustLevel: "<value>",
            hasMessages: false,
            id: 704474,
            incomingEmail: "<value>",
            membersVisibilityLevel: 396060,
            membershipRequestTemplate: "<value>",
            mentionableLevel: 463150,
            messageableLevel: 565421,
            name: "<value>",
            primaryGroup: false,
            publicAdmission: false,
            publicExit: false,
            publishReadState: false,
            title: "<value>",
            userCount: 840429,
            visibilityLevel: 183280,
        },
    ],
    hasTitleBadges: false,
    id: 204865,
    ignored: false,
    ignoredUsernames: ["<value>"],
    invitedBy: "<value>",
    lastPostedAt: "<value>",
    lastSeenAt: "<value>",
    locale: "en",
    mailingListPostsPerDay: 164959,
    moderator: false,
    muted: false,
    mutedCategoryIds: ["<value>"],
    mutedTags: ["<value>"],
    mutedUsernames: ["<value>"],
    name: "<value>",
    pendingCount: 488056,
    postCount: 124833,
    primaryGroupId: "<value>",
    primaryGroupName: "<value>",
    profileViewCount: 355613,
    recentTimeRead: 722081,
    regularCategoryIds: ["<value>"],
    secondFactorEnabled: false,
    staged: false,
    systemAvatarTemplate: "<value>",
    systemAvatarUploadId: "<value>",
    timeRead: 940432,
    title: "<value>",
    trackedCategoryIds: ["<value>"],
    trackedTags: ["<value>"],
    trustLevel: 30452,
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
            id: 765326,
            isActive: false,
            location: "<value>",
            os: "<value>",
            seenAt: "<value>",
        },
    ],
    userNotificationSchedule: {
        day0EndTime: 746994,
        day0StartTime: 748664,
        day1EndTime: 92596,
        day1StartTime: 903720,
        day2EndTime: 217450,
        day2StartTime: 83422,
        day3EndTime: 749255,
        day3StartTime: 552193,
        day4EndTime: 731694,
        day4StartTime: 584476,
        day5EndTime: 45614,
        day5StartTime: 961937,
        day6EndTime: 209157,
        day6StartTime: 292147,
        enabled: false,
    },
    userOption: {
        allowPrivateMessages: false,
        autoTrackTopicsAfterMsecs: 286915,
        automaticallyUnpinTopics: false,
        colorSchemeId: "<value>",
        darkSchemeId: "<value>",
        digestAfterMinutes: 240829,
        dynamicFavicon: false,
        emailDigests: false,
        emailInReplyTo: false,
        emailLevel: 677263,
        emailMessagesLevel: 100294,
        emailPreviousReplies: 63038,
        enableAllowedPmUsers: false,
        enableDefer: false,
        enableQuoting: false,
        externalLinksInNewTab: false,
        hideProfileAndPresence: false,
        homepageId: "<value>",
        includeTl0InDigests: false,
        likeNotificationFrequency: 16429,
        mailingListMode: false,
        mailingListModeFrequency: 555649,
        newTopicDurationMinutes: 929530,
        notificationLevelWhenReplying: 9240,
        skipNewUserTips: false,
        textSize: "<value>",
        textSizeSeq: 669917,
        themeIds: ["<value>"],
        themeKeySeq: 833038,
        timezone: "Asia/Kuala_Lumpur",
        titleCountMode: "<value>",
        userId: 984330,
    },
    username: "Earline.Prosacco",
    watchedCategoryIds: ["<value>"],
    watchedFirstPostCategoryIds: ["<value>"],
    watchedTags: ["<value>"],
    watchingFirstPostTags: ["<value>"],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `admin`                                                                                           | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `allowedPmUsernames`                                                                              | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `avatarTemplate`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `badgeCount`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canBeDeleted`                                                                                    | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canChangeBio`                                                                                    | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canChangeLocation`                                                                               | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canChangeTrackingPreferences`                                                                    | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canChangeWebsite`                                                                                | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canDeleteAllPosts`                                                                               | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canEdit`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canEditEmail`                                                                                    | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canEditName`                                                                                     | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canEditUsername`                                                                                 | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canIgnoreUser`                                                                                   | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canMuteUser`                                                                                     | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canSendPrivateMessageToUser`                                                                     | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canSendPrivateMessages`                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canUploadProfileHeader`                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `canUploadUserCardBackground`                                                                     | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `createdAt`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `customFields`                                                                                    | [operations.GetUserCustomFields](../../../sdk/models/operations/getusercustomfields.md)           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `displaySidebarTags`                                                                              | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `featuredTopic`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `featuredUserBadgeIds`                                                                            | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `flairBgColor`                                                                                    | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `flairColor`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `flairGroupId`                                                                                    | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `flairName`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `flairUrl`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `groupUsers`                                                                                      | [operations.GroupUsers](../../../sdk/models/operations/groupusers.md)[]                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `groups`                                                                                          | [operations.GetUserGroups](../../../sdk/models/operations/getusergroups.md)[]                     | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `hasTitleBadges`                                                                                  | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ignored`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ignoredUsernames`                                                                                | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `invitedBy`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `lastPostedAt`                                                                                    | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `lastSeenAt`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `locale`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `mailingListPostsPerDay`                                                                          | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `moderator`                                                                                       | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `muted`                                                                                           | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `mutedCategoryIds`                                                                                | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `mutedTags`                                                                                       | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `mutedUsernames`                                                                                  | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `pendingCount`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `pendingPostsCount`                                                                               | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `postCount`                                                                                       | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `primaryGroupId`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `primaryGroupName`                                                                                | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `profileViewCount`                                                                                | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `recentTimeRead`                                                                                  | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `regularCategoryIds`                                                                              | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `secondFactorBackupEnabled`                                                                       | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `secondFactorEnabled`                                                                             | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `sidebarCategoryIds`                                                                              | *any*[]                                                                                           | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `sidebarTags`                                                                                     | *any*[]                                                                                           | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `staged`                                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `systemAvatarTemplate`                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `systemAvatarUploadId`                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `timeRead`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `title`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `trackedCategoryIds`                                                                              | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `trackedTags`                                                                                     | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `trustLevel`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `uploadedAvatarId`                                                                                | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `useLogoSmallAsAvatar`                                                                            | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `userApiKeys`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `userAuthTokens`                                                                                  | [operations.UserAuthTokens](../../../sdk/models/operations/userauthtokens.md)[]                   | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `userFields`                                                                                      | [operations.UserFields](../../../sdk/models/operations/userfields.md)                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `userNotificationSchedule`                                                                        | [operations.UserNotificationSchedule](../../../sdk/models/operations/usernotificationschedule.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `userOption`                                                                                      | [operations.UserOption](../../../sdk/models/operations/useroption.md)                             | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `username`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `watchedCategoryIds`                                                                              | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `watchedFirstPostCategoryIds`                                                                     | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `watchedTags`                                                                                     | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `watchingFirstPostTags`                                                                           | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |