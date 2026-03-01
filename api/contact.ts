type VercelRequest = {
  method?: string
  body?: { name?: string; email?: string; message?: string }
}

type VercelResponse = {
  status: (code: number) => VercelResponse
  json: (payload: Record<string, unknown>) => void
}

async function sendViaResend({ name, email, message }: { name: string; email: string; message: string }) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? 'website@resend.dev'

  if (!apiKey || !to) {
    return
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New SAP PLM website inquiry from ${name}`,
      reply_to: email,
      text: message
    })
  })
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false })
    return
  }

  const name = req.body?.name?.trim()
  const email = req.body?.email?.trim()
  const message = req.body?.message?.trim()

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: 'Missing fields' })
    return
  }

  await sendViaResend({ name, email, message })
  res.status(200).json({ ok: true })
}
