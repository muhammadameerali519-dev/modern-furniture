import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill out your Name and Phone Number.');
      return;
    }

    // Prepare inquiry record
    const newInquiry = {
      id: 'inq_' + Date.now(),
      fullName,
      phoneNumber: phone,
      city: 'Gujranwala',
      productName: 'CONTACT PAGE FORM SUBMISSION',
      quantity: 1,
      budget: 'N/A',
      message: message || 'General showroom inquiry.',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'pending'
    };

    // Save
    const existing = JSON.parse(localStorage.getItem('modern_furniture_inquiries') || '[]');
    existing.unshift(newInquiry);
    localStorage.setItem('modern_furniture_inquiries', JSON.stringify(existing));

    setSubmitted(true);
  };

  const contactInfos = [
    {
      icon: <MapPin className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-0.5" />,
      label: 'Showroom Address',
      value: 'Sultanpura, Gujranwala 50250, Pakistan',
      sub: 'Google Plus Code: 5537+XR'
    },
    {
      icon: <Phone className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-0.5" />,
      label: 'Direct Line & WhatsApp',
      value: '+92 329 5588925',
      sub: 'Available 24/7 for digital catalogs'
    },
    {
      icon: <Mail className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-0.5" />,
      label: 'Official Email Support',
      value: 'info@modernfurnituregrw.com',
      sub: 'Expect response within 2 business hours'
    },
    {
      icon: <Clock className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-0.5" />,
      label: 'Store Operating Hours',
      value: 'Open Daily: 10:00 AM – 8:00 PM',
      sub: 'Open throughout the week, including Sundays'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-20">
      
      {/* Page header and title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Direct Communication</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">Visit or Message Us</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-500 text-sm leading-relaxed font-light font-sans">
          Have a question about our collections, customized wood seasoning, or deliveries? Reach out through our direct digital line or submit a message below.
        </p>
      </div>

      {/* Grid Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: CONTACT INFOS - 5 cols */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-6">
            <h3 className="font-serif text-[#1A1A1A] text-xl font-medium border-b border-stone-200 pb-3 uppercase">
              Showroom Directory
            </h3>
            <div className="space-y-6">
              {contactInfos.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white border border-stone-200 p-5 rounded-sm shadow-sm">
                  <div className="p-3 bg-[#F9F7F5] rounded-sm border border-stone-200 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-400 font-mono text-[9px] uppercase tracking-wider block">{info.label}</span>
                    <span className="text-[#1A1A1A] font-semibold text-sm block">{info.value}</span>
                    <span className="text-stone-500 text-xs font-light block leading-relaxed">{info.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick WhatsApp Action banner */}
          <div className="bg-white border border-stone-200 p-6 rounded-sm text-center space-y-4 shadow-sm">
            <h4 className="font-serif text-[#1A1A1A] font-medium text-base">Require Immediate Response?</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              We highly recommend WhatsApp for faster chats, catalog transfers, and live video showroom displays of finished furniture.
            </p>
            <a
              href="https://wa.me/923295588925"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase px-6 py-3 rounded-sm tracking-wider inline-flex items-center space-x-2 w-full justify-center transition shadow-sm"
            >
              <MessageSquare size={14} className="fill-white" />
              <span>Message Store on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: CONTACT FORM - 7 cols */}
        <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-10 rounded-sm relative shadow-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
          
          {submitted ? (
            <div className="text-center py-12 space-y-6 max-w-sm mx-auto relative z-10">
              <div className="flex justify-center text-emerald-500">
                <CheckCircle size={56} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[#1A1A1A] text-2xl font-bold">Message Submitted</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-light">
                  Your details have been saved directly to our showroom's local database.
                </p>
                <p className="text-[#D4AF37] text-xs font-mono font-medium pt-2">
                  Our showroom manager will contact you at {phone} within 2 business hours. Thank you!
                </p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setFullName(''); setPhone(''); setMessage(''); }}
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-5 py-2.5 rounded-sm transition uppercase mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              <h3 className="font-serif text-[#1A1A1A] text-xl font-medium border-b border-stone-200 pb-3 uppercase">
                Send Digital Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-500 uppercase font-mono block text-[10px]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Chaudhary Nabeel Ahmad"
                    className="w-full bg-[#F9F7F5] border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs"
                  />
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="text-stone-500 uppercase font-mono block text-[10px]">Active Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full bg-[#F9F7F5] border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="text-stone-500 uppercase font-mono block text-[10px]">Your Detailed Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="e.g., I am looking for a customized 8-seater Sheesham dining table. Please share prices and wood thickness details."
                  className="w-full bg-[#F9F7F5] border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2 focus:outline-none focus:border-[#D4AF37] text-xs"
                />
              </div>

              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold tracking-widest text-xs uppercase py-3.5 w-full rounded-sm transition shadow-md cursor-pointer"
              >
                Submit Form Message
              </button>
            </form>
          )}

        </div>

      </div>

      {/* FULL-WIDTH INTEGRATED MAP PREVIEW */}
      <section id="full-map" className="space-y-4">
        <h3 className="font-serif text-[#1A1A1A] text-lg font-medium border-l-2 border-[#D4AF37] pl-3">Showroom GPS Map</h3>
        <div className="border border-stone-200 rounded-sm overflow-hidden h-96 bg-[#F9F7F5] shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.077209353915!2d74.1923053!3d32.1481944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCswOCc1My41Ik4gNzTCsDExJzMyLjMiRQ!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.1) contrast(1.02)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Modern Furniture Showroom Location Sultanpura Gujranwala Map Page"
          />
        </div>
      </section>

    </div>
  );
}
