export interface EpisodeDetail {
    youtubeId?: string;
    summary: string;
    highlights: string[];
    fullContent: string;
}

export const episodeDetails: Record<string, EpisodeDetail> = {
    "intro-pt-1": {
        youtubeId: "vB-r3y9Y1_E",
        summary: "An introduction to the methodology and importance of studying the life of Prophet Muhammad ﷺ.",
        highlights: [
            "Why we study the Seerah",
            "The methodology of Shaykh Abdul Nasir Jangda",
            "The impact of the Prophetic journey on our lives"
        ],
        fullContent: "In this opening episode, we explore the deep significance of the Seerah. Studying the life of the Prophet ﷺ is not just a history lesson; it is a means to build a personal connection with the Messenger of Allah. Shaykh Abdul Nasir Jangda outlines the scholarly approach used in this series, emphasizing authenticity and practical application."
    },
    "intro-pt-2": {
        youtubeId: "vB-r3y9Y1_E",
        summary: "Continuing the introduction, focusing on the pre-Islamic context and the world before the Prophetic mission.",
        highlights: [
            "The state of the world before Islam",
            "The genealogical heritage of the Prophet ﷺ",
            "Setting the stage for the revelation"
        ],
        fullContent: "The second part of the introduction sets the stage by describing the world into which the Prophet ﷺ was born. We discuss the political and social climate of Arabia and the surrounding empires, providing the necessary context to understand the transformative power of the Prophetic message."
    },
    "pre-islamic-society-pt-1": {
        youtubeId: "vB-r3y9Y1_E",
        summary: "Exploring the social, cultural, and religious landscape of pre-Islamic Arabia.",
        highlights: [
            "Makkah as a trade hub",
            "Tribal structures and honor codes",
            "The religious practices of the time"
        ],
        fullContent: "Makkah was a unique city at the crossroads of civilization. This episode dives into the tribal society of the Quraysh, their customs, and the pagan practices that dominated the Ka'bah before the light of Islam."
    }
};
