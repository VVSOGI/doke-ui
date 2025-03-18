import { POSTRequestDefault } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

interface NextCustomRequest extends NextRequest {
  json: () => Promise<POSTRequestDefault>;
}

export async function POST(req: NextCustomRequest) {
  const { serverUrl, endpoint, method, query, params, body } = await req.json();

  const data = await fetch(serverUrl + endpoint + params + query, {
    body: JSON.stringify(body),
  });

  const response = await data.json();
  console.log(response);

  return NextResponse.json({ data: "hello world!" });
}
