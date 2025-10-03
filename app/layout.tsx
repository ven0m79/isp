import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen overflow-x-hidden bg-gray-950 text-gray-50 ${roboto.className}`}>
        <main className="flex flex-1 flex-col w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
