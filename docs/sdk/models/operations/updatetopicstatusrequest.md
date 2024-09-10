# UpdateTopicStatusRequest

## Example Usage

```typescript
import { UpdateTopicStatusRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdateTopicStatusRequest = {
  apiKey: "<value>",
  apiUsername: "<value>",
  requestBody: {
    enabled: "true",
    status: "pinned_globally",
    until: "2030-12-31",
  },
  id: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `apiUsername`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `requestBody`                                                                                             | [operations.UpdateTopicStatusRequestBody](../../../sdk/models/operations/updatetopicstatusrequestbody.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |