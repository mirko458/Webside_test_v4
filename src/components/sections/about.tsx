import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/layout/reveal"

type AboutContent = {
  title: string
  lead: string
  points: string[]
}

export function AboutSection({ content }: { content: AboutContent }) {
  return (
    <Section id="about" className="border-y border-border/60 bg-muted/35">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
        
        {/* Left Column: Title, Lead Text, and Image */}
        <div className="flex flex-col gap-10">
          <div>
            <Reveal delay={0.1} direction="left">
              <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
            </Reveal>
            <Reveal delay={0.2} direction="left">
              <p 
                className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: content.lead }}
              />
            </Reveal>
          </div>
          
          <Reveal delay={0.3} direction="up">
            <div className="relative ml-8 aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-3xl border border-border/50 bg-muted shadow-lg">
              <img 
                src={`${import.meta.env.BASE_URL}portrait.jpeg`}
                alt="Portrait" 
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        {/* Right Column: Points */}
        <ul className="space-y-4">
          {content.points.map((point, i) => (
              <Reveal key={i} delay={0.1 + i * 0.15} direction="up">
                <li className="flex gap-3 rounded-xl border border-border/70 bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span 
                    className="text-sm leading-6 text-foreground/90" 
                    dangerouslySetInnerHTML={{ __html: point }} 
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
    </Section>
  )
}

