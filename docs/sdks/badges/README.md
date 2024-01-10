# Badges
(*badges*)

### Available Operations

* [adminListBadges](#adminlistbadges) - List badges
* [createBadge](#createbadge) - Create badge
* [deleteBadge](#deletebadge) - Delete badge
* [listUserBadges](#listuserbadges) - List badges for a user
* [updateBadge](#updatebadge) - Update badge

## adminListBadges

List badges

### Example Usage

```typescript
import { SDK } from "discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.badges.adminListBadges();

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

**Promise<[operations.AdminListBadgesResponse](../../sdk/models/operations/adminlistbadgesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createBadge

Create badge

### Example Usage

```typescript
import { SDK } from "discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.badges.createBadge({
    badgeTypeId: 190613,
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateBadgeRequestBody](../../sdk/models/operations/createbadgerequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateBadgeResponse](../../sdk/models/operations/createbadgeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteBadge

Delete badge

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { DeleteBadgeRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 32345;

  const res = await sdk.badges.deleteBadge(id);

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

**Promise<[operations.DeleteBadgeResponse](../../sdk/models/operations/deletebadgeresponse.md)>**
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

  const res = await sdk.badges.listUserBadges(username);

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

## updateBadge

Update badge

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { UpdateBadgeRequest, UpdateBadgeRequestBody } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 280628;
const requestBody: UpdateBadgeRequestBody = {
  badgeTypeId: 568845,
  name: "string",
};

  const res = await sdk.badges.updateBadge(id, requestBody);

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
| `requestBody`                                                                              | [operations.UpdateBadgeRequestBody](../../sdk/models/operations/updatebadgerequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateBadgeResponse](../../sdk/models/operations/updatebadgeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
