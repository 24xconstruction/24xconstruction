import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.24xconstruction.com',
      lastModified: new Date(),
    },
  ];
}
