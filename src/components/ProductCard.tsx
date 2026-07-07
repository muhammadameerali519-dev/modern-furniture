import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { MessageSquare, ArrowRight, Eye, Sparkles, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Initialize wishlist state from localStorage
  useEffect(() => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('modern_furniture_wishlist') || '[]');
      setIsWishlisted(wishlist.includes(product.id));
    } catch (e) {
      console.error(e);
    }
  }, [product.id]);

  // Handle wishlist toggle
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const wishlist = JSON.parse(localStorage.getItem('modern_furniture_wishlist') || '[]');
      let updatedWishlist = [];
      if (wishlist.includes(product.id)) {
        updatedWishlist = wishlist.filter((id: string) => id !== product.id);
        setIsWishlisted(false);
      } else {
        updatedWishlist = [...wishlist, product.id];
        setIsWishlisted(true);
      }
      localStorage.setItem('modern_furniture_wishlist', JSON.stringify(updatedWishlist));
    } catch (err) {
      console.error(err);
    }
  };

  // Prefilled WhatsApp message for a specific product
  const getWhatsAppLink = (pName: string) => {
    const text = `Hello MODERN FURNITURE, I am interested in the "${pName}" (ID: ${product.id}). Please let me know the custom price and delivery time for Gujranwala.`;
    return `https://wa.me/923295588925?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white border border-stone-200/80 rounded-2xl overflow-hidden flex flex-col justify-between premium-hover-lift premium-shadow-sm hover:border-[#D4AF37]/40 transition-all duration-500 h-full relative"
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images.length > 1) setCurrentImageIndex(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-50 glass-shine-overlay">
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-1.5 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-[#D4AF37] text-white text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm flex items-center space-x-1 shadow-sm">
              <Sparkles size={8} className="fill-white" />
              <span>BEST SELLER</span>
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#1A1A1A] text-white text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-sm">
              NEW ARRIVAL
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm border border-stone-150 text-stone-600 text-[8px] font-mono tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
            {product.subcategory}
          </span>
        </div>

        {/* Wishlist Heart Icon (Top Right) */}
        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-stone-100 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 text-stone-600 hover:text-red-500 shadow-md cursor-pointer group/heart"
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            size={15} 
            className={`transition-colors duration-300 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-600 group-hover/heart:text-red-500'}`} 
          />
        </button>

        {/* Dynamic Image Display with fallback */}
        <img
          src={product.images[currentImageIndex] || 'https://picsum.photos/seed/furniture/600/450'}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        {/* Ultra-modern Glassmorphism Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center space-x-3 z-10">
          <a
            href={`#/product/${product.id}`}
            className="bg-white/90 backdrop-blur-md text-[#1A1A1A] hover:bg-[#D4AF37] hover:text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-115 cursor-pointer apple-shine-sweep"
            title="View Details"
          >
            <Eye size={18} />
          </a>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white hover:bg-[#20ba59] p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-115 cursor-pointer apple-shine-sweep"
            title="WhatsApp Inquiry"
          >
            <MessageSquare size={18} />
          </a>
        </div>

        {/* Timber indicator pill in image bottom right */}
        <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-md border border-stone-200 text-[8px] text-[#D4AF37] font-semibold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm z-10">
          🌲 {product.material.split('&')[0].trim()}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white relative">
        <div className="space-y-2.5">
          
          {/* Subcategory & Star Rating row */}
          <div className="flex justify-between items-center text-[10px] text-stone-400 font-mono uppercase tracking-wider">
            <span>GRW Premium Walnut-Coated</span>
            <span className="text-[#D4AF37] font-semibold flex items-center">
              ★ {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-serif text-[#1A1A1A] font-bold text-base group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
            <a href={`#/product/${product.id}`}>
              {product.name}
            </a>
          </h3>

          {/* Short description */}
          <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Price Range */}
          <div className="pt-2">
            <span className="text-[9px] text-stone-400 block uppercase tracking-widest font-mono">Estimated Showroom Cost</span>
            <span className="text-[#D4AF37] font-semibold text-sm tracking-wider font-mono">
              {product.priceEstimate}
            </span>
          </div>
        </div>

        {/* Action Buttons with Apple-Inspired Pill styling */}
        <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-stone-100">
          <a
            href={`#/product/${product.id}`}
            className="border border-stone-200 hover:border-[#D4AF37]/40 hover:bg-stone-50/50 text-stone-600 hover:text-[#1A1A1A] text-center py-2.5 rounded-full transition-all duration-300 text-xs font-semibold tracking-wider flex items-center justify-center space-x-1.5 uppercase hover:scale-102 cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-center py-2.5 rounded-full transition-all duration-300 text-xs flex items-center justify-center space-x-1.5 uppercase tracking-wider shadow-sm hover:shadow-md hover:scale-102 active:scale-98 cursor-pointer"
          >
            <MessageSquare size={13} className="fill-white" />
            <span>Inquire</span>
          </a>
        </div>

      </div>
    </div>
  );
}
