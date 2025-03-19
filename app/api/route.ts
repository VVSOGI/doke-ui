import { POSTRequestDefault } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

interface NextCustomRequest extends NextRequest {
  json: () => Promise<POSTRequestDefault>;
}

export async function POST(req: NextCustomRequest) {
  const { serverUrl, endpoint, method, query, params, body } = await req.json();

  try {
    const response = await fetch(serverUrl + endpoint + params + query, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      {
        error: "fetch failed",
        message: "The server encountered an unexpected condition that prevented it from fulfilling the request.",
        statusCode: 500,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ data: "hello world!" });
}
