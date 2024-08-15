# ListUserBadgesResponseBody

success response

## Example Usage

```typescript
import { ListUserBadgesResponseBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListUserBadgesResponseBody = {
    userBadges: [
        {
            badgeId: 670638,
            canFavorite: false,
            grantedAt: "<value>",
            grantedById: 170909,
            groupingPosition: 210382,
            id: 358152,
            isFavorite: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `badgeTypes`                                                                                        | [operations.ListUserBadgesBadgeTypes](../../../sdk/models/operations/listuserbadgesbadgetypes.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `badges`                                                                                            | [operations.ListUserBadgesBadges](../../../sdk/models/operations/listuserbadgesbadges.md)[]         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `grantedBies`                                                                                       | [operations.GrantedBies](../../../sdk/models/operations/grantedbies.md)[]                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `userBadges`                                                                                        | [operations.UserBadges](../../../sdk/models/operations/userbadges.md)[]                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |