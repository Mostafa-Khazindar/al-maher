"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import { Calendar, MessageCircle, ChevronDown, Award, Sparkles, ShieldCheck, MapPin } from "lucide-react";

// Load 3D Studio
const CarCanvas = dynamic(() => import("./CarCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-slate-100 rounded-2xl border border-slate-200">
      <div className="flex flex-col items-center gap-3 text-slate-500">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-semibold">تهيئة استوديو العرض...</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 workshop-light-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Brand Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-start">
            {/* Official Clean Logo Badge */}
            <div className="p-2 sm:p-3 rounded-2xl bg-white border border-blue-100 shadow-sm inline-block">
              <img
                src="/workshop/official-logo-transparent.png"
                alt="الماهر العالمي - الشعار الرسمي"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>
                {locale === "ar"
                  ? "صناعية عسفان — بلوك 1102 / 1103، جدة"
                  : "Asfan Industrial Area, Block 1102 / 1103, Jeddah"}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
                {locale === "ar" ? (
                  <>
                    <span className="blue-gradient-text block text-5xl sm:text-6xl font-black mb-1">
                      الماهر العالمي
                    </span>
                    احترافية في إصلاح هيكل سيارتك وإعادتها كما يجب
                  </>
                ) : (
                  <>
                    <span className="blue-gradient-text block text-5xl sm:text-6xl font-black mb-1">
                      AL-MAHER AL-ALAMI
                    </span>
                    Precision Automotive Body Repair & Refinishing
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                {locale === "ar"
                  ? "مركز متخصص في سمكرة وهياكل ودهان السيارات بأعلى المعايير، مطابقة ألوان احترافية واستخدام دهانات Spies Hecker الألمانية في صناعية عسفان."
                  : "State-of-the-art collision repair, structural sheet metal restoration, and German Spies Hecker refinishing systems in Jeddah."}
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-1">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">
                  {locale === "ar" ? "مطابقة ألوان رقمية" : "Digital Color Match"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">
                  {locale === "ar" ? "أفران رش حرارية" : "Thermal Bake Booth"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">
                  Spies Hecker
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href="#appointment"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 transition-all transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{locale === "ar" ? "احجز موعد كشف" : "Book Inspection"}</span>
              </a>

              <a
                href={`https://wa.me/966544792646?text=${encodeURIComponent(
                  locale === "ar"
                    ? "السلام عليكم، أود استشارة ورشة الماهر العالمي بخصوص سمكرة ودهان سيارتي."
                    : "Hello, I would like to consult Al-Maher Al-Alami regarding car repair."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-700 font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{locale === "ar" ? "واتساب (0544792646)" : "WhatsApp"}</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-blue-400 text-slate-700 font-bold text-sm transition-all shadow-sm"
              >
                <span>{locale === "ar" ? "شاهد قبل وبعد" : "Before & After"}</span>
              </a>
            </div>
          </div>

          {/* 3D Interactive Presentation Stage (Working Bright Studio with Color Selector) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="w-full relative rounded-3xl bg-white border border-slate-200 p-3 shadow-xl overflow-hidden box-blue-glow">
              <div className="flex items-center justify-between pb-2 px-2 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span>{locale === "ar" ? "استوديو العرض التفاعلي للدهان" : "Interactive 3D Paint Studio"}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  {locale === "ar" ? "تحكم تفاعلي ثلاثي الأبعاد" : "3D WebGL Studio"}
                </span>
              </div>

              {/* 3D Canvas */}
              <div className="mt-2">
                <CarCanvas paintColor="#1d4ed8" />
              </div>
            </div>

            <p className="text-[12px] text-slate-500 mt-3 text-center">
              {locale === "ar"
                ? "يمكنك تدوير السيارة بالماوس وتغيير درجات ألوان الدهان الحراري وتجربتها مباشرة"
                : "Rotate the car and preview thermal bake metallic color finishes"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
