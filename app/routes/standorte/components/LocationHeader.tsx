import { Badge } from "~/components/ui/badge";

interface LocationHeaderProps {
  badge: string;
  locationName: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

export function LocationHeader({
  badge,
  locationName,
  badgeVariant = "default",
}: LocationHeaderProps) {
  return (
    <div className="bg-muted/30 border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Logo Left + Location Name */}
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Winglass Logo" className="h-20 w-auto" />
            <span
              className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold italic"
              style={{ fontFamily: "Conthrax-SemiBold, sans-serif" }}
            >
              {locationName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
