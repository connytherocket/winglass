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
  Wrench,
  Euro,
  Calendar,
  Car,
  Star,
  CircleCheck,
  AlertCircle,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Settings,
  Camera,
  Truck,
  Users,
  FileCheck,
  Zap,
  Target,
  ThumbsUp,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "~/lib/utils";

export function meta() {
  return [
    { title: "Professioneller Scheibenaustausch – Winglass" },
    {
      name: "description",
      content:
        "Schneller und fachgerechter Austausch von Windschutzscheiben, Seitenscheiben und Heckscheiben. Inklusive Kalibrierung und Versicherungsabwicklung.",
    },
  ];
}

export default function Austausch() {
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
      alt: "BMW 4er Scheibenaustausch",
    },
    {
      src: "/images/Bilder/G-Klasse/IMG_3972.JPG",
      alt: "Mercedes G-Klasse Windschutzscheibe",
    },
    {
      src: "/images/Bilder/E-Klasse/IMG_5066.JPG",
      alt: "Mercedes E-Klasse Service",
    },
    {
      src: "/images/slider/DSC09741.jpg",
      alt: "Professionelle Werkstatt",
    },
    {
      src: "/images/slider/DSC09793.jpg",
      alt: "Moderne Ausstattung",
    },
    {
      src: "/images/slider/DSC09828.jpg",
      alt: "Qualitätsservice",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Innerhalb 24h",
      description: "Schneller Austausch",
    },
    {
      icon: Shield,
      title: "Versicherung",
      description: "Komplette Abwicklung",
    },
    {
      icon: Camera,
      title: "Kalibrierung",
      description: "Präzise Kamerasysteme",
    },
    {
      icon: Car,
      title: "Ersatzwagen",
      description: "Bleiben Sie mobil",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: Phone,
      title: "Kontaktaufnahme",
      description: "Rufen Sie uns an oder vereinbaren Sie online einen Termin",
    },
    {
      number: "02",
      icon: FileCheck,
      title: "Schadensaufnahme",
      description:
        "Wir prüfen den Schaden und klären mit Ihrer Versicherung ab",
    },
    {
      number: "03",
      icon: Settings,
      title: "Scheibenaustausch",
      description: "Professioneller Austausch mit hochwertigen Materialien",
    },
    {
      number: "04",
      icon: Camera,
      title: "Kalibrierung",
      description: "Präzise Kalibrierung der Frontkamera und Assistenzsysteme",
    },
    {
      number: "05",
      icon: CircleCheck,
      title: "Qualitätskontrolle",
      description: "Abschließende Prüfung und Übergabe Ihres Fahrzeugs",
    },
  ];

  const benefits = [
    "Austausch aller Autoscheiben (Windschutz-, Seiten-, Heckscheibe)",
    "Verwendung hochwertiger Originalscheiben",
    "Modernste Werkzeuge und Technologien",
    "Fachkenntnisse stets auf dem neuesten Stand",
    "Langjährige Erfahrung garantiert Qualität",
    "Präzise Kalibrierung von Frontkamerasystemen",
    "Komplette Versicherungsabwicklung",
    "Ersatzwagen während der Reparatur",
  ];

  const serviceHighlights = [
    {
      icon: Target,
      title: "Präzise Ausführung",
      description:
        "Jeder Scheibenaustausch wird mit höchster Präzision durchgeführt, um perfekte Passform und Dichtigkeit zu gewährleisten.",
    },
    {
      icon: Award,
      title: "Zertifizierte Qualität",
      description:
        "Wir verwenden ausschließlich hochwertige Materialien und arbeiten nach Herstellervorgaben.",
    },
    {
      icon: Zap,
      title: "Schneller Service",
      description:
        "In den meisten Fällen ist Ihr Fahrzeug bereits am selben Tag wieder einsatzbereit.",
    },
    {
      icon: ThumbsUp,
      title: "Kundenzufriedenheit",
      description:
        "Ihre Zufriedenheit und Sicherheit stehen für uns an erster Stelle. Das bestätigen unsere Kunden.",
    },
  ];

  const scheibenTypes = [
    {
      title: "Windschutzscheibe",
      description:
        "Professioneller Austausch mit präziser Kalibrierung der Fahrerassistenzsysteme",
      icon: Shield,
      features: [
        "Frontkamera-Kalibrierung",
        "Regensensor-Integration",
        "Head-Up-Display kompatibel",
      ],
    },
    {
      title: "Seitenscheibe",
      description:
        "Schneller Austausch von Türscheiben und Dreiecksfenstern aller Fahrzeugtypen",
      icon: Car,
      features: [
        "Elektrische Fensterheber",
        "Getönte Scheiben",
        "Alle Fahrzeugmarken",
      ],
    },
    {
      title: "Heckscheibe",
      description:
        "Fachgerechter Einbau inklusive Heizung und Antennenintegration",
      icon: Wrench,
      features: [
        "Heckscheibenheizung",
        "Antennen-Integration",
        "Scheibenwischer-Montage",
      ],
    },
  ];

  return (
    <div>
      <PageTitle
        title="Scheibenaustausch"
        subtitle="Professioneller Austausch aller Autoscheiben innerhalb von 24 Stunden"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen" },
          { label: "Austausch" },
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
                <Settings className="w-3 h-3 mr-2" />
                Unsere Leistung
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Scheibenaustausch vom Profi
              </h2>
              <p className="text-muted-foreground mb-6">
                Wir stehen Ihnen zur Seite, egal welche Autoscheibe betroffen
                ist – sei es die Windschutz-, Seiten- oder Heckscheibe. Unser
                Team tauscht die Scheibe innerhalb eines Tages aus, verwendet
                dabei hochwertige Materialien und moderne Werkzeuge.
              </p>
              <p className="text-muted-foreground mb-8">
                Unsere Fachkenntnisse sind stets auf dem neuesten Stand, und
                unsere langjährige Erfahrung garantiert einen erfolgreichen
                Austausch. Wir kümmern uns auch um die genaueste Kalibrierung
                von Frontkamerasystemen. Die Abwicklung mit Ihrer Versicherung
                übernehmen wir gerne für Sie, während Sie mobil bleiben können –
                dank unseres Ersatzwagens. Ihre Sicherheit und Zufriedenheit
                stehen für uns an erster Stelle.
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
            </div>

            {/* Right Column - Process */}
            <div>
              <Badge variant="secondary" className="mb-4">
                <Star className="w-3 h-3 mr-2" />
                Ablauf
              </Badge>
              <h2 className="text-3xl font-bold mb-6">So funktioniert's</h2>

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
            <SectionTitle badge="Unsere Vorteile" title="Warum Winglass?" />

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

        {/* Scheiben Types Section */}
        <section className="py-16">
          <SectionTitle
            badge="Unsere Leistungen"
            title="Alle Autoscheiben - Ein Ansprechpartner"
            subtitle="Von der Windschutzscheibe bis zur Heckscheibe – wir sind Ihr Experte für alle Fahrzeugscheiben"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {scheibenTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">
                    <type.icon className="w-12 h-12 text-primary" />
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
              title="Darauf können Sie sich verlassen"
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

        {/* Image Gallery Carousel */}
        <section className="py-16">
          <div>
            <SectionTitle
              badge="Unsere Werkstatt"
              title="Professionelle Ausstattung"
            />

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
                  Wie lange dauert ein Scheibenaustausch?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    In den meisten Fällen ist der Austausch innerhalb von 2-4
                    Stunden abgeschlossen. Bei komplexen Systemen mit
                    Kalibrierung kann es bis zu einem Tag dauern. Ihr Fahrzeug
                    ist in der Regel am selben Tag wieder einsatzbereit.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Übernimmt meine Versicherung die Kosten?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Bei Teil- oder Vollkaskoversicherung werden die Kosten in
                    der Regel übernommen. Wir kümmern uns um die komplette
                    Abwicklung mit Ihrer Versicherung und beraten Sie gerne zu
                    allen Fragen rund um die Kostenübernahme.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Was ist eine Frontkamera-Kalibrierung?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Moderne Fahrzeuge haben Assistenzsysteme, deren Kameras in
                    der Windschutzscheibe integriert sind. Nach einem
                    Scheibentausch müssen diese Systeme neu kalibriert werden,
                    um einwandfrei zu funktionieren. Wir verfügen über die
                    neueste Kalibriertechnik für alle Fahrzeugmarken.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Bekomme ich einen Ersatzwagen?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Ja, wir bieten Ihnen während der Reparaturzeit einen
                    Ersatzwagen an, damit Sie mobil bleiben. Alternativ können
                    Sie auch gerne in unseren modernen Räumlichkeiten warten –
                    WLAN und Getränke stehen kostenlos zur Verfügung.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Verwendet ihr Original-Scheiben?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Wir verwenden ausschließlich hochwertige Scheiben, die den
                    Herstellervorgaben entsprechen. Je nach Wunsch und
                    Versicherungsdeckung können wir Original-Scheiben oder
                    gleichwertige Qualitätsscheiben einbauen. Wir beraten Sie
                    gerne individuell.
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
                  <Phone className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Scheibe austauschen lassen?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Vereinbaren Sie jetzt einen Termin oder rufen Sie uns direkt
                  an. Wir beraten Sie gerne und kümmern uns um alles Weitere.
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
