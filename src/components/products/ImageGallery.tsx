import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageGallery = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="relative group rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Carrossel principal - Ajustado para formato quadrado */}
      <div className="relative pt-[100%]">
        <Swiper
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, FreeMode]}
          className="absolute inset-0"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="bg-gray-50">
              <div className="absolute inset-0 p-8">
                <img
                  src={img}
                  alt={`Imagem ${index + 1} do produto`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Miniaturas */}
      <div className="mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnails"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative pt-[100%]">
                <div className="absolute inset-0">
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-contain cursor-pointer border-2 border-transparent hover:border-primary transition-all bg-gray-50 rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;