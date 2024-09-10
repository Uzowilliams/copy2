# SilenceUserRequest

## Example Usage

```typescript
import { SilenceUserRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SilenceUserRequest = {
  requestBody: {
    postAction: "delete",
    silencedTill: "2022-06-01T08:00:00.000Z",
  },
  id: 677115,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                 | [operations.SilenceUserRequestBody](../../../sdk/models/operations/silenceuserrequestbody.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |