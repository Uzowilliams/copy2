# CreateUploadRequestBody


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `file`                                                      | [operations.File](../../../sdk/models/operations/file.md)   | :heavy_minus_sign:                                          | N/A                                                         |
| `synchronous`                                               | *boolean*                                                   | :heavy_minus_sign:                                          | Use this flag to return an id and url                       |
| `type`                                                      | [operations.TypeT](../../../sdk/models/operations/typet.md) | :heavy_check_mark:                                          | N/A                                                         |
| `userId`                                                    | *number*                                                    | :heavy_minus_sign:                                          | required if uploading an avatar                             |