import { useState } from 'react'
import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/layout/reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ContactContent = {
  title: string
  intro: string
  name: string
  email: string
  message: string
  cta: string
  success: string
  error: string
}

export function ContactSection({ content }: { content: ContactContent }) {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function onSubmit(formData: FormData): Promise<boolean> {
    setState('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setState('success')
      return true
    } catch {
      setState('error')
      return false
    }
  }

  return (
    <Section id="contact" className="pb-28">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <Reveal direction="left">
            <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
          </Reveal>
          <Reveal delay={0.2} direction="left">
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{content.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.3} direction="up">
        <Card>
          <CardHeader>
            <CardTitle>{content.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget
                const success = await onSubmit(new FormData(form))
                if (success) {
                  form.reset()
                }
              }}
            >
              <Input name="name" placeholder={content.name} required autoComplete="name" />
              <Input name="email" type="email" placeholder={content.email} required autoComplete="email" />
              <Textarea name="message" placeholder={content.message} required />
              <Button type="submit" className="w-full" disabled={state === 'loading'}>
                {state === 'loading' ? '…' : content.cta}
              </Button>

              {state === 'success' ? <p className="text-sm text-primary">{content.success}</p> : null}
              {state === 'error' ? <p className="text-sm text-foreground/80">{content.error}</p> : null}
            </form>
          </CardContent>
        </Card>
        </Reveal>
      </div>
    </Section>
  )
}
