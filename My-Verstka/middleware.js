import { NextResponse } from "next/server";

export default function middleware(req) {
    let verify = req.cookies.get('loggedin')
    let url = req.url

    if(!verify && url.includes('/me')) {
        return NextResponse.redirect("http://localhost:3000/")
    }

    if(verify && url.includes('/auth/login')) {
        return NextResponse.redirect("http://localhost:3000/me")
    }

}