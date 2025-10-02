import classNames from "classnames";
import React from "react";
//import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <footer
      className={classNames(
        "mt-auto flex flex-1 flex-col justify-center items-center w-screen bottom-0",
        styles["footer"],
      )}
    > FOOTER
    </footer>

  );
};

export default Footer;
