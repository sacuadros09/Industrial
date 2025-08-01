"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";

const proyectos = [
  {
    id: 1,
    titulo: "LÁMPARA RENDER",
    descripcion:
      "Lámpara de escritorio con diseño contemporáneo y estructura esférica que permite rotación total del foco. Fabricada con materiales como madera y metal, combina funcionalidad con estética minimalista. Ideal para espacios modernos de trabajo o lectura.",
    imagenes: ["/lamp.jpeg"],
    tags: ["Iluminación", "Mobiliario", "Oficina"],
  },
  {
    id: 2,
    titulo: "RHINO 50",
    descripcion:
      "Modelo a escala de la pistola Rhino 50, fabricado en MDF mediante corte láser.",
    imagenes: ["/pistolita.jpeg", "/pistolita1.jpeg"],
    tags: ["Maqueta", "MDF", "Corte Láser"],
  },
  {
    id: 3,
    titulo: "RASKAT",
    descripcion:
      "Centro modular para gatos que integra zonas de descanso, juego y rascado en una sola estructura compacta. Diseñado con materiales reciclables y revestimientos resistentes, ofrece una solución estética y funcional para el enriquecimiento ambiental felino.",
    imagenes: [
      "/raskat.jpeg",
      "/raskat2.jpeg",
      "/raskat3.jpeg",
      "/raskat4.jpeg",
      "/raskat5.jpeg",
    ],
    tags: ["Mascotas", "Mobiliario", "Modular"],
  },
  {
    id: 4,
    titulo: "LOVEBLEAS RENDER",
    descripcion:
      "Render de diseño interior para un local de venta de obleas, con una propuesta visual inspirada en el estilo retro americano. La distribución del espacio y el mobiliario están pensados para optimizar la atención al cliente en un ambiente colorido y acogedor.",
    imagenes: [
      "/lovebleas1.jpeg",
      "/lovebleas2.jpeg",
      "/lovebleas3.jpeg",
      "/lovebleas4.jpeg",
    ],
    tags: ["Comercial", "Diseño interior", "Render 3D"],
  },
  {
    id: 5,
    titulo: "PUESTO ITINERANTE LOVEBLEAS",
    descripcion:
      "Carrito de venta de obleas con diseño compacto e identidad visual llamativa, inspirado en una clásica combi. Concebido para ferias, plazas o espacios públicos, integra espacio de trabajo, almacenamiento y exhibición de productos.",
    imagenes: [
      "/carrito.jpeg",
      "/carrito1.jpeg",
      "/carrito2.jpeg",
      "/carrito4.jpeg",
    ],
    tags: ["Comercio", "Urbano", "Street food"],
  },
  {
    id: 6,
    titulo: "SCOOBY DOO RENDER",
    descripcion:
      "Representación digital en cristal de la icónica figura de Scooby-Doo. Este render explora el juego de transparencias, reflejos y refracciones en materiales vítreos, destacando el contraste entre un personaje animado y una estética escultórica refinada.",
    imagenes: ["/perrito.jpeg"],
    tags: ["Render 3D", "Visualización", "Personajes"],
  },

  {
    id: 7,
    titulo: "BRANIES",
    descripcion:
      "Brainly es un dinámico juego de mesa para 4 personas, diseñado en Illustrator, donde la rapidez mental es clave.",
    imagenes: [
      "/Brainly.jpeg",
      "/Brainly1.jpeg",
      "/Brainly2.jpeg",
      "/Brainly3.jpeg",
    ],
    tags: ["Ilustrator", "Juego", "Personajes"],
  },
];

// Componente para el carrusel interno de imágenes
const ImageCarousel = ({
  imagenes,
  titulo,
}: {
  imagenes: string[];
  titulo: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reiniciar el índice cuando cambien las imágenes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [imagenes]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagenes.length);
  };

  const handleImageClick = () => {
    if (imagenes.length > 1) {
      nextImage();
    }
  };

  return (
    <div className="relative group">
      <div
        className="relative overflow-hidden rounded-lg cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={`${imagenes[currentImageIndex]}?height=300&width=400`}
          alt={`${titulo} - Imagen ${currentImageIndex + 1}`}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Overlay con controles */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Indicador de click si hay múltiples imágenes */}
        {imagenes.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click para cambiar
          </div>
        )}

        {/* Indicadores de puntos - solo se muestran si hay más de una imagen */}
        {imagenes.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imagenes.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay effect - se mueve cada 5 segundos
  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-light text-black">Proyectos</h3>
        </div>

        <div className="relative">
          {/* Flecha izquierda - completamente afuera */}
          <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 border-gray-300 hover:border-gray-400 transition-colors bg-white/90 hover:bg-white shadow-lg" />

          {/* Flecha derecha - completamente afuera */}
          <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 border-gray-300 hover:border-gray-400 transition-colors bg-white/90 hover:bg-white shadow-lg" />

          <CarouselContent className="-ml-4">
            {proyectos.map((proyecto) => (
              <CarouselItem
                key={proyecto.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-0 shadow-none group cursor-pointer">
                  <CardContent className="p-0 h-full">
                    <ImageCarousel
                      key={`${proyecto.id}-carousel`}
                      imagenes={proyecto.imagenes}
                      titulo={proyecto.titulo}
                    />

                    <div className="space-y-3 mt-4">
                      <h4 className="text-xl font-light text-black group-hover:text-gray-700 transition-colors">
                        {proyecto.titulo}
                      </h4>

                      <p
                        className="text-gray-600 text-sm leading-relaxed overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {proyecto.descripcion}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {proyecto.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
