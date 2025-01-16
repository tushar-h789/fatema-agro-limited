'use client'

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import banner1 from '../../../public/banner-khejur-gur-02.png';
import banner2 from '../../../public/banner-sorisar-tel-2L-5L.png';
import banner3 from '../../../public/banner-sorisar-tel-5L-02.png';
import Image from "next/image";
import ArrayRightIcon from "../../../../shared/icons/right-arrow";
import ArrayLeftIcon from "../../../../shared/icons/left-arrow";
import Link from "next/link";

export function BannerCarousel() {
  // Using the Embla carousel hook with autoplay and looping enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  // Handlers for scrolling the carousel slides
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Log the slide nodes when emblaApi is available (for debugging purposes)
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="relative"> {/* Container for positioning custom arrows */}
      {/* Embla Carousel */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {/* Slide 1 */}
          <Link href='/gur' className="embla__slide min-w-full h-[200px] md:h-[400px] lg:h-[600px]">
            <Image
              src={banner1}
              alt="Banner 1"
              className="w-full h-[90vh] object-cover"
              priority
            />
          </Link>
          {/* Slide 2 */}
          <Link href='/tel' className="embla__slide min-w-full h-[200px] md:h-[400px] lg:h-[600px]">
            <Image
              src={banner2}
              alt="Banner 2"
              className="w-full h-[90vh] object-cover"
              priority
            />
          </Link>
          {/* Slide 3 */}
          <Link href='/tel' className="embla__slide min-w-full h-[200px] md:h-[400px] lg:h-[600px]">
            <Image
              src={banner3}
              alt="Banner 3"
              className="w-full h-[90vh] object-cover"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 md:p-2 lg:p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        onClick={scrollPrev}
      >
        <ArrayLeftIcon className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 text-white" />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 md:p-2 lg:p-3 bg-white rounded-full transition-all duration-300"
        onClick={scrollNext}
      >
        <ArrayRightIcon className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 text-white " />
      </button>
    </div>
  );
}
