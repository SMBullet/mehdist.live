import { Poppins } from "next/font/google";
import "./globals.css";
import Starfield from "./Starfield";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-poppins' });

export const metadata = {
  title: "Mehdi Stoti",
  description: "Mehdi Stoti cybersecurity portfolio",
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
