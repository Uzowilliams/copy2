/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
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
 * Completes a direct external upload
 *
 * @remarks
 * Completes an external upload initialized with /get-presigned-put. The
 * file will be moved from its temporary location in external storage to
 * a final destination in the S3 bucket. An Upload record will also be
 * created in the database in most cases.
 *
 * If a sha1-checksum was provided in the initial request it will also
 * be compared with the uploaded file in storage to make sure the same
 * file was uploaded. The file size will be compared for the same reason.
 *
 * You must have the correct permissions and CORS settings configured in your
 * external provider. We support AWS S3 as the default. See:
 *
 * https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
 *
 * An external file store must be set up and `enable_direct_s3_uploads` must
 * be set to true for this endpoint to function.
 *
 *
 */
export async function uploadsCompleteExternalUpload(
    client$: SDKCore,
    request?: operations.CompleteExternalUploadRequestBody | undefined,
    options?: RequestOptions
): Promise<
    Result<
        operations.CompleteExternalUploadResponseBody,
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
        (value$) =>
            operations.CompleteExternalUploadRequestBody$outboundSchema.optional().parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

    const path$ = pathToFunc("/uploads/complete-external-upload.json")();

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const context = {
        operationID: "completeExternalUpload",
        oAuth2Scopes: [],
        securitySource: null,
    };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "POST",
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
        operations.CompleteExternalUploadResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(m$.json(200, operations.CompleteExternalUploadResponseBody$inboundSchema))(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
