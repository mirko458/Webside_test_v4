import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/layout/reveal"

type HeroContent = {
  badge: string
  title: string
  subtitle: string
  motto: string
  primaryCta: string
  secondaryCta: string
}

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="Modern architectural bright interior"
          className="h-full w-full object-cover opacity-90 dark:opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-background/20 dark:bg-background/60 backdrop-blur-[4px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        {/* Adjusted Badge for better visibility */}
        {/* Badge hidden per request */}
        
        {/* Optimized Title with tighter tracking and high contrast */}
        <Reveal delay={0.2}>
          <h1 className="mx-auto text-balance text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl drop-shadow-sm">
            {content.title}
          </h1>
        </Reveal>
        
        {/* Subtitle with better contrast and readability */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg sm:text-xl font-bold leading-relaxed text-slate-800 dark:text-white drop-shadow-sm">
            {content.subtitle}
          </p>
        </Reveal>

        {/* Motto refined to look like a subtle, elegant quote */}
        <Reveal delay={0.4}>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-xl sm:text-2xl font-light italic leading-relaxed text-slate-800 dark:text-slate-100">
              {content.motto}
            </p>
            <div className="mt-8 h-[2px] w-24 mx-auto bg-primary/30 rounded-full" />
          </div>
        </Reveal>

        {/* Action Buttons styled to stand out elegantly */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30 rounded-full">
                {content.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg rounded-full">
                {content.secondaryCta}
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

