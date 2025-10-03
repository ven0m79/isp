import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
  display: 'swap',
  adjustFontFallback: false,
})

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {

  return (
    <html lang={locale}>
      <body
        className={`flex min-h-screen overflow-x-hidden bg-gray-950 text-gray-50 ${inter.className}`}
      >
        <main className="flex flex-1 flex-col items-center justify-center gap-12 w-full bg-white">
          {children}
        </main>
      </body>
    </html >
  );
}
