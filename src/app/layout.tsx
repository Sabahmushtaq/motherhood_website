import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Celebrate Motherhood with Expert Care & ₹10,000 Benefits | Motherhood Hospitals Chennai",
  description: "Comprehensive maternity care designed for your comfort, safety, and joyful journey. Expert gynecologists, 24/7 care, and personalized birthing plans in Chennai.",
  keywords: ["Motherhood Hospitals", "Maternity Care Chennai", "Gynecologist Chennai", "Best Pregnancy Care", "Motherhood Benefits"],
  authors: [{ name: "Motherhood Hospitals" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${manrope.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
