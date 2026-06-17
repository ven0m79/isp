"use client";

import * as React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type NavItem = {
    name: string;
    link?: string;
    submenu?: NavItem[];
};

const navItemsData: NavItem[] = [
    {
        name: "Новини",
        link: "/",
    },
    {
        name: "Про Інститут",
        link: "/about",
        submenu: [
            { name: "Історія Інституту", link: "/about/history" },
            { name: "Керівництво", link: "/about/ceo" },
            { name: "Статут", link: "/about/statut" },
            {
                name: "Вчена рада",
                submenu: [
                    { name: "Phase 1", link: "/projects/b/phase1" },
                    { name: "Phase 2", link: "/projects/b/phase2" },
                ],
            },
        ],
    },
    {
        name: "Team",
        link: "/team",
        submenu: [
            { name: "Members", link: "/team/members" },
            { name: "Roles", link: "/team/roles" },
            { name: "Settings", link: "/team/settings" },
        ],
    },
];

// Рекурсивне створення підменю
const RecursiveMenu: React.FC<{ items: NavItem[] }> = ({ items }) => {
    return (
        <>
            {items.map((item) =>
                item.submenu && item.submenu.length > 0 ? (
                    <Menubar.Sub key={item.name}>
                        <Link
                            href={"/services"}><Menubar.SubTrigger className="flex justify-between px-4 py-2 rounded-md text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600">
                                {item.name}
                                <ChevronRightIcon className="ml-2 w-4 h-4" />
                            </Menubar.SubTrigger></Link>
                        <Menubar.SubContent className="bg-gray-800 p-2 rounded-md shadow-md">
                            <RecursiveMenu items={item.submenu} />
                        </Menubar.SubContent>
                    </Menubar.Sub>
                ) : (
                    <Menubar.Item
                        key={item.name}
                        className="px-4 py-2 rounded-md text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600"
                    >
                        <Link href={item.link || "#"} className="w-full block">
                            {item.name}
                        </Link>
                    </Menubar.Item>
                )
            )}
        </>
    );
};


export const Nav: React.FC = () => {
    return (
        <Menubar.Root className="bg-gray-900 p-2 rounded-md flex gap-2">
            {navItemsData.map((item) =>
                item.submenu && item.submenu.length > 0 ? (
                    <Menubar.Menu key={item.name}>
                        <Menubar.Trigger className="px-4 py-2 rounded-md text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600">
                            {item.name}
                        </Menubar.Trigger>
                        <Menubar.Content className="bg-gray-800 p-2 rounded-md shadow-md">
                            <RecursiveMenu items={item.submenu} />
                        </Menubar.Content>
                    </Menubar.Menu>
                ) : (
                    <Menubar.Menu key={item.name}>
                        <Menubar.Content className="bg-gray-800 p-2 rounded-md shadow-md">
                            <Menubar.Item className="px-4 py-2 rounded-md text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600">
                                <Link href={item.link || "#"} className="w-full block">
                                    {item.name}
                                </Link>
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Menu>
                )
            )}
        </Menubar.Root>

    );
};

export default Nav;
