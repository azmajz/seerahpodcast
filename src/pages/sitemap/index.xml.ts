export async function GET() {
  const site = "https://seerahpodcast.pages.dev";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <sitemap>
    <loc>${site}/sitemap/pages.xml</loc>
  </sitemap>

  <sitemap>
    <loc>${site}/sitemap/episodes.xml</loc>
  </sitemap>

</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}