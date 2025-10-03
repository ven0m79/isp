export type NavItem = {
    name: string;
    link?: string; // URL
    submenu?: NavItem[];
};

export const navItems: NavItem[] = [
    {
        name: "Новини",
        link: "/",
        submenu: [
            { name: "Overview", link: "/overview" },
            { name: "Updates", link: "/updates" },
            { name: "Reports", link: "/reports" },
        ],
    },
    {
        name: "Про Інститут",
        link: "/projects",
        submenu: [
            { name: "Project A", link: "/projects/a" },
            { name: "Project B", link: "/projects/b" },
            { name: "Project C", link: "/projects/c" },
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
            { name: "Members", link: "/team/members" },
            { name: "Roles", link: "/team/roles" },
            { name: "Settings", link: "/team/settings" },
        ],
    },
    {
        name: "Система управління якістю",
        link: "/diyalnist",
        submenu: [
            { name: "Members", link: "/team/members" },
            { name: "Roles", link: "/team/roles" },
            { name: "Settings", link: "/team/settings" },
        ],
    },
    {
        name: "Публікації",
        link: "/diyalnist",
        submenu: [
            { name: "Members", link: "/team/members" },
            { name: "Roles", link: "/team/roles" },
            { name: "Settings", link: "/team/settings" },
        ],
    },
];