import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Phone, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router";

interface LocationCTAProps {
  phone: string;
  locationName: string;
  googleMapsUrl?: string;
}

export function LocationCTA({
  phone,
  locationName,
  googleMapsUrl,
}: LocationCTAProps) {
  return (
    <section className="py-16">
      <Card className="border-primary/50 border-2 hover:shadow-2xl hover:border-primary transition-all duration-500 group">
        <CardContent className="p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Besuchen Sie uns in {locationName}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir freuen uns auf Ihren Besuch oder Anruf. Vereinbaren Sie jetzt
            einen Termin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
            >
              <a href={`tel:${phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link to="/kontakt">
                <Calendar className="mr-2 h-5 w-5" />
                Termin vereinbaren
              </Link>
            </Button>
            {googleMapsUrl && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Route planen
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
