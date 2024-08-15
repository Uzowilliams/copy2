# Category

## Example Usage

```typescript
import { Category } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Category = {
    allTopicsWiki: false,
    allowBadges: false,
    allowUnlimitedOwnerEditsOnFirstPost: false,
    autoCloseBasedOnLastPost: false,
    autoCloseHours: "<value>",
    availableGroups: ["<value>"],
    canDelete: false,
    canEdit: false,
    color: "gold",
    customFields: {},
    defaultListFilter: "<value>",
    defaultSlowModeSeconds: "<value>",
    defaultTopPeriod: "<value>",
    defaultView: "<value>",
    description: "Public-key impactful moderator",
    descriptionExcerpt: "<value>",
    descriptionText: "<value>",
    emailIn: "<value>",
    emailInAllowStrangers: false,
    groupPermissions: [
        {
            groupName: "<value>",
            permissionType: 333965,
        },
    ],
    hasChildren: false,
    id: 29100,
    mailinglistMirror: false,
    minimumRequiredTags: 790840,
    name: "<value>",
    navigateToFirstPostAfterRead: false,
    notificationLevel: 919532,
    numFeaturedTopics: 97243,
    permission: 542457,
    position: 442036,
    postCount: 991142,
    readOnlyBanner: "<value>",
    readRestricted: false,
    requiredTagGroups: [
        {
            minCount: 519952,
            name: "<value>",
        },
    ],
    searchPriority: 383103,
    showSubcategoryList: false,
    slug: "<value>",
    sortAscending: "<value>",
    sortOrder: "<value>",
    subcategoryListStyle: "<value>",
    textColor: "<value>",
    topicCount: 693957,
    topicFeaturedLinkAllowed: false,
    topicTemplate: "<value>",
    topicUrl: "<value>",
    uploadedBackground: "<value>",
    uploadedBackgroundDark: "<value>",
    uploadedLogo: "<value>",
    uploadedLogoDark: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `allTopicsWiki`                                                                       | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `allowBadges`                                                                         | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `allowGlobalTags`                                                                     | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `allowUnlimitedOwnerEditsOnFirstPost`                                                 | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `allowedTagGroups`                                                                    | *any*[]                                                                               | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `allowedTags`                                                                         | *any*[]                                                                               | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `autoCloseBasedOnLastPost`                                                            | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `autoCloseHours`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `availableGroups`                                                                     | *any*[]                                                                               | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `canDelete`                                                                           | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `canEdit`                                                                             | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `categorySetting`                                                                     | *any*                                                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `color`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `customFields`                                                                        | [operations.CustomFields](../../../sdk/models/operations/customfields.md)             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `defaultListFilter`                                                                   | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `defaultSlowModeSeconds`                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `defaultTopPeriod`                                                                    | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `defaultView`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `description`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `descriptionExcerpt`                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `descriptionText`                                                                     | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `emailIn`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `emailInAllowStrangers`                                                               | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `formTemplateIds`                                                                     | *any*[]                                                                               | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `groupPermissions`                                                                    | [operations.GroupPermissions](../../../sdk/models/operations/grouppermissions.md)[]   | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `hasChildren`                                                                         | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `id`                                                                                  | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `mailinglistMirror`                                                                   | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `minimumRequiredTags`                                                                 | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `navigateToFirstPostAfterRead`                                                        | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `notificationLevel`                                                                   | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `numFeaturedTopics`                                                                   | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `permission`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `position`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `postCount`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `readOnlyBanner`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `readRestricted`                                                                      | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `requiredTagGroups`                                                                   | [operations.RequiredTagGroups](../../../sdk/models/operations/requiredtaggroups.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `searchPriority`                                                                      | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `showSubcategoryList`                                                                 | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `slug`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `sortAscending`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `sortOrder`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `subcategoryListStyle`                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `textColor`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `topicCount`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `topicFeaturedLinkAllowed`                                                            | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `topicTemplate`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `topicUrl`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `uploadedBackground`                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `uploadedBackgroundDark`                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `uploadedLogo`                                                                        | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `uploadedLogoDark`                                                                    | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |