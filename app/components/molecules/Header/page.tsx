import classNames from "classnames";
import React from "react";
//import Image from "next/image";

import styles from "./Header.module.css";

const Header = () => {

  return (
    <header
      className={classNames(
        "mt-auto flex flex-1 flex-col justify-center items-center w-screen bottom-0",
        styles["header"],
      )}
    > HEADER
    </header>

  );
};

export default Header;
