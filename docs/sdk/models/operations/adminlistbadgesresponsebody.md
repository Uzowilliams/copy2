# AdminListBadgesResponseBody

success response

## Example Usage

```typescript
import { AdminListBadgesResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: AdminListBadgesResponseBody = {
    adminBadges: {
        badgeGroupingIds: ["<value>"],
        badgeIds: ["<value>"],
        badgeTypeIds: ["<value>"],
        protectedSystemFields: ["<value>"],
        triggers: {
            none: 925597,
            postAction: 836079,
            postRevision: 71036,
            trustLevelChange: 337396,
            userChange: 87129,
        },
    },
    badgeGroupings: [
        {
            description: "Profit-focused 3rd generation framework",
            id: 832620,
            name: "<value>",
            position: 957156,
            system: false,
        },
    ],
    badgeTypes: [
        {
            id: 778157,
            name: "<value>",
            sortOrder: 140350,
        },
    ],
    badges: [
        {
            allowTitle: false,
            autoRevoke: false,
            badgeGroupingId: 870013,
            badgeTypeId: 870088,
            description: "Virtual holistic projection",
            enabled: false,
            grantCount: 800911,
            icon: "<value>",
            id: 461479,
            imageUrl: "<value>",
            listable: false,
            longDescription: "<value>",
            manuallyGrantable: false,
            multipleGrant: false,
            name: "<value>",
            query: "<value>",
            showPosts: false,
            slug: "<value>",
            system: false,
            targetPosts: false,
            trigger: 520478,
        },
    ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `adminBadges`                                                                   | [operations.AdminBadges](../../../sdk/models/operations/adminbadges.md)         | :heavy_check_mark:                                                              | N/A                                                                             |
| `badgeGroupings`                                                                | [operations.BadgeGroupings](../../../sdk/models/operations/badgegroupings.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `badgeTypes`                                                                    | [operations.BadgeTypes](../../../sdk/models/operations/badgetypes.md)[]         | :heavy_check_mark:                                                              | N/A                                                                             |
| `badges`                                                                        | [operations.Badges](../../../sdk/models/operations/badges.md)[]                 | :heavy_check_mark:                                                              | N/A                                                                             |