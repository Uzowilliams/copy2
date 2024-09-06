# Uploads
(*uploads*)

## Overview

### Available Operations

* [abortMultipart](#abortmultipart) - Abort multipart upload
* [batchPresignMultipartParts](#batchpresignmultipartparts) - Generates batches of presigned URLs for multipart parts
* [completeExternalUpload](#completeexternalupload) - Completes a direct external upload
* [completeMultipart](#completemultipart) - Complete multipart upload
* [createMultipartUpload](#createmultipartupload) - Creates a multipart external upload
* [createUpload](#createupload) - Creates an upload
* [generatePresignedPut](#generatepresignedput) - Initiates a direct external upload

## abortMultipart

This endpoint aborts the multipart upload initiated with /create-multipart.
This should be used when cancelling the upload. It does not matter if parts
were already uploaded into the external storage provider.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.abortMultipart({
    externalUploadIdentifier: "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsAbortMultipart } from "@lukehagar/discoursejs/funcs/uploadsAbortMultipart.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsAbortMultipart(sdk, {
    externalUploadIdentifier: "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AbortMultipartRequestBody](../../sdk/models/operations/abortmultipartrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AbortMultipartResponseBody](../../sdk/models/operations/abortmultipartresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## batchPresignMultipartParts

Multipart uploads are uploaded in chunks or parts to individual presigned
URLs, similar to the one generated by /generate-presigned-put. The part
numbers provided must be between 1 and 10000. The total number of parts
will depend on the chunk size in bytes that you intend to use to upload
each chunk. For example a 12MB file may have 2 5MB chunks and a final
2MB chunk, for part numbers 1, 2, and 3.

This endpoint will return a presigned URL for each part number provided,
which you can then use to send PUT requests for the binary chunk corresponding
to that part. When the part is uploaded, the provider should return an
ETag for the part, and this should be stored along with the part number,
because this is needed to complete the multipart upload.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.batchPresignMultipartParts({
    partNumbers: [
      1,
      2,
      3,
    ],
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsBatchPresignMultipartParts } from "@lukehagar/discoursejs/funcs/uploadsBatchPresignMultipartParts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsBatchPresignMultipartParts(sdk, {
    partNumbers: [
      1,
      2,
      3,
    ],
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BatchPresignMultipartPartsRequestBody](../../sdk/models/operations/batchpresignmultipartpartsrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BatchPresignMultipartPartsResponseBody](../../sdk/models/operations/batchpresignmultipartpartsresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## completeExternalUpload

Completes an external upload initialized with /get-presigned-put. The
file will be moved from its temporary location in external storage to
a final destination in the S3 bucket. An Upload record will also be
created in the database in most cases.

If a sha1-checksum was provided in the initial request it will also
be compared with the uploaded file in storage to make sure the same
file was uploaded. The file size will be compared for the same reason.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.completeExternalUpload({
    forPrivateMessage: "true",
    forSiteSetting: "true",
    pasted: "true",
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsCompleteExternalUpload } from "@lukehagar/discoursejs/funcs/uploadsCompleteExternalUpload.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsCompleteExternalUpload(sdk, {
    forPrivateMessage: "true",
    forSiteSetting: "true",
    pasted: "true",
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompleteExternalUploadRequestBody](../../sdk/models/operations/completeexternaluploadrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CompleteExternalUploadResponseBody](../../sdk/models/operations/completeexternaluploadresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## completeMultipart

Completes the multipart upload in the external store, and copies the
file from its temporary location to its final location in the store.
All of the parts must have been uploaded to the external storage provider.
An Upload record will be completed in most cases once the file is copied
to its final location.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.completeMultipart({
    parts: [
      {
        "part_number": 1,
        "etag": "0c376dcfcc2606f4335bbc732de93344",
      },
      {
        "part_number": 2,
        "etag": "09ert8cfcc2606f4335bbc732de91122",
      },
    ],
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsCompleteMultipart } from "@lukehagar/discoursejs/funcs/uploadsCompleteMultipart.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsCompleteMultipart(sdk, {
    parts: [
      {
        "part_number": 1,
        "etag": "0c376dcfcc2606f4335bbc732de93344",
      },
      {
        "part_number": 2,
        "etag": "09ert8cfcc2606f4335bbc732de91122",
      },
    ],
    uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompleteMultipartRequestBody](../../sdk/models/operations/completemultipartrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CompleteMultipartResponseBody](../../sdk/models/operations/completemultipartresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## createMultipartUpload

Creates a multipart upload in the external storage provider, storing
a temporary reference to the external upload similar to /get-presigned-put.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.createMultipartUpload({
    fileName: "IMG_2021.jpeg",
    fileSize: 4096,
    uploadType: "card_background",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsCreateMultipartUpload } from "@lukehagar/discoursejs/funcs/uploadsCreateMultipartUpload.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsCreateMultipartUpload(sdk, {
    fileName: "IMG_2021.jpeg",
    fileSize: 4096,
    uploadType: "card_background",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMultipartUploadRequestBody](../../sdk/models/operations/createmultipartuploadrequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateMultipartUploadResponseBody](../../sdk/models/operations/createmultipartuploadresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## createUpload

Creates an upload

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.createUpload();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsCreateUpload } from "@lukehagar/discoursejs/funcs/uploadsCreateUpload.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsCreateUpload(sdk);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUploadRequestBody](../../sdk/models/operations/createuploadrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateUploadResponseBody](../../sdk/models/operations/createuploadresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## generatePresignedPut

Direct external uploads bypass the usual method of creating uploads
via the POST /uploads route, and upload directly to an external provider,
which by default is S3. This route begins the process, and will return
a unique identifier for the external upload as well as a presigned URL
which is where the file binary blob should be uploaded to.

Once the upload is complete to the external service, you must call the
POST /complete-external-upload route using the unique identifier returned
by this route, which will create any required Upload record in the Discourse
database and also move file from its temporary location to the final
destination in the external storage service.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.generatePresignedPut({
    fileName: "IMG_2021.jpeg",
    fileSize: 4096,
    type: "card_background",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@lukehagar/discoursejs/core.js";
import { uploadsGeneratePresignedPut } from "@lukehagar/discoursejs/funcs/uploadsGeneratePresignedPut.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await uploadsGeneratePresignedPut(sdk, {
    fileName: "IMG_2021.jpeg",
    fileSize: 4096,
    type: "avatar",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GeneratePresignedPutRequestBody](../../sdk/models/operations/generatepresignedputrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GeneratePresignedPutResponseBody](../../sdk/models/operations/generatepresignedputresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
