import React, { FC, ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import Nav from "@molecules/Nav/page";
import Footer from "@molecules/Footer/page";
import Header from "@molecules/Header/page";
import Slider from "@molecules/Slider/page";
import BoxNanu from "@molecules/BoxNanu/page";
import BoxAdditional from "@molecules/BoxAdditional/page";

type MainLayoutProps = {
  children: ReactNode;
  noHeader?: boolean;
  noSlider?: boolean;
  noNav?: boolean;
  noFooter?: boolean;
  noBoxNanu?: boolean;
  noBoxAdditional?: boolean;
};

const MainLayout: FC<MainLayoutProps> = async ({
  children,
  noHeader = false,
  noNav = false,
  noFooter = false,
  noSlider = false,
  noBoxNanu = false,
  noBoxAdditional = false,
}) => {
  const t = await getTranslations("footer");

  return (
    <main>
      <div className="flex flex-col w-full max-w-300 mx-auto flex-1 bg-white my-5 layer-shadow">
        {!noHeader && <Header />}
        <section className="flex w-full">
          {!noSlider && <Slider />}
          {!noBoxNanu && <BoxNanu />}
        </section>
        {!noNav && (
          <div className="relative -mt-12 z-50 self-center bg-blue-300 rounded-[20px]">
            <Nav />
          </div>
        )}
        <div className="flex-1 flex w-full h-auto mt-8">
          <div className="flex-1 p-2 z-40">
            {children}
          </div>
          <aside className="relative flex z-40">
            {!noBoxAdditional && <BoxAdditional />}
          </aside>
        </div>
        {!noFooter && <Footer />}
      </div>
      <div className="flex justify-center mb-6 text-black text-[14px]" suppressHydrationWarning>
        {"©"} {new Date().getFullYear()} {t("copyright")}
      </div>
    </main>
  );
};

export default MainLayout;
