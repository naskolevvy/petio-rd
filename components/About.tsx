"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "next-i18next"

export function About() {
  const { t } = useTranslation("common")

  return (
    <section id="about" className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">{t("about.title")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("about.whatsIncluded")}</h3>
                <ul className="space-y-3 text-gray-700">
                  {[1, 2, 6, 4, 5].map((num) => (
                    <li key={num} className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      {t(`about.items.${num}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("about.safetyFirst")}</h3>
                <p className="text-gray-700 mb-4">{t("about.safetyDescription1")}</p>
                <p className="text-gray-700">{t("about.safetyDescription2")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 