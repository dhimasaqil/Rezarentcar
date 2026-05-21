import { sendWhatsAppGeneral } from '../utils/whatsapp';
import { useEffect } from 'react';
import { updateMetaTags, addStructuredData, businessStructuredData } from '../utils/seo';

const HeroSection = () => {
  useEffect(() => {
    updateMetaTags(
      'Sewa Mobil Hiace Semarang - Rental Mobil Terpercaya 24/7',
      'Sewa mobil Hiace Semarang terpercaya dengan harga terjangkau. Layanan 24/7, mobil terawat, dan proses booking mudah via WhatsApp.',
      'sewa mobil hiace semarang, rental mobil semarang, sewa hiace, rental hiace semarang'
    );
    addStructuredData(businessStructuredData);
  }, []);

  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-primary text-white">
      <img
        src="/images/heroimage.png"
        alt="Sewa mobil Hiace Semarang - Rental mobil terpercaya dengan harga terjangkau"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.68)_42%,rgba(0,0,0,0.24)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary to-transparent" />

      <div className="container-luxury relative z-10 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Sewa Mobil Hiace Semarang</p>
          <h1 className="mb-6 text-5xl font-black leading-[0.98] text-white md:text-6xl lg:text-7xl">
            Sewa Mobil Hiace Semarang Terpercaya
          </h1>
          <p className="mb-9 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
            Layanan sewa mobil Hiace Semarang berkualitas dengan harga terjangkau. Mobil terawat, layanan 24/7, dan proses booking mudah melalui WhatsApp.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={sendWhatsAppGeneral}
              className="btn-gold px-8 py-4"
              type="button"
            >
              Konsultasi via WhatsApp
            </button>
            <a href="/catalog" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 font-bold text-white transition-colors hover:border-secondary hover:text-secondary">
              Lihat Katalog
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ['24/7', 'Layanan'],
              ['100%', 'Terawat'],
              ['Cepat', 'Booking'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur">
                <div className="text-2xl font-black text-secondary">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
