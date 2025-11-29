import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fixelMedium = localFont({
  src: "./fonts/fixel/FixelDisplay-Medium.woff2",
  variable: "--font-fixel-medium",
});
const fixelBold = localFont({
  src: "./fonts/fixel/FixelDisplay-Bold.woff2",
  variable: "--font-fixel-bold",
});
const fixelExtraBold = localFont({
  src: "./fonts/fixel/FixelDisplay-ExtraBold.woff2",
  variable: "--font-fixel-extra-bold",
});

export const metadata = {
  metadataBase: new URL("https://yankovych.dev"),
  title: "Daniel Yankovych | Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, JavaScript/TypeScript, and scalable UI/UX architecture. Based in Vancouver.",
  keywords: [
    "Daniel Yankovych",
    "Daniyel Yankovych",
    "Yankovych Dev",
    "Frontend Developer Vancouver",
    "React Developer",
    "Next.js Engineer",
  ],
  alternates: {
    canonical: "https://yankovych.dev",
  },
  openGraph: {
    title: "Daniel Yankovych | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, JavaScript/TypeScript, and scalable UI/UX architecture. Based in Vancouver.",
    type: "profile",
    url: "https://yankovych.dev",
    images: ["/og-logo.png"],
    profile: {
      firstName: "Daniel",
      lastName: "Yankovych",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Yankovych | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, JavaScript/TypeScript, and scalable UI/UX architecture. Based in Vancouver.",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${fixelMedium.variable} ${fixelBold.variable} ${fixelExtraBold.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Yankovych",
              alternateName: ["Daniyel Yankovych"],
              url: "https://yankovych.dev",
              jobTitle: "Senior Frontend Developer",
              image: "https://yankovych.dev/og-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vancouver",
                addressRegion: "BC",
                addressCountry: "Canada",
              },
              sameAs: [
                "https://www.linkedin.com/in/daniel-yankovych/",
                "https://github.com/DanielYankovych",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
