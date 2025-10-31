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
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex items-center justify-between">
          {/* Logo Left + Location Name */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
            <img 
              src="/logo.png" 
              alt="Winglass Logo" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto shrink-0" 
            />
            <span
              className="text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic leading-tight truncate"
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
