import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samar Guizani - Portfolio",
  description: "Portfolio de Samar Guizani, développeuse Full Stack et étudiante en Génie Logiciel",
  keywords: ["Samar Guizani", "développeuse", "full stack", "génie logiciel", "portfolio", "React", "Next.js"],
  authors: [{ name: "Samar Guizani" }],
  creator: "Samar Guizani",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://samar-guizani.vercel.app",
    title: "Samar Guizani - Portfolio",
    description: "Portfolio de Samar Guizani, développeuse Full Stack et étudiante en Génie Logiciel",
    siteName: "Samar Guizani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samar Guizani - Portfolio",
    description: "Portfolio de Samar Guizani, développeuse Full Stack et étudiante en Génie Logiciel",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
