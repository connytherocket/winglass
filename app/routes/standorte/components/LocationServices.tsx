import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { SectionTitle } from "~/components/section-title";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LocationServicesProps {
  services: Service[];
  title?: string;
  description?: string;
}

export function LocationServices({
  services,
  title = "Unsere Leistungen",
  description = "Alles rund um Ihr Autoglas an diesem Standort",
}: LocationServicesProps) {
  return (
    <section className="py-16">
      <SectionTitle badge="Leistungen" title={title} subtitle={description} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/30"
          >
            <CardHeader>
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
