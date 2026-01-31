export interface EpisodeDetail {
    youtubeId?: string;
    summary: string;
    seoDescription?: string;
    highlights: string[];
    fullContent: string;
}

export const episodeDetails: Record<string, EpisodeDetail> = {
    "intro-pt-1": {
        youtubeId: "vB-r3y9Y1_E",
        summary: "This episode introduces the study of the Seerah, following the scholarly tradition of defining the field and its principles before beginning. The discussion explores the linguistic and technical meanings of 'Seerah', defining it not just as a biography, but as a path and a physical form.",
        seoDescription: "Discover the true meaning of Seerah in this introductory guide based on Shaykh Abdul Nasir Jangda's teachings. Learn why humanising the Prophet Muhammad (saw) is essential for modern Muslims.",
        highlights: [
            "Defining Seerah: Linguistically it means a path or direction; technically refers to the Prophetic biography.",
            "The Ultimate Role Model: Based on Surah Al-Ahzab (33:21), the Prophet is the eternal example for all times.",
            "Humanisation over Entertainment: Moving beyond dry facts to find practical relevance in his life.",
            "Seerah vs Hadith: Seerah provides the context and emotions that simple legal narrations might lack.",
            "Periods of Prophethood: Understanding the documentation differences between Makkan and Madinan eras.",
            "Love through Familiarity: How studying the Seerah naturally leads to spiritual love and obedience."
        ],
        fullContent: `
            <div class="prose-section">
                <h4>1. The Meaning and Scope of Seerah</h4>
                <p>Linguistically, Seerah refers to a <strong>path</strong> or a direction someone takes. Figuratively, it describes a person’s life and the direction they have lived it in. Interestingly, the term also encompasses a person's <strong>physical form</strong>, actions, and mannerisms. In the Quran, the word is used to mean a "former condition", such as when Allah returned Musa’s (as) staff to its original state. Technically, <em>Seeratul Nabawiya</em> is the biography of the Prophet (saw), including his daily practices, physical descriptions, family life, and military campaigns.</p>
            </div>

            <div class="prose-section">
                <h4>2. The Purpose: Humanising the Prophet</h4>
                <p>A common problem in how Seerah is taught is that it becomes either a dry timeline of names and dates or a "fairytale" narrative that lacks connection to the listener. The true purpose of Seerah is to find <strong>benefit and application</strong>. By studying his life "blow by blow", we see him as a human who experienced grief, loss, and family life. This humanisation is vital for youth and new converts who might otherwise feel the Prophet is as unreachable as a "superhero" from another planet.</p>
            </div>

            <div class="prose-section">
                <h4>3. Seerah in the Quran</h4>
                <p>Surah Al-Ahzab (33:21) establishes the Prophet as the <strong>"excellent pattern"</strong>. The grammar used in this verse emphasises that this role is eternal, universal, and without exception. To truly benefit, one must "immerse" themselves in his life, conceptually walking in his shoes day by day.</p>
            </div>

            <div class="prose-section">
                <h4>4. Seerah, Hadith, and Sunnah</h4>
                <p>There are distinct differences between these terms: <strong>Hadith</strong> are technical, verified narrations often used for legal rulings; <strong>Sunnah</strong> is a broader term encompassing recommended acts and theological paths; while <strong>Seerah</strong> provides the <strong>overall narrative and context</strong> that Hadith sometimes lacks.</p>
            </div>

            <div class="prose-section">
                <h4>5. Comparison of the Makkan and Madinan Eras</h4>
                <p>Most Seerah books dedicate more space to the <strong>Madinan period</strong> because it was very public and filled with documented major events. However, the <strong>Makkan period</strong>, while more private in its early years, is full of "gems" on how to flourish as a community under different circumstances.</p>
            </div>

            <div class="prose-section">
                <h4>6. Addressing Modern Doubts</h4>
                <p>The study of Seerah addresses contemporary issues regarding the authenticity of the Sunnah. Familiarity breeds love, and when a person truly knows the Prophet through his Seerah, they will naturally love him and follow his guidance without objection.</p>
            </div>
        `
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
