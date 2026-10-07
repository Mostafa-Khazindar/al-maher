"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES } from "@/data/siteData";
import {
  ShieldAlert,
  Wrench,
  SprayCan,
  Palette,
  Sparkles,
  Layers,
  FileCheck2,
  Gem,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const { locale } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-blue-600" />,
    Wrench: <Wrench className="w-6 h-6 text-blue-600" />,
    SprayCan: <SprayCan className="w-6 h-6 text-blue-600" />,
    Palette: <Palette className="w-6 h-6 text-blue-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-blue-600" />,
    Layers: <Layers className="w-6 h-6 text-blue-600" />,
    FileCheck2: <FileCheck2 className="w-6 h-6 text-blue-600" />,
    Gem: <Gem className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section id="services" className="py-24 bg-[#fbfaf6] relative overflow-hidden border-t border-[#e8e4d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            {locale === "ar" ? "خدمات الورشة المتكاملة" : "Body Shop Services"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                خدمات متخصصة في <span className="blue-gradient-text">السمكرة والدهان</span>
              </>
            ) : (
              <>
                Master Services in <span className="blue-gradient-text">Collision & Paint</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "نعتمد أحدث المعدات وأفضل معايير الصنفرة وسحب الصاج وتطبيق الطلاء داخل أفران حرارية مخصصة."
              : "State-of-the-art repair and refinishing workflows executed with uncompromising craftsmanship."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group relative p-6 rounded-3xl bg-[#f5f3ec] border border-[#e8e4d8] hover:border-blue-500 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#e8e4d8] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-transform shadow-2xs">
                    {iconMap[srv.iconName]}
                  </div>
                  {srv.badgeAr && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800">
                      {locale === "ar" ? srv.badgeAr : srv.badgeEn}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {locale === "ar" ? srv.titleAr : srv.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {locale === "ar" ? srv.descAr : srv.descEn}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#e8e4d8] flex items-center justify-between">
                <a
                  href="#appointment"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === "ar" ? "طلب كشف لهذه الخدمة" : "Book for this service"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
