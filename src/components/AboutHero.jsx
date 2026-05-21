import { useEffect } from 'react';
import { updateMetaTags, addStructuredData, businessStructuredData } from '../utils/seo';

const AboutHero = () => {
  useEffect(() => {
    updateMetaTags(
      'Tentang Reza Rent Car - Sewa Mobil Hiace Semarang Terpercaya',
      'Reza Rent Car adalah penyedia layanan sewa mobil Hiace Semarang terpercaya. Kami menyediakan mobil berkualitas dengan harga terjangkau dan layanan 24/7.',
      'sewa mobil hiace semarang, rental mobil semarang, tentang reza rent car'
    );
    addStructuredData(businessStructuredData);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(255,193,7,0.18),transparent_32%)]" />
      <div className="container-luxury relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-5">Tentang Kami</p>
          <h1 className="mb-5 text-4xl font-black md:text-5xl">Tentang Reza Rent Car Semarang</h1>
          <p className="text-lg leading-8 text-white/70">
            Reza Rent Car menyediakan layanan sewa mobil Hiace Semarang dan kendaraan premium lainnya untuk kebutuhan keluarga, bisnis, dan perjalanan wisata. Dengan pengalaman bertahun-tahun, kami berkomitmen memberikan layanan terbaik dengan harga terjangkau.
          </p>
        </div>
        <div className="rounded-lg border border-white/12 bg-white/8 p-8 text-white backdrop-blur">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><div className="text-3xl font-black text-secondary">100+</div><div className="text-sm text-white/62">Pelanggan</div></div>
            <div><div className="text-3xl font-black text-secondary">24/7</div><div className="text-sm text-white/62">Layanan</div></div>
            <div><div className="text-3xl font-black text-secondary">100%</div><div className="text-sm text-white/62">Terawat</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
