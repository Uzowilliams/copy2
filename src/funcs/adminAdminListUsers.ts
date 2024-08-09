/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
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
import * as z from "zod";

/**
 * Get a list of users
 */
export async function adminAdminListUsers(
    client$: SDKCore,
    request: operations.AdminListUsersRequest,
    options?: RequestOptions
): Promise<
    Result<
        Array<operations.AdminListUsersResponseBody>,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.AdminListUsersRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        flag: encodeSimple$("flag", payload$.flag, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/admin/users/list/{flag}.json")(pathParams$);

    const query$ = encodeFormQuery$({
        asc: payload$.asc,
        email: payload$.email,
        ip: payload$.ip,
        order: payload$.order,
        page: payload$.page,
        show_emails: payload$.show_emails,
        stats: payload$.stats,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = { operationID: "adminListUsers", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
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
        Array<operations.AdminListUsersResponseBody>,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(m$.json(200, z.array(operations.AdminListUsersResponseBody$inboundSchema)))(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
