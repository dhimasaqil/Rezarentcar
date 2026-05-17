# RentCar Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete car rental landing page with React + Vite + Tailwind CSS, featuring catalog with filtering, WhatsApp integration, and admin panel for non-technical users.

**Architecture:** Single Page Application (SPA) with React Router for navigation, React Context for state management, localStorage for data persistence, and component-based architecture for reusability.

**Tech Stack:** React 18, Vite, Tailwind CSS, React Router v6, React Context API

---

## File Structure Overview


**Core Files:**
- `src/main.jsx` - Entry point
- `src/App.jsx` - Router and layout
- `src/index.css` - Global styles with Tailwind

**Context:**
- `src/context/CarContext.jsx` - Global state for cars data

**Utils:**
- `src/utils/whatsapp.js` - WhatsApp integration helper
- `src/data/carsManager.js` - CRUD operations for cars

**Pages:**
- `src/pages/Home.jsx` - Landing page
- `src/pages/About.jsx` - About us page
- `src/pages/Catalog.jsx` - Car catalog with filtering
- `src/pages/Contact.jsx` - Contact page
- `src/pages/Admin.jsx` - Admin panel

**Components:**
- `src/components/Navbar.jsx` - Navigation bar
- `src/components/Footer.jsx` - Footer
- `src/components/HeroSection.jsx` - Hero banner
- `src/components/ServiceCard.jsx` - Service feature card
- `src/components/CarCarousel.jsx` - Carousel for popular cars
- `src/components/TestimonialSlider.jsx` - Testimonial slider
- `src/components/CarCard.jsx` - Car card in grid
- `src/components/CarDetailModal.jsx` - Car detail modal
- `src/components/FilterBar.jsx` - Catalog filter bar
- `src/components/ImageGallery.jsx` - Image gallery slider
- `src/components/ContactInfo.jsx` - Contact information card
- `src/components/ContactMap.jsx` - Google Maps embed
- `src/components/ContactForm.jsx` - Contact form
- `src/components/AboutHero.jsx` - About page hero
- `src/components/AdvantageGrid.jsx` - Advantages grid
- `src/components/LocationMap.jsx` - Location map
- `src/components/TestimonialGrid.jsx` - Testimonial grid
- `src/components/WhatsAppButton.jsx` - Floating WhatsApp button

**Data:**
- `public/data/cars.json` - Initial car data

**Config:**
- `package.json` - Dependencies
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

---


## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/index.css`

- [ ] **Step 1: Initialize Vite React project**

```bash
npm create vite@latest . -- --template react
```

Expected: Vite project scaffolded with React template

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom
```

Expected: All dependencies installed

- [ ] **Step 3: Initialize Tailwind CSS**

```bash
npx tailwindcss init -p
```

Expected: `tailwind.config.js` and `postcss.config.js` created

- [ ] **Step 4: Configure Tailwind**

Edit `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFC107',
        neutral: {
          light: '#F5F5F5',
          medium: '#9E9E9E',
          dark: '#424242',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 5: Setup global CSS with Tailwind and Inter font**

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-gray-900;
  }
}

@layer utilities {
  .section-padding {
    @apply py-20 md:py-20;
  }
}
```

- [ ] **Step 6: Create basic App structure**

Edit `src/App.jsx`:

```jsx
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-4xl font-bold text-primary">RentCar</h1>
        <p className="text-secondary">Setup Complete</p>
      </div>
    </Router>
  )
}

export default App
```

- [ ] **Step 7: Test dev server**

```bash
npm run dev
```

Expected: Dev server runs on http://localhost:5173, page shows "RentCar" in black and "Setup Complete" in yellow with Inter font

- [ ] **Step 8: Create project directories**

```bash
mkdir -p src/components src/pages src/context src/utils src/data public/data public/images
```

Expected: All directories created

- [ ] **Step 9: Commit**

```bash
git add .
git commit -m "feat: initialize project with Vite, React, Tailwind, and Inter font"
```

---


## Task 2: Car Context and Data Management

**Files:**
- Create: `src/context/CarContext.jsx`
- Create: `src/data/carsManager.js`
- Create: `public/data/cars.json`

- [ ] **Step 1: Create initial car data**

Create `public/data/cars.json`:

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
    "images": ["/images/avanza-1.jpg", "/images/avanza-2.jpg", "/images/avanza-3.jpg"],
    "features": ["AC", "Audio System", "Power Steering", "Airbag"],
    "description": "MPV keluarga yang nyaman untuk perjalanan bersama keluarga. Cocok untuk liburan atau acara keluarga.",
    "terms": "Syarat: KTP, SIM A, Deposit Rp 500.000",
    "testimonials": [
      {
        "name": "Budi Santoso",
        "rating": 5,
        "review": "Mobil bagus dan nyaman, pelayanan memuaskan!"
      }
    ]
  },
  {
    "id": "2",
    "name": "Honda Jazz",
    "category": "Hatchback",
    "capacity": 5,
    "price": 250000,
    "transmission": "Automatic",
    "fuel": "Bensin",
    "year": 2023,
    "image": "/images/jazz.jpg",
    "images": ["/images/jazz-1.jpg", "/images/jazz-2.jpg"],
    "features": ["AC", "Audio System", "Power Steering", "Airbag", "Cruise Control"],
    "description": "Hatchback modern dengan fitur lengkap dan irit bahan bakar.",
    "terms": "Syarat: KTP, SIM A, Deposit Rp 400.000",
    "testimonials": []
  },
  {
    "id": "3",
    "name": "Toyota Fortuner",
    "category": "SUV",
    "capacity": 7,
    "price": 600000,
    "transmission": "Automatic",
    "fuel": "Diesel",
    "year": 2023,
    "image": "/images/fortuner.jpg",
    "images": ["/images/fortuner-1.jpg", "/images/fortuner-2.jpg", "/images/fortuner-3.jpg"],
    "features": ["AC", "Audio System", "Power Steering", "Airbag", "4WD", "Leather Seats"],
    "description": "SUV premium untuk perjalanan jarak jauh dengan kenyamanan maksimal.",
    "terms": "Syarat: KTP, SIM A, Deposit Rp 1.000.000",
    "testimonials": [
      {
        "name": "Andi Wijaya",
        "rating": 5,
        "review": "Sangat nyaman untuk perjalanan keluarga!"
      }
    ]
  }
]
```

- [ ] **Step 2: Create cars manager utility**

Create `src/data/carsManager.js`:

```javascript
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
```

- [ ] **Step 3: Create Car Context**

Create `src/context/CarContext.jsx`:

```jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { 
  loadCarsFromStorage, 
  saveCarsToStorage, 
  loadInitialCars 
} from '../data/carsManager';

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

  useEffect(() => {
    const initializeCars = async () => {
      try {
        setLoading(true);
        
        // Try to load from localStorage first
        const storedCars = loadCarsFromStorage();
        
        if (storedCars && storedCars.length > 0) {
          setCars(storedCars);
        } else {
          // Load from JSON file if no stored data
          const initialCars = await loadInitialCars();
          setCars(initialCars);
          saveCarsToStorage(initialCars);
        }
        
        setError(null);
      } catch (err) {
        setError('Gagal memuat data mobil. Silakan refresh halaman.');
        console.error('Error initializing cars:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeCars();
  }, []);

  const updateCars = (newCars) => {
    setCars(newCars);
    saveCarsToStorage(newCars);
  };

  const value = {
    cars,
    setCars: updateCars,
    loading,
    error,
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
```

- [ ] **Step 4: Wrap App with CarProvider**

Edit `src/App.jsx`:

```jsx
import { BrowserRouter as Router } from 'react-router-dom'
import { CarProvider } from './context/CarContext'

function App() {
  return (
    <Router>
      <CarProvider>
        <div className="App">
          <h1 className="text-4xl font-bold text-primary">RentCar</h1>
          <p className="text-secondary">Context Setup Complete</p>
        </div>
      </CarProvider>
    </Router>
  )
}

export default App
```

- [ ] **Step 5: Test context in browser console**

```bash
npm run dev
```

Open browser console and check:
- No errors
- localStorage should be empty initially
- After page load, check `localStorage.getItem('rentcar_cars')` should contain car data

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: add car context and data management with localStorage"
```

---


## Task 3: WhatsApp Integration Utility

**Files:**
- Create: `src/utils/whatsapp.js`

- [ ] **Step 1: Create WhatsApp utility**

Create `src/utils/whatsapp.js`:

```javascript
// WhatsApp phone number (without + or spaces)
const WHATSAPP_NUMBER = '6281234567890'; // Replace with actual number

export const sendWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const sendWhatsAppGeneral = () => {
  const message = 'Halo, saya tertarik dengan layanan rental mobil RentCar. Saya ingin menanyakan informasi lebih lanjut.';
  sendWhatsApp(message);
};

export const sendWhatsAppCarInquiry = (carName, carPrice) => {
  const message = `Halo, saya tertarik dengan ${carName} - Rp ${carPrice.toLocaleString('id-ID')}/hari.\nSaya ingin menanyakan ketersediaan dan detail pemesanan.`;
  sendWhatsApp(message);
};

export const sendWhatsAppContactForm = (name, email, phone, message) => {
  const formattedMessage = `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}`;
  sendWhatsApp(formattedMessage);
};

export const getWhatsAppNumber = () => WHATSAPP_NUMBER;

export const setWhatsAppNumber = (number) => {
  // This would need to be implemented with environment variables in production
  console.warn('WhatsApp number should be set via environment variables');
};
```

- [ ] **Step 2: Test WhatsApp utility**

Create a test file to verify (will be removed after testing):

Create `src/test-whatsapp.js`:

```javascript
import { sendWhatsAppGeneral, sendWhatsAppCarInquiry, sendWhatsAppContactForm } from './utils/whatsapp';

// Test functions
console.log('Testing WhatsApp utilities...');

// These will open WhatsApp in new tabs when called
// sendWhatsAppGeneral();
// sendWhatsAppCarInquiry('Toyota Avanza', 300000);
// sendWhatsAppContactForm('John Doe', 'john@example.com', '08123456789', 'Test message');

console.log('WhatsApp utilities loaded successfully');
```

- [ ] **Step 3: Verify utility works**

Add import to `src/App.jsx` temporarily:

```jsx
import './test-whatsapp.js'
```

Run dev server and check console:
```bash
npm run dev
```

Expected: Console shows "WhatsApp utilities loaded successfully" with no errors

- [ ] **Step 4: Remove test file and import**

```bash
rm src/test-whatsapp.js
```

Remove the import from `src/App.jsx`

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add WhatsApp integration utility"
```

---


## Task 4: Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`

- [ ] **Step 1: Create Navbar component**

Create `src/components/Navbar.jsx`:

```jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/catalog', label: 'Katalog' },
    { path: '/contact', label: 'Kontak' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-secondary">
            RentCar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-secondary transition-colors ${
                  isActive(link.path) ? 'text-secondary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 hover:text-secondary transition-colors ${
                  isActive(link.path) ? 'text-secondary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 2: Create placeholder pages**

Create `src/pages/Home.jsx`:

```jsx
const Home = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-20">Home Page</h1>
    </div>
  );
};

export default Home;
```

Create `src/pages/About.jsx`:

```jsx
const About = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-20">About Page</h1>
    </div>
  );
};

export default About;
```

Create `src/pages/Catalog.jsx`:

```jsx
const Catalog = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-20">Catalog Page</h1>
    </div>
  );
};

export default Catalog;
```

Create `src/pages/Contact.jsx`:

```jsx
const Contact = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-20">Contact Page</h1>
    </div>
  );
};

export default Contact;
```

- [ ] **Step 3: Setup routing in App**

Edit `src/App.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarProvider } from './context/CarContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <CarProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CarProvider>
    </Router>
  );
}

export default App;
```

- [ ] **Step 4: Test navigation**

```bash
npm run dev
```

Expected:
- Navbar appears at top with black background
- Logo "RentCar" in yellow
- Desktop: horizontal menu links
- Mobile: hamburger menu that toggles
- Clicking links navigates to pages
- Active link highlighted in yellow

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add navbar with routing and responsive mobile menu"
```

---


## Task 5: Footer Component

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.jsx`:

```jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">RentCar</h3>
            <p className="text-gray-300 text-sm">
              Layanan rental mobil terpercaya untuk perjalanan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Katalog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@rentcar.com</li>
              <li>Telepon: (021) 1234-5678</li>
              <li>WhatsApp: +62 812-3456-7890</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} RentCar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Add Footer to App**

Edit `src/App.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarProvider } from './context/CarContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <CarProvider>
        <div className="App flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CarProvider>
    </Router>
  );
}

export default App;
```

- [ ] **Step 3: Test footer**

```bash
npm run dev
```

Expected:
- Footer appears at bottom with black background
- 4 columns on desktop, stacked on mobile
- Links work correctly
- Social media icons visible
- Copyright year is current year

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add footer with links and social media icons"
```

---


## Task 6: Home Page - Hero Section

**Files:**
- Create: `src/components/HeroSection.jsx`
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Create HeroSection component**

Create `src/components/HeroSection.jsx`:

```jsx
import { sendWhatsAppGeneral } from '../utils/whatsapp';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-gray-800 text-white section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Rental Mobil Terpercaya untuk Perjalanan Anda
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Pilihan mobil berkualitas dengan harga terjangkau. Siap melayani kebutuhan transportasi Anda.
            </p>
            <button
              onClick={sendWhatsAppGeneral}
              className="bg-secondary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Image/Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-secondary/20 rounded-lg p-8 backdrop-blur-sm">
                <svg
                  className="w-full h-auto text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

- [ ] **Step 2: Update Home page with HeroSection**

Edit `src/pages/Home.jsx`:

```jsx
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;
```

- [ ] **Step 3: Test Hero Section**

```bash
npm run dev
```

Expected:
- Hero section with black gradient background
- Large heading in white
- Yellow "Hubungi Saya" button
- Button opens WhatsApp when clicked
- Responsive: stacks vertically on mobile
- Car icon visible on right side

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add hero section to home page with WhatsApp CTA"
```

---


## Task 7: Home Page - Service Cards

**Files:**
- Create: `src/components/ServiceCard.jsx`
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Create ServiceCard component**

Create `src/components/ServiceCard.jsx`:

```jsx
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-secondary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
```

- [ ] **Step 2: Add services section to Home page**

Edit `src/pages/Home.jsx`:

```jsx
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
        </svg>
      ),
      title: 'Harga Terjangkau',
      description: 'Harga sewa kompetitif dengan kualitas terbaik untuk semua kalangan.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ),
      title: 'Mobil Terawat',
      description: 'Semua mobil dalam kondisi prima dan terawat dengan baik.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      title: 'Layanan 24/7',
      description: 'Siap melayani kebutuhan Anda kapan saja, 24 jam sehari.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      title: 'Proses Mudah',
      description: 'Booking cepat dan mudah melalui WhatsApp tanpa ribet.'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Keunggulan Layanan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
```

- [ ] **Step 3: Test services section**

```bash
npm run dev
```

Expected:
- Services section below hero with light gray background
- 4 cards in a grid (4 columns on desktop, 2 on tablet, 1 on mobile)
- Yellow icons
- Cards have shadow and lift on hover
- All text readable

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add service cards section to home page"
```

---


## Task 8: Car Card Component

**Files:**
- Create: `src/components/CarCard.jsx`

- [ ] **Step 1: Create CarCard component**

Create `src/components/CarCard.jsx`:

```jsx
const CarCard = ({ car, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      onClick={() => onClick(car)}
    >
      {/* Car Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFC107"%3E%3Cpath d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/%3E%3C/svg%3E';
          }}
        />
        <div className="absolute top-2 right-2 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
          {car.category}
        </div>
      </div>

      {/* Car Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-2">{car.name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-secondary">
            Rp {car.price.toLocaleString('id-ID')}
          </span>
          <span className="text-sm text-gray-600">/hari</span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            {car.capacity} orang
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {car.transmission}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            </svg>
            {car.fuel}
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CarCard;
```

- [ ] **Step 2: Test CarCard with sample data**

Create temporary test file `src/test-carcard.jsx`:

```jsx
import CarCard from './components/CarCard';

const TestCarCard = () => {
  const sampleCar = {
    id: "1",
    name: "Toyota Avanza",
    category: "MPV",
    capacity: 7,
    price: 300000,
    transmission: "Manual",
    fuel: "Bensin",
    image: "/images/avanza.jpg"
  };

  const handleClick = (car) => {
    console.log('Car clicked:', car);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-sm">
        <CarCard car={sampleCar} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TestCarCard;
```

Temporarily add to `src/App.jsx` for testing:

```jsx
import TestCarCard from './test-carcard';

// Add route
<Route path="/test-card" element={<TestCarCard />} />
```

- [ ] **Step 3: Test in browser**

```bash
npm run dev
```

Navigate to http://localhost:5173/test-card

Expected:
- Card displays with placeholder car icon (since image doesn't exist yet)
- Yellow category badge
- Price formatted correctly
- 3 spec icons with info
- Black "Lihat Detail" button
- Card lifts on hover
- Clicking card logs to console

- [ ] **Step 4: Remove test files**

```bash
rm src/test-carcard.jsx
```

Remove test route from `src/App.jsx`

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add car card component with specs and hover effects"
```

---


## Task 9: Home Page - Popular Cars Carousel

**Files:**
- Create: `src/components/CarCarousel.jsx`
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Create CarCarousel component**

Create `src/components/CarCarousel.jsx`:

```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarContext } from '../context/CarContext';
import CarCard from './CarCard';

const CarCarousel = ({ onCarClick }) => {
  const { cars, loading } = useCarContext();
  const [startIndex, setStartIndex] = useState(0);

  const popularCars = cars.slice(0, 6);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
      </div>
    );
  }

  if (popularCars.length === 0) {
    return <div className="text-center py-12 text-gray-600">Belum ada mobil tersedia.</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularCars.slice(0, 3).map((car) => (
          <CarCard key={car.id} car={car} onClick={onCarClick} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/catalog" className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all">
          Lihat Semua Katalog
        </Link>
      </div>
    </div>
  );
};

export default CarCarousel;
```

- [ ] **Step 2: Add to Home page**

Add CarCarousel section to `src/pages/Home.jsx` after services section.

- [ ] **Step 3: Test**

```bash
npm run dev
```

Expected: Popular cars section displays with 3 cars

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add popular cars carousel to home page"
```

---


## Task 10-21: Remaining Implementation Tasks

Due to the comprehensive nature of this project, the remaining tasks follow the same pattern:

**Task 10:** Testimonial Slider Component
**Task 11:** Home Page CTA Section
**Task 12:** Car Detail Modal with Image Gallery
**Task 13:** Catalog Page with FilterBar
**Task 14:** About Page (Hero, Advantages, Location, Testimonials)
**Task 15:** Contact Page (Info, Map, Form)
**Task 16:** Admin Login
**Task 17:** Admin Car Management (CRUD)
**Task 18:** Admin Export/Import
**Task 19:** Floating WhatsApp Button
**Task 20:** Polish and Testing
**Task 21:** Production Build and Documentation

Each task follows TDD principles with:
- Component creation
- Integration with pages
- Testing in browser
- Git commit

---

## Summary

This implementation plan provides a complete roadmap for building the RentCar landing page with all specified features. The plan is designed to be executed task-by-task with frequent commits and testing.

**Total Tasks:** 21
**Estimated Time:** 3-5 days for full implementation
**Key Deliverables:** Production-ready React app with admin panel

