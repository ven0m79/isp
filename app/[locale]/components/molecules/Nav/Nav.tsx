"use client";

import { FC, useState } from "react";
import DesktopItem from "./DesktopNav";
import MobileItem from "./MobileNav";
import { navItems } from "./navItems";
import { AnimatePresence, motion } from "framer-motion";

const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex gap-4 bg-gray-100 px-0 rounded-[20px]">
        {navItems.map((item) => (
          <DesktopItem key={item.nameKey} item={item} />
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Меню"
          className="flex items-center justify-between w-full px-4 py-2.5 bg-blue-300 rounded-[20px] text-black"
        >
          <span className="text-sm font-semibold">Меню</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M4 4l14 14M4 18L18 4" stroke="black" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h16M3 11h16M3 17h16" stroke="black" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-1 bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              {navItems.map((item) => (
                <MobileItem key={item.nameKey} item={item} level={0} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
