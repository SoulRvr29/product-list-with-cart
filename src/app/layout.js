import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Product list with cart",
  description: "Frontend Mentor - Product list with cart solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}
