# CategoryList

## Example Usage

```typescript
import { CategoryList } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CategoryList = {
    canCreateCategory: false,
    canCreateTopic: false,
    categories: [
        {
            canEdit: false,
            color: "black",
            defaultListFilter: "<value>",
            defaultTopPeriod: "<value>",
            defaultView: "<value>",
            description: "Multi-layered holistic attitude",
            descriptionExcerpt: "<value>",
            descriptionText: "<value>",
            hasChildren: false,
            id: 479754,
            minimumRequiredTags: 457059,
            name: "<value>",
            navigateToFirstPostAfterRead: false,
            notificationLevel: 508390,
            numFeaturedTopics: 979963,
            permission: 967260,
            position: 423706,
            postCount: 99958,
            readRestricted: false,
            showSubcategoryList: false,
            slug: "<value>",
            sortAscending: "<value>",
            sortOrder: "<value>",
            subcategoryIds: ["<value>"],
            subcategoryListStyle: "<value>",
            textColor: "<value>",
            topicCount: 857125,
            topicTemplate: "<value>",
            topicUrl: "<value>",
            topicsAllTime: 39650,
            topicsDay: 117315,
            topicsMonth: 483706,
            topicsWeek: 271252,
            topicsYear: 458259,
            uploadedBackground: "<value>",
            uploadedBackgroundDark: "<value>",
            uploadedLogo: "<value>",
            uploadedLogoDark: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `canCreateCategory`                                                     | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |
| `canCreateTopic`                                                        | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |
| `categories`                                                            | [operations.Categories](../../../sdk/models/operations/categories.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |