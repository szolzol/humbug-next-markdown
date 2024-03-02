import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Humbug",
  description: "Catch the liar!",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>Humbug - Teszt</h1>
      </Link>
    </header>
  );
  let footer = <footer>© Zsolt Beró & Zoltan Szoleczki</footer>;

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
