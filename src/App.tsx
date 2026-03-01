import { useEffect, useMemo, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { AboutSection } from '@/components/sections/about'
import { ApproachSection } from '@/components/sections/approach'
import { ContactSection } from '@/components/sections/contact'
import { FooterSection } from '@/components/sections/footer'
import { HeroSection } from '@/components/sections/hero'
import { ReferencesSection } from '@/components/sections/references'
import { ServicesSection } from '@/components/sections/services'
import { ImpressumSection } from '@/components/sections/impressum'
import { DatenschutzSection } from '@/components/sections/datenschutz'
import { content } from '@/content'
import type { Locale, ThemeMode } from '@/lib/utils'

export type ViewState = 'home' | 'impressum' | 'datenschutz'

function getInitialTheme(): ThemeMode {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  // Default to light mode instead of checking system preference
  return 'light'
}

function getInitialLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored === 'de' || stored === 'en') {
    return stored
  }

  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme())
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale())
  const [view, setView] = useState<ViewState>('home')
  
  const copy = useMemo(() => content[locale], [locale])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)

    document.title =
      locale === 'de'
        ? 'Mirko Quintern | SAP PLM Solution Architect'
        : 'Mirko Quintern | SAP PLM Solution Architect'
  }, [locale])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar nav={copy.nav} locale={locale} onLocale={setLocale} theme={theme} onTheme={setTheme} onNavigate={setView} />
      <main className="flex-1">
        {view === 'home' && (
          <>
            <HeroSection content={copy.hero} />
            <AboutSection content={copy.about} />
            <ServicesSection content={copy.services} />
            <ReferencesSection content={copy.references} />
            <ApproachSection content={copy.approach} />
            <ContactSection content={copy.contact} />
          </>
        )}
        {view === 'impressum' && <ImpressumSection />}
        {view === 'datenschutz' && <DatenschutzSection />}
      </main>
      <FooterSection content={copy.footer} onNavigate={setView} />
    </div>
  )
}
