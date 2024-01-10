# Backups
(*backups*)

### Available Operations

* [createBackup](#createbackup) - Create backup
* [downloadBackup](#downloadbackup) - Download backup
* [getBackups](#getbackups) - List backups
* [sendDownloadBackupEmail](#senddownloadbackupemail) - Send download backup email

## createBackup

Create backup

### Example Usage

```typescript
import { SDK } from "discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.backups.createBackup({
    withUploads: false,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateBackupRequestBody](../../sdk/models/operations/createbackuprequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateBackupResponse](../../sdk/models/operations/createbackupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## downloadBackup

Download backup

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { DownloadBackupRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const filename: string = "string";
const token: string = "string";

  const res = await sdk.backups.downloadBackup(filename, token);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `token`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DownloadBackupResponse](../../sdk/models/operations/downloadbackupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBackups

List backups

### Example Usage

```typescript
import { SDK } from "discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.backups.getBackups();

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

**Promise<[operations.GetBackupsResponse](../../sdk/models/operations/getbackupsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## sendDownloadBackupEmail

Send download backup email

### Example Usage

```typescript
import { SDK } from "discoursejs";
import { SendDownloadBackupEmailRequest } from "discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const filename: string = "string";

  const res = await sdk.backups.sendDownloadBackupEmail(filename);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SendDownloadBackupEmailResponse](../../sdk/models/operations/senddownloadbackupemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
