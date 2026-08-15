import { motion } from 'motion/react';
import { Award, Clock, ShieldCheck, ThumbsUp, Wrench, CheckCircle } from 'lucide-react';

export function StatsBanner() {
  const stats = [
    {
      icon: Clock,
      value: '< 45 Mins',
      label: 'Avg Emergency Dispatch',
      subtext: 'Rapid mobile technicians on call',
      iconColor: 'text-amber-500 bg-amber-50',
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projects Completed',
      subtext: 'Homes, corporate & estates',
      iconColor: 'text-blue-600 bg-blue-50',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Code Compliance',
      subtext: 'IEC standard certified testings',
      iconColor: 'text-emerald-600 bg-emerald-50',
    },
    {
      icon: ThumbsUp,
      value: '12 Months',
      label: 'Workmanship Guarantee',
      subtext: 'Free follow-up defect support',
      iconColor: 'text-indigo-600 bg-indigo-50',
    },
  ];

  return (
    <div className="bg-white border-y border-slate-200/80 py-8 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className={`p-3 rounded-xl ${stat.iconColor} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
