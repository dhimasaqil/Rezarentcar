const LocationInfo = () => {
  return (
    <section className="bg-neutral-light py-20">
      <div className="container-luxury grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Lokasi</p>
          <h2 className="mt-3 mb-4 text-3xl font-black text-primary">Lokasi Sewa Mobil Semarang</h2>
          <p className="mb-6 leading-7 text-gray-700">
            Kami berlokasi di Semarang dan melayani area kota dan sekitarnya dengan pengantaran unit sesuai kesepakatan. Sewa mobil Hiace Semarang kami siap melayani kebutuhan transportasi Anda.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="rounded-lg border border-black/8 bg-white p-4"><strong className="text-primary">Alamat:</strong> Perusahaan Rowosari Megah Asri 1 Blok F No 3, Rowosari, Kec. Tembalang, Kota Semarang, Jawa Tengah 50271</li>
            <li className="rounded-lg border border-black/8 bg-white p-4"><strong className="text-primary">Jam operasional:</strong> 24 jam melalui WhatsApp</li>
            <li className="rounded-lg border border-black/8 bg-white p-4"><strong className="text-primary">Pengantaran:</strong> tersedia berdasarkan lokasi</li>
          </ul>
        </div>
        <div className="min-h-72 overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <iframe
            title="Peta lokasi Reza Rent Car Semarang"
            className="h-80 w-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4454.413304621657!2d110.47857719999999!3d-7.070387500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708f32e0d74247%3A0x6de0f3397cf13124!2sReza%20Rent%20Car%20Semarang%20(Rental%20Mobil%20Hiace%20Elf%20Bus%20Semarang)!5e1!3m2!1sid!2sid!4v1779376417065!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
