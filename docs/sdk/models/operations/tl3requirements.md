# Tl3Requirements

## Example Usage

```typescript
import { Tl3Requirements } from "@lukehagar/discoursejs/sdk/models/operations";

let value: Tl3Requirements = {
    daysVisited: 102863,
    maxFlaggedByUsers: 298282,
    maxFlaggedPosts: 92373,
    minDaysVisited: 569965,
    minLikesGiven: 354047,
    minLikesReceived: 590873,
    minLikesReceivedDays: 551816,
    minLikesReceivedUsers: 574325,
    minPostsRead: 33625,
    minPostsReadAllTime: 653201,
    minTopicsRepliedTo: 968962,
    minTopicsViewed: 652103,
    minTopicsViewedAllTime: 320997,
    numFlaggedByUsers: 431418,
    numFlaggedPosts: 221262,
    numLikesGiven: 896547,
    numLikesReceived: 141264,
    numLikesReceivedDays: 367562,
    numLikesReceivedUsers: 97260,
    numTopicsRepliedTo: 435865,
    onGracePeriod: false,
    penaltyCounts: {
        silenced: 984043,
        suspended: 891924,
        total: 260341,
    },
    postsRead: 806194,
    postsReadAllTime: 537023,
    requirementsLost: false,
    requirementsMet: false,
    timePeriod: 703889,
    topicsViewed: 447926,
    topicsViewedAllTime: 100226,
    trustLevelLocked: false,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `daysVisited`                                                                                       | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `maxFlaggedByUsers`                                                                                 | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `maxFlaggedPosts`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minDaysVisited`                                                                                    | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minLikesGiven`                                                                                     | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minLikesReceived`                                                                                  | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minLikesReceivedDays`                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minLikesReceivedUsers`                                                                             | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minPostsRead`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minPostsReadAllTime`                                                                               | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minTopicsRepliedTo`                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minTopicsViewed`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `minTopicsViewedAllTime`                                                                            | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numFlaggedByUsers`                                                                                 | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numFlaggedPosts`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numLikesGiven`                                                                                     | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numLikesReceived`                                                                                  | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numLikesReceivedDays`                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numLikesReceivedUsers`                                                                             | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `numTopicsRepliedTo`                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `onGracePeriod`                                                                                     | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `penaltyCounts`                                                                                     | [operations.AdminGetUserPenaltyCounts](../../../sdk/models/operations/admingetuserpenaltycounts.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `postsRead`                                                                                         | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `postsReadAllTime`                                                                                  | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requirementsLost`                                                                                  | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requirementsMet`                                                                                   | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `timePeriod`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicsViewed`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topicsViewedAllTime`                                                                               | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `trustLevelLocked`                                                                                  | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |