"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "../../../public/banner-khejur-gur-02.png";
import banner2 from "../../../public/banner-sorisar-tel-2L-5L.png";
import banner3 from "../../../public/pera-sondesh.png";
import Image from "next/image";
import ArrayRightIcon from "../../../../shared/icons/right-arrow";
import ArrayLeftIcon from "../../../../shared/icons/left-arrow";
import Link from "next/link";

export function BannerCarousel() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // For autoplay, uncomment below:
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {/* Slide 1 */}
          <Link href="/gur" className="embla__slide relative min-w-full">
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
              <Image
                src={banner1}
                alt="Banner 1"
                className="w-full h-full object-contain"
                priority
                fill
              />
            </div>
          </Link>

          {/* Slide 2 */}
          <Link href="/tel" className="embla__slide relative min-w-full">
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
              <Image
                src={banner2}
                alt="Banner 2"
                className="w-full h-full object-contain"
                priority
                fill
              />
            </div>
          </Link>

          {/* Slide 3 */}
          <Link
            href="/desart/pera-sondesh"
            className="embla__slide relative min-w-full"
          >
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
              <Image
                src={banner3}
                alt="Banner 3"
                className="w-full h-full object-contain"
                priority
                fill
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <button
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-10"
        onClick={scrollPrev}
      >
        <ArrayLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
      </button>
      <button
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-10"
        onClick={scrollNext}
      >
        <ArrayRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
      </button>
    </div>
  );
}
