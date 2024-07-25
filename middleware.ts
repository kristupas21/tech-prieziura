import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'lt', 'ru'],

  // Used when no locale matches
  defaultLocale: 'lt',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(lt|en|ru)/:path*'],
};
