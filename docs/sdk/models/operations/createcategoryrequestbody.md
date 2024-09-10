# CreateCategoryRequestBody

## Example Usage

```typescript
import { CreateCategoryRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateCategoryRequestBody = {
  color: "49d9e9",
  name: "<value>",
  permissions: {
    everyone: 1,
  },
  textColor: "f0fcfd",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `allowBadges`                                                           | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `color`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 49d9e9                                                                  |
| `formTemplateIds`                                                       | *any*[]                                                                 | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `parentCategoryId`                                                      | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `permissions`                                                           | [operations.Permissions](../../../sdk/models/operations/permissions.md) | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `searchPriority`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `slug`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `textColor`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | f0fcfd                                                                  |
| `topicFeaturedLinksAllowed`                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |