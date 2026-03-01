export type ReferenceItem = { industry: string; location: string; title: string; skills: string };
import type { Locale } from '@/lib/utils'

type Service = { title: string; description: string }
type Step = { title: string; text: string }
type ContentModel = {
  nav: { about: string; services: string; approach: string; references: string; contact: string }
  hero: { badge: string; title: string; subtitle: string; motto: string; primaryCta: string; secondaryCta: string }
  about: { title: string; lead: string; points: string[] }
  services: { title: string; intro: string; items: Service[] }
  approach: { title: string; intro: string; steps: Step[] }
  references: { title: string; intro: string; items: ReferenceItem[] }
  contact: { title: string; intro: string; name: string; email: string; message: string; cta: string; success: string; error: string }
  footer: { line: string; impressum: string; datenschutz: string }
}

export const content: Record<Locale, ContentModel> = {
  de: {
    nav: {
      about: 'Über mich',
      services: 'Leistungen',
      approach: 'Methodik',
      references: 'Referenzen',
      contact: 'Kontakt'
    },
    hero: {
      badge: 'Mirko Quintern – SAP PLM Solution Architect',
      title: 'Quintern PLM Consulting',
      subtitle:
        '20+ Jahre SAP PLM Erfahrung',
      motto: '„Wir sind überzeugt, dass echte Innovation dort entsteht, wo Komplexes einfach wird“',
      primaryCta: 'Jetzt anfragen',
      secondaryCta: 'Leistungen ansehen'
    },
    about: {
      title: 'Über mich',
      lead:
        'Als <strong class="font-bold text-foreground">SAP PLM Solution Architect</strong>, Applikationsberater und Entwickler biete ich profunde Expertise in anspruchsvollen SAP-Landschaften, um Fachbereich und IT optimal zu verbinden.',
      points: [
        '<strong class="font-bold text-foreground">20+ Jahre</strong> SAP PLM Erfahrung, inklusive 8 Jahre direkt bei SAP in Walldorf',
        '<strong class="font-bold text-foreground">Spezialisiert</strong> auf Analyse, Konzeption und Umsetzung komplexer Systemintegrationen im SAP PLM Umfeld.',
        '<strong class="font-bold text-foreground">Branchenkenntnisse:</strong> Automotive, Automotive Zulieferer, Maschinenbau, Anlagenbau, Medizintechnik, Telekommunikation, Software',
        '<strong class="font-bold text-foreground">Fachliche Kernkompetenzen:</strong> iPPE (Integriertes Produkt- und Prozess-Engineering), Freigabe- und Reifegradmanagement, Änderungsmanagement, Materialstamm, Stücklisten, Stücklistensynchronisation via GSS (Guided Structure Synchronization), Dokumentenverwaltung',
        '<strong class="font-bold text-foreground">IT-Kernkompetenzen:</strong> ABAP OO, SAP UI5, Fiori, SAP PDMI, HANA CDS Views, ABAP Web Dynpro, Floor Plan Manager (FPM), Excel VBA, Open SQL, SAP Script, Smartforms',
        '<strong class="font-bold text-foreground">Fokus</strong> auf nachhaltige Architekturen, saubere Implementierung und verlässlichen Betrieb',
      ]
    },
    services: {
      title: 'Leistungen',
      intro: 'Ganzheitliche Betreuung – von der fachlichen Analyse und Konzeption über die Softwarearchitektur bis hin zur technischen Umsetzung.',
      items: [
        {
          title: 'Applikationsberatung',
          description: 'Tiefgreifendes prozessuales Fachwissen in SAP PLM und den dazugehörigen Objekten und Anwendungen.'
        },
        {
          title: 'Solution Architektur',
          description: 'Design und Konzeption hochskalierbarer SAP PLM-Lösungen und Systemlandschaften.'
        },
        {
          title: 'Softwareentwicklung',
          description: 'Hochwertige Implementierungen mit ABAP OO, SAP UI5, Fiori und HANA CDS Views.'
        },
        {
          title: 'Systemintegration',
          description: 'Sichere Anbindung von Drittsystemen, inklusive PDM/PLM-Integrationen wie Dassault 3DX und Siemens Teamcenter.'
        }
      ]
    },
references: {
      title: 'Referenzen',
      intro: 'Auswahl relevanter Integrations- und Entwicklungsprojekte:',
      items: [
          {
                  industry: 'Automotive',
                  location: 'England, Gaydon',
                  title: 'Schnittstelle Dassault 3DX Delmia zu SAP Material, Classic BOM & iPPE',
                  skills: 'SAP PDMI, iPPE, BOM, Materialstamm, Änderungsdienst, ABAP OO'
          },
          {
                  industry: 'Automotive Zulieferer',
                  location: 'Friedrichshafen',
                  title: 'Einführung der SAP GSS für eine vollautomatisierte EBOM-zu-MBOM-Synchronisation aus Teamcenter',
                  skills: 'GSS, BOM, Änderungsdienst, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Maschinenbau',
                  location: 'Zweibrücken',
                  title: 'Einführung von SAP GSS für die EBOM/MBOM-Synchronisation inklusive umfangreicher Migration von Bestandsdaten',
                  skills: 'GSS, BOM, Änderungsdienst, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Automotive Zulieferer',
                  location: 'Nürnberg',
                  title: 'Variantenkonfiguration mittels SAP iPPE für JIT-Abrufe sowie Schnittstelle von Siemens Capital zu SAP iPPE',
                  skills: 'iPPE, Änderungsdienst, ABAP OO'
          },
          {
                  industry: 'Anlagenbau',
                  location: 'München',
                  title: 'Entwicklung einer SAP UI5 / Fiori Web-Anwendung zur Lieferantenkommunikation für Großbestellungen',
                  skills: 'SAP UI5, Fiori, SAP HANA, CDS Views, ABAP OO'
          },
          {
                  industry: 'Medizintechnik',
                  location: 'Mannheim / Schweiz, Rotkreuz',
                  title: 'Globale Einführung von SAP Product Structure Management (PSM) für Produktkonfigurationen sowie PLM-Erweiterungen (ECR)',
                  skills: 'iPPE, SAP ECR, Materialstamm, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Software & Automotive',
                  location: 'Walldorf / China, Shanghai',
                  title: 'Lösungsarchitektur der Entwicklungsstückliste mit Integration der geometrischen Prozesse durch Einbindung der Visualisierungsmöglichkeiten von SAP Visual Enterprise',
                  skills: 'SAP Visual Manufacturing Planner, ABAP OO'
          },
          {
                  industry: 'Medizintechnik',
                  location: 'Fulda',
                  title: 'Konzeption und Implementierung eines objektübergreifenden Status- und Reifegradmanagements im SAP PLM inkl. CAD Integration',
                  skills: 'SAP DVS, SAP ECTR, Materialstamm, Pronovia ConfigManager, ABAP OO'
          },
          {
                  industry: 'Automotive',
                  location: 'München',
                  title: 'Langjährige Betreuung und Entwicklung von SAP-Zusatzfunktionen zur Abbildung komplexer Fahrzeug-Produktkonfigurationen in SAP iPPE',
                  skills: 'iPPE, BOM, Excel VBA, ABAP OO'
          },
          {
                  industry: 'Software (SAP)',
                  location: 'Walldorf',
                  title: 'Erstellung einer Schnittstelle für Manufacturing Stücklisten von Dassault 3DX Delmia zu SAP iPPE',
                  skills: 'iPPE, SAP PDMI,ABAP OO'
          },
          {
                  industry: 'Spezialglas',
                  location: 'Mainz',
                  title: 'Umsetzung von Anforderungen für Engineering Change Record, Process Route Workflows & DMS',
                  skills: 'DVS, SAP ECR, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Aerospace',
                  location: 'Herborn',
                  title: 'Allgemeine PLM Optimierungen im SAP System, u.a. Etablierung von Freigabeprozessen auf Dokument und Material',
                  skills: 'BOM, Materialstamm, Änderungsdienst, Excel VBA, SAP Script, Smartforms, Adobe Lifecycle Manager, ABAP OO'
          },
          {
                  industry: 'Automotive Zulieferer',
                  location: 'Stuttgart',
                  title: 'Einführung der SAP GSS für eine iPPE zu BOM Synchronisation inkl. Migration von Bestandsdaten',
                  skills: 'ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Aerospace',
                  location: 'Schweiz',
                  title: 'Implementierung eines genehmigenden Änderungsmanagements auf Basis des SAP PLM 7 Engineering Change Records',
                  skills: 'SAP PLM7, SAP ECR, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Automotive',
                  location: 'Mannheim',
                  title: 'Migration der Variantenkonfigurationsdaten aus dem bestehenden Alt-System MATRIX in die SAP iPPE',
                  skills: 'iPPE, Änderungsdienst, ABAP OO, ABAP to XLSX, Excel VBA'
          },
          {
                  industry: 'Medizintechnik',
                  location: 'Hanau',
                  title: 'Migration von Stammdaten in ProNovia Konfigurationstypen im Rahmen einer PLM-Einführung',
                  skills: 'ProNovia Config Manager, ABAP OO'
          },
          {
                  industry: 'Öffentlicher Rundfunk',
                  location: 'München',
                  title: 'Einführung von EHP2 Employee Self Service (ESS) für SAP Travel Management im Portal',
                  skills: 'ABAP Web Dynpro, SAP FPM (Floor Plan Manager)'
          },
          {
                  industry: 'Versicherungen',
                  location: 'Braunschweig',
                  title: 'Erstellung einer Web-Dynpro Anwendung für den Außendienst zur Kunden-, Vertrags- und Schadenübersicht',
                  skills: 'ABAP Web Dynpro'
          }
  ]
    },
    approach: {
      title: 'Methodik',
      intro: 'Ein praxisbewährter Ansatz für effiziente und transparente Projektabwicklung.',
      steps: [
        {
          title: '1. Analyse',
          text: 'Bewertung der Ist-Situation, Anforderungsaufnahme inkl. Fit-Gap-Analyse und Definition des Zielzustands.'
        },
        {
          title: '2. Konzeption',
          text: 'Erstellung von Fach- und IT-Konzepten mit klaren Verantwortlichkeiten und Machbarkeitsprüfung.'
        },
        {
          title: '3. Umsetzung',
          text: 'Agile oder klassische Realisierung in ABAP, Fiori und SAP PLM mit höchstem Qualitätsanspruch.'
        },
        {
          title: '4. Go-Live & Support',
          text: 'Sicherer Know-how-Transfer, Stabilisierung der Systeme und Begleitung im produktiven Betrieb.'
        }
      ]
    },
    
    contact: {
      title: 'Kontakt',
      intro: 'Kontaktieren Sie mich gerne direkt per E-Mail, Telefon oder über LinkedIn für einen ersten Austausch.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      cta: 'Nachricht senden',
      success: 'Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.',
      error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
    },
    footer: {
      line: 'Quintern Consulting · Mirko Quintern · SAP PLM Solution Architect',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz'
    }
  },
  en: {
    nav: {
      about: 'About Me',
      services: 'Services',
      approach: 'Methodology',
      references: 'References',
      contact: 'Contact'
    },
    hero: {
      badge: 'Mirko Quintern – SAP PLM Solution Architect',
      title: 'Quintern PLM Consulting',
      subtitle: '20+ Years of SAP PLM Experience',
      motto: '„We believe that true innovation emerges when complexity is made simple“',
      primaryCta: 'Inquire Now',
      secondaryCta: 'View Services'
    },
    about: {
      title: 'About Me',
      lead: 'As an <strong class="font-bold text-foreground">SAP PLM Solution Architect</strong>, Application Consultant, and Developer, I offer deep expertise in demanding SAP environments to optimally connect business and IT.',
      points: [
        '<strong class="font-bold text-foreground">20+ Years</strong> of SAP PLM experience, including 8 years directly at SAP in Walldorf',
        '<strong class="font-bold text-foreground">Specialized</strong> in the analysis, design, and implementation of complex system integrations in the SAP PLM environment.',
        '<strong class="font-bold text-foreground">Industry Expertise:</strong> Automotive, Automotive Suppliers, Mechanical Engineering, Plant Engineering, Medical Technology, Telecommunications, Software',
        '<strong class="font-bold text-foreground">Professional Core Competencies:</strong> iPPE (Integrated Product and Process Engineering), Release and Maturity Management, Change Management, Material Master, Bills of Material (BOM), BOM Synchronization via GSS (Guided Structure Synchronization), Document Management',
        '<strong class="font-bold text-foreground">IT Core Competencies:</strong> ABAP OO, SAP UI5, Fiori, SAP PDMI, HANA CDS Views, ABAP Web Dynpro, Floor Plan Manager (FPM), Excel VBA, Open SQL, SAP Script, Smartforms',
        '<strong class="font-bold text-foreground">Focus</strong> on sustainable architectures, clean implementation, and reliable operations'
      ]
    },
    services: {
      title: 'Services',
      intro: 'Holistic support – from professional analysis and conceptual design, to software architecture and technical implementation.',
      items: [
        {
          title: 'Application Consulting',
          description: 'In-depth procedural expertise in SAP PLM and its associated objects and applications.'
        },
        {
          title: 'Solution Architecture',
          description: 'Design and conceptualization of highly scalable SAP PLM solutions and system landscapes.'
        },
        {
          title: 'Software Development',
          description: 'High-quality implementations using ABAP OO, SAP UI5, Fiori, and HANA CDS Views.'
        },
        {
          title: 'System Integration',
          description: 'Secure connection of third-party systems, including PDM/PLM integrations such as Dassault 3DX and Siemens Teamcenter.'
        }
      ]
    },
    references: {
      title: 'References',
      intro: 'Selection of relevant integration and development projects:',
      items: [
        {
          industry: 'Automotive',
          location: 'England, Gaydon',
          title: 'Interface Dassault 3DX Delmia to SAP Material, Classic BOM & iPPE',
          skills: 'SAP PDMI, iPPE, BOM, Material Master, Change Management, ABAP OO'
        },
        {
          industry: 'Automotive Supplier',
          location: 'Friedrichshafen',
          title: 'Implementation of SAP GSS for fully automated EBOM-to-MBOM synchronization from Teamcenter',
          skills: 'GSS, BOM, Change Management, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Mechanical Engineering',
          location: 'Zweibrücken',
          title: 'Implementation of SAP GSS for EBOM/MBOM synchronization including extensive migration of legacy data',
          skills: 'GSS, BOM, Change Management, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Automotive Supplier',
          location: 'Nuremberg',
          title: 'Variant configuration using SAP iPPE for JIT calls and interface from Siemens Capital to SAP iPPE',
          skills: 'iPPE, Change Management, ABAP OO'
        },
        {
          industry: 'Plant Engineering',
          location: 'Munich',
          title: 'Development of an SAP UI5 / Fiori web application for supplier communication for bulk orders',
          skills: 'SAP UI5, Fiori, SAP HANA, CDS Views, ABAP OO'
        },
        {
          industry: 'Medical Technology',
          location: 'Mannheim / Switzerland, Rotkreuz',
          title: 'Global implementation of SAP Product Structure Management (PSM) for product configurations and PLM extensions (ECR)',
          skills: 'iPPE, SAP ECR, Material Master, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Software & Automotive',
          location: 'Walldorf / China, Shanghai',
          title: 'Solution architecture of the engineering BOM with integration of geometric processes by embedding visualization capabilities of SAP Visual Enterprise',
          skills: 'SAP Visual Manufacturing Planner, ABAP OO'
        },
        {
          industry: 'Medical Technology',
          location: 'Fulda',
          title: 'Concept and implementation of cross-object status and maturity management in SAP PLM including CAD integration',
          skills: 'SAP DVS, SAP ECTR, Material Master, Pronovia ConfigManager, ABAP OO'
        },
        {
          industry: 'Automotive',
          location: 'Munich',
          title: 'Long-term support and development of SAP add-on functions to map complex vehicle product configurations in SAP iPPE',
          skills: 'iPPE, BOM, Excel VBA, ABAP OO'
        },
        {
          industry: 'Software (SAP)',
          location: 'Walldorf',
          title: 'Creation of an interface for manufacturing BOMs from Dassault 3DX Delmia to SAP iPPE',
          skills: 'iPPE, SAP PDMI, ABAP OO'
        },
        {
          industry: 'Specialty Glass',
          location: 'Mainz',
          title: 'Implementation of requirements for Engineering Change Record, Process Route Workflows & DMS',
          skills: 'DVS, SAP ECR, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Aerospace',
          location: 'Herborn',
          title: 'General PLM optimizations in the SAP system, including establishment of release processes for documents and materials',
          skills: 'BOM, Material Master, Change Management, Excel VBA, SAP Script, Smartforms, Adobe Lifecycle Manager, ABAP OO'
        },
        {
          industry: 'Automotive Supplier',
          location: 'Germany',
          title: 'Implementation of SAP GSS for iPPE to BOM synchronization including migration of legacy data',
          skills: 'ABAP OO, Web Dynpro'
        },
        {
          industry: 'Aerospace',
          location: 'Switzerland',
          title: 'Implementation of an approving change management based on SAP PLM 7 Engineering Change Records',
          skills: 'SAP PLM7, SAP ECR, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Automotive',
          location: 'Mannheim',
          title: 'Migration of variant configuration data from the legacy system MATRIX into SAP iPPE',
          skills: 'iPPE, Change Management, ABAP OO, ABAP to XLSX, Excel VBA'
        },
        {
          industry: 'Medical Technology',
          location: 'Hanau',
          title: 'Migration of master data into ProNovia configuration types as part of a PLM implementation',
          skills: 'ProNovia Config Manager, ABAP OO'
        },
        {
          industry: 'Public Broadcasting',
          location: 'Germany',
          title: 'Implementation of EHP2 Employee Self Service (ESS) for SAP Travel Management in the portal',
          skills: 'ABAP Web Dynpro, SAP FPM (Floor Plan Manager)'
        },
        {
          industry: 'Insurance',
          location: 'Braunschweig',
          title: 'Creation of a Web Dynpro application for field service for customer, contract, and claims overview',
          skills: 'ABAP Web Dynpro'
        }
      ]
    },
    approach: {
      title: 'Methodology',
      intro: 'A clear structure is the key to successful system integration.',
      steps: [
        {
          title: 'Analysis',
          text: 'Thorough recording of the actual state and specific business requirements.'
        },
        {
          title: 'Concept',
          text: 'Development of sustainable architectures and precise process mapping.'
        },
        {
          title: 'Realization',
          text: 'Clean IT implementation with a focus on maintainability and performance.'
        },
        {
          title: 'Rollout',
          text: 'Secure go-live, comprehensive testing, and sustainable support.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'Looking for an experienced partner for your SAP PLM project? Feel free to contact me directly via email, phone, or LinkedIn.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      cta: 'Send Message',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'An error occurred. Please try again later or contact me directly via email.'
    },
    footer: {
      line: 'Quintern PLM Consulting',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy'
    }
  }
};