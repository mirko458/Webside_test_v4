export function DatenschutzSection() {
  return (
    <section className="container py-24 sm:py-32" id="datenschutz">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Datenschutzerklärung</h2>
        <div className="space-y-8 text-muted-foreground">
          
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h3>
            <p className="mb-2"><strong>Allgemeine Hinweise</strong></p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">2. Allgemeine Hinweise und Pflichtinformationen</h3>
            <p className="mb-2"><strong>Datenschutz</strong></p>
            <p>
              Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten ich erhebe und wofür ich sie nutze. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mt-4 mb-2"><strong>Hinweis zur verantwortlichen Stelle</strong></p>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Quintern Consulting<br />
              Mirko Quintern<br />
              Rheintalstr. 28<br />
              68723 Schwetzingen<br /><br />
              E-Mail: <a href="mailto:mail@mirkoquintern.de" className="text-foreground hover:underline">mail@mirkoquintern.de</a>
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">3. Datenerfassung auf dieser Website</h3>
            <p className="mb-2"><strong>Server-Log-Dateien</strong></p>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an mich übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website  hierzu müssen die Server-Log-Files erfasst werden.
            </p>
            
            <p className="mt-4 mb-2"><strong>Kontaktformular</strong></p>
            <p>
              Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
