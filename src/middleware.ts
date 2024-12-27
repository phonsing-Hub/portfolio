import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === '/blog') {
    url.pathname = '/blog/authentication';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
 
export const config = {
  matcher: '/blog',
}