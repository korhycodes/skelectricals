import { motion } from 'motion/react';
import founderOfficeImage from '../assets/images/sk-founder-office.png';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Building2, 
  UserCheck,
  Phone,
  FileCheck2
} from 'lucide-react';

interface AboutFounderProps {
  onOpenBooking: () => void;
}

export function AboutFounder({ onOpenBooking }: AboutFounderProps) {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with authentic branding framing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-left"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src={founderOfficeImage}
                alt="SK Electricals Founder & Lead Engineer in office"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg bg-blue-900/90 backdrop-blur-xs text-white text-xs font-black uppercase tracking-wider border border-white/20 shadow-md">
                  Founder & Lead Engineer
                </span>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <Zap className="w-4 h-4 fill-amber-400" />
                  <span>SK Electricals Engineering Team</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  "Speed is vital, but safety is non-negotiable. We engineer electrical solutions built to last decades."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-blue-700" />
              <span>Engineering Heritage & Values</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Driven by Precision, Reliability, and Lightning-Fast Service
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded on the belief that electrical engineering must be fast, dependable, and completely transparent, <strong className="text-slate-900">SK Electricals</strong> has grown into a trusted contractor for high-end residential estates, corporate facilities, and commercial developments.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether wiring a multi-storey office complex, securing a perimeter with high-voltage electric fencing, automating massive sliding gates, or deploying intelligent 4K CCTV surveillance, our team applies rigorous digital testing and pure copper craftsmanship to ensure absolute safety.
            </p>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Licensed & Certified</span>
                </div>
                <p className="text-[11px] text-slate-500">Fully certified electrical and electronic security specialists.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict Safety Auditing</span>
                </div>
                <p className="text-[11px] text-slate-500">Zero-compromise insulation resistance, earth testing & circuit verification.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Rapid Response Vans</span>
                </div>
                <p className="text-[11px] text-slate-500">Mobile technicians equipped with Fluke diagnostic gear for same-day resolution.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Full 1-Year Warranty</span>
                </div>
                <p className="text-[11px] text-slate-500">100% replacement & repair guarantee on all equipment and workmanship.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                Schedule Site Consultation
              </button>

              <a
                href="tel:+233261873047"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Directly: +233 26 187 3047</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
