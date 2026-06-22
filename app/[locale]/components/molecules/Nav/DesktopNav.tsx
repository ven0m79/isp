"use client";

import { FC, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@app/i18n/navigation";
import { NavItem } from "./navItems";
import styles from "./Nav.module.css";
import classNames from "classnames";

export const isActiveItem = (item: NavItem, pathname: string): boolean => {
  if (item.link) {
    const itemPath = item.link === "/" ? "/" : item.link.replace(/\/+$/, "");
    const currentPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

    if (currentPath === itemPath) return true;
    if (itemPath !== "/" && currentPath.startsWith(`${itemPath}/`)) return true;
  }
  if (!item.submenu) return false;
  return item.submenu.some((sub) => isActiveItem(sub, pathname));
};

const DesktopNav: FC<{ item: NavItem }> = ({ item }) => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const showMenu = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    openTimeout.current = setTimeout(() => setVisible(true), 300);
  };

  const hideMenu = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    closeTimeout.current = setTimeout(() => setVisible(false), 300);
  };

  return (
    <div
      className="relative h-8 flex justify-center font-normal z-45"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <Link
        href={item.link || "/"}
        className={`px-4 py-1 rounded-[20px] transition whitespace-nowrap ${
          isActiveItem(item, pathname)
            ? "bg-[#3E85B9] text-white"
            : "text-gray-900 hover:bg-blue-100"
        }`}
      >
        {t(item.nameKey).toUpperCase()}
      </Link>

      {item.submenu && (
        <div
          className={classNames(
            "absolute top-full left-0 mt-0.5 w-auto bg-white rounded-md shadow-lg z-[80] border border-gray-200 transition-all duration-300 ease-out transform origin-top",
            visible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
            styles["menu-items"]
          )}
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          {item.submenu.map((sub) => (
            <div key={sub.nameKey} className="w-full h-8">
              <Link
                href={sub.link || "/"}
                className={`w-full px-4 h-8 flex items-center rounded-md transition whitespace-nowrap ${
                  isActiveItem(sub, pathname)
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {t(sub.nameKey)}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopNav;
