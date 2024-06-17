import { NextRequest, NextResponse } from "next/server";

let reqcount = 0
export function middleware(req: NextRequest,) {
    reqcount++;
    const res =NextResponse.next();
    console.log("request count : "+ reqcount)
    return res;
}

export const config = {
    matcher:'api/:path*',
}