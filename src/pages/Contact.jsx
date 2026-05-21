import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-light">
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,193,7,0.18),transparent_34%)]" />
        <div className="container-luxury relative">
          <p className="eyebrow mb-4">Hubungi Kami</p>
          <h1 className="mb-4 text-4xl font-black md:text-5xl">Kontak Kami</h1>
          <p className="max-w-2xl leading-7 text-white/70">
            Hubungi kami untuk ketersediaan mobil, pemesanan, atau konsultasi kebutuhan transportasi.
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
