//import classNames from "classnames";
import React from "react";
import Image from "next/image";
import Link from "next/link";

//import styles from "./Header.module.css";

const BoxAdditional = () => {

  return (
    <div className="flex flex-col w-[280px] items-center border-l border-gray-200 pb-5">
      <div className="flex flex-col py-2 items-center">
        <h3 className="text-black uppercase">Благодійний фонд</h3>
        <Image
          src="/fond-nanu.webp"
          width={200}
          height={87}
          alt="Logo NANU 100"
        />
      </div>
      <div className="flex flex-col py-2 items-center">
        <h3 className="text-black">Ядерна енергетика та довкілля</h3>
        <Image
          src="/titul-npe.webp"
          width={150}
          height={198}
          alt="Logo NPE"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-2 pt-5 w-[60px] h-[22px]">
              <Link
                href={"https://www.facebook.com/"}>
                <Image
                  src="/facebook-ico.webp"
                  width={22}
                  height={22}
                  alt="Logo Facebook"
                />
              </Link>
              <Link
                href={"https://www.youtube.com/"}>
                <Image
                  src="/youtube-ico.webp"
                  width={22}
                  height={22}
                  alt="Logo Youtube"
                />
              </Link>
            </div>
    </div>

  );
};

export default BoxAdditional;
