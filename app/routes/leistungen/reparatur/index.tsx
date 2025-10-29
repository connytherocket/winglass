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
  MapPin,
  Calendar,
  Car,
  Star,
  CircleCheck,
  AlertCircle,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "~/lib/utils";

export function meta() {
  return [
    { title: "Steinschlag & Autoglas Reparatur – Winglass" },
    {
      name: "description",
      content:
        "Schnelle und fachgerechte Reparatur von Steinschlägen und kleinen Beschädigungen an Windschutzscheiben. Meist kurz vor Ort, oft kostenfrei über die Versicherung.",
    },
  ];
}

export default function Reparatur() {
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
      alt: "Professionelle Steinschlag-Reparatur",
    },
    {
      src: "/images/Bilder/GT3RS/IMG_5515.JPG",
      alt: "Moderne Werkstatt-Ausstattung",
    },
    {
      src: "/images/Bilder/LKW/IMG_5016.JPG",
      alt: "LKW Reparatur",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "30 Minuten",
      description: "Durchschnittliche Reparaturdauer",
    },
    {
      icon: Euro,
      title: "Kostenfrei",
      description: "Bei Teilkasko-Versicherung",
    },
    { icon: Award, title: "Garantie", description: "Auf alle Reparaturen" },
    {
      icon: Calendar,
      title: "Ohne Termin",
      description: "Einfach vorbeikommen",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: AlertCircle,
      title: "Schaden erkennen",
      description:
        "Steinschlag oder Riss in der Windschutzscheibe festgestellt",
    },
    {
      number: "02",
      icon: Phone,
      title: "Kontakt aufnehmen",
      description: "Anrufen oder Online-Termin vereinbaren",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Reparatur durchführen",
      description: "Fachgerechte Reparatur nach Herstellervorgaben",
    },
    {
      number: "04",
      icon: CircleCheck,
      title: "Abnahme & Abrechnung",
      description: "Qualitätskontrolle und direkte Versicherungsabwicklung",
    },
  ];

  const benefits = [
    "Keine Selbstbeteiligung bei Teilkasko",
    "Erhalt der Schadenfreiheitsklasse",
    "Keine Wertminderung des Fahrzeugs",
    "Schnelle Terminvergabe",
    "Professionelle Versicherungsabwicklung",
    "Zertifizierte Fachkräfte",
  ];

  return (
    <div>
      <PageTitle
        title="Steinschlag-Reparatur"
        subtitle="Professionelle Autoglas-Reparatur in 30 Minuten"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen" },
          { label: "Reparatur" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - What We Offer */}
            <div>
              <Badge className="mb-4">
                <Wrench className="w-3 h-3 mr-2" />
                Unsere Leistung
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Steinschlag-Reparatur vom Profi
              </h2>
              <p className="text-muted-foreground mb-8">
                Ein Steinschlag ist ärgerlich, aber in den meisten Fällen können
                wir Ihre Windschutzscheibe reparieren, ohne sie komplett
                austauschen zu müssen. Das spart Zeit, Geld und schont die
                Umwelt.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{benefit}</span>
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
              <h2 className="text-3xl font-bold mb-6">So funktioniert's</h2>

              <div className="space-y-3">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold mb-1">{step.title}</h3>
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
        {/* Image Gallery Carousel */}
        <section className="py-16">
          <div>
            <SectionTitle
              badge="Unsere Werkstatt"
              title="Professionelle Ausstattung"
            />

            <div className="relative mx-auto">
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
                  Übernimmt meine Versicherung die Kosten für die
                  Steinschlag-Reparatur?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Bei Teilkasko-Versicherung übernehmen wir die Abwicklung
                    komplett. In der Regel keine Selbstbeteiligung und keine
                    Hochstufung. Wir rechnen direkt mit Ihrer Versicherung ab
                    und kümmern uns um alle Formalitäten.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Wie lange dauert eine Steinschlag-Reparatur?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Eine Steinschlag-Reparatur dauert in der Regel 20-40
                    Minuten. Sie können gerne warten oder wir bieten Ihnen einen
                    Ersatzwagen an. Nach der Reparatur ist Ihr Fahrzeug sofort
                    wieder einsatzbereit.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Ist die Windschutzscheibe nach der Reparatur wieder
                  vollständig belastbar?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Ja! Nach fachgerechter Reparatur ist die Scheibe wieder
                    vollständig belastbar. Die Reparatur ist nahezu unsichtbar
                    und die Stabilität der Scheibe wird vollständig
                    wiederhergestellt.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger>
                  Wo befinden sich Ihre Werkstätten und kann ich ohne Termin
                  vorbeikommen?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Wir haben Standorte in Bietigheim-Bissingen und Herrenberg.
                    Beide mit modernen Werkstätten und kostenfreien Parkplätzen
                    direkt vor Ort. Sie können gerne ohne Termin vorbeikommen
                    oder vorab anrufen.
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
                  Steinschlag reparieren lassen?
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
