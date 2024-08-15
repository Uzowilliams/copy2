# ListCategoriesResponseBody

success response

## Example Usage

```typescript
import { ListCategoriesResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListCategoriesResponseBody = {
    categoryList: {
        canCreateCategory: false,
        canCreateTopic: false,
        categories: [
            {
                canEdit: false,
                color: "maroon",
                defaultListFilter: "<value>",
                defaultTopPeriod: "<value>",
                defaultView: "<value>",
                description: "Enterprise-wide foreground application",
                descriptionExcerpt: "<value>",
                descriptionText: "<value>",
                hasChildren: false,
                id: 671384,
                minimumRequiredTags: 123844,
                name: "<value>",
                navigateToFirstPostAfterRead: false,
                notificationLevel: 344718,
                numFeaturedTopics: 856756,
                permission: 713767,
                position: 399667,
                postCount: 639187,
                readRestricted: false,
                showSubcategoryList: false,
                slug: "<value>",
                sortAscending: "<value>",
                sortOrder: "<value>",
                subcategoryIds: ["<value>"],
                subcategoryListStyle: "<value>",
                textColor: "<value>",
                topicCount: 381397,
                topicTemplate: "<value>",
                topicUrl: "<value>",
                topicsAllTime: 399161,
                topicsDay: 21973,
                topicsMonth: 431760,
                topicsWeek: 374753,
                topicsYear: 614528,
                uploadedBackground: "<value>",
                uploadedBackgroundDark: "<value>",
                uploadedLogo: "<value>",
                uploadedLogoDark: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `categoryList`                                                            | [operations.CategoryList](../../../sdk/models/operations/categorylist.md) | :heavy_check_mark:                                                        | N/A                                                                       |