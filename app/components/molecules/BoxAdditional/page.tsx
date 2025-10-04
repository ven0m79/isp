//import classNames from "classnames";
import React from "react";
import Image from "next/image";

//import styles from "./Header.module.css";

const BoxAdditional = () => {

  return (
    <div className="flex flex-col w-[280px] items-center border-l border-gray-200">
      <div className="flex flex-col py-2 items-center">
        <h2 className="text-black uppercase">Благодійний фонд</h2>
        <Image
          src="/fond-nanu.webp"
          width={200}
          height={87}
          alt="Logo NANU 100"
        />
      </div>
      <div className="flex flex-col py-2 items-center">
        <h2 className="text-black">Ядерна енергетика та довкілля</h2>
        <Image
          src="/titul-npe.webp"
          width={150}
          height={198}
          alt="Logo NPE"
        />
      </div>

    </div>

  );
};

export default BoxAdditional;
