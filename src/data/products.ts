import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    slug: 'living-room',
    description: 'Transform your living space with our luxury sofa sets, dynamic coffee tables, consoles, and TV panels handcrafted from premium woods.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    itemCount: 14,
  },
  {
    id: 'bedroom',
    name: 'Bedroom Furniture',
    slug: 'bedroom',
    description: 'Indulge in royal comfort with handcrafted king and queen beds, complete bedroom sets, luxury wardrobes, and dressing tables.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    itemCount: 12,
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    slug: 'dining-room',
    description: 'Gather in elegance around solid Sheesham wood dining tables, artisanal chairs, and bespoke glass and gold sideboards.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    itemCount: 10,
  },
  {
    id: 'office',
    name: 'Office Furniture',
    slug: 'office',
    description: 'Empower your workplace with ergonomic office chairs, magnificent executive desks, bookshelves, and cabinets.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    itemCount: 8,
  },
  {
    id: 'outdoor',
    name: 'Outdoor & Garden',
    slug: 'outdoor',
    description: 'Premium weather-resistant teak and wicker furniture sets designed for luxury terraces, courtyards, and gardens.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
    itemCount: 6,
  },
  {
    id: 'custom',
    name: 'Bespoke Custom Wood',
    slug: 'custom',
    description: 'Bespoke high-end designs, including handcrafted solid wood panels, solid core wooden doors, and custom-ordered masterpieces.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    itemCount: 8,
  },
];

export const ALL_SUBCATEGORIES = [
  'Sofa Sets',
  'Luxury Beds',
  'King Size Beds',
  'Queen Size Beds',
  'Bedroom Sets',
  'Dining Tables',
  'Dining Chairs',
  'Coffee Tables',
  'Center Tables',
  'Side Tables',
  'TV Units',
  'Wall Units',
  'Wardrobes',
  'Dressing Tables',
  'Shoe Racks',
  'Study Tables',
  'Office Desks',
  'Office Chairs',
  'Executive Furniture',
  'Bookshelves',
  'Cabinets',
  'Sideboards',
  'Console Tables',
  'Restaurant Furniture',
  'Hotel Furniture',
  'Outdoor Furniture',
  'Garden Furniture',
  'Wooden Doors',
  'Wooden Panels',
  'Handmade Furniture',
  'Solid Wood Furniture',
  'Customized Furniture'
];

