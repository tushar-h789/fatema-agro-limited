import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


// Local font configuration for Geist Sans
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Variable font weight from 100 to 900
});

// Local font configuration for Geist Mono
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", // Variable font weight from 100 to 900
});

// Metadata for the application

export const metadata: Metadata = {
  title: "fatemaagro - for authentic product",
  description:
    "Discover the latest in authentic products at fatemaagro.",

  // Basic metadata
  applicationName: "fatemaagro",
  authors: [
    { name: "fatemaagro Team", url: "https://fatemaagro.com" },
  ],
  generator: "Next.js",
  keywords: [
    "fatemaagro",
    "সরিসার তেল",
    "গুড়",
    "pants",
    "খেজুরের গুড়",
    "মসলা",
    "গুড়া",
    "ঘি",
    "মধু",
    "আম",
    "আচার",
    "কুমড়া বড়ি",
    "চাল",
    "গরু",
  ],
  referrer: "origin-when-cross-origin",

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Open Graph metadata
  openGraph: {
    title: "fatemaagro - for authentic product",
    description:
      "Shop the latest authentic product at fatemaagro.",
    url: "https://fatemaagro.com",
    siteName: "fatemaagro",
    images: [
      {
        url: "https://fatemaagro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "fatemaagro Fashion banner",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "fatemaagro - authentic products for Everyone",
    description:
      "Discover trendy clothing at fatemaagro.",
    creator: "@fatemaagroFashion",
    images: ["https://fatemaagro.com/twitter-image.jpg"],
  },

  // Verification for search engines
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Alternate languages
  alternates: {
    canonical: "https://fatemaagro.com",
    languages: {
      "en-GB": "https://fatemaagro.com/en-GB",
      "es-ES": "https://fatemaagro.com/es-ES",
    },
  },

  // App-specific metadata
  appleWebApp: {
    title: "fatemaagro authentic product App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-splash-2048-2732.jpg",
      {
        url: "/apple-splash-1668-2224.jpg",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  // Manifest file
  manifest: "/manifest.json",

  // Other metadata
  category: "shopping",
  classification: "Authentic products",
  creator: "fatemaagro",
  publisher: "fatemaagro",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children} 
      </body>
    </html>
  );
}
