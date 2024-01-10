# Admin
(*admin*)

### Available Operations

* [activateUser](#activateuser) - Activate a user
* [adminGetUser](#admingetuser) - Get a user by id
* [adminListUsers](#adminlistusers) - Get a list of users
* [anonymizeUser](#anonymizeuser) - Anonymize a user
* [deactivateUser](#deactivateuser) - Deactivate a user
* [deleteUser](#deleteuser) - Delete a user
* [logOutUser](#logoutuser) - Log a user out
* [refreshGravatar](#refreshgravatar) - Refresh gravatar
* [silenceUser](#silenceuser) - Silence a user
* [suspendUser](#suspenduser) - Suspend a user

## activateUser

Activate a user

### Example Usage

```typescript
import { SDK } from "openapi";
import { ActivateUserRequest } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 203554;

  const res = await sdk.admin.activateUser(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ActivateUserResponse](../../sdk/models/operations/activateuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## adminGetUser

Get a user by id

### Example Usage

```typescript
import { SDK } from "openapi";
import { AdminGetUserRequest } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 386776;

  const res = await sdk.admin.adminGetUser(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AdminGetUserResponse](../../sdk/models/operations/admingetuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## adminListUsers

Get a list of users

### Example Usage

```typescript
import { SDK } from "openapi";
import { Flag, QueryParamAsc, QueryParamOrder } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();

  const res = await sdk.admin.adminListUsers({
    flag: Flag.New,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AdminListUsersRequest](../../sdk/models/operations/adminlistusersrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AdminListUsersResponse](../../sdk/models/operations/adminlistusersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## anonymizeUser

Anonymize a user

### Example Usage

```typescript
import { SDK } from "openapi";
import { AnonymizeUserRequest } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 418778;

  const res = await sdk.admin.anonymizeUser(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AnonymizeUserResponse](../../sdk/models/operations/anonymizeuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deactivateUser

Deactivate a user

### Example Usage

```typescript
import { SDK } from "openapi";
import { DeactivateUserRequest } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 143950;

  const res = await sdk.admin.deactivateUser(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeactivateUserResponse](../../sdk/models/operations/deactivateuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteUser

Delete a user

### Example Usage

```typescript
import { SDK } from "openapi";
import { DeleteUserRequest, DeleteUserRequestBody } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 251343;
const requestBody: DeleteUserRequestBody = {};

  const res = await sdk.admin.deleteUser(id, requestBody);

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
| `requestBody`                                                                            | [operations.DeleteUserRequestBody](../../sdk/models/operations/deleteuserrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteUserResponse](../../sdk/models/operations/deleteuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## logOutUser

Log a user out

### Example Usage

```typescript
import { SDK } from "openapi";
import { LogOutUserRequest } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 379568;

  const res = await sdk.admin.logOutUser(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogOutUserResponse](../../sdk/models/operations/logoutuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## refreshGravatar

Refresh gravatar

### Example Usage

```typescript
import { SDK } from "openapi";
import { RefreshGravatarRequest } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";

  const res = await sdk.admin.refreshGravatar(username);

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

**Promise<[operations.RefreshGravatarResponse](../../sdk/models/operations/refreshgravatarresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## silenceUser

Silence a user

### Example Usage

```typescript
import { SDK } from "openapi";
import { SilenceUserRequest, SilenceUserRequestBody } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 606247;
const requestBody: SilenceUserRequestBody = {
  postAction: "delete",
  silencedTill: "2022-06-01T08:00:00.000Z",
};

  const res = await sdk.admin.silenceUser(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.SilenceUserRequestBody](../../sdk/models/operations/silenceuserrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.SilenceUserResponse](../../sdk/models/operations/silenceuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## suspendUser

Suspend a user

### Example Usage

```typescript
import { SDK } from "openapi";
import { SuspendUserRequest, SuspendUserRequestBody } from "openapi/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 970832;
const requestBody: SuspendUserRequestBody = {
  postAction: "delete",
  reason: "string",
  suspendUntil: "2121-02-22",
};

  const res = await sdk.admin.suspendUser(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.SuspendUserRequestBody](../../sdk/models/operations/suspenduserrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.SuspendUserResponse](../../sdk/models/operations/suspenduserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
