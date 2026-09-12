"use client";

import classNames from "classnames";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@app/i18n/navigation";

type SearchBoxProps = {
  variant?: "header" | "mobile";
};

const SearchBox = ({ variant = "header" }: SearchBoxProps) => {
  const t = useTranslations("header");
  const router = useRouter();
  const [value, setValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = value.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex z-50 h-6.25 w-full">
      <div className="relative flex w-full items-center">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={searchFocused ? "" : t("search")}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className={classNames(
            "flex w-full items-center rounded-[15px] border-[#0061AA] border bg-white/5 pr-8 pl-3 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#0061AA]",
            variant === "mobile" && "bg-white"
          )}
        />
        <button
          type="submit"
          aria-label={t("search")}
          className="absolute right-1.5 flex items-center justify-center text-[#0061AA] hover:text-[#004f8c]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11.5 11.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
