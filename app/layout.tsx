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
  title: "GROWUP - Marketing Agency | Digital Growth Starts Here",
  description: "Professional Instagram Growth, Video Editing & Digital Ads for Businesses & Personal Brands. Contact: 9701171787",
    generator: 'v0.dev'
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
