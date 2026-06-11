import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "北京易佳瑞能源技术服务有限公司 - 专业新能源技术服务",
  description: "北京易佳瑞能源技术服务有限公司成立于2014年，专注于新能源电力行业的技术服务，提供风力发电、光伏发电、储能等领域的专业技术支持。",
  keywords: "新能源,风力发电,光伏发电,储能,设备监造,技术服务,易佳瑞",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/logos/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
