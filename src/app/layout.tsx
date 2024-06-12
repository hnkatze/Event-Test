import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProviders";
import { Navbar } from "@/components/component/NavBar";
import { Toaster } from "sonner";
import { Fotter } from "@/components/component/fotter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Todo Events",
  description: "By Hector Henriquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background font-sans antialiased justify-between ",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <main className='container pb-10 '>
            <Navbar />
            {children}
            <Toaster position='top-center' />
          </main>
          <Fotter />
        </ThemeProvider>
      </body>
    </html>
  );
}
