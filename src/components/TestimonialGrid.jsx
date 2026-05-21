const testimonials = [
  { name: 'Budi Santoso', review: 'Mobil nyaman untuk keluarga dan proses pengambilan mudah.' },
  { name: 'Andi Wijaya', review: 'Cocok untuk kebutuhan perjalanan kerja. Timnya responsif.' },
  { name: 'Rina Putri', review: 'Harga jelas, unit bersih, dan komunikasi lancar.' },
];

const TestimonialGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow justify-center">Pengalaman</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Cerita Pelanggan
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-luxury bg-neutral-soft p-6 shadow-editorial transition-all duration-500 hover:-translate-y-1 hover:shadow-editorial-hover"
            >
              <div className="mb-3 text-sm tracking-wider text-secondary">★★★★★</div>
              <p className="mb-5 text-sm leading-7 text-neutral-dark/80 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="divider-gold mb-3" />
              <h3 className="font-extrabold text-primary">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
