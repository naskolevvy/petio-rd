"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export function Reserve() {
  const { t } = useTranslation("common")

  return (
    <section id="reserve" className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-teal-600 text-white p-8 rounded-lg shadow-xl transform -rotate-1 mb-8">
          <h2 className="text-4xl font-bold mb-4">{t("reserve.title")}</h2>
          <p className="text-xl mb-6">{t("reserve.subtitle")}</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{t("reserve.ready")}</h3>
            <p className="text-gray-700 mb-8 text-lg">{t("reserve.description")}</p>

            <div className="bg-yellow-400 p-6 rounded-lg mb-6">
              <p className="text-gray-900 font-semibold text-lg">
                📞 {t("reserve.callUs")}{" "}
                <a href="tel:+359976231444" className="font-bold hover:text-gray-700 transition-colors">
                  +359 976 231 444
                </a>
              </p>
            </div>

            <a
              href="tel:+359976231444"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              {t("reserve.button")}
            </a>

            <p className="text-sm text-gray-600 mt-4">{t("reserve.notice")}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 