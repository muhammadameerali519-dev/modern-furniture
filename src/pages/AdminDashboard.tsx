import React, { useState, useEffect } from 'react';
import { Inquiry } from '../types';
import { FileText, Download, Check, Trash2, Search, LayoutDashboard, Clock, CheckCircle2, UserCheck, AlertTriangle, Lock, KeyRound, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [passcode, setPasscode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(() => {
    return sessionStorage.getItem('modern_furniture_admin_auth') === 'true';
  });
  const [authError, setAuthError] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'modern334455') {
      setIsAuthorized(true);
      sessionStorage.setItem('modern_furniture_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem('modern_furniture_admin_auth');
    setPasscode('');
  };

  // Load inquiries and pre-seed with premium historical data if empty
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('modern_furniture_inquiries') || '[]');
    
    if (localData.length === 0) {
      const mockHistorical: Inquiry[] = [
        {
          id: 'inq_1',
          fullName: 'Chaudhary Umar Farooq',
          phoneNumber: '+92 321 5566778',
          city: 'Gujranwala',
          productName: 'Royal Chesterfield Velvet Sofa Set',
          quantity: 1,
          budget: 'PKR 250,000 - 400,000',
          message: 'Upholstery should be emerald green. Delivery inside Citi Housing Phase 1, Gujranwala.',
          date: 'July 05, 2026',
          status: 'pending'
        },
        {
          id: 'inq_2',
          fullName: 'Dr. Sameera Khan',
          phoneNumber: '+92 300 9876543',
          city: 'Lahore',
          productName: 'Majestic Gujranwala Tufted Bridal Bedset',
          quantity: 1,
          budget: 'PKR 400k+ (Executive Luxury)',
          message: 'Requested a full bedroom set including customized sliding wardrobe. Scheduling measurement on site.',
          date: 'June 28, 2026',
          status: 'contacted'
        },
        {
          id: 'inq_3',
          fullName: 'Mian Bilal Ahmad',
          phoneNumber: '+92 333 4567890',
          city: 'Gujranwala',
          productName: 'Signature Artisan Sheesham 8-Seater Dining Set',
          quantity: 1,
          budget: 'PKR 250,000 - 400,000',
          message: 'Standard natural glossy wood polish. Assembled and inspected successfully inside DC Colony villa.',
          date: 'June 15, 2026',
          status: 'completed'
        }
      ];
      localStorage.setItem('modern_furniture_inquiries', JSON.stringify(mockHistorical));
      localData = mockHistorical;
    }
    
    setInquiries(localData);
  }, []);

  // Save changes helper
  const saveInquiries = (updatedList: Inquiry[]) => {
    setInquiries(updatedList);
    localStorage.setItem('modern_furniture_inquiries', JSON.stringify(updatedList));
  };

  // Toggle Inquiry Status cycle: pending -> contacted -> completed -> pending
  const handleToggleStatus = (id: string) => {
    const updated = inquiries.map((inq) => {
      if (inq.id === id) {
        let nextStatus: Inquiry['status'] = 'pending';
        if (inq.status === 'pending') nextStatus = 'contacted';
        else if (inq.status === 'contacted') nextStatus = 'completed';
        return { ...inq, status: nextStatus };
      }
      return inq;
    });
    saveInquiries(updated);
  };

  // Delete an inquiry
  const handleDeleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this customer inquiry from the database?')) {
      const filtered = inquiries.filter(inq => inq.id !== id);
      saveInquiries(filtered);
    }
  };

  // Clear all inquiries
  const handleClearAll = () => {
    if (window.confirm('WARNING: Are you sure you want to purge the entire inquiries database? This cannot be undone.')) {
      saveInquiries([]);
    }
  };

  // CSV Exporter Utility
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      alert('Inquiries database is currently empty.');
      return;
    }

    const headers = ['ID', 'Date', 'Full Name', 'Phone Number', 'City', 'Product Requested', 'Quantity', 'Budget', 'Status', 'Message'];
    const rows = inquiries.map(inq => [
      inq.id,
      inq.date,
      `"${inq.fullName.replace(/"/g, '""')}"`,
      inq.phoneNumber,
      inq.city,
      `"${inq.productName.replace(/"/g, '""')}"`,
      inq.quantity,
      `"${inq.budget}"`,
      inq.status.toUpperCase(),
      `"${inq.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `modern_furniture_inquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Analytics Metrics calculations
  const totalInquiries = inquiries.length;
  const pendingCount = inquiries.filter(i => i.status === 'pending').length;
  const contactedCount = inquiries.filter(i => i.status === 'contacted').length;
  const completedCount = inquiries.filter(i => i.status === 'completed').length;

  // Filter inquiries listing
  const filteredInquiries = inquiries.filter((inq) => {
    // Status Filter
    if (statusFilter !== 'all' && inq.status !== statusFilter) {
      return false;
    }
    // Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchName = inq.fullName.toLowerCase().includes(query);
      const matchPhone = inq.phoneNumber.includes(query);
      const matchProd = inq.productName.toLowerCase().includes(query);
      const matchMsg = inq.message.toLowerCase().includes(query);
      
      if (!matchName && !matchPhone && !matchProd && !matchMsg) {
        return false;
      }
    }
    return true;
  });

  if (!isAuthorized) {
    return (
      <div className="max-w-md mx-auto px-4 py-36 space-y-8">
        <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-md text-center space-y-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-[#F9F7F5] border border-stone-200 text-[#D4AF37] flex items-center justify-center shadow-sm">
            <Lock size={20} />
          </div>
          
          <div className="space-y-2">
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block font-bold">Showroom Management</span>
            <h1 className="font-serif text-[#1A1A1A] text-2xl font-bold">Owner Back Office</h1>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              Enter the security passcode to access the customer inquiries, quote logs, and system database.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-stone-400 uppercase font-mono block text-[9px] tracking-wider">Passcode Credentials</label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white border border-stone-200 rounded-sm text-[#1A1A1A] px-4 py-3 focus:outline-none focus:border-[#D4AF37] text-sm text-center tracking-widest font-mono"
              />
            </div>

            {authError && (
              <p className="text-red-600 text-xs font-medium text-center bg-red-50 border border-red-100 py-2 rounded-sm">
                ⚠️ {authError}
              </p>
            )}

            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold tracking-widest text-xs uppercase py-3 w-full rounded-sm transition shadow-md cursor-pointer flex items-center justify-center space-x-2"
            >
              <KeyRound size={13} />
              <span>Unlock Dashboard</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-10">
      
      {/* Page Title & Back Bar */}
      <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="space-y-1">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block font-bold">Showroom Backoffice</span>
          <h1 className="font-serif text-[#1A1A1A] text-3xl font-semibold flex items-center">
            <LayoutDashboard className="mr-2 text-[#D4AF37]" /> Admin Command Dashboard
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExportCSV}
            className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 text-xs font-semibold uppercase px-4 py-2.5 rounded-sm flex items-center space-x-2 transition cursor-pointer shadow-sm"
          >
            <Download size={14} />
            <span>Export database CSV</span>
          </button>
          <button
            onClick={handleClearAll}
            className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold uppercase px-4 py-2.5 rounded-sm flex items-center space-x-1.5 transition cursor-pointer shadow-sm"
          >
            <Trash2 size={14} />
            <span>Purge Database</span>
          </button>
          <button
            onClick={handleLogout}
            className="bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 text-xs font-semibold uppercase px-4 py-2.5 rounded-sm flex items-center space-x-1.5 transition cursor-pointer shadow-sm"
          >
            <LogOut size={14} className="text-[#D4AF37]" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* METRIC ANALYTICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Inquiries card */}
        <div className="bg-white border border-stone-200 p-6 rounded-sm space-y-2 relative overflow-hidden shadow-sm">
          <div className="absolute right-4 top-4 text-stone-200">
            <FileText size={48} className="stroke-[1.5]" />
          </div>
          <span className="text-stone-400 uppercase font-mono text-[9px] tracking-wider block font-bold">Total Inquiries</span>
          <span className="text-[#1A1A1A] text-3xl font-bold font-mono block">{totalInquiries}</span>
          <span className="text-[10px] text-stone-500 block font-light">Quotes & custom order logs</span>
        </div>

        {/* Pending card */}
        <div className="bg-amber-50/40 border border-[#D4AF37]/30 p-6 rounded-sm space-y-2 relative overflow-hidden shadow-sm">
          <div className="absolute right-4 top-4 text-amber-200/50">
            <Clock size={48} className="stroke-[1.5]" />
          </div>
          <span className="text-[#D4AF37] uppercase font-mono text-[9px] tracking-wider block font-bold">Pending Review</span>
          <span className="text-[#D4AF37] text-3xl font-bold font-mono block">{pendingCount}</span>
          <span className="text-[10px] text-stone-500 block font-light">Require immediate call-back</span>
        </div>

        {/* Contacted Card */}
        <div className="bg-blue-50/40 border border-blue-200 p-6 rounded-sm space-y-2 relative overflow-hidden shadow-sm">
          <div className="absolute right-4 top-4 text-blue-200/50">
            <UserCheck size={48} className="stroke-[1.5]" />
          </div>
          <span className="text-blue-600 uppercase font-mono text-[9px] tracking-wider block font-bold">In Negotiation</span>
          <span className="text-blue-600 text-3xl font-bold font-mono block">{contactedCount}</span>
          <span className="text-[10px] text-stone-500 block font-light">Catalogs / prices transferred</span>
        </div>

        {/* Completed Card */}
        <div className="bg-emerald-50/40 border border-emerald-200 p-6 rounded-sm space-y-2 relative overflow-hidden shadow-sm">
          <div className="absolute right-4 top-4 text-emerald-200/50">
            <CheckCircle2 size={48} className="stroke-[1.5]" />
          </div>
          <span className="text-emerald-600 uppercase font-mono text-[9px] tracking-wider block font-bold">Orders Fulfilled</span>
          <span className="text-emerald-600 text-3xl font-bold font-mono block">{completedCount}</span>
          <span className="text-[10px] text-stone-500 block font-light">Polished & installed inside estates</span>
        </div>

      </div>

      {/* SEARCH AND FILTERS TOOLBAR */}
      <div className="bg-[#F9F7F5] border border-stone-200 p-5 rounded-sm flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search names, phone, products..."
            className="w-full bg-white border border-stone-200 text-[#1A1A1A] rounded-sm px-4 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
          />
          <Search className="absolute right-3 top-2.5 text-stone-400" size={13} />
        </div>

        {/* Status filters */}
        <div className="flex space-x-2 w-full md:w-auto overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
          {['all', 'pending', 'contacted', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition cursor-pointer shrink-0 border shadow-sm ${
                statusFilter === status
                  ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                  : 'bg-white text-stone-500 border-stone-200 hover:text-[#D4AF37]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

      </div>

      {/* DATABASE INQUIRIES LIST TABLE */}
      <div className="border border-stone-200 bg-white rounded-sm overflow-hidden shadow-sm">
        {filteredInquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs text-stone-600">
              <thead>
                <tr className="bg-[#F9F7F5] text-stone-500 font-mono border-b border-stone-200 uppercase text-[9px] tracking-widest">
                  <th className="py-4 px-6">Customer Particulars</th>
                  <th className="py-4 px-6">Product Requested</th>
                  <th className="py-4 px-6">Details / Message</th>
                  <th className="py-4 px-6">Budget / Date</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredInquiries.map((inq) => {
                  
                  // Color codes for status badges
                  let statusStyle = '';
                  if (inq.status === 'pending') statusStyle = 'bg-amber-50 text-[#D4AF37] border-amber-200';
                  else if (inq.status === 'contacted') statusStyle = 'bg-blue-50 text-blue-600 border-blue-200';
                  else if (inq.status === 'completed') statusStyle = 'bg-emerald-50 text-emerald-600 border-emerald-200';

                  return (
                    <tr key={inq.id} className="hover:bg-stone-50/50 transition-colors">
                      
                      {/* Customer Name, Phone */}
                      <td className="py-5 px-6 space-y-1">
                        <span className="text-[#1A1A1A] font-bold text-sm block">{inq.fullName}</span>
                        <a href={`tel:${inq.phoneNumber}`} className="text-[#D4AF37] hover:underline block font-mono font-medium">
                          {inq.phoneNumber}
                        </a>
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold block">
                          📍 {inq.city}
                        </span>
                      </td>

                      {/* Product details */}
                      <td className="py-5 px-6 space-y-1">
                        <span className="text-[#1A1A1A] font-medium block">{inq.productName}</span>
                        <span className="text-[10px] text-stone-400 block font-mono">Qty: {inq.quantity}</span>
                      </td>

                      {/* Message / Details */}
                      <td className="py-5 px-6 max-w-xs">
                        <p className="text-stone-500 font-light leading-relaxed whitespace-pre-line truncate-3-lines">
                          {inq.message}
                        </p>
                      </td>

                      {/* Date, Budget */}
                      <td className="py-5 px-6 space-y-1">
                        <span className="text-stone-400 block font-mono">{inq.date}</span>
                        <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-medium">Est. Budget</span>
                        <span className="text-[#1A1A1A] font-mono font-bold block">{inq.budget}</span>
                      </td>

                      {/* Status Toggle control */}
                      <td className="py-5 px-6 text-center">
                        <button
                          onClick={() => handleToggleStatus(inq.id)}
                          className={`px-3 py-1 rounded-sm border text-[10px] font-bold uppercase tracking-wider cursor-pointer shadow-sm transition-colors ${statusStyle}`}
                          title="Click to cycle status"
                        >
                          {inq.status}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-5 px-6 text-center">
                        <div className="flex justify-center items-center space-x-2">
                          <button
                            onClick={() => handleToggleStatus(inq.id)}
                            className="p-1.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-sm text-stone-500 hover:text-[#D4AF37] transition cursor-pointer shadow-sm"
                            title="Update Status Cycle"
                          >
                            <Check size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="p-1.5 bg-white hover:bg-red-50 border border-stone-200 rounded-sm text-stone-400 hover:text-red-600 transition cursor-pointer shadow-sm"
                            title="Delete Inquiry"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          // Empty state
          <div className="p-16 text-center space-y-4 max-w-md mx-auto">
            <div className="flex justify-center text-stone-300">
              <AlertTriangle size={48} />
            </div>
            <div>
              <h3 className="font-serif text-[#1A1A1A] font-semibold text-lg">No Logged Inquiries</h3>
              <p className="text-stone-500 text-xs font-light leading-relaxed">
                There are currently no customer quotes, form letters, or custom order requests logged in the local database matching the filter parameters.
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
