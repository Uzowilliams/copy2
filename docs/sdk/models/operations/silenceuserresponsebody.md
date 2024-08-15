# SilenceUserResponseBody

response

## Example Usage

```typescript
import { SilenceUserResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SilenceUserResponseBody = {
    silence: {
        silenceReason: "<value>",
        silenced: false,
        silencedAt: "<value>",
        silencedBy: {
            avatarTemplate: "<value>",
            id: 30235,
            name: "<value>",
            username: "Lorine0",
        },
        silencedTill: "<value>",
    },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `silence`                                                       | [operations.Silence](../../../sdk/models/operations/silence.md) | :heavy_check_mark:                                              | N/A                                                             |