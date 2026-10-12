"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG, BRANCHES } from "@/data/siteData";
import { MapPin, Navigation, MessageCircle, Clock, Building2, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { asset } from "@/utils/paths";

export default function LocationSection() {
  const { locale } = useLanguage();

  return (
    <section id="location" className="py-24 bg-[#fbfaf6] border-t border-[#e8e4d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{locale === "ar" ? "فروع ومواقع مركز الماهر" : "Al-Maher Facilities & Locations"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                مواقعنا في خدمتكم — <span className="blue-gradient-text">الفرع الرئيسي والفرع الإضافي</span>
              </>
            ) : (
              <>
                Our Locations — <span className="blue-gradient-text">Main Facility & Additional Branch</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "استقبالكم في مقرنا المجهز بصناعية عسفان (بلوك 1102 / 1103)، بالإضافة إلى الفرع الآخر الذي سيتم توفير بياناته ورابطه قريباً."
              : "Welcoming you at our full facility in Asfan (Block 1102 / 1103), alongside our upcoming secondary branch."}
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Active Branch (Asfan) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#f5f3ec] border border-[#e8e4d8] p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                    01
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                      {locale === "ar" ? "الفرع الأساسي المعتمد" : "Main Operational Facility"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {locale === "ar" ? "صناعية عسفان — بلوك 1102 / 1103" : "Asfan Industrial — Block 1102 / 1103"}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {locale === "ar" ? "يستقبل العملاء حالياً" : "Currently Active"}
                </span>
              </div>

              {/* Photo of Main Facility */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 border border-[#e8e4d8]">
                <img
                  src={asset("/workshop/workshop-day-1103.jpg")}
                  alt="ورشة الماهر العالمي صناعية عسفان"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs">
                    <span className="font-mono text-blue-300 font-bold block">JEDDAH — ASFAN BLOCK 1102 / 1103</span>
                    <span className="font-semibold">{locale === "ar" ? "بايات السمكرة، أفران الرش الحرارية، والميكانيكا" : "Collision bays, thermal bake booths, & mechanical service"}</span>
                  </div>
                </div>
              </div>

              {/* Info details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">{locale === "ar" ? "العنوان:" : "Address:"}</span>
                    <span className="text-slate-600">{locale === "ar" ? SITE_CONFIG.locationAr : SITE_CONFIG.locationEn}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">{locale === "ar" ? "ساعات العمل:" : "Working Hours:"}</span>
                    <span className="text-slate-600 font-mono">{locale === "ar" ? SITE_CONFIG.workingHoursAr : SITE_CONFIG.workingHoursEn}</span>
                  </div>
                </div>
              </div>

              {/* Scope of this branch */}
              <div className="p-4 rounded-2xl bg-white border border-[#e8e4d8]">
                <span className="text-xs font-bold text-slate-800 block mb-2.5">
                  {locale === "ar" ? "الأقسام المتاحة بهذا الفرع:" : "Available Departments at this Facility:"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{locale === "ar" ? "سمكرة وسحب شاسيه متقدم" : "Chassis & Frame Straightening"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{locale === "ar" ? "أفران رش ودهانات Spies Hecker" : "Thermal Spray & Spies Hecker"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{locale === "ar" ? "صيانة ميكانيكية للمحرك والقير والعضلات" : "Engine, Transmission & Suspension"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{locale === "ar" ? "فحص كمبيوتر وكهرباء وبرمجة" : "Auto Electrical & OBD2 Diagnostics"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#e8e4d8] flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>{locale === "ar" ? "الاتجاهات في خرائط Google" : "Directions on Google Maps"}</span>
              </a>

              <a
                href={`https://wa.me/966544792646?text=${encodeURIComponent(
                  locale === "ar"
                    ? "السلام عليكم، أود الحصول على موقع ورشة الماهر العالمي في صناعية عسفان."
                    : "Hello, please send me Al-Maher workshop location in Asfan."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#e8e4d8] hover:border-emerald-500 text-slate-700 hover:text-emerald-700 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{locale === "ar" ? "طلب اللوكيشن واتساب" : "Send WhatsApp Pin"}</span>
              </a>
            </div>
          </div>

          {/* Second Branch Template Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#f5f3ec] border-2 border-dashed border-[#d5cfbe] p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center font-bold">
                    02
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      {locale === "ar" ? "فرع إضافي معتمد" : "Secondary Branch"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                      {locale === "ar" ? "الفرع الثاني لمركز الماهر" : "Branch 2 — Al-Maher Al-Alami"}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  {locale === "ar" ? "قريباً — سيتم إضافة الرابط" : "Coming Soon"}
                </span>
              </div>

              {/* Template Placeholder Notice */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-1">
                  {locale === "ar" ? "📍 نموذج معلومات الفرع الآخر:" : "📍 Secondary Branch Information Template:"}
                </span>
                {locale === "ar"
                  ? "جاري تجهيز وتحديث الرابط المباشر وخريطة الموقع وتفاصيل الفرع الإضافي لمركز الماهر العالمي وسيتم تفعيله فور استلام الرابط."
                  : "The direct map link and operational details for our secondary branch are being prepared and will be published shortly."}
              </div>

              {/* Placeholder Details */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    {locale === "ar" ? "موقع الفرع:" : "Branch Location:"}
                  </span>
                  <p className="text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    {locale === "ar"
                      ? "[سيتم إضافة رابط خرائط جوجل وتفاصيل الحي قريباً]"
                      : "[Google Maps Link and district details to be provided]"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    {locale === "ar" ? "الخدمات المتاحة بالفرع:" : "Services at Branch 2:"}
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• {locale === "ar" ? "استقبال وفحص السيارات وتقدير الإصلاح" : "Inspection, vehicle intake & estimates"}</li>
                    <li>• {locale === "ar" ? "خدمات الصيانة السريعة والميكانيكا" : "Express maintenance & mechanical service"}</li>
                    <li>• {locale === "ar" ? "تنسيق متكامل مع مركز السمكرة والدهان الحراري" : "Seamless coordination with main body shop"}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">{locale === "ar" ? "رقم الاستعلام الموحد:" : "Inquiry Line:"}</span>
                    <span className="text-xs font-mono text-blue-700 font-bold">0544792646</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold">
                    {locale === "ar" ? "نفس الإدارة" : "Unified Management"}
                  </span>
                </div>
              </div>
            </div>

            {/* Inactive Map Button Template */}
            <div className="pt-6 mt-6 border-t border-[#e8e4d8]">
              <div className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-200/80 text-slate-500 text-xs sm:text-sm font-bold cursor-not-allowed">
                <MapPin className="w-4 h-4" />
                <span>{locale === "ar" ? "[رابط خريطة الفرع — قيد الإضافة]" : "[Branch Map Link — Pending]"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
