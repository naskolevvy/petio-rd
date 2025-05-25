"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, CheckCircle2, Phone, User, XCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useTranslation } from "react-i18next"

export function Voucher() {
  const [voucherCode, setVoucherCode] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)
  const { t } = useTranslation("common")

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const handleVoucherVerify = () => {
    if (!voucherCode.trim()) {
      setError(t("voucher.enterCode"))
      return
    }

    setError("")
    if (voucherCode === "86304747314") {
      setIsValid(true)
      setIsModalOpen(true)
    } else {
      setIsValid(false)
      setIsModalOpen(true)
    }
  }

  const ModalContent = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
        {isValid ? (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping" />
                <CheckCircle2 className="h-20 w-20 text-green-500 relative" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-green-600">{t("voucher.validation.success.title")}</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">{t("voucher.validation.success.validFrom")}</p>
                  <p className="font-medium">22.05.2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">{t("voucher.validation.success.validUntil")}</p>
                  <p className="font-medium">22.09.2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">{t("voucher.validation.success.assignedTo")}</p>
                  <p className="font-medium">Peter Bojilov</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500 mb-2">{t("voucher.validation.success.contact")}</p>
                <a 
                  href="tel:+359976231444" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  +359 976 231 444
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("voucher.validation.error.title")}</h3>
            <p className="text-gray-600">{t("voucher.validation.error.message")}</p>
          </div>
        )}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
          >
            {t("voucher.close")}
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <section id="voucher" className="relative z-10 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t("voucher.title")}</h2>
            <p className="text-gray-700 mb-6 text-center">{t("voucher.description")}</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="voucher" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("voucher.label")}
                </label>
                <Input
                  id="voucher"
                  type="text"
                  placeholder={t("voucher.placeholder")}
                  value={voucherCode}
                  onChange={(e) => {
                    setVoucherCode(e.target.value)
                    setError("")
                  }}
                  className="w-full p-3 text-lg"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>

              <Button
                onClick={handleVoucherVerify}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 text-lg"
              >
                {t("voucher.button")}
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-4 text-center">{t("voucher.trouble")}</p>
          </CardContent>
        </Card>
      </div>

      {mounted && isModalOpen && createPortal(
        <ModalContent />,
        document.body
      )}
    </section>
  )
} 