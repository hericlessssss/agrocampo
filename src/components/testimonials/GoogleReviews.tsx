import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';

const GoogleReviews = () => {
  const { reviews, loading } = useGoogleReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => 
      current === reviews.length - 1 ? 0 : current + 1
    );
  }, [reviews.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((current) => 
      current === 0 ? reviews.length - 1 : current - 1
    );
  }, [reviews.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md animate-pulse"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-200 w-12 h-12 rounded-full" />
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className="relative max-w-4xl mx-auto px-16" // Adicionado padding horizontal
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.author_name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{review.text}</p>
                <p className="text-sm text-gray-400">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button 
        onClick={previousSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200" // Removido translate negativo e aumentado padding
        aria-label="Avaliação anterior"
      >
        <ChevronLeft className="w-6 h-6 text-secondary" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200" // Removido translate positivo e aumentado padding
        aria-label="Próxima avaliação"
      >
        <ChevronRight className="w-6 h-6 text-secondary" />
      </button>

      {/* Indicadores de slide */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
            }`}
            aria-label={`Ir para avaliação ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;