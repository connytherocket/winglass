import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import PageTitle from "~/components/page-title";
import { SectionTitle } from "~/components/section-title";
import {
  Clock,
  Shield,
  Phone,
  CheckCircle2,
  ArrowRight,
  Euro,
  Calendar,
  Star,
  CircleCheck,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  FileText,
  Users,
  TrendingDown,
  ClipboardCheck,
  HandshakeIcon,
  Banknote,
  FileCheck,
  MessageSquare,
  HeartHandshake,
  Percent,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "~/lib/utils";

export function meta() {
  return [
    { title: "Versicherungsabwicklung – Winglass" },
    {
      name: "description",
      content:
        "Wir übernehmen die komplette Abwicklung mit Ihrer Versicherung. Keine Hochstufung bei Steinschlagschäden, faire Preise auch ohne Kasko.",
    },
  ];
}

export default function Versicherungsabwicklung() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const galleryImages = [
    {
      src: "/images/Bilder/4er/IMG_5426.JPG",
      alt: "Professionelle Beratung",
    },
    {
      src: "/images/Bilder/G-Klasse/IMG_3972.JPG",
      alt: "Versicherungsabwicklung",
    },
    {
      src: "/images/Bilder/E-Klasse/IMG_5066.JPG",
      alt: "Kundenservice",
    },
    {
      src: "/images/slider/DSC09741.jpg",
      alt: "Beratungsgespräch",
    },
    {
      src: "/images/slider/DSC09793.jpg",
      alt: "Vertrauen und Service",
    },
    {
      src: "/images/slider/DSC09828.jpg",
      alt: "Zufriedene Kunden",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Komplettservice",
      description: "Wir erledigen alles",
    },
    {
      icon: TrendingDown,
      title: "Kein Rabattverlust",
      description: "Bei Steinschlägen",
    },
    {
      icon: Euro,
      title: "Faire Preise",
      description: "Auch ohne Kasko",
    },
    {
      icon: Clock,
      title: "Schnelle Abwicklung",
      description: "Direkt mit Versicherung",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: Phone,
      title: "Schadenmeldung",
      description:
        "Rufen Sie uns an oder kontaktieren Sie uns online – wir nehmen alle relevanten Daten auf",
    },
    {
      number: "02",
      icon: FileText,
      title: "Versicherungsprüfung",
      description:
        "Wir prüfen Ihren Versicherungsschutz und klären die Kostenübernahme",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Terminvereinbarung",
      description:
        "Wir vereinbaren einen passenden Termin für die Reparatur oder den Austausch",
    },
    {
      number: "04",
      icon: HandshakeIcon,
      title: "Durchführung",
      description:
        "Wir führen die Arbeiten fachgerecht durch – Sie müssen sich um nichts kümmern",
    },
    {
      number: "05",
      icon: FileCheck,
      title: "Direktabrechnung",
      description:
        "Wir rechnen direkt mit Ihrer Versicherung ab – ohne Mehraufwand für Sie",
    },
  ];

  const benefits = [
    "Komplette Abwicklung mit Ihrer Versicherung",
    "Keine Hochstufung bei Steinschlagschäden",
    "Kein Verlust des Schadenfreiheitsrabatts",
    "Nur vereinbarte Selbstbeteiligung beim Austausch",
    "Transparente Kostenaufstellung",
    "Direktabrechnung mit der Versicherung",
    "Faire Preise auch für Haftpflichtversicherte",
    "Individuelle Angebotserstellung",
  ];

  const insuranceTypes = [
    {
      icon: ShieldCheck,
      title: "Teilkasko",
      description: "Beste Konditionen für Teilkasko-Versicherte",
      features: [
        "Steinschlagreparatur: 0€ Eigenanteil",
        "Keine Hochstufung des SF-Rabatts",
        "Scheibenaustausch: nur Selbstbeteiligung",
        "Komplette Versicherungsabwicklung",
      ],
      highlight: true,
    },
    {
      icon: BadgeCheck,
      title: "Vollkasko",
      description: "Umfassender Schutz bei Vollkasko-Versicherung",
      features: [
        "Steinschlagreparatur: 0€ Eigenanteil",
        "Keine SF-Rabatt Beeinträchtigung",
        "Scheibenaustausch: nur Selbstbeteiligung",
        "Inkl. Kalibrierung der Assistenzsysteme",
      ],
      highlight: true,
    },
    {
      icon: Percent,
      title: "Haftpflicht",
      description: "Attraktive Konditionen auch ohne Kasko",
      features: [
        "Wettbewerbsfähige Preise",
        "Transparente Kostenaufstellung",
        "Individuelle Angebotserstellung",
        "Flexible Zahlungsmöglichkeiten",
      ],
      highlight: false,
    },
  ];

  const serviceHighlights = [
    {
      icon: HeartHandshake,
      title: "Persönliche Betreuung",
      description:
        "Wir nehmen uns Zeit für Sie und beraten Sie individuell zu allen Fragen rund um die Versicherungsabwicklung.",
    },
    {
      icon: MessageSquare,
      title: "Direkte Kommunikation",
      description:
        "Wir kommunizieren direkt mit Ihrer Versicherung und halten Sie über den gesamten Prozess auf dem Laufenden.",
    },
    {
      icon: Banknote,
      title: "Transparente Kosten",
      description:
        "Sie erhalten von uns eine detaillierte Kostenaufstellung, bevor wir mit den Arbeiten beginnen.",
    },
    {
      icon: Award,
      title: "Erfahrung & Kompetenz",
      description:
        "Langjährige Erfahrung in der Zusammenarbeit mit allen gängigen Versicherungen garantiert reibungslose Abläufe.",
    },
  ];

  const whyUs = [
    {
      icon: CircleCheck,
      title: "Kein Papierkram",
      description:
        "Wir übernehmen die gesamte Kommunikation und Abwicklung mit Ihrer Versicherung.",
    },
    {
      icon: Clock,
      title: "Zeitersparnis",
      description:
        "Sie sparen wertvolle Zeit – wir kümmern uns um alle Formalitäten.",
    },
    {
      icon: Shield,
      title: "Keine Nachteile",
      description:
        "Bei Steinschlagschäden bleibt Ihr Schadenfreiheitsrabatt erhalten.",
    },
    {
      icon: HandshakeIcon,
      title: "Vertrauensvoll",
      description:
        "Wir arbeiten mit allen gängigen Versicherungen zusammen und kennen die Prozesse.",
    },
  ];

  return (
    <div>
      <PageTitle
        title="Versicherungsabwicklung"
        subtitle="Wir übernehmen die komplette Abwicklung mit Ihrer Versicherung"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen" },
          { label: "Versicherungsabwicklung" },
        ]}
        backgroundImage="/images/slider/DSC09741.jpg"
      />

      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - What We Offer */}
            <div>
              <Badge className="mb-4">
                <Shield className="w-3 h-3 mr-2" />
                Unser Service
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Unkomplizierte Versicherungsabwicklung
              </h2>
              <p className="text-muted-foreground mb-6">
                Für teil- oder vollkaskoversicherte Fahrzeuge übernimmt die
                Versicherung normalerweise die gesamten Reparaturkosten für
                Steinschlagschäden in der Frontscheibe, ohne den
                Schadenfreiheitsrabatt zu beeinträchtigen.
              </p>
              <p className="text-muted-foreground mb-6">
                Beim Austausch von Windschutz-, Seiten- oder Heckscheiben fällt
                für teil- oder vollkaskoversicherte Kunden lediglich die
                vereinbarte Selbstbeteiligung an.
              </p>
              <p className="text-muted-foreground mb-8">
                Selbst für Autofahrer mit Haftpflichtversicherung bieten wir
                wettbewerbsfähige Preise. Gerne erstellen wir Ihnen ein
                individuelles Angebot.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-8" />

              <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1">
                  <a href="tel:071424695720">
                    <Phone className="mr-2 h-4 w-4" />
                    Anrufen
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/kontakt">
                    <Calendar className="mr-2 h-4 w-4" />
                    Termin
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Process */}
            <div>
              <Badge variant="secondary" className="mb-4">
                <Star className="w-3 h-3 mr-2" />
                Ablauf
              </Badge>
              <h2 className="text-3xl font-bold mb-6">So einfach geht's</h2>

              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5">
                        <span className="text-sm font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold mb-1 text-base">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <div className="container mx-auto px-6">
            <SectionTitle
              badge="Ihre Vorteile"
              title="Stressfrei zur neuen Scheibe"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Types Section */}
        <section className="py-16">
          <SectionTitle
            badge="Versicherungsarten"
            title="Für jede Versicherung das richtige Angebot"
            subtitle="Egal ob Teilkasko, Vollkasko oder Haftpflicht – wir bieten optimale Konditionen"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => (
              <Card
                key={index}
                className={cn(
                  "hover:shadow-lg transition-all",
                  type.highlight && "border-primary bg-primary/5"
                )}
              >
                <CardHeader>
                  <div className="mb-4">
                    <type.icon
                      className={cn(
                        "w-12 h-12",
                        type.highlight
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-16 bg-muted/30 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <div className="container mx-auto px-6">
            <SectionTitle
              badge="Qualität & Service"
              title="Darauf können Sie zählen"
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {serviceHighlights.map((highlight, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <highlight.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">
                          {highlight.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {highlight.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <SectionTitle
            badge="Warum Winglass?"
            title="Ihre Vorteile bei der Versicherungsabwicklung"
            subtitle="Wir machen Ihnen die Abwicklung so einfach wie möglich"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((reason, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{reason.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <SectionTitle
              badge="Häufige Fragen"
              title="Was Sie wissen sollten"
            />

            <Accordion
              type="single"
              collapsible={true}
              className="w-full space-y-4 relative z-10"
            >
              <AccordionItem
                value="item-1"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Was muss ich bei einem Steinschlag tun?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Kontaktieren Sie uns einfach telefonisch oder online. Wir
                    nehmen alle wichtigen Daten auf und kümmern uns um die
                    Kommunikation mit Ihrer Versicherung. Sie müssen nichts
                    weiter unternehmen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Verliere ich meinen Schadenfreiheitsrabatt?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Nein! Bei Steinschlagschäden an der Frontscheibe bleibt Ihr
                    Schadenfreiheitsrabatt erhalten. Die Versicherung übernimmt
                    die Kosten vollständig, ohne dass Sie hochgestuft werden.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Was kostet mich die Reparatur mit Teilkasko?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Bei Steinschlagreparaturen zahlen Sie in der Regel nichts.
                    Beim Scheibenaustausch fällt nur Ihre vereinbarte
                    Selbstbeteiligung an. Den Rest rechnen wir direkt mit Ihrer
                    Versicherung ab.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Wie läuft die Abrechnung mit der Versicherung?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Wir rechnen direkt mit Ihrer Versicherung ab. Sie müssen
                    lediglich Ihre Versicherungsdaten angeben und ggf. Ihre
                    Selbstbeteiligung zahlen. Um den Rest kümmern wir uns.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Was kostet es ohne Kaskoversicherung?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Wir bieten auch für Haftpflicht-Versicherte
                    wettbewerbsfähige Preise. Kontaktieren Sie uns für ein
                    individuelles, transparentes Angebot. Wir beraten Sie gerne
                    zu allen Möglichkeiten.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="mx-auto">
            <Card className="border-primary bg-primary/5">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Wir kümmern uns um Ihre Versicherung
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Kontaktieren Sie uns jetzt und lassen Sie uns die komplette
                  Abwicklung übernehmen. Stressfrei und unkompliziert.
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
