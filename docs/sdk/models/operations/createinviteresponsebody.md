# CreateInviteResponseBody

success response

## Example Usage

```typescript
import { CreateInviteResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateInviteResponseBody = {
  createdAt: "2021-01-01T12:00:00.000Z",
  customMessage: "Hello world!",
  email: "not-a-user-yet@example.com",
  emailed: false,
  expired: false,
  expiresAt: "2021-02-01T12:00:00.000Z",
  groups: [
    "<value>",
  ],
  id: 42,
  link: "http://example.com/invites/9045fd767efe201ca60c6658bcf14158",
  topics: [
    "<value>",
  ],
  updatedAt: "2021-01-01T12:00:00.000Z",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `createdAt`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 2021-01-01T12:00:00.000Z                                    |
| `customMessage`                                             | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | Hello world!                                                |
| `email`                                                     | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | not-a-user-yet@example.com                                  |
| `emailed`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         | false                                                       |
| `expired`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         | false                                                       |
| `expiresAt`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 2021-02-01T12:00:00.000Z                                    |
| `groups`                                                    | *any*[]                                                     | :heavy_minus_sign:                                          | N/A                                                         | []                                                          |
| `id`                                                        | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 42                                                          |
| `link`                                                      | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | http://example.com/invites/9045fd767efe201ca60c6658bcf14158 |
| `topics`                                                    | *any*[]                                                     | :heavy_minus_sign:                                          | N/A                                                         | []                                                          |
| `updatedAt`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 2021-01-01T12:00:00.000Z                                    |