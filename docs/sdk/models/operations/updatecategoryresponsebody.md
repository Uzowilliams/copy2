# UpdateCategoryResponseBody

success response

## Example Usage

```typescript
import { UpdateCategoryResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdateCategoryResponseBody = {
    category: {
        allTopicsWiki: false,
        allowBadges: false,
        allowUnlimitedOwnerEditsOnFirstPost: false,
        autoCloseBasedOnLastPost: false,
        autoCloseHours: "<value>",
        availableGroups: ["<value>"],
        canDelete: false,
        canEdit: false,
        color: "red",
        customFields: {},
        defaultListFilter: "<value>",
        defaultSlowModeSeconds: "<value>",
        defaultTopPeriod: "<value>",
        defaultView: "<value>",
        description: "Configurable 3rd generation data-warehouse",
        descriptionExcerpt: "<value>",
        descriptionText: "<value>",
        emailIn: "<value>",
        emailInAllowStrangers: false,
        formTemplateIds: ["<value>"],
        groupPermissions: [
            {
                groupName: "<value>",
                permissionType: 144286,
            },
        ],
        hasChildren: false,
        id: 66149,
        mailinglistMirror: false,
        minimumRequiredTags: 513760,
        name: "<value>",
        navigateToFirstPostAfterRead: false,
        notificationLevel: 65604,
        numFeaturedTopics: 222658,
        permission: 856277,
        position: 369490,
        postCount: 162120,
        readOnlyBanner: "<value>",
        readRestricted: false,
        requiredTagGroups: [
            {
                minCount: 55107,
                name: "<value>",
            },
        ],
        searchPriority: 559682,
        showSubcategoryList: false,
        slug: "<value>",
        sortAscending: "<value>",
        sortOrder: "<value>",
        subcategoryListStyle: "<value>",
        textColor: "<value>",
        topicCount: 911198,
        topicFeaturedLinkAllowed: false,
        topicTemplate: "<value>",
        topicUrl: "<value>",
        uploadedBackground: "<value>",
        uploadedBackgroundDark: "<value>",
        uploadedLogo: "<value>",
        uploadedLogoDark: "<value>",
    },
    success: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `category`                                                                                    | [operations.UpdateCategoryCategory](../../../sdk/models/operations/updatecategorycategory.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `success`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |