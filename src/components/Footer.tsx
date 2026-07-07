import { Phone, Mail, Clock, MapPin, ChevronRight, MessageSquare, ShieldAlert, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { name: 'Sofa Sets', href: '#/subcategory/Sofa%20Sets' },
    { name: 'Luxury Beds', href: '#/subcategory/Luxury%20Beds' },
    { name: 'Dining Tables', href: '#/subcategory/Dining%20Tables' },
    { name: 'Office Desks', href: '#/subcategory/Office%20Desks' },
    { name: 'Custom Doors', href: '#/subcategory/Wooden%20Doors' },
    { name: 'Wooden Panels', href: '#/subcategory/Wooden%20Panels' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#/about' },
    { name: 'Shop All Furniture', href: '#/shop' },
    { name: 'Completed Portfolio', href: '#/portfolio' },
    { name: 'Exquisite Gallery', href: '#/gallery' },
    { name: 'Client Testimonials', href: '#/reviews' },
    { name: 'Read Blog Articles', href: '#/blog' },
    { name: 'Frequently Asked FAQs', href: '#/faqs' },
    { name: 'Contact Store', href: '#/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#/privacy' },
    { name: 'Terms & Conditions', href: '#/terms' },
    { name: 'Secure Admin Portal', href: '#/admin' }
  ];

  return (
    <footer id="main-footer" className="bg-white border-t border-stone-200 text-stone-600 text-sm">
      
      {/* Footer Top Accent Map Panel */}
      <div className="bg-[#F9F7F5] py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">Visit Our Showroom</span>
            <h3 className="font-serif text-[#1A1A1A] text-xl font-medium">Experience Luxury In-Person</h3>
            <p className="text-stone-500 text-xs">
              Feel the weight of raw seasoned Sheesham and test the comfort of high-density Master MoltyFoam in our exclusive Gujranwala boutique.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 col-span-2">
            <div className="flex items-start space-x-3 bg-white p-4 rounded-sm border border-stone-200 flex-1 shadow-sm">
              <MapPin className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-xs uppercase tracking-wide">Showroom Address</h4>
                <p className="text-stone-600 text-xs mt-1">Sultanpura, Gujranwala 50250, Pakistan</p>
                <a 
                  href="https://plus.codes/8J3G5537+XR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#B8962E] text-[10px] font-mono mt-1 block hover:underline"
                >
                  Plus Code: 5537+XR, Gujranwala
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-sm border border-stone-200 flex-1 shadow-sm">
              <Clock className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-xs uppercase tracking-wide">Showroom Hours</h4>
                <p className="text-stone-600 text-xs mt-1">Open Daily: 10:00 AM – 8:00 PM</p>
                <p className="text-[10px] text-stone-400 mt-1">Friday Prayer Break: 1:00 PM - 2:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & About Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-serif text-2xl tracking-[0.2em] text-[#1A1A1A] font-bold uppercase">
              Modern <span className="text-[#5D4037] font-light">Furniture</span>
            </span>
            <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-mono">
              Crafting Heritage • Since 1998
            </p>
          </div>
          <p className="text-stone-500 text-xs leading-relaxed">
            Since our inception, we have curated and handcrafted luxury solid wood masterpieces for royal villas and executive spaces across Gujranwala, Lahore, and Islamabad. Every single piece tells a unique story of wood seasoning, carving precision, and timeless elegance.
          </p>
          <div className="flex space-x-3 pt-2">
            <a 
              href="https://wa.me/923295588925" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white border border-emerald-500/20 p-2.5 rounded-sm transition duration-300"
              title="WhatsApp Chat"
            >
              <MessageSquare size={16} />
            </a>
            <a 
              href="#/contact" 
              className="bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white border border-[#D4AF37]/20 p-2.5 rounded-sm transition duration-300"
              title="Get in Touch"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Collections Links */}
        <div className="space-y-6">
          <h4 className="font-serif text-[#1A1A1A] font-medium text-base tracking-wide border-l-2 border-[#D4AF37] pl-3">
            Product Categories
          </h4>
          <ul className="space-y-2 text-xs">
            {productLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#D4AF37] transition flex items-center group">
                  <ChevronRight size={12} className="mr-1.5 text-stone-300 group-hover:text-[#D4AF37] transition-colors" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Corporate Links */}
        <div className="space-y-6">
          <h4 className="font-serif text-[#1A1A1A] font-medium text-base tracking-wide border-l-2 border-[#D4AF37] pl-3">
            Quick Directory
          </h4>
          <ul className="space-y-2 text-xs">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#D4AF37] transition flex items-center group">
                  <ChevronRight size={12} className="mr-1.5 text-stone-300 group-hover:text-[#D4AF37] transition-colors" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts & Live Support */}
        <div className="space-y-6">
          <h4 className="font-serif text-[#1A1A1A] font-medium text-base tracking-wide border-l-2 border-[#D4AF37] pl-3">
            Direct Support
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start space-x-3">
              <Phone className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={16} />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Phone & WhatsApp</span>
                <a href="tel:+923295588925" className="text-[#1A1A1A] hover:text-[#D4AF37] transition font-medium text-sm">
                  +92 329 5588925
                </a>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={16} />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Official Email</span>
                <a href="mailto:info@modernfurnituregrw.com" className="text-stone-600 hover:text-[#D4AF37] transition">
                  info@modernfurnituregrw.com
                </a>
              </div>
            </li>
            <li className="pt-2">
              <div className="bg-[#F9F7F5] p-3 rounded-sm border border-stone-200 text-[11px] space-y-2 text-stone-500">
                <span className="flex items-center text-[#D4AF37] font-bold uppercase text-[9px] tracking-wider">
                  <Award size={12} className="mr-1" /> Premium Care Program
                </span>
                We offer direct secure delivery and expert assembly teams right at your doorstep across Pakistan.
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Legal Bar */}
      <div className="bg-stone-50 py-6 border-t border-stone-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 text-stone-500">
            <span>© {currentYear} Modern Furniture Gujranwala. All rights reserved.</span>
            <span className="hidden md:inline text-stone-200">|</span>
            <div className="flex space-x-3">
              {legalLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-[#D4AF37] transition text-[11px]">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={handleScrollToTop}
            className="text-[10px] uppercase tracking-wider text-[#D4AF37] hover:text-[#B8962E] transition font-bold"
          >
            Back to Top ↑
          </button>
        </div>
      </div>

    </footer>
  );
}
