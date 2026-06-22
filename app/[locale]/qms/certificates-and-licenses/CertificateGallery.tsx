"use client";

import { MagnifyingGlassPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type CertificateDocument = {
  title: string;
  description: string;
  status: string;
  imageSrc: string;
  width: number;
  height: number;
};

type CertificateGalleryProps = {
  documents: CertificateDocument[];
  openLabel: string;
  closeLabel: string;
};

export default function CertificateGallery({ documents, openLabel, closeLabel }: CertificateGalleryProps) {
  const [activeDocument, setActiveDocument] = useState<CertificateDocument | null>(null);

  useEffect(() => {
    if (!activeDocument) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDocument(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeDocument]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {documents.map((document) => (
          <article key={document.imageSrc} className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setActiveDocument(document)}
              className="group relative block h-[360px] w-full cursor-pointer overflow-hidden bg-[#EFF4FB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0061AA]"
              aria-label={`${openLabel}: ${document.title}`}
            >
              <Image
                src={document.imageSrc}
                alt={document.title}
                fill
                sizes="(min-width: 1024px) 430px, (min-width: 768px) 45vw, 100vw"
                className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0061AA] text-white shadow-md transition group-hover:bg-[#002766]">
                <MagnifyingGlassPlusIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </button>
            <div className="border-t border-[#dce7f1] p-5">
              <h2 className="text-lg font-bold text-[#002766] md:min-h-36">{document.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#294e70]">{document.description}</p>
              <p className="mt-3 rounded-lg bg-[#EFF4FB] px-3 py-2 text-xs font-bold leading-5 text-[#07518F]">{document.status}</p>
            </div>
          </article>
        ))}
      </div>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {activeDocument ? (
                <motion.div
                  className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-[#001a42]/85 p-3 md:p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveDocument(null)}
                >
                  <motion.div
                    className="relative h-[94vh] w-full max-w-5xl cursor-default overflow-hidden rounded-xl border border-white/20 bg-white shadow-2xl"
                    initial={{ scale: 0.94, y: 16, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.96, y: 12, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeDocument.title}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDocument(null)}
                      className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#002766] shadow-md transition hover:bg-[#EFF4FB] focus:outline-none focus:ring-2 focus:ring-[#0061AA]"
                      aria-label={closeLabel}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="relative h-full bg-[#EFF4FB]">
                      <Image
                        src={activeDocument.imageSrc}
                        alt={activeDocument.title}
                        fill
                        sizes="100vw"
                        className="object-contain p-2 md:p-4"
                        priority
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
