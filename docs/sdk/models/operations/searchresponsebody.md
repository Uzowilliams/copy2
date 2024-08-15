# SearchResponseBody

success response

## Example Usage

```typescript
import { SearchResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SearchResponseBody = {
    categories: ["<value>"],
    groupedSearchResult: {
        canCreateTopic: false,
        categoryIds: ["<value>"],
        error: "<value>",
        groupIds: ["<value>"],
        moreCategories: "<value>",
        moreFullPageResults: "<value>",
        morePosts: "<value>",
        moreUsers: "<value>",
        postIds: ["<value>"],
        searchLogId: 298264,
        tagIds: ["<value>"],
        term: "<value>",
        userIds: ["<value>"],
    },
    groups: ["<value>"],
    posts: ["<value>"],
    tags: ["<value>"],
    users: ["<value>"],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `categories`                                                                            | *any*[]                                                                                 | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `groupedSearchResult`                                                                   | [operations.GroupedSearchResult](../../../sdk/models/operations/groupedsearchresult.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `groups`                                                                                | *any*[]                                                                                 | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `posts`                                                                                 | *any*[]                                                                                 | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `tags`                                                                                  | *any*[]                                                                                 | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `users`                                                                                 | *any*[]                                                                                 | :heavy_check_mark:                                                                      | N/A                                                                                     |