# GetUserIdentiyProviderExternalIdUser

## Example Usage

```typescript
import { GetUserIdentiyProviderExternalIdUser } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetUserIdentiyProviderExternalIdUser = {
  admin: false,
  allowedPmUsernames: [
    "<value>",
  ],
  avatarTemplate: "<value>",
  badgeCount: 221161,
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
  featuredUserBadgeIds: [
    "<value>",
  ],
  flairBgColor: "<value>",
  flairColor: "<value>",
  flairGroupId: "<value>",
  flairName: "<value>",
  flairUrl: "<value>",
  groupUsers: [
    {
      groupId: 580152,
      notificationLevel: 253191,
      userId: 771089,
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
      defaultNotificationLevel: 131055,
      displayName: "Garrison.Anderson",
      flairBgColor: "<value>",
      flairColor: "<value>",
      flairUrl: "<value>",
      fullName: "Wendell Frami",
      grantTrustLevel: "<value>",
      hasMessages: false,
      id: 990345,
      incomingEmail: "<value>",
      membersVisibilityLevel: 45659,
      membershipRequestTemplate: "<value>",
      mentionableLevel: 409054,
      messageableLevel: 310067,
      name: "<value>",
      primaryGroup: false,
      publicAdmission: false,
      publicExit: false,
      publishReadState: false,
      title: "<value>",
      userCount: 162954,
      visibilityLevel: 831520,
    },
  ],
  hasTitleBadges: false,
  id: 638762,
  ignored: false,
  ignoredUsernames: [
    "<value>",
  ],
  invitedBy: "<value>",
  lastPostedAt: "<value>",
  lastSeenAt: "<value>",
  locale: "ro",
  mailingListPostsPerDay: 490305,
  moderator: false,
  muted: false,
  mutedCategoryIds: [
    "<value>",
  ],
  mutedTags: [
    "<value>",
  ],
  mutedUsernames: [
    "<value>",
  ],
  name: "<value>",
  pendingCount: 640024,
  postCount: 989410,
  primaryGroupId: "<value>",
  primaryGroupName: "<value>",
  profileViewCount: 368102,
  recentTimeRead: 65304,
  regularCategoryIds: [
    "<value>",
  ],
  secondFactorEnabled: false,
  staged: false,
  systemAvatarTemplate: "<value>",
  systemAvatarUploadId: "<value>",
  timeRead: 312753,
  title: "<value>",
  trackedCategoryIds: [
    "<value>",
  ],
  trackedTags: [
    "<value>",
  ],
  trustLevel: 783235,
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
      id: 801836,
      isActive: false,
      location: "<value>",
      os: "<value>",
      seenAt: "<value>",
    },
  ],
  userNotificationSchedule: {
    day0EndTime: 288398,
    day0StartTime: 70447,
    day1EndTime: 241418,
    day1StartTime: 683573,
    day2EndTime: 662505,
    day2StartTime: 380729,
    day3EndTime: 246063,
    day3StartTime: 633931,
    day4EndTime: 665859,
    day4StartTime: 926880,
    day5EndTime: 517309,
    day5StartTime: 853940,
    day6EndTime: 424089,
    day6StartTime: 497678,
    enabled: false,
  },
  userOption: {
    allowPrivateMessages: false,
    autoTrackTopicsAfterMsecs: 554688,
    automaticallyUnpinTopics: false,
    colorSchemeId: "<value>",
    darkSchemeId: "<value>",
    digestAfterMinutes: 427834,
    dynamicFavicon: false,
    emailDigests: false,
    emailInReplyTo: false,
    emailLevel: 287051,
    emailMessagesLevel: 822560,
    emailPreviousReplies: 706575,
    enableAllowedPmUsers: false,
    enableDefer: false,
    enableQuoting: false,
    externalLinksInNewTab: false,
    hideProfileAndPresence: false,
    homepageId: "<value>",
    includeTl0InDigests: false,
    likeNotificationFrequency: 738227,
    mailingListMode: false,
    mailingListModeFrequency: 414857,
    newTopicDurationMinutes: 447144,
    notificationLevelWhenReplying: 360545,
    skipNewUserTips: false,
    textSize: "<value>",
    textSizeSeq: 968904,
    themeIds: [
      "<value>",
    ],
    themeKeySeq: 828657,
    timezone: "Europe/Zagreb",
    titleCountMode: "<value>",
    userId: 924967,
  },
  username: "Graham.Bayer44",
  watchedCategoryIds: [
    "<value>",
  ],
  watchedFirstPostCategoryIds: [
    "<value>",
  ],
  watchedTags: [
    "<value>",
  ],
  watchingFirstPostTags: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `admin`                                                                                                                                                           | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `allowedPmUsernames`                                                                                                                                              | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `avatarTemplate`                                                                                                                                                  | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `badgeCount`                                                                                                                                                      | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canBeDeleted`                                                                                                                                                    | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canChangeBio`                                                                                                                                                    | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canChangeLocation`                                                                                                                                               | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canChangeTrackingPreferences`                                                                                                                                    | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canChangeWebsite`                                                                                                                                                | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canDeleteAllPosts`                                                                                                                                               | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canEdit`                                                                                                                                                         | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canEditEmail`                                                                                                                                                    | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canEditName`                                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canEditUsername`                                                                                                                                                 | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canIgnoreUser`                                                                                                                                                   | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canMuteUser`                                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canSendPrivateMessageToUser`                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canSendPrivateMessages`                                                                                                                                          | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canUploadProfileHeader`                                                                                                                                          | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `canUploadUserCardBackground`                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `createdAt`                                                                                                                                                       | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `customFields`                                                                                                                                                    | [operations.GetUserIdentiyProviderExternalIdCustomFields](../../../sdk/models/operations/getuseridentiyproviderexternalidcustomfields.md)                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `displaySidebarTags`                                                                                                                                              | *boolean*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `featuredTopic`                                                                                                                                                   | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `featuredUserBadgeIds`                                                                                                                                            | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `flairBgColor`                                                                                                                                                    | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `flairColor`                                                                                                                                                      | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `flairGroupId`                                                                                                                                                    | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `flairName`                                                                                                                                                       | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `flairUrl`                                                                                                                                                        | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `groupUsers`                                                                                                                                                      | [operations.GetUserIdentiyProviderExternalIdGroupUsers](../../../sdk/models/operations/getuseridentiyproviderexternalidgroupusers.md)[]                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `groups`                                                                                                                                                          | [operations.GetUserIdentiyProviderExternalIdGroups](../../../sdk/models/operations/getuseridentiyproviderexternalidgroups.md)[]                                   | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `hasTitleBadges`                                                                                                                                                  | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `id`                                                                                                                                                              | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `ignored`                                                                                                                                                         | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `ignoredUsernames`                                                                                                                                                | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `invitedBy`                                                                                                                                                       | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `lastPostedAt`                                                                                                                                                    | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `lastSeenAt`                                                                                                                                                      | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `locale`                                                                                                                                                          | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `mailingListPostsPerDay`                                                                                                                                          | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `moderator`                                                                                                                                                       | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `muted`                                                                                                                                                           | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `mutedCategoryIds`                                                                                                                                                | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `mutedTags`                                                                                                                                                       | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `mutedUsernames`                                                                                                                                                  | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `name`                                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `pendingCount`                                                                                                                                                    | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `pendingPostsCount`                                                                                                                                               | *number*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `postCount`                                                                                                                                                       | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `primaryGroupId`                                                                                                                                                  | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `primaryGroupName`                                                                                                                                                | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `profileViewCount`                                                                                                                                                | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `recentTimeRead`                                                                                                                                                  | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `regularCategoryIds`                                                                                                                                              | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `secondFactorBackupEnabled`                                                                                                                                       | *boolean*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `secondFactorEnabled`                                                                                                                                             | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `sidebarCategoryIds`                                                                                                                                              | *any*[]                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `sidebarTags`                                                                                                                                                     | *any*[]                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `staged`                                                                                                                                                          | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `systemAvatarTemplate`                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `systemAvatarUploadId`                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `timeRead`                                                                                                                                                        | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `title`                                                                                                                                                           | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `trackedCategoryIds`                                                                                                                                              | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `trackedTags`                                                                                                                                                     | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `trustLevel`                                                                                                                                                      | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `uploadedAvatarId`                                                                                                                                                | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `useLogoSmallAsAvatar`                                                                                                                                            | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `userApiKeys`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `userAuthTokens`                                                                                                                                                  | [operations.GetUserIdentiyProviderExternalIdUserAuthTokens](../../../sdk/models/operations/getuseridentiyproviderexternaliduserauthtokens.md)[]                   | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `userFields`                                                                                                                                                      | [operations.GetUserIdentiyProviderExternalIdUserFields](../../../sdk/models/operations/getuseridentiyproviderexternaliduserfields.md)                             | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `userNotificationSchedule`                                                                                                                                        | [operations.GetUserIdentiyProviderExternalIdUserNotificationSchedule](../../../sdk/models/operations/getuseridentiyproviderexternalidusernotificationschedule.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `userOption`                                                                                                                                                      | [operations.GetUserIdentiyProviderExternalIdUserOption](../../../sdk/models/operations/getuseridentiyproviderexternaliduseroption.md)                             | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `username`                                                                                                                                                        | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `watchedCategoryIds`                                                                                                                                              | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `watchedFirstPostCategoryIds`                                                                                                                                     | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `watchedTags`                                                                                                                                                     | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `watchingFirstPostTags`                                                                                                                                           | *any*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |