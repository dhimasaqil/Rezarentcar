const advantages = [
  { title: 'Armada Terawat', description: 'Setiap unit dicek berkala agar siap dipakai untuk perjalanan harian maupun jarak jauh.' },
  { title: 'Harga Transparan', description: 'Informasi harga dan syarat disampaikan sejak awal sebelum pemesanan.' },
  { title: 'Respon Cepat', description: 'Pemesanan dan konsultasi dilakukan langsung melalui WhatsApp.' },
  { title: 'Pilihan Fleksibel', description: 'Tersedia beberapa kategori mobil untuk kebutuhan keluarga, kota, dan premium.' },
];

const AdvantageGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow justify-center">Keunggulan</p>
          <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">Kenapa Memilih Kami</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="rounded-lg border border-black/8 bg-neutral-soft p-6">
              <div className="mb-5 h-1 w-12 bg-secondary" />
              <h3 className="mb-3 text-xl font-black text-primary">{advantage.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageGrid;
