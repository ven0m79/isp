"use client";

import classNames from "classnames";
import React from "react";
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
    <header
      className={classNames(
        "flex flex-1 justify-center items-center w-full bottom-0 h-auto",
        styles["header"],
      )}
    >
      <div className="flex flex-1 flex-col items-start w-full h-auto">

        <div className="flex flex-1 justify-between w-full py-1 px-10 border-b border-gray-900">
          <div className="flex gap-3">
            <Link href="/vacancies">{t("vacancies")}</Link>
            <Link href="/contacts">{t("contacts")}</Link>
          </div>
          <div className="flex gap-3 text-sm font-medium">
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

        <div className="flex flex-1 flex-row w-full">
          <div className="flex-none w-auto h-auto py-2 px-5">
            <Link href="/">
              <Image
                src="/ipbAes_rus.svg"
                width={100}
                height={130}
                alt="Logo ISP NPP"
                style={{ width: 100, height: "auto" }}
              />
            </Link>
          </div>
          <div className={classNames("flex flex-1 flex-col justify-center items-start w-auto bottom-0 h-30 text-black", styles["headerName"])}>
            <h4 className="font-normal">{t("nanu")}</h4>
            <h1 className="-mb-2">{t("line1")}</h1>
            <h1>{t("line2")}</h1>
          </div>

          <div className="flex-none flex flex-col items-center justify-between w-70 h-30 py-8">
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

            <div className="flex flex-row items-center justify-center gap-2 w-15 h-5.5">
              <Link href="https://www.facebook.com/">
                <Image src="/facebook-ico.webp" width={22} height={22} alt="Facebook" />
              </Link>
              <Link href="https://www.youtube.com/">
                <Image src="/youtube-ico.webp" width={22} height={22} alt="Youtube" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
