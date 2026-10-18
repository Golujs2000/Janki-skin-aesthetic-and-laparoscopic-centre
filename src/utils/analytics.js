// Janki Clinic - Traffic Analytics & Local Bookings Engine

const ANALYTICS_KEY = 'janki_clinic_traffic_analytics_v2';
const BOOKINGS_KEY = 'janki_clinic_local_bookings_v2';

// Clean legacy v1 dummy data if present
try {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('janki_clinic_traffic_analytics_v1');
    localStorage.removeItem('janki_clinic_local_bookings_v1');
  }
} catch (_) {}

// Helper to get today's date in local YYYY-MM-DD
function getLocalDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Initial clean analytics structure (no dummy data)
function getInitialAnalytics() {
  return {
    totalViews: 0,
    uniqueVisitors: 0,
    todayDate: getLocalDateKey(),
    todayViews: 0,
    todayInquiries: 0,
    sources: {
      'Google Search': 0,
      'WhatsApp Direct': 0,
      'Clinic Signboard QR': 0,
      'Direct Visit': 0,
      'Social Media (FB/Insta)': 0
    },
    devices: {
      Mobile: 0,
      Desktop: 0,
      Tablet: 0
    },
    topTreatments: {},
    dailyVisits: {},       // { "YYYY-MM-DD": visitCount }
    dailyInquiries: {}    // { "YYYY-MM-DD": inquiryCount }
  };
}

// Initial clean bookings (no dummy data)
function getInitialBookings() {
  return [];
}

// Read Analytics Data
export function getAnalyticsData() {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    if (!raw) {
      const initial = getInitialAnalytics();
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(initial));
      return initial;
    }
    const data = JSON.parse(raw);
    if (!data.dailyVisits) data.dailyVisits = {};
    if (!data.dailyInquiries) data.dailyInquiries = {};
    if (!data.sources) data.sources = {};
    if (!data.devices) data.devices = {};
    if (!data.topTreatments) data.topTreatments = {};
    return data;
  } catch (e) {
    return getInitialAnalytics();
  }
}

// Record Page View
export function recordPageView(path = '/') {
  // Do not record admin dashboard views as patient traffic
  if (path.startsWith('/admin')) {
    return getAnalyticsData();
  }

  try {
    const data = getAnalyticsData();
    const today = getLocalDateKey();

    // Check if new day
    if (data.todayDate !== today) {
      data.todayDate = today;
      data.todayViews = 0;
      data.todayInquiries = 0;
    }

    data.totalViews = (data.totalViews || 0) + 1;
    data.todayViews = (data.todayViews || 0) + 1;

    // Track daily visits by calendar date
    if (!data.dailyVisits) data.dailyVisits = {};
    data.dailyVisits[today] = (data.dailyVisits[today] || 0) + 1;

    // Unique visitor session detection
    try {
      const hasVisited = sessionStorage.getItem('janki_has_visited');
      if (!hasVisited) {
        sessionStorage.setItem('janki_has_visited', 'true');
        data.uniqueVisitors = (data.uniqueVisitors || 0) + 1;
      }
    } catch (_) {}

    // Detect Traffic Source
    const referrer = (typeof document !== 'undefined' ? document.referrer : '').toLowerCase();
    const urlParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const utmSource = urlParams.get('utm_source') || urlParams.get('ref') || '';

    let source = 'Direct Visit';
    if (utmSource.includes('whatsapp') || referrer.includes('whatsapp') || referrer.includes('wa.me')) {
      source = 'WhatsApp Direct';
    } else if (utmSource.includes('google') || referrer.includes('google')) {
      source = 'Google Search';
    } else if (utmSource.includes('qr') || utmSource.includes('signboard') || utmSource.includes('banner')) {
      source = 'Clinic Signboard QR';
    } else if (referrer.includes('facebook') || referrer.includes('instagram') || utmSource.includes('social')) {
      source = 'Social Media (FB/Insta)';
    } else if (referrer && typeof window !== 'undefined' && !referrer.includes(window.location.hostname)) {
      source = 'Other Referral';
    }

    data.sources[source] = (data.sources[source] || 0) + 1;

    // Detect Device
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      let device = 'Mobile';
      if (width > 1024) device = 'Desktop';
      else if (width >= 768) device = 'Tablet';
      data.devices[device] = (data.devices[device] || 0) + 1;
    }

    // Track Treatment/Page if relevant
    if (path.includes('/treatment/')) {
      const treatKey = decodeURIComponent(path.split('/treatment/')[1]?.split('?')[0] || '');
      if (treatKey) {
        data.topTreatments[treatKey] = (data.topTreatments[treatKey] || 0) + 1;
      }
    }

    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
    return data;
  } catch (e) {
    console.error('Failed to record page view:', e);
  }
}

