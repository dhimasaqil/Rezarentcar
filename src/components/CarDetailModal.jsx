import ImageGallery from './ImageGallery';
import { sendWhatsAppCarInquiry } from '../utils/whatsapp';

const CarDetailModal = ({ car, onClose }) => {
  if (!car) return null;

  const images = car.images?.length ? car.images : [car.image];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-luxury bg-white shadow-editorial-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/6 px-6 py-5">
          <div>
            <p className="eyebrow mb-1 text-[10px]">{car.category}</p>
            <h2 className="text-xl font-extrabold text-primary">{car.name}</h2>
            <p className="mt-0.5 text-sm text-neutral-medium">{car.category} &middot; {car.year}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-luxury border border-black/8 text-2xl leading-none text-neutral-medium transition-all hover:border-secondary hover:text-primary"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
          <ImageGallery images={images} alt={car.name} />

          <div>
            {/* Price */}
            <div className="mb-5 rounded-luxury bg-neutral-soft p-4">
              <span className="text-2xl font-extrabold text-primary">
                Rp {car.price.toLocaleString('id-ID')}
              </span>
              <span className="ml-1.5 text-sm text-neutral-medium">/hari</span>
            </div>

            {/* Specs */}
            <div className="mb-6 grid grid-cols-2 gap-2.5 text-sm">
              <div className="rounded-luxury border border-black/6 bg-neutral-soft p-3">
                <span className="text-neutral-medium">Kapasitas:</span>{' '}
                <strong className="text-primary">{car.capacity} orang</strong>
              </div>
              <div className="rounded-luxury border border-black/6 bg-neutral-soft p-3">
                <span className="text-neutral-medium">Transmisi:</span>{' '}
                <strong className="text-primary">{car.transmission}</strong>
              </div>
              <div className="rounded-luxury border border-black/6 bg-neutral-soft p-3">
                <span className="text-neutral-medium">Bahan bakar:</span>{' '}
                <strong className="text-primary">{car.fuel}</strong>
              </div>
              <div className="rounded-luxury border border-black/6 bg-neutral-soft p-3">
                <span className="text-neutral-medium">Tahun:</span>{' '}
                <strong className="text-primary">{car.year}</strong>
              </div>
            </div>

            <p className="mb-5 text-sm leading-7 text-neutral-dark/80">{car.description}</p>

            <h3 className="mb-2.5 text-sm font-extrabold uppercase tracking-wide text-primary">Fitur</h3>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {car.features?.map((feature) => (
                <span
                  key={feature}
                  className="rounded-md bg-secondary/12 px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>

            <h3 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-primary">Syarat</h3>
            <p className="mb-6 text-sm leading-6 text-neutral-dark/70">{car.terms}</p>

            <button
              type="button"
              onClick={() => sendWhatsAppCarInquiry(car.name, car.price)}
              className="btn-gold w-full px-6 py-3.5 text-sm"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.47 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.64a11.92 11.92 0 005.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.95 0-3.19-1.24-6.19-3.51-8.42z" />
              </svg>
              Tanya Ketersediaan via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;
