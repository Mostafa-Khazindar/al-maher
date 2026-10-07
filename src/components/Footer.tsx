"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

import { asset } from "@/utils/paths";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Banner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-slate-800/80 border border-slate-700">
          <div className="space-y-2 text-center lg:text-start">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {locale === "ar"
                ? "جاهز لإعادة سيارتك لأفضل حالاتها؟"
                : "Ready to Restore Your Vehicle to Factory Perfection?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {locale === "ar"
                ? "تفضل بزيارتنا في صناعية عسفان — بلوك 1102 / 1103، أو تواصل معنا مباشرة عبر واتساب (0544792646) للمعاينة والاستشارة."
                : "Visit our workshop at Asfan Block 1102 / 1103, or connect directly on WhatsApp (0544792646)."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#appointment"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition-all"
            >
              {locale === "ar" ? "طلب حجز موعد" : "Book Request"}
            </a>
            <a
              href="https://wa.me/966544792646"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (0544792646)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info with Official Clean Logo */}
          <div className="space-y-4">
            <div className="p-2 rounded-xl bg-white inline-block max-w-[210px] shadow-sm">
              <img
                src={asset("/workshop/official-logo-transparent.png")}
                alt="الماهر العالمي"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {locale === "ar" ? SITE_CONFIG.subTaglineAr : SITE_CONFIG.subTaglineEn}
            </p>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {locale === "ar" ? "أقسام الموقع" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {locale === "ar" ? "من نحن" : "About Us"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  {locale === "ar" ? "خدماتنا" : "Our Services"}
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-blue-400 transition-colors">
                  {locale === "ar" ? "المواد والتقنية (Spies Hecker)" : "Materials & Technology"}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  {locale === "ar" ? "مقارنة قبل وبعد (Cadillac ATS)" : "Before & After Case Study"}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">
                  {locale === "ar" ? "معرض الورشة الواقعي" : "Workshop Gallery"}
                </a>
              </li>
            </ul>
          </div>

          {/* Workshop Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {locale === "ar" ? "معلومات المركز" : "Workshop Info"}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{locale === "ar" ? SITE_CONFIG.locationAr : SITE_CONFIG.locationEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{locale === "ar" ? SITE_CONFIG.workingHoursAr : SITE_CONFIG.workingHoursEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0544792646</span>
              </div>
            </div>
          </div>

          {/* Standards & Transparency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {locale === "ar" ? "الالتزام بالشفافية" : "Transparency & Quality"}
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              {locale === "ar"
                ? "نحرص في مركز الماهر العالمي على الشفافية التامة مع عملائنا الكرام. كافة الصور المعروضة توثق أعمالاً حقيقية نُفذت في ورشتنا بصناعية عسفان."
                : "All case studies document authentic collision repair and refinishing executed at our Asfan facility."}
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 {SITE_CONFIG.nameAr} (Al-Maher Al-Alami Body Shop).{" "}
            {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </div>
          <div>
            <span>صناعية عسفان — جدة، المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
