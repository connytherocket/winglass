"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";

const slides = [
  {
    id: 1,
    title: "Professioneller Autoglas-Service",
    subtitle: "Schnelle Reparatur & Austausch",
    description: "Wir bieten professionellen Service für Windschutzscheibenwechsel in modernen Räumlichkeiten. Meisterwerkstatt mit modernster Technik.",
    ctaText: "Termin vereinbaren",
    ctaLink: "/kontakt",
    secondaryCtaText: "Jetzt anrufen",
    secondaryCtaLink: "tel:071424695720",
    backgroundImage: "/images/slider/DSC09741.jpg", // Optional
    backgroundColor: "bg-gradient-to-br from-primary/10 via-background to-primary/5",
  },
  {
    id: 2,
    title: "Steinschlag-Reparatur",
    subtitle: "In nur 30 Minuten",
    description: "Wir reparieren Steinschläge schnell und professionell. In der Regel übernimmt Ihre Versicherung die Kosten komplett.",
    ctaText: "Mehr erfahren",
    ctaLink: "/autoglas/reparatur",
    secondaryCtaText: "Standorte",
    secondaryCtaLink: "/standorte/herrenberg",
    backgroundImage: "/images/slider/DSC09828.jpg", // Optional
    backgroundColor: "bg-gradient-to-br from-blue-50 via-background to-blue-100 dark:from-blue-950 dark:to-background",
  },
  {
    id: 3,
    title: "Modernste Kalibrierung",
    subtitle: "Für Ihre Fahrerassistenzsysteme",
    description: "Präzise Kalibrierung Ihrer Frontkamera nach dem Scheibenwechsel. Mit neuester Technik für höchste Sicherheit.",
    ctaText: "Kalibrierung buchen",
    ctaLink: "/autoglas/kalibrierung",
    secondaryCtaText: "Mehr erfahren",
    secondaryCtaLink: "/10-grunde",
    backgroundImage: "/images/slider/DSC09793.jpg", // Kein Bild
    backgroundColor: "bg-gradient-to-br from-slate-50 via-background to-slate-100 dark:from-slate-950 dark:to-background",
  },
];

export function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

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

  return (
    <div className="relative w-full">
      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className={cn(
                "relative h-[500px] md:h-[800px] lg:h-[900px] flex items-center overflow-hidden",
                slide.backgroundColor
              )}>
                {/* Background Image (if available) */}
                {slide.backgroundImage && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                    />
                    {/* Dark Veil Overlay - Reactbits */}
                    <div className="absolute inset-0 bg-black/50" />
                    <div 
                      className="absolute inset-0" 
                      style={{
                        backgroundImage: `
                          radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
                        `
                      }}
                    />
                  </>
                )}

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                    {/* Subtitle Badge */}
                    <div className="inline-block mb-4">
                      <span className={cn(
                        "px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border",
                        slide.backgroundImage 
                          ? "bg-white/10 text-white border-white/20" 
                          : "bg-primary/10 text-primary border-primary/20"
                      )}>
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className={cn(
                      "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700",
                      slide.backgroundImage && "text-white"
                    )}>
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className={cn(
                      "text-lg md:text-xl mb-8 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150",
                      slide.backgroundImage ? "text-white/90" : "text-muted-foreground"
                    )}>
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                      <Button asChild size="lg" className="shadow-lg">
                        <Link to={slide.ctaLink}>
                          {slide.ctaText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="shadow-lg backdrop-blur-sm">
                        {slide.secondaryCtaLink.startsWith('tel:') ? (
                          <a href={slide.secondaryCtaLink}>
                            <Phone className="mr-2 h-5 w-5" />
                            {slide.secondaryCtaText}
                          </a>
                        ) : (
                          <Link to={slide.secondaryCtaLink}>
                            {slide.secondaryCtaText}
                          </Link>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background h-12 w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background h-12 w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}