import { useMemo, useState } from 'react';
import { useCarContext } from '../context/CarContext';
import CarCard from '../components/CarCard';
import CarDetailModal from '../components/CarDetailModal';
import FilterBar from '../components/FilterBar';

const Catalog = () => {
  const { cars, loading, error } = useCarContext();
  const [filters, setFilters] = useState({
    search: '',
    category: 'Semua',
    transmission: 'Semua',
    maxPrice: '',
  });
  const [selectedCar, setSelectedCar] = useState(null);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === 'Semua' || car.category === filters.category;
      const matchesTransmission = filters.transmission === 'Semua' || car.transmission === filters.transmission;
      const matchesPrice = !filters.maxPrice || car.price <= Number(filters.maxPrice);

      return matchesSearch && matchesCategory && matchesTransmission && matchesPrice;
    });
  }, [cars, filters]);

  return (
    <div className="min-h-screen bg-neutral-light">
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.18),transparent_34%)]" />
        <div className="container-luxury relative">
          <p className="eyebrow mb-4">Katalog Armada</p>
          <h1 className="mb-4 text-4xl font-black md:text-5xl">Katalog Mobil</h1>
          <p className="max-w-2xl leading-7 text-white/70">
            Pilih mobil berdasarkan kebutuhan kapasitas, transmisi, dan anggaran harian Anda.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-luxury">
          <FilterBar cars={cars} filters={filters} onChange={setFilters} />

          {loading && <div className="py-16 text-center text-gray-600">Memuat data mobil...</div>}
          {error && <div className="py-16 text-center text-red-600">{error}</div>}

          {!loading && !error && (
            <>
              <div className="mb-6 text-sm font-semibold text-gray-600">
                Menampilkan {filteredCars.length} dari {cars.length} mobil.
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} onClick={setSelectedCar} />
                ))}
              </div>
              {filteredCars.length === 0 && (
                <div className="rounded-lg bg-white py-16 text-center text-gray-600">
                  Tidak ada mobil yang cocok dengan filter saat ini.
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CarDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
};

export default Catalog;
