import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, HistoryIcon } from "lucide-react";

const images = [
  "https://placehold.co/500x400?text=1",
  "https://placehold.co/500x400?text=2",
  "https://placehold.co/500x400?text=3",
  "https://placehold.co/500x400?text=4",
];

const SLIDE_DURATION = 4000; // 4 seconds per slide

const CarouselComponent: React.FC = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: SLIDE_DURATION })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  // Update selected index & reset progress when slide changes
  useEffect(() => {
    if (!embla) return;
    
    const autoplay = embla.plugins().autoplay;
    embla.on("select", () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setProgress(0); // Reset progress when changing slides
    });

    embla.on("pointerDown", autoplay.stop);
    embla.on("pointerUp", () => autoplay.play());

  }, [embla]);

  // Progress Bar Animation
  useEffect(() => {
    let startTime: number;
    let frame: number;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const percentage = (elapsed / SLIDE_DURATION) * 100;

      if (percentage < 100) {
        setProgress(percentage);
        frame = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
      }
    };

    frame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(frame);
  }, [selectedIndex]); // Re-run on slide change

  return (
    <section className="mt-10 mb-10 py-10 px-5 sm:h-screen h-auto ">
      <div className="flex items-center justify-center mb-12 text-black">
        <HistoryIcon className="w-12 h-12 mr-3 drop-shadow-lg" />
        <h2 className="text-lg sm:text-4xl font-bold font-Krona sm:text-left text-center">
          Last Edition / Hackathon 24 Flashbacks
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden rounded-xl rounded-b-none border shadow-lg">
          <div className="flex">
            {images.map((src, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-80 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar (Fixed) */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="w-full h-2 bg-gray-700">
            <div
              className="h-2 bg-yellow-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900/70 p-3 rounded-full text-white shadow-md hover:bg-yellow-500 transition"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900/70 p-3 rounded-full text-white shadow-md hover:bg-yellow-500 transition"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                selectedIndex === index ? "bg-yellow-500 scale-110" : "bg-gray-500"
              } transition-all`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
