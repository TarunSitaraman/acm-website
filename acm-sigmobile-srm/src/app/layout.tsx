import type { Metadata } from "next";
// IMPORT THE NEW FONT
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

// Configure the font
const font = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', // Optional variable for CSS
});

export const metadata: Metadata = {
  title: "ACM SIGMOBILE SRM",
  description: "Advancing the science of mobility.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      {/* Apply the font class here */}
      <body className={`${font.className} antialiased bg-gray-50 dark:bg-acm-dark text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <ThemeProvider>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}