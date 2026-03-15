import rss from "@astrojs/rss";
import { episodes } from "../data/episodes";

export async function GET(context) {
    return rss({
        title: "Seerah of the Prophet ﷺ — Podcast by Abdul Nasir Jangda",
        description:
            "Explore the complete life of Prophet Muhammad ﷺ through 199 episodes of powerful storytelling, authentic scholarship, and timeless lessons — by Sheikh Abdul Nasir Jangda.",
        site: context.site,
        items: episodes.map((ep) => ({
            title: ep.title,
            pubDate: new Date("2026-01-01"), // episodes don't have dates, use a placeholder
            description: `Episode ${ep.id} of the Seerah podcast series. Duration: ${ep.duration}. Listen at seerahpodcast.pages.dev/episodes/${ep.slug}`,
            link: `/episodes/${ep.slug}`,
            guid: `https://seerahpodcast.pages.dev/episodes/${ep.slug}`,
            enclosure: {
                url: ep.link,
                type: "audio/mpeg",
                length: 0,
            },
        })),
        customData: `<language>en-us</language>
<itunes:author>Abdul Nasir Jangda</itunes:author>
<itunes:category text="Religion &amp; Spirituality">
  <itunes:category text="Islam"/>
</itunes:category>
<itunes:explicit>false</itunes:explicit>
<itunes:image href="https://seerahpodcast.pages.dev/thumb.jpg"/>`,
        xmlns: {
            itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
        },
    });
}
