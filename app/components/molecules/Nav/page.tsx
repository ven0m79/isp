"use client";

import React, { FC, useState } from "react";
import DesktopItem from "./DesktopNav";
import MobileItem from "./MobileNav";
import { navItems } from "./navItems";
import { AnimatePresence, motion } from "framer-motion";

const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-4 bg-gray-900 p-3 rounded-md">
        {navItems.map((item) => (
          <DesktopItem key={item.name} item={item} />
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden bg-gray-900 p-3 rounded-md">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="px-4 py-2 bg-gray-700 text-white rounded-md w-full text-left"
        >
          Menu
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 bg-gray-800 rounded-md overflow-hidden space-y-1"
            >
              {navItems.map((item) => (
                <MobileItem key={item.name} item={item} level={0} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
