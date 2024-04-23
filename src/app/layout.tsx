import type { Metadata } from "next"

import "./globals.css"
import { sans } from "@/fonts"
import Header from "@/components/Header"

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
    <html lang="en" className={sans.className}>
      <body className="px-4 sm:px-10 md:px-[165px]">
        <Header />
        {children}
      </body>
    </html>
  )
}
