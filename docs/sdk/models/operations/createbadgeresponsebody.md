# CreateBadgeResponseBody

success response

## Example Usage

```typescript
import { CreateBadgeResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateBadgeResponseBody = {
    badge: {
        allowTitle: false,
        autoRevoke: false,
        badgeGroupingId: 521848,
        badgeTypeId: 105907,
        description: "Inverse holistic data-warehouse",
        enabled: false,
        grantCount: 186332,
        icon: "<value>",
        id: 774234,
        imageUrl: "<value>",
        listable: false,
        longDescription: "<value>",
        manuallyGrantable: false,
        multipleGrant: false,
        name: "<value>",
        query: "<value>",
        showPosts: false,
        slug: "<value>",
        system: false,
        targetPosts: false,
        trigger: "<value>",
    },
    badgeTypes: [
        {
            id: 736918,
            name: "<value>",
            sortOrder: 456150,
        },
    ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badge`                                                                                       | [operations.Badge](../../../sdk/models/operations/badge.md)                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `badgeTypes`                                                                                  | [operations.CreateBadgeBadgeTypes](../../../sdk/models/operations/createbadgebadgetypes.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |