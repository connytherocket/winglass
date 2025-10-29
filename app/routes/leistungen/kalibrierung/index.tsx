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
  Settings,
  Euro,
  Calendar,
  Car,
  Star,
  CircleCheck,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Camera,
  Radar,
  Gauge,
  Target,
  Zap,
  ThumbsUp,
  Eye,
  ScanLine,
  Activity,
  Cpu,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "~/lib/utils";

export function meta() {
  return [
    { title: "ADAS Kamerakalibrierung – Winglass" },
    {
      name: "description",
      content:
        "Präzise Kalibrierung von Fahrerassistenzsystemen mit modernster Hella Gutmann Technologie. Sicherheit nach OEM-Richtlinien.",
    },
  ];
}

export default function Kalibrierung() {
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
      alt: "ADAS Kalibrierung BMW",
    },
    {
      src: "/images/Bilder/G-Klasse/IMG_3972.JPG",
      alt: "Frontkamera-System Mercedes",
    },
    {
      src: "/images/Bilder/E-Klasse/IMG_5066.JPG",
      alt: "Assistenzsystem-Kalibrierung",
    },
    {
      src: "/images/slider/DSC09741.jpg",
      alt: "Kalibrierungs-Equipment",
    },
    {
      src: "/images/slider/DSC09793.jpg",
      alt: "Hella Gutmann Technologie",
    },
    {
      src: "/images/slider/DSC09828.jpg",
      alt: "Professionelle Kalibrierung",
    },
  ];

  const features = [
    {
      icon: Camera,
      title: "Frontkamera",
      description: "Präzise Kalibrierung",
    },
    {
      icon: Radar,
      title: "Radarsysteme",
      description: "Alle Assistenzsysteme",
    },
    {
      icon: Target,
      title: "OEM-Standard",
      description: "Nach Herstellervorgaben",
    },
    {
      icon: Award,
      title: "Hella Gutmann",
      description: "Modernste Technologie",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: Phone,
      title: "Terminvereinbarung",
      description:
        "Kontaktieren Sie uns telefonisch oder online für einen Kalibrierungstermin",
    },
    {
      number: "02",
      icon: Eye,
      title: "Systemanalyse",
      description:
        "Überprüfung aller Fahrerassistenzsysteme und Kamerapositionierung",
    },
    {
      number: "03",
      icon: Settings,
      title: "Aus- und Einbau",
      description: "Präziser Aus- und Wiedereinbau der Frontkamerasysteme",
    },
    {
      number: "04",
      icon: ScanLine,
      title: "Kalibrierung",
      description: "Hochpräzise Kalibrierung mit Hella Gutmann Technologie",
    },
    {
      number: "05",
      icon: Activity,
      title: "Funktionstest",
      description:
        "Abschließende Prüfung aller Assistenzsysteme und Dokumentation",
    },
  ];

  const benefits = [
    "Kalibrierung aller Fahrerassistenzsysteme (ADAS)",
    "Modernste Hella Gutmann Technologie",
    "Präzision nach OEM-Richtlinien",
    "Fachgerechter Aus- und Einbau von Frontkameras",
    "Kalibrierung von Spurhalteassistenten",
    "Notbremsassistent-Kalibrierung",
    "Adaptive Cruise Control (ACC) Einstellung",
    "Vollständige Dokumentation der Kalibrierung",
  ];

  const adasSystems = [
    {
      icon: Camera,
      title: "Frontkamera-Systeme",
      description:
        "Kalibrierung aller kamerabasierten Assistenzsysteme für optimale Verkehrserkennung",
      features: [
        "Spurhalteassistent (Lane Keep Assist)",
        "Verkehrszeichenerkennung",
        "Abstandswarner",
        "Müdigkeitserkennung",
      ],
    },
    {
      icon: Radar,
      title: "Radar-Systeme",
      description:
        "Präzise Einstellung von Radar-Sensoren für zuverlässige Abstandsmessung",
      features: [
        "Adaptive Cruise Control (ACC)",
        "Notbremsassistent",
        "Totwinkel-Assistent",
        "Querverkehrswarner",
      ],
    },
    {
      icon: Gauge,
      title: "Kombinierte Systeme",
      description: "Kalibrierung vernetzter Systeme für maximale Sicherheit",
      features: [
        "Head-Up Display Integration",
        "Nachtsicht-Systeme",
        "Einparkhilfe-Sensoren",
        "360° Kamera-Systeme",
      ],
    },
  ];

  const technologyHighlights = [
    {
      icon: Cpu,
      title: "Hella Gutmann Technologie",
      description:
        "Mit der führenden Kalibrierlösung von Hella Gutmann gewährleisten wir höchste Präzision und Zuverlässigkeit bei jeder Kalibrierung.",
    },
    {
      icon: Target,
      title: "OEM-konforme Kalibrierung",
      description:
        "Wir arbeiten nach den exakten Vorgaben der Fahrzeughersteller und stellen sicher, dass alle Systeme perfekt funktionieren.",
    },
    {
      icon: Zap,
      title: "Schnelle Durchführung",
      description:
        "Dank modernster Technik und Erfahrung führen wir Kalibrierungen effizient durch – ohne Kompromisse bei der Qualität.",
    },
    {
      icon: ThumbsUp,
      title: "Sicherheit garantiert",
      description:
        "Ihre Sicherheit steht an erster Stelle. Nach der Kalibrierung funktionieren alle Assistenzsysteme einwandfrei.",
    },
  ];

  const whyCalibration = [
    {
      icon: Shield,
      title: "Sicherheit",
      description:
        "Fahrerassistenzsysteme sind entscheidend für Ihre Sicherheit. Eine falsche Kalibrierung kann zu Fehlfunktionen führen.",
    },
    {
      icon: CheckCircle2,
      title: "Gesetzliche Vorgaben",
      description:
        "Nach einem Scheibenwechsel ist die Kalibrierung oft gesetzlich vorgeschrieben und für die Zulassung notwendig.",
    },
    {
      icon: TrendingUp,
      title: "Fahrzeugwert",
      description:
        "Professionell kalibrierte Systeme erhalten den Wert Ihres Fahrzeugs und dokumentieren die fachgerechte Wartung.",
    },
    {
      icon: Users,
      title: "Schutz für alle",
      description:
        "Korrekt funktionierende Assistenzsysteme schützen nicht nur Sie, sondern auch andere Verkehrsteilnehmer.",
    },
  ];

  return (
    <div>
      <PageTitle
        title="ADAS Kamerakalibrierung"
        subtitle="Präzise Kalibrierung von Fahrerassistenzsystemen mit modernster Technologie"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen" },
          { label: "Kalibrierung" },
        ]}
        backgroundImage="/images/slider/DSC09793.jpg"
      />

      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - What We Offer */}
            <div>
              <Badge className="mb-4">
                <Camera className="w-3 h-3 mr-2" />
                Unsere Expertise
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Intelligente Fahrerassistenzsysteme
              </h2>
              <p className="text-muted-foreground mb-6">
                Die heutigen Fahrzeuge sind zunehmend mit intelligenten
                Fahrerassistenzsystemen ausgestattet. Daher ist ein einfacher
                Austausch der Scheiben oft nicht ausreichend. Mit höchster
                Präzision bauen wir Frontkamerasysteme aus und wieder ein.
              </p>
              <p className="text-muted-foreground mb-6">
                Um eine einwandfreie Funktion sicherzustellen, kalibrieren wir
                die Kamera mit modernster Technologie äußerst präzise. Ihre
                Sicherheit und die perfekte Funktion Ihres Fahrzeugs stehen
                dabei für uns an erster Stelle.
              </p>
              <p className="text-muted-foreground mb-8">
                Dank unserer <strong>Hella Gutmann Lösung</strong> führen wir
                präzise Kalibrierungen Ihrer Fahrerassistenzsysteme durch.
                Dadurch stellen wir sicher, dass Ihre Fahrzeugtechnologie exakt
                nach den OEM-Richtlinien eingestellt ist und optimal
                funktioniert. Ihre Sicherheit und Zufriedenheit sind unsere
                obersten Prioritäten.
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
              <h2 className="text-3xl font-bold mb-6">
                So läuft die Kalibrierung ab
              </h2>

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
        <section className="py-16 bg-muted/30 -mx-4 px-4">
          <div className="container mx-auto">
            <SectionTitle
              badge="Unsere Stärken"
              title="Präzision auf höchstem Niveau"
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

        {/* ADAS Systems Section */}
        <section className="py-16">
          <SectionTitle
            badge="ADAS Systeme"
            title="Welche Systeme kalibrieren wir?"
            subtitle="Moderne Fahrzeuge verfügen über zahlreiche Assistenzsysteme – wir kalibrieren sie alle professionell"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {adasSystems.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">
                    <system.icon className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{system.title}</CardTitle>
                  <CardDescription className="text-base">
                    {system.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {system.features.map((feature, idx) => (
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

        {/* Technology Highlights */}
        <section className="py-16 bg-muted/30 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Cpu className="w-3 h-3 mr-2" />
                Modernste Technologie
              </Badge>
              <h2 className="text-3xl font-bold">Warum Hella Gutmann?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {technologyHighlights.map((highlight, index) => (
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

        {/* Why Calibration is Important */}
        <section className="py-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-3 h-3 mr-2" />
              Wichtigkeit
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Warum ist Kalibrierung so wichtig?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nach einem Scheibenwechsel ist die Kalibrierung unverzichtbar für
              Ihre Sicherheit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCalibration.map((reason, index) => (
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

        {/* Image Gallery Carousel */}
        <section className="py-16 bg-muted/30 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-3 h-3 mr-2" />
                Unsere Werkstatt
              </Badge>
              <h2 className="text-3xl font-bold">
                Modernste Kalibrierungs-Technologie
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Embla Carousel */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2"
                    >
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-video relative">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background h-10 w-10 -ml-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background h-10 w-10 -mr-5"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Slide Indicators */}
              <div className="flex gap-2 justify-center mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      selectedIndex === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    )}
                    aria-label={`Bild ${index + 1} anzeigen`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Häufige Fragen
              </Badge>
              <h2 className="text-3xl font-bold">Was Sie wissen sollten</h2>
            </div>

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
                  Wann ist eine Kalibrierung notwendig?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Eine Kalibrierung ist nach jedem Austausch der
                    Windschutzscheibe erforderlich, wenn Ihr Fahrzeug über
                    Fahrerassistenzsysteme verfügt. Auch nach Unfällen oder bei
                    Fehlermeldungen im System sollte eine Kalibrierung
                    durchgeführt werden.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Wie lange dauert eine ADAS-Kalibrierung?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Die Dauer hängt vom Fahrzeugmodell und den verbauten
                    Systemen ab. In der Regel dauert eine Kalibrierung zwischen
                    1-3 Stunden. Bei komplexen Systemen kann es auch länger
                    dauern. Wir informieren Sie vorab über die voraussichtliche
                    Dauer.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Was ist das Besondere an Hella Gutmann?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Hella Gutmann ist einer der führenden Anbieter für
                    Kalibrierungstechnik. Das System ermöglicht präzise
                    Kalibrierungen nach OEM-Vorgaben für alle gängigen
                    Fahrzeugmarken. Die Technologie wird regelmäßig aktualisiert
                    und entspricht immer den neuesten Standards.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Welche Assistenzsysteme können kalibriert werden?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Wir kalibrieren alle gängigen Fahrerassistenzsysteme:
                    Spurhalteassistent, Notbremsassistent, Adaptive Cruise
                    Control, Verkehrszeichenerkennung, Totwinkel-Assistent,
                    Nachtsicht-Systeme und viele mehr. Sprechen Sie uns an – wir
                    beraten Sie gerne.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Übernimmt die Versicherung die Kosten?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Bei einer Kaskoversicherung werden die Kosten für die
                    Kalibrierung nach einem Scheibenaustausch in der Regel
                    übernommen. Wir rechnen direkt mit Ihrer Versicherung ab und
                    kümmern uns um alle Formalitäten.
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
                  <Camera className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Kalibrierung benötigt?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Vereinbaren Sie jetzt einen Termin für die professionelle
                  Kalibrierung Ihrer Fahrerassistenzsysteme. Wir beraten Sie
                  gerne!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="tel:071424695720">
                      <Phone className="mr-2 h-5 w-5" />
                      07142 / 4695720
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/kontakt">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Online-Termin vereinbaren
                    </Link>
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
