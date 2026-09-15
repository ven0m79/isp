"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Nav from "./Nav";

export default function StickyNavigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const stickyStart = nav.getBoundingClientRect().top + window.scrollY;
    const updateStickyState = () => setIsSticky(window.scrollY >= stickyStart);

    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    return () => window.removeEventListener("scroll", updateStickyState);
  }, []);

  return (
    <div
      ref={navRef}
      className={classNames(
        "sticky top-0 z-[60] w-full md:-mt-12 md:ml-5 md:w-fit md:rounded-[20px] transition-colors duration-200",
        isSticky ? "bg-[#002766] shadow-lg" : "bg-blue-300"
      )}
    >
      <Nav isSticky={isSticky} />
    </div>
  );
}
