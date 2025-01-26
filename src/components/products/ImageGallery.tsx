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
      {/* Carrossel principal */}
      <Swiper
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, FreeMode]}
        className="h-[500px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Imagem ${index + 1} do produto`}
              className="object-contain w-full h-full p-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Miniaturas */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 thumbnails"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Miniatura ${index + 1}`}
              className="object-cover h-20 cursor-pointer border-2 border-transparent hover:border-primary transition-all"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageGallery;