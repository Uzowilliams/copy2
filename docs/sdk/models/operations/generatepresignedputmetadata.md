# GeneratePresignedPutMetadata

## Example Usage

```typescript
import { GeneratePresignedPutMetadata } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GeneratePresignedPutMetadata = {};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sha1Checksum`                                                                                                                                                                      | *string*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | The SHA1 checksum of the upload binary blob. Optionally be provided and serves as an additional security check when later processing the file in complete-external-upload endpoint. |