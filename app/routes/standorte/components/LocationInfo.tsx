import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SectionTitle } from "~/components/section-title";

interface LocationInfoProps {
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  phone: string;
  email?: string;
  hours: {
    weekdays: string;
    saturday?: string;
    sunday?: string;
  };
  image?: string;
  title?: string;
  subtitle?: string;
}

export function LocationInfo({
  address,
  phone,
  email,
  hours,
  image = "/images/slider/DSC09741.jpg",
  title = "Standort Informationen",
  subtitle = "Besuchen Sie uns vor Ort",
}: LocationInfoProps) {
  return (
    <div className="space-y-12">
      {/* Title and Subtitle */}
      <SectionTitle badge="Standort" title={title} subtitle={subtitle} />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          {/* Address */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Adresse
              </h3>
            </div>
            <div className="ml-11">
              <p className="font-semibold text-lg mb-1">{address.street}</p>
              <p className="text-muted-foreground">
                {address.zipCode} {address.city}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Kontakt
              </h3>
            </div>
            <div className="ml-11 space-y-2">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block font-semibold text-lg hover:text-primary transition-colors"
              >
                {phone}
              </a>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
              )}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Öffnungszeiten
              </h3>
            </div>
            <div className="ml-11 space-y-3">
              <div>
                <p className="font-semibold mb-1">Montag - Freitag</p>
                <p className="text-muted-foreground">{hours.weekdays}</p>
              </div>
              {hours.saturday && (
                <div>
                  <p className="font-semibold mb-1">Samstag</p>
                  <p className="text-muted-foreground">{hours.saturday}</p>
                </div>
              )}
              {hours.sunday && (
                <div>
                  <p className="font-semibold mb-1">Sonntag</p>
                  <p className="text-muted-foreground">{hours.sunday}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300 group">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
            <img
              src={image}
              alt="Standort Ansicht"
              className="w-full h-full object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
