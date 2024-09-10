# CreateUserRequestBody

## Example Usage

```typescript
import { CreateUserRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateUserRequestBody = {
  email: "Jennifer68@yahoo.com",
  name: "<value>",
  password: "9JOtcD2TrgaNLaS",
  username: "Lenny_Treutel46",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `active`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | This param requires an api key in the request header or it will be ignored |
| `approved`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `email`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `externalIds`                                                              | [operations.ExternalIds](../../../sdk/models/operations/externalids.md)    | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `password`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `userFields1`                                                              | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `username`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |