import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "~/components/section-title";
import { Card, CardContent } from "~/components/ui/card";

interface LocationFeaturesProps {
  features: string[];
  title?: string;
  badge?: string;
}

export function LocationFeatures({
  features,
  title = "Ihre Vorteile an diesem Standort",
  badge,
}: LocationFeaturesProps) {
  return (
    <section className="py-16 bg-muted/30 -mx-4 px-4">
      <div className="container mx-auto">
        <SectionTitle
          badge={badge}
          title={title}
          subtitle="Profitieren Sie von unserem erstklassigen Service"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-md hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <span className="font-medium leading-relaxed">{feature}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
