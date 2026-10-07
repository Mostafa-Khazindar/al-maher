"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, Sparkles, X } from "lucide-react";

export default function WorkshopGallery() {
  const { locale } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: "/workshop/workshop-night-sign.jpg",
      titleAr: "واجهة ورشة الماهر العالمي ليلاً وشعار الهوية النيون الأصلي",
      titleEn: "Al-Maher Al-Alami Night Neon Signage & Active Bays",
      categoryAr: "مقر الورشة والهوية",
      categoryEn: "Facility & Signage",
      badgeAr: "شعار الورشة الرسمي",
      badgeEn: "Authentic Neon Logo",
    },
    {
      src: "/portfolio/cadillac-after-repaired.png",
      titleAr: "كاديلاك ATS بعد إتمام السمكرة والدهان بالكامل",
      titleEn: "Cadillac ATS Completed After Full Repair & Paint",
      categoryAr: "سيارات تم إصلاحها",
      categoryEn: "Completed Vehicle",
      badgeAr: "لوحة: ٧٤٣٣ ل ن ح",
      badgeEn: "Plate: 7433 LNH",
    },
    {
      src: "/workshop/workshop-day-1103.jpg",
      titleAr: "مظلات العمل الخارجية وقسم الاستقبال (صناعية عسفان — بلوك 1103)",
      titleEn: "Outdoor Work Canopies & Reception (Asfan Block 1103)",
      categoryAr: "مقر الورشة",
      categoryEn: "Facility Bays",
      badgeAr: "بلوك 1103 عسفان",
      badgeEn: "Block 1103 Asfan",
    },
    {
      src: "/materials/spies-hecker-products.jpg",
      titleAr: "أنظمة ومواد دهانات Spies Hecker الألمانية المعتمدة في المركز",
      titleEn: "Official Spies Hecker German Coatings & Clearcoats",
      categoryAr: "المواد والتقنية",
      categoryEn: "Refinish Materials",
      badgeAr: "Spies Hecker ألمانيا",
      badgeEn: "Made in Germany",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{locale === "ar" ? "معرض الصور الواقعي" : "Authentic Workshop Gallery"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                صور حية من <span className="blue-gradient-text">مقر الورشة وتجهيزاتها</span>
              </>
            ) : (
              <>
                Inside Look: <span className="blue-gradient-text">Our Facility & Results</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "استعرض صور الورشة الحقيقية في صناعية عسفان (بلوك 1102 / 1103) وشعار الماهر العالمي وبايات العمل والمواد المستخدمة."
              : "Explore genuine photography of our Asfan body shop facility, illuminated blue neon branding, and real client vehicles."}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.src)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.titleAr}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 start-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-blue-800 font-mono text-[11px] font-bold shadow-sm">
                    {locale === "ar" ? item.badgeAr : item.badgeEn}
                  </span>
                </div>

                {/* Hover Quick Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 bg-white flex-1 flex flex-col justify-between border-t border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">
                    {locale === "ar" ? item.categoryAr : item.categoryEn}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                    {locale === "ar" ? item.titleAr : item.titleEn}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 end-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
