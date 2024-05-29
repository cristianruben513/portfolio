import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cristian.digital',
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          es: 'https://cristian.digital/es',
          en: 'https://cristian.digital/en',
        },
      },
    },
    {
      url: 'https://cristian.digital/about',
      lastModified: new Date(),
      priority: 0.9,
      alternates: {
        languages: {
          es: 'https://cristian.digital/es/sobre-mi',
          en: 'https://cristian.digital/en/about',
        },
      },
    },
    {
      url: 'https://cristian.digital/blog',
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          es: 'https://cristian.digital/es/blog',
          en: 'https://cristian.digital/en/blog',
        },
      },
    },
    {
      url: 'https://cristian.digital/projects',
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          es: 'https://cristian.digital/es/proyectos',
          en: 'https://cristian.digital/en/projects',
        },
      },
    },
    {
      url: 'https://cristian.digital/recommendations',
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          es: 'https://cristian.digital/es/recomendaciones',
          en: 'https://cristian.digital/en/recommendations',
        },
      },
    },
  ]
}