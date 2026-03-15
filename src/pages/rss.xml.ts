// src/pages/rss.xml.ts
import { episodes } from "../data/episodes";

export async function GET() {
  const siteUrl = "https://seerahpodcast.pages.dev";

  const itemsXml = episodes
    .map(
      (ep) => `
    <item>
      <title>${ep.title}</title>
      <description>Episode ${ep.id} of the Seerah podcast series. Duration: ${ep.duration}.</description>
      <link>${siteUrl}/episodes/${ep.slug}</link>
      <guid>${siteUrl}/episodes/${ep.slug}</guid>
      <pubDate>${new Date(2026, 3, 15).toUTCString()}</pubDate>
      <enclosure url="${ep.link}" type="audio/mpeg" length="0"/>
      <itunes:episode>${ep.id}</itunes:episode>
      <itunes:duration>${ep.duration}</itunes:duration>
      <itunes:episodeType>full</itunes:episodeType>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Seerah of the Prophet ﷺ — Podcast by Abdul Nasir Jangda</title>
    <link>${siteUrl}</link>
    <description>Explore the complete life of Prophet Muhammad ﷺ through 199 episodes of powerful storytelling and authentic scholarship.</description>
    <language>en-us</language>
    <itunes:author>Abdul Nasir Jangda</itunes:author>
    <itunes:image href="${siteUrl}/thumb.jpg"/>
    <itunes:category text="Religion &amp; Spirituality">
      <itunes:category text="Islam"/>
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}