export interface Controller {
  controllerName: string;
  basePath: string;
  description: string;
  tags: string[];
  endpoints: Endpoint[];
}

export interface Endpoint {
  path: string;
  method: string;
  name: string;
  description: string;
  request: Request;
  response: Response;
}

export interface DefaultProperty {
  type: "string" | "boolean" | "number";
  description: string;
  required: boolean;
}

export interface Body {
  properties: Record<string, DefaultProperty>;
}

export interface Params {
  properties: Record<string, DefaultProperty>;
}

export interface Query {
  properties: Record<string, DefaultProperty>;
}

type PropertyValueType = string | number | boolean;

type ResponseExample = Record<string, PropertyValueType> | Record<string, PropertyValueType>[];

export interface Request {
  body?: Body;
  query?: Query;
  params?: Params;
}

export interface Response {
  properties: Record<string, DefaultProperty>;
  example: ResponseExample;
}
