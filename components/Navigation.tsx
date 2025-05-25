"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { changeLanguage } from '@/lib/i18n'
import { Globe, Menu } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'

export function Navigation() {
  const { t, i18n } = useTranslation('common')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isTermsPage = pathname === '/terms'
  const currentLang = i18n.language

  // Only show translations after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isTermsPage) {
      // If on terms page, navigate to main page and then scroll
      window.location.href = `/#${sectionId}`
    } else {
      // If on main page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <Logo />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" onClick={() => scrollToSection('about')} className="cursor-pointer">
                {t('navigation.sections.about')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('reserve')} className="cursor-pointer">
                {t('navigation.sections.reserve')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('voucher')} className="cursor-pointer">
                {t('navigation.sections.voucher')}
              </Button>
            </div>

            {/* Language Switcher - Always visible */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => changeLanguage('en')}
                  className={`cursor-pointer ${currentLang === 'en' ? 'bg-gray-100 font-medium' : ''}`}
                >
                  {t('navigation.languages.en')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => changeLanguage('bg')}
                  className={`cursor-pointer ${currentLang === 'bg' ? 'bg-gray-100 font-medium' : ''}`}
                >
                  {t('navigation.languages.bg')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="cursor-pointer">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => scrollToSection('about')} className="cursor-pointer">
                    {t('navigation.sections.about')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('reserve')} className="cursor-pointer">
                    {t('navigation.sections.reserve')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('voucher')} className="cursor-pointer">
                    {t('navigation.sections.voucher')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}