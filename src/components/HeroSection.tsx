import { motion } from 'motion/react';
import { 
  Phone, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  Camera, 
  Zap, 
  Wrench, 
  Cpu, 
  ShieldAlert, 
  DoorClosed, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (service?: string) => void;
  onOpenEstimator: () => void;
}

export function HeroSection({ onOpenBooking, onOpenEstimator }: HeroSectionProps) {
  const quickServices = [
    { label: 'CCTV Installation', icon: Camera, color: 'text-blue-600 bg-blue-50' },
    { label: 'Upgrade Services', icon: Zap, color: 'text-amber-600 bg-amber-50' },
    { label: 'Maintenance & Repairs', icon: Wrench, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Electrical Wiring', icon: Cpu, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Electric Fence', icon: ShieldAlert, color: 'text-rose-600 bg-rose-50' },
    { label: 'Electric Gate', icon: DoorClosed, color: 'text-sky-600 bg-sky-50' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
      {/* Subtle background electrical mesh grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Trust Building */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Certified Electrical Engineers & Security Integrators</span>
            </div>

            {/* Main Headline from Client's Signboard */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Solve Electrical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-amber-600">
                Issues Fast.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              From precision conduit wiring and breaker panel upgrades to high-definition CCTV, electric fences, and automated gate motors — we deliver rapid, certified, and guaranteed electrical craftsmanship for homes and businesses.
            </p>

            {/* 6 Core Services Quick Pills from the client's office board */}
            <div className="pt-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Core Specializations
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {quickServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.label}
                      onClick={() => onOpenBooking(service.label)}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all text-left group"
                    >
                      <div className={`p-1.5 rounded-md ${service.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 truncate">
                        {service.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-request-dispatch-btn"
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform" />
                Request Fast Dispatch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-calculator-btn"
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-sm shadow-xs hover:border-blue-500 hover:text-blue-700 transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                Instant Cost Calculator
              </button>

              <a
                href="tel:+233240000000"
                className="px-4 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call +233 24 000 0000</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200 text-slate-700 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Under 45m Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>12-Mo Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Licensed Engineers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>No Hidden Fees</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Founder & Office Featured Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-4 border-white shadow-2xl">
              <img
                src="/src/assets/images/sk_founder_office_1786657415644.jpg"
                alt="SK Electricals Founder & Lead Engineer at the headquarters office"
                className="w-full h-auto object-cover object-center transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay on bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>HQ Operational & On Call</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-black tracking-wider uppercase shadow-lg">
                  SK ELECTRICALS
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left text-white bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs uppercase tracking-wider font-bold text-amber-400">
                    Trusted Engineering Leadership
                  </p>
                  <span className="text-[11px] text-slate-300 font-medium">Verified Contractor</span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  "Every wire secured. Every system tested. Safety without compromise."
                </h4>
                <div className="mt-2 flex items-center gap-4 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    CCTV & Gate Testing Lab
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    24/7 Field Techs
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Metric Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xl z-20">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                ⚡
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Client Satisfaction</p>
                <p className="text-sm font-extrabold text-slate-900">99.8% Safety Pass Rate</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
