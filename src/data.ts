/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, WigService, SalonService, GalleryItem, Testimonial, CertificateItem, FAQItem } from './types';

export const COURSES_DATA: Course[] = [
  {
    id: 'c-makeup-pro',
    name: 'Professional Makeup Artistry',
    category: 'makeup',
    duration: '3 Months (Complete Masterclass)',
    fees: '₹45,000',
    level: 'Advanced',
    description: 'Master the art of professional makeup from scratch. Includes everyday, corporate, editorial, and HD makeup techniques with hands-on practice on real models.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    highlights: ['HD & 4K Makeup Techniques', 'Editorial & Fashion Shoots', 'Certificate of Accomplishment', 'Makeup Kit Guidance', '100% Practical Sessions']
  },
  {
    id: 'c-bridal-makeup',
    name: 'Luxury Bridal Makeup Specialization',
    category: 'makeup',
    duration: '1 Month (Intense)',
    fees: '₹30,000',
    level: 'Masterclass',
    description: 'Learn coveted Indian bridal styles (North Indian, South Indian, Christian, Bengali) including airbrush techniques, heavy draping, and jewelry setting.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600',
    highlights: ['Airbrush Makeup Training', 'Traditional & Modern Draping', 'Hairstyle Coordination', 'Bridal Client Consultation', 'Portfolio Development']
  },
  {
    id: 'c-hair-cutting',
    name: 'Advanced Hair Sculpting & Cutting',
    category: 'hair',
    duration: '6 Weeks',
    fees: '₹18,000',
    level: 'Intermediate',
    description: 'Understand face shapes, hair textures, and angles to deliver flawless custom hair cuts. Master layers, bobs, pixie, and classic styles with professional shears.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    highlights: ['Shear & Razor Techniques', 'Texturizing & Thinning', 'Face Mapping & consultations', 'Symmetrical Cutting Science', 'Live Model Practice']
  },
  {
    id: 'c-hair-styling',
    name: 'Creative Hair Styling & Artistry',
    category: 'hair',
    duration: '4 Weeks',
    fees: '₹15,000',
    level: 'Beginner',
    description: 'Learn modern braiding, waves, glamorous curls, structural updos, and messy buns suitable for events, runways, and bridal clients.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    highlights: ['Thermal Tool Mastery', 'Braid & Updo Sculpting', 'Hair Prep & Product Selection', 'Hollywood Waves Technique', 'Fast Quick-Styling Hacks']
  },
  {
    id: 'c-hair-coloring',
    name: 'Master Hair Coloring & Balayage',
    category: 'hair',
    duration: '1 Month',
    fees: '₹22,000',
    level: 'Advanced',
    description: 'Deep dive into color theory, pre-lightening, highlights, lowlights, global coloring, and advanced techniques like balayage and ombre.',
    image: 'https://images.unsplash.com/photo-1605497746444-ac9dbd324d08?auto=format&fit=crop&q=80&w=600',
    highlights: ['Color Wheel & Chemistry', 'Balayage & Ombre Painting', 'Root Touch-ups & Bleaching', 'Color Correction Secrets', 'Post-Color Care Science']
  },
  {
    id: 'c-wig-training',
    name: 'Professional Hair Wig Making & Customization',
    category: 'wig',
    duration: '2 Months (Premium)',
    fees: '₹55,000',
    level: 'Masterclass',
    description: 'A highly lucrative specialization course. Learn wig cap construction, hair ventilating (knotting), lace frontal attachment, custom sizing, and styling wigs.',
    image: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=600',
    highlights: ['Wig Cap Designing & Mapping', 'Single & Double Knotting', 'Custom Fitting & Measurements', 'High-quality Synthetic vs Human Hair', 'Commercial Wig Business Guidance']
  },
  {
    id: 'c-patch-training',
    name: 'Hair Patch & Toupee Fixing Training',
    category: 'wig',
    duration: '3 Weeks',
    fees: '₹25,000',
    level: 'Advanced',
    description: 'Master non-surgical hair replacement solutions. Learn silicone bonding, tape-in methods, clipping, liquid adhesives, and blending natural hair with patches.',
    image: 'https://images.unsplash.com/photo-1620331702847-b28e21727717?auto=format&fit=crop&q=80&w=600',
    highlights: ['Silicon Fluid Application', 'Tape Positioning & Safety', 'Custom Sizing & Template Making', 'Blending & Haircut Integration', 'Post-service Maintenance Rules']
  },
  {
    id: 'c-skincare',
    name: 'Aesthetic Skin Care & Facial Science',
    category: 'beauty',
    duration: '6 Weeks',
    fees: '₹20,000',
    level: 'Beginner',
    description: 'Understand skin anatomy, types, analysis, and treatments. Learn luxury facials, anti-acne treatments, hydration therapy, and beauty device operation.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
    highlights: ['Skin Analysis & Diagnosis', 'Massage Technique Mastery', 'Detox & Anti-aging Facials', 'Aesthetic Machine Handling', 'Product Chemistry & Safety']
  },
  {
    id: 'c-beautician',
    name: 'Comprehensive Beautician Diploma',
    category: 'beauty',
    duration: '4 Months (Full-Time)',
    fees: '₹60,000',
    level: 'Beginner',
    description: 'Our all-in-one signature course covering skin, hair, nails, and makeup. Perfect for individuals aiming to launch their own salon or work internationally.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
    highlights: ['Full Salon Service Syllabus', 'Salon Management & Operations', 'Client Communication Skills', 'International Standards of Hygiene', 'Government Certificate Assistance']
  },
  {
    id: 'c-nail-art',
    name: 'Luxury Nail Art & Extension Artistry',
    category: 'beauty',
    duration: '3 Weeks',
    fees: '₹14,000',
    level: 'Intermediate',
    description: 'Learn gel extensions, acrylic sculpting, 3D nail art, chrome finishes, stones embellishments, and nail health maintenance.',
    image: 'https://images.unsplash.com/photo-1604654894610-df490651e1af?auto=format&fit=crop&q=80&w=600',
    highlights: ['Gel & Acrylic Extensions', '3D & 4D Nail Embellishments', 'Nail Overlaying & Buffing', 'UV Lamp Safe Operation', 'Trendy Bridal Nail Styles']
  },
  {
    id: 'c-advance-beauty',
    name: 'Advanced Cosmetology & Clinical Aesthetics',
    category: 'beauty',
    duration: '3 Months',
    fees: '₹50,000',
    level: 'Advanced',
    description: 'Take your beauty career to the medical level. Learn skin peeling, micro-needling (dermaroller), laser treatments, hydra-facial, and chemical peels.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600',
    highlights: ['Chemical Peel Science', 'Micro-needling Therapy', 'Hydrafacial Machinery', 'Skin Whitening & Glow Therapy', 'Safety Protocols & Certifications']
  }
];

