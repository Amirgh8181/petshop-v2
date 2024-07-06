import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';


/*
    '^/$',                       // Matches root path
    '^/about/us$',               // Matches /about/us
    '^/contact$',                // Matches /contact
    '^/(home|services|pricing)$' // Matches /home, /services, /pricing

    '/posts/(.+)',            // Matches /posts/[id]
    '/users/(.+)/profile',    // Matches /users/[id]/profile
    '/docs/(.+)',             // Matches /docs/[...slug]
    '/blog(/(.+))?',          // Matches /blog and /blog/[...slug]
    '/((?!api|_next|_vercel|.*\\..*).*)', // Matches all other non-static files
    '/([\\w-]+)?/users/(.+)' // Custom pattern for any other dynamic routes you have
*/
const protectedPages = [
  '^/cart$',
  '/cart/(.+)',
];

const intlMiddleware = createMiddleware({
  locales: ["fa", "en"],
  localePrefix: "never",
  defaultLocale: "en",
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: '/Auth/SignIn'
    }
  }
);

export default function middleware(req: NextRequest) {

  const pathname = req.nextUrl.pathname
  const searchParams = req.nextUrl.searchParams.get("callbackUrl")
  const authRoute = pathname.includes("Auth")
  const correctRedirectToAuth = pathname.startsWith("/Auth")

  if (authRoute && !correctRedirectToAuth) {
    const cutPath: string[] = pathname.split("/")
    const authIndex: number = cutPath.indexOf("Auth")
    const authType: string = cutPath[authIndex + 1]
    console.log(authType);

    const correctUrl = `Auth/SignIn`
    console.log(correctUrl);
    return NextResponse.redirect(correctUrl)

  }


  const isProtectedPage = protectedPages.some(pattern => new RegExp(pattern).test(pathname));

  if (isProtectedPage) {
    return (authMiddleware as any)(req);
  } else {
    return intlMiddleware(req);
  }
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)'
  ]
};