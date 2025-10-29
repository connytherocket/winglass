import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Separator } from "~/components/ui/separator";
import PageTitle from "~/components/page-title";
import {
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Info,
  RotateCw,
} from "lucide-react";

export function meta() {
  return [
    { title: "Schaden prüfen – Winglass Autoglas-Service" },
    {
      name: "description",
      content:
        "Prüfen Sie Ihren Glasschaden und erfahren Sie, ob eine Reparatur oder ein Austausch nötig ist. Schnelle Hilfe von Winglass.",
    },
  ];
}

type GlassType = "windschutzscheibe" | "heckscheibe" | "seitenscheibe" | null;
type DamageType = "steinschlag" | "riss" | null;
type Result = "reparatur" | "austausch" | null;

export default function SchadenPruefen() {
  const [step, setStep] = useState(1);
  const [glassType, setGlassType] = useState<GlassType>(null);
  const [damageType, setDamageType] = useState<DamageType>(null);
  const [result, setResult] = useState<Result>(null);
  const [showContact, setShowContact] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleGlassTypeSelect = (type: GlassType) => {
    console.log("handleGlassTypeSelect called with:", type);
    setGlassType(type);
    if (type === "windschutzscheibe") {
      setStep(2);
    } else {
      // Bei Heck- und Seitenscheibe direkt Austausch
      setResult("austausch");
      setStep(4);
    }
  };

  const handleDamageTypeSelect = (type: DamageType) => {
    setDamageType(type);
    if (type === "steinschlag") {
      // Bei Steinschlag kann repariert werden (abhängig von Position)
      setResult("reparatur");
      setStep(3);
    } else if (type === "riss") {
      // Bei Riss immer Austausch
      setResult("austausch");
      setStep(4);
    }
  };

  const handleReparaturEntscheidung = (isRepairable: boolean) => {
    if (isRepairable) {
      setResult("reparatur");
    } else {
      setResult("austausch");
    }
    setStep(4);
  };

  const resetForm = () => {
    setStep(1);
    setGlassType(null);
    setDamageType(null);
    setResult(null);
    setShowContact(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactData);
    // Hier würde die Formular-Logik implementiert werden
  };

  return (
    <div>
      <PageTitle
        title="Schaden prüfen"
        subtitle="Finden Sie heraus, ob eine Reparatur oder ein Austausch nötig ist"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Schaden prüfen" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-16 ${step >= 2 ? "bg-primary" : "bg-muted"}`}
              />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 2
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                2
              </div>
              <div
                className={`h-1 w-16 ${step >= 3 ? "bg-primary" : "bg-muted"}`}
              />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 3
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <div
                className={`h-1 w-16 ${step >= 4 ? "bg-primary" : "bg-muted"}`}
              />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 4
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                4
              </div>
            </div>
          </div>

          {/* Step 1: Art der Scheibe */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Welche Scheibe ist beschädigt?</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Wählen Sie die beschädigte Scheibe aus
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bildergalerie der Scheiben */}
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => handleGlassTypeSelect("windschutzscheibe")}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full">
                      <img
                        src="/images/schaden/Front.png"
                        alt="Windschutzscheibe"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg">
                      Windschutzscheibe
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGlassTypeSelect("heckscheibe")}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full">
                      <img
                        src="/images/schaden/Heck.png"
                        alt="Heckscheibe"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg">Heckscheibe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGlassTypeSelect("seitenscheibe")}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full">
                      <img
                        src="/images/schaden/Seite.png"
                        alt="Seitenscheibe"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg">Seitenscheibe</span>
                  </button>
                </div>

                {/* Info Text */}
                {glassType && (
                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>
                        {glassType === "windschutzscheibe" &&
                          "Windschutzscheibe ausgewählt"}
                        {glassType === "heckscheibe" &&
                          "Heckscheibe ausgewählt"}
                        {glassType === "seitenscheibe" &&
                          "Seitenscheibe ausgewählt"}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Schadensart (nur bei Windschutzscheibe) */}
          {step === 2 && glassType === "windschutzscheibe" && (
            <Card>
              <CardHeader>
                <CardTitle>Welche Art von Schaden liegt vor?</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Wählen Sie die Art der Beschädigung
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleDamageTypeSelect("steinschlag")}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full">
                      <img
                        src="/images/schaden/Steinschlag.png"
                        alt="Steinschlag"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <span className="font-semibold text-lg block">
                        Steinschlag
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Kleine punktuelle Beschädigung
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDamageTypeSelect("riss")}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full">
                      <img
                        src="/images/schaden/Riss.png"
                        alt="Riss"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <span className="font-semibold text-lg block">Riss</span>
                      <span className="text-sm text-muted-foreground">
                        Längere Beschädigung/Sprung
                      </span>
                    </div>
                  </button>
                </div>

                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Steinschlag - Reparaturprüfung */}
          {step === 3 && damageType === "steinschlag" && (
            <Card>
              <CardHeader>
                <CardTitle>Größe des Steinschlags prüfen</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Vergleichen Sie die Größe Ihres Steinschlags mit einer
                  2-Euro-Münze
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bild mit 2-Euro-Münze */}
                <div className="flex justify-center">
                  <img
                    src="/images/schaden/euro.png"
                    alt="Größenvergleich mit 2-Euro-Münze"
                    className="max-w-md w-full rounded-lg border-2 border-muted"
                  />
                </div>

                {/* Frage */}
                <div className="text-center">
                  <p className="mb-6 font-semibold text-lg">
                    Ist Ihr Steinschlag größer als eine 2-Euro-Münze?
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
                    <Button
                      variant="outline"
                      className="h-auto py-6"
                      onClick={() => handleReparaturEntscheidung(false)}
                    >
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                      Nein, kleiner
                      <span className="block text-xs text-muted-foreground mt-1">
                        Reparatur möglich
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-6"
                      onClick={() => handleReparaturEntscheidung(true)}
                    >
                      <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                      Ja, größer
                      <span className="block text-xs text-muted-foreground mt-1">
                        Austausch nötig
                      </span>
                    </Button>
                  </div>
                </div>

                <Button variant="ghost" onClick={() => setStep(2)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Ergebnis & Kontakt */}
          {step === 4 && result && (
            <div className="space-y-6">
              {/* Ergebnis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {result === "reparatur" ? (
                      <>
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        Reparatur möglich
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-6 h-6 text-orange-600" />
                        Austausch empfohlen
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {result === "reparatur" ? (
                    <div className="space-y-3">
                      <p className="text-lg">
                        Ihr Glasschaden kann voraussichtlich repariert werden!
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Vorteile der Reparatur:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Dauer: nur ca. 30 Minuten
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Oft komplett von Versicherung übernommen
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Umweltfreundlich - keine neue Scheibe nötig
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            10 Jahre Garantie auf Reparatur
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-lg">
                        Ein Austausch der{" "}
                        {glassType === "windschutzscheibe"
                          ? "Windschutzscheibe"
                          : glassType === "heckscheibe"
                            ? "Heckscheibe"
                            : "Seitenscheibe"}{" "}
                        ist notwendig.
                      </p>
                      {damageType === "riss" && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Info className="w-5 h-5 text-orange-600" />
                            Wichtige Hinweise bei Rissen
                          </h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <strong className="text-orange-800">
                                Ist Fahren trotz Riss erlaubt?
                              </strong>
                              <p className="mt-1">
                                Grundsätzlich ja, aber der Riss kann sich
                                ausweiten. Wir empfehlen zeitnahen Austausch für
                                Ihre Sicherheit.
                              </p>
                            </div>
                            <div>
                              <strong className="text-orange-800">
                                Ist eine Reparatur möglich?
                              </strong>
                              <p className="mt-1">
                                Nein, bei Rissen ist leider keine Reparatur
                                möglich – nur ein Austausch der Scheibe.
                              </p>
                            </div>
                            <div>
                              <strong className="text-orange-800">
                                Kostenübernahme durch Versicherung?
                              </strong>
                              <p className="mt-1">
                                Mit Teilkasko wird der Austausch meist
                                übernommen (ggf. abzüglich Ihrer
                                Selbstbeteiligung).
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Unser Service:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            <strong>
                              Buchung bis 16 Uhr → Montage am Folgetag möglich
                            </strong>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            Komplette Versicherungsabwicklung
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            Originalqualität garantiert
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            Inkl. Kamerakalibrierung bei Bedarf
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <Separator />

                  <div className="flex gap-4">
                    <Button onClick={resetForm} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Neue Prüfung
                    </Button>
                    <Button onClick={() => setShowContact(true)}>
                      Jetzt Kontakt aufnehmen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Kontaktmöglichkeiten */}
              {!showContact && (
                <Card>
                  <CardHeader>
                    <CardTitle>Jetzt Kontakt aufnehmen</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Wählen Sie Ihren bevorzugten Kontaktweg
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col gap-2 hover:bg-primary/5"
                        asChild
                      >
                        <a href="tel:071424695720">
                          <Phone className="w-6 h-6 text-primary" />
                          <span className="font-semibold">Anrufen</span>
                          <span className="text-sm text-muted-foreground">
                            07142 / 4695720
                          </span>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col gap-2 hover:bg-primary/5"
                        asChild
                      >
                        <a
                          href="https://wa.me/491234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-6 h-6 text-primary" />
                          <span className="font-semibold">WhatsApp</span>
                          <span className="text-sm text-muted-foreground">
                            Direkt chatten
                          </span>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col gap-2 hover:bg-primary/5"
                        onClick={() => setShowContact(true)}
                      >
                        <Mail className="w-6 h-6 text-primary" />
                        <span className="font-semibold">Formular</span>
                        <span className="text-sm text-muted-foreground">
                          Nachricht senden
                        </span>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col gap-2 hover:bg-primary/5"
                        asChild
                      >
                        <a href="/ueberwinglass/kontakt">
                          <Calendar className="w-6 h-6 text-primary" />
                          <span className="font-semibold">Termin buchen</span>
                          <span className="text-sm text-muted-foreground">
                            Jederzeit möglich
                          </span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Kontaktformular */}
              {showContact && (
                <Card>
                  <CardHeader>
                    <CardTitle>Kontaktformular</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            required
                            value={contactData.name}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={contactData.phone}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={contactData.email}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Nachricht</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder={`Schaden: ${
                            glassType === "windschutzscheibe"
                              ? "Windschutzscheibe"
                              : glassType === "heckscheibe"
                                ? "Heckscheibe"
                                : "Seitenscheibe"
                          }${
                            damageType
                              ? ` - ${damageType === "steinschlag" ? "Steinschlag" : "Riss"}`
                              : ""
                          }\nEmpfehlung: ${result === "reparatur" ? "Reparatur" : "Austausch"}\n\nIhre Nachricht...`}
                          value={contactData.message}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowContact(false)}
                        >
                          Abbrechen
                        </Button>
                        <Button type="submit">
                          <Mail className="w-4 h-4 mr-2" />
                          Nachricht senden
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
