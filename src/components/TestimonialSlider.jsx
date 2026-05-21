import { useState } from 'react';

const testimonials = [
  { name: 'Budi Santoso', role: 'Pelanggan keluarga', review: 'Mobil bersih, proses cepat, dan tim responsif saat kami butuh perubahan jadwal.', rating: 5 },
  { name: 'Andi Wijaya', role: 'Perjalanan bisnis', review: 'Pilihan mobilnya sesuai kebutuhan. Harga jelas dari awal tanpa biaya tersembunyi.', rating: 5 },
  { name: 'Rina Putri', role: 'Liburan akhir pekan', review: 'Booking lewat WhatsApp praktis dan mobil datang tepat waktu.', rating: 5 },
];

const TestimonialSlider = () => {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <section className="section-padding bg-editorial">
      <div className="container-luxury text-center">
        <p className="eyebrow justify-center">Testimoni</p>
        <h2 className="mt-3 mb-12 text-3xl font-extrabold text-primary md:text-4xl">
          Pengalaman Pelanggan
        </h2>

        <div className="surface-light mx-auto max-w-2xl rounded-luxury p-8 md:p-10">
          <div className="mb-4 text-xl tracking-wider text-secondary">
            {'★'.repeat(item.rating)}
          </div>
          <p className="mb-7 text-lg leading-8 text-neutral-dark/80 italic">
            &ldquo;{item.review}&rdquo;
          </p>
          <div className="divider-gold mx-auto mb-4" />
          <h3 className="font-extrabold text-primary">{item.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-neutral-medium">{item.role}</p>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Tampilkan testimoni ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === index
                  ? 'w-7 bg-secondary'
                  : 'w-2.5 bg-black/15 hover:bg-black/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
