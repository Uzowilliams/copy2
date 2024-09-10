# @lukehagar/discoursejs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Discourse API Documentation: This page contains the documentation on how to use Discourse through API calls.

> Note: For any endpoints not listed you can follow the
[reverse engineer the Discourse API](https://meta.discourse.org/t/-/20576)
guide to figure out how to use an API endpoint.

### Request Content-Type

The Content-Type for POST and PUT requests can be set to `application/x-www-form-urlencoded`,
`multipart/form-data`, or `application/json`.

### Endpoint Names and Response Content-Type

Most API endpoints provide the same content as their HTML counterparts. For example
the URL `/categories` serves a list of categories, the `/categories.json` API provides the
same information in JSON format.

Instead of sending API requests to `/categories.json` you may also send them to `/categories`
and add an `Accept: application/json` header to the request to get the JSON response.
Sending requests with the `Accept` header is necessary if you want to use URLs
for related endpoints returned by the API, such as pagination URLs.
These URLs are returned without the `.json` prefix so you need to add the header in
order to get the correct response format.

### Authentication

Some endpoints do not require any authentication, pretty much anything else will
require you to be authenticated.

To become authenticated you will need to create an API Key from the admin panel.

Once you have your API Key you can pass it in along with your API Username
as an HTTP header like this:

```
curl -X GET "http://127.0.0.1:3000/admin/users/list/active.json" \
-H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
-H "Api-Username: system"
```

and this is how POST requests will look:

```
curl -X POST "http://127.0.0.1:3000/categories" \
-H "Content-Type: multipart/form-data;" \
-H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
-H "Api-Username: system" \
-F "name=89853c20-4409-e91a-a8ea-f6cdff96aaaa" \
-F "color=49d9e9" \
-F "text_color=f0fcfd"
```

### Boolean values

If an endpoint accepts a boolean be sure to specify it as a lowercase
`true` or `false` value unless noted otherwise.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @lukehagar/discoursejs
```

### PNPM

```bash
pnpm add @lukehagar/discoursejs
```

### Bun

```bash
bun add @lukehagar/discoursejs
```

### Yarn

```bash
yarn add @lukehagar/discoursejs zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.backups.createBackup();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [backups](docs/sdks/backups/README.md)

* [createBackup](docs/sdks/backups/README.md#createbackup) - Create backup
* [downloadBackup](docs/sdks/backups/README.md#downloadbackup) - Download backup
* [getBackups](docs/sdks/backups/README.md#getbackups) - List backups
* [sendDownloadBackupEmail](docs/sdks/backups/README.md#senddownloadbackupemail) - Send download backup email

### [badges](docs/sdks/badges/README.md)

* [adminListBadges](docs/sdks/badges/README.md#adminlistbadges) - List badges
* [createBadge](docs/sdks/badges/README.md#createbadge) - Create badge
* [deleteBadge](docs/sdks/badges/README.md#deletebadge) - Delete badge
* [listUserBadges](docs/sdks/badges/README.md#listuserbadges) - List badges for a user
* [updateBadge](docs/sdks/badges/README.md#updatebadge) - Update badge

### [groups](docs/sdks/groups/README.md)

* [addGroupMembers](docs/sdks/groups/README.md#addgroupmembers) - Add group members
* [createGroup](docs/sdks/groups/README.md#creategroup) - Create a group
* [deleteGroup](docs/sdks/groups/README.md#deletegroup) - Delete a group
* [getGroup](docs/sdks/groups/README.md#getgroup) - Get a group
* [listGroupMembers](docs/sdks/groups/README.md#listgroupmembers) - List group members
* [listGroups](docs/sdks/groups/README.md#listgroups) - List groups
* [removeGroupMembers](docs/sdks/groups/README.md#removegroupmembers) - Remove group members
* [updateGroup](docs/sdks/groups/README.md#updategroup) - Update a group

### [users](docs/sdks/users/README.md)

* [activateUser](docs/sdks/users/README.md#activateuser) - Activate a user
* [adminGetUser](docs/sdks/users/README.md#admingetuser) - Get a user by id
* [adminListUsers](docs/sdks/users/README.md#adminlistusers) - Get a list of users
* [anonymizeUser](docs/sdks/users/README.md#anonymizeuser) - Anonymize a user
* [changePassword](docs/sdks/users/README.md#changepassword) - Change password
* [createUser](docs/sdks/users/README.md#createuser) - Creates a user
* [deactivateUser](docs/sdks/users/README.md#deactivateuser) - Deactivate a user
* [deleteUser](docs/sdks/users/README.md#deleteuser) - Delete a user
* [getUser](docs/sdks/users/README.md#getuser) - Get a single user by username
* [getUserEmails](docs/sdks/users/README.md#getuseremails) - Get email addresses belonging to a user
* [getUserExternalId](docs/sdks/users/README.md#getuserexternalid) - Get a user by external_id
* [getUserIdentiyProviderExternalId](docs/sdks/users/README.md#getuseridentiyproviderexternalid) - Get a user by identity provider external ID
* [listUserActions](docs/sdks/users/README.md#listuseractions) - Get a list of user actions
* [listUserBadges](docs/sdks/users/README.md#listuserbadges) - List badges for a user
* [listUsersPublic](docs/sdks/users/README.md#listuserspublic) - Get a public list of users
* [logOutUser](docs/sdks/users/README.md#logoutuser) - Log a user out
* [refreshGravatar](docs/sdks/users/README.md#refreshgravatar) - Refresh gravatar
* [sendPasswordResetEmail](docs/sdks/users/README.md#sendpasswordresetemail) - Send password reset email
* [silenceUser](docs/sdks/users/README.md#silenceuser) - Silence a user
* [suspendUser](docs/sdks/users/README.md#suspenduser) - Suspend a user
* [updateAvatar](docs/sdks/users/README.md#updateavatar) - Update avatar
* [updateEmail](docs/sdks/users/README.md#updateemail) - Update email
* [updateUser](docs/sdks/users/README.md#updateuser) - Update a user
* [updateUsername](docs/sdks/users/README.md#updateusername) - Update username

### [admin](docs/sdks/admin/README.md)

* [activateUser](docs/sdks/admin/README.md#activateuser) - Activate a user
* [adminGetUser](docs/sdks/admin/README.md#admingetuser) - Get a user by id
* [adminListUsers](docs/sdks/admin/README.md#adminlistusers) - Get a list of users
* [anonymizeUser](docs/sdks/admin/README.md#anonymizeuser) - Anonymize a user
* [deactivateUser](docs/sdks/admin/README.md#deactivateuser) - Deactivate a user
* [deleteUser](docs/sdks/admin/README.md#deleteuser) - Delete a user
* [logOutUser](docs/sdks/admin/README.md#logoutuser) - Log a user out
* [refreshGravatar](docs/sdks/admin/README.md#refreshgravatar) - Refresh gravatar
* [silenceUser](docs/sdks/admin/README.md#silenceuser) - Silence a user
* [suspendUser](docs/sdks/admin/README.md#suspenduser) - Suspend a user

### [categories](docs/sdks/categories/README.md)

* [createCategory](docs/sdks/categories/README.md#createcategory) - Creates a category
* [getCategory](docs/sdks/categories/README.md#getcategory) - Show category
* [getSite](docs/sdks/categories/README.md#getsite) - Get site info
* [listCategories](docs/sdks/categories/README.md#listcategories) - Retrieves a list of categories
* [listCategoryTopics](docs/sdks/categories/README.md#listcategorytopics) - List topics
* [updateCategory](docs/sdks/categories/README.md#updatecategory) - Updates a category

### [invites](docs/sdks/invites/README.md)

* [createInvite](docs/sdks/invites/README.md#createinvite) - Create an invite
* [inviteToTopic](docs/sdks/invites/README.md#invitetotopic) - Invite to topic

### [topics](docs/sdks/topics/README.md)

* [bookmarkTopic](docs/sdks/topics/README.md#bookmarktopic) - Bookmark topic
* [createTopicPostPM](docs/sdks/topics/README.md#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [createTopicTimer](docs/sdks/topics/README.md#createtopictimer) - Create topic timer
* [getTopic](docs/sdks/topics/README.md#gettopic) - Get a single topic
* [getTopicByExternalId](docs/sdks/topics/README.md#gettopicbyexternalid) - Get topic by external_id
* [inviteToTopic](docs/sdks/topics/README.md#invitetotopic) - Invite to topic
* [listLatestTopics](docs/sdks/topics/README.md#listlatesttopics) - Get the latest topics
* [listTopTopics](docs/sdks/topics/README.md#listtoptopics) - Get the top topics filtered by period
* [removeTopic](docs/sdks/topics/README.md#removetopic) - Remove a topic
* [setNotificationLevel](docs/sdks/topics/README.md#setnotificationlevel) - Set notification level
* [updateTopic](docs/sdks/topics/README.md#updatetopic) - Update a topic
* [updateTopicStatus](docs/sdks/topics/README.md#updatetopicstatus) - Update the status of a topic
* [updateTopicTimestamp](docs/sdks/topics/README.md#updatetopictimestamp) - Update topic timestamp

### [notifications](docs/sdks/notifications/README.md)

* [getNotifications](docs/sdks/notifications/README.md#getnotifications) - Get the notifications that belong to the current user
* [markNotificationsAsRead](docs/sdks/notifications/README.md#marknotificationsasread) - Mark notifications as read

### [posts](docs/sdks/posts/README.md)

* [createTopicPostPM](docs/sdks/posts/README.md#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [deletePost](docs/sdks/posts/README.md#deletepost) - delete a single post
* [getPost](docs/sdks/posts/README.md#getpost) - Retrieve a single post
* [listPosts](docs/sdks/posts/README.md#listposts) - List latest posts across topics
* [lockPost](docs/sdks/posts/README.md#lockpost) - Lock a post from being edited
* [performPostAction](docs/sdks/posts/README.md#performpostaction) - Like a post and other actions
* [postReplies](docs/sdks/posts/README.md#postreplies) - List replies to a post
* [updatePost](docs/sdks/posts/README.md#updatepost) - Update a single post

### [privateMessages](docs/sdks/privatemessages/README.md)

* [createTopicPostPM](docs/sdks/privatemessages/README.md#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [getUserSentPrivateMessages](docs/sdks/privatemessages/README.md#getusersentprivatemessages) - Get a list of private messages sent for a user
* [listUserPrivateMessages](docs/sdks/privatemessages/README.md#listuserprivatemessages) - Get a list of private messages for a user

### [search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search for a term

### [site](docs/sdks/site/README.md)

* [getSite](docs/sdks/site/README.md#getsite) - Get site info

### [tags](docs/sdks/tags/README.md)

* [createTagGroup](docs/sdks/tags/README.md#createtaggroup) - Creates a tag group
* [getTag](docs/sdks/tags/README.md#gettag) - Get a specific tag
* [getTagGroup](docs/sdks/tags/README.md#gettaggroup) - Get a single tag group
* [listTagGroups](docs/sdks/tags/README.md#listtaggroups) - Get a list of tag groups
* [listTags](docs/sdks/tags/README.md#listtags) - Get a list of tags
* [updateTagGroup](docs/sdks/tags/README.md#updatetaggroup) - Update tag group

### [uploads](docs/sdks/uploads/README.md)

* [abortMultipart](docs/sdks/uploads/README.md#abortmultipart) - Abort multipart upload
* [batchPresignMultipartParts](docs/sdks/uploads/README.md#batchpresignmultipartparts) - Generates batches of presigned URLs for multipart parts
* [completeExternalUpload](docs/sdks/uploads/README.md#completeexternalupload) - Completes a direct external upload
* [completeMultipart](docs/sdks/uploads/README.md#completemultipart) - Complete multipart upload
* [createMultipartUpload](docs/sdks/uploads/README.md#createmultipartupload) - Creates a multipart external upload
* [createUpload](docs/sdks/uploads/README.md#createupload) - Creates an upload
* [generatePresignedPut](docs/sdks/uploads/README.md#generatepresignedput) - Initiates a direct external upload
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SDK } from "@lukehagar/discoursejs";
import { SDKValidationError } from "@lukehagar/discoursejs/sdk/models/errors";

const sdk = new SDK();

async function run() {
  let result;
  try {
    result = await sdk.backups.createBackup();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://{defaultHost}` | `defaultHost` (default is `discourse.example.com`) |

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK({
  serverIdx: 0,
});

async function run() {
  const result = await sdk.backups.createBackup();

  // Handle the result
  console.log(result);
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `defaultHost: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK({
  serverURL: "https://{defaultHost}",
});

async function run() {
  const result = await sdk.backups.createBackup();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { HTTPClient } from "@lukehagar/discoursejs/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.uploads.createUpload();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK();

async function run() {
  const result = await sdk.backups.createBackup({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await sdk.backups.createBackup();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "@lukehagar/discoursejs";

const sdk = new SDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [adminActivateUser](docs/sdks/admin/README.md#activateuser)
- [adminAdminGetUser](docs/sdks/admin/README.md#admingetuser)
- [adminAdminListUsers](docs/sdks/admin/README.md#adminlistusers)
- [adminAnonymizeUser](docs/sdks/admin/README.md#anonymizeuser)
- [adminDeactivateUser](docs/sdks/admin/README.md#deactivateuser)
- [adminDeleteUser](docs/sdks/admin/README.md#deleteuser)
- [adminLogOutUser](docs/sdks/admin/README.md#logoutuser)
- [adminRefreshGravatar](docs/sdks/admin/README.md#refreshgravatar)
- [adminSilenceUser](docs/sdks/admin/README.md#silenceuser)
- [adminSuspendUser](docs/sdks/admin/README.md#suspenduser)
- [backupsCreateBackup](docs/sdks/backups/README.md#createbackup)
- [backupsDownloadBackup](docs/sdks/backups/README.md#downloadbackup)
- [backupsGetBackups](docs/sdks/backups/README.md#getbackups)
- [backupsSendDownloadBackupEmail](docs/sdks/backups/README.md#senddownloadbackupemail)
- [badgesAdminListBadges](docs/sdks/badges/README.md#adminlistbadges)
- [badgesCreateBadge](docs/sdks/badges/README.md#createbadge)
- [badgesDeleteBadge](docs/sdks/badges/README.md#deletebadge)
- [badgesListUserBadges](docs/sdks/badges/README.md#listuserbadges)
- [badgesUpdateBadge](docs/sdks/badges/README.md#updatebadge)
- [categoriesCreateCategory](docs/sdks/categories/README.md#createcategory)
- [categoriesGetCategory](docs/sdks/categories/README.md#getcategory)
- [categoriesGetSite](docs/sdks/categories/README.md#getsite)
- [categoriesListCategories](docs/sdks/categories/README.md#listcategories)
- [categoriesListCategoryTopics](docs/sdks/categories/README.md#listcategorytopics)
- [categoriesUpdateCategory](docs/sdks/categories/README.md#updatecategory)
- [groupsAddGroupMembers](docs/sdks/groups/README.md#addgroupmembers)
- [groupsCreateGroup](docs/sdks/groups/README.md#creategroup)
- [groupsDeleteGroup](docs/sdks/groups/README.md#deletegroup)
- [groupsGetGroup](docs/sdks/groups/README.md#getgroup)
- [groupsListGroupMembers](docs/sdks/groups/README.md#listgroupmembers)
- [groupsListGroups](docs/sdks/groups/README.md#listgroups)
- [groupsRemoveGroupMembers](docs/sdks/groups/README.md#removegroupmembers)
- [groupsUpdateGroup](docs/sdks/groups/README.md#updategroup)
- [invitesCreateInvite](docs/sdks/invites/README.md#createinvite)
- [invitesInviteToTopic](docs/sdks/invites/README.md#invitetotopic)
- [notificationsGetNotifications](docs/sdks/notifications/README.md#getnotifications)
- [notificationsMarkNotificationsAsRead](docs/sdks/notifications/README.md#marknotificationsasread)
- [postsCreateTopicPostPM](docs/sdks/posts/README.md#createtopicpostpm)
- [postsDeletePost](docs/sdks/posts/README.md#deletepost)
- [postsGetPost](docs/sdks/posts/README.md#getpost)
- [postsListPosts](docs/sdks/posts/README.md#listposts)
- [postsLockPost](docs/sdks/posts/README.md#lockpost)
- [postsPerformPostAction](docs/sdks/posts/README.md#performpostaction)
- [postsPostReplies](docs/sdks/posts/README.md#postreplies)
- [postsUpdatePost](docs/sdks/posts/README.md#updatepost)
- [privateMessagesCreateTopicPostPM](docs/sdks/privatemessages/README.md#createtopicpostpm)
- [privateMessagesGetUserSentPrivateMessages](docs/sdks/privatemessages/README.md#getusersentprivatemessages)
- [privateMessagesListUserPrivateMessages](docs/sdks/privatemessages/README.md#listuserprivatemessages)
- [searchSearch](docs/sdks/search/README.md#search)
- [siteGetSite](docs/sdks/site/README.md#getsite)
- [tagsCreateTagGroup](docs/sdks/tags/README.md#createtaggroup)
- [tagsGetTagGroup](docs/sdks/tags/README.md#gettaggroup)
- [tagsGetTag](docs/sdks/tags/README.md#gettag)
- [tagsListTagGroups](docs/sdks/tags/README.md#listtaggroups)
- [tagsListTags](docs/sdks/tags/README.md#listtags)
- [tagsUpdateTagGroup](docs/sdks/tags/README.md#updatetaggroup)
- [topicsBookmarkTopic](docs/sdks/topics/README.md#bookmarktopic)
- [topicsCreateTopicPostPM](docs/sdks/topics/README.md#createtopicpostpm)
- [topicsCreateTopicTimer](docs/sdks/topics/README.md#createtopictimer)
- [topicsGetTopicByExternalId](docs/sdks/topics/README.md#gettopicbyexternalid)
- [topicsGetTopic](docs/sdks/topics/README.md#gettopic)
- [topicsInviteToTopic](docs/sdks/topics/README.md#invitetotopic)
- [topicsListLatestTopics](docs/sdks/topics/README.md#listlatesttopics)
- [topicsListTopTopics](docs/sdks/topics/README.md#listtoptopics)
- [topicsRemoveTopic](docs/sdks/topics/README.md#removetopic)
- [topicsSetNotificationLevel](docs/sdks/topics/README.md#setnotificationlevel)
- [topicsUpdateTopicStatus](docs/sdks/topics/README.md#updatetopicstatus)
- [topicsUpdateTopicTimestamp](docs/sdks/topics/README.md#updatetopictimestamp)
- [topicsUpdateTopic](docs/sdks/topics/README.md#updatetopic)
- [uploadsAbortMultipart](docs/sdks/uploads/README.md#abortmultipart)
- [uploadsBatchPresignMultipartParts](docs/sdks/uploads/README.md#batchpresignmultipartparts)
- [uploadsCompleteExternalUpload](docs/sdks/uploads/README.md#completeexternalupload)
- [uploadsCompleteMultipart](docs/sdks/uploads/README.md#completemultipart)
- [uploadsCreateMultipartUpload](docs/sdks/uploads/README.md#createmultipartupload)
- [uploadsCreateUpload](docs/sdks/uploads/README.md#createupload)
- [uploadsGeneratePresignedPut](docs/sdks/uploads/README.md#generatepresignedput)
- [usersActivateUser](docs/sdks/users/README.md#activateuser)
- [usersAdminGetUser](docs/sdks/users/README.md#admingetuser)
- [usersAdminListUsers](docs/sdks/users/README.md#adminlistusers)
- [usersAnonymizeUser](docs/sdks/users/README.md#anonymizeuser)
- [usersChangePassword](docs/sdks/users/README.md#changepassword)
- [usersCreateUser](docs/sdks/users/README.md#createuser)
- [usersDeactivateUser](docs/sdks/users/README.md#deactivateuser)
- [usersDeleteUser](docs/sdks/users/README.md#deleteuser)
- [usersGetUserEmails](docs/sdks/users/README.md#getuseremails)
- [usersGetUserExternalId](docs/sdks/users/README.md#getuserexternalid)
- [usersGetUserIdentiyProviderExternalId](docs/sdks/users/README.md#getuseridentiyproviderexternalid)
- [usersGetUser](docs/sdks/users/README.md#getuser)
- [usersListUserActions](docs/sdks/users/README.md#listuseractions)
- [usersListUserBadges](docs/sdks/users/README.md#listuserbadges)
- [usersListUsersPublic](docs/sdks/users/README.md#listuserspublic)
- [usersLogOutUser](docs/sdks/users/README.md#logoutuser)
- [usersRefreshGravatar](docs/sdks/users/README.md#refreshgravatar)
- [usersSendPasswordResetEmail](docs/sdks/users/README.md#sendpasswordresetemail)
- [usersSilenceUser](docs/sdks/users/README.md#silenceuser)
- [usersSuspendUser](docs/sdks/users/README.md#suspenduser)
- [usersUpdateAvatar](docs/sdks/users/README.md#updateavatar)
- [usersUpdateEmail](docs/sdks/users/README.md#updateemail)
- [usersUpdateUser](docs/sdks/users/README.md#updateuser)
- [usersUpdateUsername](docs/sdks/users/README.md#updateusername)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
