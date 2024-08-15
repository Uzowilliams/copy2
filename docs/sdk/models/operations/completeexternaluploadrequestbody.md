# CompleteExternalUploadRequestBody

## Example Usage

```typescript
import { CompleteExternalUploadRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CompleteExternalUploadRequestBody = {
    forPrivateMessage: "true",
    forSiteSetting: "true",
    pasted: "true",
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `forPrivateMessage`                                                                                             | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Optionally set this to true if the upload is for a private message.                                             | true                                                                                                            |
| `forSiteSetting`                                                                                                | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Optionally set this to true if the upload is for a site setting.                                                | true                                                                                                            |
| `pasted`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Optionally set this to true if the upload was pasted into the upload area. This will convert PNG files to JPEG. | true                                                                                                            |
| `uniqueIdentifier`                                                                                              | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The unique identifier returned in the original /generate-presigned-put request.                                 | 66e86218-80d9-4bda-b4d5-2b6def968705                                                                            |