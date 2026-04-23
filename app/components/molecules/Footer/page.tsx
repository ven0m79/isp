import classNames from "classnames";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "mt-auto flex flex-col w-full",
        styles["footer"],
      )}
    >
      <div className="flex flex-col md:flex-row w-full justify-center">

        {/* Logo */}
        <div className="flex justify-center md:justify-start md:w-75 px-6 pb-2 pt-5">
          <Link href="/">
            <Image
              src="/ipbAes1.webp"
              width={170}
              height={170}
              alt="Logo ISP NPP"
              style={{ width: 140, height: "auto" }}
              className="md:w-[170px]"
            />
          </Link>
        </div>

        {/* Structure */}
        <div className="flex flex-1 flex-col justify-start px-6 pt-3 md:pt-5 pb-2 gap-2">
          <h2>Дирекція</h2>
          <span>Відділення атомної енергетики</span>
          <span className="leading-tight">
            Відділення проектування об'єктів<br />з радіаційно-ядерними технологіями
          </span>
          <span>Відділення ядерної та радіаційної безпеки</span>
        </div>

        {/* Contacts */}
        <div className="flex flex-1 flex-col justify-start px-6 pt-3 md:pt-5 pb-5 gap-2">
          <h2>Контакти</h2>
          <span className="leading-tight">
            {`м. Чорнобиль,`}<br />
            {`вул. Кірова, 36а, Київська обл., 07270`}<br />
            {`тел./факс: +38(04593)5-10-14`}<br />
            {`ispnpp@ispnpp.kiev.ua`}
          </span>
          <span className="leading-tight">
            {`м. Київ, вул. Лисогірська 12, 03028`}<br />
            {`тел./факс: +38(044)525-05-86`}<br />
            {`office@ispnpp.kiev.ua`}
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
