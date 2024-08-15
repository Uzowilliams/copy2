# FileT

## Example Usage

```typescript
import { FileT } from "@lukehagar/discoursejs/sdk/models/operations";

let value: FileT = {
    content: new TextEncoder().encode("0x79ac3d1a9D"),
    fileName: "your_file_here",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |