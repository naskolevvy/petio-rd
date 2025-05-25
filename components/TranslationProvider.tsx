'use client'

import i18next from '@/lib/i18n'
import { PropsWithChildren, useEffect } from 'react'

export function TranslationProvider({ children, lang }: PropsWithChildren<{ lang: string }>) {
  useEffect(() => {
    i18next.changeLanguage(lang)
  }, [lang])

  return <>{children}</>
} 