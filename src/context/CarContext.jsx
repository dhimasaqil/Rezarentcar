import { createContext, useContext, useState, useEffect } from 'react';
import {
  loadCarsFromStorage,
  saveCarsToStorage,
  loadInitialCars
} from '../data/carsManager';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import { fetchCarsFromSupabase } from '../data/supabaseCars';

const CarContext = createContext();

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within CarProvider');
  }
  return context;
};

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState(isSupabaseConfigured ? 'supabase' : 'local');

  const initializeCars = async () => {
    try {
      setLoading(true);

      if (isSupabaseConfigured) {
        const remoteCars = await fetchCarsFromSupabase();
        setCars(remoteCars);
        setDataSource('supabase');
        setError(null);
        return;
      }

      const storedCars = loadCarsFromStorage();

      if (storedCars && storedCars.length > 0) {
        setCars(storedCars);
      } else {
        const initialCars = await loadInitialCars();
        setCars(initialCars);
        saveCarsToStorage(initialCars);
      }

      setDataSource('local');
      setError(null);
    } catch (err) {
      setError('Gagal memuat data mobil. Silakan refresh halaman.');
      console.error('Error initializing cars:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeCars();
  }, []);

  const updateCars = (newCars) => {
    setCars(newCars);
    if (!isSupabaseConfigured) {
      saveCarsToStorage(newCars);
    }
  };

  const value = {
    cars,
    setCars: updateCars,
    refreshCars: initializeCars,
    loading,
    error,
    dataSource,
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
