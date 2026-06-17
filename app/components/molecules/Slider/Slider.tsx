"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SLIDES = [
  {
    id: 0,
    src: "/slide1.webp",
    line1: "Безпека ядерних технологій",
    line2: "Захист людей та довкілля — наш пріоритет",
    textFrom: -1,        // -1 = slide in from left, 1 = from right
    fallback: "#1a3a5c",
  },
  {
    id: 1,
    src: "/slide2.webp",
    line1: "Наукові дослідження з 1991 року",
    line2: "Провідний інститут ядерної безпеки України",
    textFrom: 1,
    fallback: "#0d3320",
  },
  {
    id: 2,
    src: "/slide3.webp",
    line1: "Міжнародне співробітництво",
    line2: "Партнерство з МАГАТЕ та Єврокомісією",
    textFrom: -1,
    fallback: "#2c1a4a",
  },
] as const;

const bgVariants = {
  enter:  { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.55 } },
  exit:   { opacity: 0, transition: { duration: 0.4  } },
};

export default function Slider() {
  const [idx, setIdx] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  // Mark as hydrated after first render to match server output
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Start auto-advance only after hydration
  useEffect(() => {
    if (!isHydrated) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [isHydrated, next]);

  const slide = SLIDES[idx];
  const offset = 70 * slide.textFrom;

  return (
    <div className="relative flex-1 h-70 overflow-hidden select-none">

      {/* ── slides ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{ backgroundColor: slide.fallback }}
        >
          {/* background photo */}
          <Image
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority={slide.id === 0}
          />

          {/* dark gradient overlay for legibility */}
          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-transparent" />

          {/* animated text block */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 gap-2">
            <motion.p
              initial={{ x: offset, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.55, delay: 0.25, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="text-white text-2xl font-bold drop-shadow-lg leading-tight max-w-[70%]"
            >
              {slide.line1}
            </motion.p>

            <motion.p
              initial={{ x: offset, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.55, delay: 0.4, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="text-white/85 text-base font-medium drop-shadow max-w-[60%]"
            >
              {slide.line2}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── prev / next arrows ── */}
      <button
        onClick={prev}
        aria-label="Попередній слайд"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 hover:bg-black/55 transition text-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Наступний слайд"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 hover:bg-black/55 transition text-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ── dot indicators ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIdx(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? "w-5 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
