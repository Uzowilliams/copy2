# GetSiteResponseBody

success response

## Example Usage

```typescript
import { GetSiteResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetSiteResponseBody = {
  anonymousTopMenuItems: [
    "<value>",
  ],
  archetypes: [
    {
      id: "<id>",
      name: "<value>",
      options: [
        "<value>",
      ],
    },
  ],
  authProviders: [
    "<value>",
  ],
  canCreateTag: false,
  canTagPms: false,
  canTagTopics: false,
  categories: [
    {
      allowGlobalTags: false,
      allowedTagGroups: [
        "<value>",
      ],
      allowedTags: [
        "<value>",
      ],
      canEdit: false,
      color: "yellow",
      defaultListFilter: "<value>",
      defaultTopPeriod: "<value>",
      defaultView: "<value>",
      hasChildren: false,
      id: 657020,
      minimumRequiredTags: 343392,
      name: "<value>",
      navigateToFirstPostAfterRead: false,
      notificationLevel: 652309,
      numFeaturedTopics: 591027,
      permission: 821719,
      position: 659177,
      postCount: 402767,
      readOnlyBanner: "<value>",
      readRestricted: false,
      requiredTagGroups: [
        {
          minCount: 397257,
          name: "<value>",
        },
      ],
      showSubcategoryList: false,
      slug: "<value>",
      sortAscending: "<value>",
      sortOrder: "<value>",
      subcategoryListStyle: "<value>",
      textColor: "<value>",
      topicCount: 37565,
      topicTemplate: "<value>",
      topicUrl: "<value>",
      uploadedBackground: "<value>",
      uploadedBackgroundDark: "<value>",
      uploadedLogo: "<value>",
      uploadedLogoDark: "<value>",
    },
  ],
  censoredRegexp: [
    {},
  ],
  customEmojiTranslation: {},
  defaultArchetype: "<value>",
  defaultDarkColorScheme: {},
  filters: [
    "<value>",
  ],
  groups: [
    {
      flairBgColor: "<value>",
      flairColor: "<value>",
      flairUrl: "<value>",
      id: 999278,
      name: "<value>",
    },
  ],
  notificationTypes: {
    bookmarkReminder: 984632,
    chatGroupMention: 351893,
    chatInvitation: 448143,
    chatMention: 721407,
    chatMessage: 937636,
    codeReviewCommitApproved: 637583,
    custom: 672041,
    edited: 813054,
    eventInvitation: 266697,
    eventReminder: 976226,
    grantedBadge: 564064,
    groupMentioned: 889794,
    groupMessageSummary: 956933,
    invitedToPrivateMessage: 764562,
    invitedToTopic: 113486,
    inviteeAccepted: 698249,
    liked: 272229,
    likedConsolidated: 335498,
    linked: 82057,
    membershipRequestAccepted: 147685,
    membershipRequestConsolidated: 765271,
    mentioned: 62636,
    movedPost: 21688,
    postApproved: 241901,
    posted: 137251,
    privateMessage: 432281,
    quoted: 260628,
    reaction: 521996,
    replied: 871083,
    topicReminder: 773084,
    votesReleased: 179410,
    watchingCategoryOrTag: 958741,
    watchingFirstPost: 433279,
  },
  periods: [
    "<value>",
  ],
  postActionTypes: [
    {
      description: "Cross-group eco-centric array",
      id: 583404,
      isCustomFlag: false,
      isFlag: false,
      name: "<value>",
      nameKey: "<value>",
      shortDescription: "<value>",
    },
  ],
  postTypes: {
    moderatorAction: 589695,
    regular: 936469,
    smallAction: 745398,
    whisper: 940782,
  },
  tagsFilterRegexp: "<value>",
  topMenuItems: [
    "<value>",
  ],
  topTags: [
    "<value>",
  ],
  topicFeaturedLinkAllowedCategoryIds: [
    "<value>",
  ],
  topicFlagTypes: [
    {
      description: "Switchable 6th generation task-force",
      id: 596211,
      isCustomFlag: false,
      isFlag: false,
      name: "<value>",
      nameKey: "<value>",
      shortDescription: "<value>",
    },
  ],
  trustLevels: {
    basic: 983427,
    leader: 891801,
    member: 399802,
    newuser: 780931,
    regular: 380335,
  },
  uncategorizedCategoryId: 211534,
  userColorSchemes: [
    {
      id: 147808,
      isDark: false,
      name: "<value>",
    },
  ],
  userFieldMaxLength: 764995,
  userFields: [
    "<value>",
  ],
  userThemes: [
    {
      colorSchemeId: 684935,
      default: false,
      name: "<value>",
      themeId: 189062,
    },
  ],
  watchedWordsLink: "<value>",
  watchedWordsReplace: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `anonymousTopMenuItems`                                                                             | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `archetypes`                                                                                        | [operations.Archetypes](../../../sdk/models/operations/archetypes.md)[]                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `authProviders`                                                                                     | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canAssociateGroups`                                                                                | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `canCreateTag`                                                                                      | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canTagPms`                                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canTagTopics`                                                                                      | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `categories`                                                                                        | [operations.GetSiteCategories](../../../sdk/models/operations/getsitecategories.md)[]               | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `censoredRegexp`                                                                                    | [operations.CensoredRegexp](../../../sdk/models/operations/censoredregexp.md)[]                     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `customEmojiTranslation`                                                                            | [operations.CustomEmojiTranslation](../../../sdk/models/operations/customemojitranslation.md)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `defaultArchetype`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `defaultDarkColorScheme`                                                                            | [operations.DefaultDarkColorScheme](../../../sdk/models/operations/defaultdarkcolorscheme.md)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `deniedEmojis`                                                                                      | *any*[]                                                                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `displayedAboutPluginStatGroups`                                                                    | *any*[]                                                                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `filters`                                                                                           | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `groups`                                                                                            | [operations.GetSiteGroups](../../../sdk/models/operations/getsitegroups.md)[]                       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `hashtagConfigurations`                                                                             | [operations.HashtagConfigurations](../../../sdk/models/operations/hashtagconfigurations.md)         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `hashtagIcons`                                                                                      | [operations.HashtagIcons](../../../sdk/models/operations/hashtagicons.md)                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `markdownAdditionalOptions`                                                                         | [operations.MarkdownAdditionalOptions](../../../sdk/models/operations/markdownadditionaloptions.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `navigationMenuSiteTopTags`                                                                         | *any*[]                                                                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `notificationTypes`                                                                                 | [operations.NotificationTypes](../../../sdk/models/operations/notificationtypes.md)                 | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `periods`                                                                                           | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `postActionTypes`                                                                                   | [operations.PostActionTypes](../../../sdk/models/operations/postactiontypes.md)[]                   | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `postTypes`                                                                                         | [operations.PostTypes](../../../sdk/models/operations/posttypes.md)                                 | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `tagsFilterRegexp`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topMenuItems`                                                                                      | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topTags`                                                                                           | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicFeaturedLinkAllowedCategoryIds`                                                               | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicFlagTypes`                                                                                    | [operations.TopicFlagTypes](../../../sdk/models/operations/topicflagtypes.md)[]                     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `trustLevels`                                                                                       | [operations.TrustLevels](../../../sdk/models/operations/trustlevels.md)                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `uncategorizedCategoryId`                                                                           | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userColorSchemes`                                                                                  | [operations.UserColorSchemes](../../../sdk/models/operations/usercolorschemes.md)[]                 | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userFieldMaxLength`                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userFields`                                                                                        | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userThemes`                                                                                        | [operations.UserThemes](../../../sdk/models/operations/userthemes.md)[]                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `userTips`                                                                                          | [operations.UserTips](../../../sdk/models/operations/usertips.md)                                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `watchedWordsLink`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `watchedWordsReplace`                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `whispersAllowedGroupsNames`                                                                        | *any*[]                                                                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `wizardRequired`                                                                                    | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |