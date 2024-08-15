# SuspendUserRequest

## Example Usage

```typescript
import { SuspendUserRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SuspendUserRequest = {
    requestBody: {
        postAction: "delete",
        reason: "<value>",
        suspendUntil: "2121-02-22",
    },
    id: 460220,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                 | [operations.SuspendUserRequestBody](../../../sdk/models/operations/suspenduserrequestbody.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |