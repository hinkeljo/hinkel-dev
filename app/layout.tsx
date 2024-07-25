import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/menubar";
import Footer from "@/components/footer";
import AppBackground from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page title",
  description: "Page description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className + " flex flex-col items-center"}>
        <AppBackground>
          <MenuBar />
          <main className="p-8 w-full max-w-4xl flex-1">{children}</main>
          <Footer />
        </AppBackground>
      </body>
    </html>
  );
}
