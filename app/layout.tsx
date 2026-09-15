import { Roboto } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`flex min-h-screen overflow-x-hidden bg-gray-950 text-gray-50 ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
