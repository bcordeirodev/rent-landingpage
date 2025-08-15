'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Heading from '@/components/atoms/Heading';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample images - replace with real images
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      alt: 'Cadeiras organizadas para evento',
    },
    {
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      alt: 'Setup completo de cadeiras para casamento',
    },
    {
      src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
      alt: 'Arranjo de cadeiras para festa',
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Cadeiras para evento corporativo',
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      alt: 'Evento ao ar livre com cadeiras',
    },
    {
      src: 'https://images.unsplash.com/photo-1549451371-64aa98a6f0b2?w=800&q=80',
      alt: 'Festa de aniversário com cadeiras',
    },
  ];

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-neutral-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <Heading level={2} className="mb-6">
            Nossos Trabalhos
          </Heading>
          <p className="text-lg text-neutral-300">
            Veja alguns dos eventos que já realizamos e a qualidade
            das nossas cadeiras em diferentes ocasiões.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="gallery-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/90 hover:bg-neutral-700 rounded-full shadow-lg flex items-center justify-center text-neutral-200 hover:text-primary-400 transition-all duration-200 hover:scale-110">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="gallery-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/90 hover:bg-neutral-700 rounded-full shadow-lg flex items-center justify-center text-neutral-200 hover:text-primary-400 transition-all duration-200 hover:scale-110">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Image counter */}
        <div className="text-center mt-8">
          <span className="text-sm text-neutral-400">
            {activeIndex + 1} de {images.length}
          </span>
        </div>
      </div>

      <style jsx global>{`
        .gallery-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #6b7280;
          opacity: 1;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
        }
      `}</style>
    </section>
  );
}
