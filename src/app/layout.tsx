import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import PageBackground from "@/components/layout/pageBackground";
// import StyledComponentsRegistry from "@/styles/styled-registry"

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ['400', '700'],
});
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ['400', '500'],

})
const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ['400'],
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
        <PageBackground route="home">
     {/* <StyledComponentsRegistry> */}
        <Header />
        {children}
        {/* </StyledComponentsRegistry> */}
        </PageBackground>
      </body>
    </html>
  );
}
