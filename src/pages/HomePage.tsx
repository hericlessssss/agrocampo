import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ServicesSection from '../components/services/ServicesSection';
import ProductsSection from '../components/products/ProductsSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import PartnersSection from '../components/partners/PartnersSection';
import DeliverySection from '../components/delivery/DeliverySection';
import { scrollToSection } from '../utils/navigation';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <PartnersSection />
      <DeliverySection />
    </>
  );
};

export default HomePage;