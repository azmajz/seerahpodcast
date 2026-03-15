export async function GET() {
  const site = "https://seerahpodcast.pages.dev";

  const pages = [
    "",
    "/episodes",
    "/timeline",
    "/about"
  ];

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}