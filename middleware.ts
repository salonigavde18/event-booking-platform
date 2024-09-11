// /middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import type { NextMiddleware } from 'next/server';

// Define the paths that should be accessible without authentication
const publicPaths = ['/login', '/signup', '/forgot-password', '/public'];

const isAuthenticated = (req: NextRequest): boolean => {
  // Check if the user is authenticated (this is just an example, implement your own logic)
  // Typically, you would check cookies, tokens, or session data
  const token = req.cookies.get('auth_token');
  return !!token;
};

const middleware: NextMiddleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  // If the user is authenticated, allow access to all paths
  if (isAuthenticated(req)) {
    // Allow access to all paths for authenticated users
    return NextResponse.next();
  }

  // Redirect unauthenticated users from protected paths to the login page
  if (!publicPaths.includes(pathname)) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow access to public paths without authentication
  return NextResponse.next();
};

export default middleware;
