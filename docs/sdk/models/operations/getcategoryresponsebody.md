# GetCategoryResponseBody

response

## Example Usage

```typescript
import { GetCategoryResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetCategoryResponseBody = {
  category: {
    allTopicsWiki: false,
    allowBadges: false,
    allowUnlimitedOwnerEditsOnFirstPost: false,
    autoCloseBasedOnLastPost: false,
    autoCloseHours: "<value>",
    availableGroups: [
      "<value>",
    ],
    canDelete: false,
    canEdit: false,
    color: "green",
    customFields: {},
    defaultListFilter: "<value>",
    defaultSlowModeSeconds: "<value>",
    defaultTopPeriod: "<value>",
    defaultView: "<value>",
    description: "Configurable client-driven extranet",
    descriptionExcerpt: "<value>",
    descriptionText: "<value>",
    emailIn: "<value>",
    emailInAllowStrangers: false,
    groupPermissions: [
      {
        groupName: "<value>",
        permissionType: 389135,
      },
    ],
    hasChildren: false,
    id: 246535,
    mailinglistMirror: false,
    minimumRequiredTags: 952143,
    name: "<value>",
    navigateToFirstPostAfterRead: false,
    notificationLevel: 562783,
    numFeaturedTopics: 300029,
    permission: 906355,
    position: 160467,
    postCount: 580107,
    readOnlyBanner: "<value>",
    readRestricted: false,
    requiredTagGroups: [
      {
        minCount: 886305,
        name: "<value>",
      },
    ],
    searchPriority: 597937,
    showSubcategoryList: false,
    slug: "<value>",
    sortAscending: "<value>",
    sortOrder: "<value>",
    subcategoryListStyle: "<value>",
    textColor: "<value>",
    topicCount: 446394,
    topicFeaturedLinkAllowed: false,
    topicTemplate: "<value>",
    topicUrl: "<value>",
    uploadedBackground: "<value>",
    uploadedBackgroundDark: "<value>",
    uploadedLogo: "<value>",
    uploadedLogoDark: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `category`                                                                              | [operations.GetCategoryCategory](../../../sdk/models/operations/getcategorycategory.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |