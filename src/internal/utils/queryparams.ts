/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import {
  ParamDecorator,
  parseParamDecorator,
  populateFromGlobals,
  shouldQueryParamSerialize,
  valToString,
} from "./utils";

import { requestMetadataKey } from "./requestbody";

export const qpMetadataKey = "queryParam";
const queryStringPrefix = "?";

const filterAndJoin = (strings: string[]): string =>
  strings.filter((s) => !!s).join("&");

export function serializeQueryParams(queryParams: any, globals?: any): string {
  const queryStringParts: string[] = [];
  if (!queryParams) return filterAndJoin(queryStringParts);

  const fieldNames: string[] =
    "__props__" in queryParams
      ? queryParams["__props__"].map((prop: any) => prop.key)
      : Object.getOwnPropertyNames(queryParams);

  fieldNames.forEach((fname) => {
    const requestBodyAnn: string = Reflect.getMetadata(
      requestMetadataKey,
      queryParams,
      fname,
    );

    if (requestBodyAnn) return;

    const qpAnn: string = Reflect.getMetadata(
      qpMetadataKey,
      queryParams,
      fname,
    );

    if (!qpAnn) return { serialize: () => "" };

    const qpDecorator: ParamDecorator = parseParamDecorator(
      qpAnn,
      fname,
      "form",
      true,
    );

    if (!qpDecorator) return;

    let value = queryParams[fname];
    value = populateFromGlobals(value, fname, "queryParam", globals);

    if (qpDecorator.Serialization === "json")
      queryStringParts.push(jsonSerializer({ [qpDecorator.ParamName]: value }));
    else {
      switch (qpDecorator.Style) {
        case "deepObject":
          queryStringParts.push(
            deepObjectSerializer({ [qpDecorator.ParamName]: value }),
          );
          return;
        case "form":
          if (!qpDecorator.Explode)
            queryStringParts.push(
              noExplodeSerializer({ [qpDecorator.ParamName]: value }),
            );
          else
            queryStringParts.push(
              formSerializerExplode({ [qpDecorator.ParamName]: value }),
            );
          return;
        case "pipeDelimited":
          if (!qpDecorator.Explode) {
            queryStringParts.push(
              noExplodeSerializer({ [qpDecorator.ParamName]: value }, "|"),
            );
          } else {
            queryStringParts.push(
              formSerializerExplode({ [qpDecorator.ParamName]: value }),
            );
          }
          return;
        default:
          queryStringParts.push(
            formSerializerExplode({ [qpDecorator.ParamName]: value }),
          );
      }
    }
  });
  return queryStringPrefix + filterAndJoin(queryStringParts);
}

// TODO: Add support for disabling percent encoding for reserved characters
function jsonSerializer(params: Record<string, any>): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    query.push(`${key}=${encodeURIComponent(JSON.stringify(value))}`);
  });
  return filterAndJoin(query);
}

// TODO: Add support for disabling percent encoding for reserved characters
function noExplodeSerializer(
  params: Record<string, any>,
  delimiter = ",",
): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (!shouldQueryParamSerialize(value)) return;
    if (value !== Object(value))
      query.push(`${key}=${encodeURIComponent(valToString(value))}`);
    else if (Array.isArray(value)) {
      const values: string = value.map((aValue) => aValue).join(delimiter);

      query.push(`${key}=${encodeURIComponent(values)}`);
    } else {
      const values: string = Object.getOwnPropertyNames(value)
        .map((paramKey: string) => {
          const qpAnn: string = Reflect.getMetadata(
            qpMetadataKey,
            value,
            paramKey,
          );

          const qpDecorator: ParamDecorator = parseParamDecorator(
            qpAnn,
            paramKey,
            "form",
            true,
          );

          if (qpDecorator == null) return;

          const key = qpDecorator.ParamName || paramKey;
          return `${key}${delimiter}${valToString(value[paramKey])}`;
        })
        .join(delimiter);
      query.push(`${key}=${encodeURIComponent(values)}`);
    }
  });
  return filterAndJoin(query);
}

// TODO: Add support for disabling percent encoding for reserved characters
function formSerializerExplode(params: Record<string, any>): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (!shouldQueryParamSerialize(value)) return;
    if (value !== Object(value))
      query.push(`${key}=${encodeURIComponent(value)}`);
    else if (Array.isArray(value)) {
      query.push(
        value
          .map((aValue) => `${key}=${encodeURIComponent(valToString(aValue))}`)
          .join("&"),
      );
    } else
      query.push(
        Object.getOwnPropertyNames(value)
          .map((paramKey: string) => {
            const qpAnn: string = Reflect.getMetadata(
              qpMetadataKey,
              value,
              paramKey,
            );

            const qpDecorator: ParamDecorator = parseParamDecorator(
              qpAnn,
              paramKey,
              "form",
              true,
            );

            if (qpDecorator == null) return;

            const key = qpDecorator.ParamName || paramKey;
            return `${key}=${encodeURIComponent(valToString(value[paramKey]))}`;
          })
          .join("&"),
      );
  });
  return filterAndJoin(query);
}

// TODO: Add support for disabling percent encoding for reserved characters
function deepObjectSerializer(params: Record<string, any>): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (!shouldQueryParamSerialize(value)) return;
    if (value !== Object(value))
      query.push(`${key}=${encodeURIComponent(value)}`);
    else if (Array.isArray(value)) {
      query.push(
        value
          .map(
            ([objKey, objValue]) =>
              `${key}[${objKey}]=${encodeURIComponent(valToString(objValue))}`,
          )
          .join("&"),
      );
    } else
      query.push(
        Object.getOwnPropertyNames(value)
          .map((paramKey: string) => {
            const qpAnn: string = Reflect.getMetadata(
              qpMetadataKey,
              value,
              paramKey,
            );

            const qpDecorator: ParamDecorator = parseParamDecorator(
              qpAnn,
              paramKey,
              "form",
              true,
            );

            if (qpDecorator == null) return;

            // For deep objects, arr is wrapped inside object
            if (Array.isArray(value[paramKey]))
              return value[paramKey]
                .map(
                  (arrValue: any) =>
                    `${key}[${paramKey}]=${encodeURIComponent(
                      valToString(arrValue),
                    )}`,
                )
                .join("&");
            return `${key}[${paramKey}]=${encodeURIComponent(
              valToString(value[paramKey]),
            )}`;
          })
          .join("&"),
      );
  });
  return filterAndJoin(query);
}
