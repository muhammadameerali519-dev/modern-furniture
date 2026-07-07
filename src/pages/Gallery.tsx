import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('living-room');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { name: 'Living Room', value: 'living-room' },
    { name: 'Bedroom Area', value: 'bedroom' },
    { name: 'Dining Banquet', value: 'dining' },
    { name: 'Executive Office', value: 'office' },
    { name: 'Outdoor Patio', value: 'outdoor' },
    { name: 'Bespoke Custom Woodwork', value: 'custom' }
  ];

  // Raw curated database of high-resolution luxury furniture setups
  const galleryItems = [
    // Living Room
    {
      category: 'living-room',
      title: 'Emerald Chesterfield Sofa Detail',
      desc: 'Hand-hammered brass studs and deep button diamond-tufted royal green velvet.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'living-room',
      title: 'Tempered Glass Sheesham Center Table',
      desc: 'Symmetrical CNC carvings along solid Rosewood frames.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'living-room',
      title: 'L-Shaped Sectional Lounge Suite',
      desc: 'Sleek, low-profile minimalist upholstery with walnut bases.',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
    },

    // Bedroom
    {
      category: 'bedroom',
      title: 'Royal King Bedset Backboard',
      desc: 'Wingback high headboard hand-upholstered in ivory velvet with gold crown trims.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'bedroom',
      title: 'Kiln Seasoned White Oak Dresser',
      desc: 'Soft close drawer tracks and premium silver paint detailing.',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'bedroom',
      title: 'Luxury Vanity Mirror & Frame',
      desc: 'Lead-free float glass bordered by Baroque styling and walnut gloss finish.',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'
    },

    // Dining
    {
      category: 'dining',
      title: 'Solid Sheesham Dining Bench Slabs',
      desc: 'Natural, unrefined organic edge grains polished in heatproof lacquer.',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'dining',
      title: 'Modern Upholstered Host Chairs',
      desc: 'Ergonomic high-back comfort with dark varnished Oak legs.',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80'
    },

    // Office
    {
      category: 'office',
      title: 'Walnut Executive Desk Drawer Panels',
      desc: 'Book-matched American walnut veneer with heavy brass hardware pulls.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'office',
      title: 'Classic Director Study Suite',
      desc: 'Warm pine bookcase dividers flanking a grand executive desk.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80'
    },

    // Outdoor
    {
      category: 'outdoor',
      title: 'Burmese Teak Extendable Garden Table',
      desc: 'Naturally moisture-proof wood seasoned to silver elegance.',
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
    },

    // Custom
    {
      category: 'custom',
      title: 'Islamic Medallion Door Carvings',
      desc: 'Symmetrical geometrical lines engraved on massive 2.5" thick Sheesham panels.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
      category: 'custom',
      title: 'Bespoke Walnut Drawing Room Panel',
      desc: '3D interlocking wood block walling custom made for DC Colony villa.',
      image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const filteredItems = galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-12">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Virtual Tour</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">Showroom Visual Gallery</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-500 text-sm leading-relaxed font-light">
          Examine the close-up grain patterns, luxury stitching detail, carving precision, and layout environments of our signature furniture collections.
        </p>
      </div>

      {/* Categories Selection Bar */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-stone-200 pb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition cursor-pointer shadow-sm border ${
              activeCategory === cat.value
                ? 'bg-[#D4AF37] border-[#D4AF37] text-white font-bold'
                : 'bg-white border-stone-200 text-stone-600 hover:text-[#D4AF37]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-pointer"
            onClick={() => setLightboxImage(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Hover overlay with text */}
            <div className="absolute inset-0 bg-[#1A1A1A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end z-10">
              <span className="text-[#D4AF37] font-mono text-[9px] uppercase tracking-wider flex items-center mb-1.5 font-bold">
                <ZoomIn size={12} className="mr-1" /> Click to Zoom Detail
              </span>
              <h3 className="font-serif text-white font-semibold text-sm leading-tight">
                {item.title}
              </h3>
              <p className="text-stone-200 text-xs font-light mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          id="lightbox-modal"
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-stone-400 hover:text-white bg-white/5 p-2 rounded-full border border-white/10 cursor-pointer"
            title="Close Lightbox"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-sm border border-stone-800 shadow-2xl relative">
            <img
              src={lightboxImage}
              alt="High resolution wood detail"
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[80vh] object-contain"
            />
            <div className="bg-stone-950/80 text-center py-4 text-xs text-stone-400 border-t border-stone-900 font-mono">
              Modern Furniture Gujranwala • Handcrafted Seasoned Timber Details
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
