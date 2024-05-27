import createMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from './navigation';
 
export default createMiddleware({
  locales,
  defaultLocale: 'en',
  pathnames,
  localePrefix
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};