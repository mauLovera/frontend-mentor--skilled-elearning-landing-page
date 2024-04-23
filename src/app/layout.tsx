import type { Metadata } from "next"

import "./globals.css"
import { sans } from "@/fonts"

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
			<body>{children}</body>
		</html>
	)
}
