# Deployment and Supabase Setup

Project ini bisa berjalan dalam dua mode:

- Local mode: tanpa environment Supabase, data mobil disimpan di `localStorage`.
- Supabase mode: jika `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` diisi, katalog membaca database Supabase dan admin memakai Supabase Auth + Storage.

## 1. Buat Project Supabase

1. Buat project baru di Supabase.
2. Buka SQL Editor.
3. Jalankan isi file `supabase/schema.sql`.
4. Buka Authentication, buat user admin dengan email dan password.
5. Buka Project Settings > API, ambil:
   - Project URL
   - anon public key

## 2. Environment Lokal

Copy `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Isi:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Jalankan:

```bash
npm.cmd run dev
```

Admin ada di `/admin`. Jika Supabase aktif, login memakai email/password user Auth Supabase.

## 3. Deploy ke Vercel

Setting:

```text
Build Command: npm run build
Output Directory: dist
```

Tambahkan environment variables di Vercel:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

File `vercel.json` sudah disiapkan agar refresh route seperti `/admin` tidak 404.

## 4. Deploy ke Netlify

Setting:

```text
Build command: npm run build
Publish directory: dist
```

Tambahkan environment variables yang sama di Netlify. File `public/_redirects` sudah disiapkan untuk SPA routing.

## 5. Catatan Upload Gambar

Saat Supabase aktif, gambar yang diupload dari admin masuk ke bucket `car-images` dan URL publiknya disimpan di tabel `cars`.

Saat Supabase tidak aktif, gambar disimpan sebagai data URL di `localStorage`, cocok untuk demo lokal tetapi tidak ideal untuk production.
