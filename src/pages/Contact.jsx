import { useEffect } from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';
import ContactForm from '../components/ContactForm';
import { updateMetaTags } from '../utils/seo';

const Contact = () => {
  useEffect(() => {
    updateMetaTags(
      'Hubungi Reza Rent Car - Sewa Mobil Hiace Semarang',
      'Hubungi Reza Rent Car Semarang untuk sewa mobil Hiace dan kendaraan premium lainnya. Layanan 24/7 via WhatsApp, telepon, dan email.',
      'hubungi reza rent car, sewa mobil hiace semarang, kontak rental mobil semarang'
    );
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light">
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,193,7,0.18),transparent_34%)]" />
        <div className="container-luxury relative">
          <p className="eyebrow mb-4">Hubungi Kami</p>
          <h1 className="mb-4 text-4xl font-black md:text-5xl">Hubungi Reza Rent Car Semarang</h1>
          <p className="max-w-2xl leading-7 text-white/70">
            Hubungi kami untuk ketersediaan sewa mobil Hiace Semarang, pemesanan, atau konsultasi kebutuhan transportasi Anda. Layanan 24/7 siap membantu.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-luxury grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <ContactInfo />
            <ContactMap />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
