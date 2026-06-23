"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SLIDES = [
  {
    id: 0,
    src: "/slide1.webp",
    line1: "Централізоване сховища відпрацьованого ядерного палива (ЦСВЯП)",
    line2: "Забезпечуємо повний цикл комплексного науково-технічного супроводу на всіх етапах створення Централізованого сховища відпрацьованого ядерного палива (ЦСВЯП), що гарантувало ядерну та радіаційну безпеку об'єкта",
    textFrom: -1,        // -1 = slide in from left, 1 = from right
    fallback: "#1a3a5c",
    textBox: {
      line1: "min(720px, 72vw)",
      line2: "min(900px, 78vw)",
    },
  },
  {
    id: 1,
    src: "/slide2.webp",
    line1: `Новий безпечний конфайнмент об'єкту "Укриття" (НБК-ОУ)`,
    line2: "Захисна споруда, комплекс технологічного обладнання для вилучення із зруйнованого четвертого енергоблока Чорнобильської АЕС матеріалів, призначена для здійснення діяльності з перетворення цього енергоблока на екологічно безпечну систему та забезпечення безпеки персоналу, населення і довкілля",
    textFrom: -1,
    fallback: "#0d3320",
    textBox: {
      line1: "min(620px, 64vw)",
      line2: "min(900px, 56vw)",
    },
  },
  {
    id: 2,
    src: "/slide3.webp",
    line1: "Ми проводимо фундаментальні та прикладні дослідження з таких наукових напрямів", 
    line2: "перетворення об’єкта «Укриття» на екологічно безпечну систему, безпека експлуатації ядерних установок, зняття з експлуатації ядерних установок, поводження з відпрацьованим ядерним паливом  та радіоактивними відходами.",
    textFrom: -1,
    fallback: "#2c1a4a",
    textBox: {
      line1: "min(860px, 66vw)",
      line2: "min(900px, 76vw)",
    },
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
    const t = setInterval(next, 7000);
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
            sizes="(min-width: 768px) calc(min(100vw, 75rem) - 280px), 100vw"
            style={{ objectFit: "cover" }}
            loading="eager"
            fetchPriority={slide.id === 0 ? "high" : "auto"}
          />

          {/* dark gradient overlay for legibility */}
          {/* <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-transparent" /> */}

          {/* animated text block */}
          <div className="absolute inset-0 flex flex-col justify-center pl-0 gap-2">
            <motion.p
              initial={{ x: offset, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.55, delay: 0.25, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="rounded-r-3xl border border-[#51749E] bg-[#51749E90] px-5 py-3 text-white text-[20px] font-norma drop-shadow-lg leading-tight backdrop-blur-[2px]"
              style={{ maxWidth: slide.textBox.line1 }}
            >
              {slide.line1}
            </motion.p>

            <motion.p
              initial={{ x: offset, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.55, delay: 0.4, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="rounded-r-3xl border border-[#51749E] bg-[#51749E90] px-5 py-3 text-white  text-[16px] font-normal drop-shadow backdrop-blur-[2px]"
              style={{ maxWidth: slide.textBox.line2 }}
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
        className="absolute left-2 top-6 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 hover:bg-black/55 transition text-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Наступний слайд"
        className="absolute right-2 top-6 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 hover:bg-black/55 transition text-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ── dot indicators ── */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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
