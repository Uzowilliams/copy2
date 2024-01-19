<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
    const sdk = new SDK({
        security: {
            key: "<YOUR_API_KEY_HERE>",
            username: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.backups.createBackup({
        withUploads: false,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->