import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HUMBUG!",
  description: "Be mered hívni?",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>HUMBUG! - Kísérleti kvízes partyjáték</h1>
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
