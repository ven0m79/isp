import { Roboto } from "next/font/google";
import "./globals.css";
import React, { FC, ReactNode } from "react";

import Nav from "@molecules/Nav/page";
import Footer from "@molecules/Footer/page";
import Header from "@molecules/Header/page";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

type MainLayoutProps = {
  children: ReactNode;
  noHeader?: boolean;
  noNav?: boolean;
  noFooter?: boolean;
};

const MainLayout: FC<MainLayoutProps> = ({
  children,
  noHeader = false,
  noNav = false,
  noFooter = false,
}) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-screen w-screen`}>
        {!noHeader && <Header />}
        {!noNav && <Nav />}

        <main className="flex-1">
          {children}
        </main>

        {!noFooter && <Footer />}
      </body>
    </html>
  );
}

export default MainLayout;
