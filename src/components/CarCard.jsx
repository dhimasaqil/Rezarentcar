const fallbackCarImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFC107"%3E%3Cpath d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/%3E%3C/svg%3E';

const CarCard = ({ car, onClick }) => {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-luxury bg-white shadow-editorial transition-all duration-500 hover:-translate-y-1.5 hover:shadow-editorial-hover"
      onClick={() => onClick?.(car)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.(car);
        }
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-neutral-light">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = fallbackCarImage;
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute right-3 top-3 rounded-md bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-medium">
              {car.year}
            </p>
            <h3 className="text-lg font-extrabold text-primary">{car.name}</h3>
          </div>
          <span className="shrink-0 rounded-md border border-black/8 bg-neutral-light px-2 py-0.5 text-[11px] font-semibold text-neutral-dark">
            {car.transmission}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 border-y border-black/6 py-3.5">
          <span className="text-xl font-extrabold text-primary">
            Rp {car.price.toLocaleString('id-ID')}
          </span>
          <span className="ml-1 text-sm font-medium text-neutral-medium">/hari</span>
        </div>

        {/* Specs */}
        <div className="mb-5 grid grid-cols-3 gap-2 text-[11px] font-semibold text-neutral-dark">
          <div className="rounded-lg bg-neutral-soft p-2.5 text-center">
            <svg className="mx-auto mb-1 h-3.5 w-3.5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            {car.capacity} orang
          </div>
          <div className="rounded-lg bg-neutral-soft p-2.5 text-center">
            <svg className="mx-auto mb-1 h-3.5 w-3.5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {car.transmission}
          </div>
          <div className="rounded-lg bg-neutral-soft p-2.5 text-center">
            <svg className="mx-auto mb-1 h-3.5 w-3.5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            {car.fuel}
          </div>
        </div>

        <button className="btn-dark w-full px-5 py-3 text-sm" type="button">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CarCard;
