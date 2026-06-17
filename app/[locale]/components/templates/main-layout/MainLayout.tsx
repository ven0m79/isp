import { FC, ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import Nav from "@molecules/Nav/Nav";
import Footer from "@molecules/Footer/Footer";
import Header from "@molecules/Header/Header";
import Slider from "@molecules/Slider/Slider";
import BoxNanu from "@molecules/BoxNanu/BoxNanu";
import BoxAdditional from "@molecules/BoxAdditional/BoxAdditional";

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
      <div className="flex flex-col w-full max-w-300 mx-auto flex-1 bg-white my-0 md:my-5 md:layer-shadow rounded-[10px]">
        {!noHeader && <Header />}

        {/* Slider + BoxNanu: side by side on desktop, stacked on mobile */}
        <section className="flex flex-col md:flex-row w-full">
          {!noSlider && <Slider />}
          {!noBoxNanu && (
            <div className="hidden md:flex">
              <BoxNanu />
            </div>
          )}
        </section>

        {/* Nav: full-width on mobile, auto-centered on desktop */}
        {!noNav && (
          <div className="relative md:-mt-12 z-50 w-full md:w-auto md:self-center bg-blue-300 md:rounded-[20px]">
            <Nav />
          </div>
        )}

        {/* Content + sidebar */}
        <div className="flex flex-col md:flex-row flex-1 w-full h-auto mt-4 md:mt-8">
          <div className="flex-1 p-2 z-40 min-w-0">
            {children}
          </div>
          <aside className="hidden md:flex relative z-40">
            {!noBoxAdditional && <BoxAdditional />}
          </aside>
        </div>

        {!noFooter && <Footer />}
      </div>

      <div className="flex justify-center mb-6 px-4 text-black text-[14px] text-center" suppressHydrationWarning>
        {"©"} {new Date().getFullYear()} {t("copyright")}
      </div>
    </main>
  );
};

export default MainLayout;
