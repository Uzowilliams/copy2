# CreateMultipartUploadResponseBody

external upload initialized

## Example Usage

```typescript
import { CreateMultipartUploadResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateMultipartUploadResponseBody = {
    externalUploadIdentifier:
        "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ",
    key: "temp/site/uploads/default/12345/67890.jpg",
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `externalUploadIdentifier`                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The identifier of the multipart upload in the external storage provider. This is the multipart upload_id in AWS S3.                                             | 84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ                                                               |
| `key`                                                                                                                                                           | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The path of the temporary file on the external storage service.                                                                                                 | temp/site/uploads/default/12345/67890.jpg                                                                                                                       |
| `uniqueIdentifier`                                                                                                                                              | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | A unique string that identifies the external upload. This must be stored and then sent in the /complete-multipart and /batch-presign-multipart-parts endpoints. | 66e86218-80d9-4bda-b4d5-2b6def968705                                                                                                                            |