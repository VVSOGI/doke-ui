export const dynamic = "force-static";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  console.log(searchParams);

  return NextResponse.json({ data: "hello world!" });
}

export async function POST(req: NextRequest) {
  console.log(await req.json());

  return NextResponse.json({ data: "hello world!" });
}
