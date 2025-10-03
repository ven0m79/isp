export type NavItem = {
    name: string;
    link?: string; // URL
    submenu?: NavItem[];
};

export const navItems: NavItem[] = [
    {
        name: "Новини",
        link: "/",
    },
    {
        name: "Про Інститут",
        link: "/about",
        submenu: [
            { name: "Історія Інституту", link: "/about/history" },
            { name: "Керівництво", link: "/about/administration" },
            { name: "Статут", link: "/about/regulations" },
            { name: "Вчена рада", link: "/about/scientists-council" },
            { name: "Спеціалізована вчена рада", link: "/about/specialized-scientists-council" },
            { name: "Рада молодих вчених", link: "/about/council-of-young-scientists" },
        ],
    },
    {
        name: "Структура ІПБ АЕС",
        link: "/structure",
    },
    {
        name: "Діяльність",
        link: "/activity",
        submenu: [
            { name: "Напрями діяльності", link: "/activity/areas-of-activity" },
            { name: "Наукова діяльність", link: "/activity/scientific-activity" },
            { name: "Міжнародна діяльність", link: "/activity/international-activity" },
            { name: "План ґендерної рівності", link: "/activity/gender-equality-plan" },
            { name: "Партнери", link: "/activity/partners" },
            { name: "Результати діяльності", link: "/activity/results-of-activity" },
            { name: "Запобігання проявам корупції", link: "/activity/prevention-of-corruption" },
            { name: "Профспілка", link: "/activity/union-committee" },
            { name: "Інформація за процедурами закупівель", link: "/activity/information-on-procurement-procedures" },
        ],
    },
    {
        name: "Система управління якістю",
        link: "/qms",
        submenu: [
            { name: "Політика у сфері якості", link: "/qms/quality-policy" },
            { name: "Сертифікати та Ліцензії", link: "/qms/certificates-and-licenses" },
            { name: "Бланки", link: "/qms/forms" },
        ],
    },
    {
        name: "Публікації",
        link: "/publications",
        submenu: [
            { name: "Проблеми безпеки АЕС і Чорнобиля", link: "/publications/problems-of-nuclear-power-plants-safety-and-of-chornobyl" },
            { name: "Ядерна енергетика та довкілля", link: "/publications/nuclear-power-and-environment" },
            { name: "Монографії", link: "/publications/monographs" },
        ],
    },
];