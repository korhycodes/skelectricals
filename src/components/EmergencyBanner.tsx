import { Phone, MessageSquare, Clock, Zap, MapPin, AlertCircle, ShieldAlert } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenBooking: () => void;
}

export function EmergencyBanner({ onOpenBooking }: EmergencyBannerProps) {
  const coverageAreas = [
    { name: 'Airport Residential & Cantonments', time: '20-30 Mins' },
    { name: 'East Legon & Adjiringanor', time: '25-35 Mins' },
    { name: 'Dzorwulu & Roman Ridge', time: '20-30 Mins' },
    { name: 'Tema & Spintex Corridor', time: '30-45 Mins' },
    { name: 'Osu & Central Business District', time: '20-30 Mins' },
    { name: 'Achimota & Westlands', time: '25-40 Mins' },
  ];

  return (
    <section id="emergency" className="py-16 bg-linear-to-r from-blue-950 via-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left Column: Urgent Alert Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>24/7 Rapid Emergency Response Team</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Electrical Emergency? Sparks, Power Outage or Gate Stalled?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Don’t risk electrical fire hazards or security breaches. Our certified mobile technicians carry full testing rigs and spare switchgear to resolve emergencies rapidly.
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:+233261873047"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Emergency Hotline (+233 24 000 0000)</span>
              </a>

              <a
                href="https://wa.me/233241587391?text=EMERGENCY:%20I%20need%20urgent%20electrical/gate/security%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Coverage Radar / Estimated Arrival Times */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Live Service Dispatch Radius
                </span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Van Units Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {coverageAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white/5 p-2.5 rounded-lg border border-white/5 flex items-center justify-between"
                >
                  <span className="text-slate-300 truncate pr-2">{area.name}</span>
                  <span className="font-bold text-amber-300 whitespace-nowrap">{area.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
              <span>Need service in other regions?</span>
              <button
                onClick={onOpenBooking}
                className="text-amber-400 hover:underline font-bold"
              >
                Request Custom Dispatch →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
