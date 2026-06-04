import { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import AdvantageGrid from '../components/AdvantageGrid';
import LocationMap from '../components/LocationMap';
import TestimonialGrid from '../components/TestimonialGrid';
import { updateMetaTags } from '../utils/seo';

const About = () => {
  useEffect(() => {
    updateMetaTags(
      'Tentang Reza Rent Car - Rental Mobil Hiace Semarang Terpercaya',
      'Reza Rent Car adalah penyedia layanan rental mobil Hiace Semarang terpercaya. Berpengalaman melayani kebutuhan transportasi dengan armada terawat dan layanan profesional 24/7.',
      'tentang reza rent car, rental mobil hiace semarang, sewa mobil semarang terpercaya, rental hiace semarang'
    );
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <AboutHero />
      <AdvantageGrid />
      <LocationMap />
      <TestimonialGrid />
    </div>
  );
};

export default About;
