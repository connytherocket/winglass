import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import PageTitle from "~/components/page-title";
import { LocationMap } from "~/components/location-map";
import { Send, Phone, MapPin, Mail, MessageCircle } from "lucide-react";

export function meta() {
  return [
    { title: "Kontakt – Jetzt Termin vereinbaren | Winglass" },
    {
      name: "description",
      content:
        "Kontaktieren Sie Winglass für professionellen Autoglas-Service. Standorte in Bietigheim-Bissingen und Herrenberg.",
    },
  ];
}

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    standort: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <PageTitle
        title="Kontakt"
        subtitle="Wir sind für Sie da – schreiben Sie uns"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über Winglass" },
          { label: "Kontakt" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4">
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              

              {/* Kontaktformular */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Senden Sie uns eine Nachricht
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Ihr vollständiger Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="ihre.email@beispiel.de"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Ihre Telefonnummer"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="standort">Bevorzugter Standort</Label>
                      <select
                        id="standort"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={formData.standort}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            standort: e.target.value,
                          })
                        }
                      >
                        <option value="">Bitte wählen</option>
                        <option value="bietigheim">Bietigheim-Bissingen</option>
                        <option value="herrenberg">Herrenberg</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Ihre Nachricht *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Pflichtfelder
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Kontaktinformationen */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Telefon</p>
                        <a
                          href="tel:071424695720"
                          className="text-primary hover:underline"
                        >
                          07142 / 4695720
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <a
                          href="https://wa.me/491234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Nachricht senden
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">E-Mail</p>
                        <a
                          href="mailto:anfrage@winglass.de"
                          className="text-primary hover:underline"
                        >
                          anfrage@winglass.de
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <LocationMap />
                
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
