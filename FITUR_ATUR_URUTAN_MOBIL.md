# Fitur Atur Urutan Mobil di Dashboard Admin

## Deskripsi
Fitur ini memungkinkan admin untuk mengurutkan mobil yang ditampilkan di katalog tanpa perlu mengedit data mobil secara manual. Admin dapat menggunakan drag-and-drop atau tombol up/down untuk mengatur urutan.

## Fitur Utama

### 1. Drag-and-Drop
- Klik dan drag item mobil untuk mengubah posisinya
- Visual feedback saat item sedang di-drag (opacity berkurang, border berubah)
- Drop di posisi yang diinginkan

### 2. Tombol Up/Down
- Tombol ↑ untuk naik satu posisi
- Tombol ↓ untuk turun satu posisi
- Tombol otomatis disabled jika sudah di posisi paling atas/bawah

### 3. Simpan & Reset
- **Simpan Urutan**: Menyimpan urutan baru ke database/localStorage
- **Reset**: Membatalkan perubahan dan kembali ke urutan sebelumnya

## Cara Menggunakan

### Step 1: Buka Dashboard Admin
1. Masuk ke halaman `/admin`
2. Login dengan credentials admin

### Step 2: Atur Urutan Mobil
Pilih salah satu cara:

**Cara 1: Drag-and-Drop**
- Klik dan tahan item mobil
- Drag ke posisi yang diinginkan
- Lepas untuk drop

**Cara 2: Tombol Up/Down**
- Klik tombol ↑ untuk naik
- Klik tombol ↓ untuk turun

### Step 3: Simpan Urutan
- Klik tombol "Simpan Urutan"
- Tunggu proses selesai
- Akan muncul notifikasi "Urutan mobil berhasil disimpan"

### Step 4: Verifikasi
- Buka halaman katalog (`/catalog`)
- Mobil akan ditampilkan sesuai urutan yang baru disimpan

## Struktur File

### Component Baru
- `src/components/CarOrderManager.jsx` - Component untuk manage urutan mobil

### File yang Dimodifikasi
- `src/pages/Admin.jsx` - Integrasi CarOrderManager dan fungsi handleReorderCars

## Implementasi Teknis

### CarOrderManager Component
```jsx
<CarOrderManager 
  cars={cars}                    // Array mobil yang akan diurutkan
  onReorder={handleReorderCars}  // Callback saat simpan urutan
  busy={busy}                    // Loading state
/>
```

### handleReorderCars Function
```javascript
const handleReorderCars = async (orderedCars) => {
  // Simpan urutan ke Supabase atau localStorage
  // Update state cars
  // Tampilkan notifikasi sukses/error
}
```

## Data Flow

1. **Load**: Mobil dimuat dari Supabase/localStorage
2. **Reorder**: Admin mengubah urutan menggunakan UI
3. **Save**: Urutan baru disimpan ke database/storage
4. **Display**: Katalog menampilkan mobil sesuai urutan baru

## Kompatibilitas

- ✅ Supabase Database
- ✅ localStorage (mode lokal)
- ✅ Responsive design
- ✅ Touch-friendly (mobile)

## Fitur Tambahan

### Visual Indicators
- Nomor urutan di setiap item (1, 2, 3, ...)
- Highlight saat drag
- Disabled state untuk tombol up/down

### User Feedback
- Notifikasi sukses/error
- Loading state saat menyimpan
- Disabled buttons saat proses

## Troubleshooting

### Urutan tidak tersimpan
- Pastikan sudah klik "Simpan Urutan"
- Check browser console untuk error
- Verifikasi koneksi ke database

### Drag-and-drop tidak bekerja
- Pastikan browser support HTML5 Drag and Drop
- Coba gunakan tombol up/down sebagai alternatif

### Urutan kembali ke semula setelah refresh
- Pastikan data tersimpan di database
- Check localStorage di browser DevTools

## Future Improvements

- [ ] Undo/Redo functionality
- [ ] Bulk reorder dengan kategori
- [ ] Keyboard shortcuts (arrow keys)
- [ ] Reorder history/audit log
- [ ] Preset urutan (popular, newest, price)

---

**Last Updated:** 2026-05-21
**Status:** Ready for Use
