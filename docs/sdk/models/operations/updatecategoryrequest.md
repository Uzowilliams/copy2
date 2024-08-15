# UpdateCategoryRequest

## Example Usage

```typescript
import { UpdateCategoryRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: UpdateCategoryRequest = {
    requestBody: {
        color: "49d9e9",
        name: "<value>",
        permissions: {
            everyone: 1,
        },
        textColor: "f0fcfd",
    },
    id: 992074,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                       | [operations.UpdateCategoryRequestBody](../../../sdk/models/operations/updatecategoryrequestbody.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |