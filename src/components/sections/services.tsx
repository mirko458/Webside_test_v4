import { Boxes, Component, Layers2, ShieldCheck } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/layout/reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Service = { title: string; description: string }
type ServicesContent = { title: string; intro: string; items: Service[] }

const icons = [Layers2, Boxes, Component, ShieldCheck]

export function ServicesSection({ content }: { content: ServicesContent }) {
  return (
    <Section id="services">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">{content.intro}</p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {content.items.map((item, index) => {
          const Icon = icons[index] ?? Layers2
          return (
            <Reveal key={item.title} delay={0.2 + index * 0.1}>
              <Card className="hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-soft h-full transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-7">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

