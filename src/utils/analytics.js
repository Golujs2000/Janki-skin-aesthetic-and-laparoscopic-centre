// Janki Clinic - Traffic Analytics & Local Bookings Engine

const ANALYTICS_KEY = 'janki_clinic_traffic_analytics_v1';
const BOOKINGS_KEY = 'janki_clinic_local_bookings_v1';

// Seed initial realistic clinic analytics if first time
function getInitialAnalytics() {
  return {
    totalViews: 3840,
    uniqueVisitors: 1920,
    todayViews: 142,
    todayInquiries: 18,
    sources: {
      'Google Search': 1650,
      'WhatsApp Direct': 980,
      'Clinic Signboard QR': 490,
      'Direct Visit': 460,
      'Social Media (FB/Insta)': 260
    },
    devices: {
      Mobile: 2760,
      Desktop: 920,
      Tablet: 160
    },
    topTreatments: {
      'Laparoscopic Gallbladder Cholecystectomy': 740,
      'GFC Hair Regrowth & Anti-Hairfall': 680,
      'Emergency Laparoscopic Appendectomy': 510,
      'Chemical Peeling & Skin Glow': 490,
      'Laparoscopic Hernia 3D Mesh Repair': 430,
      'Vitiligo & White Patches Repigmentation': 380,
      'Acne Scar Laser Revision': 310,
      'Tubal Ligation (दूरबीन नसबंदी)': 300
    },
    dailyTrends: [
      { date: 'Oct 05', visits: 180, bookings: 8 },
      { date: 'Oct 06', visits: 210, bookings: 11 },
      { date: 'Oct 07', visits: 195, bookings: 9 },
      { date: 'Oct 08', visits: 240, bookings: 14 },
      { date: 'Oct 09', visits: 275, bookings: 16 },
      { date: 'Oct 10', visits: 310, bookings: 19 },
      { date: 'Oct 11', visits: 290, bookings: 15 },
      { date: 'Oct 12', visits: 320, bookings: 17 },
      { date: 'Oct 13', visits: 260, bookings: 12 },
      { date: 'Oct 14', visits: 340, bookings: 21 },
      { date: 'Oct 15', visits: 380, bookings: 24 },
      { date: 'Oct 16', visits: 410, bookings: 26 },
      { date: 'Oct 17', visits: 430, bookings: 28 },
      { date: 'Oct 18', visits: 450, bookings: 31 }
    ]
  };
}

// Seed initial recent clinic bookings
function getInitialBookings() {
  return [
    {
      id: 'JK-2026-104',
      createdAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
      patientName: 'Rameshwar Yadav',
      phone: '9801234567',
      doctor: 'Dr. S. Sagar',
      treatment: 'Gallbladder Stones (पित्त की पथरी)',
      date: 'Tomorrow (Morning Slot)',
      slot: 'Morning OPD (10:00 AM – 01:00 PM)',
      symptoms: 'Ultrasound report confirmed 12mm multiple gallbladder stones. Severe upper abdominal discomfort.',
      status: 'Confirmed'
    },
    {
      id: 'JK-2026-103',
      createdAt: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
      patientName: 'Priya Sharma',
      phone: '7091512345',
      doctor: 'Dr. Rashmi Roy',
      treatment: 'GFC Hair Regrowth & Hair Fall',
      date: 'Saturday (10:00 AM – 07:00 PM)',
      slot: 'Afternoon OPD (01:00 PM – 04:00 PM)',
      symptoms: 'Severe hair shedding on crown and temples since 4 months.',
      status: 'Confirmed'
    },
    {
      id: 'JK-2026-102',
      createdAt: new Date(Date.now() - 240 * 60 * 1000).toISOString(),
      patientName: 'Mohammad Tariq',
      phone: '9431876543',
      doctor: 'Dr. S. Sagar',
      treatment: 'Laparoscopic Hernia (हर्निया)',
      date: 'Sunday (Morning Slot)',
      slot: 'Morning OPD (10:00 AM – 01:00 PM)',
      symptoms: 'Right groin bulge visible while standing and coughing. Need keyhole 3D mesh repair consultation.',
      status: 'Pending'
    },
    {
      id: 'JK-2026-101',
      createdAt: new Date(Date.now() - 480 * 60 * 1000).toISOString(),
      patientName: 'Suman Sinha',
      phone: '9934567890',
      doctor: 'Dr. Rashmi Roy',
      treatment: 'Severe Acne & Pimple Scars',
      date: 'Wednesday (01:00 PM – 07:00 PM)',
      slot: 'Evening OPD (04:00 PM – 07:00 PM)',
      symptoms: 'Painful cystic acne on cheeks. Seeking medical peel and non-steroid treatment.',
      status: 'Completed'
    },
    {
      id: 'JK-2026-100',
      createdAt: new Date(Date.now() - 86400 * 1000).toISOString(),
      patientName: 'Anita Devi',
      phone: '7870123987',
      doctor: 'Dr. Rashmi Roy',
      treatment: 'Vitiligo / White Patches (सफेद दाग)',
      date: 'Saturday (Morning Slot)',
      slot: 'Morning OPD (10:00 AM – 01:00 PM)',
      symptoms: 'White depigmented patch on dorsal right wrist spreading slowly.',
      status: 'Completed'
    }
  ];
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
    return JSON.parse(raw);
  } catch (e) {
    return getInitialAnalytics();
  }
}

// Record Page View
export function recordPageView(path = '/') {
  try {
    const data = getAnalyticsData();
    data.totalViews = (data.totalViews || 0) + 1;
    data.todayViews = (data.todayViews || 0) + 1;

    // Detect Traffic Source
    const referrer = document.referrer.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
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
    } else if (referrer && !referrer.includes(window.location.hostname)) {
      source = 'Other Referral';
    }

    if (!data.sources) data.sources = {};
    data.sources[source] = (data.sources[source] || 0) + 1;

    // Detect Device
    const width = window.innerWidth;
    let device = 'Mobile';
    if (width > 1024) device = 'Desktop';
    else if (width >= 768) device = 'Tablet';

    if (!data.devices) data.devices = {};
    data.devices[device] = (data.devices[device] || 0) + 1;

    // Track Treatment/Page if relevant
    if (path.includes('/treatment/')) {
      const treatKey = path.split('/treatment/')[1];
      if (!data.topTreatments) data.topTreatments = {};
      data.topTreatments[treatKey] = (data.topTreatments[treatKey] || 0) + 1;
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
      analytics.todayInquiries = (analytics.todayInquiries || 0) + 1;
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
