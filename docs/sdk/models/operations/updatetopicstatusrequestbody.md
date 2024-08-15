# UpdateTopicStatusRequestBody

## Example Usage

```typescript
import { UpdateTopicStatusRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdateTopicStatusRequestBody = {
    enabled: "true",
    status: "closed",
    until: "2030-12-31",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `enabled`                                                       | [operations.Enabled](../../../sdk/models/operations/enabled.md) | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `status`                                                        | [operations.Status](../../../sdk/models/operations/status.md)   | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `until`                                                         | *string*                                                        | :heavy_minus_sign:                                              | Only required for `pinned` and `pinned_globally`                | 2030-12-31                                                      |