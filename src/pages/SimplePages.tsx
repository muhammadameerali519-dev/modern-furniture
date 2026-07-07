import { useState } from 'react';
import { Star, CheckCircle, Shield, Award, HelpCircle, ArrowRight, Heart, Users, MapPin } from 'lucide-react';

/* ==========================================================
   1. ABOUT US PAGE
   ========================================================== */
export function AboutUs() {
  const values = [
    {
      icon: <Award className="text-[#D4AF37] w-8 h-8" />,
      title: 'Generational Craftsmanship',
      desc: 'Our third-generation woodcarvers carry forward legacy design languages from Mughal-era wood artisanship.'
    },
    {
      icon: <Shield className="text-[#D4AF37] w-8 h-8" />,
      title: 'Guaranteed Timber Seasoning',
      desc: 'We are Gujranwala\'s only furniture store maintaining automated kiln drying machines to ensure 100% stable wood cores.'
    },
    {
      icon: <Users className="text-[#D4AF37] w-8 h-8" />,
      title: 'Rooted in Gujranwala',
      desc: 'We operate our primary workshop and showroom locally in Sultanpura, supporting local carpentry guilds and families.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-24">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Our Heritage</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">The Modern Furniture Story</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-600 text-sm leading-relaxed font-light font-sans">
          Curating premium handcrafted furniture and Bespoke timber solutions for families in Pakistan since 1998.
        </p>
      </div>

      {/* Narrative grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-semibold leading-tight">
            Preserving Handcrafted Excellence In a Mass-Produced World
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37]" />
          <p className="text-stone-700 text-sm leading-relaxed font-light">
            Modern Furniture was founded in Sultanpura, Gujranwala with a single focus: to protect the exquisite legacy of hand-carved solid wood furniture. In an era dominated by cheap compressed wood and plastic laminates, we believe in the monumental beauty, fragrance, and durability of genuine timber.
          </p>
          <p className="text-stone-500 text-xs leading-relaxed font-light">
            Every dining table slab, bed crown, and executive desk we manufacture begins its journey as a raw, carefully inspected log of seasoned Sheesham (Indian Rosewood), Oak, or Walnut. Our craftsmen shape, sand, chisel, and polish these materials entirely by hand, creating furniture that gains value, warmth, and character over decades.
          </p>
          <div className="bg-white border border-stone-200 p-5 rounded-sm flex items-center justify-between shadow-sm">
            <div className="font-mono">
              <span className="text-[#D4AF37] text-2xl font-bold block">100%</span>
              <span className="text-stone-400 text-[10px] uppercase block tracking-wider">Seasoning Certified</span>
            </div>
            <div className="font-mono">
              <span className="text-[#D4AF37] text-2xl font-bold block">15 Yrs</span>
              <span className="text-stone-400 text-[10px] uppercase block tracking-wider">Bug Protection Warranty</span>
            </div>
            <div className="font-mono">
              <span className="text-[#D4AF37] text-2xl font-bold block">Local GRW</span>
              <span className="text-stone-400 text-[10px] uppercase block tracking-wider">Direct Assembly</span>
            </div>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden border border-stone-200 bg-stone-100 shadow-lg relative aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
            alt="Gujranwala master artisans wood workshop"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Values block */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block font-bold">Our Values</span>
          <h2 className="font-serif text-[#1A1A1A] text-xl sm:text-2xl font-medium">What Sets Modern Furniture Apart</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-sm border border-stone-200 text-center space-y-4 shadow-sm">
              <div className="w-14 h-14 bg-[#F9F7F5] border border-stone-200 rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                {v.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-serif font-medium text-base">{v.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


/* ==========================================================
   2. CUSTOMER REVIEWS PAGE
   ========================================================== */
export function CustomerReviews() {
  const reviews = [
    {
      name: 'Begum Salma Chaudhry',
      location: 'Citi Housing Phase 1, Gujranwala',
      rating: 5,
      comment: 'We ordered a complete bespoke bridal bedset for our daughter. The wingback headboard tufting is absolutely flawless. They coordinated everything perfectly with our room colors. Highly professional assembly teams!',
      date: 'June 29, 2026',
      product: 'Royal Bridal Bedroom Set'
    },
    {
      name: 'Mian Bilal Ahmad',
      location: 'DC Colony, Gujranwala Cantt',
      rating: 5,
      comment: 'Absolutely breathtaking 8-seater solid Sheesham dining set. The wood grain contrasts are highly premium. It forms the center of attraction of our drawing room. Lifetime insect protection guarantee is a peace of mind.',
      date: 'June 18, 2026',
      product: 'Artisan Sheesham 8-Seater Dining Set'
    },
    {
      name: 'Khawaja Muhammad Omar',
      location: 'Gujranwala Business Center',
      rating: 5,
      comment: 'Furnished our entire corporate executive floor and board room through them. The American Walnut boardroom table and ergonomic director chairs are top-class. Extremely fast lead times compared to other premium stores.',
      date: 'May 14, 2026',
      product: 'Presidential Walnut Office Suite'
    },
    {
      name: 'Major (R) Tariq Mahmood',
      location: 'Master City, Gujranwala',
      rating: 5,
      comment: 'The Sheesham main entrance doors designed by Modern Furniture are masterpieces. The weight and thick solid core make us feel completely secure. Stunning CNC geometric patterns.',
      date: 'April 22, 2026',
      product: 'Classic Entrance Double Door'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Client Testimonials</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">Verified Customer Reviews</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-600 text-sm leading-relaxed font-light">
          See what families and executive directors across Gujranwala, Lahore, and Sialkot have to say about our seasoned timber craft.
        </p>
      </div>

      {/* Ratings summary block */}
      <div className="bg-white border border-stone-200 p-8 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center max-w-4xl mx-auto shadow-sm">
        <div>
          <span className="text-[#1A1A1A] text-4xl sm:text-5xl font-mono font-bold block">5.0</span>
          <span className="text-[#D4AF37] text-lg block font-semibold">★ ★ ★ ★ ★</span>
          <span className="text-stone-400 text-[10px] uppercase font-mono tracking-wider block mt-1">Average Star Rating</span>
        </div>
        <div className="border-y md:border-y-0 md:border-x border-stone-200 py-6 md:py-0 px-4 space-y-1.5 text-xs text-stone-600">
          <span className="text-[#1A1A1A] font-semibold">100% Verified Clients</span>
          <p className="leading-relaxed font-light text-stone-500">Every single review listed is backed by a physical cash invoice, delivery challan, and site assembly certificate.</p>
        </div>
        <div>
          <span className="text-[#1A1A1A] text-3xl font-mono font-bold block">1,200+</span>
          <span className="text-stone-400 text-[10px] uppercase font-mono tracking-wider block">Estates Styled in Punjab</span>
          <a href="#/quote" className="text-[#D4AF37] hover:text-[#B8962E] text-xs font-bold uppercase tracking-wider block mt-2 hover:underline">
            Request Quote Now
          </a>
        </div>
      </div>

      {/* Reviews list grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white p-6 sm:p-8 rounded-sm border border-stone-200 space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-stone-400 font-mono">
                <span className="text-[#D4AF37]">★ ★ ★ ★ ★</span>
                <span>{rev.date}</span>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed italic font-light">
                "{rev.comment}"
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex justify-between items-end">
              <div className="space-y-1">
                <h4 className="font-serif text-[#1A1A1A] font-semibold text-xs">{rev.name}</h4>
                <span className="text-stone-400 text-[9px] uppercase tracking-wider block font-mono flex items-center">
                  <MapPin size={10} className="mr-1" /> {rev.location}
                </span>
              </div>
              <span className="bg-[#F9F7F5] text-stone-500 text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-sm uppercase border border-stone-200">
                {rev.product}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}


/* ==========================================================
   3. FAQS PAGE
   ========================================================== */
export function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqsList = [
    {
      question: 'What types of wood do you use, and where is it sourced?',
      answer: 'Our signature hardwood is A-grade seasoned Sheesham wood (Indian Rosewood), sourced from sustainably managed timber reserves in Punjab and Khyber Pakhtunkhwa. We also import premium European White Oak and American Black Walnut for contemporary, minimalist European layouts. Every single log undergoes manual sorting and grade-checking before cutting.'
    },
    {
      question: 'Why is wood seasoning so critical, and how do you achieve it?',
      answer: 'Raw timber naturally contains 40-60% moisture. If built into furniture raw, the wood will shrink, expand, crack, and warp over seasons. At Modern Furniture, we seasoned wood utilizing computerized automated dry kilns. This process brings timber moisture down to a highly stable 8-12%, ensuring your furniture joints remain perfectly locked and crack-free for generations.'
    },
    {
      question: 'Do you offer custom sizing, and how does the process work?',
      answer: 'Yes! Over 70% of our orders are fully customized. You can customize any design on our catalog—including sofa seating layouts (3+2+1, L-shape, corner lounges), bed sizes (King, Queen, customized widths), wood polish shades, and upholstery fabrics. You can plan specifications using our Custom Furniture page, or visit our showroom with your room measurements.'
    },
    {
      question: 'What is your delivery process for Lahore, Islamabad, and Sialkot?',
      answer: 'We operate our own dedicated transport delivery transit vehicles. This ensures our furniture stays completely safe and bubble-wrapped during transit. Our dedicated, experienced carpenters accompany every transport vehicle to assemble, position, and inspect all items directly inside your home.'
    },
    {
      question: 'What kind of warranties do you provide on timber products?',
      answer: 'We offer a lifelong guarantee against wood-boring insects, termites, and dry rot due to our heavy pressurized chemical preservation baths. We also provide a 10-year structural warranty on all corner joint fittings and bed frames, and a 2-year warranty on premium cushion MoltyFoam sagging.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Help Center</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-600 text-sm leading-relaxed font-light">
          Have queries about seasoning, customization options, or door deliveries? Find comprehensive answers from our woodworking supervisors.
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {faqsList.map((faq, idx) => {
          const isOpen = openFAQ === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-sm overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFAQ(isOpen ? null : idx)}
                className="w-full text-left py-5 px-6 flex justify-between items-center hover:bg-stone-50 transition focus:outline-none cursor-pointer"
              >
                <span className="text-[#1A1A1A] font-serif font-medium text-sm sm:text-base flex items-center">
                  <HelpCircle size={16} className="mr-3 text-[#D4AF37] flex-shrink-0" />
                  {faq.question}
                </span>
                <span className="text-[#D4AF37] text-lg font-bold font-mono">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 bg-[#F9F7F5]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}


/* ==========================================================
   4. PRIVACY POLICY PAGE
   ========================================================== */
export function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-8 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
      <h1 className="font-serif text-[#1A1A1A] text-3xl font-bold tracking-tight mb-2 border-b border-stone-200 pb-4">Privacy Policy</h1>
      <p className="text-stone-400 font-mono text-[10px] uppercase">Effective Date: July 06, 2026</p>
      
      <p>
        At Modern Furniture Gujranwala, accessible from our official application, your privacy is extremely important to us. This Privacy Policy documents the types of customer particulars we record, collect, and use, and how we protect it.
      </p>

      <h2 className="font-serif text-[#1A1A1A] text-lg font-semibold mt-6 block">Information We Collect</h2>
      <p>
        When you submit an inquiry form, request custom catalog prices, or fill out our Request a Quote system, we gather personal identifying details including your Full Name, Active Phone / WhatsApp Number, City location, budget thresholds, and custom furniture measurements.
      </p>

      <h2 className="font-serif text-[#1A1A1A] text-lg font-semibold mt-6 block">How We Use Information</h2>
      <ul className="list-disc list-inside space-y-2 text-stone-500">
        <li>To contact you directly with customized price quotes and transport valuations.</li>
        <li>To schedule site-measurement visits in Gujranwala Cantt, Citi Housing, or Master City.</li>
        <li>To process custom CAD architectural designs and manufacture specifications.</li>
        <li>To send digital catalogs or finished furniture photographs via WhatsApp.</li>
      </ul>

      <h2 className="font-serif text-[#1A1A1A] text-lg font-semibold mt-6 block">Information Security</h2>
      <p>
        We store all customer entries in our central showroom database system behind multi-layered passwords. We do not use email or transmit raw sheets to third-party services. Only authorized showroom managers and estimators can access your contact details to call you back.
      </p>
    </div>
  );
}


/* ==========================================================
   5. TERMS & CONDITIONS PAGE
   ========================================================== */
export function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-8 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
      <h1 className="font-serif text-[#1A1A1A] text-3xl font-bold tracking-tight mb-2 border-b border-stone-200 pb-4">Terms & Conditions</h1>
      <p className="text-stone-400 font-mono text-[10px] uppercase">Effective Date: July 06, 2026</p>

      <p>
        Welcome to Modern Furniture. These Terms and Conditions outline the regulations and rules for purchasing, ordering, and coordinating customized timber furniture manufactured by our Sultanpura, Gujranwala workshop.
      </p>

      <h2 className="font-serif text-[#1A1A1A] text-lg font-semibold mt-6 block">Bespoke Manufacturing & Advance Deposits</h2>
      <p>
        Given that all beds, wardrobes, dining sets, and custom doors are handcrafted specifically to individual dimensions and custom fabric requirements, a formal 40% advance deposit is required to lock seasoned timber stocks and initiate CAD blueprint architectures.
      </p>

      <h2 className="font-serif text-[#1A1A1A] text-lg font-semibold mt-6 block">Delivery Cycles & Site Measurement</h2>
      <p>
        Standard handcrafted furniture orders require a manufacturing timeline of 15 to 25 calendar days. For complex architectural panels or bridal packages, timelines can be extended up to 45 days. Clients must verify door and corridor clearances before delivery, or schedule a free measurement site visit by our supervisors in Gujranwala.
      </p>

      <h2 className="font-serif text-[#1A1A1A] text-lg font-semibold mt-6 block">Timber Warranties</h2>
      <p>
        We offer a lifetime bug-proof termite warranty on solid seasoned Sheesham (Tali) and Oak timbers, backed by our pressurized chemical pool treatment. Joint warranties remain locked for 10 years. Foam sagging warranties depend on Master MoltyFoam manufacturer terms.
      </p>
    </div>
  );
}
