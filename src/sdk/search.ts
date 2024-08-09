/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { searchSearch } from "../funcs/searchSearch.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Search extends ClientSDK {
    /**
     * Search for a term
     */
    async search(
        page?: number | undefined,
        q?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.SearchResponseBody> {
        return unwrapAsync(searchSearch(this, page, q, options));
    }
}
