# UpdateBadgeRequestBody

## Example Usage

```typescript
import { UpdateBadgeRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdateBadgeRequestBody = {
  badgeTypeId: 128926,
  name: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `badgeTypeId`                                                      | *number*                                                           | :heavy_check_mark:                                                 | The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze. |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name for the new badge.                                        |