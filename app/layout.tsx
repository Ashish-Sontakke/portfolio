import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S Ashish',
  openGraph: {
    title: 'S Ashish',
    description: "I'm Ashish Sontakke. I'm a Software Developer, Engineer. Here I share my learnings & projects",
    url: 'https://epoweripi.com'
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish S",
    description: "I'm Ashish Sontakke. I'm a Software Developer, Engineer. Here I share my learnings & projects",
    creator: "@zeroAsh_",
  },
  description: "I'm Ashish Sontakke. I'm a Software Developer, Engineer. Here I share my learnings & projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
