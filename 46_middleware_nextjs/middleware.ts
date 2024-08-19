import { NextRequest, NextResponse } from "next/server";

let requestCount = 0;

export function middleware(req: NextRequest) {
  requestCount++;
  const res = NextResponse.next();
  console.log("Request count: ", requestCount);
  return res;
}

export const config = {
  matcher: "/api/:path*",
};
