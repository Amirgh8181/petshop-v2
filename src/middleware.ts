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
  '^/Cart$',
  '^/FavoriteList$',
  '/cart/(.+)',
  '/FavoriteList/(.+)',
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
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/Auth/SignIn'
    }, 
  }
);


export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

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