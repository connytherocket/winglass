import { Badge } from "~/components/ui/badge";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subtitleMaxWidth = align === "center" ? "max-w-2xl mx-auto" : "";

  return (
    <div className={`mb-12 ${alignClass}`}>
      {badge && (
        <Badge variant="outline" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground ${subtitleMaxWidth}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
