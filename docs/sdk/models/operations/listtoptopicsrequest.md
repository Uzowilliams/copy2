# ListTopTopicsRequest

## Example Usage

```typescript
import { ListTopTopicsRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListTopTopicsRequest = {
  apiKey: "<value>",
  apiUsername: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `apiKey`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `apiUsername`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `period`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily` |