export const WIG_SERVICES: WigService[] = [
  {
    id: 'w-custom-wig',
    name: 'Luxury Custom Human Hair Wigs',
    description: 'Handcrafted premium wigs made from 100% natural, ethically sourced human hair, tailored to your head size, color, density, and preferred style.',
    price: 'Starting from ₹18,000',
    features: ['100% Natural Remy Human Hair', 'Medical Grade Breathable Caps', 'Lace Front Invisible Hairline', 'Custom Colored & Styled', 'Lightweight & Washable'],
    image: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w-hair-patch',
    name: 'Non-Surgical Hair Patch / Toupee',
    description: 'Excellent and painless hair restoration for partial baldness or hair thinning. Attached securely using high-grade skin-safe medical adhesives or clips.',
    price: 'Starting from ₹8,500',
    features: ['German Lace & Silicon Base', 'Breathable & Sweat-Resistant', 'Shower, Swim & Gym Compatible', 'Perfect Blending with Existing Hair', 'Zero Maintenance Discomfort'],
    image: 'https://images.unsplash.com/photo-1620331702847-b28e21727717?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w-hair-extensions',
    name: 'Premium Keratin & Clip-in Hair Extensions',
    description: 'Instant volume, length, and premium locks. Choose between ultra-secure micro-rings, keratin bonded tips, or convenient seamless clip-ins.',
    price: 'Starting from ₹12,000',
    features: ['Premium Remy Virgin Human Hair', 'No Tangle, No Shedding', 'Heatable & Dyeable', 'Adds Instant Length & Bounce', 'Lasts up to 6 months per reinstall'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w-hair-replacement',
    name: 'Full Non-Surgical Hair Replacement',
    description: 'Full-head non-invasive transformation mapping your natural whorl, hair flow direction, density, and color for a completely natural density restoration.',
    price: 'Starting from ₹22,000',
    features: ['Durable Monofilament Base', 'Supernatural Density Control', 'Secured with Bio-bonding', 'Perfect for Alopecia patients', 'Painless and Instant Results'],
    image: 'https://images.unsplash.com/photo-1622287198514-72de7551ab8a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w-hair-fixing',
    name: 'Advanced Hair Fixing & Bonding',
    description: 'Secure fixation and alignment of existing hair units. Ideal for regular upkeep, deep conditioning of systems, scalp sanitization, and tightening.',
    price: 'Starting from ₹2,500',
    features: ['Deep Cleansing & De-taping', 'Anti-fungal Scalp Therapy', 'High-strength Bonding Touchup', 'Hair System Conditioning & Wash', 'Professional Hair Cut Re-blend'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w-scalp-consultation',
    name: 'Elite Scalp & Hair Follicle Consultation',
    description: 'In-depth digital microscopic scalp analysis to assess hair density, sebum levels, and follicle health, followed by an expert treatment recommendations.',
    price: '₹1,500 (Free with any Hair Patch purchase)',
    features: ['Microscopic Follicle Assessment', 'Sebum & Hydration Mapping', 'Alopecia Stage Classification', 'Personalized Treatment Plan', 'Diet & Lifestyle Guidance'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
  }
];

export const SALON_SERVICES: SalonService[] = [
  {
    id: 's-haircut',
    name: 'Signature Stylist Haircut & Blowdry',
    category: 'hair',
    price: '₹1,200',
    duration: '45 Mins',
    description: 'Custom styling consultation, relaxing shampoo, scalp massage, master haircut, and a premium signature bouncy blowdry.',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-spa',
    name: 'Luxury Caviar Hair Spa & Conditioning',
    category: 'hair',
    price: '₹2,500',
    duration: '60 Mins',
    description: 'An ultra-nourishing scalp and hair stem therapy utilizing deep conditioning caviar extracts to restore shine, repair damage, and soothe the scalp.',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-facial',
    name: 'O3+ Luxury Radiant Facial Treatment',
    category: 'skin',
    price: '₹3,500',
    duration: '75 Mins',
    description: 'A clinical-grade oxygenating facial that brightens skin complexion, extracts impurities, boosts collagen, and leaves a mesmerizing youthful glow.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-bridal-makeup',
    name: 'Premium HD Bridal Makeover & Draping',
    category: 'makeup',
    price: '₹18,000',
    duration: '180 Mins',
    description: 'Flawless luxury bridal HD makeup, advanced hair styling, custom lash set, dupatta draping, and jewelry setting on your special day.',
    image: 'https://images.unsplash.com/photo-1522337094107-bb426a778419?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-party-makeup',
    name: 'Glamorous Party Makeup & Styling',
    category: 'makeup',
    price: '₹4,500',
    duration: '90 Mins',
    description: 'Elegant HD makeup for cocktail parties, sangeet, or formal galas, accompanied by a quick chic hairstyle of your choice.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-keratin',
    name: 'Premium Keratin Smoothening Treatment',
    category: 'hair',
    price: '₹6,000',
    duration: '150 Mins',
    description: 'Banish frizz and restore deep luster. Infuses natural keratin protein into cuticles to achieve silky, straight, manageable hair for up to 4 months.',
    image: 'https://images.unsplash.com/photo-1605497746444-ac9dbd324d08?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-package-gold',
    name: 'The Royal Queen Bridal Package',
    category: 'packages',
    price: '₹22,000',
    duration: '1 Day (Complete)',
    description: 'The ultimate prep package: Premium HD Makeup + Hair styling + Luxury Full Body Polish + Glow facial + Luxury Mani-Pedi + Extensions styling.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Wig Restoration Before & After',
    category: 'before-after',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
    description: 'Incredible transformation of an alopecia patient using our German Monofilament Custom Wig.'
  },
  {
    id: 'g2',
    title: 'Live Hair Patch Bonding Session',
    category: 'student-training',
    image: 'https://images.unsplash.com/photo-1620331702847-b28e21727717?auto=format&fit=crop&q=80&w=600',
    description: 'Students getting hands-on training for non-surgical hair patch installation and blending.'
  },
  {
    id: 'g3',
    title: 'Elite Student Practical Class',
    category: 'student-training',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    description: 'Comprehensive makeup training with real models under supervision of industry professionals.'
  },
  {
    id: 'g4',
    title: 'SS Luxury Salon Main Hall',
    category: 'salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    description: 'Our luxurious state-of-the-art styling floor with Italian marble fixtures and lighting.'
  },
  {
    id: 'g5',
    title: 'Before & After Hair Patch',
    category: 'before-after',
    beforeImage: 'https://images.unsplash.com/photo-1622287198514-72de7551ab8a?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    description: 'Remarkable hairline restoration using a custom breathable silicon hair patch for men.'
  },
  {
    id: 'g6',
    title: 'Graduation & Certificate Ceremony',
    category: 'certificate-ceremony',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=600',
    description: 'Celebrating the success of our certified students as they receive global beauty accreditations.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Priyanka Sharma',
    role: 'Student',
    courseOrService: 'Professional Makeup Artistry',
    rating: 5,
    review: 'SS Beauty School changed my career path completely! The hands-on training on real models and the marketing tips they shared helped me start my own freelance bridal studio. The trainers are incredibly supportive and professional.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    date: '2 months ago',
    verified: true
  },
  {
    id: 't2',
    name: 'Rajesh Malhotra',
    role: 'Client',
    courseOrService: 'Hair Patch Service',
    rating: 5,
    review: 'I was losing my self-confidence due to premature baldness. The team at SS Wig Service gave me a silicone-based hair patch, and the blending was so perfect that even my family couldn’t tell it was a patch. Life-changing experience!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    date: '1 month ago',
    verified: true
  },
  {
    id: 't3',
    name: 'Anjali Verma',
    role: 'Student',
    courseOrService: 'Hair Wig & Patch Training',
    rating: 5,
    review: 'This is the only academy that provides dedicated hair wig ventilating training. The income potential from this skill is massive. I highly recommend their wig course; they teach every minute detail of cap mapping.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: 't4',
    name: 'Meenakshi Iyer',
    role: 'Client',
    courseOrService: 'Luxury Bridal HD Makeover',
    rating: 5,
    review: 'For my wedding, I booked SS Salon Services. The makeup was absolutely radiant and photographed beautifully. It lasted for 12 hours straight without creases. Truly high-end custom service and professional team.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    date: '3 months ago',
    verified: true
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'ISO 9001:2015 Certified Beauty Academy',
    issuer: 'International Quality Standards (IQS)',
    description: 'Our educational systems and training curriculum hold prestigious ISO certifications, guaranteeing premium global education standards.',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cert-2',
    title: 'IAO Global Accreditation',
    issuer: 'International Accreditation Organization',
    description: 'Our beauty certificate qualifies you to work in global premium spas, international cruise lines, and luxury salons across Europe and America.',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cert-3',
    title: 'CIDESCO & VTCT Standard Curriculum Alignment',
    issuer: 'International Cosmetology Standards',
    description: 'SS Beauty School provides a rigorous syllabus structure aligned with leading international testing and certification boards.',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=600'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Are installments available for course fees?',
    answer: 'Yes! We offer interest-free EMI and flexible installment options (2-3 parts) for our premium courses like Professional Cosmetology and Wig Making to make education accessible.',
    category: 'courses'
  },
  {
    question: 'How long does a Hair Patch last and how often is maintenance needed?',
    answer: 'A high-quality custom hair patch lasts between 8 to 12 months with proper care. Professional rebonding and service maintenance is recommended every 3 to 4 weeks.',
    category: 'wig-services'
  },
  {
    question: 'Does the school assist in job placements?',
    answer: 'Absolutely. We have a dedicated placement cell with 100% placement track record. Our graduates are successfully placed in top national luxury salon chains (like Lakmé, VLCC) and fashion houses.',
    category: 'general'
  },
  {
    question: 'Can I swim, workout, or shower with a hair patch?',
    answer: 'Yes. With our advanced silicone-liquid bio-bonding fixing technique, you can easily shower, swim, run, or style your hair without any fear of displacement.',
    category: 'wig-services'
  },
  {
    question: 'Do I get a certificate on completion of courses?',
    answer: 'Yes, every graduate receives an ISO 9001 and IAO aligned graduation certificate from SS Beauty School. This certificate is highly recognized across India and internationally.',
    category: 'courses'
  },
  {
    question: 'Do you offer bridal makeup at our venue?',
    answer: 'Yes! Our senior bridal makeup artists travel across India for premium destination weddings. We offer venue-based draping, hair, and airbrush services.',
    category: 'salon'
  }
];