// Get Bookings
export function getLocalBookings() {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    if (!raw) {
      const initial = getInitialBookings();
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (e) {
    return getInitialBookings();
  }
}

// Save New Booking (automatically called on WhatsApp form submit)
export function saveLocalBooking(booking) {
  try {
    const existing = getLocalBookings();
    const tokenNum = Math.floor(100 + Math.random() * 900);
    const newBooking = {
      id: `JK-2026-${tokenNum}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      patientName: booking.patientName || booking.name || 'Anonymous',
      phone: booking.phone || '',
      doctor: booking.doctor || 'Dr. S. Sagar',
      treatment: booking.treatment || 'Consultation',
      date: booking.date || 'Earliest Slot',
      slot: booking.slot || booking.time || 'Morning OPD',
      symptoms: booking.symptoms || booking.message || 'No additional symptoms specified',
      source: 'Online Booking Form'
    };

    const updated = [newBooking, ...existing];
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));

    // Also increment analytics inquiry counter
    try {
      const analytics = getAnalyticsData();
      const today = getLocalDateKey();
      analytics.todayInquiries = (analytics.todayInquiries || 0) + 1;
      if (!analytics.dailyInquiries) analytics.dailyInquiries = {};
      analytics.dailyInquiries[today] = (analytics.dailyInquiries[today] || 0) + 1;
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
    } catch (_) {}

    return newBooking;
  } catch (e) {
    console.error('Failed to save booking to local storage:', e);
    return null;
  }
}

// Update Booking Status
export function updateBookingStatus(id, newStatus) {
  try {
    const bookings = getLocalBookings();
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update booking status:', e);
    return getLocalBookings();
  }
}

// Delete Booking
export function deleteLocalBooking(id) {
  try {
    const bookings = getLocalBookings();
    const updated = bookings.filter(b => b.id !== id);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to delete booking:', e);
    return getLocalBookings();
  }
}

// Helper: Weekly Trend (Last 7 Days)
export function getWeeklyTrend(dailyVisits = {}, dailyInquiries = {}) {
  const days = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`;
    
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const fullDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    days.push({
      key,
      label: dayName,
      fullDate,
      visits: dailyVisits[key] || 0,
      inquiries: dailyInquiries[key] || 0,
      isToday: i === 0
    });
  }
  return days;
}

// Helper: Monthly Trend (Last 30 Days)
export function getMonthlyTrend(dailyVisits = {}, dailyInquiries = {}) {
  const days = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`;
    
    const dayNum = String(d.getDate());
    const fullDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    days.push({
      key,
      label: dayNum,
      fullDate,
      visits: dailyVisits[key] || 0,
      inquiries: dailyInquiries[key] || 0,
      isToday: i === 0
    });
  }
  return days;
}

// Helper: Yearly Trend (Last 12 Months)
export function getYearlyTrend(dailyVisits = {}, dailyInquiries = {}) {
  const months = [];
  const now = new Date();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const monthPrefix = `${year}-${month}`;
    
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const fullDate = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    let monthVisits = 0;
    let monthInquiries = 0;

    Object.entries(dailyVisits).forEach(([dateStr, count]) => {
      if (dateStr.startsWith(monthPrefix)) {
        monthVisits += count;
      }
    });

    Object.entries(dailyInquiries).forEach(([dateStr, count]) => {
      if (dateStr.startsWith(monthPrefix)) {
        monthInquiries += count;
      }
    });

    months.push({
      key: monthPrefix,
      label: monthName,
      fullDate,
      visits: monthVisits,
      inquiries: monthInquiries,
      isCurrentMonth: i === 0
    });
  }
  return months;
}

// Export All Bookings to CSV File Download
export function downloadBookingsCSV() {
  const bookings = getLocalBookings();
  const headers = ['Token ID', 'Date Received', 'Patient Name', 'Phone', 'Doctor', 'Treatment', 'Appointment Date', 'Time Slot', 'Status', 'Symptoms/Notes'];
  
  const rows = bookings.map(b => [
    `"${b.id}"`,
    `"${new Date(b.createdAt).toLocaleString('en-IN')}"`,
    `"${(b.patientName || '').replace(/"/g, '""')}"`,
    `"${b.phone || ''}"`,
    `"${(b.doctor || '').replace(/"/g, '""')}"`,
    `"${(b.treatment || '').replace(/"/g, '""')}"`,
    `"${b.date || ''}"`,
    `"${b.slot || ''}"`,
    `"${b.status || ''}"`,
    `"${(b.symptoms || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `janki-clinic-bookings-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export All Bookings to JSON File Download
export function downloadBookingsJSON() {
  const bookings = getLocalBookings();
  const jsonContent = JSON.stringify(bookings, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `janki-clinic-bookings-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export Traffic Report CSV Download
export function downloadTrafficReportCSV() {
  const analytics = getAnalyticsData();
  const rows = [];
  rows.push(['JANKI CLINIC FORBESGANJ - TRAFFIC & ANALYTICS REPORT']);
  rows.push(['Generated At', new Date().toLocaleString('en-IN')]);
  rows.push([]);
  rows.push(['METRIC', 'VALUE']);
  rows.push(['Total Pageviews', analytics.totalViews || 0]);
  rows.push(['Unique Patients', analytics.uniqueVisitors || 0]);
  rows.push(['Today Pageviews', analytics.todayViews || 0]);
  rows.push(['Today Inquiries', analytics.todayInquiries || 0]);
  rows.push([]);
  rows.push(['TRAFFIC SOURCE', 'VISITORS']);
  if (analytics.sources) {
    Object.entries(analytics.sources).forEach(([src, count]) => {
      rows.push([src, count]);
    });
  }
  rows.push([]);
  rows.push(['DEVICE TYPE', 'VISITORS']);
  if (analytics.devices) {
    Object.entries(analytics.devices).forEach(([dev, count]) => {
      rows.push([dev, count]);
    });
  }
  rows.push([]);
  rows.push(['DAILY VISITS LOG (DATE, VISITS)']);
  if (analytics.dailyVisits) {
    Object.entries(analytics.dailyVisits).sort().forEach(([date, count]) => {
      rows.push([date, count]);
    });
  }

  const csvContent = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `janki-traffic-report-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Clear all stored data (Reset to zero)
export function clearAllLocalData() {
  try {
    localStorage.removeItem(ANALYTICS_KEY);
    localStorage.removeItem(BOOKINGS_KEY);
    localStorage.removeItem('janki_clinic_traffic_analytics_v1');
    localStorage.removeItem('janki_clinic_local_bookings_v1');
    sessionStorage.removeItem('janki_has_visited');
    // Re-initialize clean structure
    const initialAnalytics = getInitialAnalytics();
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(initialAnalytics));
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify([]));
  } catch (e) {
    console.error('Failed to clear data:', e);
  }
}
