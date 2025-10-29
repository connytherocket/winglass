import { Link } from "react-router";
import React from "react";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; href?: string };

interface PageTitleProps {
  title: string;
  subtitle?: React.ReactNode;
  breadcrumbs?: Crumb[];
  backgroundImage?: string;
  className?: string;
}

export default function PageTitle({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage,
  className = "",
}: PageTitleProps) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }
    : undefined;

  return (
    <header
      className={`relative w-full py-24 md:py-32 text-white overflow-hidden ${className}`}
      style={bgStyle as React.CSSProperties}
      aria-labelledby="page-title"
    >
      {/* Background Image with Parallax Effect */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={bgStyle as React.CSSProperties}
        />
      )}

      {/* Gradient Overlay - Darker and more elegant */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative container mx-auto px-4 z-10">
        {/* Breadcrumbs - Improved Design */}
        {breadcrumbs.length > 0 && (
          <nav
            className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {idx === 0 && <Home className="w-4 h-4 opacity-70" />}
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="text-sm text-white/80 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-white font-medium">
                      {crumb.label}
                    </span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title Section with Badge */}
        <div className="max-w-4xl">
          {/* Decorative Badge */}
          <div className="inline-block mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Premium Service
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            id="page-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {subtitle}
            </p>
          )}

          {/* Decorative Line */}
          <div className="mt-8 w-24 h-1 bg-linear-to-r from-primary to-primary/30 rounded-full animate-in fade-in slide-in-from-left duration-700 delay-500" />
        </div>
      </div>
    </header>
  );
}
