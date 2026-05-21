import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CarCarousel from '../components/CarCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import CarDetailModal from '../components/CarDetailModal';
import { sendWhatsAppGeneral } from '../utils/whatsapp';
import { useState } from 'react';

const services = [
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
      </svg>
    ),
    title: 'Harga Terjangkau',
    description: 'Harga sewa kompetitif dengan kualitas terbaik untuk semua kalangan.',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    title: 'Mobil Terawat',
    description: 'Semua mobil dalam kondisi prima dan terawat dengan baik.',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    title: 'Layanan 24/7',
    description: 'Siap melayani kebutuhan Anda kapan saja, 24 jam sehari.',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
      </svg>
    ),
    title: 'Proses Mudah',
    description: 'Booking cepat dan mudah melalui WhatsApp tanpa ribet.',
  },
];

const Home = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <HeroSection />

      <section className="section-padding bg-neutral-light">
        <div className="container-luxury">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow justify-center">Layanan</p>
            <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
              Keunggulan Layanan Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Showroom</p>
              <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
                Mobil Populer
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-gray-600">
              Pilih unit yang siap menemani kebutuhan harian, perjalanan keluarga, atau agenda bisnis.
            </p>
          </div>
          <CarCarousel onCarClick={handleCarClick} />
        </div>
      </section>

      <TestimonialSlider />

      <section className="bg-primary py-20 text-white">
        <div className="container-luxury text-center">
          <p className="eyebrow justify-center">Reservasi</p>
          <h2 className="mt-3 mb-4 text-3xl font-black md:text-4xl">Siap Mulai Perjalanan?</h2>
          <p className="mx-auto mb-8 max-w-2xl leading-7 text-white/65">
            Tim kami siap membantu memilih mobil yang sesuai dengan kebutuhan perjalanan Anda.
          </p>
          <button
            onClick={sendWhatsAppGeneral}
            className="btn-gold px-8 py-4"
            type="button"
          >
            Konsultasi Sekarang
          </button>
        </div>
      </section>

      <CarDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
};

export default Home;
