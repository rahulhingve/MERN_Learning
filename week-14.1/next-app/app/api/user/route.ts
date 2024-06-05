import { NextRequest, NextResponse } from "next/server";


export function GET(req :NextRequest){

    return NextResponse.json({
        email:"rahul@gmail.com",
        name:"Rahul"
    })

}