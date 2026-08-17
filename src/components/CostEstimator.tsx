import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Check, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Info
} from 'lucide-react';

interface CostEstimatorProps {
  onBookWithEstimate: (estimateDetails: {
    serviceName: string;
    propertyType: string;
    estimatedRange: string;
    summary: string;
  }) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  timeUnit: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'cctv',
    name: 'CCTV Camera Installation',
    baseMin: 1800,
    baseMax: 4500,
    timeUnit: '1 - 2 Days',
    description: '4K/1080p IP surveillance with NVR storage & smartphone live feed'
  },
  {
    id: 'gate',
    name: 'Electric Gate Motor Automation',
    baseMin: 3200,
    baseMax: 6800,
    timeUnit: '1 Day',
    description: 'Sliding/swing motor, remote controls, safety photobeams & battery'
  },
  {
    id: 'fence',
    name: 'Electric Fence Perimeter Defense',
    baseMin: 2800,
    baseMax: 7500,
    timeUnit: '1 - 3 Days',
    description: 'Wall-top high voltage fence with energizer, siren & SMS dialer'
  },
  {
    id: 'upgrade',
    name: 'Distribution Board & Panel Upgrade',
    baseMin: 1500,
    baseMax: 4200,
    timeUnit: '4 - 8 Hours',
    description: 'Modern breaker panel replacement, load balancing & surge arrestors'
  },
  {
    id: 'wiring',
    name: 'Complete Conduit House/Office Wiring',
    baseMin: 4500,
    baseMax: 14000,
    timeUnit: '3 - 7 Days',
    description: 'Full concealed conduit pipes, 100% copper cables & earth rod'
  },
  {
    id: 'repairs',
    name: 'Emergency Fault Finding & Repair',
    baseMin: 350,
    baseMax: 1200,
    timeUnit: '1 - 3 Hours',
    description: 'Immediate technician dispatch, fault isolation & circuit restoration'
  }
];

const propertyMultipliers: Record<string, { label: string; multiplier: number; desc: string }> = {
  compact: { label: 'Apartment / Small Shop', multiplier: 0.85, desc: 'Up to 2 bedrooms or < 100 sq m' },
  medium: { label: 'Standard 3-4 Bed House', multiplier: 1.0, desc: 'Average residential property' },
  large: { label: 'Executive Villa / Multi-Unit', multiplier: 1.45, desc: 'Large premises or 2-storey compound' },
  commercial: { label: 'Commercial Office / Warehouse', multiplier: 1.85, desc: 'Offices, retail complexes or industrial sites' },
};

const addOnOptions = [
  { id: 'surge', name: 'Surge Protection Device (SPD)', price: 450, desc: 'Protects appliances against lightning spikes' },
  { id: 'battery', name: 'Dedicated Backup Battery Kit', price: 650, desc: 'Guarantees power during general blackouts' },
  { id: 'cert', name: 'Official Safety Compliance Certificate', price: 250, desc: 'Official test report for insurance & building permits' },
  { id: 'warranty2yr', name: 'Extended 24-Month Full Warranty', price: 350, desc: 'Double your parts and labor coverage' },
];

