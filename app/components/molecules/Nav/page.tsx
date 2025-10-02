"use client";
import Image from "next/image";
//import { useTranslations } from "next-intl";
import classNames from "classnames";
import React, { FC, useState } from "react";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type NavItem = {
    name: string;
    link?: string; // URL
    submenu?: NavItem[];
};

const NavLinks: {
    [key: string]: {
        title: string;
        link: string;
    };
} = {
    home: {
        title: "Новини",
        link: "/",
    },
    about: {
        title: "Про Інститут",
        link: "/about",
    },
    catalog: {
        title: "Структура ІПБ АЕС",
        link: "/catalog",
    },
    services: {
        title: "Діяльність",
        link: "/services",
    },
    projects: {
        title: "Система управління якістю",
        link: "/projects",
    },
    shares: {
        title: "Публікації",
        link: "/shares",
    },

};

const navItems: NavItem[] = [
    {
        name: "Home",
        link: "/",
        submenu: [
            { name: "Overview", link: "/overview" },
            { name: "Updates", link: "/updates" },
            { name: "Reports", link: "/reports" },
        ],
    },
    {
        name: "Projects",
        link: "/projects",
        submenu: [
            { name: "Project A", link: "/projects/a" },
            { name: "Project B", link: "/projects/b" },
            { name: "Project C", link: "/projects/c" },
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

const DesktopNav: FC<{}> = ({ }) => {
    const pathname = usePathname();
    //const t = useTranslations("Menu");
    //const t2 = useTranslations("Index");

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <nav className="flex p-2 rounded-lg bg-gray-900 gap-2">
            {navItems.map((item, index) => (
                <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                >
                    {/* Головний пункт меню */}
                    {item.link ? (
                        <Link
                            href={item.link}
                            className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-gray-700 text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <span className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-gray-700 text-white font-semibold">
                            {item.name}
                        </span>
                    )}

                    {/* Підменю */}
                    {openIndex === index && item.submenu && (
                        <div className="absolute left-0 mt-0 w-40 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-10">
                            {item.submenu.map((sub) => (
                                <Link
                                    key={sub.name}
                                    href={sub.link || "#"}
                                    className="block w-full text-left px-4 py-2 text-gray-200 transition-colors duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white"
                                >
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
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