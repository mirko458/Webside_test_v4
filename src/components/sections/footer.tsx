export function FooterSection({ 
  content,
  onNavigate
}: { 
  content: { line: string; impressum: string; datenschutz: string }
  onNavigate: (view: 'home' | 'impressum' | 'datenschutz') => void
}) {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground">{content.line}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <button 
            type="button" 
            onClick={() => { onNavigate('impressum'); window.scrollTo(0, 0) }}
            className="transition hover:text-foreground"
          >
            {content.impressum}
          </button>
          <button 
            type="button" 
            onClick={() => { onNavigate('datenschutz'); window.scrollTo(0, 0) }}
            className="transition hover:text-foreground"
          >
            {content.datenschutz}
          </button>
        </div>
      </div>
    </footer>
  )
}
