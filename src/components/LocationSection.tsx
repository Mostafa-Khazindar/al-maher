"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import { MapPin, Navigation, MessageCircle, Clock, ExternalLink } from "lucide-react";

import { asset } from "@/utils/paths";

export default function LocationSection() {
  const { locale } = useLanguage();

  return (
    <section id="location" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Location Info & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{locale === "ar" ? "موقع الورشة" : "Workshop Location"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {locale === "ar" ? (
                <>
                  يسعدنا استقبالكم في <span className="blue-gradient-text">صناعية عسفان</span>
                </>
              ) : (
                <>
                  Visit Us at <span className="blue-gradient-text">Asfan Industrial Area</span>
                </>
              )}
            </h2>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {locale === "ar" ? "العنوان الدقيق" : "Exact Address"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {locale === "ar" ? SITE_CONFIG.locationAr : SITE_CONFIG.locationEn}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {locale === "ar" ? "ساعات العمل الرسمية" : "Operating Hours"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-mono">
                    {locale === "ar" ? SITE_CONFIG.workingHoursAr : SITE_CONFIG.workingHoursEn}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {locale === "ar" ? "التواصل المباشر" : "Direct Contact"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-mono">
                    {locale === "ar" ? "واتساب وهاتف: 0544792646" : "WhatsApp & Phone: 0544792646"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>{locale === "ar" ? "فتح في خرائط Google" : "Open in Google Maps"}</span>
              </a>

              <a
                href="https://wa.me/966544792646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 font-semibold text-xs sm:text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{locale === "ar" ? "طلب الموقع عبر واتساب" : "Send Location Pin"}</span>
              </a>
            </div>
          </div>

          {/* Real Workshop Bay Photography Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-3 shadow-xl overflow-hidden">
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={asset("/workshop/workshop-day-1103.jpg")}
                  alt="موقع مركز الماهر - صناعية عسفان بلوك 1103"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-mono bg-blue-600 text-white px-3 py-1 rounded-md self-start font-bold mb-2">
                    بلوك 1102 / 1103
                  </span>
                  <h3 className="text-lg font-black">
                    {locale === "ar" ? "مركز الماهر العالمي — صناعية عسفان" : "Al-Maher Al-Alami — Asfan Industrial Area"}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1">
                    {locale === "ar"
                      ? "جدة، منطقة مكة المكرمة — سهولة وصول ومواقف وبايات عمل متكاملة"
                      : "Jeddah, Saudi Arabia — High-capacity workshop bays & reception"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
