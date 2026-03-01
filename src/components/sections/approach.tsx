import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/layout/reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Step = { title: string; text: string }
type ApproachContent = { title: string; intro: string; steps: Step[] }

export function ApproachSection({ content }: { content: ApproachContent }) {
  return (
    <Section id="approach" className="border-y border-border/60 bg-muted/35">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground">{content.intro}</p>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {content.steps.map((step, i) => (
          <Reveal key={step.title} delay={0.2 + i * 0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

