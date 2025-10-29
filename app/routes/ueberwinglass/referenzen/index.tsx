import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import PageTitle from "~/components/page-title";
import { SectionTitle } from "~/components/section-title";
import { Car, ChevronLeft, ChevronRight, X } from "lucide-react";

export function meta() {
  return [
    { title: "Referenzen – Unsere Arbeiten | Winglass" },
    {
      name: "description",
      content:
        "Überzeugen Sie sich von unserer Arbeit. Referenzbilder unserer Autoglas-Projekte an verschiedenen Fahrzeugmodellen.",
    },
  ];
}

interface Vehicle {
  id: string;
  name: string;
  folder: string;
  images: string[];
}

const vehicles: Vehicle[] = [
  {
    id: "4er",
    name: "BMW 4er",
    folder: "4er",
    images: ["IMG_5423.JPG", "IMG_5424.JPG", "IMG_5425.JPG", "IMG_5426.JPG"],
  },
  {
    id: "992",
    name: "Porsche 992",
    folder: "992",
    images: ["IMG_5577.JPG", "IMG_5587.JPG", "IMG_5591.JPG"],
  },
  {
    id: "e-klasse",
    name: "Mercedes E-Klasse",
    folder: "E-Klasse",
    images: ["IMG_5059.JPG", "IMG_5064.JPG", "IMG_5066.JPG", "IMG_5070.JPG"],
  },
  {
    id: "g-klasse",
    name: "Mercedes G-Klasse",
    folder: "G-Klasse",
    images: [
      "IMG_3931.JPG",
      "IMG_3936.JPG",
      "IMG_3940.JPG",
      "IMG_3955.JPG",
      "IMG_3968.JPG",
    ],
  },
  {
    id: "gt3rs",
    name: "Porsche GT3 RS",
    folder: "GT3RS",
    images: [
      "IMG_5492.JPG",
      "IMG_5494.JPG",
      "IMG_5501.JPG",
      "IMG_5513.JPG",
      "IMG_5515.JPG",
    ],
  },
  {
    id: "lkw",
    name: "LKW",
    folder: "LKW",
    images: ["IMG_4987.JPG", "IMG_5016.JPG", "IMG_5020.JPG", "IMG_5024.JPG"],
  },
  {
    id: "macan",
    name: "Porsche Macan",
    folder: "Macan",
    images: [
      "IMG_1070.JPEG",
      "IMG_1080.JPG",
      "IMG_1083.JPG",
      "IMG_1084.JPG",
      "IMG_1087.JPG",
    ],
  },
  {
    id: "toyota",
    name: "Toyota",
    folder: "Toyota",
    images: ["IMG_5246.JPG", "IMG_5247.JPG", "IMG_5248.JPG", "IMG_5257.JPG"],
  },
];

export default function Referenzen() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(vehicles[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedVehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedVehicle.images.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <PageTitle
        title="Referenzen"
        subtitle="Überzeugen Sie sich von unserer Arbeit"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über Winglass" },
          { label: "Referenzen" },
        ]}
        backgroundImage="/images/slider/AdobeStock_284279764-2048x1365.webp"
      />

      <div className="container mx-auto px-4">
        <section className="py-16">
          <SectionTitle
            badge="Unsere Arbeiten"
            title="Professionelle Autoglas-Arbeiten"
            subtitle="Wählen Sie ein Fahrzeugmodell aus, um unsere Arbeiten in der Galerie zu sehen."
            align="left"
          />

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Fahrzeugauswahl - Links */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Fahrzeugmodelle</h3>
                  <div className="space-y-2">
                    {vehicles.map((vehicle) => (
                      <Button
                        key={vehicle.id}
                        variant={
                          selectedVehicle.id === vehicle.id
                            ? "default"
                            : "outline"
                        }
                        className="w-full justify-start"
                        onClick={() => setSelectedVehicle(vehicle)}
                      >
                        <Car className="w-4 h-4 mr-2" />
                        {vehicle.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bildergalerie - Rechts */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">
                    {selectedVehicle.name}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedVehicle.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={`/images/Bilder/${selectedVehicle.folder}/${image}`}
                          alt={`${selectedVehicle.name} - Bild ${index + 1}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-6xl max-h-[90vh] px-16">
            <img
              src={`/images/Bilder/${selectedVehicle.folder}/${selectedVehicle.images[currentImageIndex]}`}
              alt={`${selectedVehicle.name} - Bild ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-white mt-4">
              {currentImageIndex + 1} / {selectedVehicle.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
