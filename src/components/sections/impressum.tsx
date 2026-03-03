export function ImpressumSection() {
  return (
    <section className="container py-24 sm:py-32" id="impressum">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Impressum</h2>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h3>
            <p>
              Quintern Consulting<br />
              Mirko Quintern<br />
              IT-Dienstleistungen & Beratung (Freiberufler)<br />
              Rheintalstr. 28<br />
              68723 Schwetzingen
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Kontakt</h3>
            <p>
              Telefon: +49 (0) 151 12581446<br />
              E-Mail: <a href="mailto:mail@mirkoquintern.de" className="text-foreground hover:underline">mail@mirkoquintern.de</a>
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Ihre USt-IdNr. hier einfügen oder Abschnitt entfernen, falls nicht vorhanden]
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">EU-Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-foreground underline">
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Meine E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p>
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
