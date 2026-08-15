import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw,
  Zap
} from 'lucide-react';
import { safetyQuestions } from '../data/projectsData';

interface SafetyAuditToolProps {
  onScheduleInspection: (reportSummary: string) => void;
}

export function SafetyAuditTool({ onScheduleInspection }: SafetyAuditToolProps) {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null,
    2: null,
    3: null,
    4: null
  });

  const handleAnswer = (id: number, val: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleReset = () => {
    setAnswers({ 1: null, 2: null, 3: null, 4: null });
  };

  // Calculate risk score
  const answeredCount = Object.values(answers).filter(v => v !== null).length;
  const isComplete = answeredCount === safetyQuestions.length;

  let totalRisk = 0;
  safetyQuestions.forEach(q => {
    if (answers[q.id] === true) {
      totalRisk += q.riskIfYes;
    }
  });

  const safetyScore = Math.max(0, 100 - totalRisk);

  let statusLevel: 'Safe' | 'Moderate' | 'Critical' = 'Safe';
  let statusColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  let statusDesc = 'Your system appears stable, though periodic preventative checks are recommended.';

  if (safetyScore < 60) {
    statusLevel = 'Critical';
    statusColor = 'text-rose-600 bg-rose-50 border-rose-200';
    statusDesc = 'Critical electrical risks identified! High probability of short-circuits, equipment burnout, or fire hazards.';
  } else if (safetyScore < 85) {
    statusLevel = 'Moderate';
    statusColor = 'text-amber-600 bg-amber-50 border-amber-200';
    statusDesc = 'Notable warning flags detected in circuit loading, grounding, or surge resilience.';
  }

  const triggerInspection = () => {
    const summary = `Safety Diagnostic Score: ${safetyScore}/100 (${statusLevel} Risk). Issues flagged: ${
      safetyQuestions.filter(q => answers[q.id] === true).map(q => q.category).join(', ') || 'None'
    }`;
    onScheduleInspection(summary);
  };

  return (
    <section id="safety-audit" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Self-Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Electrical & Perimeter Safety Audit
          </h2>
          <p className="text-base text-slate-300 mt-2">
            Answer 4 quick diagnostic questions to calculate your property's electrical health score and uncover hidden fire or surge hazards.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="bg-slate-850 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Questions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Safety Checklist ({answeredCount}/{safetyQuestions.length} answered)
              </span>
              {answeredCount > 0 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              )}
            </div>

            {safetyQuestions.map((q) => {
              const currentVal = answers[q.id];
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border transition-all ${
                    currentVal !== null
                      ? currentVal
                        ? 'border-rose-500/50 bg-rose-950/20'
                        : 'border-emerald-500/40 bg-emerald-950/20'
                      : 'border-slate-700 bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                        {q.category}
                      </span>
                      <p className="text-sm font-semibold text-white mt-1 leading-snug">
                        {q.question}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleAnswer(q.id, true)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          currentVal === true
                            ? 'bg-rose-600 text-white shadow-sm'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                      >
                        YES
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, false)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          currentVal === false
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                      >
                        NO
                      </button>
                    </div>
                  </div>

                  {currentVal === true && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pt-3 border-t border-rose-500/20 text-xs text-rose-300 space-y-1"
                    >
                      <p><strong className="text-rose-200">Risk Factor:</strong> {q.explanation}</p>
                      <p><strong className="text-amber-300">Action:</strong> {q.recommendation}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Score & Certified Audit Dispatch */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="text-center space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Calculated Property Safety Score
                </span>
                
                {/* Visual Radial / Score Display */}
                <div className="relative flex items-center justify-center my-4">
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight flex items-baseline justify-center">
                    <span>{safetyScore}</span>
                    <span className="text-xl text-slate-500 font-normal">/100</span>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusColor}`}>
                  {statusLevel === 'Safe' ? (
                    <ShieldCheck className="w-4 h-4" />
                  ) : (
                    <AlertTriangle className="w-4 h-4" />
                  )}
                  <span>Status: {statusLevel} Risk Level</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 text-center leading-relaxed">
                {statusDesc}
              </p>

              {/* Action Recommendation */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs text-slate-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Includes insulation resistance & earth testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Thermal camera scan for hidden wire hotspots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Official certificate report provided</span>
                  </div>
                </div>

                <button
                  id="safety-audit-schedule-btn"
                  onClick={triggerInspection}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Request Full On-Site Safety Inspection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
