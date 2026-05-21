const ContactInfo = () => {
  return (
    <div className="rounded-luxury bg-white p-6 shadow-editorial">
      <p className="eyebrow mb-2 text-[10px]">Kontak Langsung</p>
      <h2 className="mb-5 text-xl font-extrabold text-primary">Informasi Kontak</h2>
      <ul className="space-y-0">
        <li className="flex items-start gap-3 border-b border-black/5 py-3.5">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-secondary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.47 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.64a11.92 11.92 0 005.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.95 0-3.19-1.24-6.19-3.51-8.42z" />
          </svg>
          <div className="text-sm">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-medium">WhatsApp</span>
            <span className="font-semibold text-primary">+62 878-6973-2988</span>
          </div>
        </li>
        <li className="flex items-start gap-3 border-b border-black/5 py-3.5">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="text-sm">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-medium">Telepon</span>
            <span className="font-semibold text-primary">+62 878-6973-2988</span>
          </div>
        </li>
        <li className="flex items-start gap-3 border-b border-black/5 py-3.5">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="text-sm">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-medium">Email</span>
            <span className="font-semibold text-primary">info@rentcar.com</span>
          </div>
        </li>
        <li className="flex items-start gap-3 pt-3.5">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="text-sm">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-medium">Alamat</span>
            <span className="font-semibold text-primary">Perusahaan Rowosari Megah Asri 1 Blok F No 3, Rowosari, Kec. Tembalang, Kota Semarang, Jawa Tengah 50271</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
