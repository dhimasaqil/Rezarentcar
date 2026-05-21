import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sendWhatsAppGeneral } from '../utils/whatsapp';

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/about', label: 'Tentang Kami' },
  { path: '/catalog', label: 'Katalog' },
  { path: '/contact', label: 'Kontak' },
  { path: '/admin', label: 'Admin' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/98 shadow-[0_4px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-white/6 bg-primary/95 backdrop-blur-lg'
      }`}
    >
      <div className="container-luxury">
        <div className="flex h-[4.5rem] items-center justify-between">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3" aria-label="Beranda RentCar">
            <span className="grid h-10 w-10 place-items-center rounded-luxury bg-secondary text-base font-black text-primary shadow-gold transition-shadow group-hover:shadow-gold-lg">
              R
            </span>
            <span>
              <span className="block text-lg font-extrabold leading-none tracking-wide text-white">
                RentCar
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.3em] text-secondary/80">
                Reza RentCar
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-lg px-3.5 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-white/65 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-secondary transition-all duration-300 ${
                    isActive(link.path) ? 'w-[calc(100%-1.75rem)] opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={sendWhatsAppGeneral}
            className="btn-gold hidden px-5 py-2.5 text-[13px] md:inline-flex"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.47 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.64a11.92 11.92 0 005.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.95 0-3.19-1.24-6.19-3.51-8.42z" />
            </svg>
            Konsultasi
          </button>

          {/* Mobile hamburger */}
          <button
            className="grid h-10 w-10 place-items-center rounded-luxury border border-white/12 text-white transition-all hover:border-secondary/50 hover:text-secondary focus:outline-none md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/8 pb-5 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 rounded-luxury px-4 py-3 text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-secondary/8 text-secondary'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {isActive(link.path) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                )}
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                sendWhatsAppGeneral();
              }}
              className="btn-gold mt-3 w-full px-5 py-3 text-sm"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.47 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.64a11.92 11.92 0 005.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.95 0-3.19-1.24-6.19-3.51-8.42z" />
              </svg>
              Konsultasi via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
