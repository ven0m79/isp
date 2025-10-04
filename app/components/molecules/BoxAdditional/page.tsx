//import classNames from "classnames";
import React from "react";
import Image from "next/image";

//import styles from "./Header.module.css";

const BoxAdditional = () => {

  return (
<div className="flex flex-col w-[280px] h-[200px] items-center border-l border-gray-200">
      <h2 className="text-black uppercase">Благодійний фонд</h2>
            <Image
              src="/fond-nanu.webp"
              width={200}
              height={87}
              alt="Logo NANU 100"
            />
    </div>

  );
};

export default BoxAdditional;
