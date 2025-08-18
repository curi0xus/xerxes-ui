import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuanFusion - Institutional Market Intelligence Platform',
  description: 'AI-driven market intelligence platform for institutional investors, hedge funds, and financial professionals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}