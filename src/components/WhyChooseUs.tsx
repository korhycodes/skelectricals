import { motion } from 'motion/react';
import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  Award, 
  DollarSign, 
  Smartphone, 
  Headphones, 
  CheckCircle2 
} from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'Solve Electrical Issues Fast',
      description: 'Our mobile service units are positioned for under 45-minute emergency dispatch, minimizing costly business downtime and family discomfort.',
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: Award,
      title: 'Certified Master Electricians',
      description: 'Strict adherence to national and international wiring standards (IEC 60364). Every installation undergoes rigorous continuity & insulation testing.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: ShieldCheck,
      title: '12-Month Workmanship Warranty',
      description: 'We stand behind every wire pulled, breaker installed, camera mounted, and gate motor configured with a comprehensive 1-year guarantee.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: DollarSign,
      title: 'Transparent Upfront Pricing',
      description: 'No hidden charges or surprise invoices. You receive a clear, itemized written quotation before any work begins.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      icon: Smartphone,
      title: 'Smart Mobile Remote Control',
      description: 'We integrate encrypted iOS & Android mobile access for CCTV cameras, automated gates, and perimeter fence alarms with zero subscription fees.',
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Support',
      description: 'Immediate access to real electrical engineers via phone or WhatsApp, ready to guide you or dispatch emergency repair technicians instantly.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>The SK Electricals Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Property Owners & Businesses Trust Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Engineering precision, rapid response times, and uncompromising safety have made SK Electricals the premier electrical contractor.
          </p>
        </div>

        {/* 6 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
