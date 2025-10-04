//import classNames from "classnames";
import React from "react";
import Image from "next/image";

//import styles from "./Header.module.css";

const BoxNanu = () => {

  return (
    <div className="flex bg-blue-100 w-auto h-auto justify-center items-center">
      <Image
        src="/nanu100.webp"
        width={280}
        height={280}
        alt="Logo NANU 100"
      />
    </div>

  );
};

export default BoxNanu;
