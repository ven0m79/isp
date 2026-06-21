export type NavItem = {
    nameKey: string;
    link?: string;
    submenu?: NavItem[];
};

export const navItems: NavItem[] = [
    {
        nameKey: "news",
        link: "/",
    },
    {
        nameKey: "about",
        link: "/about",
        submenu: [
            { nameKey: "aboutHistory", link: "/about/history" },
            { nameKey: "aboutAdministration", link: "/about/administration" },
            { nameKey: "aboutRegulations", link: "/about/regulations" },
            { nameKey: "aboutScientistsCouncil", link: "/about/scientists-council" },
            { nameKey: "aboutSpecializedCouncil", link: "/about/specialized-scientists-council" },
            { nameKey: "aboutYoungScientists", link: "/about/council-of-young-scientists" },
        ],
    },
    {
        nameKey: "structure",
        link: "/structure",
    },
    {
        nameKey: "activity",
        link: "/activity",
        submenu: [
            { nameKey: "activityAreas", link: "/activity/areas-of-activity" },
            { nameKey: "activityScientific", link: "/activity/scientific-activity" },
            { nameKey: "activityInternational", link: "/activity/international-activity" },
            { nameKey: "activityGender", link: "/activity/gender-equality-plan" },
            { nameKey: "activityPartners", link: "/activity/partners" },
            { nameKey: "activityResults", link: "/activity/results-of-activity" },
            { nameKey: "activityCorruption", link: "/activity/prevention-of-corruption" },
            { nameKey: "activityUnion", link: "/activity/union-committee" },
            { nameKey: "activityProcurement", link: "/activity/information-on-procurement-procedures" },
        ],
    },
    {
        nameKey: "qms",
        link: "/qms",
        submenu: [
            { nameKey: "qmsQuality", link: "/qms/quality-policy" },
            { nameKey: "qmsCertificates", link: "/qms/certificates-and-licenses" },
        ],
    },
    {
        nameKey: "publications",
        link: "/publications",
        submenu: [
            { nameKey: "publicationsProblems", link: "/publications/problems-of-nuclear-power-plants-safety-and-of-chornobyl" },
            { nameKey: "publicationsNuclear", link: "/publications/nuclear-power-and-environment" },
            { nameKey: "publicationsMonographs", link: "/publications/monographs" },
        ],
    },
];
