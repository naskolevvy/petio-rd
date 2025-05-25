"use client"

import dynamic from 'next/dynamic'

// Import all components with SSR disabled
const Navigation = dynamic(() => import('@/components/Navigation').then(mod => mod.Navigation), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero').then(mod => mod.Hero), { ssr: false })
const About = dynamic(() => import('@/components/About').then(mod => mod.About), { ssr: false })
const Reserve = dynamic(() => import('@/components/Reserve').then(mod => mod.Reserve), { ssr: false })
const Voucher = dynamic(() => import('@/components/Voucher').then(mod => mod.Voucher), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer), { ssr: false })

// Import i18n initialization
import '@/lib/i18n'

export default function TandemJumpContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-purple-200 to-pink-300 relative overflow-hidden">
      {/* Mountain silhouette at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200L50 180L100 160L150 140L200 120L250 100L300 80L350 60L400 40L450 60L500 80L550 100L600 120L650 140L700 160L750 180L800 160L850 140L900 120L950 100L1000 80L1050 60L1100 40L1150 20L1200 0V200H0Z"
            fill="rgba(88, 28, 135, 0.3)"
          />
        </svg>
      </div>

      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="reserve">
        <Reserve />
      </div>
      <div id="voucher">
        <Voucher />
      </div>
      <Footer />
    </div>
  )
}
