import PageTitle from "~/components/page-title";
import {
  LocationMap,
  type LocationMapRef,
  locations,
  availableServices,
} from "~/components/location-map-card-wrapper";
import { Card, CardContent } from "~/components/ui/card";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Filter,
  ArrowRight,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    {
      title: "Unsere Standorte | Winglass - Autoglas Spezialist",
    },
    {
      name: "description",
      content:
        "Besuchen Sie uns an einem unserer Standorte in Herrenberg oder Bietigheim-Bissingen. Professioneller Autoglas-Service in Ihrer Nähe.",
    },
  ];
}

// Locations sind jetzt importiert, daher entfernen wir die doppelte Definition
// const locations = [...] wurde entfernt

function encodePhone(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("0")) return `+49${digits.slice(1)}`;
  return digits;
}

export default function StandortePage() {
  const mapRef = useRef<LocationMapRef>(null);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleLocationClick = (locationId: string) => {
    mapRef.current?.focusLocation(locationId);
  };

  // Gefilterte Locations basierend auf ausgewähltem Service
  const filteredLocations = selectedService
    ? locations.filter(
        (loc) => loc.services && loc.services.includes(selectedService)
      )
    : locations;

  return (
    <div className="flex flex-col">
      <PageTitle
        title="Unsere Standorte"
        subtitle="Besuchen Sie uns an einem unserer Standorte. Wir freuen uns auf Sie!"
        backgroundImage="/images/slider/DSC09741.jpg"
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Service Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Filter className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Nach Service filtern</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedService("")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedService === ""
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                Alle Standorte
              </button>
              {availableServices.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedService === service
                      ? "bg-primary text-white shadow-md"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          {/* Google Maps */}
          <div>
            <LocationMap ref={mapRef} selectedService={selectedService} />
          </div>    
          {/* Location Cards - Kompakt über der Karte */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {filteredLocations.map((location) => (
              <Card
                key={location.name}
                className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] group"
                onClick={() => handleLocationClick(location.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {location.name.replace("Winglass ", "")}
                    </h3>
                    {location.badge && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold shrink-0">
                        {location.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {location.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <a
                        href={`tel:${encodePhone(location.phone)}`}
                        className="text-primary hover:underline font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">
                        {location.hours}
                      </span>
                    </div>

                    {/* Services anzeigen wenn Filter aktiv */}
                    {location.services && location.services.length > 0 && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {location.services.map((service) => (
                            <span
                              key={service}
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                selectedService === service
                                  ? "bg-primary text-white"
                                  : "bg-primary/5 text-primary"
                              }`}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t flex flex-wrap gap-2 text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLocationClick(location.name);
                      }}
                      className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Auf Karte
                    </button>
                    <span className="text-muted-foreground">•</span>
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      Google Maps
                    </a>
                    {location.detailUrl && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <Link
                          to={location.detailUrl}
                          className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          Mehr Infos
                        </Link>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
}
