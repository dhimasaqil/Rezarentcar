# RentCar Landing Page - Design Specification

**Date:** 2026-05-17  
**Project:** RentCar Landing Page  
**Type:** Car Rental Website

---

## Overview

RentCar adalah landing page untuk layanan rental mobil yang menargetkan semua segmen (wisatawan, profesional bisnis, dan keluarga lokal). Website ini terdiri dari 4 halaman utama: Beranda, Tentang Kami, Katalog, dan Kontak. Pemesanan dilakukan melalui WhatsApp dengan template pesan otomatis.

---

## Technology Stack

- **Frontend Framework:** React 18+ dengan Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **State Management:** React Hooks (useState, useEffect, useContext)
- **Data Storage:** LocalStorage + JSON file
- **Build Tool:** Vite
- **Package Manager:** npm/yarn

---

## Project Structure

```
rentcar/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CarCard.jsx
│   │   ├── CarDetailModal.jsx
│   │   ├── FilterBar.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CarCarousel.jsx
│   │   ├── TestimonialSlider.jsx
│   │   ├── AboutHero.jsx
│   │   ├── AdvantageGrid.jsx
│   │   ├── LocationMap.jsx
│   │   ├── TestimonialGrid.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── ContactMap.jsx
│   │   └── ContactForm.jsx
│   ├── pages/                # Main pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Catalog.jsx
│   │   ├── Contact.jsx
│   │   └── Admin.jsx
│   ├── context/              # React Context
│   │   └── CarContext.jsx
│   ├── data/                 # Data management
│   │   └── carsManager.js
│   ├── utils/                # Utility functions
│   │   └── whatsapp.js
│   ├── assets/               # Images, icons
│   ├── App.jsx               # Router & layout
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/
│   └── data/
│       └── cars.json         # Initial car data
├── docs/
│   └── superpowers/
│       └── specs/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## Design System

### Color Palette

- **Primary (Hitam):** `#000000` - Navbar, footer, teks utama, heading
- **Secondary (Kuning):** `#FFC107` - CTA buttons, aksen, highlight, hover effects
- **Background (Putih):** `#FFFFFF` - Background utama
- **Neutral Gray:** `#F5F5F5` (light), `#9E9E9E` (medium), `#424242` (dark) - Border, secondary text, backgrounds

### Typography

- **Font Family:** Inter (Google Fonts)
- **Heading:** 
  - H1: 48px (mobile: 32px), Bold (700)
  - H2: 36px (mobile: 28px), Bold (700)
  - H3: 24px (mobile: 20px), SemiBold (600)
- **Body:** 16px, Regular (400)
- **Small:** 14px, Regular (400)

### Spacing

- Section padding: 80px vertical (mobile: 40px)
- Component margin: 24px
- Grid gap: 24px (mobile: 16px)

### Components Style

- **Buttons:** Rounded (8px), shadow, smooth hover transition
- **Cards:** White background, shadow, rounded corners (12px), hover lift effect
- **Inputs:** Border gray, rounded (8px), focus state with yellow accent
- **Modal:** Backdrop blur, smooth slide-in animation

---

## Pages Design

### 1. Halaman Beranda (Home)

**Route:** `/`

**Sections:**

1. **Hero Section**
   - Full-width banner dengan background image/gradient
   - Tagline besar: "Rental Mobil Terpercaya untuk Perjalanan Anda"
   - Subtitle singkat
   - CTA Button: "Hubungi Saya" (kuning, mengarah ke WhatsApp)
   - Background: Gambar mobil atau gradient hitam-kuning

2. **Keunggulan Layanan**
   - Grid 4 card (2x2 di mobile)
   - Setiap card: Icon, judul, deskripsi singkat
   - Contoh: "Harga Terjangkau", "Mobil Terawat", "Layanan 24/7", "Proses Mudah"

3. **Mobil Populer**
   - Heading: "Mobil Populer Kami"
   - Carousel/Grid 3-6 mobil terpopuler
   - Menggunakan komponen `CarCard`
   - Button "Lihat Semua Katalog" mengarah ke `/catalog`

4. **Testimoni**
   - Slider testimoni pelanggan
   - Setiap slide: foto, nama, rating, review
   - Auto-play dengan navigation dots

5. **CTA Section**
   - Background kuning
   - Heading: "Siap Menyewa Mobil?"
   - Button: "Hubungi Kami via WhatsApp"

**Components Used:**
- `HeroSection.jsx`
- `ServiceCard.jsx`
- `CarCarousel.jsx`
- `TestimonialSlider.jsx`

---

### 2. Halaman Tentang Kami (About)

**Route:** `/about`

**Sections:**

1. **About Hero**
   - Heading: "Tentang RentCar"
   - Intro paragraph tentang perusahaan

2. **Profil Perusahaan**
   - Sejarah singkat
   - Visi & Misi
   - Layout: Text + Image side-by-side (stack di mobile)

3. **Keunggulan RentCar**
   - Grid 6 keunggulan dengan icon
   - Contoh: "Armada Lengkap", "Harga Transparan", "Driver Profesional", dll

4. **Lokasi Kantor**
   - Alamat lengkap
   - Google Maps embed
   - Jam operasional (opsional)

5. **Testimoni Pelanggan**
   - Grid 6-9 testimoni (3 kolom desktop, 2 tablet, 1 mobile)
   - Card: foto, nama, rating, review singkat

**Components Used:**
- `AboutHero.jsx`
- `AdvantageGrid.jsx`
- `LocationMap.jsx`
- `TestimonialGrid.jsx`

---

### 3. Halaman Katalog (Catalog)

**Route:** `/catalog`

**Sections:**

1. **Page Header**
   - Heading: "Katalog Mobil"
   - Subheading: "Pilih mobil sesuai kebutuhan Anda"

2. **Filter Bar**
   - Filter berdasarkan:
     - **Tipe Mobil:** Sedan, SUV, MPV, Hatchback (checkbox/dropdown)
     - **Kapasitas:** 2-4 orang, 5-7 orang, 8+ orang (checkbox/dropdown)
     - **Harga:** Ekonomis (<300k), Menengah (300k-500k), Premium (>500k) (checkbox/dropdown)
   - Button "Reset Filter"
   - Tampilkan jumlah hasil: "Menampilkan X mobil"

3. **Car Grid**
   - Grid responsive: 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)
   - Setiap card menampilkan:
     - Foto mobil
     - Nama mobil
     - Harga per hari
     - Kapasitas penumpang
     - Transmisi
     - Bahan bakar
     - Button "Lihat Detail"
   - Hover effect: lift + shadow

4. **Car Detail Modal**
   - Muncul saat card diklik
   - Full screen di mobile, centered popup di desktop
   - Konten:
     - **Image Gallery:** Slider dengan thumbnail navigation
     - **Info Utama:** Nama, harga, kategori
     - **Spesifikasi:** Kapasitas, transmisi, bahan bakar, tahun
     - **Fitur-fitur:** List dengan icon (AC, Audio System, GPS, dll)
     - **Deskripsi:** Paragraf deskripsi mobil
     - **Syarat & Ketentuan:** List syarat sewa
     - **Testimoni:** 2-3 testimoni untuk mobil ini (opsional)
     - **CTA Button:** "Pesan via WhatsApp" (kuning, besar)
   - Close button (X) di pojok kanan atas

**Empty State:**
- Jika filter tidak ada hasil: "Tidak ada mobil yang sesuai dengan filter Anda. Coba ubah filter atau lihat semua mobil."

**Components Used:**
- `FilterBar.jsx`
- `CarCard.jsx`
- `CarDetailModal.jsx`
- `ImageGallery.jsx`

---

### 4. Halaman Kontak (Contact)

**Route:** `/contact`

**Sections:**

1. **Page Header**
   - Heading: "Hubungi Kami"
   - Subheading: "Kami siap membantu Anda"

2. **Contact Info**
   - Card dengan informasi:
     - Alamat
     - Nomor telepon
     - Email
     - Icon untuk setiap info

3. **Peta Lokasi**
   - Google Maps embed
   - Marker di lokasi kantor

4. **Contact Form**
   - Fields:
     - Nama (required)
     - Email (required, validasi format)
     - Nomor Telepon (required, validasi format)
     - Pesan (required, textarea)
   - Button "Kirim Pesan"
   - Submit mengarah ke WhatsApp dengan template:
     ```
     Nama: [nama]
     Email: [email]
     Telepon: [telepon]
     Pesan: [pesan]
     ```

**Components Used:**
- `ContactInfo.jsx`
- `ContactMap.jsx`
- `ContactForm.jsx`

---

### 5. Halaman Admin (Admin Panel)

**Route:** `/admin`

**Purpose:** Kelola data mobil untuk admin non-technical

**Features:**

1. **Login Screen**
   - Simple password input
   - Password disimpan di localStorage (hashed)
   - Button "Login"

2. **Dashboard (setelah login)**
   - Header: "Admin Panel - Kelola Mobil"
   - Button: "Tambah Mobil Baru", "Export Data", "Import Data", "Logout"

3. **Car List Table**
   - Tabel dengan kolom: Foto, Nama, Kategori, Harga, Aksi
   - Aksi: Button "Edit", "Delete"
   - Konfirmasi sebelum delete

4. **Add/Edit Car Form**
   - Modal atau halaman terpisah
   - Fields:
     - Nama Mobil (text, required)
     - Kategori (dropdown: Sedan, SUV, MPV, Hatchback, required)
     - Kapasitas (number, required)
     - Harga per Hari (number, required)
     - Transmisi (dropdown: Manual, Automatic, required)
     - Bahan Bakar (dropdown: Bensin, Diesel, Hybrid, Electric, required)
     - Tahun (number)
     - Upload Foto Utama (file input, preview)
     - Upload Galeri Foto (multiple file input, preview)
     - Fitur-fitur (textarea atau dynamic input list)
     - Deskripsi (textarea)
     - Syarat & Ketentuan (textarea)
   - Validasi:
     - Semua required fields harus diisi
     - Foto max 2MB per file
     - Format foto: jpg, png, webp
   - Button "Simpan", "Batal"

5. **Export Data**
   - Download file JSON dari localStorage
   - Filename: `rentcar-data-[timestamp].json`

6. **Import Data**
   - Upload file JSON
   - Parse dan validasi format
   - Konfirmasi: "Data akan menimpa data yang ada. Lanjutkan?"
   - Simpan ke localStorage

**Security:**
- Password login sederhana (untuk demo, bisa ditingkatkan)
- Session disimpan di localStorage
- Auto-logout setelah 1 jam idle (opsional)

---

## Data Structure

### Car Object

```javascript
{
  id: "unique-id",                    // UUID atau timestamp
  name: "Toyota Avanza",              // string
  category: "MPV",                    // "Sedan" | "SUV" | "MPV" | "Hatchback"
  capacity: 7,                        // number (penumpang)
  price: 300000,                      // number (per hari)
  transmission: "Manual",             // "Manual" | "Automatic"
  fuel: "Bensin",                     // "Bensin" | "Diesel" | "Hybrid" | "Electric"
  year: 2022,                         // number
  image: "/images/avanza.jpg",        // string (main image path)
  images: [                           // array of strings (gallery)
    "/images/avanza-1.jpg",
    "/images/avanza-2.jpg",
    "/images/avanza-3.jpg"
  ],
  features: [                         // array of strings
    "AC",
    "Audio System",
    "Power Steering",
    "Airbag"
  ],
  description: "MPV keluarga yang nyaman...",  // string
  terms: "KTP, SIM A, Deposit...",    // string
  testimonials: [                     // array (opsional)
    {
      name: "John Doe",
      rating: 5,
      review: "Mobil bagus dan nyaman"
    }
  ]
}
```

### Initial Data (cars.json)

File `public/data/cars.json` berisi array of car objects sebagai data awal. Contoh:

```json
[
  {
    "id": "1",
    "name": "Toyota Avanza",
    "category": "MPV",
    "capacity": 7,
    "price": 300000,
    "transmission": "Manual",
    "fuel": "Bensin",
    "year": 2022,
    "image": "/images/avanza.jpg",
    "images": ["/images/avanza-1.jpg", "/images/avanza-2.jpg"],
    "features": ["AC", "Audio System", "Power Steering"],
    "description": "MPV keluarga yang nyaman untuk perjalanan bersama keluarga.",
    "terms": "Syarat: KTP, SIM A, Deposit Rp 500.000"
  }
]
```

---

## Data Flow & State Management

### 1. Data Loading

**Flow:**
1. App load → Check localStorage key `rentcar_cars`
2. If exists → Use localStorage data (admin has modified)
3. If not exists → Fetch from `public/data/cars.json` (initial data)
4. Store in React Context (`CarContext`)

