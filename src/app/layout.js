import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daniyel Yankovych | Senior Frontend Developer",
  description:
    "Senior Front-End Developer specializing in React, Next.js, JavaScript/TypeScript, and high-performance user interfaces. Building modern, scalable products with clean architecture and a strong UI/UX focus.",
  openGraph: {
    title: "Daniyel Yankovych | Senior Front-End Developer",
    description:
      "Senior Front-End Developer specializing in React, Next.js, JavaScript/TypeScript, and high-performance user interfaces. Building modern, scalable products with clean architecture and a strong UI/UX focus.",
    type: "profile",
    url: "https://yankovych.dev",
    images: ["/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniyel Yankovych | Senior Front-End Developer",
    description:
      "Senior Front-End Developer specializing in React, Next.js, JavaScript/TypeScript, and high-performance user interfaces. Building modern, scalable products with clean architecture and a strong UI/UX focus.",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
