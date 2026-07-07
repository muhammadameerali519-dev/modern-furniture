import { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Star, Heart, Award, Shield, Hammer, Users, Sparkles, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

// Premium Animated Counter Component
function AnimatedCounter({ value, duration = 1500 }: { value: string; duration?: number }) {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = numericPart;
    if (end === 0) {
      return;
    }
    const stepTime = Math.max(Math.floor(duration / 30), 25);
    const stepValue = Math.ceil(end / 30);
    
    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericPart, duration]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
      title: 'Crafting Heritage Solid Wood Masterpieces',
      subtitle: 'Premium Sheesham & Oak furniture engineered to last generations.',
      ctaText: 'Explore Collection',
      ctaLink: '#/shop'
    },
    {
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80',
      title: 'Royal Bridal Bedroom Suites',
      subtitle: 'Bespoke hand-tufted Turkish velvets paired with classical wood carving.',
      ctaText: 'Bespoke Bedroom Sets',
      ctaLink: '#/subcategory/Luxury%20Beds'
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
      title: 'Luxury Chesterfield Seating Assemblies',
      subtitle: 'Upholstered in stain-resistant fabrics on heavy-gauge steel springs.',
      ctaText: 'View Chesterfield Sofas',
      ctaLink: '#/subcategory/Sofa%20Sets'
    }
  ];

  // Auto scroll hero slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  const features = [
    {
      icon: <Hammer className="text-[#D4AF37] w-8 h-8" />,
      title: '100% Kiln-Seasoned Timber',
      desc: 'All our Sheesham and Oak wood undergoes rigorous kiln-drying to achieve optimal 8-12% moisture levels, preventing any warping or cracking.'
    },
    {
      icon: <Award className="text-[#D4AF37] w-8 h-8" />,
      title: 'Third-Generation Carving Artisans',
      desc: 'Our workshop in Gujranwala houses highly-skilled local craftsmen who hand-carve solid timber utilizing generational Mughal carving techniques.'
    },
    {
      icon: <Shield className="text-[#D4AF37] w-8 h-8" />,
      title: 'Lifetime Bug-Proof Guarantee',
      desc: 'Every log is chemical-pressure treated with eco-safe solutions, providing absolute lifelong resistance to wood borers, termites, and pests.'
    }
  ];

  const stats = [
    { label: 'Years of Woodcraft Excellence', value: '28+' },
    { label: 'Royal Villas & Estates Furnished', value: '5000+' },
    { label: 'In-House Master Artisans', value: '35+' },
    { label: 'Lifetime Wood Guarantee', value: '100%' }
  ];

  const testimonials = [
    {
      comment: "Absolutely in love with our solid Sheesham dining set. The natural organic wood grain patterns look extremely premium. The customer support throughout the customized manufacturing process was exemplary.",
      name: "Chaudhary Nabeel Anwar",
      role: "Resident",
      location: "Citi Housing, Gujranwala",
      rating: 5
    },
    {
      comment: "We ordered complete executive officer suites for our showroom and head office. The walnut tables feel exceptionally solid and professional. Highly recommended for premium corporate settings.",
      name: "Khawaja Bilal",
      role: "Managing Director",
      location: "Gujranwala Business Center",
      rating: 5
    },
    {
      comment: "Our bridal furniture suite has become the talk of the town! The wood finishes are flawless and the custom lacquer has a beautiful glass-like depth. Delivering to Islamabad was prompt and stress-free.",
      name: "Amna Shahzadi",
      role: "Homeowner",
      location: "DHA Phase 2, Islamabad",
      rating: 5
    }
  ];

  return (
    <div className="space-y-28 pb-16">
      
      {/* 1. HERO SLIDER */}
      <section id="hero-slider" className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-[#120D0C]">
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full border border-[#D4AF37]/30 animate-float-gentle z-20 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-24 right-12 w-6 h-6 rounded-full border border-[#D4AF37]/20 animate-float-subtle z-20 pointer-events-none hidden sm:block" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#D4AF37]/10 animate-pulse z-20 pointer-events-none" />

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay with walnut warmth */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/70 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${index === activeSlide ? 'scale-105' : 'scale-100'}`}
            />
            {/* Slide Content with Cinematic Entrance */}
            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center z-20 px-6 sm:px-12 md:px-24">
              <div className={`max-w-2xl space-y-6 ${index === activeSlide ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.35em] block font-bold">
                  ⭐ Gujranwala's Premier Woodcarvers
                </span>
                <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <a
                    href={slide.ctaLink}
                    className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-full transition duration-300 text-center shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 apple-shine-sweep"
                  >
                    {slide.ctaText}
                  </a>
                  <a
                    href="#/quote"
                    className="border border-white/30 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-medium text-xs tracking-wider uppercase px-7 py-4 rounded-full transition duration-300 text-center bg-black/40 backdrop-blur-md hover:scale-105 active:scale-95"
                  >
                    Request Custom Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 bg-stone-900/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeSlide ? 'bg-[#D4AF37] w-8' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. FEATURED ROOM CATEGORIES */}
      <section id="featured-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">
            Luxury Portfolios
          </span>
          <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-4xl font-semibold tracking-tight">
            Furnish Your Entire Estate
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative h-96 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg premium-hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />
              <img
                src={cat.image}
                alt={cat.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-2.5">
                <span className="text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase block font-semibold">
                  {cat.itemCount} Collection Items
                </span>
                <h3 className="font-serif text-white text-xl font-bold">
                  {cat.name}
                </h3>
                <p className="text-stone-200 text-xs line-clamp-2 leading-relaxed font-light">
                  {cat.description}
                </p>
                <a
                  href={`#/category/${cat.id}`}
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#B8962E] text-xs font-semibold uppercase tracking-wider pt-2 group-hover:translate-x-1.5 transition-transform"
                >
                  <span>Explore Rooms</span>
                  <ArrowRight size={12} className="ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section id="best-sellers" className="bg-[#F9F7F5]/50 py-24 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-end border-b border-stone-200/60 pb-6">
            <div className="space-y-2">
              <span className="text-[#D4AF37] text-xs font-mono tracking-[0.25em] uppercase block font-bold">
                Top Client Favorites
              </span>
              <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-bold">
                Our Best Sellers
              </h2>
            </div>
            <a
              href="#/shop?filter=best-seller"
              className="text-[#D4AF37] hover:text-[#B8962E] text-xs font-bold tracking-wider uppercase inline-flex items-center group mt-4 sm:mt-0"
            >
              <span>View All Best Sellers</span>
              <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((prod) => (
              <div key={prod.id} className="h-full">
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE MODERN FURNITURE */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">
              Unrivaled Quality
            </span>
            <h2 className="font-serif text-[#1A1A1A] text-3xl sm:text-4xl font-bold leading-tight">
              Bespoke Furniture Built For Generational Durability
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />
          </div>
          <p className="text-stone-600 text-sm leading-relaxed font-light">
            Since 1998, Modern Furniture has operated at the pinnacle of solid-timber wood engineering. We handle everything locally in Gujranwala—from raw trunk sorting, chemical anti-insect bath processing, computerized kiln drying, to final precision upholstery.
          </p>

          <div className="space-y-6">
            {features.map((feat, index) => (
              <div key={index} className="flex items-start space-x-5 bg-white p-6 rounded-2xl border border-stone-150 shadow-[0_4px_20px_rgba(0,0,0,0.02)] premium-hover-lift">
                <div className="p-3.5 bg-[#F9F7F5] rounded-xl border border-stone-200/60 flex-shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[#1A1A1A] font-serif font-bold text-base">{feat.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase - Side Banner */}
        <div className="relative group rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1000&q=80"
            alt="Handcrafting wood details"
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 z-20 space-y-4 text-center sm:text-left">
            <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold leading-snug">
              Bespoke Sheesham, Walnut & Oak Doors Custom Made
            </h3>
            <p className="text-stone-300 text-xs font-light leading-relaxed">
              Transform your entrance with 2.5 inch solid-core handcrafted double-door masterpieces matching your exact architectural sizes.
            </p>
            <a
              href="#/custom"
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold text-xs uppercase px-7 py-3.5 rounded-full tracking-wider inline-block transition-all duration-300 shadow-[0_4px_12px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 apple-shine-sweep cursor-pointer"
            >
              Plan Custom Woodwork
            </a>
          </div>
        </div>
      </section>

      {/* 5. COMPANY STATISTICS PANEL */}
      <section id="statistics" className="bg-[#F9F7F5]/60 py-20 border-y border-stone-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, i) => (
            <div key={i} className="space-y-3 p-8 rounded-2xl bg-white border border-stone-150 shadow-[0_10px_30px_rgba(40,30,20,0.03)] hover:border-[#D4AF37]/30 transition duration-300 premium-hover-lift">
              <span className="font-mono text-4xl sm:text-5xl font-bold text-[#D4AF37] tracking-tight block">
                <AnimatedCounter value={st.value} />
              </span>
              <span className="text-stone-500 text-xs tracking-wider uppercase font-semibold">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NEW ARRIVALS */}
      <section id="new-arrivals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-end border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <span className="text-[#D4AF37] text-xs font-mono tracking-[0.25em] uppercase block font-bold">
              Fresh Off The Carving Bench
            </span>
            <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-medium">
              New Arrivals
            </h2>
          </div>
          <a
            href="#/shop?filter=new"
            className="text-[#D4AF37] hover:text-[#B8962E] text-xs font-bold tracking-wider uppercase inline-flex items-center group mt-4 sm:mt-0"
          >
            <span>Browse New Collections</span>
            <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((prod) => (
            <div key={prod.id}>
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </section>

      {/* 7. PORTFOLIO CAROUSEL PREVIEW */}
      <section id="portfolio-preview" className="bg-stone-50 py-24 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">
              Exclusive Showcases
            </span>
            <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-4xl font-bold">
              Our Latest Completed Projects
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 2).map((proj) => (
              <div
                key={proj.id}
                className="group relative h-[450px] overflow-hidden rounded-2xl border border-stone-200 shadow-xl premium-hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/5 z-10" />
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 z-20 space-y-3.5">
                  <span className="text-[#D4AF37] font-mono text-xs font-semibold tracking-wider">
                    {proj.location} • {proj.year}
                  </span>
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-bold tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-stone-200 text-xs line-clamp-2 leading-relaxed font-light italic">
                    "{proj.clientFeedback}"
                  </p>
                  <p className="text-stone-300 text-[10px] font-medium uppercase font-mono tracking-widest">
                    — {proj.clientName}
                  </p>
                  <a
                    href="#/portfolio"
                    className="inline-flex items-center text-[#D4AF37] hover:text-[#B8962E] text-xs font-semibold uppercase tracking-wider pt-2 group-hover:translate-x-1.5 transition-transform"
                  >
                    <span>View Project Specifications</span>
                    <ArrowRight size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & REVIEWS SLIDER (FULLY INTERACTIVE WITH SLIDER STATE) */}
      <section id="testimonials" className="max-w-4xl mx-auto px-4 text-center space-y-10">
        <div className="space-y-3">
          <span className="text-[#D4AF37] text-xs font-mono tracking-[0.35em] uppercase block font-bold">
            Client Verification
          </span>
          <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-bold">
            Satisfied Gujranwala Families
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Testimonial slider component block */}
        <div className="relative">
          <div className="bg-white border border-stone-200/80 p-8 sm:p-16 rounded-3xl relative shadow-xl overflow-hidden min-h-[320px] sm:min-h-[280px] flex flex-col justify-center">
            
            {/* Background Quotes Watermark */}
            <span className="absolute top-4 left-8 text-stone-100/70 text-8xl font-serif select-none pointer-events-none">
              “
            </span>
            <span className="absolute bottom-4 right-8 text-stone-100/70 text-8xl font-serif select-none pointer-events-none">
              ”
            </span>

            <div className="space-y-6 relative z-10">
              {/* Star Rating bar */}
              <div className="flex justify-center space-x-1 text-[#D4AF37]">
                {[...Array(testimonials[activeSlide % testimonials.length]?.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Feedback Comment with elegant opacity transition */}
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic transition-all duration-500 ease-in-out">
                "{testimonials[activeSlide % testimonials.length]?.comment}"
              </p>

              <div>
                <h4 className="font-serif text-[#1A1A1A] font-bold text-sm tracking-wide">
                  {testimonials[activeSlide % testimonials.length]?.name}
                </h4>
                <p className="text-[#D4AF37] text-xs font-mono mt-0.5">
                  {testimonials[activeSlide % testimonials.length]?.role} • {testimonials[activeSlide % testimonials.length]?.location}
                </p>
              </div>
            </div>

            {/* Manual Carousel controls */}
            <div className="absolute inset-y-0 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between pointer-events-none">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-[#F9F7F5] hover:bg-[#D4AF37] hover:text-white flex items-center justify-center text-stone-500 shadow-md transition pointer-events-auto cursor-pointer"
                title="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-[#F9F7F5] hover:bg-[#D4AF37] hover:text-white flex items-center justify-center text-stone-500 shadow-md transition pointer-events-auto cursor-pointer"
                title="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === (activeSlide % testimonials.length) ? 'bg-[#D4AF37] w-6' : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>

        <a
          href="#/reviews"
          className="text-[#D4AF37] hover:text-[#B8962E] text-xs font-bold tracking-widest uppercase inline-block pt-4 hover:underline"
        >
          Read All Customer Reviews
        </a>
      </section>

      {/* 9. CALL TO ACTION & WHATSAPP INTEGRATION - WALNUT PREMIUM BACKSTAGE */}
      <section id="cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1110] text-white border border-stone-800 rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 relative overflow-hidden shadow-2xl">
          
          {/* Elegant Walnut/Gold Radial Backlighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/[0.02] rounded-full pointer-events-none" />
          
          <div className="space-y-4 max-w-xl text-center lg:text-left relative z-10">
            <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase font-bold block">
              Consult with Woodworking Experts
            </span>
            <h2 className="font-serif text-white text-2xl sm:text-4xl font-bold leading-tight">
              Looking for Bespoke Sizes or Catalog Pricing?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
              We specialize in custom sizing, material selection, and site visits for layout measurements. Message us directly on WhatsApp or submit a formal quote inquiry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto relative z-10">
            <a
              href="https://wa.me/923295588925?text=Hello%20MODERN%20FURNITURE%2C%20I%27m%20interested%20in%20your%20furniture%20collection.%20Please%20share%20your%20latest%20catalog%2C%20prices%2C%20and%20delivery%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition duration-300 text-center flex items-center justify-center space-x-2 shadow-lg hover:scale-105 active:scale-95 apple-shine-sweep cursor-pointer"
            >
              <MessageSquare size={16} className="fill-white" />
              <span>WhatsApp Now</span>
            </a>
            <a
              href="#/quote"
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition duration-300 text-center shadow-lg hover:scale-105 active:scale-95 apple-shine-sweep cursor-pointer"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE MAP INTEGRATION */}
      <section id="google-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[#D4AF37] text-xs font-mono tracking-[0.25em] uppercase block font-bold">
            Visit Our Showroom
          </span>
          <h2 className="font-serif text-[#1A1A1A] text-xl sm:text-2xl font-bold">
            Locate Us on Google Maps
          </h2>
        </div>

        <div className="border border-stone-200 rounded-2xl overflow-hidden h-96 bg-white shadow-xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.077209353915!2d74.1923053!3d32.1481944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCswOCc1My41Ik4gNzTCsDExJzMyLjMiRQ!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.1) contrast(1.02)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Modern Furniture Showroom Location Sultanpura Gujranwala"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 border border-stone-200 p-6 rounded-2xl max-w-sm shadow-2xl space-y-2.5 backdrop-blur-md">
            <h4 className="font-serif text-[#1A1A1A] font-bold text-sm uppercase tracking-wide">Modern Furniture GRW</h4>
            <p className="text-stone-600 text-xs font-light">
              Sultanpura, Gujranwala 50250, Pakistan (Plus Code: 5537+XR)
            </p>
            <p className="text-stone-500 text-[11px] font-medium">
              Direct assistance & Directions: <span className="text-[#D4AF37] font-bold">+92 329 5588925</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
