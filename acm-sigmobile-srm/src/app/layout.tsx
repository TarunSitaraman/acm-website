import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const font = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', 
});

export const metadata: Metadata = {
  title: "ACM SIGMOBILE SRM",
  description: "Advancing the science of mobility.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={`${font.className} antialiased bg-gray-50 dark:bg-acm-dark text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <ThemeProvider>
          {/* 1. The Fixed Navbar (Floats on top) */}
          <Navbar />
          

          <div className="w-full h-32 md:h-40 pointer-events-none bg-transparent" aria-hidden="true" />

          {/* 3. The Page Content */}
          <main className="min-h-screen relative z-0">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}