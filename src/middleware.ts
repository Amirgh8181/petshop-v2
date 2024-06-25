import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales:["fa","en"],
  localePrefix:"never",
  defaultLocale:"fa",
  alternateLinks:false,
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)'
  ]
};