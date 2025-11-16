import "./globals.css";
import localFont from "next/font/local";

const fixelBold = localFont({
  src: "./fonts/fixel/FixelDisplay-Bold.woff2",
  variable: "--font-fixel-bold",
});
const fixelExtraBold = localFont({
  src: "./fonts/fixel/FixelDisplay-ExtraBold.woff2",
  variable: "--font-fixel-extra-bold",
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
      <body
        className={`${fixelBold.variable} ${fixelExtraBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
