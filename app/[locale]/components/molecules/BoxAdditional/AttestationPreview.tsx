"use client";

import { MagnifyingGlassPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function AttestationPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRoot = typeof document === "undefined" ? null : document.body;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-md border border-[#c8d8ea] bg-white transition hover:border-[#0061AA] focus:outline-none focus:ring-2 focus:ring-[#0061AA]"
        aria-label="Відкрити атестат у повному розмірі"
      >
        <Image
          src="/atestat-small.jpg"
          width={150}
          height={214}
          alt="Атестація"
        />
        <span className="absolute bottom-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0061AA] text-white shadow-md transition group-hover:bg-[#002766]">
          <MagnifyingGlassPlusIcon className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>

      {modalRoot
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#001a42]/80 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className="relative max-h-[92vh] w-full max-w-4xl cursor-pointer overflow-hidden rounded-lg border border-white/20 bg-white shadow-2xl"
                    initial={{ scale: 0.94, y: 16, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.96, y: 12, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Атестат у повному розмірі"
                  >
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#002766] shadow-md transition hover:bg-[#EFF4FB] focus:outline-none focus:ring-2 focus:ring-[#0061AA]"
                      aria-label="Закрити"
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="relative h-[92vh] max-h-[92vh] bg-[#EFF4FB]">
                      <Image
                        src="/cert-nanu.jpg"
                        alt="Атестат Національної академії наук України"
                        fill
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            modalRoot,
          )
        : null}
    </>
  );
}
