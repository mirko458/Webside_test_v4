import { useState, useEffect } from 'react'
import { Reveal } from '@/components/layout/reveal'
import { Section } from '@/components/layout/section'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ReferenceItem = { industry: string; location: string; title: string; skills: string }
type ReferenceContent = { title: string; intro: string; items: ReferenceItem[] }

export function ReferencesSection({ content }: { content: ReferenceContent }) { 
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3)
      } else if (window.innerWidth < 1536) {
        setVisibleCount(4)
      } else {
        setVisibleCount(5)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, content.items.length - visibleCount)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  return (
    <Section id="references" fullWidthContainer={true} className="relative">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] dark:opacity-[0.4]"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}world-map.svg)`,
          backgroundSize: '100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center px-4">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>   
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground">{content.intro}</p> 
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <div className="relative z-10 mt-12 mx-auto w-full max-w-[1920px] px-8 md:px-12 xl:px-16">        
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"    
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {content.items.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 p-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <Card className="bg-muted/30 h-full min-h-[260px] flex flex-col justify-start border-border/60 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md text-left">
                    <CardContent className="pt-6 pb-6 px-6 flex flex-col h-full gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-base md:text-lg text-foreground leading-tight">
                          {item.industry}
                        </h3>
                        {item.location && (
                          <span className="text-sm text-foreground/60 font-medium">
                            {item.location}
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base font-medium text-foreground/80 leading-relaxed flex-grow">
                        {item.title}
                      </p>
                      {item.skills && (
                        <div className="pt-4 mt-auto border-t border-border/50">  
                          <span className="text-xs font-semibold text-primary block">
                            {item.skills}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="secondary"
              size="sm"
              className="h-10 w-10 rounded-full shadow-md p-0 bg-background/90 hover:bg-background border border-border/50 text-foreground"
              onClick={handlePrevious}
              aria-label="Previous reference"
            >
              <ChevronLeft className="h-5 w-5 mx-auto" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="secondary"
              size="sm"
              className="h-10 w-10 rounded-full shadow-md p-0 bg-background/90 hover:bg-background border border-border/50 text-foreground"
              onClick={handleNext}
              aria-label="Next reference"
            >
              <ChevronRight className="h-5 w-5 mx-auto" />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 px-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-6' : 'bg-primary/20 hover:bg-primary/50'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to reference page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
