import type { Metadata } from "next";
import { Space_Grotesk, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "R18 AI LABS - Building the Future with Artificial Intelligence",
  description: "Safe, scalable AI solutions for enterprise challenges. Machine Learning, AI Research, Deployment & Scale.",
  keywords: ["AI", "Machine Learning", "Artificial Intelligence", "Enterprise AI", "AI Solutions"],
  authors: [{ name: "Radheshyam Dhangar" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "R18 AI LABS",
    description: "Building the Future with Artificial Intelligence",
    type: "website",
    url: "https://r18ailabs.com",
    images: [
      {
        url: "/header.svg",
        width: 1000,
        height: 350,
        alt: "R18 AI LABS",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
