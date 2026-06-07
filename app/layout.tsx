import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "固定費0円！安心安全なeBay副業 | Gathering of Genius",
  description: "eBayコンサルティングで安心安全な副業を始めよう。出品・在庫管理はすべておまかせ。成果報酬型だから固定費0円・赤字リスクなし。3ヶ月で利益が出る仕組みをご提供します。",
  keywords: ["eBay副業", "eBayコンサル", "副業", "固定費0円", "成果報酬", "eBay出品代行", "在庫管理", "Gathering of Genius"],
  openGraph: {
    title: "固定費0円！安心安全なeBay副業 | Gathering of Genius",
    description: "出品・在庫管理はすべておまかせ。成果報酬型だから赤字リスクなし。3ヶ月で利益確約のeBayコンサルティング。",
    url: "https://my-company-hp.vercel.app",
    siteName: "Gathering of Genius",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "固定費0円！安心安全なeBay副業 | Gathering of Genius",
    description: "出品・在庫管理はすべておまかせ。成果報酬型だから赤字リスクなし。3ヶ月で利益確約のeBayコンサルティング。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
