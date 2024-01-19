# @lukehagar/discoursejs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @lukehagar/discoursejs
```

### Yarn

```bash
yarn add @lukehagar/discoursejs
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "@lukehagar/discoursejs";

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

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
    const sdk = new SDK();

    let res;
    try {
        res = await sdk.backups.createBackup({
            withUploads: false,
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://{defaultHost}` | `defaultHost` (default is `discourse.example.com`) |

#### Example

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
    const sdk = new SDK({
        serverIdx: 0,
    });

    const res = await sdk.backups.createBackup({
        withUploads: false,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `defaultHost: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
    const sdk = new SDK({
        serverURL: "https://{defaultHost}",
    });

    const res = await sdk.backups.createBackup({
        withUploads: false,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @lukehagar/discoursejs } from "SDK";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new SDK({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

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
