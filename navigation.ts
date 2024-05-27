import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'es'] as const;

export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/about': {
    en: '/about',
    es: '/sobre-mi'
  },
  '/projects': {
    en: '/projects',
    es: '/proyectos'
  },
  '/projects/[slug]': {
    en: '/projects/[slug]',
    es: '/proyectos/[slug]'
  },
  '/recommendations': {
    en: '/recommendations',
    es: '/recomendaciones'
  }
} satisfies Pathnames<typeof locales>;
 
export const {
  Link, 
  redirect, 
  usePathname, 
  useRouter, 
  getPathname
} = createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});