export function CostEstimator({ onBookWithEstimate }: CostEstimatorProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('cctv');
  const [selectedPropertyKey, setSelectedPropertyKey] = useState<string>('medium');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['surge']);
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('standard');

  const selectedService = serviceOptions.find(s => s.id === selectedServiceId) || serviceOptions[0];
  const propertyInfo = propertyMultipliers[selectedPropertyKey];

  const calculation = useMemo(() => {
    const mult = propertyInfo.multiplier;
    let min = selectedService.baseMin * mult;
    let max = selectedService.baseMax * mult;

    // Add selected add-ons
    let addOnsTotal = 0;
    selectedAddOns.forEach(id => {
      const opt = addOnOptions.find(o => o.id === id);
      if (opt) addOnsTotal += opt.price;
    });

    min += addOnsTotal;
    max += addOnsTotal;

    // Urgency surcharge if emergency
    if (urgency === 'emergency') {
      min *= 1.15;
      max *= 1.15;
    }

    return {
      min: Math.round(min / 10) * 10,
      max: Math.round(max / 10) * 10,
      addOnsTotal,
    };
  }, [selectedService, propertyInfo, selectedAddOns, urgency]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleBookEstimate = () => {
    const summary = `${selectedService.name} for ${propertyInfo.label} with ${selectedAddOns.length} add-on(s). Estimated Range: GHS ${calculation.min.toLocaleString()} - GHS ${calculation.max.toLocaleString()}`;
    onBookWithEstimate({
      serviceName: selectedService.name,
      propertyType: propertyInfo.label,
      estimatedRange: `GHS ${calculation.min.toLocaleString()} – ${calculation.max.toLocaleString()}`,
      summary
    });
  };

  return (
    <section id="estimator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Instant Cost & Time Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Calculate realistic ballpark estimates for your electrical, surveillance, or security project in 30 seconds. No hidden fees, ever.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                1. Select Primary Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedServiceId(opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      selectedServiceId === opt.id
                        ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-2 ring-blue-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">{opt.name}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedServiceId === opt.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                      }`}>
                        {selectedServiceId === opt.id && <Check className="w-2.5 h-2.5 stroke-3" />}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{opt.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Scale */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                2. Property Scale & Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.entries(propertyMultipliers).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPropertyKey(key)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPropertyKey === key
                        ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs font-bold text-slate-900 leading-snug">{data.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5 truncate">{data.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Recommended Add-Ons */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                3. Recommended Safety & Convenience Add-ons
              </label>
              <div className="space-y-2">
                {addOnOptions.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent div
                          className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">{addon.name}</p>
                          <p className="text-[11px] text-slate-500">{addon.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-700 whitespace-nowrap ml-2">
                        +GHS {addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Dispatch Urgency */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                4. Urgency Schedule
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    urgency === 'standard'
                      ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <p className="text-xs font-bold">Standard Project (24-48h)</p>
                  <p className="text-[11px] text-slate-500">Regular booking schedule</p>
                </button>
                <button
                  onClick={() => setUrgency('emergency')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    urgency === 'emergency'
                      ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <p className="text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    Rapid 24/7 Emergency Dispatch
                  </p>
                  <p className="text-[11px] text-slate-500">Immediate technician routing</p>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-linear-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-800 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                    Live Estimate Summary
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {selectedService.name}
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-semibold text-slate-300">
                  {propertyInfo.label.split('/')[0]}
                </div>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-medium">Estimated Budget Range:</span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-2">
                  <span className="text-amber-400">GHS {calculation.min.toLocaleString()}</span>
                  <span className="text-sm font-normal text-slate-400">–</span>
                  <span className="text-white">GHS {calculation.max.toLocaleString()}</span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
                  <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Includes standard labor, certified cabling, mounting fixtures & testing.
                </p>
              </div>

              {/* Specs & Timeline breakdown */}
              <div className="bg-white/5 rounded-xl p-4 space-y-2.5 border border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Estimated Duration:
                  </span>
                  <span className="font-bold text-white">{selectedService.timeUnit}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Warranty Protection:
                  </span>
                  <span className="font-bold text-emerald-300">12 Months (Parts & Labor)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Safety Code:
                  </span>
                  <span className="font-bold text-white">IEC 60364 Certified</span>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="text-xs text-slate-300 space-y-1.5 pt-2">
                <p className="font-bold text-white">Our 3-Step Process:</p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">1</span>
                  <span>Free on-site verification & final fixed-price quote</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">2</span>
                  <span>Clean execution by certified SK Electrical technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">3</span>
                  <span>Final safety testing, handover & warranty activation</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="estimator-book-btn"
                onClick={handleBookEstimate}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Zap className="w-4 h-4 text-slate-950 fill-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Book Service with This Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
