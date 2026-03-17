import { episodes } from "../../data/episodes";

export async function GET() {
  const site = "https://seerahpodcast.pages.dev";

  // today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const limitedEpisodes = episodes.slice(0, 148);

  const urls = limitedEpisodes
    .map(
      (ep) => `
  <url>
    <loc>${site}/episodes/${ep.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}