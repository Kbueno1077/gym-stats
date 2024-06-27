import "@/styles/globals.css";
import "./fonts.css";

import Navigationbar from "@/components/Navigationbar/Navigationbar";
import Footer from "@/sections/Footer/Footer";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { Providers } from "./providers";

export const metadata = {
  title: "Gym Stats",
  description: "An Web app to track your gym stats",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const myFont = localFont({
  src: "./Darkness of the night.ttf",
  variable: "--font-dotn",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${myFont.variable}`}>
      <body>
        <Providers>
          <Navigationbar />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
