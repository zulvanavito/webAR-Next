import { Roboto as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontRoboto = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500",
});

export const metadata = {
  title: "Website Artificial Reality",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontRoboto.className}>
        {children}
      </body>
    </html>
  );
}
