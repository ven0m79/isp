"use client";
//import Image from "next/image";
//import { useTranslations } from "next-intl";
//import classNames from "classnames";
import React, { FC } from "react";
//import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type NavItem = {
    name: string;
    link?: string; // URL
    submenu?: NavItem[];
};

const navItems: NavItem[] = [
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
        link: "/team",
        submenu: [
            { name: "Members", link: "/team/members" },
            { name: "Roles", link: "/team/roles" },
            { name: "Settings", link: "/team/settings" },
        ],
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

const DesktopNav: FC<{}> = ({ }) => {
    // const pathname = usePathname();
    //const t = useTranslations("Menu");
    //const t2 = useTranslations("Index");



    return (
        <nav className="flex gap-4 bg-gray-900 p-3 rounded-md">
            {navItems.map((item) => (
                <Menu as="div" key={item.name} className="relative">
                    {({ open }) => (
                        <div
                            onMouseEnter={(e) => {
                                // форсуємо відкриття
                                (e.currentTarget.querySelector("button") as HTMLButtonElement)?.click();
                            }}
                            onMouseLeave={(e) => {
                                if (open) {
                                    (e.currentTarget.querySelector("button") as HTMLButtonElement)?.click();
                                }
                            }}
                        >
                            <MenuButton className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                                {item.name}
                            </MenuButton>

                            {item.submenu && (
                                <MenuItems className="absolute top-full left-0 mt-1 w-48 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {item.submenu.map((sub) => (
                                        <MenuItem
                                            key={sub.name} // 🔑 важливо тут
                                            as={Link}
                                            href={sub.link || "#"}
                                            className="block px-4 py-2 text-sm text-gray-200 data-[focus]:bg-gray-700 data-[focus]:text-white"
                                        >
                                            {sub.name}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            )}
                        </div>
                    )}
                </Menu>
            ))}
        </nav>
    );
};

export default DesktopNav;


{/* <div className="">
            <ul className="flex ms-center">
                {Object.keys(NavLinks).map((el) => (
                    <li
                        key={el}
                        className={classNames(
                            "text-[10px] sm:text-[12px] xl:text-[16px]",
                            styles["link"],
                            {
                                [styles["active"]]:
                                    NavLinks[el].link === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(NavLinks[el].link),
                            }
                        )}
                    >
                        <Link href={NavLinks[el].link}>{(NavLinks[el].title)}</Link>
                    </li>
                ))}
            </ul>
        </div> */}