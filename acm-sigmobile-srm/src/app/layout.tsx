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
          
          {/* FRAME: Locks the screen height */}
          <div className="flex flex-col h-screen w-full overflow-hidden">
            
            {/* 1. HEADER: Solid block at the top */}
            {/* z-50 ensures dropdowns appear over content */}
            <div className="flex-none z-50 relative">
              <Navbar />
            </div>

            {/* 2. MAIN: The scrollable area */}
            <main className="flex-1 overflow-y-auto scroll-smooth relative w-full scrollbar-hide">
              <div className="min-h-full flex flex-col">
                {children}
                <Footer />
              </div>
            </main>

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}