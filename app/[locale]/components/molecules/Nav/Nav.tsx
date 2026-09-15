"use client";

import { FC, useState } from "react";
import classNames from "classnames";
import DesktopItem from "./DesktopNav";
import MobileItem from "./MobileNav";
import { navItems } from "./navItems";
import { AnimatePresence, motion } from "framer-motion";

const Navigation: FC<{ isSticky?: boolean }> = ({ isSticky = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className={classNames(
        "hidden md:flex gap-px px-0 rounded-[20px] border transition-colors duration-200",
        isSticky ? "bg-[#002766] border-[#002766]" : "bg-gray-100 border-gray-300"
      )}>
        {navItems.map((item) => (
          <DesktopItem key={item.nameKey} item={item} isSticky={isSticky} />
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Меню"
          className={classNames(
            "flex items-center justify-between w-full px-4 py-2.5 rounded-[20px] transition-colors duration-200",
            isSticky ? "bg-[#002766] text-white" : "bg-blue-300 text-black"
          )}
        >
          <span className="text-sm font-semibold">Меню</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M4 4l14 14M4 18L18 4" stroke={isSticky ? "white" : "black"} strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h16M3 11h16M3 17h16" stroke={isSticky ? "white" : "black"} strokeWidth="2" strokeLinecap="round" />
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
