import { useState, useEffect } from 'react';
import { getProductById, PRODUCTS } from '../data/products';
import { MessageSquare, ArrowLeft, ShieldCheck, Heart, Sparkles, HelpCircle, Truck, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface ProductDetailsProps {
  currentPath: string;
}

export default function ProductDetails({ currentPath }: ProductDetailsProps) {
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('');

  useEffect(() => {
    const hash = window.location.hash;
    const parts = hash.split('/');
    if (parts.length >= 3) {
      const id = parts[2].split('?')[0]; // strip query params if any
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setActiveImage(foundProduct.images[0]);
        setSelectedSize(foundProduct.availableSizes[0] || '');
        setSelectedColor(foundProduct.availableColors[0] || '');
        setSelectedFinish(foundProduct.finishOptions[0] || '');
      }
    }
    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPath]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 text-center space-y-4">
        <h2 className="text-[#1A1A1A] font-serif text-2xl">Product Not Found</h2>
        <p className="text-stone-500 text-sm">The requested luxury item could not be retrieved from the catalog.</p>
        <a href="#/shop" className="bg-[#D4AF37] hover:bg-[#B8962E] text-white px-6 py-2.5 rounded-sm font-semibold text-xs tracking-wider uppercase inline-block">
          Return To Shop
        </a>
      </div>
    );
  }

  // Find related products in same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Generate customized WhatsApp query
  const getWhatsAppInquiryUrl = () => {
    const text = `Hello MODERN FURNITURE, I am interested in ordering the "${product.name}" with the following custom options:
- Product ID: ${product.id}
- Selected Size: ${selectedSize}
- Selected Color: ${selectedColor}
- Selected Finish: ${selectedFinish}

Please share price estimate, delivery fees for Gujranwala, and customization details. Thank you!`;
    return `https://wa.me/923295588925?text=${encodeURIComponent(text)}`;
  };

  // Generate custom Quote redirect hash
  const getQuotePageHash = () => {
    return `#/quote?product=${encodeURIComponent(product.name)}&size=${encodeURIComponent(selectedSize)}&color=${encodeURIComponent(selectedColor)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-20">
      
      {/* Back navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 border-b border-stone-200 pb-6">
        <div className="flex items-center space-x-2 text-xs text-stone-500 font-mono">
          <a href="#/" className="hover:text-[#D4AF37]">HOME</a>
          <span>/</span>
          <a href="#/shop" className="hover:text-[#D4AF37]">SHOP</a>
          <span>/</span>
          <a href={`#/category/${product.category}`} className="hover:text-[#D4AF37] uppercase">{product.category.replace('-', ' ')}</a>
          <span>/</span>
          <span className="text-stone-700 uppercase truncate max-w-[200px] font-semibold">{product.name}</span>
        </div>
        <a
          href="#/shop"
          className="text-stone-500 hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5"
        >
          <ArrowLeft size={14} />
          <span>Back to Catalog</span>
        </a>
      </div>

      {/* Main product gallery and details column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN: Gallery View */}
        <div className="space-y-4">
          
          {/* Main Large Image */}
          <div className="border border-stone-200 rounded-sm bg-stone-50 aspect-[4/3] overflow-hidden relative shadow-sm">
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-300"
            />
            
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-md">
                BEST SELLER
              </span>
            )}
          </div>

          {/* Thumbnails grid */}
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`border rounded-sm bg-stone-50 aspect-[4/3] overflow-hidden relative cursor-pointer transition ${
                  activeImage === img ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]' : 'border-stone-200 hover:border-stone-400'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} View ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Fast Delivery info card */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-sm space-y-1.5 flex flex-col justify-center shadow-sm">
              <span className="text-[#D4AF37] flex items-center text-xs font-bold uppercase tracking-wider"><Truck size={14} className="mr-1.5" /> Handled Transit</span>
              <p className="text-stone-500 text-[11px] leading-relaxed">Direct door-delivery across Punjab with master furniture assembly technicians.</p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-sm space-y-1.5 flex flex-col justify-center shadow-sm">
              <span className="text-[#D4AF37] flex items-center text-xs font-bold uppercase tracking-wider"><ShieldCheck size={14} className="mr-1.5" /> Structural Warranty</span>
              <p className="text-stone-500 text-[11px] leading-relaxed">{product.warranty.split('&')[0].trim() || '5 Year Structural Guarantee'}</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Buying specifications */}
        <div className="space-y-8">
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest">{product.subcategory}</span>
              <span className="text-stone-400 text-xs font-mono">ID: {product.id}</span>
            </div>
            <h1 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
              <div className="text-[#D4AF37] flex items-center font-bold">
                ★ ★ ★ ★ ★ <span className="text-[#D4AF37] font-bold ml-1">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-stone-300">|</span>
              <span>{product.reviewsCount} Verified GRW Reviews</span>
            </div>
          </div>

          {/* Pricing indicator block */}
          <div className="bg-[#F9F7F5] border border-stone-200 p-5 rounded-sm flex justify-between items-center shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-mono font-semibold">Inquiry Base Estimate</span>
              <span className="font-mono text-[#1A1A1A] text-xl sm:text-2xl font-bold tracking-wide">
                {product.priceEstimate}
              </span>
            </div>
            <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-sm tracking-wide uppercase font-semibold">
              Bespoke Price Customization
            </span>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed font-light">
            {product.description}
          </p>

          {/* Specifications Matrix sheet */}
          <div className="border-y border-stone-200 py-6 grid grid-cols-2 gap-y-4 gap-x-6 text-xs text-stone-500">
            <div>
              <span className="text-stone-400 font-mono uppercase block text-[10px]">Timber Material</span>
              <span className="text-[#1A1A1A] font-semibold">{product.material}</span>
            </div>
            <div>
              <span className="text-stone-400 font-mono uppercase block text-[10px]">Assembled Dimensions</span>
              <span className="text-[#1A1A1A] font-semibold font-mono">{product.dimensions}</span>
            </div>
            <div>
              <span className="text-stone-400 font-mono uppercase block text-[10px]">Standard Delivery</span>
              <span className="text-[#1A1A1A] font-semibold">15 to 25 Days (Hand-Carved to Order)</span>
            </div>
            <div>
              <span className="text-stone-400 font-mono uppercase block text-[10px]">Origin City</span>
              <span className="text-[#1A1A1A] font-semibold">Sultanpura Workshop, Gujranwala</span>
            </div>
          </div>

          {/* Customizable Dropdown Pickers */}
          <div className="space-y-4">
            <h3 className="text-[#1A1A1A] font-serif font-semibold text-xs uppercase tracking-widest">Customize Order Specs</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Size Select */}
              <div className="space-y-1.5">
                <span className="text-stone-500 text-[10px] uppercase font-mono block">Layout / Size</span>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-white border border-stone-200 text-stone-700 text-xs px-2.5 py-2.5 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  {product.availableSizes.map((sz: string) => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>

              {/* Color Select */}
              <div className="space-y-1.5">
                <span className="text-stone-500 text-[10px] uppercase font-mono block">Upholstery / Stain Color</span>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full bg-white border border-stone-200 text-stone-700 text-xs px-2.5 py-2.5 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  {product.availableColors.map((col: string) => (
                    <option key={col} value={col}>{col}</option>
                  ))}
                </select>
              </div>

              {/* Polish Finish select */}
              <div className="space-y-1.5">
                <span className="text-stone-500 text-[10px] uppercase font-mono block">Wood Finish Option</span>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full bg-white border border-stone-200 text-stone-700 text-xs px-2.5 py-2.5 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  {product.finishOptions.map((f: string) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 border-t border-stone-200">
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wider text-xs uppercase py-4 rounded-sm transition flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <MessageSquare size={16} className="fill-white text-white" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href={getQuotePageHash()}
              className="flex-1 bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold tracking-wider text-xs uppercase py-4 rounded-sm transition text-center flex items-center justify-center shadow-md cursor-pointer"
            >
              <span>Request Custom Quote</span>
            </a>
          </div>

        </div>
      </div>

      {/* Structured details: Core Features, Care Guide, Wood Properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F9F7F5] p-8 sm:p-12 rounded-sm border border-stone-200 shadow-sm">
        
        {/* Core Engineered Features */}
        <div className="space-y-4">
          <h3 className="font-serif text-[#1A1A1A] text-lg font-semibold border-b border-stone-200 pb-2">
            Design & Build Architecture
          </h3>
          <ul className="space-y-3 text-xs text-stone-600 list-disc list-inside">
            {product.features.map((feat: string, i: number) => (
              <li key={i} className="leading-relaxed">
                <span className="text-[#1A1A1A] font-medium">{feat.split(':')[0]}</span>
                {feat.includes(':') ? feat.split(':')[1] : ''}
              </li>
            ))}
            <li className="leading-relaxed">
              <span className="text-[#1A1A1A] font-medium">Certified kiln seasoned wood core:</span> Guaranteed wood expansion resistance.
            </li>
            <li className="leading-relaxed">
              <span className="text-[#1A1A1A] font-medium">Artisanal Joinery:</span> Built using heavy-duty mortise-and-tenon structural joints.
            </li>
          </ul>
        </div>

        {/* Care instructions */}
        <div className="space-y-4">
          <h3 className="font-serif text-[#1A1A1A] text-lg font-semibold border-b border-stone-200 pb-2">
            Care & Preservation Guide
          </h3>
          <ul className="space-y-3 text-xs text-stone-600 list-decimal list-inside font-light">
            {product.careInstructions.map((ins: string, i: number) => (
              <li key={i} className="leading-relaxed">
                {ins}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Related products recommendation grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="font-serif text-[#1A1A1A] text-xl sm:text-2xl font-semibold">
              You May Also Appreciate
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <div key={prod.id}>
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
