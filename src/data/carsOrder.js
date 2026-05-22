import { isSupabaseConfigured } from '../lib/supabaseClient';
import { updateCarsOrderInSupabase } from './supabaseCars';

const CARS_ORDER_KEY = 'rentcar_cars_order';

export const saveCarsOrder = async (cars) => {
  try {
    const order = cars.map(car => car.id);
    localStorage.setItem(CARS_ORDER_KEY, JSON.stringify(order));

    if (isSupabaseConfigured) {
      await updateCarsOrderInSupabase(cars);
    }

    return true;
  } catch (error) {
    console.error('Error saving cars order:', error);
    return false;
  }
};

export const loadCarsOrder = () => {
  try {
    const stored = localStorage.getItem(CARS_ORDER_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading cars order:', error);
    return null;
  }
};

export const applyCarsOrder = (cars) => {
  const order = loadCarsOrder();
  if (!order || order.length === 0) return cars;

  const orderMap = new Map(order.map((id, index) => [id, index]));

  return [...cars].sort((a, b) => {
    const aIndex = orderMap.get(a.id) ?? Infinity;
    const bIndex = orderMap.get(b.id) ?? Infinity;
    return aIndex - bIndex;
  });
};
