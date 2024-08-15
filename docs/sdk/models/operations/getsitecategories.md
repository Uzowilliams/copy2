# GetSiteCategories

## Example Usage

```typescript
import { GetSiteCategories } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetSiteCategories = {
    allowGlobalTags: false,
    allowedTagGroups: ["<value>"],
    allowedTags: ["<value>"],
    canEdit: false,
    color: "azure",
    defaultListFilter: "<value>",
    defaultTopPeriod: "<value>",
    defaultView: "<value>",
    hasChildren: false,
    id: 580887,
    minimumRequiredTags: 160230,
    name: "<value>",
    navigateToFirstPostAfterRead: false,
    notificationLevel: 145870,
    numFeaturedTopics: 661118,
    permission: 335631,
    position: 440264,
    postCount: 625528,
    readOnlyBanner: "<value>",
    readRestricted: false,
    requiredTagGroups: [
        {
            minCount: 76486,
            name: "<value>",
        },
    ],
    showSubcategoryList: false,
    slug: "<value>",
    sortAscending: "<value>",
    sortOrder: "<value>",
    subcategoryListStyle: "<value>",
    textColor: "<value>",
    topicCount: 361306,
    topicTemplate: "<value>",
    topicUrl: "<value>",
    uploadedBackground: "<value>",
    uploadedBackgroundDark: "<value>",
    uploadedLogo: "<value>",
    uploadedLogoDark: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `allowGlobalTags`                                                                                   | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `allowedTagGroups`                                                                                  | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `allowedTags`                                                                                       | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `canEdit`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `color`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `customFields`                                                                                      | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `defaultListFilter`                                                                                 | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `defaultTopPeriod`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `defaultView`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `descriptionExcerpt`                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `descriptionText`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `formTemplateIds`                                                                                   | *any*[]                                                                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `hasChildren`                                                                                       | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minimumRequiredTags`                                                                               | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `navigateToFirstPostAfterRead`                                                                      | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `notificationLevel`                                                                                 | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numFeaturedTopics`                                                                                 | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `parentCategoryId`                                                                                  | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `permission`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `position`                                                                                          | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `postCount`                                                                                         | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `readOnlyBanner`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `readRestricted`                                                                                    | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiredTagGroups`                                                                                 | [operations.GetSiteRequiredTagGroups](../../../sdk/models/operations/getsiterequiredtaggroups.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `showSubcategoryList`                                                                               | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `slug`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sortAscending`                                                                                     | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sortOrder`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `subcategoryListStyle`                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `textColor`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicCount`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicTemplate`                                                                                     | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicUrl`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `uploadedBackground`                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `uploadedBackgroundDark`                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `uploadedLogo`                                                                                      | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `uploadedLogoDark`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |