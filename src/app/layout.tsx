import type { Metadata } from "next"

import "./globals.css"
import { sans } from "@/fonts"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Frontend Mentor | Skilled E-Learning Landing Page ",
  description:
    "Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sans.className + " overflow-x-hidden"}>
      <body
        className={
          "to-gray flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-white from-50% to-light-blue"
        }
      >
        <div className="relative mx-auto max-w-[1440px]">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
