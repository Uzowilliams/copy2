# PrivateMessages
(*privateMessages*)

### Available Operations

* [createTopicPostPM](#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [getUserSentPrivateMessages](#getusersentprivatemessages) - Get a list of private messages sent for a user
* [listUserPrivateMessages](#listuserprivatemessages) - Get a list of private messages for a user

## createTopicPostPM

Creates a new topic, a new post, or a private message

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.privateMessages.createTopicPostPM({
    archetype: "private_message",
    raw: "string",
    targetRecipients: "blake,sam",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateTopicPostPMRequestBody](../../sdk/models/operations/createtopicpostpmrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateTopicPostPMResponse](../../sdk/models/operations/createtopicpostpmresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUserSentPrivateMessages

Get a list of private messages sent for a user

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { GetUserSentPrivateMessagesRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";

  const res = await sdk.privateMessages.getUserSentPrivateMessages(username);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `username`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUserSentPrivateMessagesResponse](../../sdk/models/operations/getusersentprivatemessagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUserPrivateMessages

Get a list of private messages for a user

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { ListUserPrivateMessagesRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";

  const res = await sdk.privateMessages.listUserPrivateMessages(username);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `username`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListUserPrivateMessagesResponse](../../sdk/models/operations/listuserprivatemessagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
