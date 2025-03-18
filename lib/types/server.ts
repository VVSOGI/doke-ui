export type HttpMethods = "POST" | "GET" | "HEAD" | "OPTIONS" | "PUT" | "DELETE" | "PATCH";

export interface POSTRequestDefault {
  serverUrl: string;
  endpoint: string;
  method: HttpMethods;
  query: string;
  params: string;
  body: Record<string, string> | undefined;
}
