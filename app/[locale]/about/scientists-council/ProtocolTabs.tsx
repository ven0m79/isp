"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowDownTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export type Protocol = {
  title: string;
  href: string;
};

export type ProtocolGroup = {
  year: string;
  items: Protocol[];
};

type ProtocolTabsProps = {
  groups: ProtocolGroup[];
};

export default function ProtocolTabs({ groups }: ProtocolTabsProps) {
  const [activeYear, setActiveYear] = useState(groups[0]?.year ?? "");
  const activeGroup = useMemo(
    () => groups.find((group) => group.year === activeYear) ?? groups[0],
    [activeYear, groups],
  );

  if (!activeGroup) {
    return null;
  }

  return (
    <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
      <div className="p-5 md:p-6">
        <div className="flex flex-col gap-2 border-b border-[#c8d8ea] pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
              Протоколи засідань
            </h3>
            <p className="mt-2 indent-6 text-justify text-sm leading-relaxed text-gray-700">
              Документи згруповано за роками. Оберіть рік, щоб переглянути
              доступні протоколи та відкрити PDF.
            </p>
          </div>
          <p className="text-sm font-semibold text-[#51749E]">
            {groups.reduce((sum, group) => sum + group.items.length, 0)} документів
          </p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {groups.map((group) => (
            <button
              key={group.year}
              type="button"
              onClick={() => setActiveYear(group.year)}
              className={`shrink-0 rounded-md border px-3 py-2 text-sm font-semibold transition ${
                activeYear === group.year
                  ? "border-[#0061AA] bg-[#0061AA] text-white"
                  : "border-[#c8d8ea] bg-[#EFF4FB] text-[#002766] hover:border-[#0061AA]"
              }`}
            >
              {group.year}
              <span className="ml-2 text-xs opacity-80">{group.items.length}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.year}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mt-4 grid gap-2"
          >
            {activeGroup.items.map((protocol) => (
              <a
                key={`${activeGroup.year}-${protocol.title}`}
                href={protocol.href}
                download
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[32px_1fr_32px] items-center gap-3 rounded-md border border-[#c8d8ea] bg-[#EFF4FB] px-3 py-3 text-sm text-[#002766] transition hover:border-[#0061AA] hover:bg-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0061AA]">
                  <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-justify">{protocol.title}</span>
                <ArrowDownTrayIcon className="h-5 w-5 text-[#0061AA]" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
