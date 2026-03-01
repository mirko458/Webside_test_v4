import { Moon, Sun, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Locale, ThemeMode } from '@/lib/utils'

type NavLabels = {
  about: string
  services: string
  approach: string
  references: string
  contact: string
}

const links = [
  { href: '#about', key: 'about' },
  { href: '#services', key: 'services' },
  { href: '#references', key: 'references' },
  { href: '#approach', key: 'approach' },
  { href: '#contact', key: 'contact' }
] as const

export function Navbar({
  nav,
  locale,
  onLocale,
  theme,
  onTheme,
  onNavigate
}: {
  nav: NavLabels
  locale: Locale
  onLocale: (locale: Locale) => void
  theme: ThemeMode
  onTheme: (mode: ThemeMode) => void
  onNavigate: (view: 'home' | 'impressum' | 'datenschutz') => void
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          onClick={(e) => {
            if (window.location.hash) {
              e.preventDefault();
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              onNavigate('home');
            }
          }}
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Layers className="h-5 w-5" />
          </div>
          <span className="text-[15px] font-bold tracking-[0.08em] text-foreground">
            V4 QUINTERN<span className="text-primary"> </span>CONSULTING
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => onNavigate('home')}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            aria-label={locale === 'de' ? 'Switch language to English' : 'Sprache auf Deutsch umstellen'}
            onClick={() => onLocale(locale === 'de' ? 'en' : 'de')}
          >
            {locale.toUpperCase()}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
