import { Link } from 'react-router-dom';
import { useCarContext } from '../context/CarContext';
import CarCard from './CarCard';

const CarCarousel = ({ onCarClick }) => {
  const { cars, loading } = useCarContext();
  const popularCars = cars.slice(0, 3);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-secondary" />
      </div>
    );
  }

  if (popularCars.length === 0) {
    return <div className="py-12 text-center text-gray-600">Belum ada mobil tersedia.</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {popularCars.map((car) => (
          <CarCard key={car.id} car={car} onClick={onCarClick} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/catalog"
          className="btn-gold px-8 py-3"
        >
          Lihat Semua Katalog
        </Link>
      </div>
    </div>
  );
};

export default CarCarousel;
