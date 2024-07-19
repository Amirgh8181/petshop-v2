import { NextResponse } from 'next/server';

const getSiteUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
};

const getSitemap = async () => {
  // Define your static routes
  const staticRoutes = [
    '',
    'Shelters',
    'Clinics',
    'Question',
    'Shop',
    // Add more static routes here
  ];

  // Fetch your dynamic routes if any (e.g., from an API or database)
  const dynamicRoutes = [""]; // Example: await fetchDynamicRoutes();

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Generate the XML content for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map((route) => {
        const routePath = route === '' ? '/' : `/${route}`;
        return `
        <url>
          <loc>${getSiteUrl()}${routePath}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
        `;
      })
      .join('')}
  </urlset>`;

  return sitemap;
};

export const GET = async () => {
  const sitemap = await getSitemap();
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};