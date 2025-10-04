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
        "mt-auto flex flex-1 justify-center items-center w-screen bottom-0 h-auto",
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
          <div className={classNames("flex flex-1 flex-col justify-center items-start w-auto bottom-0 h-[120px] text-black", styles["headerName"])}>
            <h4 className="font-normal">{`Національна академія наук України`}</h4>
            <h1 className="-mb-2">{`ІНСТИТУТ ПРОБЛЕМ БЕЗПЕКИ`}</h1>
            <h1>{`АТОМНИХ ЕЛЕКТРОСТАНЦІЙ`}</h1>
          </div>
          
<div className="flex-none flex flex-col items-center justify-between w-[280px] h-[120px] mt- py-8 ">
  {/* Пошук */}
  <div className={classNames("", styles["search"])}>
    <Combobox>
      <div className="flex z-50 h-[25px]">
        <ComboboxInput
          className={classNames(
            "w-full rounded-[15px] border-[#0061AA] border bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-none data-[focus]:-outline-offset-2 data-[focus]:bg-sky-50"
          )}
          placeholder={"Пошук"}
        />
      </div>
    </Combobox>
  </div>

  {/* Іконки */}
  <div className="flex flex-row items-center justify-center gap-2 w-[60px] h-[22px]">
    <Image
      src="/facebook-ico.webp"
      width={22}
      height={22}
      alt="Logo Facebook"
    />
    <Image
      src="/youtube-ico.webp"
      width={22}
      height={22}
      alt="Logo Youtube"
    />
  </div>
</div>

        </div>

      </div>
    </header>

  );
};

export default Header;
