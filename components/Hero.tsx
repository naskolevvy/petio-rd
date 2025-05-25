"use client"

import { useTranslation } from "next-i18next"

export function Hero() {
  const { t } = useTranslation("common")

  return (
    <section className="relative z-10 text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4">{t("hero.title")}</h1>
        <div className="inline-block bg-yellow-400 px-8 py-3 transform -rotate-1 shadow-lg">
          <span className="text-2xl md:text-4xl font-black text-gray-900">{t("hero.subtitle")}</span>
        </div>
        <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto">{t("hero.description")}</p>
      </div>
    </section>
  )
} 