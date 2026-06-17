"use client";

import { FC, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@app/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { isActiveItem } from "./DesktopNav";
import { NavItem } from "./navItems";

const MobileNav: FC<{ item: NavItem; level: number }> = ({ item, level }) => {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = isActiveItem(item, pathname);

  useEffect(() => {
    if (active && item.submenu) setOpen(true);
  }, [active, item.submenu]);

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`flex justify-between items-center w-full px-3 py-2 rounded-md transition ${
              active
                ? "bg-gray-700 text-yellow-400"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            style={{ paddingLeft: `${level * 16 + 12}px` }}
          >
            {t(item.nameKey)}
            <ChevronDownIcon
              className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-1 space-y-1 overflow-hidden"
              >
                {item.submenu.map((sub) => (
                  <MobileNav key={sub.nameKey} item={sub} level={level + 1} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.link || "/"}
          className={`block px-3 py-2 rounded-md transition ${
            active ? "bg-gray-700 text-yellow-400" : "hover:bg-gray-600 text-white"
          }`}
          style={{ paddingLeft: `${level * 16 + 12}px` }}
        >
          {t(item.nameKey)}
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
