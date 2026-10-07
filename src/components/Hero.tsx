"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import { Calendar, MessageCircle, Award, Sparkles, ShieldCheck, CheckCircle } from "lucide-react";
import { asset } from "@/utils/paths";

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden bg-gradient-to-b from-[#f5f3ec] via-[#fbfaf6] to-[#fbfaf6] border-b border-[#e8e4d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Brand Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-start">
            {/* Official Clean Logo Badge */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#e8e4d8] shadow-sm inline-block">
              <img
                src={asset("/workshop/official-logo-transparent.png")}
                alt="الماهر العالمي - الشعار الرسمي"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-2xs">
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
              <div className="p-3.5 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">
                  {locale === "ar" ? "مطابقة ألوان رقمية" : "Digital Color Match"}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">
                  {locale === "ar" ? "أفران رش حرارية" : "Thermal Bake Booth"}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs flex items-center gap-2.5 col-span-2 sm:col-span-1">
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
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{locale === "ar" ? "واتساب (0544792646)" : "WhatsApp"}</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#e8e4d8] hover:border-blue-400 text-slate-700 font-bold text-sm transition-all shadow-2xs"
              >
                <span>{locale === "ar" ? "شاهد قبل وبعد" : "Before & After"}</span>
              </a>
            </div>
          </div>

          {/* Clean Real Automotive Workshop Bay Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="w-full relative rounded-3xl bg-[#f5f3ec] border border-[#e8e4d8] p-3 shadow-xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-inner group">
                <img
                  src={asset("/workshop/workshop-night-sign.jpg")}
                  alt="مقر وبايات مركز الماهر العالمي بعسفان"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Floating Badge */}
                <div className="absolute top-4 start-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#e8e4d8] text-blue-900 text-xs font-black shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span>{locale === "ar" ? "مقر الورشة الحقيقي — عسفان" : "Official Asfan Workshop"}</span>
                </div>

                <div className="absolute bottom-4 start-4 end-4 text-white">
                  <span className="text-[11px] font-mono text-blue-300 uppercase font-semibold">
                    {locale === "ar" ? "صناعية عسفان • بلوك 1102 / 1103" : "Asfan Industrial • Block 1102 / 1103"}
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    {locale === "ar" ? "ورشة متكاملة للسمكرة والدهان الحراري" : "Full Collision & Thermal Bake Facility"}
                  </h3>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#e8e4d8] flex items-center gap-2 text-slate-700 shadow-2xs">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold">{locale === "ar" ? "استعدال وسحب على البارد" : "Precision Cold Pulling"}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e8e4d8] flex items-center gap-2 text-slate-700 shadow-2xs">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{locale === "ar" ? "دهان Spies Hecker ألماني" : "Spies Hecker Coatings"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
