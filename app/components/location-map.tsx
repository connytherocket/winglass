/// <reference types="@types/google.maps" />
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "~/components/ui/card";

interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  badge?: string;
  mapsUrl?: string;
}

const locations: Location[] = [
  {
    name: "Winglass Herrenberg",
    address: "Rigipsstraße 7, 71083 Herrenberg",
    phone: "07032 / 2892161",
    hours: "Mo-Fr 09:00-18:00, Sa 09:00-15:00",
    coordinates: { lat: 48.5975, lng: 8.8664 },
    badge: "Zentrale",
    mapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4797599afd22c1a7:0x2bd207f999f1f770?sa=X&ved=1t:8290&ictx=111",
  },
  {
    name: "Winglass Bietigheim-Bissingen",
    address: "Asperger Str. 22, 74321 Bietigheim-Bissingen",
    phone: "07142 / 4695720",
    hours: "Mo-Fr 09:00-18:00, Sa 10:00-15:00",
    coordinates: { lat: 48.9594, lng: 9.1265 },
    badge: "Premium Service",
    mapsUrl:
      "https://www.google.com/maps/place/WINGLASS+GmbH/@48.9440853,9.1380809,17z/data=!3m1!4b1!4m6!3m5!1s0x4799d31e33181d41:0x69074e93b17ddb30!8m2!3d48.9440853!4d9.1380809!16s%2Fg%2F11vlv0thfw?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Google Maps Script laden
  useEffect(() => {
    if (!apiKey) return;

    const loadGoogleMapsScript = () => {
      if (window.google?.maps) {
        setIsLoaded(true);
        return Promise.resolve();
      }

      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setIsLoaded(true);
          resolve();
        };
        script.onerror = () =>
          reject(new Error("Google Maps script laden fehlgeschlagen"));
        document.head.appendChild(script);
      });
    };

    loadGoogleMapsScript().catch(console.error);
  }, [apiKey]);

  // Karte initialisieren
  useEffect(() => {
    if (!mapRef.current || !isLoaded) return;

    // Cleanup alte Karte
    if (map) {
      return;
    }

    // Berechne Zentrum zwischen allen Standorten
    const bounds = new google.maps.LatLngBounds();
    locations.forEach((location) => {
      bounds.extend(location.coordinates);
    });

    const newMap = new google.maps.Map(mapRef.current, {
      zoom: 10,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    newMap.fitBounds(bounds);
    setMap(newMap);

    // InfoWindow erstellen
    const infoWindow = new google.maps.InfoWindow();

    locations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: location.coordinates,
        map: newMap,
        title: location.name,
        animation: google.maps.Animation.DROP,
      });

      // InfoWindow Content mit Theme-gerechtem Styling
      const contentString = `
        <div style="padding: 16px; max-width: 300px; max-height: 300px; overflow: auto;font-family: system-ui, -apple-system, sans-serif;">
          <div style="margin-bottom: 12px;">
            <h3 style="margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #009dde;">
              ${location.name}
            </h3>
            ${location.badge ? `<span style="display: inline-block; padding: 4px 10px; font-size: 12px; background: hsl(0, 0%, 96%); border-radius: 6px; color: hsl(0, 0%, 45%); font-weight: 500;">${location.badge}</span>` : ""}
          </div>
          <div style="margin-top: 16px; font-size: 14px; line-height: 1.8; color: hsl(0, 0%, 10%);">
            <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
              <svg style="width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px; color: #009dde;" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span style="color: hsl(0, 0%, 45%);">${location.address}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <svg style="width: 18px; height: 18px; flex-shrink: 0; color: #009dde;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:${encodePhone(location.phone)}" style="color: #009dde; text-decoration: none; font-weight: 500;">
                ${location.phone}
              </a>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 16px;">
              <svg style="width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px; color: #009dde;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style="color: hsl(0, 0%, 45%);">${location.hours}</span>
            </div>
          </div>
          <a href="${location.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}" 
             target="_blank" 
             rel="noopener noreferrer"
             style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: #232a57; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; transition: opacity 0.2s;">
            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Auf Google Maps öffnen
          </a>
        </div>
      `;

      marker.addListener("click", () => {
        infoWindow.setContent(contentString);
        infoWindow.open(newMap, marker);
      });
    });
  }, [isLoaded, map]);

  return (
    <div>
        {!apiKey ? (
          <div className="h-[500px] bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Google Maps API Key fehlt</p>
          </div>
        ) : !isLoaded ? (
          <div className="h-[500px] bg-muted flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Karte wird geladen...</p>
            </div>
          </div>
        ) : (
          <div ref={mapRef} className="w-full h-[500px]" />
        )}
      </div>
  );
}

function encodePhone(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("0")) return `+49${digits.slice(1)}`;
  return digits;
}
