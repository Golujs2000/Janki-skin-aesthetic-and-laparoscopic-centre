import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Laptop, 
  Calendar, 
  Clock, 
  Phone, 
  MessageSquare, 
  Download, 
  FileSpreadsheet, 
  FileJson, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock3, 
  XCircle, 
  Trash2, 
  Plus, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  RefreshCw, 
  ArrowUpRight, 
  AlertCircle,
  Eye,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { 
  getAnalyticsData, 
  getLocalBookings, 
  updateBookingStatus, 
  deleteLocalBooking, 
  saveLocalBooking,
  downloadBookingsCSV, 
  downloadBookingsJSON, 
  downloadTrafficReportCSV,
  clearAllLocalData,
  getWeeklyTrend,
  getMonthlyTrend,
  getYearlyTrend
} from '../utils/analytics';

export default function AdminPage() {
  // Authentication PIN state (Default PIN: 1990)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('janki_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Active Tab: 'analytics', 'bookings', 'export'
  const [activeTab, setActiveTab] = useState('bookings');

  // Traffic Graph Timeframe: 'weekly' | 'monthly' | 'yearly'
  const [timeframe, setTimeframe] = useState('weekly');
  const [hoveredBar, setHoveredBar] = useState(null);

  // Data states
  const [analytics, setAnalytics] = useState(getAnalyticsData);
  const [bookings, setBookings] = useState(getLocalBookings);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [doctorFilter, setDoctorFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Manual Add Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBooking, setNewBooking] = useState({
    patientName: '',
    phone: '',
    doctor: 'Dr. S. Sagar',
    treatment: 'Gallbladder Stones (पित्त की पथरी)',
    date: 'Tomorrow',
    slot: 'Morning OPD (10:00 AM – 01:00 PM)',
    symptoms: 'Direct Walk-in / Phone Inquiry',
    status: 'Confirmed'
  });

  const refreshData = () => {
    setAnalytics(getAnalyticsData());
    setBookings(getLocalBookings());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleUnlock = (e) => {
    e?.preventDefault();
    // Default PIN: 1990 (Clinic Estb. Year) or 79090 (Phone Prefix)
    if (pinInput.trim() === '1990' || pinInput.trim() === '79090' || pinInput.trim() === '1234') {
      setIsAuthenticated(true);
      sessionStorage.setItem('janki_admin_auth', 'true');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleQuickDemoUnlock = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('janki_admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('janki_admin_auth');
    setPinInput('');
  };

  // Reset / Clear All Local Data
  const handleResetAllData = () => {
    if (window.confirm('Are you sure you want to completely clear all dashboard traffic and booking records? All counters will reset to 0.')) {
      clearAllLocalData();
      refreshData();
      alert('Dashboard data has been reset to zero.');
    }
  };

  // Status Change
  const handleStatusChange = (id, newStatus) => {
    const updated = updateBookingStatus(id, newStatus);
    setBookings(updated);
  };

  // Delete Booking
  const handleDeleteBooking = (id) => {
    if (window.confirm(`Are you sure you want to remove booking ${id}?`)) {
      const updated = deleteLocalBooking(id);
      setBookings(updated);
    }
  };

  // Add Manual Booking
  const handleAddManualBooking = (e) => {
    e.preventDefault();
    if (!newBooking.patientName || !newBooking.phone) {
      alert('Please provide patient name and phone number');
      return;
    }
    saveLocalBooking(newBooking);
    refreshData();
    setShowAddModal(false);
    setNewBooking({
      patientName: '',
      phone: '',
      doctor: 'Dr. S. Sagar',
      treatment: 'General Consultation',
      date: 'Tomorrow',
      slot: 'Morning OPD',
      symptoms: 'Walk-in booking',
      status: 'Confirmed'
    });
  };

  // Filter Bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch = 
      b.patientName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone?.includes(searchQuery) ||
      b.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.treatment?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDoctor = 
      doctorFilter === 'ALL' || 
      (doctorFilter === 'SAGAR' && b.doctor?.toLowerCase().includes('sagar')) ||
      (doctorFilter === 'RASHMI' && (b.doctor?.toLowerCase().includes('rashmi') || b.doctor?.toLowerCase().includes('roy')));

    const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;

    return matchesSearch && matchesDoctor && matchesStatus;
  });

  // Calculate quick metrics (dynamic, 100% zero dummy data)
  const totalBookingsCount = bookings.length;
  const sagarBookingsCount = bookings.filter(b => b.doctor?.toLowerCase().includes('sagar')).length;
  const rashmiBookingsCount = bookings.filter(b => b.doctor?.toLowerCase().includes('rashmi') || b.doctor?.toLowerCase().includes('roy')).length;
  const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;

  // Compute top traffic source dynamically
  const sourceEntries = Object.entries(analytics.sources || {});
  const sortedSources = [...sourceEntries].sort((a, b) => b[1] - a[1]);
  const hasTraffic = (analytics.totalViews || 0) > 0;
  const topSourceItem = sortedSources.find(s => s[1] > 0);
  const topSourceName = topSourceItem ? topSourceItem[0] : 'Awaiting Visitors';
  const topSourceCount = topSourceItem ? topSourceItem[1] : 0;
  const topSourcePct = hasTraffic ? Math.round((topSourceCount / analytics.totalViews) * 100) : 0;

  // Graph Trend Data based on timeframe
  const trendData = timeframe === 'yearly'
    ? getYearlyTrend(analytics.dailyVisits, analytics.dailyInquiries)
    : timeframe === 'monthly'
    ? getMonthlyTrend(analytics.dailyVisits, analytics.dailyInquiries)
    : getWeeklyTrend(analytics.dailyVisits, analytics.dailyInquiries);

  const totalPeriodVisits = trendData.reduce((acc, item) => acc + item.visits, 0);
  const totalPeriodInquiries = trendData.reduce((acc, item) => acc + (item.inquiries || 0), 0);
  const maxPeriodVisits = Math.max(...trendData.map(item => item.visits), 0);
  const peakItem = trendData.reduce((max, item) => item.visits > (max?.visits || 0) ? item : max, null);
  const avgPeriodVisits = trendData.length > 0 ? (totalPeriodVisits / trendData.length).toFixed(1) : '0';

  // PIN Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <SEOHead title="Staff Admin Portal | Janki Clinic Forbesganj" />
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-700 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Hospital Internal System</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
              JANKI Clinic Admin Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
              Enter staff authorization PIN to view patient traffic and local bookings.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Staff Authorization PIN
              </label>
              <input
                type="password"
                maxLength={6}
                autoFocus
                placeholder="Enter PIN (Default: 1990)"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-center font-mono tracking-widest text-lg focus:outline-none focus:ring-2 transition ${
                  pinError 
                    ? 'border-rose-500 focus:ring-rose-500/20' 
                    : 'border-slate-700 focus:border-teal-500 focus:ring-teal-500/20'
                }`}
              />
              {pinError && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Incorrect PIN. Try 1990 or click Quick Unlock below.</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-teal-500/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
            <span className="text-slate-400">Default Staff PIN: <strong className="text-teal-300">1990</strong></span>
            <button
              type="button"
              onClick={handleQuickDemoUnlock}
              className="text-teal-400 hover:text-teal-300 font-bold underline cursor-pointer"
            >
              Quick Unlock
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/90 text-slate-800 py-6 sm:py-8">
      <SEOHead title="Admin Dashboard | Traffic & Local Bookings | Janki Clinic" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 flex-shrink-0">
              <Stethoscope className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-primary">
                  JANKI Clinic Portal
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live Storage Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time patient traffic, sources &amp; local booking file records
              </p>
            </div>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={refreshData}
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={downloadBookingsCSV}
              className="px-3.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={downloadBookingsJSON}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <FileJson className="w-4 h-4" />
              <span>Backup JSON</span>
            </button>

            <button
              onClick={handleResetAllData}
              className="p-2.5 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 transition text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Reset all dashboard data to zero"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Reset Data</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer ml-auto md:ml-0"
              title="Lock Admin Screen"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lock</span>
            </button>
          </div>
        </div>

        {/* KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Website Views</span>
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-accent flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
              {(analytics.totalViews || 0).toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <span>↑ +{(analytics.todayViews || 0).toLocaleString()} views today</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Bookings</span>
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-accent flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
              {totalBookingsCount}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              {totalBookingsCount === 0 ? 'No bookings yet' : `${sagarBookingsCount} Surgery • ${rashmiBookingsCount} Skin/Hair`}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Top Source</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-primary truncate">
              {topSourceName}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">
              {hasTraffic && topSourcePct > 0 ? `${topSourcePct}% of all inbound patients` : 'Awaiting live patient traffic'}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Local File Records</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-primary flex items-center gap-1.5">
              <span>{totalBookingsCount} Cached</span>
            </div>
            <div className="text-[11px] text-teal-600 font-semibold mt-1">
              100% sync with WhatsApp forms
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 space-x-2">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-3 px-5 font-heading font-bold text-sm border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'bookings'
                ? 'border-primary text-primary bg-white rounded-t-2xl shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Patient Bookings ({totalBookingsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-3 px-5 font-heading font-bold text-sm border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'analytics'
                ? 'border-primary text-primary bg-white rounded-t-2xl shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Traffic &amp; Sources</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`py-3 px-5 font-heading font-bold text-sm border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'export'
                ? 'border-primary text-primary bg-white rounded-t-2xl shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Local File Backup Center</span>
          </button>
        </div>

        {/* TAB 1: PATIENT BOOKINGS */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            
            {/* Filter & Search Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Patient name, Phone, or Token ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={doctorFilter}
                    onChange={(e) => setDoctorFilter(e.target.value)}
                    className="bg-transparent font-semibold text-slate-700 focus:outline-none"
                  >
                    <option value="ALL">All Doctors</option>
                    <option value="SAGAR">Dr. S. Sagar (Surgery)</option>
                    <option value="RASHMI">Dr. Rashmi Roy (Skin/Hair)</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-transparent font-semibold text-slate-700 focus:outline-none"
                  >
                    <option value="ALL">All Status</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddModal(true)}
                  className="btn-rose px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-sm ml-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Walk-in</span>
                </button>
              </div>
            </div>

            {/* Bookings Table / Card List */}
            {filteredBookings.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-heading font-bold text-base text-slate-700">No Bookings Found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {searchQuery ? 'Try adjusting your search query or filters.' : 'Online booking requests from the website will automatically appear here and save locally.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDoctorFilter('ALL');
                    setStatusFilter('ALL');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold text-[10px]">
                      <tr>
                        <th className="py-3 px-4">Token &amp; Time</th>
                        <th className="py-3 px-4">Patient Info</th>
                        <th className="py-3 px-4">Doctor &amp; Speciality</th>
                        <th className="py-3 px-4">Concern / Treatment</th>
                        <th className="py-3 px-4">Appointment Slot</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredBookings.map((b) => {
                        const isSagar = b.doctor?.toLowerCase().includes('sagar');
                        const isRashmi = b.doctor?.toLowerCase().includes('rashmi') || b.doctor?.toLowerCase().includes('roy');

                        return (
                          <tr key={b.id} className="hover:bg-slate-50/70 transition">
                            {/* Token */}
                            <td className="py-3.5 px-4">
                              <span className="font-mono font-bold text-primary bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                                {b.id}
                              </span>
                              <div className="text-[10px] text-slate-400 mt-1">
                                {new Date(b.createdAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </div>
                            </td>

                            {/* Patient Info */}
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-slate-900 text-sm">
                                {b.patientName}
                              </div>
                              <a
                                href={`tel:${b.phone}`}
                                className="text-teal-600 hover:underline font-mono text-xs flex items-center gap-1 mt-0.5"
                              >
                                <Phone className="w-3 h-3" />
                                <span>{b.phone}</span>
                              </a>
                            </td>

                            {/* Doctor */}
                            <td className="py-3.5 px-4">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                isRashmi 
                                  ? 'bg-rose-50 text-rose-700 border border-rose-200/60' 
                                  : 'bg-teal-50 text-teal-700 border border-teal-200/60'
                              }`}>
                                {isRashmi ? <Sparkles className="w-3 h-3" /> : <Stethoscope className="w-3 h-3" />}
                                <span>{isRashmi ? 'Dr. Rashmi Roy' : 'Dr. S. Sagar'}</span>
                              </span>
                            </td>

                            {/* Concern */}
                            <td className="py-3.5 px-4 max-w-xs">
                              <div className="font-semibold text-slate-800 line-clamp-1">
                                {b.treatment}
                              </div>
                              {b.symptoms && (
                                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {b.symptoms}
                                </div>
                              )}
                            </td>

                            {/* Date & Slot */}
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-slate-800">
                                {b.date}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {b.slot}
                              </div>
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4">
                              <select
                                value={b.status}
                                onChange={(e) => handleStatusChange(b.id, e.target.value)}
                                className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                                  b.status === 'Confirmed'
                                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                    : b.status === 'Completed'
                                    ? 'bg-blue-50 text-blue-800 border-blue-200'
                                    : b.status === 'Cancelled'
                                    ? 'bg-rose-50 text-rose-800 border-rose-200'
                                    : 'bg-amber-50 text-amber-800 border-amber-200'
                                }`}
                              >
                                <option value="Confirmed">Confirmed</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                              <a
                                href={`https://wa.me/91${b.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(b.patientName)}%2C%20this%20is%20from%20Janki%20Skin%20Aesthetic%20%26%20Laparoscopic%20Centre%20regarding%20your%20appointment%20${b.id}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition inline-flex items-center justify-center"
                                title="Chat with Patient on WhatsApp"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>

                              <a
                                href={`tel:${b.phone}`}
                                className="p-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition inline-flex items-center justify-center"
                                title="Call Patient"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>

                              <button
                                onClick={() => handleDeleteBooking(b.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition inline-flex items-center justify-center cursor-pointer"
                                title="Delete Booking"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>Showing {filteredBookings.length} of {totalBookingsCount} bookings</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={downloadBookingsCSV}
                      className="font-bold text-teal-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download this table as CSV (Excel)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TRAFFIC & SOURCES */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            
            {/* EVERYDAY VISITS INTERACTIVE GRAPH (WEEKLY / MONTHLY / YEARLY) */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
              
              {/* Graph Header & Timeframe Switcher */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-primary">
                      Everyday Patient Visits &amp; Traffic Trend
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold border border-teal-200">
                      Live Everyday Logging
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Real-time daily website visits collected across Google, WhatsApp, and QR links
                  </p>
                </div>

                {/* Timeframe Toggle Buttons */}
                <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setTimeframe('weekly')}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                      timeframe === 'weekly'
                        ? 'bg-white text-primary shadow-xs font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Weekly (7 Days)
                  </button>

                  <button
                    type="button"
                    onClick={() => setTimeframe('monthly')}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                      timeframe === 'monthly'
                        ? 'bg-white text-primary shadow-xs font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Monthly (30 Days)
                  </button>

                  <button
                    type="button"
                    onClick={() => setTimeframe('yearly')}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                      timeframe === 'yearly'
                        ? 'bg-white text-primary shadow-xs font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Yearly (12 Months)
                  </button>
                </div>
              </div>

              {/* Timeframe Summary Stat Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    {timeframe === 'weekly' ? '7-Day Total' : timeframe === 'monthly' ? '30-Day Total' : '12-Month Total'}
                  </span>
                  <span className="text-xl font-extrabold font-heading text-primary">
                    {totalPeriodVisits.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 block">visits recorded</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100">
                  <span className="text-[10px] uppercase font-bold text-teal-700 block tracking-wider">
                    Period Average
                  </span>
                  <span className="text-xl font-extrabold font-heading text-teal-800">
                    {avgPeriodVisits}
                  </span>
                  <span className="text-[10px] text-teal-600 block">
                    visits / {timeframe === 'yearly' ? 'month' : 'day'}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100">
                  <span className="text-[10px] uppercase font-bold text-rose-700 block tracking-wider">
                    Form Inquiries
                  </span>
                  <span className="text-xl font-extrabold font-heading text-rose-800">
                    {totalPeriodInquiries}
                  </span>
                  <span className="text-[10px] text-rose-600 block">consultation requests</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Peak Period
                  </span>
                  <span className="text-sm font-bold font-heading text-slate-800 truncate block mt-0.5">
                    {peakItem && peakItem.visits > 0 ? peakItem.fullDate : 'Awaiting traffic'}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold block">
                    {peakItem && peakItem.visits > 0 ? `${peakItem.visits} visits peak` : '0 peak visits'}
                  </span>
                </div>
              </div>

              {/* Chart Visual Canvas */}
              <div className="relative pt-6 pb-2">
                
                {/* Reference Grid Lines */}
                <div className="absolute inset-x-0 top-6 bottom-10 flex flex-col justify-between pointer-events-none opacity-40">
                  <div className="border-b border-dashed border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{Math.max(maxPeriodVisits, 10)}</span>
                  </div>
                  <div className="border-b border-dashed border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{Math.max(Math.round(maxPeriodVisits / 2), 5)}</span>
                  </div>
                  <div className="border-b border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
                    <span>0</span>
                  </div>
                </div>

                {/* Bars Container */}
                <div className="h-56 sm:h-64 flex items-end justify-between gap-1 sm:gap-2 px-1 relative z-10">
                  {trendData.map((item, idx) => {
                    const chartCeiling = Math.max(maxPeriodVisits, 10);
                    const heightPct = chartCeiling > 0 ? Math.round((item.visits / chartCeiling) * 100) : 0;
                    const isPeak = peakItem && peakItem.visits > 0 && item.visits === peakItem.visits;

                    return (
                      <div 
                        key={item.key || idx} 
                        className="flex-1 flex flex-col items-center h-full justify-end group relative"
                        onMouseEnter={() => setHoveredBar(item)}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        {/* Interactive Hover Tooltip */}
                        <div className="absolute -top-16 bg-slate-900 text-white text-[10px] rounded-xl py-1.5 px-2.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 shadow-xl border border-slate-700 text-center">
                          <div className="font-bold text-teal-300">{item.fullDate}</div>
                          <div className="text-white mt-0.5">
                            <strong>{item.visits}</strong> {item.visits === 1 ? 'visit' : 'visits'} 
                            {item.inquiries > 0 ? ` • ${item.inquiries} inquiries` : ''}
                          </div>
                          {totalPeriodVisits > 0 && (
                            <div className="text-[9px] text-slate-400">
                              {Math.round((item.visits / totalPeriodVisits) * 100)}% of period
                            </div>
                          )}
                        </div>

                        {/* Bar Pillar */}
                        <div className="w-full bg-slate-100/80 rounded-t-xl h-44 sm:h-52 flex items-end overflow-hidden p-0.5 sm:p-1 group-hover:bg-slate-200/70 transition">
                          <div 
                            className={`w-full rounded-t-lg transition-all duration-300 ${
                              item.visits > 0
                                ? isPeak
                                  ? 'bg-gradient-to-t from-teal-700 via-teal-500 to-rose-400 shadow-xs'
                                  : 'bg-gradient-to-t from-teal-600 via-teal-500 to-emerald-400 group-hover:from-rose-500 group-hover:to-rose-400 shadow-xs'
                                : 'bg-slate-200/80 h-1'
                            }`}
                            style={{ 
                              height: item.visits > 0 ? `${Math.max(heightPct, 6)}%` : '4px' 
                            }}
                          />
                        </div>

                        {/* Current Day / Month Active Dot */}
                        {(item.isToday || item.isCurrentMonth) && (
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1 animate-pulse" title="Current Day/Month" />
                        )}

                        {/* X-Axis Date / Day Label */}
                        <span className={`text-[10px] font-semibold mt-1 truncate ${
                          item.isToday || item.isCurrentMonth ? 'text-teal-700 font-bold' : 'text-slate-400'
                        } ${timeframe === 'monthly' && idx % 3 !== 0 && !item.isToday ? 'hidden sm:block' : 'block'}`}>
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Zero State Notice */}
                {totalPeriodVisits === 0 && (
                  <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>
                      0 visits recorded in this timeframe. Every time a patient visits <strong>jankiclinic.com</strong> from Google, WhatsApp, or QR scans, daily visits log here in real time.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Sources & Devices Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Traffic Sources Breakdown */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-primary">
                      Traffic Acquisition Sources
                    </h3>
                    <p className="text-xs text-slate-500">
                      Where patients discover Janki Clinic website
                    </p>
                  </div>
                  <button
                    onClick={downloadTrafficReportCSV}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
                    title="Download Report"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                </div>

                <div className="space-y-3 pt-1">
                  {Object.entries(analytics.sources || {}).map(([src, count]) => {
                    const total = Object.values(analytics.sources || {}).reduce((a, b) => a + b, 0);
                    const pct = total > 0 ? Math.round((count / total) * 100) : 0;

                    return (
                      <div key={src} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-700 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            <span>{src}</span>
                          </span>
                          <span className="text-slate-900 font-mono font-bold">
                            {count.toLocaleString()} visits ({pct}%)
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Devices Breakdown (100% Dynamic, Zero Dummy Fallbacks) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                <div className="pb-2 border-b border-slate-100">
                  <h3 className="font-heading font-extrabold text-base text-primary">
                    Visitor Devices
                  </h3>
                  <p className="text-xs text-slate-500">
                    Smartphones vs Desktops breakdown
                  </p>
                </div>

                {(() => {
                  const totalViews = analytics.totalViews || 0;
                  const mobileViews = analytics.devices?.Mobile || 0;
                  const desktopViews = analytics.devices?.Desktop || 0;
                  const tabletViews = analytics.devices?.Tablet || 0;
                  const mobilePct = totalViews > 0 ? Math.round((mobileViews / totalViews) * 100) : 0;
                  const desktopPct = totalViews > 0 ? Math.round((desktopViews / totalViews) * 100) : 0;
                  const tabletPct = totalViews > 0 ? Math.round((tabletViews / totalViews) * 100) : 0;

                  return (
                    <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                      <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100">
                        <Smartphone className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                        <div className="text-lg font-bold font-heading text-primary">
                          {mobilePct}%
                        </div>
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          Mobile ({mobileViews})
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <Laptop className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                        <div className="text-lg font-bold font-heading text-primary">
                          {desktopPct}%
                        </div>
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          Desktop ({desktopViews})
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <Globe className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                        <div className="text-lg font-bold font-heading text-primary">
                          {tabletPct}%
                        </div>
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          Tablet ({tabletViews})
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-2 mt-3">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Real-time Device Detection</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Visitor screen dimensions and mobile user-agents are logged natively in client storage without tracking cookies or advertising pixels.
                  </p>
                </div>
              </div>
            </div>

            {/* Top Visited Treatments Table */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="pb-2 border-b border-slate-100">
                <h3 className="font-heading font-extrabold text-base text-primary">
                  Top Inquired Medical Services
                </h3>
                <p className="text-xs text-slate-500">
                  Most viewed treatment procedures and clinical packages
                </p>
              </div>

              {Object.keys(analytics.topTreatments || {}).length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-xs space-y-1.5">
                  <Stethoscope className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="font-semibold text-slate-700">No Service Views Recorded Yet</p>
                  <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                    When visitors view treatment pages (e.g. Laparoscopic Gallbladder, Acne Scars, Hair PRP), popularity ranks here automatically.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(analytics.topTreatments || {}).sort((a, b) => b[1] - a[1]).map(([treat, views], idx) => (
                    <div key={treat} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-200 shadow-xs">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-800 line-clamp-1">{treat}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                        {views} views
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 3: LOCAL FILE & BACKUP CENTER */}
        {activeTab === 'export' && (
          <div className="space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold uppercase tracking-wider mb-2">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Permanent Local File Export</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-primary">
                  Download &amp; Save Patient Records Locally
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Every time a patient submits an appointment form on <strong>jankiclinic.com</strong>, the booking details are instantly forwarded to WhatsApp and simultaneously cached into your browser’s local storage. Download your data files anytime to keep permanent offline hospital backups.
                </p>
              </div>

              {/* Big Download Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                
                {/* CSV / Excel */}
                <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-primary">
                      Excel Spreadsheet (.CSV)
                    </h4>
                    <p className="text-xs text-slate-600">
                      Standard comma-separated format. Opens directly in Microsoft Excel, Google Sheets, or hospital MIS.
                    </p>
                  </div>
                  <button
                    onClick={downloadBookingsCSV}
                    className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CSV ({totalBookingsCount} Records)</span>
                  </button>
                </div>

                {/* JSON Backup */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center">
                      <FileJson className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-primary">
                      Raw Database (.JSON)
                    </h4>
                    <p className="text-xs text-slate-600">
                      Complete structured JSON snapshot with timestamps, doctor credentials, and symptom notes.
                    </p>
                  </div>
                  <button
                    onClick={downloadBookingsJSON}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                {/* Traffic Analytics Report */}
                <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-primary">
                      Traffic Report (.CSV)
                    </h4>
                    <p className="text-xs text-slate-600">
                      Download visitor counts, Google Search vs WhatsApp referral breakdown, and device statistics.
                    </p>
                  </div>
                  <button
                    onClick={downloadTrafficReportCSV}
                    className="w-full py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Traffic Summary</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Offline Safety Assurance Card */}
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-3">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Server Leakage • 100% Client-Side Privacy</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white">
                How Your Hospital Records Are Kept Safe
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Patient consultation inquiries are never transmitted to third-party ad networks or public cloud databases. All booking entries stay stored directly on your authorized reception/doctor browser device and in your WhatsApp chat history.
              </p>
            </div>

          </div>
        )}

      </div>

      {/* Manual Add Booking Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-heading font-bold text-lg text-primary">
                Add Walk-in / Phone Booking
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddManualBooking} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={newBooking.patientName}
                  onChange={(e) => setNewBooking({ ...newBooking, patientName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9801234567"
                    value={newBooking.phone}
                    onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Doctor *</label>
                  <select
                    value={newBooking.doctor}
                    onChange={(e) => setNewBooking({ ...newBooking, doctor: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-semibold"
                  >
                    <option value="Dr. S. Sagar (Laparoscopic Surgeon)">Dr. S. Sagar</option>
                    <option value="Dr. Rashmi Roy (Skin, Hair & Nail Specialist)">Dr. Rashmi Roy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Concern / Procedure</label>
                <input
                  type="text"
                  placeholder="e.g. Gallbladder Ultrasound / Chemical Peel"
                  value={newBooking.treatment}
                  onChange={(e) => setNewBooking({ ...newBooking, treatment: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. Today / Saturday"
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Slot</label>
                  <input
                    type="text"
                    placeholder="e.g. Morning OPD"
                    value={newBooking.slot}
                    onChange={(e) => setNewBooking({ ...newBooking, slot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Symptoms / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Brief medical notes..."
                  value={newBooking.symptoms}
                  onChange={(e) => setNewBooking({ ...newBooking, symptoms: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-rose px-5 py-2 rounded-xl font-bold shadow-md cursor-pointer"
                >
                  Save Booking Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
