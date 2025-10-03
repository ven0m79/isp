import React, { FC, ReactNode } from "react";

import Nav from "@molecules/Nav/page";
import Footer from "@molecules/Footer/page";
import Header from "@molecules/Header/page";
import Slider from "@molecules/Slider/page";

type MainLayoutProps = {
  children: ReactNode;
  noHeader?: boolean;
  noSlider?: boolean;
  noNav?: boolean;
  noFooter?: boolean;
};

const MainLayout: FC<MainLayoutProps> = ({
  children,
  noHeader = false,
  noNav = false,
  noFooter = false,
  noSlider = false,
}) => {
  return (
    <main>
      {/* Загальна “коробка” з тінню для всього контенту, включно з футером */}
      <div className="flex flex-col w-full max-w-[1200px] mx-auto flex-1 bg-white my-5 layer-shadow">
        {/* Header */}
        {!noHeader && <Header />}

        {/* Блок між Header і Nav */}
        <section className="flex w-full gap-0.5 mb-4">

          {/* Ліва частина - Слайдер */}
          {!noSlider && <Slider />}

          {/* Права частина - менший блок */}
          <div className="w-64 bg-gray-300">
            Менший блок
          </div>
        </section>

        {/* Навігація */}
        {!noNav && (
          <div className="relative -mt-16 z-50 self-center bg-blue-300 rounded-[20px]">
            <Nav />
          </div>
        )}

        {/* Основний контент + Sidebar */}
        <main className="flex-1 flex w-full gap-0.5 mt-4">
          {/* Основний контент */}
          <div className="flex-1 p-4 z-40">
            {children}
          </div>

          {/* Бокова колонка */}
          <aside className="w-64 bg-green-600 p-4">
            <div className="mb-4 p-2 bg-white shadow">Блок 1</div>
            <div className="mb-4 p-2 bg-white shadow">Блок 2</div>
            <div className="mb-4 p-2 bg-white shadow">Блок 3</div>
          </aside>
        </main>

        {/* Footer */}
        {!noFooter && <Footer />}
      </div>
    </main>
  );
}

export default MainLayout;
