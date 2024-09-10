# UpdateBadgeResponseBody

success response

## Example Usage

```typescript
import { UpdateBadgeResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdateBadgeResponseBody = {
  badge: {
    allowTitle: false,
    autoRevoke: false,
    badgeGroupingId: 958950,
    badgeTypeId: 102044,
    description: "Profound composite model",
    enabled: false,
    grantCount: 161309,
    icon: "<value>",
    id: 995300,
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
      id: 653108,
      name: "<value>",
      sortOrder: 581850,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badge`                                                                                       | [operations.UpdateBadgeBadge](../../../sdk/models/operations/updatebadgebadge.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `badgeTypes`                                                                                  | [operations.UpdateBadgeBadgeTypes](../../../sdk/models/operations/updatebadgebadgetypes.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |