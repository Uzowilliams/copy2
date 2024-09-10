# CreateBadgeRequestBody

## Example Usage

```typescript
import { CreateBadgeRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateBadgeRequestBody = {
  badgeTypeId: 780529,
  name: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `badgeTypeId`                                                      | *number*                                                           | :heavy_check_mark:                                                 | The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze. |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name for the new badge.                                        |