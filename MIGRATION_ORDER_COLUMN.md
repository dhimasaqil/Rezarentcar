# Cara Menjalankan Migration untuk Kolom Order

Kolom `order` telah ditambahkan ke schema untuk menyimpan urutan mobil di Supabase.

## Langkah-langkah:

1. **Buka Supabase Dashboard**
   - Pergi ke https://app.supabase.com
   - Pilih project Rezarentcar

2. **Jalankan SQL Query**
   - Klik "SQL Editor" di sidebar
   - Klik "New Query"
   - Copy dan paste kode berikut:

```sql
-- Add order column to cars table
ALTER TABLE public.cars ADD COLUMN IF NOT EXISTS "order" integer;

-- Set initial order values based on created_at (oldest first)
UPDATE public.cars
SET "order" = (
  SELECT COUNT(*)
  FROM public.cars c2
  WHERE c2.created_at <= public.cars.created_at
) - 1
WHERE "order" IS NULL;
```

3. **Jalankan Query**
   - Klik tombol "Run" atau tekan Ctrl+Enter
   - Tunggu sampai selesai

## Setelah Migration:

- Kolom `order` akan ditambahkan ke tabel `cars`
- Semua mobil yang sudah ada akan mendapat nilai `order` berdasarkan urutan pembuatan
- Fitur reorder di admin dashboard akan mulai bekerja dan tersimpan di Supabase
- Urutan akan tersinkronisasi real-time antar device

## Verifikasi:

Setelah migration selesai, coba:
1. Login ke admin dashboard
2. Reorder mobil
3. Simpan urutan
4. Buka di device/browser lain
5. Urutan seharusnya sama