**Implementation:**
- `CarContext.jsx` provides:
  - `cars` (array)
  - `setCars` (function)
  - `loadCars` (function)
  - `saveCars` (function to localStorage)

### 2. Filtering Logic

**Flow:**
1. User selects filter (category, capacity, price)
2. Update filter state
3. Filter `cars` array using `.filter()`:
   ```javascript
   const filteredCars = cars.filter(car => {
     const matchCategory = !filters.category.length || filters.category.includes(car.category);
     const matchCapacity = !filters.capacity.length || filters.capacity.includes(getCapacityRange(car.capacity));
     const matchPrice = !filters.price.length || filters.price.includes(getPriceRange(car.price));
     return matchCategory && matchCapacity && matchPrice;
   });
   ```
4. Re-render grid with filtered results

### 3. WhatsApp Integration

**WhatsApp URL Format:**
```
https://wa.me/[PHONE_NUMBER]?text=[ENCODED_MESSAGE]
```

**Phone Number:** Store in config file or environment variable (e.g., `6281234567890`)

**Message Templates:**

1. **From Hero CTA:**
   ```
   Halo, saya tertarik dengan layanan rental mobil RentCar. Saya ingin menanyakan informasi lebih lanjut.
   ```

2. **From Car Detail:**
   ```
   Halo, saya tertarik dengan [Nama Mobil] - Rp [Harga]/hari.
   Saya ingin menanyakan ketersediaan dan detail pemesanan.
   ```

3. **From Contact Form:**
   ```
   Nama: [nama]
   Email: [email]
   Telepon: [telepon]
   Pesan: [pesan]
   ```

**Implementation:**
```javascript
// utils/whatsapp.js
export const sendWhatsApp = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
};
```

### 4. Admin CRUD Operations

**Add Car:**
1. User fills form
2. Validate all fields
3. Upload images → Convert to base64 or save to `public/images/`
4. Generate unique ID (UUID or timestamp)
5. Add to `cars` array
6. Save to localStorage
7. Update UI

**Edit Car:**
1. Load car data to form
2. User modifies fields
3. Validate
4. Update car object in array
5. Save to localStorage
6. Update UI

**Delete Car:**
1. Show confirmation dialog
2. If confirmed, remove from array
3. Save to localStorage
4. Update UI

**Export Data:**
1. Get data from localStorage
2. Convert to JSON string
3. Create Blob
4. Trigger download with filename `rentcar-data-[timestamp].json`

**Import Data:**
1. User uploads JSON file
2. Read file content
3. Parse JSON
4. Validate structure
5. Show confirmation
6. If confirmed, replace localStorage data
7. Reload app state

---

## Responsive Design

### Breakpoints (Tailwind)

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md - lg)
- **Desktop:** > 1024px (xl)

### Responsive Behavior

**Navbar:**
- Desktop: Horizontal menu with links
- Mobile: Hamburger menu → Slide-in sidebar

**Hero Section:**
- Desktop: Text left, image right (or full-width background)
- Mobile: Stack vertical, text center

**Service Cards:**
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

**Car Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Filter Bar:**
- Desktop: Horizontal with dropdowns
- Mobile: Accordion or drawer

**Car Detail Modal:**
- Desktop: Centered popup (max-width 800px)
- Mobile: Full screen

**Footer:**
- Desktop: 4 columns (logo, links, contact, social)
- Mobile: Stack vertical

---

## Animations & Interactions

### Scroll Animations
- Fade-in on scroll using Intersection Observer
- Smooth scroll between sections

### Hover Effects
- Cards: Lift (translateY -4px) + shadow increase
- Buttons: Background color darken, scale 1.05
- Links: Underline animation

### Modal Animations
- Backdrop: Fade-in (opacity 0 → 1)
- Modal: Slide-in from bottom (mobile) or scale-in (desktop)
- Close: Reverse animation

### Loading States
- Skeleton loaders for car cards while loading
- Spinner for form submissions

### Transitions
- All transitions: `transition-all duration-300 ease-in-out`

---

## Error Handling & Edge Cases

### 1. Data Loading Errors
- **Scenario:** `cars.json` fails to load
- **Handling:** 
  - Show error message: "Gagal memuat data mobil. Silakan refresh halaman."
  - Fallback to empty array
  - Retry button

### 2. Empty States
- **No cars in catalog:** "Belum ada mobil tersedia saat ini."
- **No filter results:** "Tidak ada mobil yang sesuai dengan filter Anda. Coba ubah filter atau lihat semua mobil."
- **No testimonials:** Hide testimonial section

