import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, MessageCircle, Compass } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic Location & Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Visit Us in <span className="text-teal-accent">Forbesganj</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Easily accessible on Referral Hospital Road with dedicated ambulance access, sanitized admission suites, and wheelchair ramps.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-primary">
                Reach Our Care Team
              </h3>

              {/* Address Point */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Clinic Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Referral Hospital Road,<br />
                    Forbesganj, Bihar 854318
                  </p>
                </div>
              </div>

              {/* Phone Point */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Phone & Helpline</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 space-y-1">
                    <span className="block font-semibold text-primary">
                      Helpline &amp; Appointments: <a href="tel:+917091506123" className="text-teal-accent hover:underline">+91 70915 06123</a>
                    </span>
                    <span className="block text-slate-500">
                      Laparoscopy &amp; Dermatology OPD (24x7 Support)
                    </span>
                  </p>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Clinical Hours</h4>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 space-y-0.5">
                    <p><strong>Mon – Sat:</strong> 10:00 AM – 02:00 PM | 04:00 PM – 07:00 PM</p>
                    <p><strong>Sunday:</strong> Pre-scheduled Appointments Only</p>
                    <p className="text-[11px] text-teal-600 font-semibold pt-1">
                      Emergency Laparoscopic Admissions: 24 Hours Active
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Directions Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/place/JANKI+SKIN+%26+LAPROSCOPIC/@26.303892,87.25331,17z/data=!4m6!3m5!1s0x39ef9fa908eb367f:0xea3a0f72158472c1!8m2!3d26.303892!4d87.25331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-primary text-white hover:bg-primary-light transition shadow-sm"
              >
                <Navigation className="w-4 h-4 text-teal-300" />
                <span>Get Google Directions</span>
              </a>

              <a
                href="https://wa.me/917091506123?text=Hello%20Janki%20Centre%2C%20please%20share%20your%20exact%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Location</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md min-h-[380px] flex flex-col">
            <iframe
              title="Janki Skin Aesthetic & Laparoscopic Centre Forbesganj Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.472718155986!2d87.2511213!3d26.303892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef9fa908eb367f%3A0xea3a0f72158472c1!2sJANKI%20SKIN%20%26%20LAPROSCOPIC!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0 flex-1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Regional Routes & Catchment Travel Guide */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-accent flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">
                  Regional Catchment &amp; Travel Directions (आसपास के क्षेत्रों से मार्ग)
                </h3>
                <p className="text-xs text-slate-500">
                  Direct highway access with same-day return for routine OPD and 24-48 hr discharge for surgeries.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 self-start sm:self-auto">
              Opposite Referral Hospital
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Route 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="font-bold text-primary flex items-center justify-between">
                <span>From Jogbani &amp; Nepal Border</span>
                <span className="text-[10px] text-teal-600 bg-white px-2 py-0.5 rounded border border-teal-100 font-semibold">15–25 Mins</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Direct transit from <strong>Jogbani Border, Biratnagar, and Itahari (Ithari)</strong> via NH-27 4-lane highway. Enter Forbesganj town and take Referral Hospital Road directly to our clinic gate.
              </p>
            </div>

            {/* Route 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="font-bold text-primary flex items-center justify-between">
                <span>From Narpatganj, Simrahi &amp; Birpur</span>
                <span className="text-[10px] text-teal-600 bg-white px-2 py-0.5 rounded border border-teal-100 font-semibold">20–45 Mins</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Travel east via East-West Corridor (NH-27) connecting <strong>Simrahi, Lalitgram, Balua Bazar, Birpur Border &amp; Narpatganj</strong> straight into Forbesganj without navigating city traffic.
              </p>
            </div>

            {/* Route 3 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="font-bold text-primary flex items-center justify-between">
                <span>From Raniganj, Bhargama &amp; Kursakata</span>
                <span className="text-[10px] text-teal-600 bg-white px-2 py-0.5 rounded border border-teal-100 font-semibold">25–40 Mins</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Accessible via Araria district arterial roads from <strong>Raniganj, Bhargama &amp; Kursakata</strong>. Ample vehicle parking and ambulance bay available on premises.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
