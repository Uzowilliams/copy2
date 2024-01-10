# Site
(*site*)

### Available Operations

* [getSite](#getsite) - Get site info

## getSite

Can be used to fetch all categories and subcategories

### Example Usage

```typescript
import { SDK } from "discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.site.getSite();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetSiteResponse](../../sdk/models/operations/getsiteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
