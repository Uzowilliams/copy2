# TagGroup

## Example Usage

```typescript
import { TagGroup } from "@lukehagar/discoursejs/sdk/models/operations";

let value: TagGroup = {
  id: 914971,
  name: "<value>",
  onePerTopic: false,
  parentTagName: [
    "<value>",
  ],
  permissions: {},
  tagNames: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `onePerTopic`                                                                                       | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `parentTagName`                                                                                     | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `permissions`                                                                                       | [operations.CreateTagGroupPermissions](../../../sdk/models/operations/createtaggrouppermissions.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `tagNames`                                                                                          | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |