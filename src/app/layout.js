import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uniondoors",
  description: "Premium hidden door systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>
          <div className="layout-wrapper">
            <Header />
            <main className="main-content">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
