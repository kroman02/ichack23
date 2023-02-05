// middleware.js
import { NextResponse } from 'next/server'

function hasToken() {
  if (typeof window !== 'undefined') {
    const initialToken = window.localStorage['token'];
    if (initialToken) {
      return true;
    }
  }
  return false;
}

// This function can be marked `async` if using `await` inside
export function middleware() {
  if (hasToken()) {
    return window.location = '/dashboard' // location to go to
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}