export const PRODUCTS: Product[] = [
  // LIVING ROOM
  {
    id: 'p1',
    name: 'Royal Chesterfield Velvet Sofa Set',
    slug: 'royal-chesterfield-velvet-sofa-set',
    description: 'Experience pure opulence with this classical English Chesterfield Sofa Set. Upholstered in premium grade stain-resistant velvet and resting on beautifully hand-turned solid Sheesham wood legs. Features dense dual-layered foam cushions and exquisite diamond tufting done completely by hand by Gujranwala artisans.',
    category: 'living-room',
    subcategory: 'Sofa Sets',
    priceEstimate: 'PKR 285,000 - 345,000',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Premium Seasoned Sheesham Wood & Luxury Velvet',
    dimensions: '3-Seater: 88"W x 38"D x 31"H | 2-Seater: 68"W x 38"D x 31"H',
    availableColors: ['Emerald Green', 'Royal Blue', 'Champagne Gold', 'Classic Charcoal', 'Crimson Red'],
    availableSizes: ['3+2+1 Sofa Set', '3+2 Sofa Set', 'L-Shape Corner Set', 'Customized Layout'],
    finishOptions: ['Dark Walnut Polish', 'Natural Sheesham Gloss', 'Antique Gold Leaf Accents', 'Matte Oak'],
    warranty: '10 Years Structural Wood Warranty & 2 Years Foam Warranty',
    careInstructions: [
      'Vacuum velvet pile weekly with soft brush attachment.',
      'Professional dry clean upholstery only.',
      'Protect from direct sunlight to avoid velvet fading.',
      'Wipe wooden legs with a soft dry lint-free cloth.'
    ],
    features: [
      '100% seasoned solid Sheesham wood interior framing',
      'Heavy-duty pocket spring suspension',
      'Premium Master MoltyFoam high-density padding',
      'Handcrafted brass studs along armrests'
    ],
    rating: 4.9,
    reviewsCount: 42,
    isBestSeller: true
  },
  {
    id: 'p2',
    name: 'Sultanate Sheesham Carved Center Table',
    slug: 'sultanate-sheesham-carved-center-table',
    description: 'A stellar center table showcasing exquisite Mughal-inspired carving details. Handcrafted from premium dark-grained seasoned Sheesham wood, featuring a thick tempered glass top and storage drawers with antique brass hardware.',
    category: 'living-room',
    subcategory: 'Center Tables',
    priceEstimate: 'PKR 65,000 - 85,000',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'A-Grade Seasoned Sheesham Wood with 8mm Tempered Glass',
    dimensions: '48"W x 30"D x 18"H',
    availableColors: ['Walnut Brown', 'Honey Sheesham', 'Espresso Dark Black'],
    availableSizes: ['Standard Rectangle', 'Compact Square 36"x36"'],
    finishOptions: ['High Gloss Polyurethane', 'Satin Wax Polishing', 'Distressed Antique Wood finish'],
    warranty: ' lifetime warranty against wood-boring insects',
    careInstructions: [
      'Clean glass top with professional glass cleaner.',
      'Dust wooden frame regularly with a soft damp microfiber cloth.',
      'Do not place hot mugs or plates directly on the wood; use coasters.'
    ],
    features: [
      'Intricate floral patterns hand-carved on side frames',
      'Soft-closing concealed drawer tracks',
      'Beveled premium-edge safety glass top'
    ],
    rating: 4.8,
    reviewsCount: 19,
    isNew: true
  },
  {
    id: 'p3',
    name: 'Elite Floating TV Console & Wall Unit',
    slug: 'elite-floating-tv-console-wall-unit',
    description: 'Bring clean architectural lines to your living room with this ultra-modern floating entertainment center. Made of heavy-duty Turkish MDF with rich American Walnut veneer and integrated LED backlight fixtures.',
    category: 'living-room',
    subcategory: 'TV Units',
    priceEstimate: 'PKR 110,000 - 150,000',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Turkish MDF with Walnut Veneer & Matte Charcoal Laminate',
    dimensions: 'Console: 72"W x 16"D x 12"H | Wall Panels customized to space',
    availableColors: ['Walnut & Charcoal Grey', 'Oak & Warm Off-White', 'Black Forest & Gold Lines'],
    availableSizes: ['6-Feet Console', '7-Feet Executive Console', '8-Feet Grand Panel Set'],
    finishOptions: ['Ultra-Matte Finish', 'Glossy Lacquered Accents'],
    warranty: '3 Years Warranty',
    careInstructions: [
      'Clean wood veneer surfaces with dry micro-fiber cloth.',
      'Do not use chemical solvents or ammonia products.',
      'Take care when vacuuming around wall wire channels.'
    ],
    features: [
      'Pre-routed cable organizer cutouts',
      'Smart remote-controlled RGB LED backlighting included',
      'Pneumatic soft-open drop doors'
    ],
    rating: 4.7,
    reviewsCount: 31
  },
  {
    id: 'p4',
    name: 'Luxury Marble Top Console Table',
    slug: 'luxury-marble-top-console-table',
    description: 'A breathtaking console featuring a luxury Carrera marble slab resting on an architectural frame of brushed stainless steel electroplated in brilliant titanium gold.',
    category: 'living-room',
    subcategory: 'Console Tables',
    priceEstimate: 'PKR 95,000 - 130,000',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Carrera Marble & Electroplated Stainless Steel in Gold finish',
    dimensions: '54"W x 15"D x 32"H',
    availableColors: ['White Carrera Marble + Gold Frame', 'Black Marquina Marble + Gold Frame', 'Emerald Marble + Silver Frame'],
    availableSizes: ['4.5 Feet Standard', '5 Feet Grande'],
    finishOptions: ['Polished Marble Gloss', 'Brushed Hairline Gold Finish'],
    warranty: '5 Years Structural Frame Warranty',
    careInstructions: [
      'Wipe up any spills immediately, especially acidic fluids.',
      'Polish marble occasionally with food-grade marble wax.',
      'Do not use scouring pads on electroplated gold finish.'
    ],
    features: [
      'Natural hand-selected stone slabs, each console is unique',
      'Anti-rust high-grade stainless steel base support',
      'Elegant, sleek modern Italian luxury aesthetic'
    ],
    rating: 4.9,
    reviewsCount: 15
  },

  // BEDROOM
  {
    id: 'p5',
    name: 'Majestic Gujranwala Tufted Bridal Bedset',
    slug: 'majestic-gujranwala-tufted-bridal-bedset',
    description: 'The ultimate royal bedroom statement. This masterpiece set features a gigantic wingback headboard, hand-tufted in luxury Turkish velvet with carved gold-painted crown headers made of solid seasoned white oak. Includes 2 premium three-drawer side tables with natural stone tops.',
    category: 'bedroom',
    subcategory: 'Luxury Beds',
    priceEstimate: 'PKR 350,000 - 480,000',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Solid Seasoned White Oak Wood, Sheesham frame, and Velvet fabric',
    dimensions: 'King Size: 78"W x 84"L x 68"H (Headboard)',
    availableColors: ['Cream Beige & Gold Wood', 'Royal Velvet Blue & Silver Wood', 'Charcoal & Antique Bronze Wood'],
    availableSizes: ['King Size Bed', 'Queen Size Bed', 'Full Bedroom Set (Bed + 2 Side Tables + Dressing Table + Wardrobe)'],
    finishOptions: ['Antique Deco Lacquer', 'Matte Oak', 'Vintage Silver Patina Paint'],
    warranty: '15 Years Insect-Resistant Wood Warranty & 10 Years Bed Joint Warranty',
    careInstructions: [
      'Use professional fabric cleaners for headboard velvet.',
      'Check structural corner joints annually for tightness.',
      'Avoid placing next to heating vents or air conditioners.'
    ],
    features: [
      'Bespoke hand-carved floral baroque crown detailing',
      'Under-bed easy-lift pneumatic hydraulic storage drawers option',
      'Constructed with dual metallic support beams'
    ],
    rating: 5.0,
    reviewsCount: 56,
    isBestSeller: true
  },
  {
    id: 'p6',
    name: 'Imperial Solid Wood Wardrobe Closet',
    slug: 'imperial-solid-wood-wardrobe-closet',
    description: 'A spectacular, heavy-duty wardrobe crafted from solid seasoned Sheesham wood. Features premium soft-closing German sliding hinges, integrated motion-sensor LED lighting inside, fully polished cedar drawer interiors, and multiple safe locker spaces.',
    category: 'bedroom',
    subcategory: 'Wardrobes',
    priceEstimate: 'PKR 190,000 - 280,000',
    images: [
      'https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Premium Seasoned Sheesham Solid Wood & Cedar Inserts',
    dimensions: '96"W x 24"D x 84"H (8-Feet Width)',
    availableColors: ['Dark Natural Walnut Polish', 'Rich Honey Sheesham Gloss', 'Muted Classic Ash Polish'],
    availableSizes: ['4-Door standard wardrobe', '3-Door sliding wardrobe', '6-Door Master walk-in unit'],
    finishOptions: ['Polyurethane Gloss Coating', 'Traditional Hand Wax Finish', 'Matte Lacquer'],
    warranty: '10 Years Wood Durability Warranty',
    careInstructions: [
      'Clean exterior wood surfaces with organic wood oils.',
      'Do not store excessively damp items inside.',
      'Vacuum track rails once a month to ensure smooth sliding door operation.'
    ],
    features: [
      'Integrated heavy-metal key lockers for security',
      'Hand-carved classical wooden handle pulls',
      'Aromatic cedar drawers keep woolen clothing naturally insect-free'
    ],
    rating: 4.8,
    reviewsCount: 22
  },
  {
    id: 'p7',
    name: 'Grace Venetian Dressing Table with Mirror',
    slug: 'grace-venetian-dressing-table-with-mirror',
    description: 'An elegant vanity table inspired by classic Venetian design. Built with premium solid wood, decorated with antique brass handles and high-fidelity float glass vanity mirror framed in golden carvings. Includes a matching cushioned vanity stool.',
    category: 'bedroom',
    subcategory: 'Dressing Tables',
    priceEstimate: 'PKR 75,000 - 110,000',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Seasoned Pine and Solid Oak Framing with Premium Velvet stool cushion',
    dimensions: '42"W x 18"D x 65"H (with mirror)',
    availableColors: ['Vanilla Ivory with Gold Trim', 'Espresso Dark Chocolate', 'Champagne Gold Sparkle'],
    availableSizes: ['Standard 3-Drawer Vanity', 'Grand 6-Drawer Beauty Organizer'],
    finishOptions: ['Deco Lacquer Painting', 'Veneer Clear Coating'],
    warranty: '5 Years Wood Structural Warranty',
    careInstructions: [
      'Wipe up cosmetic makeup spills immediately to prevent staining.',
      'Use soft dry microfiber cloth to clean mirror.'
    ],
    features: [
      'Jewelry-compartment lined drawers with soft velvet partitions',
      'High definition lead-free glass mirror',
      'Includes beautiful cushioned dressing stool'
    ],
    rating: 4.9,
    reviewsCount: 18,
    isNew: true
  },

  // DINING ROOM
  {
    id: 'p8',
    name: 'Signature Artisan Sheesham 8-Seater Dining Set',
    slug: 'signature-artisan-sheesham-8-seater-dining-set',
    description: 'Gather your family in monumental style. This dining set is made from heavy slabs of solid A-grade seasoned Sheesham wood, hand-sculpted in Gujranwala. Each table showcases the spectacular organic contrast of light and dark wood grains. Accompanied by 8 ergonomically contoured dining chairs upholstered in rich soil-resistant fabrics.',
    category: 'dining-room',
    subcategory: 'Dining Tables',
    priceEstimate: 'PKR 220,000 - 320,000',
    images: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80'
    ],
    material: '100% Solid Premium Seasoned Sheesham Wood (Tali)',
    dimensions: 'Table: 96"L x 42"W x 30"H | Chairs: 18"W x 20"D x 40"H',
    availableColors: ['Natural Wildwood Grain Gloss', 'Deep Royal Walnut Gloss', 'Dark Matte Mahogany'],
    availableSizes: ['6-Seater Dining Set', '8-Seater Dining Set', '10-Seater Grand Feast Set'],
    finishOptions: ['High-resistance heatproof polish', 'Artisanal organic beeswax rubbing'],
    warranty: 'Lifetime Structural Warranty Against Wood Defects & Cracking',
    careInstructions: [
      'The finish is heat-resistant, but using table mats under boiling pots is recommended.',
      'Wipe off food spills immediately with a damp rag.',
      'Use wax polish once every 6 months to rejuvenate wood glow.'
    ],
    features: [
      'Crafted from massive seasoned 2-inch thick solid wood logs',
      'Double mortise-and-tenon joins for absolute stability',
      'Upholstered with premium high-density spring cushions'
    ],
    rating: 4.9,
    reviewsCount: 61,
    isBestSeller: true
  },
  {
    id: 'p9',
    name: 'Mughal Hand-Carved Dining Chairs Set',
    slug: 'mughal-hand-carved-dining-chairs-set',
    description: 'A set of exquisite dining chairs adorned with delicate classical floral hand-carving. The comfortable, luxury high-back design offers unmatched neck and posture support during royal banquets.',
    category: 'dining-room',
    subcategory: 'Dining Chairs',
    priceEstimate: 'PKR 18,000 - 25,000 per chair',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Seasoned Solid Sheesham Wood with Turkish Brocade fabric',
    dimensions: '18"W x 21"D x 42"H',
    availableColors: ['Brocade Golden Fabric + Walnut Wood', 'Damask Velvet Blue + Dark Wood'],
    availableSizes: ['Standard Height Chairs', 'Custom Height Bar-Stool design'],
    finishOptions: ['Traditional Lakh Lacquer', 'Matte Eco Coating'],
    warranty: '5 Years Joint Warranty',
    careInstructions: [
      'Dust wooden carving crevices with an air-duster or soft paint-brush.',
      'Vacuum fabric seating once a week.'
    ],
    features: [
      'Hand-carved directly by third-generation master carvers',
      'High resilience dense foam seat base',
      'Heavy duty weight support frame'
    ],
    rating: 4.8,
    reviewsCount: 33
  },

  // OFFICE
  {
    id: 'p10',
    name: 'Presidential Walnut Executive Desk',
    slug: 'presidential-walnut-executive-desk',
    description: 'Establish authority and prestige in your boardroom or workspace. This heavy executive desk features magnificent walnut grains, wrapped leather desk-top writing inlay, concealed document vaults, built-in wireless charging stations, and soft-closing files and storage cabinets.',
    category: 'office',
    subcategory: 'Executive Furniture',
    priceEstimate: 'PKR 145,000 - 210,000',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'American Walnut Veneer, Solid Pine internals, and Premium PU Leather inlay',
    dimensions: '72"W x 36"D x 30"H',
    availableColors: ['Classic Presidential Walnut', 'Dark Ebony Oak', 'Warm Honey Teak'],
    availableSizes: ['6-Feet Office Desk', '7-Feet CEO Desk with side credenza', '5-Feet Compact Executive desk'],
    finishOptions: ['High-resistance Anti-Scratch lacquer', 'Smooth Silk Polyurethane gloss'],
    warranty: '5 Years Office Heavy-Use Warranty',
    careInstructions: [
      'Clean dust using a slightly damp micro-fiber cloth.',
      'Use specialized leather cleaners for the PU writing pad inlay.',
      'Do not drag heavy objects across the polished wood.'
    ],
    features: [
      'Premium leatherette soft-writing pad embedded in desktop',
      'Built-in modern desk cable organizer grommets',
      'Concealed double lock drawer for secure documents'
    ],
    rating: 5.0,
    reviewsCount: 28,
    isBestSeller: true
  },
  {
    id: 'p11',
    name: 'Director Ergonomic High-Back Leather Chair',
    slug: 'director-ergonomic-high-back-leather-chair',
    description: 'An executive masterpiece combining ergonomic orthopaedic lumbar support with the luxury of top-grain leather upholstery and hand-finished mahogany armrest accents.',
    category: 'office',
    subcategory: 'Office Chairs',
    priceEstimate: 'PKR 45,000 - 65,000',
    images: [
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Top-Grain Italian Leather upholstery, heavy alloy star base, Mahogany Wood arm caps',
    dimensions: '26"W x 26"D x 46" to 50"H (Adjustable)',
    availableColors: ['Presidential Black Leather', 'Cognac Tan Leather', 'Rich Espresso Brown'],
    availableSizes: ['Adjustable Master size'],
    finishOptions: ['Polished Alloy Base & Gloss Wood caps'],
    warranty: '3 Years Hydraulic Cylinder & Tilt Mechanism Warranty',
    careInstructions: [
      'Wipe down leather parts with premium leather moisturizer every 6 months.',
      'Vacuum dust accumulated inside chair folds.'
    ],
    features: [
      'Class-4 SGS Certified heavy-duty gas cylinder lifter',
      'Multi-angle synchronous lock-tilt reclining system',
      'Anatomically contoured lumbar support padding'
    ],
    rating: 4.7,
    reviewsCount: 39
  },

  // OUTDOOR
  {
    id: 'p12',
    name: 'Lahore Royal Teak Garden Dining Set',
    slug: 'lahore-royal-teak-garden-dining-set',
    description: 'A robust garden feast dining set crafted completely from premium seasoned Burmese Teak. Naturally rich in oils that repel moisture and wood insects. Includes an extendable table and 6 foldable armchairs complete with weather-resistant Sunbrella cushions.',
    category: 'outdoor',
    subcategory: 'Outdoor Furniture',
    priceEstimate: 'PKR 180,000 - 250,000',
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Grade-A Natural Seasoned Burmese Teak Wood',
    dimensions: 'Table: 72"L x 36"W x 30"H | Chairs: 22"W x 22"D x 36"H',
    availableColors: ['Natural Teak Honey Brown', 'Weathered Antique Oak'],
    availableSizes: ['6-Seater Garden Set', '8-Seater Patio Grand Set', '4-Seater Intimate Lounge Set'],
    finishOptions: ['Organic Protective Teak Oil Sealer', 'Unfinished Raw Luxury Sanded Teak'],
    warranty: '10 Years Weatherproof Solid Timber Wood Warranty',
    careInstructions: [
      'Clean wood with light soapy water using a soft bristle brush.',
      'Apply fresh Teak Sealer once a year to preserve honey gold colors, or let age naturally to an elegant silver-grey hue.',
      'Cushion covers are machine washable.'
    ],
    features: [
      'Constructed with natural marine-grade anti-rust stainless steel fittings',
      'Features a center 2-inch pre-drilled garden umbrella hole',
      'Chair cushions upholstered in 100% waterproof stain-proof Sunbrella fabric'
    ],
    rating: 4.8,
    reviewsCount: 14
  },

  // CUSTOM WOOD
  {
    id: 'p13',
    name: 'Classic Sheesham Main Entrance Double Door',
    slug: 'classic-sheesham-main-entrance-double-door',
    description: 'Welcome guests with pure grandeur. This massive solid core door is custom manufactured from premium seasoned Sheesham wood. Adorned with deep classical hand-carvings and heavy brass security locks.',
    category: 'custom',
    subcategory: 'Wooden Doors',
    priceEstimate: 'PKR 160,000 - 240,000',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    ],
    material: '100% Solid Seasoned Sheesham Wood Core',
    dimensions: '72"W (Double Door) x 84"H x 2.25" Thickness',
    availableColors: ['Walnut Stain Clear Wood Gloss', 'Dark Mahogany Carving Highlight', 'Rich Teak Stain'],
    availableSizes: ['Custom Made to Order matching exact frame sizes'],
    finishOptions: ['High Gloss Weatherproof Marine Lacquer', 'Matte Architectural Shield'],
    warranty: '15 Years Anti-Warping & Anti-Cracking Solid Wood Warranty',
    careInstructions: [
      'Clean with specialized protective wood polish.',
      'Check hinges every 2 years; apply lubricant as necessary.',
      'Wipe down solid brass handle handles with jewelry cloth.'
    ],
    features: [
      'Dual active gasket lines for absolute sound and dust insulating',
      'Massive 2.25 inch thick solid core block wood structure',
      'Stunning hand-sculpted Islamic geometrical geometric center medallion'
    ],
    rating: 5.0,
    reviewsCount: 17,
    isNew: true
  },
  {
    id: 'p14',
    name: 'Bespoke Handmade Walnut Wood Paneling',
    slug: 'bespoke-handmade-walnut-wood-paneling',
    description: 'Transform your drawing room or hotel lobby walls with custom luxury 3D wood paneling. Crafted from hand-selected pieces of seasoned walnut wood, showing spectacular grains and organic warm texture.',
    category: 'custom',
    subcategory: 'Wooden Panels',
    priceEstimate: 'PKR 1,500 - 2,500 per Sq.Ft.',
    images: [
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1000&q=80'
    ],
    material: 'Premium Solid Walnut Wood Slices on dense Pine base',
    dimensions: 'Custom Manufactured to fit Wall Dimensions',
    availableColors: ['Natural Warm Walnut', 'Golden Honey Oak Accent', 'Smoked Espresso Charcoal'],
    availableSizes: ['Custom Sized Panels'],
    finishOptions: ['Varnish Coating', 'Fire-Retardant Matte Polyurethane finish'],
    warranty: '10 Years Structural Panel Warping Warranty',
    careInstructions: [
      'Dust panels with dry micro-fiber feather duster.',
      'Do not apply pressurized water washing.'
    ],
    features: [
      'Superior thermal and acoustic sound absorption values',
      'Staggered block thickness designs creates elegant 3D light shadows',
      'Sourced from certified eco-friendly timber farms in Pakistan'
    ],
    rating: 4.9,
    reviewsCount: 12
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(p => p.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  // Case insensitive match to prevent string typos
  return PRODUCTS.filter(p => p.subcategory.toLowerCase() === subcategory.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isBestSeller || p.isNew);
}
