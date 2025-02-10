import { Red_Hat_Text, Red_Hat_Mono } from "next/font/google";
import { GLOBALS } from "./global-site-info/globals";
import "./globals.scss";
import Nav from "./components/Nav";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-red-hat-text",
});
const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-red-hat-mono",
});

export const metadata = {
  title: GLOBALS.title,
  description: GLOBALS.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${redHatText.variable} ${redHatMono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
