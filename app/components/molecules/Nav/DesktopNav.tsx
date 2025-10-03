"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./navItems";
import styles from "./Nav.module.css";
import classNames from "classnames";

export const isActiveItem = (item: NavItem, pathname: string): boolean => {
    if (item.link && pathname === item.link) return true;
    if (!item.submenu) return false;
    return item.submenu.some((sub) => isActiveItem(sub, pathname));
};

const DesktopNav: FC<{ item: NavItem }> = ({ item }) => {
    const pathname = usePathname();
    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative h-[32px] flex justify-center font-normal"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link
                href={item.link || "#"}
                className={`px-2 py-1 rounded-[20px] transition whitespace-nowrap ${
                    isActiveItem(item, pathname)
                        ? "bg-[#3E85B9] text-white"
                        : "text-gray-900 hover:bg-blue-100"
                }`}
            >
                {item.name.toUpperCase()}
            </Link>

            {item.submenu && hover && (
                <div className={classNames("absolute top-full left-0 mt-0.5 w-auto bg-white rounded-md shadow-lg z-50 border border-gray-200", styles["menu-items"])}>
                    {item.submenu.map((sub) => (
                        <div key={sub.name} className="w-full">
                            <Link
                                href={sub.link || "#"}
                                className={`block w-full px-4 py-2 rounded-md transition whitespace-nowrap ${
                                    isActiveItem(sub, pathname)
                                        ? "bg-gray-100 text-blue-600"
                                        : "text-gray-800 hover:bg-gray-100"
                                }`}
                            >
                                {sub.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DesktopNav;
