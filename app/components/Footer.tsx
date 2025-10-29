import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";

export function Footer() {
  const serviceLinks = [
    { name: "Autoglas Reparatur", href: "/autoglas/reparatur" },
    { name: "Autoglas Austausch", href: "/autoglas/austausch" },
    { name: "Kalibrierung", href: "/autoglas/kalibrierung" },
    { name: "Versicherungsabwicklung", href: "/versicherungsabwicklung" },
  ];

  const companyLinks = [
    { name: "Über uns", href: "/uber-uns" },
    { name: "10 Gründe", href: "/10-grunde" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Wissenswert", href: "/wissenswert" },
    { name: "Unser Standort", href: "/standorte" },
  ];

  const legalLinks = [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutzerklärung", href: "/datenschutzerklaerung" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <Link to="/" className="inline-block">
                <img 
                  src="/logo.png" 
                  alt="Winglass Logo" 
                  className="h-12 w-auto mb-4"
                />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ihr professioneller Partner für Windschutzscheiben-Reparatur und KFZ-Autoglas-Service mit modernster Technologie und höchster Qualität.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <a 
                href="tel:071424695720" 
                className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-accent transition-colors group"
              >
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <div className="text-xs text-muted-foreground">Rufen Sie uns an</div>
                  <div className="font-medium">07142 / 4695720</div>
                </div>
              </a>

              <a 
                href="mailto:info@winglass.de" 
                className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-accent transition-colors group"
              >
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <div className="text-xs text-muted-foreground">E-Mail</div>
                  <div className="font-medium">info@winglass.de</div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://www.instagram.com/winglass.de/" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              Unsere Leistungen
              <Badge variant="secondary" className="text-xs">Services</Badge>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & CTA */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Mo – Fr: 09:00 – 18:00</div>
                  <div className="text-muted-foreground text-xs">Sa: 10:00 – 15:00</div>
                  <div className="text-muted-foreground text-xs">So: Geschlossen</div>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Benötigen Sie einen Termin?
              </p>
              <Button asChild className="w-full">
                <Link to="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Winglass. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
