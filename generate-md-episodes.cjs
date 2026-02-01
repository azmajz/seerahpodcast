const fs = require('fs');
const path = require('path');

const episodesFile = path.join('src', 'data', 'episodes.ts');
const contentDir = path.join('src', 'content', 'episodes');

if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
}

const content = fs.readFileSync(episodesFile, 'utf8');
const episodeMatches = [...content.matchAll(/\{ id: "(\d+)", title: "(.*?)", duration: "(.*?)", slug: "(.*?)", link: "(.*?)", name: "(.*?)" \},/g)];

for (const match of episodeMatches) {
    const id = match[1];
    const title = match[2];
    const duration = match[3];
    const slug = id + "-" + match[4];
    const mp3Url = match[5];
    const name = match[6];

    const filePath = path.join(contentDir, `${slug}.md`);

    if (fs.existsSync(filePath)) {
        console.log(`${slug}.md already exists, skipping...`);
        continue;
    }

    const mdContent = `---
id: "${id}"
title: "${title}"
duration: "${duration}"
youtubeId: "vB-r3y9Y1_E"
mp3Url: "${mp3Url}"
summary: "Episode ${id} of the Seerah series: ${name}."
highlights:
  - "Life of the Prophet ﷺ"
  - "Historical Context"
  - "Spiritual Lessons"
---

Detailed notes for this episode are coming soon. Please enjoy the audio and video content in the meantime.
`;
    fs.writeFileSync(filePath, mdContent);
    console.log(`Created ${slug}.md`);
}
