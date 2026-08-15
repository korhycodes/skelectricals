import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  Zap, 
  Wrench, 
  Cpu, 
  ShieldAlert, 
  DoorClosed, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { servicesList } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService, onBookService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const iconMap = {
    Camera,
    Zap,
    Wrench,
    Cpu,
    ShieldAlert,
    DoorClosed,
  };

  const filteredServices = activeTab === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Comprehensive Electrical & Security Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Core Specializations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From the official service board: certified electrical installations, smart surveillance networks, perimeter security fences, and 24/7 rapid emergency fault resolution.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All 6 Services
            </button>
            {servicesList.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveTab(svc.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === svc.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {svc.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Zap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col group text-left"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge & Icon */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-blue-900 shadow-sm backdrop-blur-xs">
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="p-2 rounded-xl bg-blue-600/90 backdrop-blur-xs text-white shadow-md">
                      <Icon className="w-5 h-5 text-amber-300" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {service.estimatedTime.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list snapshot */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-slate-700 hover:text-blue-700 flex items-center gap-1 py-1 transition-colors"
                    >
                      <span>Technical Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onBookService(service.title)}
                      className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-700 hover:text-white text-blue-700 text-xs font-bold transition-all flex items-center gap-1.5 group/btn"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rapid Issue Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Have a specific electrical requirement or urgent fault?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Our master technicians provide on-site diagnostics, certified schematics, and same-day repair vans.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+233240000000"
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all shadow-md"
            >
              Direct Call Hotline
            </a>
            <button
              onClick={() => onBookService('General Electrical Request')}
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all text-center"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
