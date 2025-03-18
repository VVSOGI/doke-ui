export interface POSTRequestDefault {
  serverUrl: string;
  endpoint: string;
  method: string;
  query: string;
  params: string;
  body: Record<string, string> | undefined;
}

export type HttpMethods = "POST" | "GET" | "HEAD" | "OPTIONS" | "PUT" | "DELETE" | "PATCH";
