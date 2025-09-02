import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
// import StyledComponentsRegistry from "@/styles/styled-registry"

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

export const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});


export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Experience space like never before",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      className={`${barlow.variable} ${bellefair.variable} ${barlowCondensed.variable} min-h-dvh antialiased`}
      >
        {/* <StyledComponentsRegistry> */}
        {children}
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
