import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { TooltipProvider } from "radix-ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dan J. Deutschmann",
  description: "Cutter and Video Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-linear-to-br from-[#181c23] to-[#23272f] min-h-screen
          text-gray-100
        `}
      >
        <TooltipProvider>
          {children}
          <footer className="text-center py-10 text-gray-500 text-sm font-sans">
            © {new Date().getFullYear()} Dan J. Deutschmann — All rights
            reserved.
            <br />
            Made with ♥️ by{" "}
            <Link href="https://jespersen.zip">jespersen.zip</Link>
            <span className="flex flex-col">
              <a href="https://doc.jespersen.zip/s/danicoo-imprint-notice">
                Impressum
              </a>
            </span>
          </footer>
        </TooltipProvider>
      </body>
    </html>
  );
}
