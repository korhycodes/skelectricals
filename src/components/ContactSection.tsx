import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { faqList } from '../data/projectsData';

interface ContactSectionProps {
  onSuccessSubmit: (msg: string) => void;
}

export function ContactSection({ onSuccessSubmit }: ContactSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'CCTV Installation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessSubmit(`Thank you, ${formData.name}. An SK Electricals engineer has received your message and will reach out promptly.`);
    }, 600);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-20 bg-white relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>Direct Communication & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Get In Touch with SK Electricals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Have a project in mind, need an urgent electrical diagnostic, or want advice on CCTV and gate automation? Our engineering team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details & FAQ */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Hotline</h4>
                <a href="tel:+233240000000" className="text-base font-bold text-slate-900 hover:text-blue-600 block">
                  +233 24 000 0000
                </a>
                <p className="text-[11px] text-slate-500">24/7 Emergency & General Inquiries</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp Fast Chat</h4>
                <a
                  href="https://wa.me/233240000000?text=Hello%20SK%20Electricals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-700 hover:underline block"
                >
                  Chat with Technician
                </a>
                <p className="text-[11px] text-slate-500">Send photos & video of your issue</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Working Hours</h4>
                <p className="text-sm font-bold text-slate-900">Mon - Sat: 7:30 AM - 6:30 PM</p>
                <p className="text-[11px] text-amber-700 font-semibold">Emergency Dispatch: 24/7 / 365</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Headquarters</h4>
                <p className="text-sm font-bold text-slate-900">Greater Accra & Regional Hubs</p>
                <p className="text-[11px] text-slate-500">Full mobile workshop fleet</p>
              </div>

            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.question}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-100/70 transition-colors"
                      >
                        <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-white leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Inspection Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-950">
                  Send an Inquiry or Book Inspection
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and an SK Electricals engineer will contact you within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our engineering dispatch coordinator has received your project details and will call <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceInterest: 'CCTV Installation',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 024 123 4567"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Primary Service Required
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="CCTV Installation">CCTV Installation & Surveillance</option>
                      <option value="Upgrade Services">Upgrade Services (DB & Solar Hybrid)</option>
                      <option value="Maintenance & Repairs">Maintenance & Urgent Repairs</option>
                      <option value="Electrical Wiring">Electrical Conduit & House Wiring</option>
                      <option value="Electric Fence">Electric Fence Perimeter Security</option>
                      <option value="Electric Gate">Electric Gate Motor Automation</option>
                      <option value="Safety Inspection">Safety Inspection & Earth Testing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Describe Your Issue or Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly mention your location, symptoms (e.g., tripping breakers, gate not opening, new house wiring), or number of cameras needed..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Details...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Your contact information is strictly protected and never shared.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
