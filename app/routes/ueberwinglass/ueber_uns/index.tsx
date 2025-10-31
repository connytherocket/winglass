import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import PageTitle from "~/components/page-title";
import { SectionTitle } from "~/components/section-title";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Award,
  Heart,
  Zap,
  Users,
  Clock,
  Car,
  Calendar,
  Shield,
  Target,
  Smile,
} from "lucide-react";

export function meta() {
  return [
    { title: "Über Winglass – Ihr Autoglas-Spezialist" },
    {
      name: "description",
      content:
        "Lernen Sie Winglass kennen: Meisterbetrieb mit langjähriger Erfahrung, höchster Qualität und Kundenzufriedenheit im Mittelpunkt. Flexibel, schnell und professionell.",
    },
  ];
}

export default function UeberUns() {
  const values = [
    {
      icon: Heart,
      title: "Kundenzufriedenheit",
      description:
        "Ihre Zufriedenheit ist unser höchstes Ziel. Wir setzen alles daran, dass Sie sich bei uns gut aufgehoben und verstanden fühlen.",
    },
    {
      icon: Zap,
      title: "Schnelligkeit",
      description:
        "Lange Wartezeiten sind für uns kein Thema. Wir bestätigen Ihren Terminwunsch in der Regel noch am selben Tag.",
    },
    {
      icon: Award,
      title: "Qualität",
      description:
        "Als Meisterbetrieb garantieren wir kompetente Beratung und finden stets die beste Lösung für Ihr Anliegen.",
    },
    {
      icon: Users,
      title: "Professionalität",
      description:
        "Unser erfahrenes Team arbeitet mit höchster Präzision und modernster Technik für beste Ergebnisse.",
    },
  ];

  const services = [
    {
      icon: Calendar,
      title: "Flexible Terminvergabe",
      description: "Online oder telefonisch – ganz nach Ihrem Wunsch",
    },
    {
      icon: Clock,
      title: "Schnelle Bestätigung",
      description: "Terminbestätigung meist noch am selben Tag",
    },
    {
      icon: Car,
      title: "Kostenloser Mietwagen",
      description: "Bei nicht fahrtüchtigen Fahrzeugen inklusive",
    },
    {
      icon: Shield,
      title: "Meisterbetrieb",
      description: "Qualität und Kompetenz auf höchstem Niveau",
    },
  ];

  const features = [
    "Langjährige Erfahrung im Autoglas-Service",
    "Kompetente Beratung durch Fachexperten",
    "Individuelle Lösungen für Ihr Anliegen",
    "Positives und stressfreies Kundenerlebnis",
    "Transparente Kommunikation",
    "Modernste Werkstattausstattung",
  ];

  return (
    <div>
      <PageTitle
        title="Über Winglass"
        subtitle="Ihr vertrauensvoller Partner für Autoglas-Service"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über Winglass" },
          { label: "Über uns" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="py-16">
          <SectionTitle
            badge="Unser Profil"
            title="Qualität auf höchstem Niveau"
            subtitle="Mit uns erhalten Sie nicht nur einen Partner mit langjähriger Erfahrung, sondern auch Qualität auf höchstem Niveau. Als Meisterbetrieb garantieren wir kompetente Beratung und finden stets die beste Lösung für Ihr Anliegen. Bei uns stehen Sie als Kunde im Mittelpunkt, und unser Ziel ist es, dass Sie mit unserer Arbeit rundum zufrieden sind."
            align="left"
          />
        </section>

        {/* Values Grid */}
        <section className="py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Main Content - Two Columns */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <Badge variant="secondary" className="mb-4">
                <Heart className="w-3 h-3 mr-2" />
                Unsere Mission
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Ihre Zufriedenheit ist unser höchstes Ziel
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Wir setzen alles daran, dass Sie sich bei uns gut aufgehoben und
                verstanden fühlen, um Ihre Erwartungen zu übertreffen. Unser
                Fokus liegt nicht nur auf der Lösung Ihrer Autoglasschäden,
                sondern auch auf einem positiven und stressfreien
                Kundenerlebnis.
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-4">
                  <Smile className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Sie stehen im Mittelpunkt
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bei uns sind Sie nicht nur eine Nummer. Wir nehmen uns
                      Zeit für Ihre Anliegen und finden gemeinsam die optimale
                      Lösung für Sie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-3 h-3 mr-2" />
                Unser Service
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Flexibel, schnell und professionell
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Neben Ihrer Zufriedenheit legen wir großen Wert auf
                Flexibilität, Schnelligkeit und eine professionelle
                Arbeitsweise. Sie können einen Termin ganz bequem telefonisch
                oder online vereinbaren. Lange Wartezeiten sind für uns kein
                Thema. In der Regel bestätigen wir Ihren Terminwunsch noch am
                selben Tag.
              </p>

              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Car className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Kostenloses Ersatzfahrzeug
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Falls Ihr Fahrzeug nach einem Schaden nicht mehr
                        fahrtüchtig ist, bieten wir Ihnen einen kostenlosen
                        Mietwagen. Ihre Zufriedenheit und Ihre Bequemlichkeit
                        ist unsere Priorität.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Why Choose Us Section */}
        <section className="py-16">
          <SectionTitle
            badge="Warum Winglass?"
            title="Ihr Partner für Autoglas-Service"
            subtitle="Als Meisterbetrieb mit langjähriger Erfahrung vereinen wir Tradition mit Innovation und stellen Ihre Zufriedenheit in den Mittelpunkt."
            align="left"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3">Meisterbetrieb</h3>
                <p className="text-muted-foreground">
                  Qualität und Kompetenz, die Sie spüren werden
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3">Erfahrenes Team</h3>
                <p className="text-muted-foreground">
                  Profis, die ihr Handwerk verstehen und lieben
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3">Kundenorientiert</h3>
                <p className="text-muted-foreground">
                  Sie stehen bei uns immer im Mittelpunkt
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="mx-auto">
            <Card className="border-primary bg-primary/5">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Lernen Sie uns kennen!
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Überzeugen Sie sich selbst von unserem Service. Vereinbaren
                  Sie jetzt einen Termin oder besuchen Sie uns in einer unserer
                  Werkstätten. Wir freuen uns auf Sie!
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
        </section>
      </div>
    </div>
  );
}
