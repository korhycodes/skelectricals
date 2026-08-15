import { ProjectItem, TestimonialItem, FAQItem, SafetyQuestion } from '../types';

export const projectsList: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Commercial HQ Comprehensive Wiring & 3-Phase DB Upgrade',
    category: 'Panel Upgrades',
    clientType: 'Commercial',
    location: 'Central Business District',
    duration: '4 Days',
    summary: 'Turnkey electrical modernization for a 3-storey office building, upgrading from 60A to a 200A 3-phase system with automated generator ATS cutover and Class I surge suppression.',
    image: '/src/assets/images/electrical_wiring_panel_1786657439139.jpg',
    keyHighlights: [
      'Eliminated voltage drop across server infrastructure',
      'Dual SPD surge protection safeguarding $120k worth of electronics',
      '100% compliant electrical certificate issued'
    ],
    specs: '200A 3-Phase • 36-Way Distribution Board • Smart Energy Metering'
  },
  {
    id: 'proj-2',
    title: 'Luxury Villa 16-Camera 4K Surveillance & App Integration',
    category: 'CCTV & Security',
    clientType: 'Residential',
    location: 'Emerald Hills Estate',
    duration: '2 Days',
    summary: 'Full perimeter 4K IP camera network featuring starlight night vision, perimeter intrusion line tripwire alerts, and synchronized live view across family smartphones and central security station.',
    image: '/src/assets/images/cctv_security_system_1786657427837.jpg',
    keyHighlights: [
      'Zero blind spots with 16 ultra-wide 4K dome & bullet cameras',
      'Instant smartphone push notifications on boundary line crossing',
      'Concealed heavy-duty UV-rated conduits matching exterior architecture'
    ],
    specs: '16x 4K IP Cameras • 16-Channel 8TB NVR • POE Gigabit Switch'
  },
  {
    id: 'proj-3',
    title: 'Integrated Automated Sliding Gate & 10-Strand Electric Fence',
    category: 'Gate & Fence',
    clientType: 'Residential',
    location: 'Palm Crest Heights',
    duration: '2 Days',
    summary: 'Complete perimeter physical & electronic hardening: heavy-duty 800kg sliding gate motor automation paired with a 10-strand wall-top electric fence connected to GSM alert dialers.',
    image: '/src/assets/images/electric_fence_gate_1786657449395.jpg',
    keyHighlights: [
      'Centurion heavy-duty motor with 30m/min opening turbo speed',
      '9,500V pulse energizer with integrated anti-cut & anti-tamper siren',
      'Battery backup providing 36 hours of operation during power blackouts'
    ],
    specs: '800kg Sliding Motor • 10-Strand Alu Wire • Dual Beam Safety Sensors'
  },
  {
    id: 'proj-4',
    title: 'Tech Innovation Park Electrical Conduit & Earthing Network',
    category: 'Wiring & Conduit',
    clientType: 'Commercial',
    location: 'Airport Tech Corridor',
    duration: '10 Days',
    summary: 'Complete conduit piping, fire-resistant cable pulling, architectural lighting distribution, and low-resistance deep copper grounding grid (< 2.1 Ohms) for 24 startup offices.',
    image: '/src/assets/images/electrical_wiring_panel_1786657439139.jpg',
    keyHighlights: [
      'Tested to IEC standards with digital insulation tester',
      'Clean color-coded cable identification with zero cross-talk',
      'Dedicated clean ground for sensitive server rooms'
    ],
    specs: '4,500m Pure Copper Cable • 4x Deep Copper Earth Rods • Low Ohm Ground'
  },
  {
    id: 'proj-5',
    title: '24/7 Rapid Emergency Response: Medical Clinic Fault Rectification',
    category: 'Repairs & Maintenance',
    clientType: 'Commercial',
    location: 'Metro Plaza',
    duration: '2 Hours (Emergency Dispatch)',
    summary: 'Emergency dispatch within 25 minutes after main breaker trip paralyzed diagnostic imaging machines. Technicians quickly isolated ground fault in autoclave heater and restored power.',
    image: '/src/assets/images/sk_founder_office_1786657415644.jpg',
    keyHighlights: [
      'Arrived in 22 minutes with specialized Fluke diagnostic gear',
      'Isolated hazardous short without cutting power to vital cold storage',
      'Replaced damaged magnetic contactor and restored 100% operation'
    ],
    specs: 'Thermal Diagnostics • Megger Insulation Test • Urgent Switchgear Replacement'
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'David Osei-Mensah',
    role: 'Managing Director',
    companyOrArea: 'Apex Logistics & Warehousing',
    rating: 5,
    date: '2 weeks ago',
    service: 'CCTV Installation & Electric Fence',
    comment: 'SK Electricals transformed our warehouse security. They installed a 12-strand electric fence and a 16-channel 4K camera system. The team was prompt, clean, and extremely professional. Their attention to safety and neat wiring is unmatched.',
    verified: true
  },
  {
    id: 't-2',
    name: 'Dr. Evelyn Mensah',
    role: 'Homeowner',
    companyOrArea: 'Cantonments Residential Area',
    rating: 5,
    date: '1 month ago',
    service: 'Electric Gate Motor & Surge Protection',
    comment: 'Solve Electrical Issues Fast is truly their reality! My automatic sliding gate had been giving me trouble for months with other technicians. SK Electricals came in, diagnosed the faulty track and board in 15 minutes, replaced the motor, and added battery backup. Outstanding work!',
    verified: true
  },
  {
    id: 't-3',
    name: 'Emmanuel Kwakye',
    role: 'Facilities Manager',
    companyOrArea: 'Horizon Commercial Towers',
    rating: 5,
    date: '3 weeks ago',
    service: 'Three-Phase DB Upgrade & Maintenance',
    comment: 'We experienced constant breaker tripping during peak office hours. SK Electricals rebalanced our entire 3-phase load and installed a new distribution board over the weekend with zero disruption to Monday work. Highly recommend their engineering expertise.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Abigail Boateng',
    role: 'Property Developer',
    companyOrArea: 'Prestige Villas Estates',
    rating: 5,
    date: '2 months ago',
    service: 'Complete House Wiring & Conduit',
    comment: 'As a builder, I require strict adherence to safety standards. SK Electricals handles all our conduit piping, earthing tests, and trim-out wiring. They deliver on time, within quote, and always provide formal compliance certificates.',
    verified: true
  }
];

