import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isPublic = request.nextUrl.pathname.startsWith('/(public)');

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL('/(public)/login', request.url));
  }

  if (token && isPublic) {
    return NextResponse.redirect(new URL('/(private)/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\.).*)'],
};
