const FilterBar = ({ cars, filters, onChange }) => {
  const categories = ['Semua', ...new Set(cars.map((car) => car.category))];
  const transmissions = ['Semua', ...new Set(cars.map((car) => car.transmission))];

  const updateFilter = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="mb-10 rounded-luxury bg-white p-6 shadow-editorial">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-[10px]">Filter Armada</p>
          <h2 className="mt-2 text-lg font-extrabold text-primary">Temukan mobil yang sesuai</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <input
          value={filters.search}
          onChange={(event) => updateFilter('search', event.target.value)}
          className="field-luxury"
          placeholder="Cari nama mobil"
        />
        <select
          value={filters.category}
          onChange={(event) => updateFilter('category', event.target.value)}
          className="field-luxury"
        >
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
        <select
          value={filters.transmission}
          onChange={(event) => updateFilter('transmission', event.target.value)}
          className="field-luxury"
        >
          {transmissions.map((transmission) => <option key={transmission}>{transmission}</option>)}
        </select>
        <input
          value={filters.maxPrice}
          onChange={(event) => updateFilter('maxPrice', event.target.value)}
          className="field-luxury"
          placeholder="Harga maksimal"
          type="number"
          min="0"
        />
      </div>
    </div>
  );
};

export default FilterBar;
