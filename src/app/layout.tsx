"use client";

import "./globals.css";
import type { Metadata } from "next";
import { useMediaQuery } from "react-responsive";
import NavSide from "../Components/NavSide";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen your musics !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMenuMobile = useMediaQuery({ maxWidth: "1360px" });

  return (
    <html lang="en">
      <body>
        <main className="flex flex-col bg-black h-screen w-full p-3">
          <div className="flex gap-2 flex-1">
            <NavSide isMenuMobile={isMenuMobile} />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
