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
  const [animationKey, setAnimationKey] = useState(0);
  
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
    setAnimationKey(prev => prev + 1); // Trigger new animations
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
                "relative h-screen sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] flex items-center overflow-hidden",
                slide.backgroundColor
              )}>
                {/* Background Image (if available) */}
                {slide.backgroundImage && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center animate-ken-burns"
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
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                  <div className="max-w-3xl">
                    {/* Subtitle Badge */}
                    <div className="inline-block mb-3 sm:mb-4">
                      <span 
                        key={`badge-${slide.id}-${animationKey}`}
                        className={cn(
                          "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm border animate-slide-up-fade",
                          slide.backgroundImage 
                            ? "bg-white/10 text-white border-white/20" 
                            : "bg-primary/10 text-primary border-primary/20"
                        )}
                        style={{ animationDelay: '0.1s' }}
                      >
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 
                      key={`title-${slide.id}-${animationKey}`}
                      className={cn(
                        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight animate-slide-up-fade",
                        slide.backgroundImage && "text-white"
                      )}
                      style={{ animationDelay: '0.3s' }}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p 
                      key={`desc-${slide.id}-${animationKey}`}
                      className={cn(
                        "text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-2xl animate-slide-up-fade",
                        slide.backgroundImage ? "text-white/90" : "text-muted-foreground"
                      )}
                      style={{ animationDelay: '0.5s' }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div 
                      key={`buttons-${slide.id}-${animationKey}`}
                      className="flex flex-row gap-3 sm:gap-4 animate-slide-up-fade"
                      style={{ animationDelay: '0.7s' }}
                    >
                      <Button asChild size="lg" className="shadow-lg text-base sm:text-lg">
                        <Link to={slide.ctaLink}>
                          <span className="truncate">{slide.ctaText}</span>
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="shadow-lg backdrop-blur-sm text-base sm:text-lg">
                        {slide.secondaryCtaLink.startsWith('tel:') ? (
                          <a href={slide.secondaryCtaLink}>
                            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                            <span className="truncate">{slide.secondaryCtaText}</span>
                          </a>
                        ) : (
                          <Link to={slide.secondaryCtaLink}>
                            <span className="truncate">{slide.secondaryCtaText}</span>
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

      {/* Navigation Buttons - Desktop only */}
      <div className="absolute inset-y-0 left-0 right-0 hidden lg:flex items-center justify-between pointer-events-none px-4">
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
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation",
              selectedIndex === index ? "w-6 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-primary/30 hover:bg-primary/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}