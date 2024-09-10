# GetUserEmailsResponseBody

success response

## Example Usage

```typescript
import { GetUserEmailsResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetUserEmailsResponseBody = {
  associatedAccounts: [
    "<value>",
  ],
  email: "Flossie.Hartmann@hotmail.com",
  secondaryEmails: [
    "<value>",
  ],
  unconfirmedEmails: [
    "<value>",
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `associatedAccounts` | *any*[]              | :heavy_check_mark:   | N/A                  |
| `email`              | *string*             | :heavy_check_mark:   | N/A                  |
| `secondaryEmails`    | *any*[]              | :heavy_check_mark:   | N/A                  |
| `unconfirmedEmails`  | *any*[]              | :heavy_check_mark:   | N/A                  |