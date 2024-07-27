import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/utils/Navbar";
import Footer from "@/utils/Footer";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster";
export const metadata = {
  title: "EduCare Plus",
  description: "Best Offline Education Platform",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark:bg-black bg-white ">
      <NextTopLoader
  color="#02B3E4"
  showSpinner={false}
/>
          
          <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
           <Footer/>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
