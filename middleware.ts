export { default } from "next-auth/middleware"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Handles User Access, redirecting with conditions
export async function middleware(request: NextRequest) {

    const sessionToken = request.cookies.get("next-auth.session-token")

    const pathname = request.nextUrl.pathname

    // If no token, redirects to login
    if (!sessionToken) {

        // if (request.nextUrl.pathname !== '/login') return NextResponse.redirect(`${request.nextUrl.origin}/login`)
        if (pathname !== '/api/auth/signin' && pathname !== '/api/auth/signin/github' && pathname !== "/api/auth/callback/github") {

            return NextResponse.redirect(`${request.nextUrl.origin}/api/auth/signin`)

        }

        return NextResponse.next()

    }

    // If with token and tries access Login page, redirects to Home 
    if (pathname === '/login') return NextResponse.redirect(`${request.nextUrl.origin}/`)

    return NextResponse.next()

}
