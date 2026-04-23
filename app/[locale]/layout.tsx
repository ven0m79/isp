import { Roboto } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@app/i18n/routing";
import "../globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`flex min-h-screen overflow-x-hidden bg-gray-950 text-gray-50 ${roboto.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-1 flex-col w-full">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
