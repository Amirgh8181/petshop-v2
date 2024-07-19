// app/robots.tsx
import { NextResponse } from 'next/server';

export const GET = async () => {
  // Define your robots.txt content
  const robotsTxt = `
    User-agent: *
    Disallow: /api/
    Allow: /
  `;

  // Return the response
  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};