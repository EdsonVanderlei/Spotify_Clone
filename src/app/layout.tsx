import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen your musics !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
