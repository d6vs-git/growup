import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "GROWUP - Instagram Growth & Digital Marketing",
  description: "Professional Instagram Growth, Video Editing & Digital Ads for Businesses & Personal Brands. Contact: 9701171787",
  keywords: "Instagram Growth, Video Editing, Digital Marketing, Social Media Marketing, Digital Ads",
  authors: [{ name: "GROWUP Media" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "GROWUP - Instagram Growth & Digital Marketing",
    description: "Transform your digital presence with our proven Instagram marketing strategies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/growup-logo.png",
        width: 1200,
        height: 630,
        alt: "GROWUP - Instagram Growth & Digital Marketing",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
