"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import gallery1 from "@/assets/gallery-(1).jpg";
import gallery2 from "@/assets/gallery-(2).jpg";
import gallery3 from "@/assets/gallery-(3).jpg";
import gallery4 from "@/assets/gallery-(4).jpg";
import gallery5 from "@/assets/gallery-(5).jpg";
import gallery6 from "@/assets/gallery-(6).jpg";
// add more imports here as needed:
// import gallery7 from "@/assets/gallery-(7).jpg";

const galleryItems: { src: StaticImageData; alt: string }[] = [
  { src: gallery1, alt: "Gallery image 1" },
  { src: gallery2, alt: "Gallery image 2" },
  { src: gallery3, alt: "Gallery image 3" },
  { src: gallery4, alt: "Gallery image 4" },
  { src: gallery5, alt: "Gallery image 5" },
  { src: gallery6, alt: "Gallery image 6" },
  // add more here as you import them
];

const PAGE_SIZE = 9;

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(galleryItems.length / PAGE_SIZE);
  const currentItems = galleryItems.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const lightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((l) => (l !== null ? Math.max(0, l - 1) : null));
  };

  const lightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((l) => (l !== null ? Math.min(galleryItems.length - 1, l + 1) : null));
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="py-16 md:py-24 text-center px-6">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
          Campus Life & Events
        </p>
        <h1 className="bold font-sans tracking-tight text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Photo Gallery
        </h1>
        <div className="mt-4 mx-auto w-16 h-px bg-foreground/30" />
        <p className="mt-6 font-sans text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
          A visual chronicle of academic achievements, cultural events, institutional milestones, and campus life at our institute.
        </p>
      </header>

      {/* Masonry Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-12 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className="break-inside-avoid group cursor-pointer"
            onClick={() => setLightbox(page * PAGE_SIZE + idx)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-500">
              <Image
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </main>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pb-16">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors"
          >
            <ArrowLeftIcon size={16} weight="bold" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === page ? "bg-foreground w-5" : "bg-border"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors"
          >
            <ArrowRightIcon size={16} weight="bold" />
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <XIcon size={32} weight="bold" />
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors"
              onClick={lightboxPrev}
            >
              <ArrowLeftIcon size={32} weight="bold" />
            </button>
          )}

          {/* Image */}
          <Image
            src={galleryItems[lightbox].src}
            alt={galleryItems[lightbox].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {lightbox < galleryItems.length - 1 && (
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors"
              onClick={lightboxNext}
            >
              <ArrowRightIcon size={32} weight="bold" />
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-6 text-white/50 text-sm font-sans">
            {lightbox + 1} / {galleryItems.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;