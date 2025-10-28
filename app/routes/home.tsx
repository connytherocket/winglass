import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Checkbox } from "~/components/ui/checkbox";
import { Badge } from "~/components/ui/badge";
import { Shield, Clock, Award, Wrench, Phone, CheckCircle2, Car, Zap, Star, MapPin, Mail, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Slider } from "./slider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Winglass - Ihr Autoglas Spezialist | Windschutzscheiben Reparatur & Austausch" },
    { name: "description", content: "Professioneller Service für Windschutzscheibenwechsel in modernen Räumlichkeiten. Meisterwerkstatt mit modernster Technik in der Kalibrierung der Assistenzsysteme." },
  ];
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const services = [
    {
      icon: Car,
      title: "Scheibenaustausch",
      description: "Wir bieten professionellen Service für Windschutzscheibenwechsel an. Unsere Fachkräfte sind spezialisiert auf präzise Ausführung und höchste Qualität.",
      href: "/autoglas/austausch",
    },
    {
      icon: Wrench,
      title: "Steinschlagreparatur",
      description: "Wir reparieren Steinschläge in nur etwa einer halben Stunde, und in der Regel übernimmt Ihre Versicherung die Kosten.",
      href: "/autoglas/reparatur",
    },
    {
      icon: Award,
      title: "Kalibrierung",
      description: "Wir kalibrieren Ihre Frontkamera, um die Funktionalität des Fahrzeugs zu gewährleisten.",
      href: "/autoglas/kalibrierung",
    },
  ];

  const features = [
    {
      icon: Car,
      title: "Ersatzfahrzeug oder Hol- und Bringservice",
      description: "Entdecken Sie unseren bequemen Service: Ersatzfahrzeug oder Hol- und Bringservice – Ihre Mobilität ist unsere Priorität!",
    },
    {
      icon: Shield,
      title: "Abwicklung mit der Versicherung",
      description: "Erledigen Sie alles bequem und einfach: Wir übernehmen die Abwicklung mit Ihrer Versicherung.",
    },
    {
      icon: CheckCircle2,
      title: "Reparatur nach Herstellervorgaben",
      description: "Wir führen alle Reparaturen nach den exakten Vorgaben des Herstellers durch, um höchste Qualität und Sicherheit zu gewährleisten.",
    },
    {
      icon: Star,
      title: "Sauberes Fahrzeug zurück!",
      description: "Genießen Sie ein sauberes Fahrzeug: Wir geben Ihr Auto makellos zurück!",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <Slider />

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Unsere Leistungen</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alles rund um Ihr Autoglas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der schnellen Reparatur bis zum kompletten Austausch – wir bieten alle Services rund um Ihr Autoglas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" asChild className="group-hover:text-primary">
                    <Link to={service.href}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Unser Service</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unser Service auf einen Blick
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="flex gap-4">
                    <feature.icon className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="mt-2">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Kontakt</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kontaktieren Sie uns
              </h2>
              <p className="text-lg text-muted-foreground">
                Haben Sie Fragen oder möchten einen Termin vereinbaren? Unser Team steht Ihnen gerne zur Verfügung.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Kontaktformular</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      E-Mail <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Nachricht <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      required
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    />
                    <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
                      Ich bin damit einverstanden, dass diese Daten zum Zwecke der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann. <span className="text-destructive">*</span>
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Telefon</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:071424695720" className="text-muted-foreground hover:text-primary transition-colors">
                    07142 / 4695720
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">E-Mail</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@winglass.de" className="text-muted-foreground hover:text-primary transition-colors">
                    info@winglass.de
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Adresse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Asperger Str. 22<br />
                    74321 Bietigheim-Bissingen
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Öffnungszeiten</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Mo – Fr: 09:00 – 18:00<br />
                    Sa: 10:00 – 15:00<br />
                    So: Geschlossen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Zap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Steinschlag? Wir helfen sofort!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Kontaktieren Sie uns für eine schnelle und professionelle Reparatur. Termine meist innerhalb von 24 Stunden verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:071424695720">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/kontakt">Online Kontaktformular</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
