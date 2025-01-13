import { useState, useEffect } from 'react';
import { GoogleReview } from '../types/review';
import { reviews } from '../data/reviews';

export function useGoogleReviews() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um pequeno delay para mostrar o loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { reviews, loading };
}