export const safetyQuestions: SafetyQuestion[] = [
  {
    id: 1,
    category: 'Breaker Panels & Trips',
    question: 'Do your circuit breakers trip frequently or do your lights flicker when large appliances start?',
    riskIfYes: 25,
    explanation: 'Flickering or frequent breaker trips indicate overloaded circuits, loose connections, or deteriorating breaker contacts.',
    recommendation: 'A panel load balance evaluation or breaker upgrade is advised to eliminate electrical fire risks.'
  },
  {
    id: 2,
    category: 'Warm Outlets & Odors',
    question: 'Have you ever noticed warm socket faceplates, mild buzzing sounds, or a faint plastic burning smell near switches?',
    riskIfYes: 30,
    explanation: 'Heat and buzzing are direct signs of loose high-resistance terminations or arcing inside wall boxes.',
    recommendation: 'Immediate technician inspection required to prevent electrical thermal damage.'
  },
  {
    id: 3,
    category: 'Grounding & Shocks',
    question: 'Do you feel a slight tingling or mild electric shock when touching metal appliances (fridge, washing machine, gate)?',
    riskIfYes: 25,
    explanation: 'Tingling is a critical warning sign that your building earthing/grounding rod is defective or missing.',
    recommendation: 'Urgent earth resistance test and earth leakage circuit breaker (ELCB/RCD) calibration required.'
  },
  {
    id: 4,
    category: 'Surge & Perimeter Defense',
    question: 'Are your sensitive electronics and property perimeter unprotected by surge arrestors or backup power?',
    riskIfYes: 20,
    explanation: 'Lightning strikes and voltage grid swings destroy circuit boards, gate motors, and camera NVRs without surge protectors.',
    recommendation: 'Install Class II Surge Protection Devices (SPD) and battery backups for essential security equipment.'
  }
];

export const faqList: FAQItem[] = [
  {
    category: 'Emergency & Dispatch',
    question: 'How fast can an SK Electricals technician arrive for an emergency?',
    answer: 'Our dedicated rapid response team aims for on-site arrival within 30 to 45 minutes across primary service zones. We are equipped with emergency fault finders, testing multimeters, and high-frequency replacement components right in our service vans.'
  },
  {
    category: 'Pricing & Quotes',
    question: 'Do you provide free initial inspections and transparent upfront pricing?',
    answer: 'Yes! We believe in 100% transparent pricing. We provide clear, itemized written estimates with zero hidden charges. For standard installations and projects, we offer complimentary on-site surveys.'
  },
  {
    category: 'CCTV & Security',
    question: 'Can I view my CCTV cameras and electric gate on my smartphone when I am away?',
    answer: 'Absolutely. Every CCTV and gate automation system we install is configured with encrypted mobile applications (iOS & Android). You get real-time video streaming, motion push notifications, and remote gate triggering with no recurring monthly software subscription fees.'
  },
  {
    category: 'Warranty & Quality',
    question: 'What warranty is provided on parts and labor?',
    answer: 'We provide a 12-month comprehensive warranty on all installations and hardware (extendable up to 24 months for panels and gate motors). If any defect arises from our workmanship within the warranty period, we resolve it at zero cost.'
  },
  {
    category: 'Safety & Compliance',
    question: 'Are your technicians certified and compliant with electrical building regulations?',
    answer: 'Yes. All our technicians are certified electrical practitioners trained in the latest safety codes and wiring regulations. Upon project completion, we provide formal safety verification and testing reports.'
  }
];
