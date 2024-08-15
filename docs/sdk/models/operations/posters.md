# Posters

## Example Usage

```typescript
import { Posters } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Posters = {
    description: "Operative composite product",
    extras: "<value>",
    user: {
        avatarTemplate: "<value>",
        id: 166047,
        name: "<value>",
        username: "Neal.Walker48",
    },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `description`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `extras`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `user`                                                                    | [operations.GetTopicUser](../../../sdk/models/operations/gettopicuser.md) | :heavy_check_mark:                                                        | N/A                                                                       |