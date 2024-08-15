# Silence

## Example Usage

```typescript
import { Silence } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Silence = {
    silenceReason: "<value>",
    silenced: false,
    silencedAt: "<value>",
    silencedBy: {
        avatarTemplate: "<value>",
        id: 272683,
        name: "<value>",
        username: "Karina85",
    },
    silencedTill: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `silenceReason`                                                       | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `silenced`                                                            | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   |
| `silencedAt`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `silencedBy`                                                          | [operations.SilencedBy](../../../sdk/models/operations/silencedby.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `silencedTill`                                                        | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |