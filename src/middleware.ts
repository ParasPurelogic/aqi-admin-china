import { conventions } from '@/config/conventions';
import { routes } from '@/config/routes';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { domainName } from './config/misc';
import authAdmin from './actions/authAdmin';

export async function middleware(request: NextRequest) {

    // Logs
    console.log({
        ip: request.headers.get("x-real-ip") ?? request.headers.get('x-forwarded-for') ?? "N/A",
        url: request.url,
        referer: request.headers.get("Referer"),
        userAgent: request.headers.get("User-Agent"),
        time: new Date()?.toLocaleString?.('en-IN', { timeZone: 'Asia/Kolkata' }),
    })

    // Read the requested url
    const url = request.nextUrl.href;

    // Get access token
    const authCookiePayload = request.cookies.get(conventions.auth.cookie.adminInfo)?.value ?? "";

    // Is admin logged in
    let adminAuth = (await authAdmin({ authCookiePayload }));

    // Is path a public path
    const isPublicPath = url.includes(routes.auth.pathname)

    // If admin is logged in and trying to access public path
    if (isPublicPath && adminAuth.status) {
        // Redirect to home page
        return NextResponse.redirect(new URL(routes.clientDevices.url, request.url));
    }

    // If admin is neither logged in nor accessing a public path
    if (!isPublicPath && !adminAuth.status) {
        // Encode the requested path
        const requestedPath = `${domainName}${request.nextUrl.pathname}`;
        // Redirect to login page with search parameters
        const redirectTo = `${routes.auth.url}?${conventions.query.loginToParam}=${encodeURIComponent(requestedPath)}`;
        // Redirect to login page
        return NextResponse.redirect(new URL(redirectTo, request.url));
    }

    // If no condition matches
    return NextResponse.next();
}

export const config = {
    // matcher: '/((?!api|scripts|_next/static|_next/image|favicon.ico).*)',
    matcher: '/((?!scripts|_next/static|media|_next/image|favicon.ico|manifest.json).*)',
    // matcher: [
    //     "/qr-view",
    //     "/scripts",
    //     "/_next/static",
    //     "/media",
    //     "/_next/image",
    //     "/favicon.ico"
    // ]
};