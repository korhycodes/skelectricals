import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, FolderCheck, MapPin, Play, Video } from 'lucide-react';
import { projectsList } from '../data/projectsData';

interface ProjectsShowcaseProps {
  onBookProjectScope: (projectTitle: string) => void;
}

export function ProjectsShowcase({ onBookProjectScope }: ProjectsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['All', 'CCTV & Security', 'Wiring & Conduit', 'Gate & Fence', 'Panel Upgrades', 'Repairs & Maintenance'];
  const filteredProjects = activeCategory === 'All' ? projectsList : projectsList.filter((project) => project.category === activeCategory);
  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  useEffect(() => setActiveIndex(0), [activeCategory]);

  const moveCarousel = (direction: number) => {
    setActiveIndex((current) => (current + direction + filteredProjects.length) % filteredProjects.length);
  };

  if (!activeProject) return null;

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-100/70 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900">
            <FolderCheck className="h-3.5 w-3.5 text-blue-700" />
            <span>On-Site Work Reels</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Recent Projects</h2>
          <p className="mt-2 text-base text-slate-600 sm:text-lg">Browse our latest electrical, security, and automation work in a vertical 9:16 project reel.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${activeCategory === category ? 'bg-blue-700 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-200'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center">
          <div className="relative w-full max-w-[280px] shrink-0">
            <div className="aspect-[9/16] overflow-hidden rounded-3xl border-4 border-slate-950 bg-slate-950 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div key={activeProject.id} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }} className="relative h-full w-full">
                  {activeProject.video ? (
                    <video className="h-full w-full object-cover" src={activeProject.video} poster={activeProject.image} autoPlay muted loop playsInline preload="auto" />
                  ) : (
                    <img src={activeProject.image} alt={activeProject.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="rounded-md bg-blue-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">{activeProject.category}</span>
                    <span className="flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                      {activeProject.video ? <Video className="h-3 w-3 text-amber-400" /> : <Play className="h-3 w-3 text-amber-400" />}
                      {activeProject.video ? 'Video' : 'Project reel'}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="mb-2 flex items-center gap-3 text-[11px] text-slate-300">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-amber-400" />{activeProject.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-blue-400" />{activeProject.duration}</span>
                    </div>
                    <h3 className="text-xl font-black leading-tight">{activeProject.title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button onClick={() => moveCarousel(-1)} aria-label="Previous project" className="absolute -left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-slate-200 transition hover:bg-blue-700 hover:text-white"><ArrowLeft className="h-5 w-5" /></button>
            <button onClick={() => moveCarousel(1)} aria-label="Next project" className="absolute -right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-slate-200 transition hover:bg-blue-700 hover:text-white"><ArrowRight className="h-5 w-5" /></button>
          </div>

          <div className="flex max-w-xl flex-1 flex-col justify-center text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Project {activeIndex + 1} of {filteredProjects.length}</p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{activeProject.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{activeProject.summary}</p>
            <div className="mt-6 space-y-2 border-t border-slate-200 pt-5">
              {activeProject.keyHighlights.map((highlight) => <div key={highlight} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /><span>{highlight}</span></div>)}
            </div>
            <p className="mt-6 rounded-xl border border-slate-200 bg-white p-3 text-xs font-mono text-slate-500">{activeProject.specs}</p>
            <button onClick={() => onBookProjectScope(activeProject.title)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-xs font-bold text-white transition hover:bg-blue-800 sm:w-fit">Request Similar Installation<ArrowRight className="h-4 w-4" /></button>
            <div className="mt-6 flex gap-1.5" aria-label="Project carousel position">
              {filteredProjects.map((project, index) => <button key={project.id} onClick={() => setActiveIndex(index)} aria-label={`View project ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-amber-500' : 'w-3 bg-slate-300 hover:bg-blue-400'}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
