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
type DamageLocation = 1 | 2 | 3 | null;
type Result = "reparatur" | "austausch" | null;

export default function SchadenPruefen() {
  const [step, setStep] = useState(1);
  const [glassType, setGlassType] = useState<GlassType>(null);
  const [damageType, setDamageType] = useState<DamageType>(null);
  const [damageLocation, setDamageLocation] = useState<DamageLocation>(null);
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
      // Bei Steinschlag - erst Position prüfen
      setStep(3);
    } else if (type === "riss") {
      // Bei Riss immer Austausch
      setResult("austausch");
      setStep(5);
    }
  };

  const handleLocationSelect = (location: DamageLocation) => {
    console.log("=== BEREICH GEKLICKT ===");
    console.log("Ausgewählter Bereich:", location);
    console.log("Bereich-Beschreibung:", 
      location === 1 ? "Weniger als 5 cm vom Rand" :
      location === 2 ? "Fahrersichtfeld (über dem Lenkrad)" :
      location === 3 ? "Restlicher Bereich" : "Unbekannt"
    );
    console.log("========================");
    
    setDamageLocation(location);
    // Nach Auswahl der Position zur Größenprüfung
    setStep(4);
  };

  const handleReparaturEntscheidung = (isSmallerThan2Euro: boolean) => {
    if (isSmallerThan2Euro) {
      setResult("reparatur");
    } else {
      setResult("austausch");
    }
    setStep(5);
  };

  const resetForm = () => {
    setStep(1);
    setGlassType(null);
    setDamageType(null);
    setDamageLocation(null);
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
                className={`h-1 w-12 ${step >= 2 ? "bg-primary" : "bg-muted"}`}
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
                className={`h-1 w-12 ${step >= 3 ? "bg-primary" : "bg-muted"}`}
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
                className={`h-1 w-12 ${step >= 4 ? "bg-primary" : "bg-muted"}`}
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
              <div
                className={`h-1 w-12 ${step >= 5 ? "bg-primary" : "bg-muted"}`}
              />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 5
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                5
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
                <div className="grid md:grid-cols-3 gap-6">
                  <button
                    type="button"
                    onClick={() => handleGlassTypeSelect("windschutzscheibe")}
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full aspect-square">
                      <img
                        src="/images/schaden/Front.png"
                        alt="Windschutzscheibe"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg">
                      Windschutzscheibe
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGlassTypeSelect("heckscheibe")}
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full aspect-square">
                      <img
                        src="/images/schaden/Heck.png"
                        alt="Heckscheibe"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg">Heckscheibe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGlassTypeSelect("seitenscheibe")}
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full aspect-square">
                      <img
                        src="/images/schaden/Seite.png"
                        alt="Seitenscheibe"
                        className="w-full h-full object-cover"
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
                <div className="grid md:grid-cols-2 gap-6">
                  <button
                    type="button"
                    onClick={() => handleDamageTypeSelect("steinschlag")}
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full aspect-square">
                      <img
                        src="/images/schaden/Steinschlag.png"
                        alt="Steinschlag"
                        className="w-full h-full object-cover"
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
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all w-full aspect-square">
                      <img
                        src="/images/schaden/Riss.png"
                        alt="Riss"
                        className="w-full h-full object-cover"
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

          {/* Step 3: Steinschlag - Position auswählen */}
          {step === 3 && damageType === "steinschlag" && (
            <Card>
              <CardHeader>
                <CardTitle>Wo befindet sich der Steinschlag?</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Wählen Sie den Bereich aus, in dem sich der Schaden befindet
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Interaktive SVG-Grafik */}
                <div className="flex justify-center">
                  <svg
                    version="1.1"
                    viewBox="0 0 1768 832"
                    width="442"
                    height="208"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <style>{`
                      .yellow-area {
                        cursor: pointer;
                        transition: fill 0.3s ease;
                      }
                      .yellow-area:hover {
                        fill: rgba(255, 212, 0, 0.5) !important;
                      }
                    `}</style>
                    <path
                      transform="translate(0)"
                      d="m0 0h1768v832h-1768z"
                      fill="#F7F8F7"
                    />
                    <path
                      transform="translate(118,171)"
                      d="m0 0h31l13 2 13 4 9 5 7 7 6 12 3 12 1 7v31l-3 17-4 10-6 9v3l9 13 5 8 4-2 13-10 15-9 13-7 17-6 9-3 14-3 1-1 14-2 74-6 21-2 34-2 8-1 89-5 31-2 129-4 93-2h209l101 1 21 1 40 1 15 1 48 1 9 1 83 4 21 2 33 1 20 2 46 3 18 2 29 2 20 3 27 5 15 5 16 8 15 8 12 8 11 9 15 14 11 13 13 18 7 10 8 12 13 19 6 9 5 7 6 11 6 9 6 11 6 9 6 11 9 16 10 18 6 11 28 56 5 13 7 14 5 11v34l-2-1-9-22-4-9-6-12-5-13-7-13-4-10-8-15-9-19-5-9-6-10-5-12-6-8-3-7-4-6-6-11-6-9-6-11-7-11-6-10-1-4h-2l-2-6h-2l-6-10-8-12v-2h-2l-6-10-11-16-1-3h-2v-3h-2l-4-6-5-6v-2l-4-2-6-7-16-14-14-10-6-3-11-6-8-3-6-3-16-5-13-2-3-1-16-2-26-2-14-1-16-2-32-2-18-2-25-1-20-2-68-4-35-1-10-1-72-3-57-1-21-1-48-1h-250l-86 2-84 3-67 3-82 5-56 4-73 6-4 1-22 2-19 4-4 2-9 2-7 3-16 8-10 6h-2v2l-8 5h-2v2l-6 4 2 5 2 3 4-2 7-6 4-1 2 10v9l35-3 100-4 118-4 71-2 20-1 129-2h306l83 1 179 4 165 5 50 2 37 1 19 1 17 4 15 9v2l4 2 8 9 7 11 6 11 12 25 8 15 6 14 7 14 3 7 7 15 4 10 7 15 6 17 2 4v4h2l3 8 5 12 2 9 4 8 14 40 8 24 6 20 5 18 3 9 2 9 6 24v7l-3 3h-23l-235-11-269-9-160-3h-226l-157 3-295 9-109 4-92 4-60 3h-25l-2-2v-10l8-28 1-8 3-6 5-18 2-7 3-10 6-17 5-17 2-6 3-10 2-3 2-7 3-7 7-19 4-10 3-9 4-10 5-11 4-9 2-6 2-5h2l1-7 6-12 5-13 4-6 8-20h2l2-5 4-8 4-10 6-12h2l1-6 6-11 7-10 7-8h2l-4-4-10-5 2-4 10-7-2-7h-4l-1 4-8 7-8 10-13 19-6 8-9 14-3 4-1 3-5 5-5 9h-2l-4 10-3 2-2 5-2 2-1 4-3 3-1 4-3 2-2 5-2 2-1 4-4 4-3 7h-2l-2 7-4 6h-2l-3 9-6 9-3 8-6 9-3 7-4 6-4 10-18 36-8 17-5 12-9 20-5 14-2 2-3 7-6 15-2-2v-34l4-6 5-13 7-16 2-2 2-7h2l1-7 6-10 2-7 8-16 10-17 7-14 8-15 11-22 3-1 2-7h2l1-5h2l2-7 3-1 2-7h2l1-5h2l2-7 3-1 2-6 5-8 7-12 10-14 4-7h2l2-6 7-9 15-22 13-16 12-12-1-5-10-14-3-5-5 1-14 5-12 2h-35l-13-3-11-4-10-8-8-13-4-17v-37l2-11 3-11 6-10 8-7 10-5z"
                      fill="#CDB10A"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(2)}
                    />
                    <path
                      transform="translate(868,361)"
                      d="m0 0h28l2 1v2h28l3-3 27 1 5 2h23l2 2h16l11 1 1-4 3 1 26 1v2h29v-2l5 1h16l6-1 2 2h27l2-2 5 2h24l1 1h26l2-2 3 1 25 1v3l28-1 1-1h29l1 2h58v3l17-1 10 2v-4l3 1 26 1v2h30v-2l14 2h9l5-1 3 2h12l14 1 1-3 12 2 18 1 1 1 14 1h13l5 5 8 7 5 7 9 20 6 10 9 21 5 15 6 14 6 12 6 14v8h2l8 21 2 1 6 16 4 13 4 10 4 13 3 5 8 24 2 9 5 16 9 27v5h-9l-24-6-17-4-9-3-62-13-43-8-44-7-8-7-10-13-15-15-10-8-14-10-9-6-6-3-1-4 26-1 3 1 26 1 1 1 8-1 1-12 1-2v-26l-1-26h3l-1-27-1-1-1-23 1-3 1-23 1-4h-2l-1-3-1-12-10-6-17-5-14-2-22-6-16-3h-8l-10-2-15-1v-2h-49l-4 1-3-1-22 1-2 2-21 3h-12l-17 3-8 3-16 4-14 2-15 5-5 3-18 6h-6l-8 3-12 5-4 4-21 8-10 3-1 15v67l1 29 1 2-1 21v30l1 1v11l-1 11-1 1v26l-8 1-7 2-20 3-3 1-22 1h-31v-2l-28 1-1 1h-29v-2h-28v2h-28v-2h-30v2l-11 1h-18v-2l-27 1-2 2h-29l-1-2-28-1v3h-25v-13l-5-44-1-16 34-1 17-4 16-8 7-8 5-12 3-15v-38l-4-16-6-11-9-8-11-5-19-4h-25l-16 2-10 2-11 6h-2l-1-3 2-1-11-1h-155l-23 1-15 2-11 4-6 7-5 15-10 45-7 44-3 25-4 46v18h-9v-2l-4 1h-25v3l-28 1-1-2-28 1v2l-16 1h-13v-2l-28 2-2 1-28 2-1-3-3 1-25 1-1 2h-12l-17 1v-2l-25 2-5 1-1-1 1-8 5-16 6-20 4-16 4-15 3-4 8-22 1-5 3-8 5-15 3-4 7-18h2l-1-6 2-2 6-16 4-10 8-16 3-10 10-25 4-6 9-20 3-8 10-17 9-4 15-5h4v-2l24-1v2l24-1 3-1 1-2 3 1h18l8-1 1 1h28v-3l3 1 26-1 1 3 5-1h23l1-4 5 2 16-1 6-1v3l8-1 21-1 1-2h24l4-1 1 3h28v-4l5 1h14l9-1 1 1h30l1-2 20 1 7-2 1 3 28-1 2-3 2 1h27v2h27l1-4 3 1h26v3h28l1-5 3 2h25l1 2 29-1 2-3 1 2h19l6 1z"
                      fill="#CCCECE"
                    />
                    <path
                      transform="translate(118,171)"
                      d="m0 0h31l13 2 13 4 9 5 7 7 6 12 3 12 1 7v31l-3 17-4 10-6 9v3l9 13 5 8 4-2 13-10 15-9 13-7 17-6 9-3 14-3 1-1 14-2 74-6 21-2 34-2 8-1 89-5 31-2 129-4 93-2h209l101 1 21 1 40 1 15 1 48 1 9 1 83 4 21 2 33 1 20 2 46 3 18 2 29 2 20 3 27 5 15 5 16 8 15 8 12 8 11 9 15 14 11 13 13 18 7 10 8 12 13 19 6 9 5 7 6 11 6 9 6 11 6 9 6 11 9 16 10 18 6 11 28 56 5 13 7 14 5 11v34l-2-1-9-22-4-9-6-12-5-13-7-13-4-10-8-15-9-19-5-9-6-10-5-12-6-8-3-7-4-6-6-11-6-9-6-11-7-11-6-10-1-4h-2l-2-6h-2l-6-10-8-12v-2h-2l-6-10-11-16-1-3h-2v-3h-2l-4-6-5-6v-2l-4-2-6-7-16-14-14-10-6-3-11-6-8-3-6-3-16-5-13-2-3-1-16-2-26-2-14-1-16-2-32-2-18-2-25-1-20-2-68-4-35-1-10-1-72-3-57-1-21-1-48-1h-250l-86 2-84 3-67 3-82 5-56 4-73 6-4 1-22 2-19 4-4 2-9 2-7 3-16 8-10 6h-2v2l-8 5h-2v2l-6 4 2 5 2 3 4-2 7-6 4-1 2 10v9l35-3 100-4 118-4 71-2 20-1 129-2h306l83 1 179 4 165 5 50 2 37 1 19 1 17 4 15 9v2l4 2 8 9 7 11 6 11 12 25 8 15 6 14 7 14 3 7 7 15 4 10 7 15 6 17 2 4v4h2l3 8 5 12 2 9 4 8 14 40 8 24 6 20 5 18 3 9 2 9 6 24v7l-3 3h-23l-235-11-269-9-160-3h-226l-157 3-295 9-109 4-92 4-60 3h-25l-2-2v-10l8-28 1-8 3-6 5-18 2-7 3-10 6-17 5-17 2-6 3-10 2-3 2-7 3-7 7-19 4-10 3-9 4-10 5-11 4-9 2-6 2-5h2l1-7 6-12 5-13 4-6 8-20h2l2-5 4-8 4-10 6-12h2l1-6 6-11 7-10 7-8h2l-4-4-10-5 2-4 10-7-2-7h-4l-1 4-8 7-8 10-13 19-6 8-9 14-3 4-1 3-5 5-5 9h-2l-4 10-3 2-2 5-2 2-1 4-3 3-1 4-3 2-2 5-2 2-1 4-4 4-3 7h-2l-2 7-4 6h-2l-3 9-6 9-3 8-6 9-3 7-4 6-4 10-18 36-8 17-5 12-9 20-5 14-2 2-3 7-6 15-2-2v-34l4-6 5-13 7-16 2-2 2-7h2l1-7 6-10 2-7 8-16 10-17 7-14 8-15 11-22 3-1 2-7h2l1-5h2l2-7 3-1 2-7h2l1-5h2l2-7 3-1 2-6 5-8 7-12 10-14 4-7h2l2-6 7-9 15-22 13-16 12-12-1-5-10-14-3-5-5 1-14 5-12 2h-35l-13-3-11-4-10-8-8-13-4-17v-37l2-11 3-11 6-10 8-7 10-5zm822 160-82 1-2 1-190 1h-34v1l-10 1-102 2-58 2-16 1-69 2v-1h-27l-22 3h-12v-1h-18l-23 3-38 3-1 4 1 9-12-5-4 2-7 6-6 10-11 23-10 17-8 18-7 16-9 17-11 27-9 21-9 22-7 21-8 19-12 38-7 20-9 32-5 16-6 18v6h48l13-1 32-1 17-1 50-1 35-2 51-2 65-2 26-1 48-1 84-3 100-2 61-2 90-1h232l125 2 44 1 19 1 95 2 10 1 45 1 20 1 37 1 15 1 92 3 33 2 39 1 62 3 13 1h15l9-1 3-2v-11l-5-16-6-15-4-13-3-17-6-16-9-23-2-12-7-18-6-12-6-15-2-11-8-18-8-16-5-14-6-16-7-12-8-16-8-19-8-15-6-10-10-21-4-5-11-8-18-6-14-4-56-1-12-1-41-1-6-1-105-2-18-2-50-1h-48l-22-1-41-1-8-1-168-1-5-1v-1z"
                      fill="#030203"
                    />
                    <path
                      transform="translate(940,331)"
                      d="m0 0h11v1l5 1 168 1 8 1 41 1 22 1h48l50 1 18 2 105 2 6 1 41 1 12 1 56 1 21 6 13 5 11 9 8 16 9 17 6 10 7 15 9 21 9 15 6 14 5 16 8 16 7 15 3 9 2 9 8 20 6 12 5 15 1 8 10 25 6 18 3 17 6 17 5 12 3 11v7h-2l-1 3-4-1-1-2-4-1 1-4 2-2-1-7-2-2v-3l-11-1-17-3h-6l-2-8-4-3-10-30-6-19-2-9-7-21-3-4-3-11-4-10-4-13-5-12v-4l-3-1-6-16-1-5h-2l-2-10-10-23-6-12-3-7-2-10-5-10-5-12-6-10-9-20-8-10-10-8h-12l-14-1-1-1-26-2-4-1-1 2h-26l-4-2-4 1h-9l-12-2-2-1v2h-30v-2h-26l-3-2v4l-18-1h-9v-3l-5 1h-53l-1-3-4 1h-25l-2 1h-27v-3h-25-4l-1 1h-26l-1-1h-24l-5-2-2 2h-27l-3-2-5 1h-16l-5-2v2h-29v-2h-26l-3-2-1 4h-27l-2-2h-23l-5-2-29-1-1 3h-26l-2-1v-2h-30l-2 4-7-1h-18-2l-1 1-29 1-1-3-2 1h-23l-2-2-2 4h-28v-3l-4 1h-22l-3-2-1 4h-27v-2l-7 1h-20l-2-1-2 3h-28l-2-2-6 2-17-1-3-1-1 3h-30l-2-1-8 1h-14l-5-2v4h-28l-1-2-7 1h-18l-3-1-1 3-29 1v-3l-6 2-18 1-3-2-1 3-28 1-1-2-26 1-3-2v3l-11 1h-17l-3-1-6 1h-18l-3-2-1 3-9 1h-18v-2l-21 2-3-1v2l-18 5-4 3-5 1-8 13-4 8-4 11-12 24-8 20-3 10-8 16-9 22-2 5-1 2v5h-2l-1 5-6 15-2 3-7 21-2 4-3 11-6 15-2 2-7 25-4 16-5 15-4 14 1 9v3l-18 2-6 1-2 5v4l2 1-1 3-9 3-5 1v2l-8 1 3-16 5-15 7-24 4-15 7-20 13-41 8-19 9-26 11-25 12-30 8-16 11-24 9-20 12-21 11-23 5-6 7-6 9 3 5 2-1-12 1-1 38-3 23-3h18v1h12l22-3h27l3 1 66-2 16-1 58-2 102-2 10-1v-1h61l163-1 2-1z"
                      fill="#E5C904"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(1)}
                    />
                    <path
                      transform="translate(686,452)"
                      d="m0 0h25l19 4 14 7 7 7 6 11 4 16v38l-3 15-5 12-8 9-16 8-17 4-33 1 3 34 3 25v11l-1 2h-2l-1 2-1-3-19 1h-10l-1 2h-28l-2-1h-27l-1 3-28-1h-18l-12 1-26 1h-3-29l-1 2h-27l-4-1-21 1-5 1h-20l-1-1v-16l5-57 7-46 6-31 8-33 4-10 8-7 9-3 15-2 23-1h155l12 1-2 5 13-7 14-3z"
                      fill="#A7A8A7"
                    />
                    <path
                      transform="translate(712,652)"
                      d="m0 0 25 1 1 3 4-1h25l2-2h27l1 1h28v-2h30v2h28v-2h28v2l2-1h27l1-1h28v2h30l1 1 17 1h11v-2l2-1h24l4 3 27 1 1-3h28l2 4h27l2-3h23l3 1 1 2 5 1h25l2-2h11l15 1 2 3 29 1 1-4 17 1 9 1 1 2 8 1h21l3-2 25 1 2 4h29l1-3 5-1 22 3 3 2h26l2-1h26l2 3 8 1 20 1 1-5 27 2 2 3 6 1 23 1 1-3 26 1 2 3 27 1 3-3 17 1 8 1 5 3 21 1-2-7-2-3 4 2 1 2v6l8-1 26 5 4 8v5l-3 2-1 3 5 1 1 2h3l1-2h2l-1 5-2 1-9 1h-15l-30-2-45-2-39-1-33-2-92-3-15-1-37-1-20-1-45-1-10-1-95-2-19-1-169-3h-237l-85 1-61 2-104 2-80 3-48 1-53 2-64 2-48 2-12 1-50 1-17 1-32 1-13 1h-48l1-9 2-2-1 8h7v-2l7-3h6l1-3-1-1-2-4 4-6 6-2 18-2-1-5 5-2 25-1 1 1 16-1h12l4-2 25-1 1 2 28-2 2-1 16-1h12v2l13-1h16v-2l7-1 21-1 1 3 7-1h21v-3l29-1v2l9-1 20-1 5-1 24-1 4 1h24l1-1 11-1h18 3l26-1 12-1h18l28 1 1-2 28-1 2 1h27l1-1 13-1h16l1 2 1-1h27v-3z"
                      fill="#B59901"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(2)}
                    />
                    <path
                      transform="translate(1332,371)"
                      d="m0 0 1 3 17-1 10 2v-4l3 1 26 1v2h30v-2l14 2h9l5-1 3 2h12l14 1 1-3 12 2 18 1 1 1 14 1h13l5 5 8 7 5 7 9 20 6 10 9 21 5 15 6 14 6 12 6 14v8h2l8 21 2 1 6 16 4 13 4 10 4 13 3 5 8 24 2 9 5 16 9 27v5h-9l-24-6-17-4-9-3-62-13-43-8-44-7-8-7-10-13-15-15-10-8-14-10-9-6-6-3-1-4 26-1 3 1 26 1 1 1 8-1 1-12 1-2v-26l-1-26h3l-1-27-1-1-1-23 1-3 1-23 1-4h-2l-1-3-1-12-10-6-17-5-14-2-22-6-16-3h-8l-10-2-2-2-8-1-1-1z"
                      fill="#CCCECE"
                    />
                    <path
                      transform="translate(1272,376)"
                      d="m0 0 5 1 7-1h29l15 1v2h15l12 2 11 1 15 3 18 5 18 3 15 5 8 5 1 1 1 13v2h2l-1 27-1 4 1 22 1 1v27h-3l1 3 1 23v26l-1 2-1 12-4 2h-5l-5-1-22-1-4-1h-15v-2l-2-1-2-16-3-15-5-18-4-18-7-25-3-4-15-4-21-3-17-1 1 4 2 7h2l1 6 2 1h-2v2h2l4 12 1 1 2 11v12l-2 12-3 2-2-29-2-5-4-14-6-11-8-7-11-5-14-3-8-1h-24l-16 2-13 4-10 6-4 5-6 13-3 11-2 3-1-10-3 2 1-8 5-12 3-1-1-4h2v-2h2l1-5-19 1-24 4-12 4-8 5-3 11-4 30-3 29-3 28-2 15v9l-1 4-8 7-9 10-10 11-4 6-1 4 1 2 6 1v1l-18 2-5 2-2 3h-4l-1-27h2v-22l-1-1v-30l1-21-1-2-1-34v-62l1-15 7-3 16-6 10-4 4-4 13-5 18-4 15-5 5-3 17-5 14-2 17-5 8-2 11-2h12l21-3 2-2z"
                      fill="#E6CA04"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(3)}
                    />
                    <path
                      transform="translate(936,336)"
                      d="m0 0h45l13 1 61 1 114 1 90 3 69 1 41 2 82 2 30 1 14 1 38 1 15 2 15 4 13 10 8 16 9 17 6 10 7 15 9 21 9 15 6 14 5 16 8 16 7 15 3 9 2 9 8 20 6 12 5 15 1 8 10 25 6 18 3 17 6 17 5 12 3 11v7h-2l-1 3-4-1-1-2-4-1 1-4 2-2-1-7-2-2v-3l-11-1-17-3h-6l-2-8-4-3-10-30-6-19-2-9-7-21-3-4-3-11-4-10-4-13-5-12v-4l-3-1-6-16-1-5h-2l-2-10-10-23-6-12-3-7-2-10-5-10-5-12-6-10-9-20-8-10-10-8h-12l-14-1-1-1-26-2-4-1-1 2h-26l-4-2-4 1h-9l-12-2-2-1v2h-30v-2h-26l-3-2v4l-18-1h-9v-3l-5 1h-53l-1-3-4 1h-25l-2 1h-27v-3h-25-4l-1 1h-26l-1-1h-24l-5-2-2 2h-27l-3-2-5 1h-16l-5-2v2h-29v-2h-26l-3-2-1 4h-27l-2-2h-23l-5-2-19-1-7-2 1-2 2-5 2-15z"
                      fill="#E5C904"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(1)}
                    />
                    <path
                      transform="translate(1063,325)"
                      d="m0 0h32l179 4 165 5 50 2 37 1 19 1 17 4 15 9v2l4 2 8 9 7 11 6 11 12 25 8 15 6 14 7 14 3 7 7 15 4 10 7 15 6 17 2 4v4h2l3 8 5 12 2 9 4 8 14 40 8 24 6 20 5 18 3 9 2 9 6 24v7l-3 3h-23l-235-11-269-9-160-3h-226l-157 3-295 9-109 4-92 4-60 3h-25l-2-2v-10l8-28 1-8 3-6 5-18 2-7 3-10 6-17 5-17 2-6 3-10 2-3 2-7 3-7 7-19 4-10 3-9 4-10 5-11 4-9 2-6 2-5h2l1-7 6-12 5-13 4-6 8-20h2l2-5 4-8 4-10 6-12h2l1-6 6-11 7-10 7-8h2l1-2 4 1v2l5 2-2 4-6 5-6 10-11 23-10 17-8 18-7 16-9 17-11 27-9 21-9 22-7 21-8 19-12 38-7 20-9 32-5 16-6 18-1 6 48-1 13-1 32-1 17-1 50-1 35-2 51-2 65-2 26-1 48-1 84-3 100-2 61-2 90-1h232l125 2 44 1 19 1 95 2 10 1 45 1 20 1 37 1 15 1 92 3 33 2 39 1 62 3 13 1h15l9-1 2-1v-11l-5-16-6-15-4-13-3-17-6-16-9-23-2-12-7-18-6-12-6-15-2-11-8-18-8-16-5-14-6-16-7-12-8-16-8-19-8-15-6-10-10-21-5-5-9-7-18-6-14-4-56-1-12-1-41-1-6-1-105-2-18-2-50-1h-48l-22-1-41-1-8-1-168-1-15-1-1-1h-193v-1l185-2 13-2 118-1z"
                      fill="#232D3A"
                    />
                    <path
                      transform="translate(868,361)"
                      d="m0 0h28l2 1v2h28l3-3 27 1-1 5h-23l-1 9-2 13h19l63 1 13 1 2 1 11 1 2 2 1 17-1 18-3 15-7 11-7 7-10 6-7 3-6 1h-204l-12-3-8-4v-2h-3l-7-8-6-9-5-15-1-10v-21l4-7 5-2 49-2 50-1-2-19v-6l7 1z"
                      fill="#797B7A"
                    />
                    <path
                      transform="translate(1359,564)"
                      d="m0 0h17l1 5 5 1 6 5 5 3 10 7 14 11 17 17 9 12 6 5 55 9 42 8 52 11 13 4 34 8 12 2 1-3 3 4v5h-21l-5-3-19-2h-6l-3 3-27-1-2-3-26-1-3 3-21-1-7-2-1-3h-18l-9-2-1 5h-20l-8-1-3-3h-25l-2 1h-26l-3-2-25-3-3 4-29-1-3-3-24-1-3 2h-21l-8-1-1-3h-9l-17-1-1 3-4 1-25-1-2-3-15-1h-11l-2 2h-25l-6-2v-2l-26-1-2 4h-27l-2-5h-28l-1 4-27-1-4-3h-26v2l-12 1-16-1v-3l22-1 8-2 21-3 1-1h12l2-4 5-2h19l2 5 3 1h21l3-6h25l1 6h20l6 1v-6l1-1h24l1 1v5h25l2-6h25l2 5 10-1 5-1 5-10 6-9 6-11 2-6 5-6h2l2-4 5-5 3-5 18-11 9-1 18-6 8-4z"
                      fill="#838585"
                    />
                    <path
                      transform="translate(1238,452)"
                      d="m0 0h24l18 3 11 4 8 5 7 8 5 11 3 11 1 8v32l-3 16-4 9-6 9-9 7-12 5-11 2-12 1h-12l-21-2-12-3-8-4-10-9-5-8-4-14-2-16v-19l3-21 4-11 5-9 6-5 12-6 14-3z"
                      fill="#030203"
                    />
                    <path
                      transform="translate(686,452)"
                      d="m0 0h25l19 4 14 7 7 7 6 11 4 16v38l-3 15-5 12-8 9-16 8-8 2-12 1h-31l-15-3-16-8-7-8-5-11-4-18v-34l4-18 6-12 8-8 11-6 14-3z"
                      fill="#030203"
                    />
                    <path
                      transform="translate(1010,245)"
                      d="m0 0h81l21 1 40 1 15 1 48 1 9 1 83 4 21 2 33 1 20 2 46 3 18 2 29 2 20 3 27 5 15 5 16 8 15 8 12 8 11 9 15 14 11 13 13 18 7 10 8 12 13 19 6 9 5 7 6 11 6 9 6 11 6 9 6 11 9 16 10 18 6 11 28 56 5 13 7 14 5 11v34l-2-1-9-22-4-9-6-12-5-13-7-13-4-10-8-15-9-19-5-9-6-10-5-12-6-8-3-7-4-6-6-11-6-9-6-11-7-11-6-10-1-4h-2l-2-6h-2l-6-10-8-12v-2h-2l-6-10-11-16-1-3h-2v-3h-2l-4-6-5-6v-2l-4-2-6-7-16-14-14-10-6-3-11-6-8-3-6-3-16-5-13-2-3-1-16-2-26-2-14-1-16-2-32-2-18-2-25-1-20-2-68-4-35-1-10-1-72-3-57-1-21-1-48-1v-1l-22-1v-1l27-1h13l-4-1h-16l-9-2-2 1-4-2h-12l-2-2 1-2z"
                      fill="#2B3948"
                    />
                    <path
                      transform="translate(1063,325)"
                      d="m0 0h32l179 4 165 5 50 2 37 1 19 1 17 4 15 9v2l4 2 8 9 7 11 6 11 12 25 8 15 6 14 7 14 3 7 7 15 4 10 7 15 6 17 2 4v4h2l3 8 5 12 2 9 4 8 14 40 8 24 6 20 5 18 3 9 2 9 6 24v7l-3 3h-6l-12-3-28-1v-3l-3 1v-2l-3-2h27l9-1 2-1v-11l-5-16-6-15-4-13-3-17-6-16-9-23-2-12-7-18-6-12-6-15-2-11-8-18-8-16-5-14-6-16-7-12-8-16-8-19-8-15-6-10-10-21-5-5-9-7-18-6-14-4-56-1-12-1-41-1-6-1-105-2-18-2-50-1h-48l-22-1-41-1-8-1-168-1-15-1-1-1h-193v-1l185-2 13-2 118-1z"
                      fill="#2B3947"
                    />
                    <path
                      transform="translate(781,244)"
                      d="m0 0h209l20 1v1l-20 1v2h13l4 2 2-1 8 2h17l7 2v1h-25l7 1v1l-254 1-86 2-84 3-67 3-82 5-56 4-73 6-4 1-22 2-19 4-4 2-9 2-7 3-16 8-10 6h-2v2l-8 5h-2v2l-6 4-2 2-3-5-2-2v-3l-3-1 5-5 15-11 21-12 17-7 13-4 14-3 1-1 14-2 74-6 21-2 34-2 8-1 89-5 31-2 129-4z"
                      fill="#293746"
                    />
                    <path
                      transform="translate(1182,557)"
                      d="m0 0 3 1 1 5 2 1v4l10 10 12 1 1 3h9l13 2-3 2-13 5-16 5-16 8-13 8-6 5h-5l-2 6-3 3 3-1 30-2 43-2h26l4 4 3 1 1 7 7-14 7-9 4-2-1 7-9 16-3 3-3 6-4 4-8 2h-5l-2-5h-25l-1 5-4 1-22-1-1-5h-24l-1 6h-24l-3-3v-4l-25 1-2 5-1 1h-21l-4-2-1-4-14-1v-1l7-1-2-3 1-4 7-9 11-12 12-13h2l2-4 8-6 14-8 8-6 14-8 13-6 8-1z"
                      fill="#B69A01"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(3)}
                    />
                    <path
                      transform="translate(706,324)"
                      d="m0 0h306l51 1 6 1v1l-127 1-10 2-104 1h94v1l-64 1-2 1-190 1h-33v1l-11 1-102 2-58 2-16 1-74 2v-1h-22l-22 3h-23v-1l-16 1-14 2-39 3-3-11 35-3 100-4 118-4 71-2 20-1z"
                      fill="#2B2D31"
                    />
                    <path
                      transform="translate(213,352)"
                      d="m0 0 5 1v2l5 2-2 4-6 5-6 10-11 23-10 17-8 18-7 16-9 17-11 27-9 21-9 22-7 21-8 19-12 38-7 20-9 32-5 16-6 18-1 6 48-1 13-1 32-1 17-1 50-1 35-2 25-1h20v1l59 1 35 2v1l-167 6-92 4-60 3h-25l-2-2v-10l8-28 1-8 3-6 5-18 2-7 3-10 6-17 5-17 2-6 3-10 2-3 2-7 3-7 7-19 4-10 3-9 4-10 5-11 4-9 2-6 2-5h2l1-7 6-12 5-13 4-6 8-20h2l2-5 4-8 4-10 6-12h2l1-6 6-11 7-10 7-8h2z"
                      fill="#393C3E"
                    />
                    <path
                      transform="translate(940,331)"
                      d="m0 0h11v1l5 1 168 1 8 1 41 1 22 1h48l50 1 18 2 105 2 6 1 41 1 12 1 56 1 21 6 2 2-21-3-38-1-14-1-30-1-82-2-41-2-69-1-90-3-119-1-56-1-13-1-45-1-3 21-3 3 3 1-6 1-1 3h-26l-2-1v-2h-30l-2 4-8-1-2-24v-6l-60 1-93 1-82 2-97 2-86 3-38 1-62 3-58 2-35 2h-8l-1 2 1-4 38-3 23-3h18v1h12l22-3h27l3 1 66-2 16-1 58-2 102-2 10-1v-1h61l163-1 2-1z"
                      fill="#B69A01"
                      className="yellow-area"
                      onClick={() => handleLocationSelect(1)}
                    />
                    <path
                      transform="translate(1063,325)"
                      d="m0 0h32l179 4 165 5 50 2 37 1 2 2v4l9 2 9 3v3l-15-4-56-1-12-1-41-1-6-1-105-2-18-2-50-1h-48l-22-1-41-1-8-1-168-1-15-1-1-1h-193v-1l185-2 13-2 118-1z"
                      fill="#333638"
                    />





                    <path
                      transform="translate(198,315)"
                      d="m0 0 1 2h2l2 5 3 1v3l2 1h-3l-1 4-8 7-8 10-13 19-6 8-9 14-3 4-1 3-5 5-5 9h-2l-4 10-3 2-2 5-2 2-1 4-3 3-1 4-3 2-2 5-2 2-1 4-4 4-3 7h-2l-2 7-4 6h-2l-3 9-6 9-3 8-6 9-3 7-4 6-4 10-18 36-8 17-5 12-9 20-5 14-2 2-3 7-6 15-2-2v-34l4-6 5-13 7-16 2-2 2-7h2l1-7 6-10 2-7 8-16 10-17 7-14 8-15 11-22 3-1 2-7h2l1-5h2l2-7 3-1 2-7h2l1-5h2l2-7 3-1 2-6 5-8 7-12 10-14 4-7h2l2-6 7-9 15-22 13-16 12-12z"
                      fill="#2F3E4C"
                    />
                    <path
                      transform="translate(1311,587)"
                      d="m0 0 4 1-2 1 8 4 16 6 17 9 15 10v2l3 1v1l-47-2-42-1-2 1 1-5 3-8 5-6h2l2-4 5-5 9-3z"
                      fill="#A7A8A7"
                    />
                    <path
                      transform="translate(1076,328)"
                      d="m0 0 4 1 7-1 2 2-12 1 1 1 52-1h46l9 1v2h21l20 1h59l10-1h39l6 2h10l1 1v-1h8l4 1 1 2h94v2l6-1v2h16l6 1 49 1 10 3 2 3-2 1-14-4-56-1-12-1-41-1-6-1-105-2-18-2-50-1h-48l-22-1-41-1-8-1-81-1-4-2h35l-2-3 4 1z"
                      fill="#41423C"
                    />
                    <path
                      transform="translate(1071,640)"
                      d="m0 0h19l2 5 3 1h21l3-6h25v7l-2 3h2l1 3-2 6h-27l-2-5h-28l-1 4-27-1-4-3h-26v2l-12 1-16-1v-3l22-1 8-2 21-3 1-1h12l2-4z"
                      fill="#797B7A"
                    />
                    {/*2nd*/}
                    <path
                      transform="translate(1247,480)"
                      d="m0 0h7l8 3 6 5 3 6v10l-3 11-8 11-10 13-3 4h26v11l-1 1h-44v-12h2l2-5h2l2-4 12-15 7-14-1-10-2-1h-6l-4 8-2 2h-12v-9l6-9 7-4z"
                      fill="#F1F3F2"
                    />
                    {/*3rd*/}
                    <path
                      transform="translate(686,481)"
                      d="m0 0h15l7 4 5 7 1 4v8l-4 8-3 3v3l5 4 3 8v7l-2 6-6 8-8 3h-8l-9-2-5-5-4-8v-5h13l5 7h6l3-4v-8l-2-4-12-3v-10l9-3 4-3-1-11-2-2h-5l-4 6-2 1h-10l-1-5 4-8 6-5z"
                      fill="#F1F2F1"
                    />



                    {/*1st*/}
                    <path
                      transform="translate(142,199)"
                      d="m0 0h3v74h-14v-57l-10 5h-4v-10l4-3z"
                      fill="#F5F6F5"
                    />


                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <path
                      transform="translate(453,330)"
                      d="m0 0h16v1h47v2l-7 1h-13v1h-36l1-3-8-1z"
                      fill="#1A222F"
                    />
                    <path
                      transform="translate(1307,265)"
                      d="m0 0h18l19 1-2 2 6 1v1h-18l-45-3v-1z"
                      fill="#1D2736"
                    />
                    <path
                      transform="translate(1597,708)"
                      d="m0 0h49v1l-22 1-2 2h-25l-17-1-2-2z"
                      fill="#1A222F"
                    />
                    <path
                      transform="translate(1568,307)"
                      d="m0 0 2 1v2l5 2 2 4 8 4v2l4 2 9 9v4h-3l-5-6-16-14-10-7v-2z"
                      fill="#242934"
                    />
                    <path
                      transform="translate(1224,640)"
                      d="m0 0h25l1 5-1 1h-24l-2-2z"
                      fill="#15141E"
                    />
                    <path
                      transform="translate(1172,640)"
                      d="m0 0h24l1 1v5h-26v-5z"
                      fill="#15151F"
                    />
                    <path
                      transform="translate(1544,284)"
                      d="m0 0 6 2 17 9 6 4 2 4 3 1 2 5-3 1v-2l-5-2-11-8-6-3-2-4-6-4-3-1z"
                      fill="#1D2A3B"
                    />
                    <path
                      transform="translate(100,630)"
                      d="m0 0h1l-1 8-7 26-6 19-4 11-2-1 2-11 4-9 2-9 3-6 1-8 3-7 2-7z"
                      fill="#222933"
                    />
                    <path
                      transform="translate(773,361)"
                      d="m0 0h6l1 3-1 3h-28l1-5z"
                      fill="#202C3C"
                    />
                    <path
                      transform="translate(1283,608)"
                      d="m0 0h1l-1 7-9 16-3 3-4-2 2-5 6-11 5-6z"
                      fill="#0B0A0C"
                    />
                    <path
                      transform="translate(1480,699)"
                      d="m0 0h19l35 1 33 2v1h-18v1h-13l-7-1-1-1-48-1z"
                      fill="#292E32"
                    />
                    <path
                      transform="translate(868,361)"
                      d="m0 0h28l1 5-29 1-1-5z"
                      fill="#282F37"
                    />
                    <path
                      transform="translate(822,361)"
                      d="m0 0h17l-1 5-29 1-1-4 1-1z"
                      fill="#191921"
                    />
                    <path
                      transform="translate(364,701)"
                      d="m0 0h15l35 2v1l-30 1h-27l2-3z"
                      fill="#202F41"
                    />
                    <path
                      transform="translate(1063,652)"
                      d="m0 0h19l4 2-1 4-27-1-2-2 1-2z"
                      fill="#383A38"
                    />
                    <path
                      transform="translate(1337,697)"
                      d="m0 0 26 1-1 2-13 1h-24l-32-1v-1l34-1z"
                      fill="#293949"
                    />
                    <path
                      transform="translate(1066,647)"
                      d="m0 0h27l-4 1 1 4h-3v-2l-14 3-17-2 3-3z"
                      fill="#8B8C8C"
                    />
                    <path
                      transform="translate(68,715)"
                      d="m0 0 2 1h25l23-1h35v1l-63 3h-21z"
                      fill="#A5A6A6"
                    />
                    <path
                      transform="translate(1648,713)"
                      d="m0 0h55l12 3v1h-17l-43-2-7-1z"
                      fill="#1D2837"
                    />
                    <path
                      transform="translate(1464,666)"
                      d="m0 0h28v5h-20l-8-1z"
                      fill="#313234"
                    />

                    <path
                      transform="translate(1348,661)"
                      d="m0 0 30 1 1 3-2 2-29-1z"
                      fill="#353635"
                    />
                    <path
                      transform="translate(484,367)"
                      d="m0 0h6l-1 5-29 1v-4l2-1z"
                      fill="#1E202A"
                    />
                    <path
                      transform="translate(435,331)"
                      d="m0 0h27l-2 4h-33l-2-3z"
                      fill="#11101A"
                    />
                    <path
                      transform="translate(421,369)"
                      d="m0 0h11v5l-28 1-1-4 1-1z"
                      fill="#1A1D28"
                    />
                    <path
                      transform="translate(651,696)"
                      d="m0 0h82v1l-46 1-27 1-17-1v-1z"
                      fill="#ACAEAD"
                    />
                    <path
                      transform="translate(524,340)"
                      d="m0 0h24l-3 2-29 1h-51v-1z"
                      fill="#CEB20B"
                    />
                    <path
                      transform="translate(1320,576)"
                      d="m0 0h5l-2 4-5 4-12 7-6 1 1-4 9-6z"
                      fill="#08080A"
                    />
                    <path
                      transform="translate(546,658)"
                      d="m0 0h18l1 3-1 1-11 1h-18l-1-4z"
                      fill="#212127"
                    />
                    <path
                      transform="translate(1703,503)"
                      d="m0 0h5l4 8 3 4 2 5 3 7 2 4-3 4-9-19-5-8z"
                      fill="#3A3C3E"
                    />
                    <path
                      transform="translate(929,361)"
                      d="m0 0 27 1-1 4h-24v2h-3l-1-6z"
                      fill="#161620"
                    />
                    <path
                      transform="translate(534,366)"
                      d="m0 0h14l-1 5h-28v-4z"
                      fill="#1F222C"
                    />
                    <path
                      transform="translate(1521,668)"
                      d="m0 0 30 1v4l-6 1-17-1-7-2z"
                      fill="#343534"
                    />
                    <path
                      transform="translate(1742,577)"
                      d="m0 0 4 5 4 4 4 9 3 9-1 6-3-4-6-12-5-13z"
                      fill="#1E2D40"
                    />
                    <path
                      transform="translate(985,362)"
                      d="m0 0 29 1-1 4h-27l-2-4z"
                      fill="#181821"
                    />
                    <path
                      transform="translate(1447,705)"
                      d="m0 0h16l69 3v1h-32l-41-1-2-1-10-1z"
                      fill="#9EA09F"
                    />
                    <path
                      transform="translate(578,365)"
                      d="m0 0h29l-1 4h-30v-3z"
                      fill="#1B1B26"
                    />
                    <path
                      transform="translate(1232,658)"
                      d="m0 0h29v4l-4 1-25-1z"
                      fill="#2E3134"
                    />
                    <path
                      transform="translate(231,706)"
                      d="m0 0h33l9 1-2 2-24 1h-20l4-3z"
                      fill="#293949"
                    />
                    <path
                      transform="translate(327,665)"
                      d="m0 0 5 1v4l-28 1-1-4 7-1z"
                      fill="#24252B"
                    />
                    <path
                      transform="translate(1724,540)"
                      d="m0 0h3l8 16 6 11-1 2-5-3-11-22z"
                      fill="#29313C"
                    />
                    <path
                      transform="translate(444,661)"
                      d="m0 0 4 1v4h-30v-3l5-1z"
                      fill="#1F1F26"
                    />
                    <path
                      transform="translate(660,363)"
                      d="m0 0 4 1-1 4h-28l1-4z"
                      fill="#1D1F29"
                    />
                    <path
                      transform="translate(486,329)"
                      d="m0 0h33l5 1-1 2h-55l1-2z"
                      fill="#161620"
                    />
                    <path
                      transform="translate(1148,327)"
                      d="m0 0h25l-4 2 30 1 1 2h-49l2-4h-5z"
                      fill="#323334"
                    />
                    <path
                      transform="translate(735,653)"
                      d="m0 0 3 1 1 3-1 1h-29l1-4z"
                      fill="#23242A"
                    />
                    <path
                      transform="translate(1621,560)"
                      d="m0 0 4 1 4 10 5 12-1 5-4-2-4-13-4-10z"
                      fill="#232731"
                    />
                    <path
                      transform="translate(154,572)"
                      d="m0 0h4l-3 11-6 15-3 2v-7l7-20z"
                      fill="#191B25"
                    />
                    <path
                      transform="translate(1043,363)"
                      d="m0 0h28l1 4h-29z"
                      fill="#1D212A"
                    />
                    <path
                      transform="translate(600,330)"
                      d="m0 0 7 1v1l-22 1v1h-38l-1-2 9-1z"
                      fill="#2F3134"
                    />
                    <path
                      transform="translate(176,518)"
                      d="m0 0 2 1v5h-2l-1 5-6 15h-4l1-6 7-17z"
                      fill="#1C1E28"
                    />
                    <path
                      transform="translate(1276,368)"
                      d="m0 0h26l2 1-1 3h-28l-1-3z"
                      fill="#242F3D"
                    />
                    <path
                      transform="translate(1100,364)"
                      d="m0 0h29l-1 4h-27z"
                      fill="#181E2A"
                    />
                    <path
                      transform="translate(487,660)"
                      d="m0 0h18l1 3-3 1-25 1-2-1v-3z"
                      fill="#212127"
                    />
                    <path
                      transform="translate(1600,506)"
                      d="m0 0 4 2 8 18 1 7h-4l-6-16-1-5h-2z"
                      fill="#1E202A"
                    />
                    <path
                      transform="translate(364,371)"
                      d="m0 0h10v4l-11 1h-17v-4z"
                      fill="#191922"
                    />
                    <path
                      transform="translate(620,656)"
                      d="m0 0 2 1-1 3-3 1h-25v-4z"
                      fill="#1E1E25"
                    />
                    <path
                      transform="translate(1359,564)"
                      d="m0 0h17l-1 3-23 4-4-1v-2z"
                      fill="#08080A"
                    />
                    <path
                      transform="translate(1440,471)"
                      d="m0 0 4 2v27h-4z"
                      fill="#635B32"
                    />
                    <path
                      transform="translate(198,463)"
                      d="m0 0 3 1-3 10-8 16-2 1v-6l8-20z"
                      fill="#171923"
                    />
                    <path
                      transform="translate(508,253)"
                      d="m0 0h27v1h-12l-1 2h-20l-37 2-5-1v-1z"
                      fill="#222730"
                    />
                    <path
                      transform="translate(1633,381)"
                      d="m0 0 2 1 4 8 2 1v2l2 1 6 10-2 4-4-5-10-15v-2h-2l-2-4z"
                      fill="#262D36"
                    />
                    <path
                      transform="translate(694,363)"
                      d="m0 0h28l-1 4h-27l-1-3z"
                      fill="#191B26"
                    />
                    <path
                      transform="translate(186,291)"
                      d="m0 0 5 3 6 9 4 7-2 1-2 3-6-9-4-5-1-5z"
                      fill="#0E0E13"
                    />
                    <path
                      transform="translate(1580,671)"
                      d="m0 0h15l13 1-1 4-27-1z"
                      fill="#2A2C31"
                    />
                    <path
                      transform="translate(769,653)"
                      d="m0 0h27l-1 4h-27z"
                      fill="#212228"
                    />
                    <path
                      transform="translate(138,626)"
                      d="m0 0h1l-1 9-6 18-2 2-2-4 7-23z"
                      fill="#191A24"
                    />
                    <path
                      transform="translate(385,663)"
                      d="m0 0h4v4l-11 1h-18v-4z"
                      fill="#1B1B23"
                    />
                    <path
                      transform="translate(262,375)"
                      d="m0 0 3 1-1 3-18 5-4 3h-4l1-4 9-5z"
                      fill="#1A1C26"
                    />
                    <path
                      transform="translate(1455,348)"
                      d="m0 0h26l14 1 38 1v1h-57l-21-2z"
                      fill="#CEB20B"
                    />
                    <path
                      transform="translate(1503,337)"
                      d="m0 0h23l2 2-2 3v-2l-4 2v-2h-2v2l-4 1h-9l-2-4z"
                      fill="#2C3741"
                    />
                    <path
                      transform="translate(1404,334)"
                      d="m0 0h35l22 1v1l-14 1-6 1-24-1v-1l-13-1z"
                      fill="#303337"
                    />
                    <path
                      transform="translate(222,411)"
                      d="m0 0h2l-3 9-8 16-3 1-1-4 7-14 3-5z"
                      fill="#171721"
                    />
                    <path
                      transform="translate(310,373)"
                      d="m0 0h5v4l-9 1h-18v-3l2-1z"
                      fill="#1E2735"
                    />
                    <path
                      transform="translate(1282,372)"
                      d="m0 0h20l1 2 9 1v1l-10 1h-14l-9-2v-2z"
                      fill="#BBBCBC"
                    />
                    <path
                      transform="translate(1332,370)"
                      d="m0 0h28v5l-18-1h-9z"
                      fill="#202B3A"
                    />
                    <path
                      transform="translate(1217,367)"
                      d="m0 0h26l3 2-3 2h-27z"
                      fill="#2B323C"
                    />
                    <path
                      transform="translate(523,254)"
                      d="m0 0h5l3 3-8 2-2 1-5-1h-18v-3l4-1h20z"
                      fill="#283848"
                    />
                    <path
                      transform="translate(212,670)"
                      d="m0 0h3l2 4-11 1h-19v-3l3-1z"
                      fill="#272B31"
                    />
                    <path
                      transform="translate(661,655)"
                      d="m0 0h19l1 3-1 1h-30l1-3z"
                      fill="#2A2C30"
                    />
                    <path
                      transform="translate(1578,452)"
                      d="m0 0 4 1 8 21v4h-3l-8-18z"
                      fill="#28323E"
                    />
                    <path
                      transform="translate(1116,655)"
                      d="m0 0h27v4h-27z"
                      fill="#2C3239"
                    />
                    <path
                      transform="translate(657,327)"
                      d="m0 0h82v1l-54 1-4 1-2-1h-9l-3 1-5-1h-5z"
                      fill="#1A222F"
                    />
                    <path
                      transform="translate(1506,375)"
                      d="m0 0h14l14 2v3h-12l-14-1z"
                      fill="#1E2533"
                    />
                    <path
                      transform="translate(368,272)"
                      d="m0 0h10v1l11 1v1l-20 2h-13v-1h-10l-2-2 17-1v2h2v-2z"
                      fill="#1E2A39"
                    />
                    <path
                      transform="translate(89,710)"
                      d="m0 0m-1 1m-9 1h9v2h8l1 2-2 1h-25v-4z"
                      fill="#293949"
                    />
                    <path
                      transform="translate(1553,400)"
                      d="m0 0 5 1 9 19 1 5h-3l-8-15z"
                      fill="#20252F"
                    />
                    <path
                      transform="translate(264,277)"
                      d="m0 0h6l-2 3-13 4h-4v2l-14 5h-2l-1 3-2-1 5-5 10-5z"
                      fill="#2D313A"
                    />
                    <path
                      transform="translate(148,673)"
                      d="m0 0h9l-1 4-15 1h-12v-3l3-1z"
                      fill="#222831"
                    />
                    <path
                      transform="translate(1390,371)"
                      d="m0 0h12l17 1v3h-30z"
                      fill="#1D222D"
                    />
                    <path
                      transform="translate(173,704)"
                      d="m0 0h9l3 2-7 1h-50v-1l13-1z"
                      fill="#3D3E39"
                    />
                    <path
                      transform="translate(1547,702)"
                      d="m0 0 28 1 4 2-26 1h-33l-1-2 28-1z"
                      fill="#171C29"
                    />
                    <path
                      transform="translate(1641,615)"
                      d="m0 0 4 2 6 21-2 4-3-5-6-19z"
                      fill="#1D2430"
                    />
                    <path
                      transform="translate(1605,421)"
                      d="m0 0 1 2h2l4 10 2 8h2v4h2v3l3 1v2h2l3 9-2 2-7-12-8-16-4-10z"
                      fill="#293039"
                    />
                    <path
                      transform="translate(1159,365)"
                      d="m0 0h19l9 1-1 3h-26z"
                      fill="#1D222E"
                    />
                    <path
                      transform="translate(1455,336)"
                      d="m0 0h34l14 1 4 2h-19l-35-1z"
                      fill="#1B212D"
                    />
                    <path
                      transform="translate(1406,664)"
                      d="m0 0h16l13 1-1 3h-26l-2-1z"
                      fill="#323334"
                    />
                    <path
                      transform="translate(1448,373)"
                      d="m0 0h19l10 1-1 3h-26l-2-1z"
                      fill="#1F2733"
                    />
                    <path
                      transform="translate(1290,660)"
                      d="m0 0h18l11 1-1 3h-21l-8-1z"
                      fill="#333535"
                    />
                    <path
                      transform="translate(1129,365)"
                      d="m0 0 1 3-8 4-4 1h-8l-10-4 1-2h27z"
                      fill="#A6A7A6"
                    />
                    <path
                      transform="translate(1076,328)"
                      d="m0 0 4 1 7-1 2 2-12 1 1 3h-35l-4-2h35l-2-3 4 1z"
                      fill="#42433C"
                    />
                    <path
                      transform="translate(733,245)"
                      d="m0 0h24v1l-6 1-1 2-10 1h-4-16l-1-3 14-1z"
                      fill="#27303B"
                    />
                    <path
                      transform="translate(655,257)"
                      d="m0 0h10l3 1h33v1l-18 1h-41v-1l11-1z"
                      fill="#181922"
                    />
                    <path
                      transform="translate(417,695)"
                      d="m0 0h35v1l41 1v1l-46 1v-2l-30-1z"
                      fill="#1D232D"
                    />
                    <path
                      transform="translate(1658,672)"
                      d="m0 0 3 1v5h-21l-3-3 3-2 3 1 7 1v-2z"
                      fill="#2A323B"
                    />
                    <path
                      transform="translate(262,668)"
                      d="m0 0h11v3l-18 2h-8l-2-1 1-3z"
                      fill="#212228"
                    />
                    <path
                      transform="translate(989,689)"
                      d="m0 0 30 1 1 2-2 1h-28l-2-1z"
                      fill="#223243"
                    />
                    <path
                      transform="translate(1220,330)"
                      d="m0 0h12l8 1v3h-7-2-24l4-3z"
                      fill="#2F3032"
                    />
                    <path
                      transform="translate(1759,610)"
                      d="m0 0 2 1 3 10 4 9v8l-2-1-9-22 1-4z"
                      fill="#1D2430"
                    />
                    <path
                      transform="translate(391,696)"
                      d="m0 0h13l28 1v2l-10 1-30-1z"
                      fill="#1F2937"
                    />
                    <path
                      transform="translate(1604,394)"
                      d="m0 0 3 3 10 20-2 4-4-6-7-14-1-1v-5z"
                      fill="#21252D"
                    />
                    <path
                      transform="translate(1176,331)"
                      d="m0 0h16l20 1v1l19 1-4 2-42-2v-2h-9zm56 1 2 1z"
                      fill="#36393B"
                    />
                    <path
                      transform="translate(861,357)"
                      d="m0 0 5 1h11l3 1 17 1v1l-10 1h-19l-2 2h-5l-1-4z"
                      fill="#CFB30A"
                    />
                    <path
                      transform="translate(1296,255)"
                      d="m0 0h19l34 2 6 1v1h-25l-5 1-3-2-26-2z"
                      fill="#252B33"
                    />
                    <path
                      transform="translate(1183,693)"
                      d="m0 0h21v3l-3-1h-8l-1 1h-42v-1z"
                      fill="#233344"
                    />
                    <path
                      transform="translate(1022,652)"
                      d="m0 0h6v4l-12 1-16-1v-3z"
                      fill="#181924"
                    />
                    <path
                      transform="translate(424,331)"
                      d="m0 0h11v1l-9 1v1l-17 1h-25l2-2 12-1z"
                      fill="#1A1A23"
                    />
                    <path
                      transform="translate(1706,686)"
                      d="m0 0h2l2 11-1 9-4 3h-31l-5-1v-1h27l9-1 2-1v-11z"
                      fill="#2D3135"
                    />
                    <path
                      transform="translate(1180,499)"
                      d="m0 0 4 1v33l-2-4-1-19-2-2v-8z"
                      fill="#DEC204"
                    />
                    <path
                      transform="translate(1172,657)"
                      d="m0 0h31l-1 3h-25l-5-1z"
                      fill="#282E35"
                    />
                    <path
                      transform="translate(303,348)"
                      d="m0 0h23v1l-18 1-9 1h-39v-1z"
                      fill="#CEB20B"
                    />
                    <path
                      transform="translate(612,328)"
                      d="m0 0h26v2h24v1h-39l-4-1h-7z"
                      fill="#1A212E"
                    />
                    <path
                      transform="translate(826,653)"
                      d="m0 0h29l1 2-3 1h-27z"
                      fill="#25262C"
                    />
                    <path
                      transform="translate(1681,438)"
                      d="m0 0 2 1 6 11 6 9 2 5h-2l-1 2-5-9-3-5v-2l-3-1-3-9z"
                      fill="#3F4143"
                    />
                    <path
                      transform="translate(182,423)"
                      d="m0 0 1 4-10 23-5 9-1-3 3-7 2-5v-3l4-4 1-5z"
                      fill="#313233"
                    />
                    <path
                      transform="translate(199,310)"
                      d="m0 0 3 1 3 3 3 5 2 2v3h2l-1 2-2-1-1 2-2-1-1-3-4-4v-2h-2l-1-6z"
                      fill="#040304"
                    />
                    <path
                      transform="translate(1661,427)"
                      d="m0 0 4 1 1 7 4 2 4 7 1 7h-2l-12-20h2z"
                      fill="#2C2F34"
                    />
                    <path
                      transform="translate(1283,696)"
                      d="m0 0h36l-3 2-21 1h-12z"
                      fill="#1A2230"
                    />
                    <path
                      transform="translate(112,595)"
                      d="m0 0 1 4-9 27-2 2v-10l2-5h2l1-5 4-12z"
                      fill="#2B333C"
                    />
                    <path
                      transform="translate(1058,542)"
                      d="m0 0 3 1 1 2-1 21-3 1z"
                      fill="#666766"
                    />
                    <path
                      transform="translate(1116,408)"
                      d="m0 0 4 1-3 3-14 5-4 2h-4l2-4 13-5z"
                      fill="#23242D"
                    />
                    <path
                      transform="translate(453,330)"
                      d="m0 0h16v1l12 1 2 2-5 1h-18l1-3-8-1z"
                      fill="#1F252F"
                    />
                    <path
                      transform="translate(1250,695)"
                      d="m0 0h27v1l-10 2v1h-12l-13-1v-2z"
                      fill="#1F2E41"
                    />
                    <path
                      transform="translate(166,356)"
                      d="m0 0 2 1-2 5-2 4-5 6-6 4 1-5 10-14z"
                      fill="#273240"
                    />
                    <path
                      transform="translate(1609,333)"
                      d="m0 0 4 2 10 14-1 2-8-6-4-5-2-6z"
                      fill="#262B34"
                    />
                    <path
                      transform="translate(1418,339)"
                      d="m0 0h40l-4 2-4 1h-13l-19-2z"
                      fill="#373A3C"
                    />
                    <path
                      transform="translate(1059,596)"
                      d="m0 0 3 1v11l-1 11h-3v-21z"
                      fill="#636463"
                    />
                    <path
                      transform="translate(1375,269)"
                      d="m0 0 6 1h3l7 2v1h-16l-24-2v-1h23z"
                      fill="#1C2431"
                    />
                    <path
                      transform="translate(1131,327)"
                      d="m0 0 5 1v2l12-3 5 1v2l3 1h-26l-10-1v-1l9-1z"
                      fill="#222730"
                    />
                    <path
                      transform="translate(1582,322)"
                      d="m0 0h5l11 11v4h-3l-5-6-8-7z"
                      fill="#2F3037"
                    />
                    <path
                      transform="translate(479,266)"
                      d="m0 0h27v1l-23 2h-17l2-2z"
                      fill="#1B1F29"
                    />
                    <path
                      transform="translate(131,540)"
                      d="m0 0h2l-1 7-8 20-5 11-1-2 4-11 2-4 1-5 4-9z"
                      fill="#2D3136"
                    />
                    <path
                      transform="translate(1115,326)"
                      d="m0 0h23l9 1-2 2-9 1-2-2-29 1 1-2z"
                      fill="#363839"
                    />
                    <path
                      transform="translate(214,303)"
                      d="m0 0h3l-2 5-3 1-1 4-2 2-6-1-1-2z"
                      fill="#263342"
                    />
                    <path
                      transform="translate(88,713)"
                      d="m0 0h29l8 1v1l-7 1h-21l-1-1-8-1z"
                      fill="#202F41"
                    />
                    <path
                      transform="translate(941,652)"
                      d="m0 0 27 1v2l-3 1h-15l-10-1z"
                      fill="#23252C"
                    />
                    <path
                      transform="translate(1528,701)"
                      d="m0 0h24l15 1v1h-18v1h-13l-7-1z"
                      fill="#293139"
                    />
                    <path
                      transform="translate(1459,339)"
                      d="m0 0h25l3 3-1 1-22-1v-2l-6 1z"
                      fill="#36393B"
                    />
                    <path
                      transform="translate(20,639)"
                      d="m0 0 3 3 1-2-1 5-5 13-2-2 1-16z"
                      fill="#232D3A"
                    />
                    <path
                      transform="translate(1695,464)"
                      d="m0 0 4 2 8 15v4h-2l-2-4-2-2v-2l-2-2-3-5-1-1z"
                      fill="#2E3237"
                    />
                    <path
                      transform="translate(1596,397)"
                      d="m0 0 3 2 2 9 3 5v4h2l-2 4-11-21z"
                      fill="#2D3033"
                    />
                    <path
                      transform="translate(1631,705)"
                      d="m0 0h20v1l-5 1v1l-34 1v-2l3-1h16z"
                      fill="#242F3D"
                    />
                    <path
                      transform="translate(1695,654)"
                      d="m0 0 8 16 2 5-1 4h2v2l-3-1-4-9-5-13z"
                      fill="#26303B"
                    />
                    <path
                      transform="translate(338,336)"
                      d="m0 0 2 2-4 2h-13l-6 1-4-4z"
                      fill="#2A2C31"
                    />
                    <path
                      transform="translate(1067,429)"
                      d="m0 0 2 1-7 6v23l-3 1v-13l1-15z"
                      fill="#2A2A2E"
                    />
                    <path
                      transform="translate(809,362)"
                      d="m0 0h13v2l3 1v1l-16 1-1-4z"
                      fill="#181C28"
                    />
                    <path
                      transform="translate(1602,661)"
                      d="m0 0 9 1 25 6v2l-12-2-19-5z"
                      fill="#7B7D7C"
                    />
                    <path
                      transform="translate(1030,650)"
                      d="m0 0 23 1 2 2-27 1v-2l-3-1z"
                      fill="#8A8C8B"
                    />
                    <path
                      transform="translate(1191,641)"
                      d="m0 0h4v4h-20l-2-2 1-1z"
                      fill="#020102"
                    />
                    <path
                      transform="translate(1751,570)"
                      d="m0 0 3 4 7 16 1 3h-2v-2l-3-1-8-18z"
                      fill="#3E4142"
                    />
                    <path
                      transform="translate(1629,472)"
                      d="m0 0 3 1 2 7v5h2v6h2l2 8h2v4h-2l-8-18z"
                      fill="#27313B"
                    />
                    <path
                      transform="translate(1165,393)"
                      d="m0 0h6l-2 2-23 7h-2l1-3 15-5z"
                      fill="#1E1E24"
                    />
                    <path
                      transform="translate(1084,257)"
                      d="m0 0h35v1l-9 1v1h-22l-4-1z"
                      fill="#3F454E"
                    />
                    <path
                      transform="translate(1245,641)"
                      d="m0 0h2v4h-21l-2-2 2-1z"
                      fill="#020102"
                    />
                    <path
                      transform="translate(1246,369)"
                      d="m0 0 19 1 2 2-6 2h-10l-5-3z"
                      fill="#F7F8F7"
                    />
                    <path
                      transform="translate(1600,338)"
                      d="m0 0h2v2h2l6 9 5 4-1 3-3 1v-3h-2l-4-6-6-8z"
                      fill="#252B35"
                    />
                    <path
                      transform="translate(1302,376)"
                      d="m0 0h11l15 1v2h-26z"
                      fill="#212834"
                    />
                    <path
                      transform="translate(214,353)"
                      d="m0 0h4v2l3 1-1 4-7 5-1-5z"
                      fill="#364049"
                    />
                    <path
                      transform="translate(100,630)"
                      d="m0 0h1l-1 8-6 22-2-2 1-8 3-7 2-7z"
                      fill="#313233"
                    />
                    <path
                      transform="translate(154,486)"
                      d="m0 0 1 3-10 24-3 3 1-5 3-9z"
                      fill="#323333"
                    />
                    <path
                      transform="translate(1296,330)"
                      d="m0 0 37 1v1l-22 1h-12z"
                      fill="#393C3C"
                    />
                    <path
                      transform="translate(1522,669)"
                      d="m0 0h29v4l-20-2h-8z"
                      fill="#21242C"
                    />
                    <path
                      transform="translate(99,622)"
                      d="m0 0 2 2-1 2-1 10-3 4-2 4-1-2v-6l4-6v-6h2z"
                      fill="#41423C"
                    />
                    <path
                      transform="translate(193,395)"
                      d="m0 0 3 1-1 4-4 7h-4l-1-3 5-8z"
                      fill="#273748"
                    />
                    <path
                      transform="translate(1215,382)"
                      d="m0 0h6v2l-6 2-17 2v-3z"
                      fill="#29292C"
                    />
                    <path
                      transform="translate(1272,376)"
                      d="m0 0 3 1v2l-27 1 2-3z"
                      fill="#272F38"
                    />
                    <path
                      transform="translate(1079,642)"
                      d="m0 0h10v4h-16v-3z"
                      fill="#020102"
                    />
                    <path
                      transform="translate(1276,608)"
                      d="m0 0 4 1-2 4-4 6h-2v-3h-2l-1-3 4-4z"
                      fill="#DFC303"
                    />
                    <path
                      transform="translate(1590,384)"
                      d="m0 0 3 3 4 8-1 3-4 1-2-4h3l-6-8z"
                      fill="#202E3E"
                    />
                    <path
                      transform="translate(1697,486)"
                      d="m0 0 2 1v2l2 1 4 8v3h2v2l-3 1-3-4-5-10z"
                      fill="#2D3035"
                    />
                    <path
                      transform="translate(1616,422)"
                      d="m0 0 4 1 4 8 3 7-1 3-5-6v-2l-2-2v-2l-4-6z"
                      fill="#252930"
                    />
                    <path
                      transform="translate(244,670)"
                      d="m0 0 1 3-4 2-6-1h-11l-5-1v-1z"
                      fill="#D6BA08"
                    />
                    <path
                      transform="translate(1592,667)"
                      d="m0 0 7 2v-2l7 1v2l-2 2-24-1v-1l8-1z"
                      fill="#797B7A"
                    />
                    <path
                      transform="translate(116,576)"
                      d="m0 0 1 2v2l1 3-2 6h-3l-3 3-1-4 2-4h2v-7z"
                      fill="#41423C"
                    />
                    <path
                      transform="translate(1735,566)"
                      d="m0 0h3v2l5 2 3 12-6-4-5-10z"
                      fill="#343B45"
                    />
                    <path
                      transform="translate(1477,374)"
                      d="m0 0 2 1-3 4h-20l-8-1v-2h14l14 1z"
                      fill="#909291"
                    />
                    <path
                      transform="translate(1544,284)"
                      d="m0 0 6 2 12 6 1 6-7-2-3-5-6-4-3-1z"
                      fill="#24303E"
                    />
                    <path
                      transform="translate(522,692)"
                      d="m0 0h13l-2 2-6 2-17-1 2-2z"
                      fill="#252A31"
                    />
                    <path
                      transform="translate(314,339)"
                      d="m0 0 4 1 8-1h10v2h6v1h-26l-2-1z"
                      fill="#37393B"
                    />
                    <path
                      transform="translate(1240,262)"
                      d="m0 0h13l1 1 8 1v1h-21l-11-1v-1z"
                      fill="#1C232E"
                    />
                    <path
                      transform="translate(275,700)"
                      d="m0 0h20l5 2-3 2-4 1-9-2v-1l-9-1z"
                      fill="#2A343F"
                    />
                    <path
                      transform="translate(1355,381)"
                      d="m0 0 11 1 14 3v2l-11-1-13-3z"
                      fill="#1B1C24"
                    />
                    <path
                      transform="translate(1059,489)"
                      d="m0 0h3v23l-1 2h-2z"
                      fill="#303132"
                    />
                    <path
                      transform="translate(1576,352)"
                      d="m0 0 5 3 5 5 1 6-4-1-5-6-1-4z"
                      fill="#282B30"
                    />
                    <path
                      transform="translate(1337,334)"
                      d="m0 0h26l-1 2-9 1-3 1v-2h-10l-1 2z"
                      fill="#343638"
                    />
                    <path
                      transform="translate(603,259)"
                      d="m0 0h8l-1 2-11 2h-10l-5-1v-1z"
                      fill="#222A35"
                    />
                    <path
                      transform="translate(1208,576)"
                      d="m0 0 5 1 12 3 6 1v1h-20z"
                      fill="#C2A606"
                    />
                    <path
                      transform="translate(1376,565)"
                      d="m0 0h10l1 5-1 4-6-4-3-1z"
                      fill="#B0B1B0"
                    />
                    <path
                      transform="translate(1726,518)"
                      d="m0 0 3 4 4 8v6l-3-3-6-13h2z"
                      fill="#434546"
                    />
                    <path
                      transform="translate(1441,420)"
                      d="m0 0 3 1-1 25h-2z"
                      fill="#13131C"
                    />
                    <path
                      transform="translate(1158,367)"
                      d="m0 0 2 1h27l-1 4h-9l-18-2z"
                      fill="#929493"
                    />
                    <path
                      transform="translate(1546,350)"
                      d="m0 0 8 1 12 5 8 6v3l-11-8-17-6z"
                      fill="#2F3032"
                    />
                    <path
                      transform="translate(1403,273)"
                      d="m0 0 28 1 5 2v1h-11l-22-2z"
                      fill="#1E2835"
                    />
                    <path
                      transform="translate(1405,261)"
                      d="m0 0h11l29 3v1h-21l-9-2-10-1z"
                      fill="#747676"
                    />
                    <path
                      transform="translate(1653,531)"
                      d="m0 0h2l4 13 3 6-2 4-7-17z"
                      fill="#242C37"
                    />
                    <path
                      transform="translate(1442,526)"
                      d="m0 0h1v26h-2l-1-3 1-22z"
                      fill="#14131B"
                    />
                    <path
                      transform="translate(1408,392)"
                      d="m0 0 9 1 13 4 1 3-9-2-14-4z"
                      fill="#1F2027"
                    />
                    <path
                      transform="translate(1640,375)"
                      d="m0 0 5 5 5 9-2 2-1-3-4-2-4-7z"
                      fill="#37393B"
                    />
                    <path
                      transform="translate(1600,506)"
                      d="m0 0 4 2 3 6v8h-2l-3-7v-3h-2z"
                      fill="#28303B"
                    />
                    <path
                      transform="translate(806,364)"
                      d="m0 0h2v3h-21l-7-1v-1z"
                      fill="#EEEFEF"
                    />



 

                  </svg>
                </div>

                {/* Legende */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="font-semibold mb-3">Bereichserklärung:</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-primary">1</span>
                      <span>Weniger als 5 cm vom Rand</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-primary">2</span>
                      <span>Fahrersichtfeld (über dem Lenkrad)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-primary">3</span>
                      <span>Restlicher Bereich</span>
                    </div>
                  </div>
                </div>

                {damageLocation && (
                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Bereich {damageLocation} ausgewählt</span>
                    </div>
                  </div>
                )}

                <Button variant="ghost" onClick={() => setStep(2)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Steinschlag - Größenprüfung */}
          {step === 4 && damageType === "steinschlag" && (
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
                  <div className="w-full max-w-lg">
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted w-full aspect-square">
                      <img
                        src="/images/schaden/euro.png"
                        alt="Größenvergleich mit 2-Euro-Münze"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
                      onClick={() => handleReparaturEntscheidung(true)}
                    >
                      Nein, kleiner
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-6"
                      onClick={() => handleReparaturEntscheidung(false)}
                    >
                      Ja, größer
                    </Button>
                  </div>
                </div>

                <Button variant="ghost" onClick={() => setStep(3)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Ergebnis & Kontakt */}
          {step === 5 && result && (
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
