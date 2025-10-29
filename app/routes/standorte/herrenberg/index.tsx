import PageTitle from "~/components/page-title";
import {
  LocationHeader,
  LocationInfo,
  LocationServices,
  LocationFeatures,
  LocationCTA,
  LocationGallery,
} from "../components";
import { Wrench, Shield, Award, Car, Clock, Users } from "lucide-react";

export function meta() {
  return [
    { title: "Ihr Autoglas-Spezialist in Herrenberg – WINGLASS GmbH" },
    {
      name: "description",
      content:
        "Die WINGLASS GmbH in Herrenberg steht für professionellen Autoglas-Service auf höchstem Niveau. Schnelle Reparatur, präziser Austausch und Kalibrierung von Fahrassistenzsystemen.",
    },
  ];
}

export default function Herrenberg() {
  const services = [
    {
      icon: Wrench,
      title: "Steinschlag-Reparatur",
      description: "Schnelle und professionelle Reparatur von Steinschlägen",
    },
    {
      icon: Shield,
      title: "Scheibenaustausch",
      description: "Fachgerechter Austausch aller Autoscheiben",
    },
    {
      icon: Award,
      title: "Kalibrierung",
      description: "Kalibrierung von Fahrerassistenzsystemen",
    },
    {
      icon: Car,
      title: "Alle Fahrzeugtypen",
      description: "PKW, Transporter und Nutzfahrzeuge",
    },
    {
      icon: Clock,
      title: "Schneller Service",
      description: "Terminvereinbarung und schnelle Durchführung",
    },
    {
      icon: Users,
      title: "Versicherungsabwicklung",
      description: "Komplette Abwicklung mit Ihrer Versicherung",
    },
  ];

  const features = [
    "Professioneller Service auf höchstem Niveau",
    "Reparatur und Austausch für alle Fahrzeugmarken",
    "Modernste Technik für Kalibrierung von Fahrassistenzsystemen",
    "Kalibrierung direkt vor Ort",
    "Maximale Sicherheit nach dem Scheibentausch",
    "Qualität, Sauberkeit und kundennahe Betreuung",
    "Originalqualität direkt vom Spezialisten",
    "Erfahrenes und geschultes Team",
  ];

  const galleryImages = [
    "/images/slider/DSC09741.jpg",
    "/images/slider/DSC09793.jpg",
    "/images/slider/DSC09828.jpg",
    // Weitere Bilder können hier hinzugefügt werden
    // Falls weniger als 5, werden Platzhalter angezeigt
  ];

  return (
    <div>
      <PageTitle
        title="Ihr Autoglas-Spezialist in Herrenberg"
        subtitle="WINGLASS GmbH - Professioneller Service auf höchstem Niveau"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte" },
          { label: "Herrenberg" },
        ]}
        backgroundImage="/images/slider/DSC09741.jpg"
      />
      <LocationHeader
        badge="Zentrale"
        badgeVariant="default"
        locationName="Herrenberg"
      />

      <div className="container mx-auto px-4">
        {/* Location Info */}
        <section className="py-16">
          <LocationInfo
            title="Ihr Autoglas-Spezialist in Herrenberg"
            subtitle="Die WINGLASS GmbH in Herrenberg steht für professionellen Autoglas-Service auf höchstem Niveau. Unser erfahrenes Team repariert und tauscht Fahrzeugscheiben schnell, präzise und zuverlässig - für alle Fahrzeugmarken. Dank modernster Technik kalibrieren wir auch Ihre Fahrassistenzsysteme direkt vor Ort und sorgen so für maximale Sicherheit nach dem Scheibentausch. Unsere Werkstatt in Herrenberg ist bekannt für Qualität, Sauberkeit und kundennahe Betreuung. Vertrauen Sie auf Originalqualität - direkt vom Spezialisten."
            address={{
              street: "Rigipsstraße 7",
              zipCode: "71083",
              city: "Herrenberg",
            }}
            phone="07032 / 2892161"
            email="info@winglass.de"
            hours={{
              weekdays: "09:00 - 18:00 Uhr",
              saturday: "09:00 - 15:00 Uhr",
              sunday: "Geschlossen",
            }}
            image="/images/slider/DSC09741.jpg"
          />
        </section>

        {/* Services */}
        <LocationServices
          services={services}
          title="Unsere Leistungen in Herrenberg"
          description="Schnell, präzise und zuverlässig - Ihr erfahrenes Team für alle Fahrzeugmarken"
        />

        {/* Features */}
        <LocationFeatures
          features={features}
          title="Ihre Vorteile bei WINGLASS Herrenberg"
          badge="Originalqualität"
        />

        {/* Gallery */}
        <LocationGallery
          images={galleryImages}
          title="Unsere Zentrale in Herrenberg"
          description="Werfen Sie einen Blick in unsere modernen Räumlichkeiten"
        />

        {/* CTA */}
        <LocationCTA
          phone="07032 / 2892161"
          locationName="Herrenberg"
          googleMapsUrl="https://maps.google.com/?q=Rigipsstraße+7,+71083+Herrenberg"
        />
      </div>
    </div>
  );
}
