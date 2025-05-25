"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation("common")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm text-white py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("hero.title")}</h3>
            <p className="text-gray-300">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {t("navigation.sections.about")}
              </button>
              <button
                onClick={() => scrollToSection("reserve")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {t("navigation.sections.reserve")}
              </button>
              <button
                onClick={() => scrollToSection("voucher")}
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {t("navigation.sections.voucher")}
              </button>
              <Link
                href="/terms"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="tel:+359976231444" className="hover:text-yellow-400 transition-colors">
                  📞 +359 976 231 444
                </a>
              </p>
              <p>✉️ info@tandemjump.bg</p>
              <p>📍 {t("footer.address")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
} 