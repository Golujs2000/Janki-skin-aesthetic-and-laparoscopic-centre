import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Activity } from 'lucide-react';

export default function Comparison() {
  const comparisonRows = [
    {
      feature: "Incision Size (चीरा का आकार)",
      laparoscopic: "3 to 4 tiny keyholes (0.5 to 1 cm only)",
      open: "Large 10 to 20 cm open surgical cut",
      better: true,
    },
    {
      feature: "Postoperative Pain (दर्द का स्तर)",
      laparoscopic: "Minimal discomfort; very low analgesic need",
      open: "Severe abdominal muscle incision pain",
      better: true,
    },
    {
      feature: "Hospitalization (अस्पताल में भर्ती)",
      laparoscopic: "24 to 48 hours discharge (त्वरित डिस्चार्ज)",
      open: "5 to 8 days prolonged hospital stay",
      better: true,
    },
    {
      feature: "Return to Daily Life (दैनिक दिनचर्या)",
      laparoscopic: "Resume work in 5 to 7 days",
      open: "4 to 6 weeks bed rest and restriction",
      better: true,
    },
    {
      feature: "Risk of Wound Hernia / Infection",
      laparoscopic: "Near-zero (< 0.5%) due to miniature ports",
      open: "Significantly higher risk in large cuts",
      better: true,
    },
    {
      feature: "Cosmetic Appearance (निशान)",
      laparoscopic: "Virtually invisible, scarless cosmetic healing",
      open: "Permanent prominent long surgical scar",
      better: true,
    },
  ];

  return (
    <section id="comparison" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Activity className="w-3.5 h-3.5" />
            <span>Clinical Comparison Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Laparoscopic Keyhole vs <span className="text-teal-accent">Open Surgery</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Understanding why modern minimally invasive keyhole procedures are the gold-standard recommendation worldwide for gallbladder, appendix, and hernia.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-5 px-6 font-heading font-bold text-slate-700 text-sm bg-slate-50/60">
                    Surgical Metric / Factor
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-white text-sm bg-primary w-5/12">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-teal-300" />
                      <span>Laparoscopic (Keyhole) at Janki Centre</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-slate-600 text-sm bg-slate-100/70 w-4/12">
                    Traditional Open Surgery
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-teal-50/30 text-teal-900 font-semibold">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.laparoscopic}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 bg-slate-50/30">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.open}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
