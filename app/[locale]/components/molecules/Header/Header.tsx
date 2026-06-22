"use client";

import classNames from "classnames";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@app/i18n/navigation";
import styles from "./Header.module.css";
import { Combobox, ComboboxInput } from "@headlessui/react";

const Header = () => {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className={classNames("relative flex flex-col w-full h-auto overflow-visible", styles["header"])}>

      {/* Top bar */}
      <div className="flex justify-between w-full py-1 px-3 md:px-10 border-b border-gray-200 text-xs md:text-sm">
        <div className="hidden sm:flex gap-3">
          <Link href="/vacancies">{t("vacancies")}</Link>
          <Link href="/contacts">{t("contacts")}</Link>
        </div>
        <div className="flex gap-3 font-medium ml-auto">
          <Link
            href={pathname}
            locale="uk"
            className={locale === "uk" ? "text-[#0061AA] font-bold" : "text-gray-500 hover:text-[#0061AA]"}
          >
            UA
          </Link>
          <Link
            href={pathname}
            locale="en"
            className={locale === "en" ? "text-[#0061AA] font-bold" : "text-gray-500 hover:text-[#0061AA]"}
          >
            EN
          </Link>
        </div>
      </div>

      {/* Main row */}
      <div className="flex flex-row w-full items-center">

        {/* Logo */}
        <div className="flex-none py-2 px-3 md:px-5">
          <Link href="/">
            <Image
              src="/ipbAes_rus.svg"
              width={100}
              height={130}
              alt="Logo ISP NPP"
              style={{ width: 70, height: "auto" }}
              className="md:w-25"
            />
          </Link>
        </div>

        {/* Institute name */}
        <div className={classNames("flex flex-1 flex-col justify-center items-start text-black min-w-0", styles["headerName"])}>
          <h4 className="hidden md:block font-normal text-sm">{t("nanu")}</h4>
          <h1 className="text-sm md:text-base font-bold leading-tight -mb-0.5 md:-mb-2">{t("line1")}</h1>
          <h1 className="text-sm md:text-base font-bold leading-tight">{t("line2")}</h1>
        </div>

        {/* Search + social — desktop only */}
        <div className="hidden md:flex flex-col items-center justify-between w-70 h-30 py-8 flex-none">
          <div className={classNames("", styles["search"])}>
            <Combobox>
              <div className="flex z-50 h-6.25">
                <ComboboxInput
                  className={classNames(
                    "w-full rounded-[15px] border-[#0061AA] border bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black",
                    "focus:outline-none data-focus:outline-none data-focus:-outline-offset-2 data-focus:bg-sky-50"
                  )}
                  placeholder={t("search")}
                />
              </div>
            </Combobox>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link href="https://www.facebook.com/">
              <Image src="/facebook-ico.webp" width={22} height={22} alt="Facebook" />
            </Link>
            <Link href="https://www.youtube.com/">
              <Image src="/youtube-ico.webp" width={22} height={22} alt="Youtube" />
            </Link>
          </div>
        </div>

      </div>
      {/* <Image
        src="/atom2.webp"
        width={280}
        height={280}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-[calc(50%+15px)] z-20 h-[66%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
      /> */}
    </header>
  );
};

export default Header;
