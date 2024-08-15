# SuspendUserRequestBody

## Example Usage

```typescript
import { SuspendUserRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SuspendUserRequestBody = {
    postAction: "delete",
    reason: "<value>",
    suspendUntil: "2121-02-22",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `message`                                         | *string*                                          | :heavy_minus_sign:                                | Will send an email with this message when present |                                                   |
| `postAction`                                      | *string*                                          | :heavy_minus_sign:                                | N/A                                               | delete                                            |
| `reason`                                          | *string*                                          | :heavy_check_mark:                                | N/A                                               |                                                   |
| `suspendUntil`                                    | *string*                                          | :heavy_check_mark:                                | N/A                                               | 2121-02-22                                        |