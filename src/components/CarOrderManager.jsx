import { useState } from 'react';

const CarOrderManager = ({ cars, onReorder, busy }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [orderedCars, setOrderedCars] = useState(cars);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (index) => {
    if (draggedItem === null || draggedItem === index) return;

    const newCars = [...orderedCars];
    const draggedCar = newCars[draggedItem];
    newCars.splice(draggedItem, 1);
    newCars.splice(index, 0, draggedCar);

    setOrderedCars(newCars);
    setDraggedItem(null);
  };

  const handleSaveOrder = async () => {
    await onReorder(orderedCars);
  };

  const handleResetOrder = () => {
    setOrderedCars(cars);
    setDraggedItem(null);
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newCars = [...orderedCars];
    [newCars[index - 1], newCars[index]] = [newCars[index], newCars[index - 1]];
    setOrderedCars(newCars);
  };

  const moveDown = (index) => {
    if (index === orderedCars.length - 1) return;
    const newCars = [...orderedCars];
    [newCars[index], newCars[index + 1]] = [newCars[index + 1], newCars[index]];
    setOrderedCars(newCars);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Atur Urutan Mobil</h2>
        <p className="text-sm text-gray-600">Drag atau gunakan tombol untuk mengatur urutan</p>
      </div>

      <div className="space-y-2 mb-4">
        {orderedCars.map((car, index) => (
          <div
            key={car.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            className={`flex items-center gap-3 rounded-lg border-2 p-3 transition-all ${
              draggedItem === index
                ? 'border-secondary bg-secondary/10 opacity-50'
                : 'border-gray-200 hover:border-secondary'
            } cursor-move`}
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-semibold text-sm">
              {index + 1}
            </div>

            <div className="flex-grow">
              <p className="font-semibold text-primary">{car.name}</p>
              <p className="text-xs text-gray-600">{car.category} • Rp {car.price.toLocaleString('id-ID')}</p>
            </div>

            <div className="flex gap-1 flex-shrink-0">
              <button
                type="button"
                onClick={() => moveUp(index)}
                disabled={index === 0}
                className="rounded bg-gray-200 px-2 py-1 text-sm font-semibold text-primary disabled:opacity-40 hover:bg-gray-300"
                title="Naik"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => moveDown(index)}
                disabled={index === orderedCars.length - 1}
                className="rounded bg-gray-200 px-2 py-1 text-sm font-semibold text-primary disabled:opacity-40 hover:bg-gray-300"
                title="Turun"
              >
                ↓
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleSaveOrder}
          disabled={busy}
          className="rounded bg-primary px-4 py-2 font-semibold text-white disabled:opacity-60"
        >
          {busy ? 'Menyimpan...' : 'Simpan Urutan'}
        </button>
        <button
          type="button"
          onClick={handleResetOrder}
          disabled={busy}
          className="rounded bg-gray-200 px-4 py-2 font-semibold text-primary disabled:opacity-60"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CarOrderManager;
