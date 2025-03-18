export interface POSTRequestDefault {
  serverUrl: string;
  endpoint: string;
  method: string;
  query: string;
  params: string;
  body: Record<string, string> | undefined;
}
