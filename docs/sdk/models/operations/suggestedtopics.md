# SuggestedTopics

## Example Usage

```typescript
import { SuggestedTopics } from "@lukehagar/discoursejs/sdk/models/operations";

let value: SuggestedTopics = {
  archetype: "<value>",
  archived: false,
  bookmarked: "<value>",
  bumped: false,
  bumpedAt: "<value>",
  categoryId: 453094,
  closed: false,
  createdAt: "<value>",
  excerpt: "<value>",
  fancyTitle: "<value>",
  featuredLink: "<value>",
  highestPostNumber: 194023,
  id: 493958,
  imageUrl: "<value>",
  lastPostedAt: "<value>",
  likeCount: 205566,
  liked: "<value>",
  pinned: false,
  posters: [
    {
      description: "Robust interactive software",
      extras: "<value>",
      user: {
        avatarTemplate: "<value>",
        id: 437814,
        name: "<value>",
        username: "Brock.Wolf",
      },
    },
  ],
  postsCount: 842855,
  replyCount: 78969,
  slug: "<value>",
  tags: [
    "<value>",
  ],
  tagsDescriptions: {},
  title: "<value>",
  unpinned: "<value>",
  unseen: false,
  views: 818034,
  visible: false,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `archetype`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `archived`                                                                                        | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `bookmarked`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `bumped`                                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `bumpedAt`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `categoryId`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `closed`                                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `createdAt`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `excerpt`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `fancyTitle`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `featuredLink`                                                                                    | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `highestPostNumber`                                                                               | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `imageUrl`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `lastPostedAt`                                                                                    | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `likeCount`                                                                                       | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `liked`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `pinned`                                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `posters`                                                                                         | [operations.Posters](../../../sdk/models/operations/posters.md)[]                                 | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `postsCount`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `replyCount`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `slug`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `tags`                                                                                            | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `tagsDescriptions`                                                                                | [operations.GetTopicTagsDescriptions](../../../sdk/models/operations/gettopictagsdescriptions.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `title`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `unpinned`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `unseen`                                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `views`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `visible`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |