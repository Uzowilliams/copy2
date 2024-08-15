# SilenceUserRequestBody

## Example Usage

```typescript
import { SilenceUserRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SilenceUserRequestBody = {
    postAction: "delete",
    silencedTill: "2022-06-01T08:00:00.000Z",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `message`                                         | *string*                                          | :heavy_minus_sign:                                | Will send an email with this message when present |                                                   |
| `postAction`                                      | *string*                                          | :heavy_minus_sign:                                | N/A                                               | delete                                            |
| `reason`                                          | *string*                                          | :heavy_minus_sign:                                | N/A                                               |                                                   |
| `silencedTill`                                    | *string*                                          | :heavy_minus_sign:                                | N/A                                               | 2022-06-01T08:00:00.000Z                          |