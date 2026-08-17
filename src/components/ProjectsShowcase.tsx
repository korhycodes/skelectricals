import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FolderCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Filter
} from 'lucide-react';
import { projectsList } from '../data/projectsData';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  onBookProjectScope: (projectTitle: string) => void;
}

export function ProjectsShowcase({ onBookProjectScope }: ProjectsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'CCTV & Security', 'Wiring & Conduit', 'Gate & Fence', 'Panel Upgrades', 'Repairs & Maintenance'];

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Explore recent residential complexes, corporate office towers, and industrial perimeter hardening completed by SK Electricals.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-700 text-white shadow-sm">
                    {proj.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 shadow-sm">
                    {proj.clientType}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {proj.location}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    {proj.duration}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                    {proj.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs & Booking CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-mono text-slate-500 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-200 truncate">
                    {proj.specs}
                  </p>

                  <button
                    onClick={() => onBookProjectScope(proj.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-700 hover:text-white text-blue-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Request Similar Installation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
