import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Award, ShieldCheck, HelpCircle, PhoneCall, LayoutDashboard } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll detection for sticky background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsOpen(false);
    setMegaMenuOpen(false);
  }, [currentPath]);

  // Subcategories grouped by category for the Mega Menu
  const megaMenuData = [
    {
      title: 'Living Room',
      categorySlug: 'living-room',
      links: ['Sofa Sets', 'Coffee Tables', 'Center Tables', 'TV Units', 'Wall Units', 'Console Tables']
    },
    {
      title: 'Bedroom',
      categorySlug: 'bedroom',
      links: ['Luxury Beds', 'King Size Beds', 'Queen Size Beds', 'Bedroom Sets', 'Wardrobes', 'Dressing Tables']
    },
    {
      title: 'Dining Room',
      categorySlug: 'dining-room',
      links: ['Dining Tables', 'Dining Chairs', 'Cabinets', 'Sideboards']
    },
    {
      title: 'Office & Work',
      categorySlug: 'office',
      links: ['Office Desks', 'Office Chairs', 'Executive Furniture', 'Bookshelves']
    },
    {
      title: 'Outdoor & Custom',
      categorySlug: 'custom',
      links: ['Outdoor Furniture', 'Wooden Doors', 'Wooden Panels', 'Handmade Furniture', 'Customized Furniture']
    }
  ];

  const isActive = (path: string) => {
    if (path === '#/' && (currentPath === '' || currentPath === '/')) return true;
    return currentPath === path;
  };

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Shop All', href: '#/shop' },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'Gallery', href: '#/gallery' },
    { name: 'Blog', href: '#/blog' },
    { name: 'FAQs', href: '#/faqs' },
    { name: 'Contact', href: '#/contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.hash = `#/shop?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchQuery('');
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl border-b border-stone-200/60 shadow-[0_8px_32px_rgba(40,30,20,0.04)] py-2' 
          : 'bg-[#F9F7F5]/85 backdrop-blur-xl border-b border-stone-200/30 py-3.5'
      }`}
    >
      {/* Top Banner with Local Info */}
      <div className="hidden md:flex bg-[#1A1A1A] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] px-8 py-2 justify-between items-center -mt-4 mb-3">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span>Sultanpura, Gujranwala, Pakistan • Open Until 8:00 PM</span>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#/reviews" className="hover:text-white transition duration-200">⭐ 5.0 Star Reviews</a>
          <a href="https://wa.me/923295588925" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
            WhatsApp: +92 329 5588925
          </a>
          <a href="#/admin" className="flex items-center hover:text-white transition duration-200">
            <LayoutDashboard size={12} className="mr-1" /> Admin Portal
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Logo - Serif Display with Modern Contrast */}
          <div className="flex-shrink-0">
            <a href="#/" className="flex flex-col group">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-[#1A1A1A] font-bold uppercase transition duration-300 group-hover:text-[#D4AF37]">
                Modern <span className="text-[#5D4037] font-light">Furniture</span>
              </span>
              <span className="text-[8px] tracking-[0.45em] text-[#D4AF37] uppercase -mt-1 font-mono">
                Gujranwala • Luxury
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-200 luxury-underline-effect ${
                  isActive(link.href)
                    ? 'text-[#1A1A1A] font-bold border-b-2 border-[#D4AF37] pb-1'
                    : 'text-stone-500 hover:text-[#1A1A1A]'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Custom Furniture Nav Link */}
            <a
              href="#/custom"
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-200 luxury-underline-effect ${
                isActive('#/custom')
                  ? 'text-[#1A1A1A] border-b-2 border-[#D4AF37] pb-1'
                  : 'text-[#D4AF37] hover:text-[#B8962E]'
              }`}
            >
              Bespoke Custom
            </a>

            {/* Product Categories Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                id="megamenu-btn"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="flex items-center px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase text-stone-500 hover:text-[#1A1A1A] transition-colors duration-200 cursor-pointer"
              >
                <span>Collections</span>
                <ChevronDown size={14} className="ml-1" />
              </button>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div 
                  id="mega-menu"
                  className="absolute left-1/2 -translate-x-[75%] mt-1 w-[800px] bg-white/95 backdrop-blur-xl border border-stone-200 rounded-xl shadow-[0_24px_50px_rgba(40,30,20,0.15)] p-6 grid grid-cols-5 gap-6 transition-all duration-300 z-50 animate-fade-in-up"
                >
                  {megaMenuData.map((section) => (
                    <div key={section.title} className="flex flex-col space-y-3">
                      <a 
                        href={`#/category/${section.categorySlug}`}
                        className="text-[#D4AF37] font-serif font-semibold text-xs uppercase tracking-wider border-b border-stone-100 pb-1.5 hover:text-[#B8962E] transition"
                      >
                        {section.title}
                      </a>
                      <ul className="flex flex-col space-y-1.5 text-xs text-stone-600">
                        {section.links.map((sub) => (
                          <li key={sub}>
                            <a
                              href={`#/subcategory/${encodeURIComponent(sub)}`}
                              className="hover:text-[#1A1A1A] hover:translate-x-1 transition-all duration-150 block"
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Decorative Banner inside Mega Menu */}
                  <div className="col-span-5 mt-4 border-t border-stone-150 pt-4 flex justify-between items-center text-[11px] text-stone-500">
                    <span className="flex items-center"><Award size={12} className="mr-1 text-[#D4AF37]" /> Premium Sheesham Timber</span>
                    <span className="flex items-center"><ShieldCheck size={12} className="mr-1 text-[#D4AF37]" /> 15-Year Termite Proofing</span>
                    <span className="flex items-center"><HelpCircle size={12} className="mr-1 text-[#D4AF37]" /> 100% Bespoke Sizes</span>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Quick Search & Quote CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection..."
                className="w-44 xl:w-56 bg-white/60 border border-stone-200 text-[#1A1A1A] rounded-full px-4 py-1.5 text-xs focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder-stone-400 backdrop-blur-md"
              />
              <button type="submit" className="absolute right-3 top-2 text-stone-400 hover:text-[#D4AF37] cursor-pointer">
                <Search size={14} />
              </button>
            </form>

            <a
              href="#/quote"
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold tracking-widest text-xs uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 apple-shine-sweep cursor-pointer text-center"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-3">
            <a
              href="#/quote"
              className="bg-[#D4AF37] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-sm transition-all duration-200"
            >
              Quote
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-[#1A1A1A] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="xl:hidden bg-white border-t border-stone-200 shadow-xl py-4 px-4 space-y-3">
          
          {/* Quick Search for Mobile */}
          <form onSubmit={handleSearchSubmit} className="relative w-full pb-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-stone-50 border border-stone-200 text-[#1A1A1A] rounded-md px-4 py-2 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-stone-400"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-stone-400 hover:text-[#D4AF37]">
              <Search size={14} />
            </button>
          </form>

          {/* Standard Nav links */}
          <div className="flex flex-col space-y-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive(link.href)
                    ? 'text-[#D4AF37] bg-[#D4AF37]/5 font-semibold'
                    : 'text-stone-700 hover:text-[#1A1A1A] hover:bg-stone-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/custom"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition ${
                isActive('#/custom')
                  ? 'text-[#D4AF37] bg-[#D4AF37]/5 font-bold'
                  : 'text-[#D4AF37] hover:text-[#B8962E] hover:bg-stone-50'
              }`}
            >
              Bespoke Custom Furniture
            </a>
          </div>

          {/* Mobile Categories Accordion Section */}
          <div className="border-t border-stone-200 pt-3">
            <p className="px-3 text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] mb-2">
              Browse Categories
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 px-3">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#/category/${cat.id}`}
                  className="hover:text-[#D4AF37] transition py-1 block"
                >
                  • {cat.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Admin Link & Contact Info */}
          <div className="border-t border-stone-200 pt-3 flex flex-col space-y-2 text-xs text-stone-500 px-3">
            <div className="flex items-center justify-between">
              <a href="#/admin" className="text-stone-600 hover:text-[#D4AF37] flex items-center">
                <LayoutDashboard size={12} className="mr-1" /> Admin Dashboard
              </a>
              <span className="text-[10px]">Open: 10AM - 8PM</span>
            </div>
            <a href="tel:+923295588925" className="text-stone-600 hover:text-[#D4AF37] flex items-center">
              📞 +92 329 5588925
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
