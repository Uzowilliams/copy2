# BatchPresignMultipartPartsRequestBody

## Example Usage

```typescript
import { BatchPresignMultipartPartsRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: BatchPresignMultipartPartsRequestBody = {
  partNumbers: [
    1,
    2,
    3,
  ],
  uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `partNumbers`                                                                     | *any*[]                                                                           | :heavy_check_mark:                                                                | The part numbers to generate the presigned URLs for, must be between 1 and 10000. | [<br/>1,<br/>2,<br/>3<br/>]                                                       |
| `uniqueIdentifier`                                                                | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier returned in the original /create-multipart request.         | 66e86218-80d9-4bda-b4d5-2b6def968705                                              |