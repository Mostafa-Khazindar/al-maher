"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import { Wrench, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const { locale } = useLanguage();

  const values = [
    {
      titleAr: "جودة دهانات Spies Hecker",
      titleEn: "Spies Hecker Refinish Systems",
      descAr: "نعتمد أنظمة طلاء معتمدة ومقاومة لدرجات الحرارة العالية لضمان بقاء اللمعان وعدم بهتان اللون.",
      descEn: "Premium OEM coating technology ensuring maximum durability, color retention, and UV shielding.",
    },
    {
      titleAr: "سمكرة متقدمة وسحب دقيق",
      titleEn: "Precision Sheet Metal Straightening",
      descAr: "إرجاع الصاج لأبعاده المصنعية بدقة ودون تشويه أو إضعاف بنية الهيكل.",
      descEn: "Cold pulling and delicate contour shaping maintaining OEM structural integrity.",
    },
    {
      titleAr: "مطابقة ألوان رقمية دقيقة",
      titleEn: "Digital Color Formula Blending",
      descAr: "قراءة كود الصبغة ومطابقتها كمبيوترياً لضمان عدم وجود أي تفاوت بين القطعة المصلحة والسيارة.",
      descEn: "Computerized spectrophotometer matching eliminating panel shade variation.",
    },
    {
      titleAr: "بيئة أفران حرارية معزولة",
      titleEn: "Clean Climate-Controlled Booths",
      descAr: "رش وتجفيف في بيئة معزولة تماماً عن ذرات الغبار لضمان سطح ناعم كالمرايا.",
      descEn: "Positive pressure thermal spray booths eliminating particulate flaws and orange peel.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <Wrench className="w-3.5 h-3.5 text-blue-600" />
              <span>{locale === "ar" ? "عن مركز الماهر العالمي" : "About Al-Maher Al-Alami"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              {locale === "ar" ? (
                <>
                  معايير هندسية متقدمة في <span className="blue-gradient-text">سمكرة ودهان السيارات</span>
                </>
              ) : (
                <>
                  Precision Craftsmanship in <span className="blue-gradient-text">Collision Restoration</span>
                </>
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {locale === "ar"
                ? "يقع مركز الماهر العالمي في قلب صناعية عسفان بجدة (بلوك 1102 / 1103)، وقد أسس ليكون وجهة موثوقة لأصحاب السيارات الباحثين عن جودة استثنائية وإصلاح حقيقي لهياكل سياراتهم دون حلول ترقيعية أو تشويه لمعالم السيارة الأصلية."
                : "Located in Asfan Industrial Area (Block 1102 / 1103, Jeddah), Al-Maher was established to provide vehicle owners with authentic, uncompromising collision repair and factory-grade refinishing."}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-blue-700 block mb-1">
                {locale === "ar" ? "فلسفة العمل لدينا:" : "Our Core Philosophy:"}
              </span>
              {locale === "ar"
                ? "نحن نؤمن بأن دهان وسمكرة السيارة ليس مجرد تغطية للضرر، بل هو عمل هندسي يعيد توزيع القوى المتوازنة للهيكل ويمنح الطلاء عمقاً وحماية تدوم لسنوات طويلة."
                : "We believe collision restoration is a technical discipline restoring vehicle geometry, structural safety, and flawless deep optical finish."}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-600">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                {locale === "ar" ? "صناعية عسفان — بلوك 1102 / 1103" : "Asfan — Block 1102 / 1103"}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                0544792646
              </span>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {locale === "ar" ? val.titleAr : val.titleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {locale === "ar" ? val.descAr : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
