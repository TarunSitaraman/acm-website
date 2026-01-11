import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM SIGMOBILE SRM",
  description: "Advancing the science of mobility.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={`${inter.className} bg-gray-50 dark:bg-acm-dark text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <ThemeProvider>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}