import AboutHero from '../components/AboutHero';
import AdvantageGrid from '../components/AdvantageGrid';
import LocationMap from '../components/LocationMap';
import TestimonialGrid from '../components/TestimonialGrid';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AdvantageGrid />
      <LocationMap />
      <TestimonialGrid />
    </div>
  );
};

export default About;
