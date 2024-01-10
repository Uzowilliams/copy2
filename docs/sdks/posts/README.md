# Posts
(*posts*)

### Available Operations

* [createTopicPostPM](#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [deletePost](#deletepost) - delete a single post
* [getPost](#getpost) - Retrieve a single post
* [listPosts](#listposts) - List latest posts across topics
* [lockPost](#lockpost) - Lock a post from being edited
* [performPostAction](#performpostaction) - Like a post and other actions
* [postReplies](#postreplies) - List replies to a post
* [updatePost](#updatepost) - Update a single post

## createTopicPostPM

Creates a new topic, a new post, or a private message

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.posts.createTopicPostPM({
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

## deletePost

delete a single post

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { DeletePostRequest, DeletePostRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 188146;
const requestBody: DeletePostRequestBody = {
  forceDestroy: true,
};

  const res = await sdk.posts.deletePost(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.DeletePostRequestBody](../../sdk/models/operations/deletepostrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeletePostResponse](../../sdk/models/operations/deletepostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPost

This endpoint can be used to get the number of likes on a post using the
`actions_summary` property in the response. `actions_summary` responses
with the id of `2` signify a `like`. If there are no `actions_summary`
items with the id of `2`, that means there are 0 likes. Other ids likely
refer to various different flag types.


### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { GetPostRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: string = "string";

  const res = await sdk.posts.getPost(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPostResponse](../../sdk/models/operations/getpostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listPosts

List latest posts across topics

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { ListPostsRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const before: string = "string";

  const res = await sdk.posts.listPosts(apiKey, apiUsername, before);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiKey`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `apiUsername`                                                       | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `before`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | Load posts with an id lower than this value. Useful for pagination. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ListPostsResponse](../../sdk/models/operations/listpostsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## lockPost

Lock a post from being edited

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { LockPostRequest, LockPostRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const id: string = "string";
const requestBody: LockPostRequestBody = {
  locked: "string",
};

  const res = await sdk.posts.lockPost(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `apiKey`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `apiUsername`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `requestBody`                                                                        | [operations.LockPostRequestBody](../../sdk/models/operations/lockpostrequestbody.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.LockPostResponse](../../sdk/models/operations/lockpostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## performPostAction

Like a post and other actions

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { PerformPostActionRequest, PerformPostActionRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const requestBody: PerformPostActionRequestBody = {
  id: 315075,
  postActionTypeId: 159481,
};

  const res = await sdk.posts.performPostAction(apiKey, apiUsername, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `apiUsername`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.PerformPostActionRequestBody](../../sdk/models/operations/performpostactionrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PerformPostActionResponse](../../sdk/models/operations/performpostactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postReplies

List replies to a post

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { PostRepliesRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: string = "string";

  const res = await sdk.posts.postReplies(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostRepliesResponse](../../sdk/models/operations/postrepliesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updatePost

Update a single post

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { Post, UpdatePostRequest, UpdatePostRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: string = "string";
const requestBody: UpdatePostRequestBody = {
  post: {
    raw: "string",
  },
};

  const res = await sdk.posts.updatePost(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.UpdatePostRequestBody](../../sdk/models/operations/updatepostrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdatePostResponse](../../sdk/models/operations/updatepostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
