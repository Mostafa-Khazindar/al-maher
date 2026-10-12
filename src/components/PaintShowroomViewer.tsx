"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Palette,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Eye,
  Layers,
  Wrench,
  Flame,
  Maximize2
} from "lucide-react";
import { asset } from "@/utils/paths";

interface PaintFinish {
  id: string;
  nameAr: string;
  nameEn: string;
  hex: string;
  finishTypeAr: string;
  finishTypeEn: string;
  descriptionAr: string;
  descriptionEn: string;
  code: string;
  previewImage: string;
  featuresAr: string[];
  featuresEn: string[];
}

export default function PaintShowroomViewer() {
  const { locale } = useLanguage();

  const paintFinishes: PaintFinish[] = [
    {
      id: "royal-blue",
      nameAr: "أزرق الماهر الملكي النيون",
      nameEn: "Al-Maher Royal Neon Blue",
      hex: "#1d4ed8",
      finishTypeAr: "ميتاليك لؤلؤي متعدد الطبقات (Pearl Metallic)",
      finishTypeEn: "Multi-layer High Pearl Metallic",
      code: "AM-BL-01",
      previewImage: asset("/workshop/workshop-day-1103.jpg"),
      descriptionAr: "اللون التوقيعي لمركز الماهر العالمي، مستوحى من هوية الورشة مع عمق لوني استثنائي ولمعان زجاجي ألماني.",
      descriptionEn: "Signature Al-Maher deep vibrant blue with intense optical flake density and ceramic clearcoat protection.",
      featuresAr: ["كثافة بريق ميتاليك عالية", "عازل حراري ومقاوم لأشعة UV", "طبقة لكّر Permasolid زجاجية"],
      featuresEn: ["Ultra-dense metallic luster", "UV and heat oxidation shield", "Permasolid ceramic glass clearcoat"],
    },
    {
      id: "deep-purple",
      nameAr: "أرجواني كاديلاك ATS الملوكي",
      nameEn: "Cadillac ATS Imperial Purple",
      hex: "#3b1e54",
      finishTypeAr: "ميتاليك كريستالي مخصص (Deep Crystal)",
      finishTypeEn: "OEM Deep Crystal Metallic",
      code: "CAD-ATS-99",
      previewImage: asset("/portfolio/cadillac-after-matched.jpg"),
      descriptionAr: "الصبغة الدقيقة لكاديلاك ATS التي تم رشها ومطابقتها 100% بالفرن الحراري لورشة الماهر بعسفان.",
      descriptionEn: "Authentic Cadillac ATS luxury refinish formulated with 100% spectrophotometer accuracy inside our bake booth.",
      featuresAr: ["مطابقة تامة 100% لكود الوكالة", "خلو تام من تموجات قشرة البرتقال", "حماية مضاعفة لمناطق الصدمة"],
      featuresEn: ["100% OEM factory match", "Zero orange-peel mirror level", "Reinforced quarter panel barrier"],
    },
    {
      id: "obsidian-black",
      nameAr: "أسود أوبسيديان فانتوم",
      nameEn: "Obsidian Phantom Deep Black",
      hex: "#0f172a",
      finishTypeAr: "أسود بيانو فائق اللمعان والعمق",
      finishTypeEn: "Piano Mirror Deep Gloss",
      code: "SP-BLK-04",
      previewImage: asset("/workshop/workshop-night-sign.jpg"),
      descriptionAr: "سواد فاحم بلمعان المرآة الزجاجية، يعكس نقاء أفران الرش الحرارية المعزولة بالكامل عن ذرات الغبار.",
      descriptionEn: "Flawless jet-black depth engineered inside dust-sealed thermal booths for showroom-grade reflection.",
      featuresAr: ["انعكاس مرآتي فائق النقاء", "معالجة عزل الصدأ والرطوبة", "ضمان ثبات اللون دون بهتان"],
      featuresEn: ["Pure mirror reflective depth", "Anti-corrosion sealed base", "Zero fade color guarantee"],
    },
    {
      id: "crystal-red",
      nameAr: "أحمر قرمزي كريستالي رياضي",
      nameEn: "Crystal Sport Crimson Red",
      hex: "#991b1b",
      finishTypeAr: "صبغة ثلاثية الطبقات (Tri-Coat Tint)",
      finishTypeEn: "Tri-Coat Tinted Clearcoat",
      code: "SH-RED-77",
      previewImage: asset("/materials/spies-hecker-products.jpg"),
      descriptionAr: "نظام طلاء ثلاثي المراحل يمنح السيارات الرياضية توهجاً لافتاً تحت أشعة الشمس المباشرة.",
      descriptionEn: "High-end 3-stage tint coat delivering dramatic depth and vibrant brilliance in direct sunlight.",
      featuresAr: ["تدرج لوني عميق مع زوايا الضوء", "حماية ألمانية من Spies Hecker", "مقاوم لخدوش الغسيل الدقيقة"],
      featuresEn: ["Dynamic chromatic angle shifts", "German Spies Hecker system", "Micro-scratch resilient finish"],
    },
    {
      id: "silver-titanium",
      nameAr: "فضي تيتانيوم مصقول",
      nameEn: "Liquid Titanium Metallic",
      hex: "#64748b",
      finishTypeAr: "ميتاليك سائل عاكس (Liquid Metal)",
      finishTypeEn: "Liquid Metal High-Reflective",
      code: "SH-SIL-12",
      previewImage: asset("/portfolio/cadillac-after-repaired.png"),
      descriptionAr: "لون كلاسيكي عصري يخفي الأتربة والخدوش السطحية ويمنح خطوط الهيكل وضوحاً هندسياً بارزاً.",
      descriptionEn: "Modern architectural metallic accentuating body lines and sharp aerodynamic contours.",
      featuresAr: ["إبراز خطوط وانحناءات الصاج", "تحمل درجات حرارة الصيف العالية", "سهولة فائقة في التنظيف"],
      featuresEn: ["Accentuated body contour lines", "Superior summer heat handling", "Effortless hydrophobic cleaning"],
    },
  ];

  const [activeFinish, setActiveFinish] = useState<PaintFinish>(paintFinishes[0]);
  const [activeBoothMode, setActiveBoothMode] = useState<"standard" | "bake" | "inspection">("standard");

  return (
    <section id="paint-studio" className="py-24 bg-[#fbfaf6] border-t border-[#e8e4d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Palette className="w-3.5 h-3.5 text-blue-600" />
            <span>{locale === "ar" ? "استوديو الطلاء والدهان التفاعلي" : "Interactive Refinish Studio"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                محاكاة <span className="blue-gradient-text">الدهان الحراري وأنظمة Spies Hecker</span>
              </>
            ) : (
              <>
                Digital Preview: <span className="blue-gradient-text">Thermal Bake Coatings</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "استكشف درجات الألوان الميتاليك واللؤلؤية المعتمدة وتقنية الرش بالفرن الحراري التي نطبقها على سيارات عملائنا في عسفان."
              : "Preview premium metallic formulas, thermal bake conditions, and certified German Spies Hecker refinish systems."}
          </p>
        </div>

        {/* Master Studio Preview Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#f5f3ec] border border-[#e8e4d8] p-4 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Studio Screen / Preview */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-[#e8e4d8] shadow-inner group">
                {/* Background vehicle / booth showcase photo */}
                <img
                  src={activeFinish.previewImage}
                  alt={activeFinish.nameAr}
                  className="w-full h-full object-cover transition-all duration-700"
                />

                {/* Dynamic Lighting & Color Glaze Overlay */}
                <div
                  className="absolute inset-0 mix-blend-color opacity-45 pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: activeFinish.hex }}
                />

                {/* Booth Atmosphere Filter */}
                {activeBoothMode === "bake" && (
                  <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay pointer-events-none transition-all duration-500 animate-pulse" />
                )}
                {activeBoothMode === "inspection" && (
                  <div className="absolute inset-0 bg-blue-400/15 mix-blend-soft-light pointer-events-none transition-all duration-500" />
                )}

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge: Active Code & System */}
                <div className="absolute top-4 start-4 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white text-xs font-black shadow-md flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: activeFinish.hex }}
                    />
                    <span className="font-mono">{activeFinish.code}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                    Spies Hecker
                  </span>
                </div>

                {/* Top End: Booth Status */}
                <div className="absolute top-4 end-4">
                  <div className="px-3 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-mono border border-slate-700 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeBoothMode === "bake"
                          ? "bg-amber-400 animate-ping"
                          : activeBoothMode === "inspection"
                          ? "bg-cyan-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <span>
                      {activeBoothMode === "bake"
                        ? locale === "ar" ? "وضع الفرن: 60°C حراري" : "Booth: 60°C Bake"
                        : activeBoothMode === "inspection"
                        ? locale === "ar" ? "إضاءة الفحص الدقيق CRI 98+" : "CRI 98+ Inspection"
                        : locale === "ar" ? "ضوء الاستوديو الطبيعي" : "Studio Daylight"}
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay: Finish Name & Description */}
                <div className="absolute bottom-4 start-4 end-4 text-white">
                  <span className="text-[11px] font-mono text-blue-300 font-semibold uppercase block">
                    {locale === "ar" ? activeFinish.finishTypeAr : activeFinish.finishTypeEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    {locale === "ar" ? activeFinish.nameAr : activeFinish.nameEn}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-lg leading-relaxed line-clamp-2">
                    {locale === "ar" ? activeFinish.descriptionAr : activeFinish.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Booth Mode Switchers */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveBoothMode("standard")}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeBoothMode === "standard"
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white text-slate-700 border-[#e8e4d8] hover:border-blue-400"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{locale === "ar" ? "الضوء الطبيعي" : "Daylight"}</span>
                </button>

                <button
                  onClick={() => setActiveBoothMode("bake")}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeBoothMode === "bake"
                      ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                      : "bg-white text-slate-700 border-[#e8e4d8] hover:border-amber-400"
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>{locale === "ar" ? "الفرن الحراري" : "Thermal Booth"}</span>
                </button>

                <button
                  onClick={() => setActiveBoothMode("inspection")}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeBoothMode === "inspection"
                      ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                      : "bg-white text-slate-700 border-[#e8e4d8] hover:border-cyan-400"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{locale === "ar" ? "فحص اللمعان" : "Gloss Check"}</span>
                </button>
              </div>
            </div>

            {/* Finish Selector & Specifications */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  {locale === "ar" ? "اختر لون الطلاء المعتمد:" : "Select Paint Finish:"}
                </span>

                <div className="space-y-2">
                  {paintFinishes.map((f) => {
                    const isSelected = activeFinish.id === f.id;
                    return (
                      <div
                        key={f.id}
                        onClick={() => setActiveFinish(f)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-2xs ${
                          isSelected
                            ? "bg-white border-blue-600 ring-2 ring-blue-500/20 shadow-md"
                            : "bg-white/80 border-[#e8e4d8] hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-7 h-7 rounded-full shadow-inner border-2 border-white shrink-0"
                            style={{ backgroundColor: f.hex }}
                          />
                          <div>
                            <span className="text-xs font-bold text-slate-900 block">
                              {locale === "ar" ? f.nameAr : f.nameEn}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {f.code} • {locale === "ar" ? f.finishTypeAr : f.finishTypeEn}
                            </span>
                          </div>
                        </div>

                        {isSelected && (
                          <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technical Qualities Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#e8e4d8] shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>{locale === "ar" ? "مواصفات تطبيق هذا اللون:" : "Technical Specifications:"}</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    OEM SPEC
                  </span>
                </div>

                <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                  {(locale === "ar" ? activeFinish.featuresAr : activeFinish.featuresEn).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <a
                href="#appointment"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Palette className="w-4 h-4 text-white" />
                <span>
                  {locale === "ar"
                    ? `طلب استشارة وتقدير لدهان ${activeFinish.nameAr}`
                    : `Inquire for ${activeFinish.nameEn}`}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
