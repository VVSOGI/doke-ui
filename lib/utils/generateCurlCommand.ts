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
  const queryStrings = [];

  for (const paramName in queryProps) {
    const paramInfo = queryProps[paramName];

    let paramValue;

    if (responseExample) {
      const choiced = Array.isArray(responseExample) ? responseExample[0] : responseExample;
      paramValue = choiced[paramName];
    }

    if (!paramValue) {
      if (paramInfo.type === "boolean") {
        paramValue = "false";
      } else {
        paramValue = `{${paramName}}`;
      }
    }

    queryStrings.push(`${paramName}=${paramValue}`);
  }

  if (queryStrings.length > 0) {
    return `${url}?${queryStrings.join("&")}`;
  }

  return url;
}

export function processUrlParameters(
  url: string,
  paramsProps: Record<string, DefaultProperty>,
  responseExample: Record<string, any>
) {
  let processedUrl = url;

  for (const paramName in paramsProps) {
    const paramPattern = new RegExp(`:${paramName}`, "g");
    let paramValue;

    if (responseExample) {
      const choiced = Array.isArray(responseExample) ? responseExample[0] : responseExample;
      paramValue = choiced[paramName];
    }

    if (!paramValue) {
      paramValue = `{${paramName}}`;
    }

    processedUrl = processedUrl.replace(paramPattern, paramValue);
  }

  return processedUrl;
}
