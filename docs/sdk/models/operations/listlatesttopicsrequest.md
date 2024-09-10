# ListLatestTopicsRequest

## Example Usage

```typescript
import { ListLatestTopicsRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListLatestTopicsRequest = {
  apiKey: "<value>",
  apiUsername: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `apiUsername`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ascending`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Defaults to `desc`, add `ascending=true` to sort asc                                                 |
| `order`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Enum: `default`, `created`, `activity`, `views`, `posts`, `category`, `likes`, `op_likes`, `posters` |