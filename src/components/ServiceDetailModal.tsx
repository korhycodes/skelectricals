import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, Clock, Award, ArrowRight, Zap, Phone } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export function ServiceDetailModal({ service, onClose, onBook }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 text-left my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner Image */}
          <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2">
                {service.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-200px)] overflow-y-auto">
            {/* Tagline & Description */}
            <div>
              <p className="text-base font-bold text-blue-900 mb-1">{service.tagline}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </div>

            {/* Key Technical Specifications */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                Technical Specifications & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keySpecs.map((spec) => (
                  <div key={spec.label} className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs">
                    <p className="text-xs text-slate-500 font-medium">{spec.label}</p>
                    <p className="text-sm font-bold text-slate-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features list */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                What Is Included in this Service
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnaround & Warranty Guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="text-xs text-blue-900 font-bold">Estimated Turnaround</p>
                  <p className="text-xs text-slate-600">{service.estimatedTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-xs text-emerald-900 font-bold">Warranty Protection</p>
                  <p className="text-xs text-slate-600">{service.warranty}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <a
              href="tel:+233240000000"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Talk to Lead Technician</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onBook(service.title);
                  onClose();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 group transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                Book This Service
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
