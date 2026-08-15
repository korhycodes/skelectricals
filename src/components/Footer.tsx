import { Zap, Phone, Mail, MapPin, ShieldCheck, ArrowUp, MessageSquare, Clock } from 'lucide-react';
import { servicesList } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: (service?: string) => void;
  onOpenEstimator: () => void;
}

export function Footer({ onOpenBooking, onOpenEstimator }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-left pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-700 text-white font-black text-lg">
                <span className="text-white font-extrabold">S</span>
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400 -mx-1" />
                <span className="text-white font-extrabold">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white">
                  SK ELECTRICALS
                </span>
                <span className="text-[9px] tracking-widest uppercase font-bold text-amber-400 -mt-1">
                  Solve Electrical Issues Fast
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your certified partner for high-precision electrical engineering, 4K CCTV surveillance, electric fences, automated gates, and 24/7 rapid emergency repair services.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="tel:+233240000000"
                className="px-3 py-1.5 rounded-lg bg-blue-900/80 hover:bg-blue-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+233 24 000 0000</span>
              </a>
              <a
                href="https://wa.me/233240000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: The 6 Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesList.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onOpenBooking(svc.title)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tools & Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Client Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenEstimator} className="hover:text-amber-400 transition-colors">
                  Cost & Time Estimator
                </button>
              </li>
              <li>
                <a href="#safety-audit" className="hover:text-amber-400 transition-colors">
                  Safety Audit Diagnostic
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  Projects Portfolio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Emergency Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              24/7 Emergency Dispatch
            </h4>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span>On-Call Rapid Response</span>
              </div>
              <p className="text-slate-400 leading-snug">
                Power outages, sparking panels, gate jams & security alarms. Average arrival &lt; 45 mins.
              </p>
              <button
                onClick={() => onOpenBooking('Emergency Dispatch')}
                className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-lg uppercase tracking-wider text-[11px] transition-colors"
              >
                Request Urgent Tech
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>© {new Date().getFullYear()} SK Electricals Engineering Services. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>IEC 60364 Safety Standard Certified</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
