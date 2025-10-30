import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";
import {
  Menu,
  Search,
  Phone,
  ChevronDown,
  MapPin,
  Wrench,
  Shield,
  Award,
  Info,
  PhoneCall,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "~/lib/utils";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Wrench,
      name: "Reparatur",
      href: "/autoglas/reparatur",
      description: "Schnelle Steinschlag-Reparatur",
    },
    {
      icon: Shield,
      name: "Austausch",
      href: "/autoglas/austausch",
      description: "Professioneller Scheibenwechsel",
    },
    {
      icon: Award,
      name: "Kalibrierung",
      href: "/autoglas/kalibrierung",
      description: "Fahrerassistenzsysteme",
    },
  ];

  const locations = [
    {
      name: "Herrenberg",
      href: "/standorte/herrenberg",
      description: "Ihr Autoglas-Experte in Herrenberg",
    },
    {
      name: "Bietigheim-Bissingen",
      href: "/standorte/bietigheim-bissingen",
      description: "Ihr Autoglas-Experte in Bietigheim",
    },
  ];

  const company = [
    {
      icon: Info,
      name: "Über uns",
      href: "/uber-uns",
      description: "Erfahren Sie mehr über Winglass",
    },
    {
      icon: Star,
      name: "10 Gründe",
      href: "/10-grunde",
      description: "Warum Winglass die richtige Wahl ist",
    },
    {
      icon: Award,
      name: "Referenzen",
      href: "/referenzen",
      description: "Zufriedene Kunden berichten",
    },
    {
      icon: Info,
      name: "Wissenswert",
      href: "/wissenswert",
      description: "Nützliche Informationen rund ums Autoglas",
    },
    {
      icon: Phone,
      name: "Kontakt",
      href: "/kontakt",
      description: "Nehmen Sie Kontakt mit uns auf",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/95 shadow-sm h-14"
          : "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 h-16"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Winglass Logo"
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-8" : "h-10"
            )}
          />
        </Link>

        {/* Desktop Menu & CTA - Right Side */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Startseite
          </Link>

          {/* Services Mega Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveMenu("services")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary">
              Leistungen
              <ChevronDown className="h-4 w-4" />
            </button>

            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[600px] rounded-xl shadow-2xl bg-background border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                "before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:border-8 before:border-transparent before:border-b-background"
              )}
            >
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="group/item p-4 rounded-lg hover:bg-accent transition-all"
                    >
                      <service.icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-1 group-hover/item:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link
                    to="/versicherungsabwicklung"
                    className="text-sm text-primary hover:underline flex items-center gap-2"
                  >
                    <Shield className="h-4 w-4" />
                    Versicherungsabwicklung
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Locations Mega Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveMenu("locations")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary">
              Unsere Standorte
              <ChevronDown className="h-4 w-4" />
            </button>

            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[500px] rounded-xl shadow-2xl bg-background border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                "before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:border-8 before:border-transparent before:border-b-background"
              )}
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <Link
                      key={location.name}
                      to={location.href}
                      className="group/item p-4 rounded-lg hover:bg-accent transition-all"
                    >
                      <MapPin className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-1 group-hover/item:text-primary transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {location.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link
                    to="/standorte"
                    className="text-sm text-primary hover:underline flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Alle Standorte anzeigen
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Company Mega Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveMenu("company")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary">
              Über Winglass
              <ChevronDown className="h-4 w-4" />
            </button>

            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[600px] rounded-xl shadow-2xl bg-background border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                "before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:border-8 before:border-transparent before:border-b-background"
              )}
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group/item p-4 rounded-lg hover:bg-accent transition-all"
                    >
                      <item.icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-1 group-hover/item:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/kontakt"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Kontakt
          </Link>

          {/* CTA Button */}
          <Button
            asChild
            size={isScrolled ? "default" : "lg"}
            className="transition-all"
          >
            <a href="/schaden-prüfen">
              <Phone className="mr-2 h-4 w-4" />
              Schaden prüfen
            </a>
          </Button>
        </div>

        {/* Mobile Menu - Shadcn Sheet */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0" onInteractOutside={(e) => e.preventDefault()}>
            <div className="flex flex-col h-full">
              {/* Logo Header */}
              <div className="px-6 py-6 border-b">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Winglass Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Scrollable Menu Content */}
              <div className="px-6 py-8 space-y-6 flex-1 overflow-y-auto">
                {/* Mobile Services */}
                <div>
                  <h3 className="text-xs font-bold mb-3 text-muted-foreground uppercase tracking-widest">
                    Services
                  </h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-3 rounded-lg hover:bg-accent transition-all group"
                      >
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                    <Link
                      to="/versicherungsabwicklung"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 text-sm text-primary hover:underline text-center mt-2"
                    >
                      Versicherungsabwicklung
                    </Link>
                  </div>
                </div>

                <Separator />

                {/* Mobile Locations */}
                <div>
                  <h3 className="text-xs font-bold mb-3 text-muted-foreground uppercase tracking-widest">
                    Standorte
                  </h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <Link
                        key={location.name}
                        to={location.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-all group"
                      >
                        <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {location.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {location.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/standorte"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 text-sm text-primary hover:underline text-center mt-2"
                    >
                      Alle Standorte anzeigen
                    </Link>
                  </div>
                </div>

                <Separator />

                {/* Mobile Company */}
                <div>
                  <h3 className="text-xs font-bold mb-3 text-muted-foreground uppercase tracking-widest">
                    Unternehmen
                  </h3>
                  <div className="space-y-2">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-3 rounded-lg hover:bg-accent transition-all group"
                      >
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />
              </div>

              {/* Bottom CTA - Fixed at bottom */}
              <div className="border-t px-6 py-4">
                <Button asChild className="w-full" size="lg">
                  <Link to="/schaden-prüfen" onClick={() => setMobileMenuOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    Schaden prüfen
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
