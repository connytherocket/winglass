import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import PageTitle from "~/components/page-title";
import { SectionTitle } from "~/components/section-title";
import {
  Shield,
  Phone,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Euro,
  Calendar,
  Car,
  Award,
  Sparkles,
  Leaf,
  Zap,
  Users,
  ThumbsUp,
  Recycle,
} from "lucide-react";

export function meta() {
  return [
    { title: "10 Gründe für Winglass – Ihr Autoglas-Spezialist" },
    {
      name: "description",
      content:
        "Entdecken Sie 10 überzeugende Gründe, warum Sie sich für Winglass entscheiden sollten. Von Reparatur statt Austausch bis hin zu Nachhaltigkeit und Zufriedenheitsgarantie.",
    },
  ];
}

export default function Gruende() {
  const reasons = [
    {
      number: "01",
      icon: Wrench,
      title: "Reparatur anstelle des Austauschs",
      description:
        "Nicht jeder Riss oder Schaden an Ihrer Autoscheibe erfordert einen teuren Austausch. Unsere erfahrenen Experten prüfen den Schaden sorgfältig und entscheiden, ob eine Reparatur möglich ist. Diese umweltfreundliche Praxis reduziert nicht nur den Abfall, sondern spart auch Ihr Geld.",
    },
    {
      number: "02",
      icon: Euro,
      title: "Kosteneffizienz",
      description:
        "Bei WINGLASS bieten wir erstklassige Qualität zu äußerst erschwinglichen Preisen. Kunden mit Kaskoversicherung müssen lediglich ihre Selbstbeteiligung zahlen, was zu erheblichen Einsparungen führt.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Schnelligkeit",
      description:
        "Wir verstehen, dass Ihr Fahrzeug oft genau dann in die Werkstatt muss, wenn Sie es am dringendsten benötigen. Daher führen wir Reparaturen und den Austausch von Glasscheiben so schnell wie möglich durch – sogar über Nacht, wenn die Situation es erfordert. So können Sie bereits am nächsten Morgen wieder mobil sein.",
    },
    {
      number: "04",
      icon: Users,
      title: "Fachkundige Beratung",
      description:
        "Unsere Mitarbeiter sind umfassend geschult und stehen Ihnen sowohl in unserer Werkstatt als auch per Telefon mit kompetenter Beratung zur Seite.",
    },
    {
      number: "05",
      icon: Car,
      title: "Vielfältige Fahrzeugverglasung",
      description:
        "Neben Pkw-Glasreparaturen bieten wir unsere Dienstleistungen auch für andere Fahrzeugtypen wie Lkw und Wohnmobile an. Auf Wunsch prüfen wir sogar die einwandfreie Funktion aller Signalvorrichtungen, ohne zusätzliche Kosten.",
    },
    {
      number: "06",
      icon: Shield,
      title: "Kein Ärger mit der Versicherung",
      description:
        "Die Abwicklung von Versicherungsschäden kann kompliziert sein. Doch bei uns müssen Sie sich keine Sorgen machen. Wir übernehmen die gesamte Schadensabwicklung mit Ihrer Versicherung und erstellen alle erforderlichen Angebote und Kostenvoranschläge.",
    },
    {
      number: "07",
      icon: ArrowRight,
      title: "Bequemer Abhol- und Bringdienst",
      description:
        "Wenn Ihr Fahrzeug verglast werden muss, aber Sie andere Verpflichtungen haben, bieten wir Ihnen einen Abhol- und Bringdienst für Ihr Auto an, ohne zusätzliche Kosten.",
    },
    {
      number: "08",
      icon: Car,
      title: "Werkstatt-Ersatzwagen",
      description:
        "Sollte Ihr Fahrzeug Reparaturen in unserer Werkstatt benötigen und Sie auf Mobilität angewiesen sind, steht Ihnen ein kostenloser Werkstatt-Ersatzwagen zur Verfügung. Ihr Komfort und Ihre Mobilität sind uns wichtig.",
    },
    {
      number: "09",
      icon: ThumbsUp,
      title: "Zufriedenheitsgarantie",
      description:
        "Ihre Zufriedenheit ist unsere oberste Priorität. Wir sind so von der Qualität unserer Arbeit überzeugt, dass wir eine Zufriedenheitsgarantie anbieten. Falls Sie nicht zufrieden sind, werden wir alles tun, um Ihr Anliegen zu Ihrer vollen Zufriedenheit zu lösen. Ihr Vertrauen ist uns sehr wichtig.",
    },
    {
      number: "10",
      icon: Leaf,
      title: "Nachhaltigkeit",
      description:
        "Als verantwortungsbewusstes Unternehmen setzen wir uns für Nachhaltigkeit ein. Wir reduzieren Glasabfälle durch Reparaturen und bemühen uns um umweltfreundliche Praktiken in unserer Werkstatt. Wir verwenden recycelbare Materialien und minimieren den ökologischen Fußabdruck unserer Dienstleistungen. Mit uns tragen Sie nicht nur zur Erhaltung Ihres Fahrzeugs bei, sondern auch zur Schonung unserer Umwelt.",
    },
  ];

  const highlights = [
    {
      icon: Award,
      title: "Qualität",
      description: "Erstklassiger Service",
    },
    {
      icon: Zap,
      title: "Schnelligkeit",
      description: "Oft noch am selben Tag",
    },
    {
      icon: Euro,
      title: "Preis-Leistung",
      description: "Faire und transparente Preise",
    },
    {
      icon: Sparkles,
      title: "Garantie",
      description: "Zufriedenheitsgarantie inklusive",
    },
  ];

  return (
    <div>
      <PageTitle
        title="10 Gründe für Winglass"
        subtitle="Warum Sie sich für uns entscheiden sollten"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über Winglass" },
          { label: "Gründe" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <SectionTitle
          badge="Ihre Vorteile"
          title="Hier sind 10 überzeugende Gründe, warum Sie sich für uns entscheiden sollten"
          subtitle="Bei Winglass steht Ihre Zufriedenheit an erster Stelle. Entdecken Sie, was uns zu Ihrem idealen Partner für Autoglas-Service macht."
          align="left"
        />

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Reasons Section */}
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5">
                      <reason.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl font-bold text-primary/20">
                        {reason.number}
                      </span>
                      <h3 className="text-2xl font-bold">{reason.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        {/* Why Choose Us - Summary */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Award className="w-3 h-3 mr-2" />
              Unser Versprechen
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              Ihr vertrauensvoller Partner für Autoglas
            </h2>
            <p className="text-muted-foreground mb-6">
              Bei Winglass vereinen wir über Jahre gewachsene Expertise mit
              modernster Technik und einem kundenorientierten Service. Wir
              wissen, wie wichtig Ihr Fahrzeug für Sie ist und behandeln es mit
              der gleichen Sorgfalt, die wir auch für unsere eigenen Autos
              aufbringen würden.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Professionelle Beratung durch geschulte Fachkräfte</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Transparente Preise ohne versteckte Kosten</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Direkte Versicherungsabwicklung</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Schnelle Terminvergabe und flexible Servicezeiten</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border-primary/50">
              <CardContent className="p-6 text-center">
                <Recycle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Umweltbewusst</h3>
                <p className="text-sm text-muted-foreground">
                  Reparatur vor Austausch für weniger Abfall
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Express-Service</h3>
                <p className="text-sm text-muted-foreground">
                  Oft noch am selben Tag fertig
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Versicherung</h3>
                <p className="text-sm text-muted-foreground">
                  Komplette Abwicklung für Sie
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="p-6 text-center">
                <ThumbsUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Garantie</h3>
                <p className="text-sm text-muted-foreground">
                  100% Zufriedenheitsgarantie
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mx-auto mt-16">
          <Card className="border-primary bg-primary/5">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Überzeugt? Kontaktieren Sie uns!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Erleben Sie den Winglass-Unterschied selbst. Vereinbaren Sie
                jetzt einen Termin oder rufen Sie uns direkt an. Wir freuen uns
                auf Sie!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="tel:071424695720">
                    <Phone className="mr-2 h-5 w-5" />
                    07142 / 4695720
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
