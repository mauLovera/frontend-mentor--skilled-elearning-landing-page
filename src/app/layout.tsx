import type { Metadata } from "next"

import "./globals.css"
import { sans } from "@/fonts"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Frontend Mentor | Skilled E-Learning Landing Page ",
  description:
    "Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.",
}

export const globalXPadding = " px-4 sm:px-10 lg:px-[165px]"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body
        className={"from-white to-gray min-h-screen bg-gradient-to-b from-50% to-light-blue"}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
