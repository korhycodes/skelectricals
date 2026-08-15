import { motion } from 'motion/react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { testimonialsList } from '../data/projectsData';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Trusted by Homeowners & Commercial Managers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Read what property owners, developers, and facilities directors say about our workmanship, speed, and reliability.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-800">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span>5.0 / 5.0 Average Rating across 180+ Completed Jobs</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {testimonialsList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">{item.date}</span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-100">
                  Service: {item.service}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900">{item.name}</span>
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500">
                    {item.role} • <span className="text-slate-700 font-medium">{item.companyOrArea}</span>
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
