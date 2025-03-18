import { HttpMethods } from "@/lib/types";

export interface Controller {
  controllerName: string;
  basePath: string;
  description: string;
  tags: string[];
  endpoints: Endpoint[];
}

export interface Endpoint {
  path: string;
  method: HttpMethods;
  name: string;
  description: string;
  request: ApiRequest;
  response: ApiResponse;
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

export interface ApiRequest {
  body?: Body;
  query?: Query;
  params?: Params;
}

export interface ApiResponse {
  example: ResponseExample;
}
