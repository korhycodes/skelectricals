import { ServiceItem } from '../types';
import cctvImage from '../assets/images/cctv_security_system_1786657427837.jpg';
import electricalWiringImage from '../assets/images/electrical_wiring_panel_1786657439139.jpg';
import founderOfficeImage from '../assets/images/sk_founder_office_1786657415644.jpg';
import fenceGateImage from '../assets/images/electric_fence_gate_1786657449395.jpg';

export const servicesList: ServiceItem[] = [
  {
    id: 'cctv-installation',
    title: 'CCTV Installation & IP Surveillance Systems',
    shortTitle: 'CCTV Installation',
    tagline: '24/7 Crystal Clear Monitoring with Mobile Live View & Smart Motion Detection',
    description: 'Complete supply, wiring, configuration, and maintenance of high-definition IP dome, bullet, and PTZ camera surveillance networks for residences, commercial compounds, and industrial sites.',
    iconName: 'Camera',
    badge: 'High Demand',
    heroImage: cctvImage,
    features: [
      '4K & 1080p Ultra-HD IP Cameras with Starlight Night Vision',
      'Secure Remote Phone & Tablet Live Stream (iOS & Android)',
      'NVR / DVR Storage Setup with Multi-Day Loop Recording & Cloud Backup',
      'AI Smart Motion Alerts & Perimeter Tripwire Detection',
      'Concealed, Weatherproof & Anti-Vandal Cable Conduit Layout',
      'Post-Installation Training & Complimentary 12-Month Support'
    ],
    keySpecs: [
      { label: 'Camera Resolutions', value: '4MP / 8MP 4K Ultra-HD' },
      { label: 'Mobile App', value: 'Zero Subscription Live View' },
      { label: 'Night Vision Range', value: 'Up to 30m–60m IR / Color' },
      { label: 'Warranty', value: '1-Year Equipment & Workmanship' }
    ],
    idealFor: [
      'Homeowners seeking complete perimeter security',
      'Retail shops, warehouses & corporate offices',
      'Gated residential estates & apartment blocks'
    ],
    commonIssuesSolved: [
      'Blind spots around perimeter walls and entryways',
      'Blurry low-resolution legacy camera footage',
      'Unreliable Wi-Fi cameras disconnecting during power fluctuations'
    ],
    estimatedTime: '1 – 2 Days (Typical 4–16 camera installation)',
    warranty: '12 Months Full Warranty on Hardware & Labor'
  },
  {
    id: 'upgrade-services',
    title: 'Electrical Upgrade & Solar Inverter Services',
    shortTitle: 'Upgrade Services',
    tagline: 'Modernize Your Power Grid, Distribution Panels & Hybrid Energy Systems',
    description: 'Transform outdated electrical distribution boxes, upgrade from single to three-phase capacity, install surge arrestors, and integrate solar hybrid inverters for uninterrupted power security.',
    iconName: 'Zap',
    badge: 'Efficiency & Safety',
    heroImage: electricalWiringImage,
    features: [
      'Main Distribution Board (DB) Replacement & Modern Circuit Breakers',
      'Single-Phase to Three-Phase Power Load Balancing & Upgrades',
      'Class I & II Surge Protection Devices (SPD) for Lightning Defense',
      'Hybrid Solar Inverter & LiFePO4 Lithium Battery Backup Integration',
      'Automatic Transfer Switches (ATS) for Generator & Solar Cutover',
      'Energy Audit & Smart Power Monitoring Meter Installation'
    ],
    keySpecs: [
      { label: 'Panel Standards', value: 'IEC 61439 & National Code Compliant' },
      { label: 'Surge Rating', value: 'Up to 40kA Transient Defense' },
      { label: 'Inverter Types', value: 'Hybrid Sine Wave (3kVA – 50kVA)' },
      { label: 'Certification', value: 'Official Safety Certificate of Compliance' }
    ],
    idealFor: [
      'Older homes experiencing frequent breaker trips',
      'Offices adding heavy server racks & air conditioning units',
      'Factories requiring balanced 3-phase machinery supply'
    ],
    commonIssuesSolved: [
      'Overloaded burning circuit breakers and flickering lights',
      'Expensive appliances damaged by voltage spikes and surges',
      'Disruptive blackouts interrupting business operations'
    ],
    estimatedTime: '4 – 8 Hours (Standard panel swap & commissioning)',
    warranty: '24 Months Workmanship & Panel Guarantee'
  },
  {
    id: 'maintenance-repairs',
    title: '24/7 Rapid Electrical Maintenance & Emergency Repairs',
    shortTitle: 'Maintenance & Repairs',
    tagline: 'Immediate On-Site Diagnosis and Precision Fault Troubleshooting',
    description: 'Fast, dependable response when power goes down or electrical faults occur. Our certified technicians carry advanced digital multimeters, insulation testers, and spare components to resolve emergencies on the spot.',
    iconName: 'Wrench',
    badge: '24/7 Rapid Dispatch',
    heroImage: founderOfficeImage,
    features: [
      '24/7 Emergency Dispatch with Under 45-Minute Average Response',
      'Precision Fault Finding, Ground Leakage & Short Circuit Isolation',
      'Burnt Cable, Contactor, Switchgear & Socket Replacement',
      'Generator Alternator & Automatic Changeover Diagnostic',
      'Thermal Imaging Camera Inspection for Hidden Electrical Hotspots',
      'Comprehensive Preventative Commercial Maintenance Contracts'
    ],
    keySpecs: [
      { label: 'Response Target', value: '< 45 Minutes Emergency Dispatch' },
      { label: 'Diagnostics', value: 'Fluke Thermal & Digital Multimeter Analyzers' },
      { label: 'Availability', value: '24 Hours / 7 Days a Week' },
      { label: 'Fix Rate', value: '98% First-Visit Resolution' }
    ],
    idealFor: [
      'Urgent home power failures and burning odor alerts',
      'Commercial restaurants, cold rooms & clinics needing zero downtime',
      'Facilities managers requiring regular preventative audits'
    ],
    commonIssuesSolved: [
      'Earth leakage trips that cannot be reset',
      'Sudden loss of power across specific rooms or phases',
      'Sparking outlets, buzzing breaker boxes, and loose neutral connections'
    ],
    estimatedTime: '30 Mins – 3 Hours (Typical emergency repair)',
    warranty: '90-Day Guaranteed Repair Protection'
  },
  {
    id: 'electrical-wiring',
    title: 'Complete Electrical Wiring & Conduit Infrastructure',
    shortTitle: 'Electrical Wiring',
    tagline: 'Flawless Conduit Laying, Earthing & Heavy-Duty Cable Installations',
    description: 'From new construction conduit piping to complete structural rewiring, we execute clean, color-coded, fire-retardant wiring according to the strictest electrical safety codes.',
    iconName: 'Cpu',
    badge: 'Master Craftsmanship',
    heroImage: electricalWiringImage,
    features: [
      'Concealed Flush PVC & Metal Conduit Pipe Laying',
      'Pure Copper Flame-Retardant Cable Pulling (1.5mm² to 35mm²+)',
      'Deep Copper Earth Rods & Low-Resistance Earthing Verification (< 5 Ohms)',
      'Modern Architectural Switches, Sockets & Dimmers Installation',
      'Structured Network Data, Audio & TV Coaxial Cabling',
      'Pre-Plaster & Final Trim-Out Verification Tests'
    ],
    keySpecs: [
      { label: 'Conductor Material', value: '100% High-Conductivity Pure Copper' },
      { label: 'Earth Resistance', value: 'Certified Under 5 Ohms' },
      { label: 'Conduit Grade', value: 'Heavy Duty Flame-Retardant PVC / GI' },
      { label: 'Inspection', value: 'Rigorous Insulation & Continuity Testing' }
    ],
    idealFor: [
      'New residential villas and multi-unit apartment constructions',
      'Commercial office renovations and retail shop fit-outs',
      'Historical building full rewiring projects'
    ],
    commonIssuesSolved: [
      'Deteriorated old aluminum or cloth-insulated wiring fire hazards',
      'Ungrounded outlets causing mild electric shocks',
      'Messy surface-run cables disrupting interior aesthetics'
    ],
    estimatedTime: 'Project dependent (Phase 1: 3-5 days, Phase 2: 2-3 days)',
    warranty: '5-Year Structural Wiring Warranty'
  },
  {
    id: 'electric-fence',
    title: 'Electric Fence Perimeter Security Systems',
    shortTitle: 'Electric Fence',
    tagline: 'High-Voltage Non-Lethal Defense with Anti-Cut & Tamper Alarms',
    description: 'Deter, detect, and delay intruders before they breach your compound. We engineer multi-strand stainless steel and high-tensile aluminum fences powered by certified smart energizers.',
    iconName: 'ShieldAlert',
    badge: 'Perimeter Defense',
    heroImage: fenceGateImage,
    features: [
      '6, 8, 10 & 12-Strand High-Tensile Wall-Top & Free-Standing Systems',
      'Certified 8,000V – 10,000V Pulse Shock Smart Energizers',
      'Integrated High-Decibel Siren & Flashing Strobe Warning Light',
      'Smart GSM Cellular Module for Instant Intrusion Phone Alerts & SMS',
      'Tamper-Proof Anti-Sag Tensioners & UV-Stabilized Polycarbonate Insulators',
      'Battery Backup Providing 24+ Hours Protection during Grid Outages'
    ],
    keySpecs: [
      { label: 'Voltage Output', value: '8.5kV – 9.8kV Pulsed Safe Voltage' },
      { label: 'Wire Grade', value: 'High Tensile 1.6mm Marine-Grade Alu / SS' },
      { label: 'Alarm Triggers', value: 'Cut, Short-Circuit, Grounding & Tamper' },
      { label: 'Battery Backup', value: '12V Sealed Deep Cycle 24-Hour Battery' }
    ],
    idealFor: [
      'Private residences and gated villas',
      'Commercial warehouses and logistics yards',
      'Schools, embassies, and industrial compounds'
    ],
    commonIssuesSolved: [
      'Vulnerable low boundary walls prone to scaling',
      'Frequent false alarms on poorly tensioned old fences',
      'Fences failing to hold power during general electricity blackouts'
    ],
    estimatedTime: '1 – 2 Days (Typical residential perimeter)',
    warranty: '12-Month Energizer & Installation Guarantee'
  },
  {
    id: 'electric-gate',
    title: 'Automated Electric Gate Motors & Smart Access',
    shortTitle: 'Electric Gate',
    tagline: 'Heavy-Duty Motor Automation with Keyless Remote & Smartphone Control',
    description: 'Transform your driveway gate into a seamless automated portal. We install industry-leading sliding and double-swing gate motors featuring smooth soft-stop mechanisms, obstacle anti-crush sensors, and emergency battery backup.',
    iconName: 'DoorClosed',
    badge: 'Convenience & Safety',
    heroImage: fenceGateImage,
    features: [
      'High-Speed Heavy-Duty Motors (Handling 400kg to 2,000kg Gates)',
      'Infrared Anti-Crush Safety Photobeams to Protect Vehicles & Pedestrians',
      'Rolling-Code Encrypted Long-Range Remote Controls (Anti-Cloning)',
      'Mobile Phone GSM Calling & App Open/Close Gate Automation',
      'Heavy-Duty Steel Gear Rack & Stainless Roller Wheel Track Alignment',
      'Manual Emergency Release Key & Built-In Battery Backup Operation'
    ],
    keySpecs: [
      { label: 'Gate Capacity', value: 'Sliding & Swing (Up to 2,000kg)' },
      { label: 'Opening Speed', value: '18m – 30m / minute Turbo Option' },
      { label: 'Safety Sensors', value: 'Dual Infrared Obstacle Photobeams' },
      { label: 'Backup System', value: 'On-Board 24V / 12V Battery Pack' }
    ],
    idealFor: [
      'Busy homeowners seeking secure entrance without leaving the car',
      'Commercial premises with frequent visitor & delivery traffic',
      'Residential complexes requiring multi-user access tags'
    ],
    commonIssuesSolved: [
      'Heavy manual gates sticking and difficult to open in rain/night',
      'Motor jamming due to poor track alignment or under-powered units',
      'Gates stopping when the main electrical power is switched off'
    ],
    estimatedTime: '1 Day (Standard sliding/swing automation installation)',
    warranty: '18 Months Motor Mechanical & Control Board Warranty'
  }
];
