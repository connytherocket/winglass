import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import PageTitle from "~/components/page-title";
import { SectionTitle } from "~/components/section-title";
import {
  Phone,
  ArrowRight,
  HelpCircle,
  Wrench,
  Clock,
  Euro,
  Shield,
  Award,
  CheckCircle2,
  Mail,
} from "lucide-react";

export function meta() {
  return [
    { title: "Wissenswert – Häufige Fragen | Winglass" },
    {
      name: "description",
      content:
        "Antworten auf häufig gestellte Fragen zu Autoglas-Service, Scheibenaustausch, Reparatur, Kosten und mehr. Winglass beantwortet Ihre Fragen.",
    },
  ];
}

export default function Wissenswert() {
  const quickInfo = [
    {
      icon: Clock,
      title: "Steinschlag-Reparatur",
      description: "Nur 30 Minuten",
    },
    {
      icon: Shield,
      title: "Garantie",
      description: "10 Jahre auf Reparatur",
    },
    {
      icon: Euro,
      title: "Versicherung",
      description: "Oft komplett abgedeckt",
    },
    {
      icon: Award,
      title: "Originalqualität",
      description: "Gleiche Hersteller wie OEM",
    },
  ];

  return (
    <div>
      <PageTitle
        title="Wissenswert"
        subtitle="Hier finden Sie Antworten auf häufig gestellte Fragen"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über Winglass" },
          { label: "Wissenswert" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="py-16">
          <SectionTitle
            badge="FAQ"
            title="Die wichtigsten Fragen im Überblick"
            subtitle="Wir haben die häufigsten Fragen unserer Kunden für Sie zusammengestellt. Sollten Sie weitere Informationen benötigen, stehen wir Ihnen gerne zur Verfügung."
            align="left"
          />
        </section>

        {/* Quick Info Cards */}
        <section className="pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="w-full">
            <SectionTitle
              badge="Häufige Fragen"
              title="Alles was Sie wissen müssen"
            />

            <Accordion
              type="single"
              collapsible={true}
              className="w-full space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Welche Dienstleistungen bietet Ihre Autoglaswerkstatt an?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Scheibenaustausch jeglicher Art, Scheibenreparatur,
                    Scheibenversieglung, Kamerakalibrierung mit der modernsten
                    Technik, Achsvermessung und vieles mehr.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Muss die Autoscheibe bei einem Riss oder Schaden immer
                    ausgetauscht werden?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Der Ersatz der kompletten Windschutzscheibe wird notwendig,
                    wenn:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>bereits Risse in der Scheibe vorhanden sind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        der Schaden größer als der Durchmesser einer
                        Zwei-Euro-Münze ist
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>mehrere Schäden an der Scheibe vorliegen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        ein Kratzer sich weniger als 10 Zentimeter vom Rand der
                        Autoscheibe befindet
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Wie lange dauert es, einen Glasschaden zu reparieren oder
                    eine Scheibe auszutauschen?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Steinschlag-Reparatur:
                      </h4>
                      <p>
                        Die Behebung eines Steinschlags erfordert lediglich 30
                        Minuten. Wenn Sie gleichzeitig mehrere Steinschläge
                        reparieren lassen müssen, sollten Sie für jeden
                        zusätzlichen Steinschlag mit einer zusätzlichen
                        Zeitspanne von 15 Minuten rechnen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Scheibenaustausch:
                      </h4>
                      <p>
                        Die Dauer des Windschutzscheibenaustauschs hängt vom
                        Fahrzeugtyp ab und kann nicht pauschal festgelegt
                        werden. Dies ist vor allem auf die unterschiedliche
                        Technologie zurückzuführen, die in der Scheibe eingebaut
                        sein kann, wie beispielsweise Regen- und Lichtsensoren,
                        Head-up-Displays, Heizung und andere Features. Je mehr
                        Technik vorhanden ist, desto aufwendiger gestaltet sich
                        der Austausch der Windschutzscheibe.
                      </p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="font-semibold text-foreground mb-2">
                        Im Allgemeinen dauert der Austausch etwa 2 Stunden
                      </p>
                      <p>
                        Dank unseres exklusiven, schnell trocknenden Klebers
                        können Sie nach dem Scheibenaustausch direkt wieder
                        weiterfahren.
                      </p>
                    </div>
                    <p>
                      Falls Ihre Windschutzscheibe mit einem
                      Fahrerassistenzsystem ausgestattet ist, könnte es
                      notwendig sein, die Kamera neu zu kalibrieren, abhängig
                      von Ihrem Fahrzeugmodell. Keine Sorge, nach dem Austausch
                      Ihrer Windschutzscheibe werden wir die Kamera gemäß den
                      Herstelleranweisungen erneut kalibrieren.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Wie viel kostet ein Autoglasaustausch?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Wenn Sie eine Versicherung gegen Glasschäden haben, wird
                      die Reparatur in der Regel von Ihrer Versicherung
                      abgedeckt. Zudem kümmern wir uns darum, alle
                      administrativen Formalitäten direkt mit Ihrer
                      Versicherungsgesellschaft zu erledigen.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="font-semibold text-foreground">
                        Bei einer Teilkaskoversicherung deckt Ihre Versicherung
                        normalerweise die Kosten der Reparatur.
                      </p>
                    </div>
                    <p>
                      Wenn Sie lediglich eine Haftpflichtversicherung für Ihr
                      Fahrzeug haben, sind Sie in der Regel selbst für die
                      Kosten der Windschutzscheibenreparatur verantwortlich.
                      Falls Ihre Versicherung keine Schäden an der
                      Windschutzscheibe abdeckt, stellen wir Ihnen gerne einen
                      Kostenvoranschlag aus.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Wie viel kostet eine Autoglasreparatur?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Winglass prüft zunächst, ob eine Windschutzscheibe
                      repariert werden kann, denn eine Reparatur ist in der
                      Regel kostengünstiger und zeitsparender als der Einbau
                      einer neuen Scheibe. Dies ermöglicht Ihnen Zeit- und
                      Kosteneinsparungen, während gleichzeitig die Umwelt
                      geschützt wird.
                    </p>
                    <p>
                      Sofern Sie eine Glasschadenversicherung haben, wird die
                      Reparatur in der Regel von Ihrer Versicherung abgedeckt.
                      Wir kümmern uns außerdem um sämtliche bürokratischen
                      Angelegenheiten in Verbindung mit Ihrer
                      Versicherungsgesellschaft.
                    </p>
                    <p>
                      Falls Sie keine Glasschadenversicherung haben, variieren
                      die Kosten abhängig von der Fahrzeugmarke, dem Modell und
                      der Art der Windschutzscheibe. Basierend auf diesen
                      Kriterien und der Fahrzeugidentifikationsnummer erstellen
                      wir gerne eine individuelle Kostenkalkulation für Sie.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Bieten Sie Garantien auf Ihre Arbeit und das verwendete
                    Glas?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-4">
                      <Award className="w-8 h-8 text-primary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground text-lg mb-2">
                          10 Jahre Garantie
                        </p>
                        <p className="text-muted-foreground">
                          Sie erhalten eine 10 Jahres-Garantie auf die Reparatur
                          Ihrer Scheibe sowie auf die Arbeiten bei einem
                          Scheibenaustausch.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Wie vereinbare ich einen Termin in Ihrer Werkstatt?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Um einen Termin in unserer Werkstatt zu vereinbaren, haben
                      Sie mehrere Möglichkeiten:
                    </p>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Telefonisch
                          </p>
                          <a
                            href="tel:071424695720"
                            className="text-primary hover:underline"
                          >
                            07142 / 4695720
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Per E-Mail
                          </p>
                          <a
                            href="mailto:anfrage@winglass.de"
                            className="text-primary hover:underline"
                          >
                            anfrage@winglass.de
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Wrench className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Persönlich
                          </p>
                          <p>
                            Sie können auch persönlich in unserer Werkstatt
                            vorbeikommen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Was brauche ich bei einem Termin bei Winglass?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-muted-foreground">
                      Für den Termin benötigen Sie lediglich Ihren{" "}
                      <span className="font-semibold text-foreground">
                        Fahrzeugschein
                      </span>
                      .
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Können Kratzer auf einer Scheibe entfernt werden?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Nein, eine Fahrzeugscheibe besteht aus Glas, weshalb
                      Kratzer nicht beseitigt oder abgeschliffen werden können.
                      Wenn man versuchen würde, einen Kratzer von einer
                      Fahrzeugscheibe wegzuschleifen, würde dies die Form und
                      Struktur des Glases verändern, was zu einer Verzerrung
                      beim Durchsehen führen würde, also einer optischen
                      Verzerrung. Außerdem würde dies die strukturelle
                      Stabilität der Scheibe beeinträchtigen.
                    </p>
                    <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
                      <p className="font-semibold text-foreground">
                        Die einzige Möglichkeit, Kratzer von einer Scheibe zu
                        entfernen, besteht darin, die gesamte Scheibe
                        auszutauschen.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="border-b-0 border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">
                    Was für Scheiben verwendet Winglass für mein Auto?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-4">
                      <Award className="w-8 h-8 text-primary shrink-0" />
                      <div className="space-y-2 text-muted-foreground leading-relaxed">
                        <p className="font-semibold text-foreground text-lg">
                          Originalqualität garantiert
                        </p>
                        <p>
                          Winglass bezieht die Scheiben von den gleichen
                          Herstellern wie die Automobilunternehmen. Die
                          Spezifikationen der Scheiben sind daher identisch und
                          erfüllen die gleichen europäischen Standards. Dies
                          gilt für sämtliche Automarken und Fahrzeugkategorien.
                        </p>
                      </div>
                    </div>
                  </div>
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
                  <HelpCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Noch Fragen? Wir helfen gerne!
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Sollten Sie weitere Informationen benötigen oder spezielle
                  Fragen haben, zögern Sie nicht, uns zu kontaktieren. Unser
                  Team steht Ihnen gerne zur Verfügung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="tel:071424695720">
                      <Phone className="mr-2 h-5 w-5" />
                      07142 / 4695720
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/ueberwinglass/kontakt">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Kontakt aufnehmen
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
