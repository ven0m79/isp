import classNames from "classnames";
import React from "react";
import Image from "next/image";

import styles from "./Header.module.css";
import Link from "next/link";
import { Combobox, ComboboxInput } from "@headlessui/react";

const Header = () => {

  return (
    <header
      className={classNames(
        "mt-auto flex flex-1 justify-center items-center w-screen bottom-0 h-[180px]",
        styles["header"],
      )}
    >
      <div className="flex flex-1 flex-col items-start w-full h-auto">

        <div className="flex flex-1 justify-between w-full py-1 px-10 border-b border-gray-900">
          <div className="flex gap-3">
            <Link href={"/vacancion"}>
              {`Вакансії`}
            </Link>
            <Link href={"/contacts"}>
              {`Контакти`}
            </Link>
          </div>
          <div className="flex gap-3">
            <Link href={"/"}>
              {`UA`}
            </Link>
            <Link href={"/en"}>
              {`EN`}
            </Link>
          </div>

        </div>
        <div className="flex flex-1 flex-row w-full">
          <div className="flex-none w-auto h-auto py-2 px-5">
            <Link href={"/"}>
              <Image
                src="/ipbAes_rus.svg"
                width={100}
                height={100}
                alt="Logo ISP NPP"
              />
            </Link>
          </div>
          <div className={classNames("flex flex-1 flex-col justify-center items-start w-auto bottom-0 h-auto text-black", styles["headerName"])}>
            <h4 className="font-normal">{`Національна академія наук України`}</h4>
            <h1 className="-mb-2">{`ІНСТИТУТ ПРОБЛЕМ БЕЗПЕКИ`}</h1>
            <h1>{`АТОМНИХ ЕЛЕКТРОСТАНЦІЙ`}</h1>
          </div>
          <div className={classNames("flex-none w-[230px] pr-5", styles["search"])}>
            <Combobox>
              <div className="flex z-50 h-[30px]">
                <ComboboxInput
                  className={classNames(
                    "w-full rounded-[15px] border-[#0061AA] border bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black",
                    "focus: outline-none data-[focus]:outline-none data-[focus]:-outline-offset-2 data-[focus]:bg-sky-50"
                  )}
                  placeholder={"Пошук"}
                />
              </div>
            </Combobox>
          </div>
        </div>

      </div>
    </header>

  );
};

export default Header;
