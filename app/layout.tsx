import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'uche-ohamobi',
  description: 'IT Security Specialist & Cloud Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
