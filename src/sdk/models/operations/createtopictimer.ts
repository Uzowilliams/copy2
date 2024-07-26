/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CreateTopicTimerRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "based_on_last_post" })
    basedOnLastPost?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "category_id" })
    categoryId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "status_type" })
    statusType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "time" })
    time?: string;
}

export class CreateTopicTimerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateTopicTimerRequestBody;
}

/**
 * topic updated
 */
export class CreateTopicTimerResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "based_on_last_post" })
    basedOnLastPost?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "category_id" })
    categoryId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "closed" })
    closed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "execute_at" })
    executeAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success?: string;
}

export class CreateTopicTimerResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * topic updated
     */
    @SpeakeasyMetadata()
    object?: CreateTopicTimerResponseBody;
}
