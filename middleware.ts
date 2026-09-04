import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    // Decodes base64 string to "user:password"
    const [user, pwd] = atob(authValue).split(':');

    // Pull credentials from Vercel environment variables or fallback values
    const validUser = process.env.BASIC_AUTH_USER || 'admin';
    const validPassword = process.env.BASIC_AUTH_PASSWORD || 'mysecret123';

    if (user === validUser && pwd === validPassword) {
      return NextResponse.next();
    }
  }

  // Returns 401 response to trigger native browser login prompt
  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Applies middleware to all routes except internal static assets
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};