export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: 'Camera' | 'Zap' | 'Wrench' | 'Cpu' | 'ShieldAlert' | 'DoorClosed';
  badge: string;
  heroImage: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
  idealFor: string[];
  commonIssuesSolved: string[];
  estimatedTime: string;
  warranty: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'CCTV & Security' | 'Wiring & Conduit' | 'Gate & Fence' | 'Panel Upgrades' | 'Repairs & Maintenance';
  clientType: 'Residential' | 'Commercial' | 'Industrial' | 'Gated Community';
  location: string;
  duration: string;
  summary: string;
  image: string;
  keyHighlights: string[];
  specs: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrArea: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial';
  urgency: 'Emergency (Immediate Dispatch)' | 'Standard (Within 24-48h)' | 'Scheduled Project';
  preferredDate: string;
  description: string;
}

export interface SafetyQuestion {
  id: number;
  question: string;
  category: string;
  riskIfYes: number; // 0-25
  explanation: string;
  recommendation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
