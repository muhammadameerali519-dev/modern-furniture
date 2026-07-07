import { useState, useEffect } from 'react';
import { PRODUCTS, CATEGORIES, ALL_SUBCATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, Search, RotateCcw, HelpCircle, AlertCircle } from 'lucide-react';

interface ShopProps {
  currentPath: string;
}

export default function Shop({ currentPath }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Parse hash parameters like ?search=sofa or ?filter=new on load/hash change
  useEffect(() => {
    const hash = window.location.hash;
    
    // Check for direct subcategory path e.g. #/subcategory/Sofa%2520Sets
    if (hash.startsWith('#/subcategory/')) {
      const sub = decodeURIComponent(hash.substring('#/subcategory/'.length));
      setSelectedSubcategory(sub);
      setSelectedCategory('all');
      return;
    }

    // Check for direct category path e.g. #/category/living-room
    if (hash.startsWith('#/category/')) {
      const cat = hash.substring('#/category/'.length);
      setSelectedCategory(cat);
      setSelectedSubcategory('all');
      return;
    }

    // Standard hash query parameters
    const queryIndex = hash.indexOf('?');
    if (queryIndex !== -1) {
      const queryString = hash.substring(queryIndex + 1);
      const params = new URLSearchParams(queryString);
      
      const search = params.get('search');
      if (search) {
        setSearchQuery(search);
      }

      const filterType = params.get('filter');
      if (filterType === 'best-seller') {
        setSortBy('best-seller');
      } else if (filterType === 'new') {
        setSortBy('new');
      }
    } else {
      // Clear query-specific states if navigating to pure shop
      if (hash === '#/shop') {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedSubcategory('all');
        setSelectedMaterial('all');
        setSortBy('rating');
      }
    }
  }, [currentPath]);

  const materialsList = [
    { name: 'All Timbers', value: 'all' },
    { name: 'Solid Sheesham (Tali)', value: 'sheesham' },
    { name: 'Imported Oak', value: 'oak' },
    { name: 'American Walnut', value: 'walnut' },
    { name: 'Burmese Teak', value: 'teak' }
  ];

  // Reset all filters helper
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedMaterial('all');
    setSearchQuery('');
    setSortBy('rating');
    window.location.hash = '#/shop';
  };

  // Filtering Logic
  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Category Filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // 2. Subcategory Filter
    if (selectedSubcategory !== 'all' && product.subcategory.toLowerCase() !== selectedSubcategory.toLowerCase()) {
      return false;
    }

    // 3. Material Filter
    if (selectedMaterial !== 'all') {
      const pMat = product.material.toLowerCase();
      if (!pMat.includes(selectedMaterial)) {
        return false;
      }
    }

    // 4. Search Query Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchMat = product.material.toLowerCase().includes(query);
      const matchSub = product.subcategory.toLowerCase().includes(query);
      
      if (!matchName && !matchDesc && !matchMat && !matchSub) {
        return false;
      }
    }

    return true;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    if (sortBy === 'reviews') {
      return b.reviewsCount - a.reviewsCount;
    }
    if (sortBy === 'best-seller') {
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    }
    if (sortBy === 'new') {
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-12">
      
      {/* Page Title & Breadcrumb Header */}
      <div className="border-b border-stone-200 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs text-stone-500 font-mono">
            <a href="#/" className="hover:text-[#D4AF37]">HOME</a>
            <span>/</span>
            <span className="text-stone-400">SHOP</span>
            {selectedCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-[#D4AF37] uppercase">{selectedCategory}</span>
              </>
            )}
            {selectedSubcategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-[#D4AF37] uppercase">{selectedSubcategory}</span>
              </>
            )}
          </div>
          <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-4xl font-semibold tracking-tight">
            {selectedSubcategory !== 'all' ? selectedSubcategory : selectedCategory !== 'all' ? CATEGORIES.find(c => c.id === selectedCategory)?.name : 'The Master Collection'}
          </h1>
          <p className="text-stone-500 text-xs">
            Displaying {sortedProducts.length} premium handcrafted furniture pieces
          </p>
        </div>

        {/* Dynamic Controls Header */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase px-4 py-2.5 rounded-sm flex items-center space-x-1.5 shadow-sm hover:bg-stone-50"
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-stone-500 text-xs uppercase font-mono hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase px-3 py-2 focus:outline-none focus:border-[#D4AF37] cursor-pointer shadow-sm rounded-sm"
            >
              <option value="rating">Highly Rated ★</option>
              <option value="reviews">Most Popular</option>
              <option value="best-seller">Best Sellers First</option>
              <option value="new">New Releases</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* FILTERS COLUMN - Desktop Left */}
        <div className={`lg:block space-y-8 ${showMobileFilters ? 'block' : 'hidden'} bg-white lg:bg-transparent p-6 lg:p-0 border lg:border-0 border-stone-200 rounded-sm shadow-md lg:shadow-none`}>
          
          {/* Active Filters Summary (If active) */}
          {(selectedCategory !== 'all' || selectedSubcategory !== 'all' || selectedMaterial !== 'all' || searchQuery !== '') && (
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/10 p-4 rounded-sm space-y-3">
              <span className="text-[10px] text-[#D4AF37] font-mono tracking-wider uppercase font-bold block">Active Filters</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCategory !== 'all' && (
                  <span className="bg-stone-50 text-stone-600 text-[10px] px-2 py-1 rounded-sm border border-stone-200 shadow-sm">
                    Category: {selectedCategory}
                  </span>
                )}
                {selectedSubcategory !== 'all' && (
                  <span className="bg-stone-50 text-stone-600 text-[10px] px-2 py-1 rounded-sm border border-stone-200 shadow-sm">
                    Sub: {selectedSubcategory}
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span className="bg-stone-50 text-stone-600 text-[10px] px-2 py-1 rounded-sm border border-stone-200 shadow-sm">
                    Timber: {selectedMaterial}
                  </span>
                )}
                {searchQuery !== '' && (
                  <span className="bg-stone-50 text-stone-600 text-[10px] px-2 py-1 rounded-sm border border-stone-200 truncate max-w-xs shadow-sm">
                    "{searchQuery}"
                  </span>
                )}
              </div>
              <button
                onClick={handleResetFilters}
                className="text-[10px] text-[#D4AF37] hover:text-[#B8962E] font-bold uppercase tracking-wider flex items-center space-x-1 hover:underline"
              >
                <RotateCcw size={10} />
                <span>Clear All Filters</span>
              </button>
            </div>
          )}

          {/* Search Bar filter */}
          <div className="space-y-3">
            <h4 className="text-[#1A1A1A] font-serif font-medium text-sm tracking-wide border-b border-stone-200 pb-2 uppercase">Search Keywords</h4>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sofas, beds..."
                className="w-full bg-white border border-stone-200 text-[#1A1A1A] rounded-sm px-4 py-2 text-xs focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              <Search className="absolute right-3 top-2.5 text-stone-400" size={13} />
            </div>
          </div>

          {/* Room Categories Selector */}
          <div className="space-y-3">
            <h4 className="text-[#1A1A1A] font-serif font-medium text-sm tracking-wide border-b border-stone-200 pb-2 uppercase">Room Collections</h4>
            <div className="flex flex-col space-y-1 text-xs">
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedSubcategory('all'); }}
                className={`text-left py-1.5 px-2 rounded-sm transition ${selectedCategory === 'all' ? 'text-[#D4AF37] bg-stone-50 font-bold' : 'text-stone-600 hover:text-[#D4AF37]'}`}
              >
                All Furniture Sections
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSelectedSubcategory('all'); }}
                  className={`text-left py-1.5 px-2 rounded-sm transition flex justify-between items-center ${selectedCategory === cat.id ? 'text-[#D4AF37] bg-stone-50 font-bold' : 'text-stone-600 hover:text-[#D4AF37]'}`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-stone-400 font-mono">({cat.itemCount})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Timber Selection filter */}
          <div className="space-y-3">
            <h4 className="text-[#1A1A1A] font-serif font-medium text-sm tracking-wide border-b border-stone-200 pb-2 uppercase">Wood & Timbers</h4>
            <div className="flex flex-col space-y-1 text-xs">
              {materialsList.map((mat) => (
                <button
                  key={mat.value}
                  onClick={() => setSelectedMaterial(mat.value)}
                  className={`text-left py-1.5 px-2 rounded-sm transition ${selectedMaterial === mat.value ? 'text-[#D4AF37] bg-stone-50 font-bold' : 'text-stone-600 hover:text-[#D4AF37]'}`}
                >
                  {mat.name}
                </button>
              ))}
            </div>
          </div>

          {/* All Subcategories selector dropdown/list for precise targeting */}
          <div className="space-y-3">
            <h4 className="text-[#1A1A1A] font-serif font-medium text-sm tracking-wide border-b border-stone-200 pb-2 uppercase">Subcategory Search</h4>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full bg-white border border-stone-200 text-stone-700 text-xs px-3 py-2 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="all">All Subcategories</option>
              {ALL_SUBCATEGORIES.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* Fast local delivery info panel */}
          <div className="bg-stone-50 p-4 border border-stone-200 text-xs space-y-2 rounded-sm">
            <span className="font-bold text-[#D4AF37] uppercase text-[9px] tracking-wider block">🚗 Local Gujranwala Delivery</span>
            <p className="text-stone-500 leading-relaxed font-light">
              We operate our own heavy transit logistics trucks ensuring scratch-free assembly, layout setups and deliveries straight to Citi Housing, DC Colony, Master City and all suburbs of Gujranwala.
            </p>
          </div>
        </div>

        {/* PRODUCTS COLUMN - Desktop Right */}
        <div className="lg:col-span-3 space-y-10">
          
          {/* Main Grid list */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((prod) => (
                <div key={prod.id} className="h-full">
                  <ProductCard product={prod} />
                </div>
              ))}
            </div>
          ) : (
            // No Products State
            <div className="bg-white border border-stone-200 rounded-sm p-16 text-center max-w-xl mx-auto space-y-6 shadow-sm">
              <div className="flex justify-center text-[#D4AF37]">
                <AlertCircle size={48} className="stroke-[1.5]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[#1A1A1A] font-semibold text-lg">No Matching Items Found</h3>
                <p className="text-stone-500 text-xs leading-relaxed max-w-sm mx-auto">
                  We currently do not have stock products matching your active filters. However, we can build absolutely any furniture layout, bed size, or sofa style bespoke to order!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleResetFilters}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-5 py-2.5 rounded-sm transition uppercase tracking-wider"
                >
                  Reset Filters
                </button>
                <a
                  href="#/custom"
                  className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-xs font-bold px-5 py-2.5 rounded-sm transition uppercase tracking-wider text-center"
                >
                  Request Custom Build
                </a>
              </div>
            </div>
          )}

          {/* Quote Banner */}
          {sortedProducts.length > 0 && (
            <div className="bg-white border border-stone-200 rounded-sm p-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left shadow-sm">
              <div>
                <h4 className="font-serif text-[#1A1A1A] font-medium text-base">Don't See Your Exact Dimensions?</h4>
                <p className="text-stone-500 text-xs mt-1">We customize all beds, wardrobes, dining sets and consoles to match your room sizes.</p>
              </div>
              <a
                href="#/custom"
                className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition shrink-0"
              >
                Plan Custom Order
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
