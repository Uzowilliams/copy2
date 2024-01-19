# Notifications
(*notifications*)

### Available Operations

* [getNotifications](#getnotifications) - Get the notifications that belong to the current user
* [markNotificationsAsRead](#marknotificationsasread) - Mark notifications as read

## getNotifications

Get the notifications that belong to the current user

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK({
    security: {
      key: "<YOUR_API_KEY_HERE>",
      username: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.notifications.getNotifications();

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

**Promise<[operations.GetNotificationsResponse](../../sdk/models/operations/getnotificationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## markNotificationsAsRead

Mark notifications as read

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK({
    security: {
      key: "<YOUR_API_KEY_HERE>",
      username: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.notifications.markNotificationsAsRead({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.MarkNotificationsAsReadRequestBody](../../sdk/models/operations/marknotificationsasreadrequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.MarkNotificationsAsReadResponse](../../sdk/models/operations/marknotificationsasreadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
