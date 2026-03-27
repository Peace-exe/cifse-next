"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  { id: 1, image: "/images/img1.jpg", alt: "Emergency response simulation training session", title: "Real-World Emergency Simulations" },
  { id: 2, image: "/images/img2.jpg", alt: "Emergency response simulation training session", title: "Where Theory meets Practice" },
  { id: 3, image: "/images/img3.jpg", alt: "Fire engineering students in classroom discussion", title: "Expert Faculty & Interactive Learning" },
  { id: 4, image: "/images/img4.jpg", alt: "Modern fire safety equipment and technology", title: "Hands-On Fire and Safety Mock Drills" },
  { id: 5, image: "/images/img5.jpg", alt: "Fire safety engineering graduation ceremony", title: "Successful Alumni & Career Growth" },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-150 mx-auto group">
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0 relative">
              <img
                src={slide.image || "/placeholder.svg"}
                width={600}
                height={400}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="absolute top-2 right-2">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-white text-xs font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-600 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <div className="flex justify-center mt-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
        >
          {isAutoPlaying ? (
            <>
              <Pause className="h-3 w-3" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="h-3 w-3" />
              <span>Play</span>
            </>
          )}
          Slideshow
        </button>
      </div>
    </div>
  );
}