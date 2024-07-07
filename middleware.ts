import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/about',
    '/blog',
    '/blog/:path*',
    '/projects',
    '/projects/:path*',
    '/recommendations'
  ]
};

//'/blog/:path*'