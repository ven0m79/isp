"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./navItems";

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
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={item.link || "#"}
        className={`px-4 py-2 rounded-md font-semibold transition ${
          isActiveItem(item, pathname)
            ? "bg-gray-700 text-yellow-400"
            : "text-white hover:bg-gray-700"
        }`}
      >
        {item.name}
      </Link>

      {item.submenu && hover && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg z-50">
          {item.submenu.map((sub) => (
            <DesktopNav key={sub.name} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopNav;
