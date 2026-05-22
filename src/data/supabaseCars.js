import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const BUCKET_NAME = 'car-images';

const mapDbCar = (car) => ({
  id: car.id,
  name: car.name,
  category: car.category,
  capacity: car.capacity,
  price: car.price,
  transmission: car.transmission,
  fuel: car.fuel,
  year: car.year,
  image: car.image_url || '',
  images: Array.isArray(car.images) ? car.images : [],
  features: Array.isArray(car.features) ? car.features : [],
  description: car.description || '',
  terms: car.terms || '',
  testimonials: Array.isArray(car.testimonials) ? car.testimonials : [],
  order: car.order ?? null,
});

const mapUiCar = (car) => ({
  name: car.name,
  category: car.category,
  capacity: Number(car.capacity),
  price: Number(car.price),
  transmission: car.transmission,
  fuel: car.fuel,
  year: Number(car.year),
  image_url: car.image || '',
  images: car.images || [],
  features: car.features || [],
  description: car.description || '',
  terms: car.terms || '',
  testimonials: car.testimonials || [],
});

const requireSupabase = () => {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase belum dikonfigurasi.');
  }
};

export const fetchCarsFromSupabase = async () => {
  requireSupabase();

  try {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .order('order', { ascending: true, nullsFirst: true })
      .order('created_at', { ascending: false });

    if (error) throw error;

    console.log('Fetched cars from Supabase:', data);
    return data.map(mapDbCar);
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const createCarInSupabase = async (car) => {
  requireSupabase();

  try {
    const carData = mapUiCar(car);

    const { data, error } = await supabase
      .from('cars')
      .insert(carData)
      .select('*')
      .single();

    if (error) throw error;
    return mapDbCar(data);
  } catch (error) {
    console.error('Error creating car:', error);
    throw error;
  }
};

export const updateCarInSupabase = async (carId, car) => {
  requireSupabase();

  const { data, error } = await supabase
    .from('cars')
    .update(mapUiCar(car))
    .eq('id', carId)
    .select('*')
    .single();

  if (error) throw error;
  return mapDbCar(data);
};

export const deleteCarFromSupabase = async (carId) => {
  requireSupabase();

  const { error } = await supabase
    .from('cars')
    .delete()
    .eq('id', carId);

  if (error) throw error;
};

export const replaceCarsInSupabase = async (cars) => {
  requireSupabase();

  const { error: deleteError } = await supabase.from('cars').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (deleteError) throw deleteError;

  if (cars.length === 0) return [];

  const { data, error } = await supabase
    .from('cars')
    .insert(cars.map(mapUiCar))
    .select('*');

  if (error) throw error;
  return data.map(mapDbCar);
};

export const updateCarsOrderInSupabase = async (cars) => {
  requireSupabase();

  try {
    if (!cars || cars.length === 0) return cars;

    // Update all cars with their order
    const updates = cars.map((car, index) => ({
      id: car.id,
      order: index,
    }));

    for (const update of updates) {
      const { error } = await supabase
        .from('cars')
        .update({ order: update.order })
        .eq('id', update.id);

      if (error) {
        console.error(`Error updating order for car ${update.id}:`, error);
        throw error;
      }
    }

    console.log('Cars order updated successfully:', updates);
    return cars;
  } catch (error) {
    console.error('Error updating cars order:', error);
    throw error;
  }
};

export const signInAdmin = async (email, password) => {
  requireSupabase();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
};

export const signOutAdmin = async () => {
  requireSupabase();
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentAdmin = async () => {
  if (!isSupabaseConfigured || !supabase) return null;

  const { data } = await supabase.auth.getUser();
  return data.user;
};

export const uploadCarImage = async (file) => {
  requireSupabase();

  const extension = file.name.split('.').pop();
  const safeName = file.name
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const path = `cars/${Date.now()}-${safeName}.${extension}`;

  const { error } = await supabase.storage.from(BUCKET_NAME).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(path);
  return data.publicUrl;
};
