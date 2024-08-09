<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
    const result = await sdk.backups.createBackup();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->