import classNames from "classnames";
import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {

  return (
    <footer
      className={classNames(
        "mt-auto flex flex-1 flex-col justify-center items-center w-screen bottom-0",
        styles["footer"],
      )}>

      <div className="flex flex-1 flex-row w-full justify-center">

        <div className="w-[300px] pl-10 pb-5 pr-10 pt-5">
          <Link href={"/"}>
            <Image
              src="/ipbAes1.webp"
              width={170}
              height={170}
              alt="Logo ISP NPP"
            />
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-start w-auto self-start pt-5 gap-2">
          <h2>Дирекція</h2>
          <span>Відділення атомної енергетики</span>
          <span>Відділення проектування об’єктів<br/> з радіаційно-ядерними технологіями</span>
          <span>Відділення ядерної та радіаційної безпеки</span>
        </div>

        <div className="flex-1 flex flex-col justify-start w-auto self-start pt-5 pb-5 gap-2">
          <h2>Контакти</h2>
          <span>{`м. Чорнобиль,`}<br/>{`вул. Кірова, 36а, Київська обл., 07270`}<br/>{`тел./факс: +38(04593)5-10-14`}<br/>{`ispnpp@ispnpp.kiev.ua`}</span>
          <span>{`м. Київ, вул. Лисогірська 12, 03028`}<br/>{`тел./факс: +38(044)525-05-86`}<br/>{`office@ispnpp.kiev.ua`}</span>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
