import React, { useState, useEffect } from 'react';
import { CheckCircle, ShieldCheck, Calendar, ArrowLeft } from 'lucide-react';

interface RequestQuoteProps {
  currentPath: string;
}

export default function RequestQuote({ currentPath }: RequestQuoteProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Gujranwala');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [budget, setBudget] = useState('PKR 150,000 - 250,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Prefill fields from URL query parameters if present
  useEffect(() => {
    const hash = window.location.hash;
    const queryIndex = hash.indexOf('?');
    if (queryIndex !== -1) {
      const queryString = hash.substring(queryIndex + 1);
      const params = new URLSearchParams(queryString);
      
      const prod = params.get('product');
      if (prod) {
        setProductName(prod);
      }

      const sz = params.get('size');
      const col = params.get('color');
      if (sz || col) {
        setMessage(`Custom preferences:
- Selected size/layout: ${sz || 'Default'}
- Color/Stain choice: ${col || 'Default'}`);
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPath]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !productName) {
      alert('Please fill out Name, Phone, and Product Name.');
      return;
    }

    // Build central inquiry database item
    const newInquiry = {
      id: 'inq_' + Date.now(),
      fullName,
      phoneNumber: phone,
      city,
      productName,
      quantity,
      budget,
      message: message || 'General quote inquiry for catalog model.',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'pending'
    };

    // Save
    const existing = JSON.parse(localStorage.getItem('modern_furniture_inquiries') || '[]');
    existing.unshift(newInquiry);
    localStorage.setItem('modern_furniture_inquiries', JSON.stringify(existing));

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-12">
      
      {/* Page headers */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 border-b border-stone-200 pb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs text-stone-500 font-mono">
            <a href="#/" className="hover:text-[#D4AF37]">HOME</a>
            <span>/</span>
            <span className="text-stone-700 font-semibold">REQUEST A QUOTE</span>
          </div>
          <h1 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-bold tracking-tight">
            Quote Inquiry Form
          </h1>
        </div>
        <a
          href="#/shop"
          className="text-stone-500 hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5"
        >
          <ArrowLeft size={14} />
          <span>Browse Collection</span>
        </a>
      </div>

      {/* Grid Split split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: GUIDELINES - 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-serif text-[#1A1A1A] text-lg font-bold border-l-2 border-[#D4AF37] pl-3 uppercase">
            Inquiry Guidelines
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed font-light">
            Each quote is processed and compiled specifically for you by our master estimators. It takes into consideration active seasoned wood prices, upholstery meter requirements, and transport distances.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3 bg-white p-4 rounded-sm border border-stone-200 shadow-sm">
              <ShieldCheck className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wide">No Hidden Charges</h4>
                <p className="text-stone-500 text-[11px] mt-1">Our estimates cover seasoning, lacquer coats, packing, and free assembly setups inside your home.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-sm border border-stone-200 shadow-sm">
              <Calendar className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wide">Estimates Valid for 30 Days</h4>
                <p className="text-stone-500 text-[11px] mt-1">Given fluctuations in local seasoned timber costs, all quote values remain locked for 30 calendar days from submission.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F7F5] p-5 rounded-sm border border-stone-200 text-xs space-y-2 text-stone-500 shadow-sm">
            <span className="font-bold text-[#D4AF37] uppercase text-[9px] tracking-wider block">🛡️ Privacy Shield Secure</span>
            All inquiries are stored privately in our offline showroom data servers and will never be shared or used for unsolicited marketing calls.
          </div>
        </div>

        {/* RIGHT COLUMN: FORM PANEL - 7 cols */}
        <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-10 rounded-sm relative shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-6 max-w-sm mx-auto relative z-10">
              <div className="flex justify-center text-emerald-600">
                <CheckCircle size={56} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[#1A1A1A] text-2xl font-bold">Quote Requested</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-light">
                  Your formal quote requested details have been stored successfully inside our showroom data system.
                </p>
                <p className="text-[#D4AF37] text-xs font-mono font-bold pt-2">
                  Our estimation specialist will contact you at {phone} within 2 hours with pricing catalogs and transport estimates.
                </p>
              </div>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={() => { setSubmitted(false); setFullName(''); setPhone(''); setProductName(''); setMessage(''); }}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-4 py-2.5 rounded-sm transition uppercase cursor-pointer"
                >
                  New Quote
                </button>
                <a
                  href="#/admin"
                  className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-xs font-bold px-4 py-2.5 rounded-sm transition uppercase shadow-sm"
                >
                  Admin Portal
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-5 relative z-10">
              <h3 className="font-serif text-[#1A1A1A] text-lg font-semibold border-b border-stone-200 pb-3 uppercase">
                Submit Quote Particulars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-400 uppercase font-mono block text-[10px]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Chaudhary Nabeel"
                    className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs"
                  />
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-400 uppercase font-mono block text-[10px]">Active Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5 text-xs col-span-1 sm:col-span-2">
                  <label className="text-stone-400 uppercase font-mono block text-[10px]">Product / Category Name *</label>
                  <input
                    type="text"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g. Royal Chesterfield Velvet Sofa Set"
                    className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs"
                  />
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-400 uppercase font-mono block text-[10px]">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-400 uppercase font-mono block text-[10px]">City Location</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white border border-stone-200 text-stone-700 px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs cursor-pointer"
                  >
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Islamabad">Islamabad</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-400 uppercase font-mono block text-[10px]">Target Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border border-stone-200 text-stone-700 px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs cursor-pointer"
                  >
                    <option value="PKR 80k - 150k">PKR 80k - 150k</option>
                    <option value="PKR 150k - 250k">PKR 150k - 250k</option>
                    <option value="PKR 250k - 400k">PKR 250k - 400k</option>
                    <option value="PKR 400k+ (Executive Luxury)">PKR 400k+ (Executive Luxury)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="text-stone-400 uppercase font-mono block text-[10px]">Message & Customizations</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Include any specific dimensional details, upholstery fabrics, or wood carving request details..."
                  className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2 focus:outline-none focus:border-[#D4AF37] text-xs"
                />
              </div>

              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold tracking-widest text-xs uppercase py-3.5 w-full rounded-sm transition shadow-md cursor-pointer"
              >
                Request Custom Quotation
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
