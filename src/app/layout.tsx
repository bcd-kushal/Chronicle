import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { ChildrenType } from "@/common/types/reactTypes"
import { getThemeCookie } from "@/server/cookies/theme"
import { cn } from "@/lib/utils"

const fontsans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default async function RootLayout({ children }: { children: ChildrenType }) {
	const theme = await getThemeCookie()
	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background font-sans antialiased relative", fontsans.variable)}>
				{children}
			</body>
		</html>
	)
}
