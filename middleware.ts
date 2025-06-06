import { NextResponse } from "next/server";

export default function middleware(request: any) {
  return NextResponse.next();
}
