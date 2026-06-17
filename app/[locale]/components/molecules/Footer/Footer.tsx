import classNames from "classnames";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classNames("w-full", styles["footer"])}>
      <div className="flex flex-col md:flex-row w-full">

        {/* Logo */}
        <div className="flex justify-center md:justify-start shrink-0 md:w-64 px-6 py-5">
          <Link href="/">
            <Image
              src="/ipbAes1.webp"
              width={170}
              height={170}
              alt="Logo ISP NPP"
              style={{ width: "auto", height: "auto", maxWidth: 150 }}
              className="md:max-w-42.5"
            />
          </Link>
        </div>

        {/* Structure */}
        <div className="flex flex-1 flex-col px-6 pt-0 md:pt-5 pb-4 md:pb-6 gap-1.5 text-white/90 text-sm">
          <h2 className="text-white font-semibold text-base mb-1">Дирекція</h2>
          <span>Відділення атомної енергетики</span>
          <span className="leading-snug">
            Відділення проектування об'єктів<br />з радіаційно-ядерними технологіями
          </span>
          <span>Відділення ядерної та радіаційної безпеки</span>
        </div>

        {/* Contacts */}
        <div className="flex flex-1 flex-col px-6 pt-0 md:pt-5 pb-6 gap-1.5 text-white/90 text-sm">
          <h2 className="text-white font-semibold text-base mb-1">Контакти</h2>
          <span className="leading-snug">
            м. Чорнобиль, вул. Кірова, 36а<br />
            Київська обл., 07270<br />
            тел./факс: +38(04593)5-10-14<br />
            <a href="mailto:ispnpp@ispnpp.kiev.ua" className="underline underline-offset-2 hover:text-white">
              ispnpp@ispnpp.kiev.ua
            </a>
          </span>
          <span className="leading-snug mt-2">
            м. Київ, вул. Лисогірська 12, 03028<br />
            тел./факс: +38(044)525-05-86<br />
            <a href="mailto:office@ispnpp.kiev.ua" className="underline underline-offset-2 hover:text-white">
              office@ispnpp.kiev.ua
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
