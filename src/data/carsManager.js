const STORAGE_KEY = 'rentcar_cars';

export const loadCarsFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading cars from storage:', error);
    return null;
  }
};

export const saveCarsToStorage = (cars) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
    return true;
  } catch (error) {
    console.error('Error saving cars to storage:', error);
    return false;
  }
};

export const loadInitialCars = async () => {
  try {
    const response = await fetch('/data/cars.json');
    if (!response.ok) throw new Error('Failed to fetch cars.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading initial cars:', error);
    return [];
  }
};

export const generateId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export const addCar = (cars, newCar) => {
  const carWithId = { ...newCar, id: generateId() };
  return [...cars, carWithId];
};

export const updateCar = (cars, carId, updatedCar) => {
  return cars.map(car => car.id === carId ? { ...updatedCar, id: carId } : car);
};

export const deleteCar = (cars, carId) => {
  return cars.filter(car => car.id !== carId);
};

export const exportCarsToJSON = (cars) => {
  const dataStr = JSON.stringify(cars, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `rentcar-data-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

export const importCarsFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const cars = JSON.parse(e.target.result);
        if (!Array.isArray(cars)) {
          reject(new Error('Invalid JSON format: expected array'));
          return;
        }
        resolve(cars);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};
