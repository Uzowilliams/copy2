# Invites
(*invites*)

### Available Operations

* [createInvite](#createinvite) - Create an invite
* [inviteToTopic](#invitetotopic) - Invite to topic

## createInvite

Create an invite

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { CreateInviteRequest, CreateInviteRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const requestBody: CreateInviteRequestBody = {
  email: "not-a-user-yet@example.com",
  groupIds: "42,43",
  groupNames: "foo,bar",
  maxRedemptionsAllowed: 5,
};

  const res = await sdk.invites.createInvite(apiKey, apiUsername, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `apiUsername`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [operations.CreateInviteRequestBody](../../sdk/models/operations/createinviterequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateInviteResponse](../../sdk/models/operations/createinviteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## inviteToTopic

Invite to topic

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { InviteToTopicRequest, InviteToTopicRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const id: string = "string";
const requestBody: InviteToTopicRequestBody = {};

  const res = await sdk.invites.inviteToTopic(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `apiUsername`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.InviteToTopicRequestBody](../../sdk/models/operations/invitetotopicrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.InviteToTopicResponse](../../sdk/models/operations/invitetotopicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
