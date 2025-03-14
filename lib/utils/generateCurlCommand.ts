import { ApiResponse, DefaultProperty } from "@/lib/types";

export function processRequestBody(bodyProps: Record<string, DefaultProperty>, example: ApiResponse["example"]) {
  const requestBody: Record<string, any> = {};

  if (!example) {
    for (const propName in bodyProps) {
      if (bodyProps[propName].required) {
        requestBody[propName] = `${propName}`;
      }
    }

    return requestBody;
  }

  const responseExample = example;
  const choiced = Array.isArray(responseExample) ? responseExample[0] : responseExample;

  for (const propName in bodyProps) {
    if (bodyProps[propName].required) {
      if (choiced[propName] !== undefined) {
        requestBody[propName] = choiced[propName];
      } else {
        requestBody[propName] = `${propName}`;
      }
    }
  }

  return requestBody;
}

export function processQueryParameters(
  url: string,
  queryProps: Record<string, DefaultProperty>,
  responseExample?: Record<string, any>
) {
  const queryParams: Record<string, any> = {};

  for (const paramName in queryProps) {
    queryParams[paramName] = `{${queryProps[paramName].type}}`;
  }

  return queryParams;
}

export function processUrlParameters(
  paramsProps: Record<string, DefaultProperty>,
  responseExample: Record<string, any>
) {
  const requestParams: Record<string, any> = {};

  for (const paramName in paramsProps) {
    if (responseExample) {
      const choiced = Array.isArray(responseExample) ? responseExample[0] : responseExample;
      requestParams[paramName] = choiced[paramName];
    }

    requestParams[paramName] = `{${paramName}}`;
  }

  return requestParams;
}
