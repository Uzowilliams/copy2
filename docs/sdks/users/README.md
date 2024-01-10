# Users
(*users*)

### Available Operations

* [activateUser](#activateuser) - Activate a user
* [adminGetUser](#admingetuser) - Get a user by id
* [adminListUsers](#adminlistusers) - Get a list of users
* [anonymizeUser](#anonymizeuser) - Anonymize a user
* [changePassword](#changepassword) - Change password
* [createUser](#createuser) - Creates a user
* [deactivateUser](#deactivateuser) - Deactivate a user
* [deleteUser](#deleteuser) - Delete a user
* [getUser](#getuser) - Get a single user by username
* [getUserEmails](#getuseremails) - Get email addresses belonging to a user
* [getUserExternalId](#getuserexternalid) - Get a user by external_id
* [getUserIdentiyProviderExternalId](#getuseridentiyproviderexternalid) - Get a user by identity provider external ID
* [listUserActions](#listuseractions) - Get a list of user actions
* [listUserBadges](#listuserbadges) - List badges for a user
* [listUsersPublic](#listuserspublic) - Get a public list of users
* [logOutUser](#logoutuser) - Log a user out
* [refreshGravatar](#refreshgravatar) - Refresh gravatar
* [sendPasswordResetEmail](#sendpasswordresetemail) - Send password reset email
* [silenceUser](#silenceuser) - Silence a user
* [suspendUser](#suspenduser) - Suspend a user
* [updateAvatar](#updateavatar) - Update avatar
* [updateEmail](#updateemail) - Update email
* [updateUser](#updateuser) - Update a user
* [updateUsername](#updateusername) - Update username

## activateUser

Activate a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { ActivateUserRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 203554;

  const res = await sdk.users.activateUser(id);

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
import { SDK } from "discoursejs";
import { AdminGetUserRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 386776;

  const res = await sdk.users.adminGetUser(id);

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
import { SDK } from "discoursejs";
import { Flag, QueryParamAsc, QueryParamOrder } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();

  const res = await sdk.users.adminListUsers({
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
import { SDK } from "discoursejs";
import { AnonymizeUserRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 418778;

  const res = await sdk.users.anonymizeUser(id);

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

## changePassword

Change password

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { ChangePasswordRequest, ChangePasswordRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const token: string = "string";
const requestBody: ChangePasswordRequestBody = {
  password: "Gm1zHM7WngzsMbv",
  username: "Ines.Grady",
};

  const res = await sdk.users.changePassword(token, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `token`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.ChangePasswordRequestBody](../../sdk/models/operations/changepasswordrequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ChangePasswordResponse](../../sdk/models/operations/changepasswordresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createUser

Creates a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { CreateUserRequest, CreateUserRequestBody, ExternalIds } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const requestBody: CreateUserRequestBody = {
  email: "Hailey.Effertz62@yahoo.com",
  externalIds: {},
  name: "string",
  password: "Pd4wq13VrTPEl8B",
  username: "Domenico_Gottlieb",
};

  const res = await sdk.users.createUser(apiKey, apiUsername, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiKey`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `apiUsername`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.CreateUserRequestBody](../../sdk/models/operations/createuserrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateUserResponse](../../sdk/models/operations/createuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deactivateUser

Deactivate a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { DeactivateUserRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 143950;

  const res = await sdk.users.deactivateUser(id);

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
import { SDK } from "discoursejs";
import { DeleteUserRequest, DeleteUserRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 251343;
const requestBody: DeleteUserRequestBody = {};

  const res = await sdk.users.deleteUser(id, requestBody);

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

## getUser

Get a single user by username

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { GetUserRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const username: string = "string";

  const res = await sdk.users.getUser(apiKey, apiUsername, username);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiKey`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `apiUsername`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `username`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUserResponse](../../sdk/models/operations/getuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUserEmails

Get email addresses belonging to a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { GetUserEmailsRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";

  const res = await sdk.users.getUserEmails(username);

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

**Promise<[operations.GetUserEmailsResponse](../../sdk/models/operations/getuseremailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUserExternalId

Get a user by external_id

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { GetUserExternalIdRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const externalId: string = "string";

  const res = await sdk.users.getUserExternalId(apiKey, apiUsername, externalId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiKey`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `apiUsername`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `externalId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUserExternalIdResponse](../../sdk/models/operations/getuserexternalidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUserIdentiyProviderExternalId

Get a user by identity provider external ID

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { GetUserIdentiyProviderExternalIdRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const externalId: string = "string";
const provider: string = "string";

  const res = await sdk.users.getUserIdentiyProviderExternalId(apiKey, apiUsername, externalId, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `apiUsername`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `provider`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Authentication provider name. Can be found in the provider callback URL: `/auth/{provider}/callback` |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUserIdentiyProviderExternalIdResponse](../../sdk/models/operations/getuseridentiyproviderexternalidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUserActions

Get a list of user actions

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { ListUserActionsRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const filter: string = "string";
const offset: number = 620550;
const username: string = "string";

  const res = await sdk.users.listUserActions(filter, offset, username);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filter`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `username`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListUserActionsResponse](../../sdk/models/operations/listuseractionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUserBadges

List badges for a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { ListUserBadgesRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";

  const res = await sdk.users.listUserBadges(username);

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

**Promise<[operations.ListUserBadgesResponse](../../sdk/models/operations/listuserbadgesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUsersPublic

Get a public list of users

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { Asc, ListUsersPublicRequest, Order, Period } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const order: Order = Order.TopicCount;
const period: Period = Period.Monthly;
const asc: Asc = Asc.True;
const page: number = 772202;

  const res = await sdk.users.listUsersPublic(order, period, asc, page);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `order`                                                      | [operations.Order](../../sdk/models/operations/order.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `period`                                                     | [operations.Period](../../sdk/models/operations/period.md)   | :heavy_check_mark:                                           | N/A                                                          |
| `asc`                                                        | [operations.Asc](../../sdk/models/operations/asc.md)         | :heavy_minus_sign:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListUsersPublicResponse](../../sdk/models/operations/listuserspublicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## logOutUser

Log a user out

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { LogOutUserRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 379568;

  const res = await sdk.users.logOutUser(id);

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
import { SDK } from "discoursejs";
import { RefreshGravatarRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";

  const res = await sdk.users.refreshGravatar(username);

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

## sendPasswordResetEmail

Send password reset email

### Example Usage

```typescript
import { SDK } from "discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.users.sendPasswordResetEmail({
    login: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.SendPasswordResetEmailRequestBody](../../sdk/models/operations/sendpasswordresetemailrequestbody.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.SendPasswordResetEmailResponse](../../sdk/models/operations/sendpasswordresetemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## silenceUser

Silence a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { SilenceUserRequest, SilenceUserRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 606247;
const requestBody: SilenceUserRequestBody = {
  postAction: "delete",
  silencedTill: "2022-06-01T08:00:00.000Z",
};

  const res = await sdk.users.silenceUser(id, requestBody);

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
import { SDK } from "discoursejs";
import { SuspendUserRequest, SuspendUserRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 970832;
const requestBody: SuspendUserRequestBody = {
  postAction: "delete",
  reason: "string",
  suspendUntil: "2121-02-22",
};

  const res = await sdk.users.suspendUser(id, requestBody);

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

## updateAvatar

Update avatar

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { UpdateAvatarRequest, UpdateAvatarRequestBody, UpdateAvatarType } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";
const requestBody: UpdateAvatarRequestBody = {
  type: UpdateAvatarType.Gravatar,
  uploadId: 261978,
};

  const res = await sdk.users.updateAvatar(username, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `username`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [operations.UpdateAvatarRequestBody](../../sdk/models/operations/updateavatarrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateAvatarResponse](../../sdk/models/operations/updateavatarresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateEmail

Update email

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { UpdateEmailRequest, UpdateEmailRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";
const requestBody: UpdateEmailRequestBody = {
  email: "Jodie.Reichel79@yahoo.com",
};

  const res = await sdk.users.updateEmail(username, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `username`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.UpdateEmailRequestBody](../../sdk/models/operations/updateemailrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateEmailResponse](../../sdk/models/operations/updateemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUser

Update a user

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { UpdateUserExternalIds, UpdateUserRequest, UpdateUserRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "string";
const apiUsername: string = "string";
const username: string = "string";
const requestBody: UpdateUserRequestBody = {
  externalIds: {},
};

  const res = await sdk.users.updateUser(apiKey, apiUsername, username, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiKey`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `apiUsername`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `username`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.UpdateUserRequestBody](../../sdk/models/operations/updateuserrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateUserResponse](../../sdk/models/operations/updateuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUsername

Update username

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { UpdateUsernameRequest, UpdateUsernameRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const username: string = "string";
const requestBody: UpdateUsernameRequestBody = {
  newUsername: "string",
};

  const res = await sdk.users.updateUsername(username, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `username`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.UpdateUsernameRequestBody](../../sdk/models/operations/updateusernamerequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateUsernameResponse](../../sdk/models/operations/updateusernameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
