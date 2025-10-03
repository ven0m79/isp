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
            { name: "Вчена рада", link: "/about/academic-council" },
            { name: "Спеціалізована вчена рада", link: "/about/specialized-academic-council" },
            { name: "Рада молодих вчених", link: "/about/council-of-young-scientists" },
        ],
    },
    {
        name: "Структура ІПБ АЕС",
        link: "/structure",
    },
    {
        name: "Діяльність",
        link: "/diyalnist",
        submenu: [
            { name: "Напрями діяльності", link: "/diyalnist/members" },
            { name: "Наукова діяльність", link: "/diyalnist/roles" },
            { name: "Міжнародна діяльність", link: "/diyalnist/settings" },
            { name: "План ґендерної рівності", link: "/diyalnist/settings" },
            { name: "Партнери", link: "/diyalnist/settings" },
            { name: "Результати діяльності", link: "/diyalnist/settings" },
            { name: "Запобігання проявам корупції", link: "/diyalnist/settings" },
            { name: "Профспілка", link: "/diyalnist/settings" },
            { name: "Інформація за процедурами закупівель", link: "/diyalnist/settings" },
        ],
    },
    {
        name: "Система управління якістю",
        link: "/qms",
        submenu: [
            { name: "Політика у сфері якості", link: "/qms/members" },
            { name: "Сертифікати та Ліцензії", link: "/qms/roles" },
            { name: "Бланки", link: "/qms/settings" },
        ],
    },
    {
        name: "Публікації",
        link: "/publications",
        submenu: [
            { name: "Проблеми безпеки АЕС і Чорнобиля", link: "/publications/members" },
            { name: "Ядерна енергетика та довкілля", link: "/publications/roles" },
            { name: "Монографії", link: "/publications/settings" },
        ],
    },
];