"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeftRight, CheckCircle2, AlertTriangle, Sparkles, Wrench, ShieldCheck } from "lucide-react";
import { asset } from "@/utils/paths";

export default function BeforeAfterSlider() {
  const { locale, isRTL } = useLanguage();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPos(percentage);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#fbfaf6] border-t border-[#e8e4d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <ArrowLeftRight className="w-3.5 h-3.5 text-blue-600" />
            <span>{locale === "ar" ? "شاهد الفرق الحقيقي" : "Real Case Study Comparison"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                المقارنة التفاعلية: <span className="blue-gradient-text">قبل وبعد الإصلاح</span>
              </>
            ) : (
              <>
                Interactive Precision: <span className="blue-gradient-text">Before & After</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "مقارنة متطابقة الأبعاد والزوايا لصدمة الرفرف والصدام والاسطب الخلفي لسيارة كاديلاك ATS مع النتيجة النهائية بعد استعدال الصاج والدهان الحراري."
              : "Exact proportion and angle match showing Cadillac ATS rear bumper and quarter panel collision restored to factory perfection."}
          </p>
        </div>

        {/* Master Comparison Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#f5f3ec] border border-[#e8e4d8] p-4 sm:p-8 shadow-xl">
          {/* Header Vehicle Meta */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#e8e4d8]">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-bold font-mono shadow-2xs">
                  Cadillac ATS
                </span>
                <span className="text-xs text-slate-600 font-semibold">
                  {locale === "ar" ? "لوحة السيارة: ٧٤٣٣ ل ن ح" : "Plate: 7433 LNH"}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {locale === "ar"
                  ? "كاديلاك ATS — استعدال صاج الرفرف، إصلاح الصدام، ومطابقة اللون بالفرن"
                  : "Cadillac ATS — Quarter Panel Cold Shaping & Precision Thermal Refinish"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold border border-[#e8e4d8] shadow-2xs">
                {locale === "ar" ? "سحب صاج على البارد" : "Cold Metal Pulling"}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold border border-[#e8e4d8] shadow-2xs">
                {locale === "ar" ? "فرن حراري معزول" : "Thermal Bake"}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold border border-[#e8e4d8] shadow-2xs">
                Spies Hecker
              </span>
            </div>
          </div>

          {/* Symmetrically Scaled & Cropped Comparison Window */}
          <div className="mt-6 relative">
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[560px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#e8e4d8] shadow-lg bg-slate-900"
            >
              {/* "AFTER" Layer (Full Background - Perfectly Scaled) */}
              <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
                <img
                  src={asset("/portfolio/cadillac-after-matched.jpg")}
                  alt="Cadillac ATS After Repair"
                  className="w-full h-full object-cover object-center"
                />

                {/* Badge After */}
                <div className="absolute top-4 end-4 bg-blue-600 text-white font-black text-xs px-4 py-2 rounded-xl shadow-lg z-10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>{locale === "ar" ? "بعد الإصلاح والدهان (AFTER)" : "AFTER REPAIR"}</span>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped - Perfectly Scaled & Angle-Matched) */}
              <div
                className="absolute inset-0 h-full overflow-hidden border-e-4 border-blue-500 z-10"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full min-w-[320px] bg-slate-900 overflow-hidden">
                  <img
                    src={asset("/portfolio/cadillac-before-matched.jpg")}
                    alt="Cadillac ATS Before Repair - Collision Damage"
                    className="w-full h-full object-cover object-center"
                    style={{ width: "100%", height: "100%" }}
                  />

                  {/* Badge Before */}
                  <div className="absolute top-4 start-4 bg-rose-600 text-white font-black text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-yellow-300" />
                    <span>{locale === "ar" ? "قبل الإصلاح - حالة الصدمة (BEFORE)" : "BEFORE (COLLISION)"}</span>
                  </div>
                </div>
              </div>

              {/* Vertical Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_15px_#2563eb] pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-2xl border-2 border-white text-xs">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Slider Instructions */}
            <div className="flex items-center justify-between text-xs text-slate-500 mt-3.5 px-2 font-medium">
              <span>{locale === "ar" ? "◂ اسحب الفاصل بالماوس أو اللمس لمقارنة الصدمة بالإصلاح النهائي" : "◂ Drag slider to compare damage vs completed repair"}</span>
              <span className="font-mono text-blue-700 font-bold bg-white px-2.5 py-1 rounded-md border border-[#e8e4d8] shadow-2xs">
                {Math.round(sliderPos)}%
              </span>
            </div>
          </div>

          {/* Technical Damage & Restoration Breakdown */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-rose-200/80 shadow-2xs space-y-2.5">
              <span className="text-xs font-bold text-rose-600 uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                {locale === "ar" ? "حالة الضرر قبل الإصلاح:" : "Damage Inspection:"}
              </span>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li>• {locale === "ar" ? "انبعاج عميق في صاج الرفرف الخلفي الأيسر واحتكاك حاد في طبقات الطلاء." : "Deep rear-left quarter panel dent and deep paint abrasion."}</li>
                <li>• {locale === "ar" ? "تلف وانفصال زاوية الصدام الخلفي وكسر في عاكس الاسطب الخلفي." : "Bumper corner dislodged and cracked tail light assembly."}</li>
                <li>• {locale === "ar" ? "تأثر طبقة اللكر والأساس ووصول الضرر إلى الصاج الأصلي." : "Clearcoat and primer compromised to base substrate."}</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs space-y-2.5">
              <span className="text-xs font-bold text-emerald-700 uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {locale === "ar" ? "الأعمال المنفذة في مركز الماهر العالمي:" : "Completed Al-Maher Work:"}
              </span>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li>• {locale === "ar" ? "سحب واستعدال صاج الرفرف على البارد بحرفية تامة دون أي تموجات." : "Precision cold metal shaping of quarter panel contour."}</li>
                <li>• {locale === "ar" ? "لحام وترميم أقفال الصدام الخلفي وإعادة ضبط الفراغات المصنعية." : "Bumper clip realignment and seamless gap fitting."}</li>
                <li>• {locale === "ar" ? "رش بنظام Spies Hecker في الفرن الحراري ومطابقة لون الميتاليك 100%." : "Spies Hecker thermal bake spray with 100% purple metallic match."}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