### 3. Form Validation
- **Contact Form:**
  - Required fields: Show error "Field ini wajib diisi"
  - Email format: "Format email tidak valid"
  - Phone format: "Format nomor telepon tidak valid"
- **Admin Form:**
  - All required fields validated
  - Image size: "Ukuran gambar maksimal 2MB"
  - Image format: "Format gambar harus jpg, png, atau webp"

### 4. Image Upload
- **Validation:**
  - Max size: 2MB per image
  - Allowed formats: jpg, png, webp
  - Show preview before save
- **Compression:** Auto-compress if > 1MB using canvas API
- **Error:** "Gagal mengupload gambar. Coba lagi."

### 5. LocalStorage Limits
- **Scenario:** LocalStorage approaching 5-10MB limit
- **Handling:**
  - Show warning to admin: "Penyimpanan hampir penuh. Pertimbangkan untuk mengurangi jumlah gambar atau mobil."
  - Suggest image compression
  - Provide export option

### 6. WhatsApp Integration
- **Invalid phone number:** Show alert "Nomor WhatsApp tidak valid"
- **Special characters in message:** Properly encode URL

### 7. Browser Compatibility
- **LocalStorage not supported:** Show message "Browser Anda tidak mendukung fitur ini. Gunakan browser modern."
- **Fallback for old browsers:** Graceful degradation for animations

### 8. Network Issues
- **Offline:** Show banner "Anda sedang offline. Beberapa fitur mungkin tidak tersedia."
- **Slow connection:** Show loading indicators

---

## Performance Optimization

### Image Optimization
- Use WebP format with fallback to JPG
- Lazy loading for images below fold
- Responsive images with `srcset`
- Compress images before upload (admin panel)

### Code Splitting
- Lazy load routes with `React.lazy()` and `Suspense`
- Lazy load modal components

### Bundle Optimization
- Tree-shaking unused Tailwind classes
- Minify CSS and JS in production
- Use Vite's built-in optimizations

### Caching
- Cache static assets (images, fonts)
- Service Worker for offline support (optional)

---

## Testing Strategy

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works (navbar, links)
- [ ] Filtering works with all combinations
- [ ] Modal opens/closes correctly
- [ ] WhatsApp links work with correct messages
- [ ] Contact form validation works
- [ ] Admin login works
- [ ] Admin CRUD operations work
- [ ] Export/Import data works
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] No console errors

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Deployment

### Build Process
```bash
npm run build
```
Output: `dist/` folder

### Hosting Options
- **Vercel:** Zero-config deployment (recommended)
- **Netlify:** Drag-and-drop or Git integration
- **GitHub Pages:** Free static hosting
- **Firebase Hosting:** Fast CDN

### Environment Variables
- `VITE_WHATSAPP_NUMBER`: WhatsApp CS number
- `VITE_GOOGLE_MAPS_API_KEY`: Google Maps API key (if needed)

### Pre-deployment Checklist
- [ ] Update WhatsApp number in config
- [ ] Add real car data to `cars.json`
- [ ] Add real images to `public/images/`
- [ ] Test all features in production build
- [ ] Set admin password
- [ ] Configure Google Maps API key
- [ ] Test on multiple devices

---

## Future Enhancements (Out of Scope)

- Real-time availability calendar
- Online payment integration
- User accounts and booking history
- Email notifications
- Multi-language support
- Advanced analytics
- SEO optimization with meta tags
- Blog section
- Promo/discount system
- Integration with backend API

---

## Success Criteria

1. ✅ All 4 pages (Home, About, Catalog, Contact) functional
2. ✅ Catalog filtering works with multiple criteria
3. ✅ Car detail modal displays all information
4. ✅ WhatsApp integration works with correct templates
5. ✅ Admin panel allows non-technical users to manage cars
6. ✅ Export/Import data works correctly
7. ✅ Responsive on all devices
8. ✅ No critical bugs or errors
9. ✅ Design follows black-yellow-white color scheme
10. ✅ Uses Inter font throughout

---

## Notes

- Admin password should be changed in production
- Consider adding HTTPS for security
- Backup localStorage data regularly
- Monitor localStorage usage to avoid limits
- Consider migrating to backend if data grows significantly

---

**End of Design Specification**
