import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Tandem Jump',
  description: 'Terms and conditions for tandem skydiving experience',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 