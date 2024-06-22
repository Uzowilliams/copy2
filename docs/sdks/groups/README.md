# Groups
(*groups*)

### Available Operations

* [addGroupMembers](#addgroupmembers) - Add group members
* [createGroup](#creategroup) - Create a group
* [deleteGroup](#deletegroup) - Delete a group
* [getGroup](#getgroup) - Get a group
* [listGroupMembers](#listgroupmembers) - List group members
* [listGroups](#listgroups) - List groups
* [removeGroupMembers](#removegroupmembers) - Remove group members
* [updateGroup](#updategroup) - Update a group

## addGroupMembers

Add group members

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { AddGroupMembersRequest, AddGroupMembersRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 985975;
const requestBody: AddGroupMembersRequestBody = {
  usernames: "username1,username2",
};

  const res = await sdk.groups.addGroupMembers(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.AddGroupMembersRequestBody](../../sdk/models/operations/addgroupmembersrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AddGroupMembersResponse](../../sdk/models/operations/addgroupmembersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createGroup

Create a group

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.groups.createGroup({
    group: {
      mutedCategoryIds: [
        385163,
      ],
      name: "<value>",
      regularCategoryIds: [
        723588,
      ],
      trackingCategoryIds: [
        835377,
      ],
      watchingCategoryIds: [
        370420,
      ],
      watchingFirstPostCategoryIds: [
        831661,
      ],
    },
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
| `request`                                                                                  | [operations.CreateGroupRequestBody](../../sdk/models/operations/creategrouprequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateGroupResponse](../../sdk/models/operations/creategroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteGroup

Delete a group

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { DeleteGroupRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 21302;

  const res = await sdk.groups.deleteGroup(id);

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

**Promise<[operations.DeleteGroupResponse](../../sdk/models/operations/deletegroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getGroup

Get a group

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { GetGroupRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: string = "name";

  const res = await sdk.groups.getGroup(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Use group name instead of id                                 | name                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetGroupResponse](../../sdk/models/operations/getgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listGroupMembers

List group members

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { ListGroupMembersRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: string = "name";

  const res = await sdk.groups.listGroupMembers(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Use group name instead of id                                 | name                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListGroupMembersResponse](../../sdk/models/operations/listgroupmembersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listGroups

List groups

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.groups.listGroups();

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

**Promise<[operations.ListGroupsResponse](../../sdk/models/operations/listgroupsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeGroupMembers

Remove group members

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { RemoveGroupMembersRequest, RemoveGroupMembersRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 649523;
const requestBody: RemoveGroupMembersRequestBody = {
  usernames: "username1,username2",
};

  const res = await sdk.groups.removeGroupMembers(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `requestBody`                                                                                            | [operations.RemoveGroupMembersRequestBody](../../sdk/models/operations/removegroupmembersrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.RemoveGroupMembersResponse](../../sdk/models/operations/removegroupmembersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateGroup

Update a group

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { UpdateGroupGroup, UpdateGroupRequest, UpdateGroupRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const id: number = 438471;
const requestBody: UpdateGroupRequestBody = {
  group: {
    mutedCategoryIds: [
      244551,
    ],
    name: "<value>",
    regularCategoryIds: [
      750192,
    ],
    trackingCategoryIds: [
      733973,
    ],
    watchingCategoryIds: [
      485153,
    ],
    watchingFirstPostCategoryIds: [
      710652,
    ],
  },
};

  const res = await sdk.groups.updateGroup(id, requestBody);

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
| `requestBody`                                                                              | [operations.UpdateGroupRequestBody](../../sdk/models/operations/updategrouprequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateGroupResponse](../../sdk/models/operations/updategroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
