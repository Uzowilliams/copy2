/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tagsCreateTagGroup } from "../funcs/tagsCreateTagGroup.js";
import { tagsGetTag } from "../funcs/tagsGetTag.js";
import { tagsGetTagGroup } from "../funcs/tagsGetTagGroup.js";
import { tagsListTagGroups } from "../funcs/tagsListTagGroups.js";
import { tagsListTags } from "../funcs/tagsListTags.js";
import { tagsUpdateTagGroup } from "../funcs/tagsUpdateTagGroup.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Tags extends ClientSDK {
    /**
     * Creates a tag group
     */
    async createTagGroup(
        request?: operations.CreateTagGroupRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateTagGroupResponseBody> {
        return unwrapAsync(tagsCreateTagGroup(this, request, options));
    }

    /**
     * Get a specific tag
     */
    async getTag(name: string, options?: RequestOptions): Promise<operations.GetTagResponseBody> {
        return unwrapAsync(tagsGetTag(this, name, options));
    }

    /**
     * Get a single tag group
     */
    async getTagGroup(
        id: string,
        options?: RequestOptions
    ): Promise<operations.GetTagGroupResponseBody> {
        return unwrapAsync(tagsGetTagGroup(this, id, options));
    }

    /**
     * Get a list of tag groups
     */
    async listTagGroups(options?: RequestOptions): Promise<operations.ListTagGroupsResponseBody> {
        return unwrapAsync(tagsListTagGroups(this, options));
    }

    /**
     * Get a list of tags
     */
    async listTags(options?: RequestOptions): Promise<operations.ListTagsResponseBody> {
        return unwrapAsync(tagsListTags(this, options));
    }

    /**
     * Update tag group
     */
    async updateTagGroup(
        id: string,
        requestBody?: operations.UpdateTagGroupRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdateTagGroupResponseBody> {
        return unwrapAsync(tagsUpdateTagGroup(this, id, requestBody, options));
    }
}
