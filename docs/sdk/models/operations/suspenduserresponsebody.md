# SuspendUserResponseBody

response

## Example Usage

```typescript
import { SuspendUserResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SuspendUserResponseBody = {
    suspension: {
        fullSuspendReason: "<value>",
        suspendReason: "<value>",
        suspendedAt: "<value>",
        suspendedBy: {
            avatarTemplate: "<value>",
            id: 24313,
            name: "<value>",
            username: "Herminia_Heathcote0",
        },
        suspendedTill: "<value>",
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `suspension`                                                          | [operations.Suspension](../../../sdk/models/operations/suspension.md) | :heavy_check_mark:                                                    | N/A                                                                   |