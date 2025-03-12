import { ApiResponse, Controller, DefaultProperty, Endpoint, Project } from "@/lib/types";

export function generateCurlCommand(project: Project, controller: Controller, endpoint: Endpoint) {
  const url = `${project.serverUrl}${controller.basePath ? "/" + controller.basePath : ""}${endpoint.path}`;
  const { body, params, query } = endpoint.request;
  const { example } = endpoint.response;

  let curlCommand = `curl -X ${endpoint.method} `;
  let processedUrl = url;

  if (body) {
    const requestBody = processRequestBody(body.properties, example);
    const formattedBody = JSON.stringify(requestBody, null, 2);
    curlCommand += `-d '${formattedBody}'`;
  }
}

function processRequestBody(bodyProps: Record<string, DefaultProperty>, example: ApiResponse["example"]) {
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
