# Suspension

## Example Usage

```typescript
import { Suspension } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Suspension = {
    fullSuspendReason: "<value>",
    suspendReason: "<value>",
    suspendedAt: "<value>",
    suspendedBy: {
        avatarTemplate: "<value>",
        id: 361151,
        name: "<value>",
        username: "Asia.Kuvalis",
    },
    suspendedTill: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `fullSuspendReason`                                                     | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `suspendReason`                                                         | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `suspendedAt`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `suspendedBy`                                                           | [operations.SuspendedBy](../../../sdk/models/operations/suspendedby.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `suspendedTill`                                                         | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |