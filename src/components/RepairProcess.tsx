"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PROCESS_STEPS } from "@/data/siteData";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

export default function RepairProcess() {
  const { locale, isRTL } = useLanguage();

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <span>{locale === "ar" ? "مسار العمل الهندسي" : "Repair Methodology"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                مراحل الإصلاح في <span className="blue-gradient-text">مركز الماهر العالمي</span>
              </>
            ) : (
              <>
                The 6-Stage Restoration <span className="blue-gradient-text">Workflow</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "خطوات هندسية متسلسلة تبدأ بالفحص الدقيق وتنتهي بالتلميع الزجاجي وفحص الجودة."
              : "Systematic, transparent collision restoration executed with meticulous attention to detail."}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black text-blue-600 group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {locale === "ar" ? step.titleAr : step.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {locale === "ar" ? step.descAr : step.descEn}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {(locale === "ar" ? step.keyPointsAr : step.keyPointsEn).map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
