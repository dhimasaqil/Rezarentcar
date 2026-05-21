import { useEffect, useState } from 'react';
import { useCarContext } from '../context/CarContext';
import { addCar, deleteCar, exportCarsToJSON, importCarsFromJSON, updateCar } from '../data/carsManager';
import { saveCarsOrder } from '../data/carsOrder';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import {
  createCarInSupabase,
  deleteCarFromSupabase,
  getCurrentAdmin,
  replaceCarsInSupabase,
  signInAdmin,
  signOutAdmin,
  updateCarInSupabase,
  uploadCarImage,
  updateCarsOrderInSupabase,
} from '../data/supabaseCars';
import CarOrderManager from '../components/CarOrderManager';

const emptyForm = {
  name: '',
  category: 'MPV',
  capacity: 5,
  price: 300000,
  transmission: 'Manual',
  fuel: 'Bensin',
  year: new Date().getFullYear(),
  image: '',
  images: [],
  features: '',
  description: '',
  terms: '',
};

const readFileAsDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`Gagal membaca file ${file.name}`));
    reader.readAsDataURL(file);
  });
};

const Admin = () => {
  const { cars, setCars, refreshCars, dataSource } = useCarContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!isSupabaseConfigured) return;
      const user = await getCurrentAdmin();
      setAuthenticated(Boolean(user));
      if (user?.email) setEmail(user.email);
    };

    checkAdmin();
  }, []);

  const login = async (event) => {
    event.preventDefault();
    setBusy(true);

    try {
      if (isSupabaseConfigured) {
        await signInAdmin(email, password);
        await refreshCars();
        setAuthenticated(true);
        setMessage('');
        return;
      }

      if (password === 'admin123') {
        setAuthenticated(true);
        setMessage('');
      } else {
        setMessage('Password salah. Gunakan admin123 untuk demo lokal.');
      }
    } catch (error) {
      setMessage(`Login gagal: ${error.message}`);
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured) {
      await signOutAdmin();
    }
    setAuthenticated(false);
    setPassword('');
  };

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const normalizeCar = () => ({
    ...form,
    capacity: Number(form.capacity),
    price: Number(form.price),
    year: Number(form.year),
    images: form.images,
    features: form.features.split(',').map((item) => item.trim()).filter(Boolean),
    testimonials: [],
  });

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const submitCar = async (event) => {
    event.preventDefault();
    setBusy(true);

    try {
      const car = normalizeCar();

      if (isSupabaseConfigured) {
        if (editingId) {
          await updateCarInSupabase(editingId, car);
        } else {
          await createCarInSupabase(car);
        }
        await refreshCars();
      } else {
        setCars(editingId ? updateCar(cars, editingId, car) : addCar(cars, car));
      }

      resetForm();
      setMessage(editingId ? 'Data mobil diperbarui.' : 'Mobil baru ditambahkan.');
    } catch (error) {
      setMessage(`Gagal menyimpan mobil: ${error.message}`);
    } finally {
      setBusy(false);
    }
  };

  const startEdit = (car) => {
    setEditingId(car.id);
    setForm({
      ...car,
      images: Array.isArray(car.images) ? car.images : [],
      features: car.features?.join(', ') || '',
    });
  };

  const handleMainImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);

    try {
      const image = isSupabaseConfigured ? await uploadCarImage(file) : await readFileAsDataUrl(file);
      updateField('image', image);
      setMessage('Gambar utama berhasil diupload.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      event.target.value = '';
      setBusy(false);
    }
  };

  const handleGalleryUpload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;
    setBusy(true);

    try {
      const uploadedImages = await Promise.all(files.map((file) => (
        isSupabaseConfigured ? uploadCarImage(file) : readFileAsDataUrl(file)
      )));
      setForm((current) => ({
        ...current,
        images: [...current.images, ...uploadedImages],
      }));
      setMessage(`${uploadedImages.length} gambar galeri berhasil diupload.`);
    } catch (error) {
      setMessage(error.message);
    } finally {
      event.target.value = '';
      setBusy(false);
    }
  };

  const removeGalleryImage = (imageToRemove) => {
    setForm((current) => ({
      ...current,
      images: current.images.filter((image) => image !== imageToRemove),
    }));
  };

  const removeCar = async (carId) => {
    if (!window.confirm('Hapus mobil ini?')) return;
    setBusy(true);

    try {
      if (isSupabaseConfigured) {
        await deleteCarFromSupabase(carId);
        await refreshCars();
      } else {
        setCars(deleteCar(cars, carId));
      }
      setMessage('Mobil dihapus.');
    } catch (error) {
      setMessage(`Gagal menghapus mobil: ${error.message}`);
    } finally {
      setBusy(false);
    }
  };

  const handleReorderCars = async (orderedCars) => {
    setBusy(true);

    try {
      setCars(orderedCars);
      saveCarsOrder(orderedCars);
      setMessage('Urutan mobil berhasil disimpan.');
    } catch (error) {
      setMessage(`Gagal menyimpan urutan mobil: ${error.message}`);
    } finally {
      setBusy(false);
    }
  };

  const handleImport = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);

    try {
      const importedCars = await importCarsFromJSON(file);

      if (isSupabaseConfigured) {
        await replaceCarsInSupabase(importedCars);
        await refreshCars();
      } else {
        setCars(importedCars);
      }

      setMessage('Data berhasil diimpor.');
    } catch (error) {
      setMessage(`Gagal impor data: ${error.message}`);
    } finally {
      event.target.value = '';
      setBusy(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-neutral-light py-16">
        <form onSubmit={login} className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow">
          <h1 className="mb-4 text-2xl font-bold text-primary">Admin Login</h1>
          {isSupabaseConfigured && (
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="Email admin Supabase"
              required
            />
          )}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-secondary focus:outline-none"
            placeholder="Password"
            required
          />
          {message && <p className="mb-4 text-sm text-red-600">{message}</p>}
          <button type="submit" disabled={busy} className="w-full rounded-lg bg-primary px-4 py-2 font-semibold text-white disabled:opacity-60">
            {busy ? 'Memproses...' : 'Masuk'}
          </button>
          {!isSupabaseConfigured && (
            <p className="mt-3 text-xs text-gray-500">Mode lokal: password demo admin123.</p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Admin Mobil</h1>
            <p className="text-gray-600">
              Kelola data mobil dari {dataSource === 'supabase' ? 'Supabase database' : 'localStorage browser'}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => exportCarsToJSON(cars)} className="rounded bg-secondary px-4 py-2 font-semibold text-primary">
              Export JSON
            </button>
            <label className="cursor-pointer rounded bg-white px-4 py-2 font-semibold text-primary shadow">
              Import JSON
              <input type="file" accept="application/json" onChange={handleImport} className="hidden" />
            </label>
            <button type="button" onClick={logout} className="rounded bg-gray-800 px-4 py-2 font-semibold text-white">
              Logout
            </button>
          </div>
        </div>

        {message && <div className="mb-6 rounded bg-white p-3 text-sm text-primary shadow">{message}</div>}

        <div className="mb-8">
          <CarOrderManager cars={cars} onReorder={handleReorderCars} busy={busy} />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <form onSubmit={submitCar} className="rounded-lg bg-white p-6 shadow lg:col-span-1">
            <h2 className="mb-4 text-xl font-bold text-primary">{editingId ? 'Edit Mobil' : 'Tambah Mobil'}</h2>
            <div className="space-y-3">
              <input required value={form.name} onChange={(event) => updateField('name', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Nama mobil" />
              <input required value={form.category} onChange={(event) => updateField('category', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Kategori" />
              <div className="grid grid-cols-2 gap-3">
                <input required type="number" value={form.capacity} onChange={(event) => updateField('capacity', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Kapasitas" />
                <input required type="number" value={form.year} onChange={(event) => updateField('year', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Tahun" />
              </div>
              <input required type="number" value={form.price} onChange={(event) => updateField('price', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Harga per hari" />
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.transmission} onChange={(event) => updateField('transmission', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Transmisi" />
                <input required value={form.fuel} onChange={(event) => updateField('fuel', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Bahan bakar" />
              </div>
              <div className="rounded border border-gray-200 p-3">
                <label className="mb-2 block text-sm font-semibold text-primary">Gambar utama</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  className="w-full text-sm file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-2 file:font-semibold file:text-primary"
                />
                {form.image && (
                  <div className="mt-3">
                    <img src={form.image} alt="Preview gambar utama" className="h-32 w-full rounded object-cover" />
                    <button
                      type="button"
                      onClick={() => updateField('image', '')}
                      className="mt-2 rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-primary"
                    >
                      Hapus gambar utama
                    </button>
                  </div>
                )}
              </div>

              <div className="rounded border border-gray-200 p-3">
                <label className="mb-2 block text-sm font-semibold text-primary">Galeri gambar</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryUpload}
                  className="w-full text-sm file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-2 file:font-semibold file:text-primary"
                />
                {form.images.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {form.images.map((image, index) => (
                      <div key={`${image.slice(0, 32)}-${index}`} className="relative">
                        <img src={image} alt={`Preview galeri ${index + 1}`} className="h-20 w-full rounded object-cover" />
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(image)}
                          className="absolute right-1 top-1 rounded bg-black/70 px-2 py-0.5 text-xs text-white"
                          aria-label={`Hapus gambar galeri ${index + 1}`}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input value={form.features} onChange={(event) => updateField('features', event.target.value)} className="w-full rounded border px-3 py-2" placeholder="Fitur, pisahkan koma" />
              <textarea required value={form.description} onChange={(event) => updateField('description', event.target.value)} className="min-h-24 w-full rounded border px-3 py-2" placeholder="Deskripsi" />
              <textarea required value={form.terms} onChange={(event) => updateField('terms', event.target.value)} className="min-h-20 w-full rounded border px-3 py-2" placeholder="Syarat sewa" />
            </div>
            <div className="mt-5 flex gap-3">
              <button type="submit" disabled={busy} className="rounded bg-primary px-4 py-2 font-semibold text-white disabled:opacity-60">
                {busy ? 'Memproses...' : editingId ? 'Simpan' : 'Tambah'}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="rounded bg-gray-200 px-4 py-2 font-semibold text-primary">
                  Batal
                </button>
              )}
            </div>
          </form>

          <div className="rounded-lg bg-white p-6 shadow lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-primary">Daftar Mobil</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-neutral-light">
                  <tr>
                    <th className="p-3">Nama</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Harga</th>
                    <th className="p-3">Transmisi</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr key={car.id} className="border-b">
                      <td className="p-3 font-semibold">{car.name}</td>
                      <td className="p-3">{car.category}</td>
                      <td className="p-3">Rp {car.price.toLocaleString('id-ID')}</td>
                      <td className="p-3">{car.transmission}</td>
                      <td className="p-3">
                        <button type="button" onClick={() => startEdit(car)} className="mr-2 rounded bg-secondary px-3 py-1 font-semibold text-primary">
                          Edit
                        </button>
                        <button type="button" onClick={() => removeCar(car.id)} className="rounded bg-red-600 px-3 py-1 font-semibold text-white">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
