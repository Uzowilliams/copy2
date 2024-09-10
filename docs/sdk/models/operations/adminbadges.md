# AdminBadges

## Example Usage

```typescript
import { AdminBadges } from "@lukehagar/discoursejs/sdk/models/operations";

let value: AdminBadges = {
  badgeGroupingIds: [
    "<value>",
  ],
  badgeIds: [
    "<value>",
  ],
  badgeTypeIds: [
    "<value>",
  ],
  protectedSystemFields: [
    "<value>",
  ],
  triggers: {
    none: 544883,
    postAction: 847252,
    postRevision: 423655,
    trustLevelChange: 623564,
    userChange: 645894,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `badgeGroupingIds`                                                | *any*[]                                                           | :heavy_check_mark:                                                | N/A                                                               |
| `badgeIds`                                                        | *any*[]                                                           | :heavy_check_mark:                                                | N/A                                                               |
| `badgeTypeIds`                                                    | *any*[]                                                           | :heavy_check_mark:                                                | N/A                                                               |
| `protectedSystemFields`                                           | *any*[]                                                           | :heavy_check_mark:                                                | N/A                                                               |
| `triggers`                                                        | [operations.Triggers](../../../sdk/models/operations/triggers.md) | :heavy_check_mark:                                                | N/A                                                               |