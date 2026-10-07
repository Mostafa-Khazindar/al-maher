"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MATERIALS } from "@/data/siteData";
import { Shield, Sparkles, CheckCircle, Award, Layers, FlaskConical } from "lucide-react";

import { asset } from "@/utils/paths";

export default function Materials() {
  const { locale } = useLanguage();

  return (
    <section id="materials" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
            <span>{locale === "ar" ? "المواد والتقنية المستخدمة" : "Materials & Technology"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                أنظمة طلاء <span className="blue-gradient-text">Spies Hecker الألمانية</span>
              </>
            ) : (
              <>
                Engineered with <span className="blue-gradient-text">Spies Hecker German Coatings</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "نستخدم علب وعبوات دهانات Spies Hecker الأصلية (Permahyd & Permasolid) لضمان حماية قصوى ضد أشعة الشمس الشديدة والحرارة في جدة."
              : "We utilize authentic German Spies Hecker product lines (Permahyd & Permasolid) engineered to withstand high temperatures and intense UV."}
          </p>
        </div>

        {/* Real Product Showcase Banner */}
        <div className="mb-12 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Photo of Spies Hecker Tins */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={asset("/materials/spies-hecker-products.jpg")}
                alt="منتجات وعبوات دهانات Spies Hecker في ورشة الماهر"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Technical Detail Specs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                ★ {locale === "ar" ? "منتجات الطلاء المعتمدة في مركز الماهر" : "Certified Workshop Refinish System"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Spies Hecker Permahyd & Permasolid
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {locale === "ar"
                  ? "تعتبر Spies Hecker إحدى أرقى العلامات الألمانية في صناعة طلاء السيارات عالمياً. نوفر نظام الطلاء المائي المتطور ذو المقاومة العالية للخدوش، مع طبقات حماية شفافة (Clear Coat 8055 / HS) تمنح لمعاناً زجاجياً ممتد المفعول."
                  : "Spies Hecker represents OEM-approved German paint engineering. Delivering pinpoint spectrophotometer pigment fidelity, high-solid clearcoats, and maximum UV endurance."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{locale === "ar" ? "نظام Permahyd المائي الصديق للبيئة" : "Permahyd Hi-TEC Waterborne System"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{locale === "ar" ? "طبقة لكر Permasolid عالية الصلابة" : "Permasolid High-Solid Clearcoat"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{locale === "ar" ? "مطابقة ألوان رقمية دقيقة لكود الوكالة" : "OEM Spectrophotometer Code Match"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{locale === "ar" ? "مقاومة فائقة للحرارة والبهتان" : "Extreme Heat & Yellowing Resistance"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed 3-Card Technical Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider">
                    {mat.brand}
                  </span>
                  <Layers className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {locale === "ar" ? mat.nameAr : mat.nameEn}
                </h4>
                <div className="text-xs text-slate-600 space-y-2">
                  <p>
                    <span className="font-bold text-slate-800">
                      {locale === "ar" ? "الغرض: " : "Purpose: "}
                    </span>
                    {locale === "ar" ? mat.purposeAr : mat.purposeEn}
                  </p>
                  <p className="pt-2 border-t border-slate-100 text-slate-500">
                    <span className="font-bold text-slate-700">
                      {locale === "ar" ? "أهميته للسيارة: " : "Why it matters: "}
                    </span>
                    {locale === "ar" ? mat.importanceAr : mat.importanceEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
