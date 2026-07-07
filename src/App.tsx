import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages import
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CustomFurniture from './pages/CustomFurniture';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import AdminDashboard from './pages/AdminDashboard';
import { AboutUs, CustomerReviews, FAQs, PrivacyPolicy, TermsAndConditions } from './pages/SimplePages';

import { Sparkles, ArrowUp, Menu } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('#/');
  const [loading, setLoading] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Router listener to handle hash change
  useEffect(() => {
    const handleHashChange = () => {
      // Decode URL hash to match routes accurately
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      
      // Auto-scroll page to top on navigation changes
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simulating an elegant initial loading state for luxury feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Content Router matching requested pages
  const renderActivePage = () => {
    const path = currentPath.split('?')[0]; // Strip search queries for routing
    
    if (path === '#/' || path === '#') {
      return <Home />;
    }
    if (path === '#/about') {
      return <AboutUs />;
    }
    if (path === '#/shop') {
      return <Shop currentPath={currentPath} />;
    }
    if (path.startsWith('#/category/')) {
      return <Shop currentPath={currentPath} />;
    }
    if (path.startsWith('#/subcategory/')) {
      return <Shop currentPath={currentPath} />;
    }
    if (path.startsWith('#/product/')) {
      return <ProductDetails currentPath={currentPath} />;
    }
    if (path === '#/custom') {
      return <CustomFurniture />;
    }
    if (path === '#/portfolio') {
      return <Portfolio />;
    }
    if (path === '#/gallery') {
      return <Gallery />;
    }
    if (path === '#/reviews') {
      return <CustomerReviews />;
    }
    if (path === '#/faqs') {
      return <FAQs />;
    }
    if (path === '#/blog' || path.startsWith('#/blog/')) {
      return <Blog currentPath={currentPath} />;
    }
    if (path === '#/contact') {
      return <Contact />;
    }
    if (path === '#/quote') {
      return <RequestQuote currentPath={currentPath} />;
    }
    if (path === '#/privacy') {
      return <PrivacyPolicy />;
    }
    if (path === '#/terms') {
      return <TermsAndConditions />;
    }
    if (path === '#/admin') {
      return <AdminDashboard />;
    }

    // Default Fallback to Home
    return <Home />;
  };

  if (loading) {
    // Elegant luxury branding introductory loading overlay
    return (
      <div 
        id="luxury-loader"
        className="fixed inset-0 bg-[#F9F7F5] flex flex-col justify-center items-center z-50 text-center px-4"
      >
        <div className="space-y-4 animate-pulse">
          <div className="flex justify-center text-[#D4AF37] mb-2">
            <Sparkles size={32} className="animate-spin" style={{ animationDuration: '4s' }} />
          </div>
          <h2 className="font-serif text-[#1A1A1A] text-3xl tracking-[0.3em] uppercase font-bold">
            Modern <span className="text-[#5D4037] font-light">Furniture</span>
          </h2>
          <p className="text-[10px] tracking-[0.5em] text-[#D4AF37] uppercase font-mono">
            Gujranwala • Timeless Wood Artistry
          </p>
          <div className="w-24 h-[1px] bg-[#D4AF37]/30 mx-auto mt-6" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F9F7F5] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white antialiased">
      
      {/* Sticky Premium Header with Navigation & Mega Menu */}
      <Header currentPath={currentPath} />

      {/* Main Dynamic View Content */}
      <main id="main-content-stage" className="flex-grow pt-14">
        {renderActivePage()}
      </main>

      {/* Professional Detailed Corporate Footer */}
      <Footer />

      {/* Floating interactive WhatsApp support module */}
      <WhatsAppButton />

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-6 left-6 z-40 bg-white hover:bg-[#D4AF37] hover:text-white border border-stone-200 p-3.5 rounded-full text-[#D4AF37] shadow-lg transition duration-300 cursor-pointer hover:scale-105"
          title="Scroll To Top"
        >
          <ArrowUp size={16} />
        </button>
      )}

    </div>
  );
}
