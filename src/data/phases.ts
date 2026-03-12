export interface Phase {
    id: string;
    title: string;
    description: string;
    startId: number;
    endId: number;
    color: string;
    era: 'Makkan' | 'Madinan';
}

export const PHASES: Phase[] = [
    {
        id: "preparation",
        title: "Before Revelation",
        description: "Arabia before Islam and the early life of the Prophet ﷺ leading up to the first revelation.",
        startId: 1,
        endId: 26,
        color: "#487792",
        era: 'Makkan'
    },
    {
        id: "early-revelation",
        title: "Beginning of Prophethood",
        description: "The first revelations, the earliest converts, and the formation of the first Muslim community.",
        startId: 27,
        endId: 36,
        color: "#4C9F70",
        era: 'Makkan'
    },
    {
        id: "makkan-persecution",
        title: "Persecution in Makkah",
        description: "The Quraysh oppose Islam. Muslims face persecution and the migration to Abyssinia.",
        startId: 37,
        endId: 54,
        color: "#C05621",
        era: 'Makkan'
    },
    {
        id: "year-of-sorrow",
        title: "Year of Sorrow",
        description: "The deaths of Khadijah and Abu Talib, the journey to Ta’if, and the Isra and Mi'raj.",
        startId: 55,
        endId: 68,
        color: "#805AD5",
        era: 'Makkan'
    },
    {
        id: "path-to-hijrah",
        title: "Road to Hijrah",
        description: "The pledges of Aqabah and events leading to the migration from Makkah to Madinah.",
        startId: 69,
        endId: 78,
        color: "#2B6CB0",
        era: 'Makkan'
    },
    {
        id: "hijrah-and-foundation",
        title: "Establishing Madinah",
        description: "The migration, construction of the mosque, and building the community foundations.",
        startId: 79,
        endId: 90,
        color: "#2F855A",
        era: 'Madinan'
    },
    {
        id: "badr-period",
        title: "The Battle of Badr",
        description: "The first great encounter that established the Muslims as a major force.",
        startId: 91,
        endId: 104,
        color: "#B7791F",
        era: 'Madinan'
    },
    {
        id: "uhud-period",
        title: "Uhud & Trials",
        description: "The Battle of Uhud and the trials faced by the Muslim community afterward.",
        startId: 105,
        endId: 118,
        color: "#C53030",
        era: 'Madinan'
    },
    {
        id: "conflicts-and-expeditions",
        title: "Expeditions",
        description: "Tensions and expeditions between Madinah and surrounding tribes.",
        startId: 119,
        endId: 124,
        color: "#718096",
        era: 'Madinan'
    },
    {
        id: "battle-of-trench",
        title: "Battle of the Trench",
        description: "The confederate attack on Madinah and the defeat of the allied forces.",
        startId: 125,
        endId: 131,
        color: "#6B46C1",
        era: 'Madinan'
    },
    {
        id: "internal-events",
        title: "Social Development",
        description: "Community trials, marriages, and major social developments in Madinah.",
        startId: 132,
        endId: 138,
        color: "#319795",
        era: 'Madinan'
    },
    {
        id: "hudaybiyyah",
        title: "Treaty of Hudaybiyyah",
        description: "The political turning point that opened the door for rapid expansion.",
        startId: 139,
        endId: 140,
        color: "#DD6B20",
        era: 'Madinan'
    },
    {
        id: "khaybar-expansion",
        title: "Khaybar & Growth",
        description: "The Battle of Khaybar and the growing strength of the Muslim state.",
        startId: 141,
        endId: 149,
        color: "#2C7A7B",
        era: 'Madinan'
    },
    {
        id: "new-leaders",
        title: "New Leaders",
        description: "Influential figures such as Khalid ibn al-Walid embrace Islam.",
        startId: 150,
        endId: 151,
        color: "#4A5568",
        era: 'Madinan'
    },
    {
        id: "mutah-and-diplomacy",
        title: "Global Outreach",
        description: "The Battle of Mutah and sending letters to world leaders.",
        startId: 152,
        endId: 154,
        color: "#D69E2E",
        era: 'Madinan'
    },
    {
        id: "conquest-of-makkah",
        title: "Conquest of Makkah",
        description: "The peaceful return and liberation of the Ka'bah.",
        startId: 155,
        endId: 161,
        color: "#C53030",
        era: 'Madinan'
    },
    {
        id: "hunayn-and-taif",
        title: "Hunayn & Ta’if",
        description: "Battles following the conquest and consolidation of Arabia.",
        startId: 162,
        endId: 166,
        color: "#B7791F",
        era: 'Madinan'
    },
    {
        id: "tabuk",
        title: "Tabuk Expedition",
        description: "The northern expedition and its political consequences.",
        startId: 167,
        endId: 172,
        color: "#2B6CB0",
        era: 'Madinan'
    },
    {
        id: "year-of-delegations",
        title: "Year of Delegations",
        description: "Tribes from all over Arabia visit Madinah to accept Islam.",
        startId: 173,
        endId: 183,
        color: "#2F855A",
        era: 'Madinan'
    },
    {
        id: "farewell-hajj",
        title: "The Farewell Hajj",
        description: "The final pilgrimage and the delivery of the Farewell Sermon.",
        startId: 184,
        endId: 193,
        color: "#805AD5",
        era: 'Madinan'
    },
    {
        id: "final-days",
        title: "Completion of Grace",
        description: "The last year, the passing of the Messenger ﷺ, and his legacy.",
        startId: 194,
        endId: 199,
        color: "#4A5568",
        era: 'Madinan'
    },
];

export const getPhaseForEpisode = (id: number | string): Phase | undefined => {
    const numericId = typeof id === "string" ? Number.parseInt(id, 10) : id;
    if (Number.isNaN(numericId)) return undefined;
    for (const phase of PHASES) {
        if (numericId >= phase.startId && numericId <= phase.endId) {
            return phase;
        }
    }
};

export const MILESTONES = [1, 9, 27, 41, 55, 61, 70, 79, 99, 110, 125, 139, 158, 162, 184, 197];