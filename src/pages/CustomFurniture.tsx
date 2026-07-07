import React, { useState } from 'react';
import { Sparkles, Hammer, CheckCircle, ShieldAlert, Award, Calendar, Ruler } from 'lucide-react';

export default function CustomFurniture() {
  const [activeStep, setActiveStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form selections state
  const [selectedWood, setSelectedWood] = useState('Solid Sheesham (Indian Rosewood)');
  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [selectedStyle, setSelectedStyle] = useState('Modern Minimalist');
  const [selectedFabric, setSelectedFabric] = useState('Turkish Velvet (Stain Resistant)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Gujranwala');
  const [dimensions, setDimensions] = useState('');
  const [budget, setBudget] = useState('PKR 150k - 250k');

  const stepTitles = [
    'Timber Selection',
    'Furniture Category',
    'Styling & Outlines',
    'Upholstery Choice',
    'Contact & Submit'
  ];

  const woodOptions = [
    { name: 'Solid Sheesham (Indian Rosewood)', description: 'Extremely dense, rich dark grains, naturally insect-resistant. Perfect for dining & heritage carving.', icon: '🪵' },
    { name: 'European White Oak', description: 'Light contemporary look, straight textured grains. Perfect for modern living rooms and study desks.', icon: '🌳' },
    { name: 'American Black Walnut', description: 'Ultra-luxurious deep chocolate shade, silky textures. Ideal for executive desks and premium consoles.', icon: '🌰' },
    { name: 'Burmese Teak Wood', description: 'Natural weather-proof oils. The supreme choice for luxury garden terrace seating and high-end exterior doors.', icon: '🍃' }
  ];

  const roomOptions = [
    { name: 'Living Room Seating', icon: '🛋️' },
    { name: 'Luxury Bedroom Bridal Sets', icon: '🛏️' },
    { name: 'Grand Dining Table Arrangements', icon: '🍽️' },
    { name: 'Executive Boardroom & Study Desks', icon: '💼' },
    { name: 'Solid Core Entrance & Room Doors', icon: '🚪' }
  ];

  const styleOptions = [
    { name: 'Modern Italian Minimalist', description: 'Sleek profiles, concealed handles, brushed gold metal lines, ultra-matte veneer coats.' },
    { name: 'Sultanate Mughal Carving', description: 'Delicate, classical floral patterns hand-carved directly into solid Sheesham timber.' },
    { name: 'Chesterfield Deep-Tufting', description: 'Thick folded leather or velvet tufting, handcrafted brass pins, majestic rolled armrests.' },
    { name: 'Organic Live-Edge', description: 'Honoring natural curves of the log, displaying gorgeous tree trunk rings and bark shapes.' }
  ];

  const fabricOptions = [
    { name: 'Turkish Velvet (Stain Resistant)', description: 'Plush velvet with deep sheen. Repels liquids, easily cleanable.' },
    { name: 'Top-Grain Italian Leather', description: 'Premium leather upholstery, grows warmer and richer in color with age.' },
    { name: 'Traditional Damask Brocade', description: 'Woven golden floral patterns on heavy textiles, providing classic royal prestige.' },
    { name: 'Pure Wood Polish (No Upholstery)', description: 'Perfect for doors, wardrobes, panels and console tops.' }
  ];

  const handleNextStep = () => {
    if (activeStep < 5) setActiveStep(activeStep + 1);
  };

  const handlePrevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const handleCustomFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill out your Name and Phone Number.');
      return;
    }

    // Build inquiry object
    const newInquiry = {
      id: 'inq_' + Date.now(),
      fullName,
      phoneNumber: phone,
      city,
      productName: `CUSTOM BUILD: ${selectedRoom} (${selectedStyle})`,
      quantity: 1,
      budget,
      message: `Custom build specifications:
- Timber: ${selectedWood}
- Style: ${selectedStyle}
- Fabric/Upholstery: ${selectedFabric}
- Layout / Custom Dimensions: ${dimensions || 'Not specified'}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'pending'
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('modern_furniture_inquiries') || '[]');
    existing.unshift(newInquiry);
    localStorage.setItem('modern_furniture_inquiries', JSON.stringify(existing));

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-24">
      
      {/* Header and Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Bespoke Workshops</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">Custom Handcrafted Furniture</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-500 text-sm leading-relaxed font-light">
          If you can visualize it, our master Gujranwala artisans can sculpt it. Experience true luxury by controlling every single millimeter, grain selection, and finish detail.
        </p>
      </div>

      {/* STEP-BY-STEP BUILDER & VISUALIZER */}
      <section id="custom-builder" className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start bg-white border border-stone-200 p-6 sm:p-10 rounded-sm relative shadow-sm">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />
        
        {/* Step Indicators Left Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-[#1A1A1A] font-serif font-medium text-base tracking-wide border-b border-stone-200 pb-3 uppercase flex items-center">
            <Sparkles size={16} className="mr-2 text-[#D4AF37] animate-pulse" /> Customizing Steps
          </h3>
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 lg:space-y-3 pb-4 lg:pb-0 text-xs text-stone-500 font-mono scrollbar-none">
            {stepTitles.map((title, index) => {
              const stepNum = index + 1;
              return (
                <button
                  key={stepNum}
                  onClick={() => !submitted && setActiveStep(stepNum)}
                  className={`flex items-center space-x-3 shrink-0 py-2.5 px-3 rounded-sm transition text-left cursor-pointer ${
                    activeStep === stepNum
                      ? 'bg-[#D4AF37] text-white font-bold'
                      : 'hover:bg-stone-50 text-stone-500'
                  }`}
                  disabled={submitted}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] ${activeStep === stepNum ? 'border-white text-white font-bold' : 'border-stone-300'}`}>
                    {stepNum}
                  </span>
                  <span className="hidden sm:inline">{title}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block bg-[#F9F7F5] border border-stone-200 p-4 rounded-sm space-y-2 mt-6 text-xs text-stone-500">
            <span className="flex items-center text-[#D4AF37] font-bold uppercase text-[9px] tracking-wider"><Ruler size={13} className="mr-1" /> Site Measurements</span>
            <p className="leading-relaxed">
              For large bridal bedsets or customized wall panel units, our supervisors can visit Citi Housing or DC Colony to measure wall clearance space in person.
            </p>
          </div>
        </div>

        {/* Builder Panel Center-Right (Handles Form Selection) */}
        <div className="lg:col-span-2 bg-[#F9F7F5] border border-stone-200 rounded-sm p-6 sm:p-8 min-h-[420px] flex flex-col justify-between shadow-inner">
          
          {submitted ? (
            // Success view
            <div className="text-center py-12 space-y-6 max-w-md mx-auto my-auto">
              <div className="flex justify-center text-emerald-600">
                <CheckCircle size={56} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[#1A1A1A] text-2xl font-bold">Custom Order Received!</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-light">
                  Thank you, <span className="font-semibold text-[#1A1A1A]">{fullName}</span>. Your custom designer choices have been saved securely in our system database.
                </p>
                <p className="text-[#D4AF37] text-xs font-mono font-bold pt-2">
                  Our lead supervisor will contact you at {phone} within 24 hours to schedule your formal layout measurements and share CAD blueprint diagrams.
                </p>
              </div>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={() => { setSubmitted(false); setActiveStep(1); }}
                  className="bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-semibold px-5 py-2.5 rounded-sm transition uppercase"
                >
                  Build Another
                </button>
                <a
                  href="#/admin"
                  className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-xs font-bold px-5 py-2.5 rounded-sm transition uppercase text-center"
                >
                  Check Admin Portal
                </a>
              </div>
            </div>
          ) : (
            // Builder Form Steps
            <form onSubmit={handleCustomFormSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
              <div>
                {/* Active Step Header */}
                <div className="border-b border-stone-200 pb-4 mb-6">
                  <span className="text-stone-500 font-mono text-[10px] uppercase">Step {activeStep} of 5</span>
                  <h2 className="font-serif text-[#1A1A1A] text-xl font-medium mt-1">{stepTitles[activeStep - 1]}</h2>
                </div>

                {/* STEP 1: WOOD CHOICE */}
                {activeStep === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {woodOptions.map((opt) => (
                      <label
                        key={opt.name}
                        onClick={() => setSelectedWood(opt.name)}
                        className={`p-4 rounded-sm border cursor-pointer transition flex flex-col justify-between h-40 ${
                          selectedWood === opt.name
                            ? 'border-[#D4AF37] bg-white shadow-sm'
                            : 'border-stone-200 bg-white hover:border-[#D4AF37]'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-2xl select-none">{opt.icon}</span>
                          <input
                            type="radio"
                            name="wood"
                            checked={selectedWood === opt.name}
                            onChange={() => {}}
                            className="accent-[#D4AF37]"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[#1A1A1A] font-medium text-xs block">{opt.name}</span>
                          <span className="text-[10px] text-stone-500 leading-normal block font-light">{opt.description}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {/* STEP 2: CATEGORY CHOICE */}
                {activeStep === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {roomOptions.map((opt) => (
                      <label
                        key={opt.name}
                        onClick={() => setSelectedRoom(opt.name)}
                        className={`p-4 rounded-sm border cursor-pointer transition flex flex-col justify-between h-36 text-center ${
                          selectedRoom === opt.name
                            ? 'border-[#D4AF37] bg-white shadow-sm'
                            : 'border-stone-200 bg-white hover:border-[#D4AF37]'
                        }`}
                      >
                        <span className="text-3xl select-none block mb-2">{opt.icon}</span>
                        <div className="space-y-1 mt-auto">
                          <span className="text-[#1A1A1A] font-serif text-xs font-semibold block leading-tight">{opt.name.split(' ')[0]}</span>
                          <span className="text-[9px] text-stone-400 block uppercase font-mono tracking-wider">{opt.name}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {/* STEP 3: STYLE OUTLINES */}
                {activeStep === 3 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {styleOptions.map((opt) => (
                      <label
                        key={opt.name}
                        onClick={() => setSelectedStyle(opt.name)}
                        className={`p-4 rounded-sm border cursor-pointer transition flex flex-col justify-between h-36 ${
                          selectedStyle === opt.name
                            ? 'border-[#D4AF37] bg-white shadow-sm'
                            : 'border-stone-200 bg-white hover:border-[#D4AF37]'
                        }`}
                      >
                        <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                          <span className="text-[#1A1A1A] font-serif text-xs font-bold uppercase">{opt.name}</span>
                          <input
                            type="radio"
                            name="style"
                            checked={selectedStyle === opt.name}
                            onChange={() => {}}
                            className="accent-[#D4AF37]"
                          />
                        </div>
                        <p className="text-[10px] text-stone-500 font-light leading-relaxed pt-2">
                          {opt.description}
                        </p>
                      </label>
                    ))}
                  </div>
                )}

                {/* STEP 4: UPHOLSTERY */}
                {activeStep === 4 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fabricOptions.map((opt) => (
                      <label
                        key={opt.name}
                        onClick={() => setSelectedFabric(opt.name)}
                        className={`p-4 rounded-sm border cursor-pointer transition flex flex-col justify-between h-36 ${
                          selectedFabric === opt.name
                            ? 'border-[#D4AF37] bg-white shadow-sm'
                            : 'border-stone-200 bg-white hover:border-[#D4AF37]'
                        }`}
                      >
                        <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                          <span className="text-[#1A1A1A] font-serif text-xs font-bold uppercase">{opt.name}</span>
                          <input
                            type="radio"
                            name="fabric"
                            checked={selectedFabric === opt.name}
                            onChange={() => {}}
                            className="accent-[#D4AF37]"
                          />
                        </div>
                        <p className="text-[10px] text-stone-500 font-light leading-relaxed pt-2">
                          {opt.description}
                        </p>
                      </label>
                    ))}
                  </div>
                )}

                {/* STEP 5: SUBMIT DETAILS */}
                {activeStep === 5 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-stone-600">
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-stone-500 uppercase font-mono block text-[10px]">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Chaudhary Nabeel Ahmad"
                          className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-stone-500 uppercase font-mono block text-[10px]">Active Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2.5 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-stone-500 uppercase font-mono block text-[10px]">City Location</label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-sm text-stone-700 px-3 py-2.5 focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="Gujranwala">Gujranwala</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Sialkot">Sialkot</option>
                          <option value="Sargodha">Sargodha</option>
                          <option value="Islamabad">Islamabad</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-stone-500 uppercase font-mono block text-[10px]">Budget Threshold</label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-sm text-stone-700 px-3 py-2.5 focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="PKR 80k - 150k">PKR 80k - 150k</option>
                          <option value="PKR 150k - 250k">PKR 150k - 250k</option>
                          <option value="PKR 250k - 400k">PKR 250k - 400k</option>
                          <option value="PKR 400k+ (Executive Luxury)">PKR 400k+ (Executive Luxury)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-stone-500 uppercase font-mono block text-[10px]">Room Sizes & Dimensions / Notes</label>
                        <textarea
                          value={dimensions}
                          onChange={(e) => setDimensions(e.target.value)}
                          rows={4}
                          placeholder="e.g. Wardrobe clearance is 9x8 feet, need 4 doors, dark Walnut polishing preferred."
                          className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-3 py-2 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons Row */}
              <div className="flex justify-between items-center pt-6 border-t border-stone-200 mt-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={activeStep === 1}
                  className={`text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm border border-stone-200 transition ${
                    activeStep === 1 ? 'opacity-40 cursor-not-allowed text-stone-300' : 'text-stone-700 hover:bg-stone-100 cursor-pointer bg-white'
                  }`}
                >
                  ← Back
                </button>

                {activeStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm transition cursor-pointer"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-sm transition cursor-pointer shadow-md"
                  >
                    Confirm Custom Specification
                  </button>
                )}
              </div>
            </form>
          )}

        </div>
      </section>

      {/* CORE CONSULTATION & PROCESS DESCRIPTION WORKFLOW */}
      <section id="custom-consultation" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block font-bold">From Forest Logs to Masterpieces</span>
          <h2 className="font-serif text-[#1A1A1A] text-2xl sm:text-3xl font-semibold">Our Consultation & Customization Process</h2>
          <p className="text-stone-500 text-sm leading-relaxed font-light">
            We follow strict international standards to make sure every order fulfills expectations. We manage the entire woodcraft lifecycle in our Gujranwala facility.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <h4 className="text-[#1A1A1A] text-sm font-semibold">CAD Blueprint Architecture</h4>
                <p className="text-stone-500 text-xs mt-0.5">We convert your room coordinates into detailed 2D architectural CAD layouts and structural plans.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <h4 className="text-[#1A1A1A] text-sm font-semibold">Chemical Anti-Termite Immersion</h4>
                <p className="text-stone-500 text-xs mt-0.5">All timbers undergo a pressurised chemical pool bath, guaranteeing that insects and termites never infect your logs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <h4 className="text-[#1A1A1A] text-sm font-semibold">Generational Carvings & Tufting</h4>
                <p className="text-stone-500 text-xs mt-0.5">Master local carvers engrave classical outlines by hand. The final coats feature rich, heat-resistant Italian lacquer coatings.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden border border-stone-200 bg-white shadow-md relative aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80"
            alt="Kiln Drying Wood"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/80 flex items-center justify-center p-8 text-center">
            <div className="space-y-3 max-w-sm">
              <Calendar className="text-[#D4AF37] w-10 h-10 mx-auto" />
              <h4 className="font-serif text-white font-semibold text-lg">Schedule Store Consultation</h4>
              <p className="text-stone-300 text-xs font-light">
                Prefer to discuss plans face-to-face? Visit our Sultanpura showroom or call us directly to book a private VIP measurement tour.
              </p>
              <a href="tel:+923295588925" className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-xs font-bold px-5 py-2.5 rounded-sm inline-block tracking-wider uppercase shadow-md">
                📞 Call +92 329 5588925
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
