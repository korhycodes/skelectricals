import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Zap, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Calendar, 
  MessageSquare, 
  Send 
} from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialNotes?: string;
}

export function BookingModal({ isOpen, onClose, initialService, initialNotes }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    serviceType: initialService || 'CCTV Installation & IP Surveillance Systems',
    propertyType: 'Residential',
    urgency: 'Standard (Within 24-48h)',
    preferredDate: '',
    description: initialNotes || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
    if (initialNotes) {
      setFormData(prev => ({ ...prev, description: initialNotes }));
    }
  }, [initialService, initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(`SKE-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 text-left my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 relative">
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Official Service Booking</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              Request Technician or Project Quote
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Solve Electrical Issues Fast • Certified Engineers • Same-Day Dispatch
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 max-h-[calc(85vh-160px)] overflow-y-auto">
            {submitted ? (
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Booking Confirmed
                  </span>
                  <h4 className="text-2xl font-black text-slate-900">
                    Your Request Has Been Dispatched
                  </h4>
                  <p className="text-sm font-mono text-blue-700 font-bold">
                    Reference ID: #{bookingRef}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Client Name:</span>
                    <span className="font-bold text-slate-900">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-bold text-slate-900">{formData.serviceType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-slate-900">{formData.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Urgency:</span>
                    <span className="font-bold text-amber-700">{formData.urgency}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  A lead technician from SK Electricals will contact you at <strong>{formData.phone}</strong> within 15–30 minutes to confirm on-site timing and requirements.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                  <a
                    href={`https://wa.me/233240000000?text=Hi%20SK%20Electricals,%20I%20just%20submitted%20booking%20ref%20${bookingRef}%20for%20${encodeURIComponent(formData.serviceType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open in WhatsApp
                  </a>
                  <button
                    onClick={handleResetAndClose}
                    className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Location Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Location / Street Address *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. East Legon, near Shell Station"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="CCTV Installation & IP Surveillance Systems">CCTV Installation & IP Surveillance</option>
                    <option value="Electrical Upgrade & Solar Inverter Services">Electrical Upgrade & Solar Inverter</option>
                    <option value="24/7 Rapid Electrical Maintenance & Emergency Repairs">24/7 Rapid Emergency Repairs</option>
                    <option value="Complete Electrical Wiring & Conduit Infrastructure">Electrical Conduit & Building Wiring</option>
                    <option value="Electric Fence Perimeter Security Systems">Electric Fence Perimeter Security</option>
                    <option value="Automated Electric Gate Motors & Smart Access">Automated Electric Gate Motors</option>
                    <option value="Full Comprehensive Electrical Safety Audit">Comprehensive Safety Audit & Certification</option>
                  </select>
                </div>

                {/* Property Type & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Residential">Residential (Home / Villa / Apartment)</option>
                      <option value="Commercial">Commercial (Office / Store / Restaurant)</option>
                      <option value="Industrial">Industrial (Factory / Warehouse / Estate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Dispatch Schedule
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Standard (Within 24-48h)">Standard (Within 24-48 Hours)</option>
                      <option value="Emergency (Immediate Dispatch)">🚨 Emergency (Immediate Dispatch)</option>
                      <option value="Scheduled Project">Scheduled Project / Future Date</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Problem Description or Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe any specifics: symptoms, gate weight, number of CCTV cameras, or breaker details..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Routing to Dispatcher...</span>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                        <span>Confirm & Dispatch Request</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Licensed Technicians
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      Fast Confirmation
                    </span>
                  </div>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
