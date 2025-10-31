import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import PageTitle from "~/components/page-title";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import {
  Building2,
  Mail,
  Phone,
  Globe,
  FileText,
  Users,
  Shield,
  Scale,
} from "lucide-react";

export function meta() {
  return [
    { title: "Impressum – WINGLASS GmbH" },
    {
      name: "description",
      content:
        "Impressum und rechtliche Informationen der WINGLASS GmbH. Kontaktdaten, Geschäftsführung und alle Pflichtangaben nach TMG.",
    },
  ];
}

export default function ImpressumPage() {
  return (
    <div>
      <PageTitle
        title="Impressum"
        subtitle="Rechtliche Informationen und Kontaktdaten"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Rechtliches" },
          { label: "Impressum" },
        ]}
        backgroundImage="/images/slider/DSC09741.jpg"
      />

      <div className="container mx-auto px-4">
        <section className="py-16">
          <div className="w-full space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <CardTitle>Angaben gemäß § 5 TMG</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">WINGLASS GmbH</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Asperger Str. 22</p>
                    <p>74321 Bietigheim-Bissingen</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Telefon
                    </h4>
                    <p className="text-muted-foreground">07142 / 4695720</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      E-Mail
                    </h4>
                    <p className="text-muted-foreground">info@winglass.de</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Internet
                  </h4>
                  <p className="text-muted-foreground">www.winglass.de</p>
                </div>
              </CardContent>
            </Card>

            {/* Vertreten durch */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle>Vertreten durch</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Geschäftsführer: Herr Samet-Can Baser, Herr Ali Can Akyüz
                </p>
              </CardContent>
            </Card>

            {/* Registereintrag */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <CardTitle>Registereintrag</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">
                      Eintragung im Handelsregister
                    </p>
                    <p className="text-muted-foreground">
                      Registergericht: Amtsgericht Stuttgart
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Registernummer</p>
                    <p className="text-muted-foreground">HRB 791893</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Umsatzsteuer */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-primary" />
                  <CardTitle>Umsatzsteuer-ID</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz:
                  </p>
                  <p className="text-muted-foreground">DE 364687419</p>
                </div>
              </CardContent>
            </Card>

            {/* Berufsbezeichnung */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <CardTitle>
                    Berufsbezeichnung und berufsrechtliche Regelungen
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Berufsbezeichnung:</p>
                  <p className="text-muted-foreground">
                    Autoglas-Spezialist / Kfz-Handwerk
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Zuständige Kammer:</p>
                  <p className="text-muted-foreground">
                    Handwerkskammer Region Stuttgart
                    <br />
                    Heilbronner Straße 43
                    <br />
                    70191 Stuttgart
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Verliehen in:</p>
                  <p className="text-muted-foreground">Deutschland</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">
                    Es gelten folgende berufsrechtliche Regelungen:
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Handwerksordnung (HwO)</li>
                    <li>• Gewerbeordnung (GewO)</li>
                    <li>• Kfz-Sachverständigenverordnung</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Verantwortlich für den Inhalt */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Samet-Can Baser</p>
                  <div className="text-muted-foreground">
                    <p>WINGLASS GmbH</p>
                    <p>Asperger Str. 22</p>
                    <p>74321 Bietigheim-Bissingen</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Haftungsausschluss */}
            <Card>
              <CardHeader>
                <CardTitle>Haftungsausschluss</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Haftung für Inhalte</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht unter der Verpflichtung,
                    übermittelte oder gespeicherte fremde Informationen zu
                    überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon
                    unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
                    dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                    möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend
                    entfernen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Haftung für Links</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Urheberrecht</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Google Analytics</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Diese Website benutzt Google Analytics, einen
                    Webanalysedienst der Google Inc. (''Google''). Google
                    Analytics verwendet sog. ''Cookies'', Textdateien, die auf
                    Ihrem Computer gespeichert werden und die eine Analyse der
                    Benutzung der Website durch Sie ermöglicht. Die durch den
                    Cookie erzeugten Informationen über Ihre Benutzung dieser
                    Website (einschließlich Ihrer IP-Adresse) wird an einen
                    Server von Google in den USA übertragen und dort
                    gespeichert. Google wird diese Informationen benutzen, um
                    Ihre Nutzung der Website auszuwerten, um Reports über die
                    Websiteaktivitäten für die Websitebetreiber
                    zusammenzustellen und um weitere mit der Websitenutzung und
                    der Internetnutzung verbundene Dienstleistungen zu
                    erbringen. Auch wird Google diese Informationen
                    gegebenenfalls an Dritte übertragen, sofern dies gesetzlich
                    vorgeschrieben oder soweit Dritte diese Daten im Auftrag von
                    Google verarbeiten. Google wird in keinem Fall Ihre
                    IP-Adresse mit anderen Daten der Google in Verbindung
                    bringen. Sie können die Installation der Cookies durch eine
                    entsprechende Einstellung Ihrer Browser Software verhindern;
                    wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                    gegebenenfalls nicht sämtliche Funktionen dieser Website
                    voll umfänglich nutzen können. Durch die Nutzung dieser
                    Website erklären Sie sich mit der Bearbeitung der über Sie
                    erhobenen Daten durch Google in der zuvor beschriebenen Art
                    und Weise und zu dem zuvor benannten Zweck einverstanden.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Google AdSense</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras &gt; Internetoptionen &gt;gt; Datenschu&gt;z &gt; Einstellung''; im Firefox unter ''E&gt;tras &gt; Einst&gt;llungen &gt; &gt;atenschutz &gt; Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
