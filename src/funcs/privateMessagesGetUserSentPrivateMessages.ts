/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get a list of private messages sent for a user
 */
export async function privateMessagesGetUserSentPrivateMessages(
    client$: SDKCore,
    username: string,
    options?: RequestOptions
): Promise<
    Result<
        operations.GetUserSentPrivateMessagesResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.GetUserSentPrivateMessagesRequest = {
        username: username,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetUserSentPrivateMessagesRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        username: encodeSimple$("username", payload$.username, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/topics/private-messages-sent/{username}.json")(pathParams$);

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = {
        operationID: "getUserSentPrivateMessages",
        oAuth2Scopes: [],
        securitySource: null,
    };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "GET",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: [],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        operations.GetUserSentPrivateMessagesResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(m$.json(200, operations.GetUserSentPrivateMessagesResponseBody$inboundSchema))(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
