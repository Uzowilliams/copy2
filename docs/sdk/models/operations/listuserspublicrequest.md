# ListUsersPublicRequest

## Example Usage

```typescript
import { ListUsersPublicRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListUsersPublicRequest = {
    order: "days_visited",
    period: "weekly",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `asc`                                                         | [operations.Asc](../../../sdk/models/operations/asc.md)       | :heavy_minus_sign:                                            | N/A                                                           |
| `order`                                                       | [operations.Order](../../../sdk/models/operations/order.md)   | :heavy_check_mark:                                            | N/A                                                           |
| `page`                                                        | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `period`                                                      | [operations.Period](../../../sdk/models/operations/period.md) | :heavy_check_mark:                                            | N/A                                                           |