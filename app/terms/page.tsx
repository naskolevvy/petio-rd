"use client"

import { Card, CardContent } from "@/components/ui/card"
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"

// Import i18n initialization
import '@/lib/i18n'

// Import Navigation with SSR disabled
const Navigation = dynamic(() => import('@/components/Navigation').then(mod => mod.Navigation), { ssr: false })

export default function TermsPage() {
  const { t } = useTranslation("common")
  const [mounted, setMounted] = useState(false)

  // Only show content after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-purple-200 to-pink-300">
      <Navigation />
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {t("terms.title")}
              </h1>
              <div className="space-y-6">
                {Array.from({ length: 13 }, (_, i) => i + 1).map((num) => (
                  <div key={num} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-gray-900 font-bold flex items-center justify-center">
                      {num}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t(`terms.rules.${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 