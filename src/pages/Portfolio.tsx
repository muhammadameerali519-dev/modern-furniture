import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { MapPin, User } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { name: 'All Completed Projects', value: 'all' },
    { name: 'Luxury Living Rooms', value: 'living-room' },
    { name: 'Bridal Bedrooms', value: 'bedroom' },
    { name: 'Dining Banquets', value: 'dining-room' },
    { name: 'Executive Offices', value: 'office' },
    { name: 'Bespoke Solid Wood', value: 'custom' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Elite Workmanship</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">Completed Masterpieces</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-500 text-sm leading-relaxed font-light">
          A curated showcase of luxury estates, commercial workspaces, and executive properties that we have styled and furnished across Pakistan.
        </p>
      </div>

      {/* Categories Bar */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-stone-200 pb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition cursor-pointer border shadow-sm ${
              activeCategory === cat.value
                ? 'bg-[#D4AF37] border-[#D4AF37] text-white font-bold'
                : 'bg-white border-stone-200 text-stone-600 hover:text-[#D4AF37]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects list */}
      <div className="space-y-24">
        {filteredProjects.map((proj, index) => (
          <div
            key={proj.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            
            {/* Project Image - 5 cols */}
            <div className={`lg:col-span-5 rounded-sm overflow-hidden border border-stone-200 bg-stone-50 aspect-[4/3] shadow-md ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
              <img
                src={proj.image}
                alt={proj.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-95 hover:grayscale-0 hover:opacity-100 transition duration-700"
              />
            </div>

            {/* Project Details - 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest flex items-center font-bold">
                  <MapPin size={13} className="mr-1.5" /> {proj.location} • {proj.year}
                </span>
                <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-bold tracking-tight">
                  {proj.title}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  {proj.description}
                </p>
              </div>

              {/* Technical Specifications Specs Panel */}
              <div className="bg-white border border-stone-200 p-5 rounded-sm grid grid-cols-2 gap-4 shadow-sm">
                {proj.details.map((det) => (
                  <div key={det.label} className="text-xs">
                    <span className="text-stone-400 font-mono uppercase block text-[9px]">{det.label}</span>
                    <span className="text-[#1A1A1A] font-semibold">{det.value}</span>
                  </div>
                ))}
              </div>

              {/* Verified Client Review */}
              <div className="border-l-2 border-[#D4AF37] pl-4 py-1 bg-[#D4AF37]/5 space-y-2">
                <p className="text-stone-600 text-xs italic leading-relaxed">
                  "{proj.clientFeedback}"
                </p>
                <div className="flex items-center space-x-2 text-[10px] text-stone-400">
                  <User size={12} />
                  <span className="text-stone-700 font-semibold">{proj.clientName}</span>
                  <span>•</span>
                  <span>Verified Commission Review</span>
                </div>
              </div>

              {/* Action */}
              <div>
                <a
                  href={`#/quote?product=${encodeURIComponent(proj.title)}`}
                  className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold text-xs uppercase px-5 py-3 rounded-sm tracking-wider inline-block transition shadow-md"
                >
                  Inquire For Similar Setup
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
