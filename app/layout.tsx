import type { Metadata } from "next";
import { Vazirmatn, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const bodyFont = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "خاک | سفال دست‌ساز",
  description:
    "خاک، کارگاه سفالگری دست‌ساز؛ ماگ، کاسه، بشقاب و گلدان‌های سفالی با لعاب طبیعی و روحیه‌ی آرام.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
