//import classNames from "classnames";
import React from "react";
import Image from "next/image";
import { Link } from "@app/i18n/navigation";

//import styles from "./Header.module.css";

const BoxNanu = () => {

  return (
    <div className="flex bg-blue-100 w-auto h-auto justify-center items-center">
      <Link href="https://www.nas.gov.ua/">
        <Image
          src="/nanu100.webp"
          width={280}
          height={280}
          alt="Logo NANU 100"
          loading="eager"
        />
      </Link>
    </div>

  );
};

export default BoxNanu;
