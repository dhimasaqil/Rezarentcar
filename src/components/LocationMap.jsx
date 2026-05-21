const LocationMap = () => {
  return (
    <section className="bg-neutral-light py-20">
      <div className="container-luxury grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Lokasi</p>
          <h2 className="mt-3 mb-4 text-3xl font-black text-primary">Area Layanan</h2>
          <p className="mb-6 leading-7 text-gray-700">
            Kami melayani area kota dan sekitarnya dengan pengantaran unit sesuai kesepakatan.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="rounded-lg border border-black/8 bg-white p-4"><strong className="text-primary">Alamat:</strong> Jl. Rental Mobil No. 12, Jakarta</li>
            <li className="rounded-lg border border-black/8 bg-white p-4"><strong className="text-primary">Jam operasional:</strong> 24 jam melalui WhatsApp</li>
            <li className="rounded-lg border border-black/8 bg-white p-4"><strong className="text-primary">Pengantaran:</strong> tersedia berdasarkan lokasi</li>
          </ul>
        </div>
        <div className="min-h-72 overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <iframe
            title="Peta lokasi RentCar"
            className="h-80 w-full grayscale"
            loading="lazy"
            src="https://www.google.com/maps?q=Jakarta&output=embed"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
