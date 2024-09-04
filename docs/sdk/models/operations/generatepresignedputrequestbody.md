# GeneratePresignedPutRequestBody

## Example Usage

```typescript
import { GeneratePresignedPutRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GeneratePresignedPutRequestBody = {
    fileName: "IMG_2021.jpeg",
    fileSize: 4096,
    type: "profile_background",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `fileName`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | IMG_2021.jpeg                                                                                             |
| `fileSize`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | File size should be represented in bytes.                                                                 | 4096                                                                                                      |
| `metadata`                                                                                                | [operations.GeneratePresignedPutMetadata](../../../sdk/models/operations/generatepresignedputmetadata.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `type`                                                                                                    | [operations.GeneratePresignedPutType](../../../sdk/models/operations/generatepresignedputtype.md)         | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |