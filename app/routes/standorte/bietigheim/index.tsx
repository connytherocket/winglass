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
    {
      title:
        "Erstklassiger Autoglas-Service in Bietigheim-Bissingen – WINGLASS GmbH",
    },
    {
      name: "description",
      content:
        "Die WINGLASS GmbH in Bietigheim-Bissingen ist Ihre verlässliche Adresse für erstklassigen Autoglas-Service. Expertise in Reparatur, Austausch und Kalibrierung von Fahrassistenzsystemen.",
    },
  ];
}

export default function Bietigheim() {
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
    "Verlässliche Adresse für erstklassigen Service",
    "Expertise in effizienter und präziser Reparatur",
    "Professioneller Austausch von Fahrzeugscheiben",
    "Expertise in Kalibrierung von Fahrassistenzsystemen",
    "Genaue und verlässliche Funktionalität garantiert",
    "Großer Wert auf Qualität und Kundenzufriedenheit",
    "Herausragender Autoglas-Service",
    "Fahrzeugkalibrierung in Originalqualität",
  ];

  const galleryImages = [
    "/images/Bilder/4er/IMG_5426.JPG",
    "/images/Bilder/G-Klasse/IMG_3972.JPG",
    "/images/Bilder/E-Klasse/IMG_5066.JPG",
    "/images/Bilder/DSC09793.jpg",
    "/images/Bilder/DSC09828.jpg",
    "/images/Bilder/4er/IMG_5424.JPG",
  ];

  return (
    <div>
      <PageTitle
        title="Erstklassiger Autoglas-Service in Bietigheim-Bissingen"
        subtitle="WINGLASS GmbH - Ihre verlässliche Adresse"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte" },
          { label: "Bietigheim-Bissingen" },
        ]}
        backgroundImage="/images/slider/DSC09793.jpg"
      />

      <LocationHeader
        badge="Premium Service"
        badgeVariant="secondary"
        locationName="Bietigheim-Bissingen"
      />

      <div className="container mx-auto px-4">
        {/* Location Info */}
        <section className="py-16">
          <LocationInfo
            title="Erstklassiger Autoglas-Service in Bietigheim-Bissingen"
            subtitle="Die WINGLASS GmbH in Bietigheim-Bissingen ist Ihre verlässliche Adresse für erstklassigen Autoglas-Service. Unser erfahrenes Team bietet Expertise in der effizienten und präzisen Reparatur sowie dem Austausch von Fahrzeugscheiben. Durch unsere Expertise in der Kalibrierung von Fahrassistenzsystemen garantieren wir genaue und verlässliche Funktionalität. Unsere Werkstatt legt großen Wert auf Qualität und Kundenzufriedenheit. Vertrauen Sie der WINGLASS GmbH für herausragenden Autoglas-Service und Fahrzeugkalibrierung in Originalqualität."
            address={{
              street: "Musterstraße 2",
              zipCode: "74321",
              city: "Bietigheim-Bissingen",
            }}
            phone="07142 / 4695721"
            email="bietigheim@winglass.de"
            hours={{
              weekdays: "08:00 - 18:00 Uhr",
              saturday: "09:00 - 13:00 Uhr",
              sunday: "Geschlossen",
            }}
            image="/images/Bilder/G-Klasse/IMG_3972.JPG"
          />
        </section>

        {/* Services */}
        <LocationServices
          services={services}
          title="Unsere Leistungen in Bietigheim-Bissingen"
          description="Effiziente und präzise Reparatur sowie Austausch von Fahrzeugscheiben"
        />

        {/* Features */}
        <LocationFeatures
          features={features}
          title="Ihre Vorteile bei WINGLASS Bietigheim-Bissingen"
          badge="Originalqualität"
        />

        {/* Gallery */}
        <LocationGallery
          images={galleryImages}
          title="Unser Standort in Bietigheim"
          description="Besuchen Sie uns in unserem Premium-Standort"
        />

        {/* CTA */}
        <LocationCTA
          phone="07142 / 4695721"
          locationName="Bietigheim-Bissingen"
          googleMapsUrl="https://maps.google.com/?q=Winglass+Bietigheim-Bissingen"
        />
      </div>
    </div>
  );
}
