/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export enum NotificationLevel {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
}

export class SetNotificationLevelRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "notification_level" })
    notificationLevel: NotificationLevel;
}

export class SetNotificationLevelRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: SetNotificationLevelRequestBody;
}

/**
 * topic updated
 */
export class SetNotificationLevelResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success?: string;
}

export class SetNotificationLevelResponse extends SpeakeasyBase {
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
    object?: SetNotificationLevelResponseBody;
}
