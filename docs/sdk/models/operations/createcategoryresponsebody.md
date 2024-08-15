# CreateCategoryResponseBody

success response

## Example Usage

```typescript
import { CreateCategoryResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateCategoryResponseBody = {
    category: {
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
        description: "Compatible high-level contingency",
        descriptionExcerpt: "<value>",
        descriptionText: "<value>",
        emailIn: "<value>",
        emailInAllowStrangers: false,
        groupPermissions: [
            {
                groupName: "<value>",
                permissionType: 826825,
            },
        ],
        hasChildren: false,
        id: 410301,
        mailinglistMirror: false,
        minimumRequiredTags: 539118,
        name: "<value>",
        navigateToFirstPostAfterRead: false,
        notificationLevel: 623295,
        numFeaturedTopics: 887265,
        permission: 886961,
        position: 880107,
        postCount: 618826,
        readOnlyBanner: "<value>",
        readRestricted: false,
        requiredTagGroups: [
            {
                minCount: 328303,
                name: "<value>",
            },
        ],
        searchPriority: 133461,
        showSubcategoryList: false,
        slug: "<value>",
        sortAscending: "<value>",
        sortOrder: "<value>",
        subcategoryListStyle: "<value>",
        textColor: "<value>",
        topicCount: 404425,
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

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `category`                                                        | [operations.Category](../../../sdk/models/operations/category.md) | :heavy_check_mark:                                                | N/A                                                               |