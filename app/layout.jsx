import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Starfield from "./Starfield";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-poppins' });

export const metadata = {
  title: "Mehdi Stoti",
  description: "Mehdi Stoti portfolio website using ReactJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-black text-white`}
      >
        <Starfield />
        {children}
      </body>
      <ScrollToTopButton />
    </html>
  );
}
