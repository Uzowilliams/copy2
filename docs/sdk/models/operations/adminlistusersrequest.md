# AdminListUsersRequest

## Example Usage

```typescript
import { AdminListUsersRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: AdminListUsersRequest = {
  flag: "new",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `asc`                                                                                             | [operations.QueryParamAsc](../../../sdk/models/operations/queryparamasc.md)                       | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `email`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | Filter to the user with this email address                                                        |
| `flag`                                                                                            | [operations.Flag](../../../sdk/models/operations/flag.md)                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ip`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | Filter to users with this IP address                                                              |
| `order`                                                                                           | [operations.QueryParamOrder](../../../sdk/models/operations/queryparamorder.md)                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `page`                                                                                            | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `showEmails`                                                                                      | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Include user email addresses in response. These requests will be logged in the staff action logs. |
| `stats`                                                                                           | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Include user stats information                                                                    |