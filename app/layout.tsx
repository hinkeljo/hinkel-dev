import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/menubar";
import Footer from "@/components/footer";

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
    <html lang="en" data-theme="lofi">
      <body className={inter.className + " flex flex-col items-center"}>
        <div className="flex w-full min-h-screen flex-col items-center">
          <MenuBar />
          <main className="p-8 w-full max-w-4xl flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
