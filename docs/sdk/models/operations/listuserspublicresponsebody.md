# ListUsersPublicResponseBody

directory items response

## Example Usage

```typescript
import { ListUsersPublicResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListUsersPublicResponseBody = {
    directoryItems: [
        {
            daysVisited: 625637,
            id: 333507,
            likesGiven: 329543,
            likesReceived: 924159,
            postCount: 967122,
            postsRead: 862319,
            topicCount: 168576,
            topicsEntered: 48690,
            user: {
                avatarTemplate: "<value>",
                id: 901483,
                name: "<value>",
                title: "<value>",
                username: "Deondre_Harris",
            },
        },
    ],
    meta: {
        lastUpdatedAt: "<value>",
        loadMoreDirectoryItems: "<value>",
        totalRowsDirectoryItems: 104627,
    },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `directoryItems`                                                                        | [operations.DirectoryItems](../../../sdk/models/operations/directoryitems.md)[]         | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `meta`                                                                                  | [operations.ListUsersPublicMeta](../../../sdk/models/operations/listuserspublicmeta.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |