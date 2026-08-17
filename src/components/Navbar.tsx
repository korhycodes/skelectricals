import { useState, useEffect } from 'react';
import { Phone, Clock, ShieldCheck, Menu, X, Zap, ChevronRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
  onOpenEstimator: () => void;
}

export function Navbar({ onOpenBooking, onOpenEstimator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Cost Estimator', href: '#estimator', onClick: onOpenEstimator },
    { label: 'Projects', href: '#projects' },
    { label: 'Safety Diagnostic', href: '#safety-audit' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              24/7 Rapid Emergency Dispatch
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Avg Arrival: &lt; 45 Mins
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Licensed & 100% Insured
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/233241587391?text=Hello%20SK%20Electricals,%20I%20need%20electrical/security%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Fast Line</span>
            </a>
            <a
              href="tel:+233261873047"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+233 26 187 3047</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching SK Electricals official emblem */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br from-blue-900 to-blue-700 shadow-md text-white font-black text-xl tracking-tighter transition-transform group-hover:scale-105">
              <span className="text-white font-extrabold">S</span>
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400 -mx-1 drop-shadow" />
              <span className="text-white font-extrabold">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-blue-950 flex items-center gap-1">
                SK ELECTRICALS
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-600 -mt-1">
                Solve Electrical Issues Fast
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-estimator-btn"
              onClick={onOpenEstimator}
              className="px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
            >
              Instant Quote
            </button>
            <button
              id="nav-booking-btn"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-bold text-white bg-linear-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Request Dispatch
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg flex items-center justify-between"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenEstimator();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg text-center"
              >
                Instant Estimator
              </button>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow text-center flex items-center justify-center gap-1"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                Book Technician
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
