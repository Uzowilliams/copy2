# CreateInviteRequest

## Example Usage

```typescript
import { CreateInviteRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateInviteRequest = {
    apiKey: "<value>",
    apiUsername: "<value>",
    requestBody: {
        email: "not-a-user-yet@example.com",
        groupIds: "42,43",
        groupNames: "foo,bar",
        maxRedemptionsAllowed: 5,
    },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `apiUsername`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `requestBody`                                                                                   | [operations.CreateInviteRequestBody](../../../sdk/models/operations/createinviterequestbody.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |